# dralhazmi.com

Bilingual (English, Arabic RTL) static website for Dr. Alaa Alhazmi, built with Astro and deployed by GitHub Pages on every push to `main`. See `AGENTS.md` for Astro dev-server notes.

## Key files

- `src/data/site.ts`: shared copy, navigation, treatments, UI strings.
- `src/layouts/Base.astro`: head, header, footer, contact bar.
- `src/styles/global.css`: the whole design system (tokens, components, both languages).
- `src/components/`: `PageHero`, `ContactBox`, `TreatmentList`, `Arcs`, `Wa`.
- `src/pages/[lang]/`: one file per page; `team.astro` is intentionally hidden.
- `public/faisal/`: two static noindex pages required for a Google app review. Do not restyle or reword their Google API sections.

## Build and check

- Build: `timeout 300 npx -y node@24 node_modules/.bin/astro build` (Node 22.22 is too old).
- Preview: `python3 -m http.server -d dist`.
- Before reporting: rebuild, run axe-core on every page in both languages (baseline 0 violations), check no horizontal overflow at 375px and 320px, screenshot both languages.
- Budget: English homepage at or under about 300 KB, Arabic at or under about 450 KB, fonts included.

## Workflow

- Every change goes through a pull request into `main`; after merge confirm the "Deploy to GitHub Pages" run succeeded.
- Design changes: draft pull request with screenshots, merge only after the owner approves.
- Show the owner the exact before and after for any wording change.

## Content rules (owner's; do not break or propose removing)

1. Saudi Ministry of Health advertising rules: no testimonials or reviews, no before/after images, no superlatives or guarantees ("best", "leading", "painless"), no "free", no price promotions.
2. No robotic vendor or product names; say "robotic".
3. No "book" or "appointment" wording. Buttons say "Contact" / "Contact on WhatsApp" (Arabic: تواصل). Contact channels are WhatsApp and phone +966 50 970 4040 only. Calls are answered by "Faisal", an AI assistant, and this stays disclosed.
4. Never ask patients to send medical reports or records.
5. King Faisal Specialist Hospital & Research Centre appears only as past experience. No current workplace, address, hours, map or fees until the owner supplies the new facility. Robotic practice is in the past tense.
6. One real photo only (`src/assets/dr-alaa-alhazmi.jpg`). No stock or AI photos of people, no invented statistics, awards, logos or credentials.
7. Approved medical content, FAQs and sources, privacy notice and credentials are not rewritten for style. Layout, type, colour and components may change.
8. WCAG 2.2 AA, keyboard support, reduced motion, real RTL.
9. Static, fast, private: no frameworks, no third-party requests, no tracking (the privacy page promises this). The BMI calculator must never store or send input.
10. Current memberships (owner, 13 November 2026): ASMBS, ACS, IFSO, SAGES and the Society of Robotic Surgery (SRS) only. Do not list SASMBS, the American College of Healthcare Executives or any other society as a membership.
11. Ramadan FAQ shows published recommendations and his own (6 to 12 months). Return-to-work keeps the ASMBS figure (1 to 2 weeks).
12. The privacy page follows Saudi PDPL Articles 12 and 13.
13. Update "Updated November 2026" (`ui.reviewed`) whenever medical content changes.
