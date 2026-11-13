// usage: node shoot.js <baseUrl> <outDir> [paths comma-separated]
// For each path: full-page PNG at desktop (1440x900) and mobile (390x844), plus viewport-sized
// "segment" shots every screenful (max 10) so details stay legible. Reduced motion is ON so
// scroll-reveal animations are settled. baseUrl may be http://... or file:///abs/dir
const { chromium } = require('playwright');
const fs = require('fs');
(async () => {
  const [base, out, p] = process.argv.slice(2);
  const paths = (p || 'en/,ar/,en/about/,en/treatments/,en/treatments/robotic-surgery/,en/journey/,en/second-opinion/,en/media/,en/resources/,en/links/,en/privacy/').split(',');
  fs.mkdirSync(out, { recursive: true });
  const b = await chromium.launch();
  for (const path of paths) for (const [name, vw, vh] of [['desktop', 1440, 900], ['mobile', 390, 844]]) {
    const page = await b.newPage({ viewport: { width: vw, height: vh }, reducedMotion: 'reduce' });
    await page.goto(base.replace(/\/$/, '') + '/' + path, { waitUntil: 'networkidle' });
    await page.waitForTimeout(400);
    const stem = `${out}/${(path.replace(/\/$/, '').replace(/[\/.]/g, '_') || 'root')}-${name}`;
    await page.screenshot({ path: stem + '-full.png', fullPage: true });
    const h = await page.evaluate(() => document.documentElement.scrollHeight);
    const n = Math.min(10, Math.ceil(h / vh));
    for (let i = 0; i < n; i++) {
      await page.evaluate((y) => window.scrollTo(0, y), i * vh);
      await page.waitForTimeout(250);
      await page.screenshot({ path: `${stem}-seg${String(i + 1).padStart(2, '0')}.png` });
    }
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
    console.log(stem, 'height', h, 'segments', n, overflow ? 'HORIZONTAL-OVERFLOW' : 'no-overflow');
    await page.close();
  }
  await b.close();
})();
