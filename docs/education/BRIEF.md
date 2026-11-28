# Brief: patient education infographic drafts for dralhazmi.com

You are drafting one patient education infographic for Dr. Alaa Alhazmi's website
(dralhazmi.com), on behalf of the practice's working group. Dr. Alaa (the Chair)
approves everything; this is a draft.

## Read first
- `/home/user/clinic-working-group/CHARTER.md` section 3 (operating principles). They bind you.
- Your member file(s), named in your task. Work as that member (and consult the co-member file named).
- `/home/user/dralhazmi.com/CLAUDE.md`, "Content rules". In particular: no superlatives or guarantees,
  no "book/appointment" wording, never ask patients to send medical records, no product or brand names
  (no vitamin brands, no robotic vendor names), no invented statistics.

## Audience and use
- Adult patients (18+) in Saudi Arabia and their families, before or after sleeve gastrectomy or
  Roux-en-Y gastric bypass (the two common operations). Say where advice differs by operation.
- Used two ways: a web page, and a printed one-page A4 sheet handed out in clinic. So it must be
  short and scannable: headings, short items (aim for 12 words or fewer per item), a few key numbers.
- Plain English at about a 6th to 8th grade reading level. Medical words get a plain explanation.
- An Arabic version will be made later from your English; you do not write Arabic.
- Saudi context: emergency number is 997 (Red Crescent); mention Ramadan only if the guideline covers it.

## Evidence rules
- Every number and every clinical instruction carries a source: organization or authors, title, year,
  and DOI, PMID or URL. Use current guidelines from your member file's "Guideline sources"; check each
  for a newer version before citing (search the web or PubMed).
- Tag each item with its evidence basis: `guideline` (a society guideline or position statement says it),
  `consensus` (a published expert consensus or Delphi), or `expert-opinion` (common practice with no
  published source you can confirm; say so).
- Where guidelines give a range or practice varies between surgeons, do not pick for the Chair: write
  `[CHAIR: ...]` with the options and their sources.
- If you cannot verify something, write "I cannot confirm this." Never invent a reference, page, or number.
- Prefer primary documents (the guideline PDF or journal article). Note the exact table or section when you can.

## Output
Write ONE Markdown file at the path given in your task, in exactly this structure:

```
---
topic: <slug>
title: <short patient-facing title, 6 words or fewer>
subtitle: <one plain sentence: what this sheet helps you do>
lead_member: <member slug>
consulted: [<member slugs>]
applies_to: <e.g. "Sleeve gastrectomy and gastric bypass">
drafted: 2026-11-25
status: draft
---

## Key numbers
<!-- 3 to 5 big figures for the infographic. Each: value | short label | evidence tag | ref id -->
- `60–80 g` | protein a day ... | guideline | R1

## Sections
<!-- 3 to 6 sections. Each section is one panel of the infographic. -->
### <Section heading>
<!-- optional one-line intro -->
- <item> — [guideline, R1]
- <item> — [expert-opinion]

## When to contact your surgical team
<!-- only if relevant; short items -->

## Call 997 or go to the emergency department
<!-- only if relevant -->

## Chair decisions needed
- [CHAIR: ...]

## References
- R1. <Org/authors>. <Title>. <Journal/publisher> <year>;<vol>:<pages>. DOI/PMID/URL. <section/table used>. Checked: <how you verified it exists and says this>.

## Notes for the evidence reviewer
<!-- anything you were unsure of, conflicts between guidelines, newer versions found -->
```

Keep the whole file under about 900 words. Report back in under 150 words: the file path, how many
references, and the [CHAIR] items.
