# Handover: dralhazmi.com redesign (13 November 2026)

Read this file first. It is written for a fresh Claude Code session with no memory of the earlier work.

## The task

Dr. Alaa Alhazmi asked to "revise my website, do a gap check, and reformat it to assemble the most stunning and eye-pleasing website there is while maintaining its key objectives."

Done so far: a deep gap check (101 confirmed findings) and four competing homepage mockups, scored by three judges. **Nothing in `src/` or on the live site has been changed for the redesign.**

## Waiting on the owner (ask before building)

1. **Which design to build:** A, B, C or D. Recommended: A with the grafts listed below. He has seen the four sheets in `04_Mockup_Sheets/` but has not answered.
2. **Wording fixes:** whether the compliance and Arabic wording corrections (see "Wording changes" below) go in the same draft pull request as the redesign, or in a separate one.

## Where things are

| Item | Location |
|---|---|
| Repository | GitHub `alaa1398/dralhazmi.com`, default branch `main`, deployed by GitHub Pages on every push to `main` (`.github/workflows/deploy.yml`) |
| This handover | Branch `claude/practical-allen-h12a73`, folder `handover/2026-11-13_Redesign_Handover/`. It is NOT on `main`. Do not merge this folder into `main`; fetch the branch and read it. |
| Live site state | `main` at commit `e1708d8` (PR #23). Draft mode is off; the site is indexed. |
| Search engines | Google Search Console and Bing Webmaster Tools are verified and have read the sitemap (28 URLs). |

## Files in this folder

See `README.md`. In short: `02` = every confirmed gap finding with its fix; `03` = the four working mockups (open `index.html`, `ar.html`, `treatment.html` in a browser); `04` = one overview image per mockup; `05` = raw results; `06` = screenshot helper; `07` = judges' full notes and the design research.

## The site

- Astro 7 static site, bilingual English and Arabic (RTL), routes under `src/pages/[lang]/`.
- Key files: `src/layouts/Base.astro` (head, header, footer, contact bar), `src/styles/global.css` (entire design system), `src/data/site.ts` (shared copy, nav, treatments), `src/pages/[lang]/index.astro` (homepage, 15 FAQs with sources), plus `about`, `treatments/index`, `treatments/[slug]`, `journey`, `second-opinion`, `media` (titled "Learn"), `resources`, `links`, `privacy`. `team.astro` is intentionally hidden (returns no paths). `src/pages/index.astro` is the language redirect. `public/faisal/` holds two static noindex pages required for a Google app review; do not restyle or reword their Google API sections.
- Build: local Node 22.22 is too old. Use `timeout 300 npx -y node@24 node_modules/.bin/astro build`.
- The cloud sandbox cannot reach dralhazmi.com. Verify on the local build (`python3 -m http.server -d dist`) with Playwright (preinstalled; do not run `playwright install`).
- Fonts today: `@fontsource` Inter and Newsreader (English), IBM Plex Sans Arabic and Amiri (Arabic), self-hosted.

## Rules the owner has set (do not break; do not propose removing)

1. Saudi Ministry of Health advertising rules: no testimonials or reviews, no before/after images, no superlatives or guarantees ("best", "leading", "painless"), no "free", no price promotions.
2. No robotic vendor or product names. Say "robotic" generically.
3. No "book" or "appointment" wording. Buttons say "Contact" / "Contact on WhatsApp" (Arabic: تواصل). WhatsApp prefills: "Contact request: " and "Contact request (second opinion): ". Contact channels are WhatsApp and phone +966 50 970 4040 only. Calls are answered by "Faisal", an AI assistant, and this must stay disclosed.
4. Never ask patients to send medical reports or records. The site asks for a question only; the team asks for consent first if reports are needed.
5. Dr. Alhazmi no longer works at King Faisal Specialist Hospital & Research Centre. It appears only as past experience. No current workplace is stated (he is being recruited), so no address, hours, map or fees. His robotic practice is described in the past tense. When he sends his new facility name (English and Arabic), city and hours, add them and return those lines to the present tense.
6. Only one real photo exists: `src/assets/dr-alaa-alhazmi.jpg`. No stock or AI photos of people, no invented statistics, awards, logos or credentials. Abstract decoration is fine.
7. Approved wording of medical content, FAQs and their sources, the privacy notice and credentials is not rewritten for style. Layout, type, colour, motion and components are free to change.
8. WCAG 2.2 AA, keyboard support, reduced motion respected, no horizontal overflow at 375px, real RTL.
9. Static, fast, private: no frameworks, no third-party requests, no tracking (the privacy page promises this).
10. Memberships: he is a member of SASMBS only among the societies on the resources page. Do not list others as memberships.
11. Ramadan FAQ: shows both published recommendations and his own (6 to 12 months). Return-to-work answer keeps the ASMBS figure (1 to 2 weeks).
12. The privacy page follows Saudi PDPL Articles 12 and 13 and says "Effective 9 November 2026". Legal review by a Saudi data-protection lawyer is still open on his side.

## How he wants the work done

- Every change goes through a pull request from the working branch into `main`, then merge, then confirm the "Deploy to GitHub Pages" run succeeded. For the redesign specifically: open a DRAFT pull request, send screenshots, and merge only after he approves.
- "Always validate back and forth": rebuild, run axe-core (0 violations is the baseline), check overflow at 375px, screenshot both languages before reporting.
- His reply preferences (they load automatically from his account): very concise, answer first, cite sources, label locations (Cloud clone, GitHub `owner/repo`, My PC), end multi-location replies with a "Where things stand" table, explain any shell command he must run himself.
- Tavily: ask him before using it (he topped it up but wants to be asked). Firecrawl was out of credits. Exa and TinyFish work.

## Design panel result

Scores are the sum of three judges (visual craft, patient trust, engineering), each out of 100.

| Key | Direction | Total | Summary |
|---|---|---|---|
| `a-quiet-luxury` | Quiet luxury editorial | 245 | Winner on craft and patient trust. An evolution of the current look. Fails reflow at 320px and has 2 minor axe issues, both quick to fix. |
| `c-arabic-first` | Arabic-first modern Saudi | 234 | Best Arabic page and best engineering (0 axe violations, lightest). English page reads as corporate. |
| `b-precision-dark` | Precision dark | 220 | Most striking hero. Judged the wrong tone for anxious patients. |
| `d-human-warmth` | Human warmth | 212 | Kindest tone and best section order. Reads as a wellness clinic. |

**Recommended build: A, with these grafts** (full list in `07`):
- From C: the Arabic display typeface (light Alexandria) for Arabic headlines, brass as a second decorative hairline colour, the simple font stack, Arabic-as-default CSS so few overrides are needed.
- From B: a real mobile menu button (aria-expanded, works without JavaScript), the BMI check drawn as a ruler with 25/30/35 ticks, the bottom contact bar that survives 320px, the risk note as a bordered callout.
- From D: the journey as a connected path, "Without surgery" and "With surgery" as two equal panels, the italic accent line in the hero.
- Needs owner approval before doing: reordering homepage sections (paths and BMI before the robotic band); grouping the 15 FAQs under three new headings.

Performance budget from the audit: English homepage at or under about 300 KB, Arabic at or under about 450 KB including fonts. Today Arabic pages download 399 KB of fonts; fix this in the redesign (subset, drop Amiri Bold, do not load Arabic fonts on English pages for one word).

## Gap check result

101 confirmed findings in `02_Confirmed_Gap_Findings.md`, each with location and fix: visual design 25, Arabic 22, accessibility 16, search/technical 14, performance 13, claims/compliance 11.

Fix as part of the redesign without asking (no approved wording changes): all visual, accessibility, performance and technical items.

### Wording changes (show the owner the exact before and after)

- Three sentences still offer robotic surgery in the present tense (`index.astro` lines 62 and 103, `site.ts` line 163).
- The Arabic second-opinion page still uses "clinic" and "appointment" wording.
- The word "leading" appears in visible copy and meta descriptions (resources page).
- Arabic AI disclosure for Faisal is weaker than the English.
- The other Arabic corrections (22 in total) and the low-severity claims items (insurance BMI clause, Ramadan qualifier, credential wording consistency, "no forms" vs the BMI calculator in the privacy notice).

## Suggested next steps for the new session

1. Fetch this branch and read `01`, then skim `02` and `07`.
2. Ask the owner the two open questions above.
3. Build the chosen design across all page types on a working branch; port the mockup's `styles.css` and markup into `Base.astro`, `global.css` and the page files; keep all copy from `src/`.
4. Verify: build, axe-core on every page in both languages, overflow at 375px and 320px, keyboard pass, page weight, screenshots of every page type in both languages.
5. Open a draft pull request, send screenshots, wait for approval, then merge and confirm the deploy.

## Other open items on the owner's side

- New facility details (see rule 5).
- Photos (robotic console, clinic) and the robotic-operations count.
- Legal review of the privacy notice; whether SDAIA registration applies.
- AI team members page: he wants to list his AI agents. Advice given: a separate, clearly labelled "AI assistants" section, no human photos, administrative tasks only. Waiting for each agent's name and role.
- Update "Updated November 2026" whenever medical content changes.
