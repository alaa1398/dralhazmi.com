# Brand review: 2017 logo against the current site

Date: 27 November 2026. Input for the redesign on PR 31. Nothing in the site has changed yet; every choice below needs the owner's approval.

## Source files

Kept off GitHub (listed in alaa1398/private-practice `FILES.md`), on Asus and Surface at `C:\Dev\Claude\Projects\private-practice\Brand\`:

- `2017-09-04_194658_Logo.jpg` (2669 × 2669 px JPEG): two leaf shapes, a small purple one and a large teal one, each with white cut-outs, over a soft grey shadow. Arabic wordmark below: "الدكتور علاء الحازمي" in black and "استشاري الجراحة العامة والسمنة" in teal.
- `2017-09-04_194658_BC_Front_English.jpg`: business card. Purple-gradient pill with the Arabic name, English name in black, specialty line in light teal.

- `2017-09-22_Brand_Identity_Source.ai` (982 KB): the designer's Illustrator source, saved PDF-compatible. It holds the logo as vector paths (no embedded raster images) plus the letterhead, notepad, envelope, folder, e-card and business cards on 11 artboards. An SVG logo for the site can be exported from it.

The full stationery set uses three devices beyond the logo: a large faint outline of the leaves as a background watermark, a purple pill with the Arabic name, and paired purple and teal rounded tabs at the page edge.

## Colors

Brand colors as specified in the Illustrator source (CMYK, read from the file's content streams):

| Role | CMYK in source | Approximate screen value |
|---|---|---|
| Large leaf, light teal | C63 M0 Y18 K0 | #52bfd3 |
| Small leaf and pill, deep purple | C92 M100 Y25 K17 | #3a2560 |
| Tagline teal | C80 M24 Y39 K7 | #218994 |
| Body text grey | K80 | #58595b |

The purple leaf and pill run as a gradient from the deep purple to a lighter violet (about #8e5091 at the light end). Screen values were sampled with System.Drawing from the 2017 JPEG, so they are approximate (JPEG compression and CMYK-to-RGB conversion shift them by a few units). A designer converting the CMYK values with a set color profile may land on slightly different hex values.

| Role in logo | Sampled | On white | On site paper #f8f5ef | Text use (WCAG 2.2 AA) |
|---|---|---|---|---|
| Large leaf, light teal | #52bfd3 | 2.15:1 | 1.98:1 | Not for text or icons; decoration only |
| Tagline teal | #218994 | 4.14:1 | 3.81:1 | Large text only (18.66 px bold / 24 px); fails body text |
| Small leaf, purple (dark end) | #3a2560 | 13.02:1 | 11.96:1 | Passes for any text |
| Small leaf, purple (light end) | #8e5091 | 5.67:1 | 5.21:1 | Passes for body text |

Contrast computed with the WCAG 2.x relative-luminance formula. AA needs 4.5:1 for body text and 3:1 for large text and UI components.

## Current site tokens (`src/styles/global.css`)

Paper #f8f5ef, ink #15202a, accent #0d5c55 (deep green-teal, 7.20:1 on paper), brass #b8924a, Newsreader serif display, Inter body, IBM Plex Sans Arabic. The current accent is a different, greener teal than the logo's; the logo's purple does not appear on the site.

## Options for the redesign (owner's choice)

1. **Logo palette, made accessible.** Purple #3a2560 as the main accent (buttons, links, headings); a darkened logo teal for text links and icons, for example #17727c (5.49:1 on #fdfcfc); the logo's light teal #52bfd3 only for large shapes and backgrounds. White text on #3a2560 is 13.02:1.
2. **Keep the current green-teal site palette** and use the logo only as a mark in the header and on the print guides.
3. **Retire the 2017 logo** and use a type-only wordmark in the new design.

Either way the light teal #52bfd3 cannot carry text.

## Things to settle before using the logo

- **Vector file.** The site needs an SVG (sharp at every size, small file). The Illustrator source has the vector logo; export the leaf mark and the wordmark as separate SVGs (from Illustrator, or by converting that page of the PDF-compatible file). Once exported and approved, the SVG is a build asset and may be committed.
- **English wordmark.** The logo has only an Arabic wordmark. The English site needs either the leaves alone or an English name line.
- **Business card wording is out of date for the site.** It says "For Appointments", lists a second number (0509509484), four social handles, info@alaaalhazmi.com and www.alaaalhazmi.com (not the current dralhazmi.com). Site content rule 3 allows no "appointment" wording and only WhatsApp and +966 50 970 4040, so none of that card text carries over.
- **Logo rule.** Site content rule 6 forbids invented logos; this is the owner's own logo, so using it is allowed once he approves.
