// Site checks on the built site in dist/: accessibility (axe-core), horizontal
// overflow, header nav on one row, guide print length, page weight and
// third-party requests. Run `npm run build` first, then `npm run check`.
// Needs a local Chrome or Edge; set CHROME_PATH if it is not found.
import { createServer } from 'node:http';
import { readFile, readdir, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, extname, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import puppeteer from 'puppeteer-core';

const DIST = fileURLToPath(new URL('../dist/', import.meta.url));
const AXE = await readFile(createRequire(import.meta.url).resolve('axe-core/axe.min.js'), 'utf8');

// Pages left out: /faisal/ holds two Google app-review pages that are not part of the site design.
const SKIP = [/^\/faisal\//];
const AXE_TAGS = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'];
const BUDGET_KB = { '/en/': 300, '/ar/': 450 }; // CLAUDE.md: homepage weight, fonts included
const GUIDE = /^\/(en|ar)\/learn\/[^/]+\/$/; // one guide = one A4 sheet, both sides
const MAX_PRINT_PAGES = 2;

const CHROME_CANDIDATES = [
  process.env.CHROME_PATH,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
].filter(Boolean);

const TYPES = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript',
  '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp',
  '.avif': 'image/avif', '.woff2': 'font/woff2', '.woff': 'font/woff', '.xml': 'application/xml',
  '.json': 'application/json', '.ico': 'image/x-icon', '.txt': 'text/plain', '.pdf': 'application/pdf',
};

async function listPages(dir = DIST) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await listPages(full)));
    else if (entry.name === 'index.html') {
      const rel = relative(DIST, dir).split(sep).join('/');
      out.push(rel ? `/${rel}/` : '/');
    }
  }
  return out.filter((p) => !SKIP.some((re) => re.test(p))).sort();
}

function serve() {
  const server = createServer(async (req, res) => {
    let path = decodeURIComponent(new URL(req.url, 'http://x').pathname);
    if (path.endsWith('/')) path += 'index.html';
    const file = join(DIST, path);
    try {
      if (!file.startsWith(DIST)) throw new Error('outside dist');
      if ((await stat(file)).isDirectory()) throw new Error('directory');
      res.writeHead(200, { 'content-type': TYPES[extname(file)] ?? 'application/octet-stream' });
      res.end(await readFile(file));
    } catch {
      res.writeHead(404).end('not found');
    }
  });
  return new Promise((resolve) => server.listen(0, '127.0.0.1', () => resolve(server)));
}

const failures = [];
const fail = (page, check, detail) => failures.push({ page, check, detail });

async function run() {
  if (!existsSync(join(DIST, 'index.html'))) throw new Error('dist/ not found: run `npm run build` first');
  const executablePath = CHROME_CANDIDATES.find((p) => existsSync(p));
  if (!executablePath) throw new Error('No Chrome or Edge found: set CHROME_PATH');

  const pages = await listPages();
  const server = await serve();
  const origin = `http://127.0.0.1:${server.address().port}`;
  const browser = await puppeteer.launch({ executablePath, headless: true });
  const tab = await browser.newPage();
  await tab.setCacheEnabled(false); // every page load counts its full weight

  const thirdParty = new Set();
  tab.on('request', (r) => {
    const u = r.url();
    if (!u.startsWith(origin) && !u.startsWith('data:') && !u.startsWith('blob:')) thirdParty.add(u);
  });

  const open = async (path, width, height = 900) => {
    await tab.setViewport({ width, height });
    thirdParty.clear();
    await tab.goto(origin + path, { waitUntil: 'networkidle0' });
    await tab.evaluate(() => document.fonts.ready);
  };
  // Uncompressed bytes of the page and everything it loaded (fonts included).
  const pageBytes = () => tab.evaluate(() =>
    [...performance.getEntriesByType('navigation'), ...performance.getEntriesByType('resource')]
      .reduce((sum, e) => sum + e.decodedBodySize, 0));

  const weights = {};
  let axeRuns = 0;
  for (const path of pages) {
    for (const width of [1440, 375]) {
      await open(path, width);
      if (width === 1440 && BUDGET_KB[path]) weights[path] = Math.round((await pageBytes()) / 1024);
      if (width === 1440) for (const u of thirdParty) fail(path, 'third-party request', u);

      await tab.addScriptTag({ content: AXE });
      const result = await tab.evaluate((tags) => axe.run(document, { runOnly: { type: 'tag', values: tags } }), AXE_TAGS);
      axeRuns++;
      for (const v of result.violations) {
        fail(path, `axe ${width}px`, `${v.id} (${v.impact}): ${v.nodes.length} node(s), e.g. ${v.nodes[0]?.target.join(' ')}`);
      }

      if (width === 1440) {
        const rows = await tab.evaluate(() => {
          const links = [...document.querySelectorAll('#nav > a')];
          return new Set(links.map((a) => Math.round(a.getBoundingClientRect().top))).size;
        });
        if (rows > 1) fail(path, 'nav wrap 1440px', `header links on ${rows} rows`);
      }
    }
    for (const width of [375, 320]) {
      await open(path, width);
      const over = await tab.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
      if (over > 0) fail(path, `overflow ${width}px`, `page is ${over}px wider than the viewport`);
    }
    if (GUIDE.test(path)) {
      await open(path, 1440);
      const pdf = await tab.pdf({ format: 'A4', preferCSSPageSize: true, printBackground: true });
      const count = (Buffer.from(pdf).toString('latin1').match(/\/Type\s*\/Page[^s]/g) ?? []).length;
      if (count > MAX_PRINT_PAGES) fail(path, 'print', `${count} A4 pages (limit ${MAX_PRINT_PAGES})`);
      else console.log(`print ${path}: ${count} A4 page(s)`);
    }
  }

  for (const [path, limit] of Object.entries(BUDGET_KB)) {
    const kb = weights[path];
    console.log(`weight ${path}: ${kb} KB (budget ${limit} KB)`);
    if (kb > limit) fail(path, 'page weight', `${kb} KB, budget ${limit} KB`);
  }

  await browser.close();
  server.close();

  console.log(`\nChecked ${pages.length} pages (${axeRuns} axe runs, axe-core ${JSON.parse(await readFile(createRequire(import.meta.url).resolve('axe-core/package.json'), 'utf8')).version}).`);
  if (failures.length) {
    console.log(`${failures.length} problem(s):`);
    for (const f of failures) console.log(`  ${f.page}  [${f.check}]  ${f.detail}`);
    process.exitCode = 1;
  } else {
    console.log('All checks passed.');
  }
}

run().catch((e) => { console.error(e.message); process.exitCode = 2; });
