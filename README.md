# dralhazmi.com

Bilingual (English/Arabic) website of Dr. Alaa Alhazmi, built with [Astro](https://astro.build) and hosted on GitHub Pages. `dralaaalhazmi.com` redirects here.

## Structure

- `src/data/site.ts`: contact details, social links, navigation, treatments, and the `DRAFT` switch.
- `src/layouts/Base.astro`: header, footer, language switch, mobile contact bar.
- `src/pages/index.astro`: entry page; sends Arabic-language browsers to `/ar/`, everyone else to `/en/`.
- `src/pages/[lang]/`: every page, with English and Arabic text side by side.
- `.github/workflows/deploy.yml`: builds and publishes to GitHub Pages on push to `main`.

## Commands

| Command | Action |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Local preview at http://localhost:4321 |
| `npm run build` | Build the site to `./dist/` |
| `npm run check` | Check the build in `./dist/`: axe-core accessibility (WCAG 2.2 A and AA) at 1440 and 375 px, overflow at 375 and 320 px, header nav on one row, guides print on one A4 sheet, homepage weight, no third-party requests. Needs a local Chrome or Edge (`CHROME_PATH` if not found) |

## Before launch

Set `DRAFT = false` in `src/data/site.ts` only after the content is approved. While it is `true`, every page shows a review banner and asks search engines not to index it.

Files kept off GitHub are listed in [`FILES.md`](FILES.md).
