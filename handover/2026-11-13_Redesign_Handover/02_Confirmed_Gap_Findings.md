# Confirmed gap-check findings (13 November 2026)

Each finding was reported by one auditor and re-checked by a second agent. Only confirmed findings are listed. `where` and `fix` are the checker's corrected versions.


## claims-compliance (11 confirmed)

### 1. [HIGH] Robotic surgery is still offered in the present/future tense in several places (rule 5 requires past tense)
- **Where:** /home/user/dralhazmi.com/src/pages/[lang]/index.astro lines 62 and 103; /home/user/dralhazmi.com/src/data/site.ts lines 163-164
- **Checked:** Reproduced by grep. index.astro:62 'Robotic sleeve or gastric bypass' / 'تكميم المعدة أو تحويل المسار بالروبوت' is listed as what the surgical path includes; index.astro:103 'preparation followed by a robotic operation' / 'جراحة روبوتية' describes the patient's own forthcoming treatment; site.ts:163 'Most are done with minimally invasive or robotic techniques' / 'بالمنظار أو بالروبوت'. These describe what a patient will receive from him, while commit 8bb56e0 moved his own robotic practice to past tense elsewhere (index.astro:22, about.astro:17, site.ts:143). Not taste: it is a direct rule-5 miss. The generic educational lines (index.astro:45 'done robotically', site.ts:147 'can be done robotically') are technique descriptions and are fine.
- **Fix:** Make the three strings technique-neutral in both languages: 'Sleeve gastrectomy or gastric bypass' / 'تكميم المعدة أو تحويل المسار'; 'A medical plan, or preparation followed by an operation and a short hospital stay.' / 'خطة علاج طبية، أو تهيئة ثم جراحة وإقامة قصيرة في المستشفى.'; 'Most can be done with minimally invasive techniques.' / 'ويمكن إجراء معظمها بتقنيات طفيفة التوغل.' These are consistency corrections required by rule 5, not style rewrites, but show the owner the diff. Leave the #robotic educational section unchanged.

### 2. [MEDIUM] Arabic second-opinion page uses appointment and clinic wording
- **Where:** /home/user/dralhazmi.com/src/pages/[lang]/second-opinion.astro lines 27 and 32 (Arabic strings)
- **Checked:** Confirmed in source. Line 27 Arabic: 'أو يوصي بموعد استشارة إن تطلّب الأمر فحصًا' (English: 'recommends a consultation'); line 32 Arabic: 'وقد يوصي د. علاء الحازمي بزيارة العيادة' (English: 'a consultation in person'). 'موعد' is the appointment wording rule 3 excludes and 'العيادة' asserts a clinic that rule 5 says must not be stated. The Arabic diverges from the approved English, so aligning it is a correction, not a restyle.
- **Fix:** Line 27: 'يرد د. علاء الحازمي عبر واتساب، أو يوصي باستشارة إن تطلّب الأمر فحصًا.' Line 32: 'الرأي المكتوب لا يغني عن الفحص السريري، وقد يوصي د. علاء الحازمي باستشارة حضورية.' Also grep all Arabic strings for 'موعد', 'حجز', 'عيادة' during the redesign (journey.astro:37 'ترتيب زيارتك' is covered by the journey finding).

### 3. [LOW] Journey page promises in-person visits, a team and follow-up although no current workplace exists
- **Where:** /home/user/dralhazmi.com/src/pages/[lang]/journey.astro line 37 (main issue); also 18, 20, 29, 41; index.astro 102, 136; site.ts 111-112
- **Checked:** Strings confirmed. The only concrete problem is journey.astro:37: an unconditional 'Yes ... the team will help you plan your visit' / 'ترتيب زيارتك' when the site states no place to visit (rule 5). The rest is overstated by the auditor: the journey steps are a generic description of how care proceeds, 'Bring any reports' refers to the in-person consultation (not sending records, so rule 4 is intact), and 'the team' is used consistently across the site including the approved privacy notice (privacy.astro:50 'authorized team members') and the second-opinion flow, so it is the owner's established voice, not an error. Whether a nutrition team exists today cannot be determined from the repo. Rewording 'team' site-wide would touch approved copy (rule 7). Downgraded to low.
- **Fix:** Flag one sentence for owner approval: journey.astro:37 answer to 'Send a WhatsApp message to +966 50 970 4040 and the team will explain the options available to you.' / 'أرسل رسالة عبر واتساب إلى ‎+966 50 970 4040 وسيوضح لك الفريق الخيارات المتاحة.' (drop the unconditional 'Yes' and 'plan your visit'). Leave other 'team' wording as is unless the owner says there is currently no team; do not change it as part of the redesign.

### 4. [LOW] Insurance FAQ omits the BMI eligibility rule, may overstate which operations are covered, and names the former regulator
- **Where:** /home/user/dralhazmi.com/src/pages/[lang]/index.astro line 137
- **Checked:** I extracted the cited CHI PDF. Numbers match ('Up to a maximum of 15,000 Saudi riyals during the policy period / With a copayment from 0-20% with a maximum out of pocket 1000 Saudi Riyals'). The PDF does condition coverage: 'Insurance coverage for other procedures and surgeries in addition to sleeve gastrectomy surgery, if BMI exceeds 40 or 35 with complications'. So the BMI omission is real, but the site already hedges ('approved bariatric operations ... Coverage depends on your policy and on clinical criteria, so confirm with your insurer'), so it is incomplete rather than wrong. The auditor's 'sleeve only' point is NOT supported: the cited PDF explicitly extends coverage beyond sleeve, and I could not fetch the Insurance Authority FAQ answers (page fetch failed; search only returned question headings, which do confirm IA now hosts these FAQs and one asking whether CHI still supervises). 'Set by the Council of Health Insurance' is accurate for the cited 2022 document. Adding 'sleeve only' as proposed could make the answer less accurate. Downgraded to low.
- **Fix:** Owner-approved single clause only: '...approved bariatric operations are covered when BMI is above 40, or above 35 with complications, up to SAR 15,000 per policy period...' (Arabic: 'عند تجاوز مؤشر كتلة الجسم 40، أو 35 مع وجود مضاعفات'). Do not add the 'sleeve only' statement. Keep the CHI source; optionally note that health insurance is now supervised by the Insurance Authority only after someone verifies the IA FAQ text directly. Put this FAQ on a periodic re-check list since the package is dated October 2022.

### 5. [LOW] Ramadan FAQ generalises the Delphi consensus beyond what it says
- **Where:** /home/user/dralhazmi.com/src/pages/[lang]/index.astro line 131
- **Checked:** According to PubMed (PMID 34617207, https://doi.org/10.1007/s11695-021-05724-z), the abstract reads: 'Seventy percent of the experts recommended delaying fasting after MBS for 6 to 12 months after combined and malabsorptive procedures according to the patient's situation and surgeon's experience', with consensus defined as >=70.0%. The site says 'delaying fasting for about 6 to 12 months after surgery', dropping the procedure qualifier. Real but minor: the same answer immediately says Dr. Alhazmi's own advice is 6 to 12 months 'depending on the operation and your recovery', the generalisation errs on the cautious side, and the other statements (stop if intolerance persists, 31(12):5303-5311) check out. Downgraded to low.
- **Fix:** Owner to approve one qualifier, both languages: '...advises delaying fasting for about 6 to 12 months after bypass-type (combined or malabsorptive) operations...' / '...نحو 6 إلى 12 شهرًا بعد عمليات تحويل المسار وما يماثلها...'. Leave the rest of the answer untouched.

### 6. [LOW] Fellowship and residency are described differently on the homepage and the About page
- **Where:** /home/user/dralhazmi.com/src/pages/[lang]/index.astro lines 109, 115; /home/user/dralhazmi.com/src/pages/[lang]/about.astro lines 21, 39, 40
- **Checked:** Confirmed in source. Homepage: 'fellowship in minimally invasive and bariatric surgery at UC Davis' (text and fact row; Arabic 'جراحة المناظير وجراحة السمنة'). About: 'fellowship in minimally invasive surgery at the UC Davis Bariatric Surgery Center of Excellence' / 'Fellowship, Minimally Invasive Surgery' (Arabic 'الجراحة طفيفة التوغل'). About bio names only Inova Fairfax for residency while the About list on the same page names GWU Medical Center and Inova Fairfax. These are not contradictions (the fellowship was MIS at a bariatric centre; 'MD' vs 'medical degree with distinction' is the same fact), so low, but credentials should be worded once.
- **Fix:** Owner picks the wording on the certificate; store fellowship, residency and degree strings once in src/data/site.ts (en + ar) and reference them from the homepage text, the fact row and About. Arabic should also use one term for 'minimally invasive' (currently 'جراحة المناظير' vs 'الجراحة طفيفة التوغل'). No new credentials added.

### 7. [LOW] '15+' is used for two different things
- **Where:** /home/user/dralhazmi.com/src/pages/[lang]/index.astro lines 22, 27, 109; about.astro line 17
- **Checked:** Confirmed: stat '15+ years of surgical experience' and intro 'More than 15 years in bariatric, metabolic and general surgery' versus 'practiced for more than 15 years as a consultant at King Faisal...' (index.astro:109, about.astro:17). With fellowship ending 2010 (about.astro:39), 15+ years as a KFSHRC consultant through roughly 2025-26 is arithmetically plausible, and '15+' is a floor so it is not false for total experience either; it is conservative. This is imprecision, not a false claim; the auditor's suggested fix requires dates the repo does not contain and must not be invented (rule 6).
- **Fix:** Optional: relabel the stat to match the sourced claim, '15+ years as a consultant surgeon' / 'عامًا استشاريًا في الجراحة', only with owner approval. Do not add start/end years unless the owner supplies them.

### 8. [LOW] The banned word 'leading' appears in visible copy and meta descriptions
- **Where:** /home/user/dralhazmi.com/src/pages/[lang]/media.astro line 18; /home/user/dralhazmi.com/src/pages/[lang]/resources.astro line 12
- **Checked:** Confirmed in source and in the built pages (curl localhost:4400/en/media/ and /en/resources/ both contain 'leading medical societies'; it is in the resources meta description). It describes third-party societies, not the doctor or his services, so it is not an advertising superlative about him, but it is on the rule-1 word list and trivial to remove. site.ts:147 'The best approach for you' means 'most suitable' and is approved medical copy; not a violation.
- **Fix:** Replace 'leading medical societies' with 'international medical societies' in media.astro:18 and resources.astro:12; check the Arabic counterparts for 'الرائدة'/'أبرز' and use 'الجمعيات الطبية الدولية'. Leave site.ts:147 unless the owner wants a clean word scan ('The right approach for you').

### 9. [LOW] Privacy notice says the site has 'no forms' but the homepage has a height/weight calculator
- **Where:** /home/user/dralhazmi.com/src/pages/[lang]/privacy.astro lines 29-30; /home/user/dralhazmi.com/src/pages/[lang]/index.astro BMI section
- **Checked:** privacy.astro:29 reads 'This website has no forms, accounts, advertising or tracking cookies, and we do not use it to collect personal information.' The homepage has BMI inputs (bmi-h, bmi-w) computed client-side. The substantive promise (nothing collected or sent) holds, so this is a wording nit, but a literal reader could see a contradiction and the privacy notice is the one page where precision matters.
- **Fix:** Owner to approve one added sentence in both languages (privacy wording is protected by rule 7): 'The BMI calculator works entirely in your browser; the numbers you enter are not sent or stored.' / 'تعمل حاسبة مؤشر كتلة الجسم داخل متصفحك فقط، ولا تُرسَل الأرقام التي تدخلها ولا تُحفَظ.' Keep the calculator free of network calls and storage in the redesign.

### 10. [LOW] An email address is published on the Faisal pages although WhatsApp and phone are the only stated contact channels
- **Where:** /home/user/dralhazmi.com/public/faisal/index.html line 17; /home/user/dralhazmi.com/public/faisal/privacy/index.html lines 38 and 45
- **Checked:** Confirmed: mailto:ahazmi@gmail.com on both pages and 'by WhatsApp to +966 50 970 4040 or by email below' for PDPL requests, while privacy.astro:64 gives WhatsApp only. These are noindex pages that exist for the AI assistant's OAuth app verification (the page has a 'Removing access' section pointing to myaccount.google.com/permissions), where a developer contact email is normally required, so the email's presence is likely deliberate. The only genuine issue is the small mismatch in the rights-request route between the two notices. Not a patient-facing rule-3 violation.
- **Fix:** Do not remove the email (likely needed for OAuth verification). Owner decision: delete 'or by email below' from faisal/privacy line 38 so both notices give the same route, or leave as is. Do not surface the email anywhere on the main site.

### 11. [LOW] Three different professional taglines are in use
- **Where:** /home/user/dralhazmi.com/src/data/site.ts lines 18-19; /home/user/dralhazmi.com/src/layouts/Base.astro line 26; /home/user/dralhazmi.com/public/images/og.jpg
- **Checked:** Confirmed: site.title 'Bariatric, Metabolic & Robotic Surgeon' (used in the homepage <title> via Base.astro:24 and links.astro:22); header brandTitle 'Robotic & Bariatric Surgery' hardcoded in Base.astro:26; og.jpg (viewed) reads 'Robotic, Bariatric & Metabolic Surgery'. Three orderings/scopes across the header, title tag and share image. Minor brand inconsistency rather than a compliance breach, but cheap to fix in a redesign.
- **Fix:** Define one tagline (en + ar) in src/data/site.ts, use it for the header brand line, title tag and links page, and regenerate og.jpg with the same text. Owner chooses the order; given rule 5, leading with 'Bariatric, Metabolic & Robotic Surgery' is the safer default.


## seo-technical (14 confirmed)

### 12. [MEDIUM] Structured data is one Physician block on the two homepages only; the type is a LocalBusiness subtype and the two language versions describe two unlinked entities
- **Where:** /home/user/dralhazmi.com/src/pages/[lang]/index.astro:162; /home/user/dralhazmi.com/src/layouts/Base.astro
- **Checked:** Reproduced. Counted application/ld+json on the built site: /en/ 1, /ar/ 1; /en/about/, /en/journey/, /en/treatments/robotic-surgery/, /en/media/, /en/links/ all 0. The /en/ block is @type Physician with name, description, url, image, telephone, knowsAbout, knowsLanguage and 7 sameAs entries, and no @id, alternateName, jobTitle or credentials. Source is src/pages/[lang]/index.astro:162. Physician is a MedicalBusiness/LocalBusiness subtype in schema.org, so the type mismatch with a site that deliberately has no address is genuine. Downgraded from high: nothing is broken or penalised, it is a missed opportunity for entity consolidation rather than a defect.
- **Fix:** Emit one @graph from Base.astro on every page with stable @ids: Person (@id https://dralhazmi.com/#person) with name, alternateName for the other script, honorificPrefix, jobTitle, image, telephone, knowsAbout, knowsLanguage, sameAs, and hasCredential/alumniOf only for items the About page already states; WebSite; and a WebPage per page with inLanguage, isPartOf and about (ProfilePage on About, MedicalWebPage with reviewedBy on home and treatment pages). Corrections to the proposed fix: lastReviewed must be a full ISO date (e.g. 2026-11-01, driven by the same site.ts value as the visible 'Updated November 2026'), not '2026-11'. No address, no worksFor, no openingHours, no AggregateRating/Review/offers; KFSHRC must not appear as worksFor or affiliation (at most as a past alumniOf-style entry if the About page lists it as past experience, otherwise omit).

### 13. [MEDIUM] No BreadcrumbList and weak internal linking to the treatment pages
- **Where:** /home/user/dralhazmi.com/src/pages/[lang]/treatments/[slug].astro; /home/user/dralhazmi.com/src/layouts/Base.astro (footer)
- **Checked:** Reproduced. Extracted every href inside <main> on /en/treatments/robotic-surgery/: only tel:+966509704040 and the wa.me link. No link to the treatments index, sibling treatments, Journey or Second Opinion from the page body; the footer links only to resources, links and privacy. Treatment pages are therefore reachable only via the homepage and the treatments index, and are dead ends for a reader apart from the contact buttons. This also hurts objective (b), explaining treatments and the journey.
- **Fix:** Add a compact visible breadcrumb (Home > Treatments > page name, mirrored for RTL, inside a nav with a localised aria-label) with matching BreadcrumbList JSON-LD, and a closing row on each treatment page linking to the other four treatments plus Your Journey and Second Opinion. Listing the five treatments in the footer is a reasonable extra. Link labels should reuse existing nav/treatment titles from site.ts so no new medical copy is written.

### 14. [LOW] No FAQPage markup for the 15 sourced homepage FAQs or the Journey page FAQs
- **Where:** /home/user/dralhazmi.com/src/pages/[lang]/index.astro (faq array ~line 120); /home/user/dralhazmi.com/src/pages/[lang]/journey.astro:57-58
- **Checked:** Reproduced the facts: 15 <details> on /en/ and /ar/, 4 on /en/journey/, and no FAQPage JSON-LD anywhere. Downgraded to low: Google has restricted FAQ rich results to a small set of authoritative government/health sites since 2023, so the visible payoff is small and uncertain; the remaining benefit is machine-readable Q&A for Bing and answer engines. It is an optional enhancement, not a defect.
- **Fix:** Optional. If added, generate FAQPage JSON-LD from the same faq array in index.astro (line 120 onward) and journey.astro so the text is byte-identical to the approved wording, with inLanguage per page, and link it into the same @graph as the Person/WebPage nodes. Answers are plain text; do not paraphrase or shorten them. Keep it to the homepage and Journey page and re-check homepage weight (about 6-10 KB more per language).

### 15. [LOW] Open Graph tags incomplete on all 28 language pages: no og:url, og:type, og:site_name, og:locale:alternate or og:image:alt
- **Where:** /home/user/dralhazmi.com/src/layouts/Base.astro:42-49; /home/user/dralhazmi.com/public/images/og.jpg
- **Checked:** Reproduced in Base.astro lines 42-49: only og:title, og:description, og:image, og:image:width/height, og:locale and twitter:card are emitted. src/pages/index.astro does have og:type and og:url, so the language pages are inconsistent with the root. I viewed public/images/og.jpg: it carries the name in both English and Arabic, and only the tagline 'Robotic, Bariatric & Metabolic Surgery' is English-only, so the 'English-only' claim is overstated for the card as a whole. Downgraded to low: WhatsApp and other scrapers fall back gracefully without og:url/og:type; previews already work.
- **Fix:** In Base.astro add og:url (same value as canonical), og:type=website, og:site_name (site.name[lang]), og:locale:alternate, and og:image:alt. twitter:site/creator is optional. If the redesign changes the look, regenerate og.jpg and consider adding an Arabic tagline line (or an /ar/ variant) so Arabic WhatsApp previews are fully bilingual; keep the image under about 100 KB and free of superlatives.

### 16. [LOW] Root page / is indexable, self-canonical and the x-default target, but is only a JavaScript redirect with two links
- **Where:** /home/user/dralhazmi.com/src/pages/index.astro
- **Checked:** Facts reproduced from src/pages/index.astro: self-canonical, hreflang x-default to /, inline location.replace to /ar/ or /en/, body is a single paragraph with two links, <html lang="en"> with no h1 and mixed-language title/description. However the 'mixed signal' is overstated: using x-default for an auto-redirecting or language-selector homepage is the pattern Google documents for x-default, and the site is static (CNAME, no server redirects possible), so a JS redirect is the available mechanism. Option (b) in the proposed fix (canonical / to /en/ and x-default to /en/) would be worse for Arabic parity. What remains is a thin no-JS fallback, so low not medium.
- **Fix:** Keep x-default on / and keep the language detection. Improve the fallback body only: a real minimal bilingual chooser with an h1 (name in both scripts, each half with its own lang/dir), one approved descriptor line per language taken from existing site.ts strings, and two prominent links. Wrap the Arabic half of the title/description context with lang="ar" dir="rtl" in the body. Optionally add / to sitemap.xml with en, ar and x-default alternates. Do not repoint the canonical to /en/.

### 17. [LOW] Inline module script is emitted after </html> on both homepages
- **Where:** /home/user/dralhazmi.com/src/pages/[lang]/index.astro:335-337
- **Checked:** Reproduced: grep for '</html><script' matches the built /en/ page, and in source the <script> is at line 337 of src/pages/[lang]/index.astro, after </Base> on line 335. Browsers re-parent it and the BMI calculator works, so the impact is HTML validity only; low rather than medium.
- **Fix:** Move the BMI <script> inside the <Base> slot (above </Base>) or into a small BmiCalculator component rendered within <main>, so Astro emits it before </body>. Verify after build that grep '</html><script' returns nothing and the calculator still works in both languages.

### 18. [LOW] Sitemap has no lastmod and no x-default alternates
- **Where:** /home/user/dralhazmi.com/src/pages/sitemap.xml.ts
- **Checked:** Reproduced on the built sitemap: 28 <loc> entries, 0 occurrences of 'lastmod', 0 of 'x-default'; src/pages/sitemap.xml.ts builds only en/ar xhtml:link elements. Both are optional by the sitemap and hreflang specs, so this is a minor consistency improvement.
- **Fix:** Add the x-default xhtml:link so the sitemap matches the HTML heads. Add <lastmod> only if it comes from a hand-maintained per-page 'updated' date in site.ts (the one behind the visible 'Updated November 2026'); do not use build time, since inaccurate lastmod is ignored by search engines.

### 19. [LOW] Heading hierarchy skips a level on the Learn/media page; About and Links share the same h1
- **Where:** /home/user/dralhazmi.com/src/pages/[lang]/media.astro; /home/user/dralhazmi.com/src/pages/[lang]/links.astro
- **Checked:** Reproduced: /en/media/ headings are h1 'Learn' followed directly by four h3 (Instagram, Snapchat, TikTok, YouTube), same on /ar/media/. /en/about/ and /en/links/ both have h1 'Dr. Alaa Alhazmi'. Skipped levels are not an axe/WCAG failure but are a real structural flaw; the shared h1 is harmless because titles differ.
- **Fix:** Make the media cards h2 (style them as before via a class) or add a real h2 above the card group using an existing ui string. The shared h1 on Links can stay; it is a link-in-bio page.

### 20. [LOW] Several meta descriptions and titles are short or generic; URL slug /media/ is titled 'Learn'
- **Where:** /home/user/dralhazmi.com/src/data/site.ts; title/description props in /home/user/dralhazmi.com/src/pages/[lang]/*.astro
- **Checked:** Spot-checked built pages: general-surgery description is 'Gallbladder, hernia, upper GI and other common abdominal operations.' (68 chars), Arabic obesity-medicine is 56 chars, Links 61, Journey 79; titles are 'About | Dr. Alaa Alhazmi', 'Links | Dr. Alaa Alhazmi' etc. Descriptions are accurate and unique, just short and without the doctor's name. This is optimisation, not breakage, and any change is new copy.
- **Fix:** Treat as copy needing the owner's sign-off. Extend treatment descriptions to roughly 120-150 characters by appending already-approved facts (name, 'consultant surgeon', Riyadh as the homepage already states) with no superlatives, no 'book/appointment', no workplace. Make titles more descriptive (e.g. 'About Dr. Alaa Alhazmi | Consultant Surgeon'). Leave the /media/ slug alone: the URL is live and indexed and a rename would need redirects a static host cannot issue.

### 21. [LOW] Links page loads the full 142 KB original JPEG for a 120 px avatar, and that public file still carries camera EXIF
- **Where:** /home/user/dralhazmi.com/src/pages/[lang]/links.astro; /home/user/dralhazmi.com/public/images/dr-alaa-alhazmi.jpg
- **Checked:** Reproduced. Built /en/links/ has <img src="/images/dr-alaa-alhazmi.jpg" width="990" height="977" style="width: 120px; ..."> with no srcset; the file is 142,117 bytes. Read EXIF with PIL: Make NIKON CORPORATION, Model NIKON D300, Software Windows Photo Editor, DateTime 2020:04:09 11:50:30, plus a large padding block. No location data was visible in the top-level tags. Not a privacy leak of note, but it is wasted bytes on the page most likely opened from a phone via a social bio.
- **Fix:** Use Astro's <Image> from src/assets/dr-alaa-alhazmi.jpg on links.astro (about 240 px WebP with width/height and alt). Keep one public JPEG for og/JSON-LD image use but re-export it with metadata stripped; the padding and EXIF removal alone will shrink it.

### 22. [LOW] aria-label on a plain div and untranslated English aria-labels on Arabic pages
- **Where:** /home/user/dralhazmi.com/src/layouts/Base.astro:70 and :104
- **Checked:** Reproduced: Base.astro line 70 has <nav class="wrap nav" aria-label="Main"> and line 104 has <div class="contact-bar" aria-label="Contact">; both are hard-coded English and /ar/media/ renders aria-label="Main" and aria-label="Contact". aria-label on a role-less div is not permitted by ARIA 1.2 and is ignored by most screen readers. axe does not flag it, so it does not break the 0-violation status, but the untranslated labels are a genuine Arabic-parity gap.
- **Fix:** Localise both labels via ui strings in site.ts. For the nav use an Arabic label meaning 'main navigation' (e.g. 'التنقل الرئيسي') rather than 'الرئيسية', which reads as 'Home'. For the contact bar either drop the aria-label or give the div role="group" with a localised label ('تواصل'); avoid a second <nav> since its links are actions, not navigation.

### 23. [LOW] Latin-script fragments inside Arabic pages have dir but no lang="en"
- **Where:** /home/user/dralhazmi.com/src/pages/[lang]/index.astro; /home/user/dralhazmi.com/src/layouts/Base.astro (footer credentials); /home/user/dralhazmi.com/src/pages/[lang]/about.astro
- **Checked:** Reproduced on /ar/: the only lang="en" attributes are the hreflang link and the language switch. Unmarked English includes <p dir="ltr" style="text-align: right;">MD, FACS, ABS, ABOM, MBA</p> and <bdi dir="ltr">Kermansaravi M, et al. Obes Surg. 2021;31(12):5303–5311</bdi>, and on /ar/media/ the h3 link texts Instagram, Snapchat, TikTok, YouTube. WCAG 3.1.2 exempts proper names and technical terms, so platform names and post-nominals are not failures; the English citation string is the only arguable one. Minor polish for screen-reader pronunciation.
- **Fix:** Add lang="en" next to dir="ltr" on English citations and the credentials line (purely an attribute change, no wording change). Platform names and short acronyms inside Arabic sentences can stay unmarked.

### 24. [LOW] Favicon set is minimal: SVG with system-font text only, no .ico/PNG fallback, no web manifest
- **Where:** /home/user/dralhazmi.com/public/favicon.svg; /home/user/dralhazmi.com/src/layouts/Base.astro:40-41; /home/user/dralhazmi.com/src/pages/404.astro
- **Checked:** Reproduced: public/ contains only favicon.svg (248 bytes, <text font-family="Georgia, 'Times New Roman', serif">AH</text>) and a 180x180 apple-touch-icon.png; /favicon.ico returns 404 on the local server; 404.astro links only the SVG. The font-dependent monogram is a real rendering inconsistency (Android has no Georgia), and the missing .ico causes a 404 for clients that request it by convention. A web manifest is not needed for a non-installable static site; that part is taste.
- **Fix:** Convert the AH monogram to outlined paths in favicon.svg (and match the redesigned brand mark), add a 48x48 favicon.ico or PNG fallback, and add the apple-touch-icon link to 404.astro. Skip the manifest unless wanted.

### 25. [LOW] 404 page is English-first for every URL and uses a different, reduced head
- **Where:** /home/user/dralhazmi.com/src/pages/404.astro
- **Checked:** Reproduced from src/pages/404.astro: <html lang="en" dir="ltr">, English h1 and button first, Arabic block second inside <div lang="ar" dir="rtl">, meta robots noindex, only the SVG icon, no header/nav/contact link. Local server returns 404 for /en/nope/. Functionally correct; the only real gap is that an Arabic visitor hitting a broken /ar/ URL gets English first and no route to contact, which sits against the Arabic-first-class objective.
- **Fix:** Add a tiny inline script that, when location.pathname starts with /ar/, sets lang="ar" dir="rtl" on <html> and shows the Arabic block first (keep both blocks in the markup for no-JS). Add links to Treatments and 'Contact on WhatsApp' / 'تواصل عبر واتساب' in both languages using the existing ui strings, and restyle the page with the redesigned system. Keep noindex.


## arabic-parity (22 confirmed)

### 26. [MEDIUM] Arabic-only 'clinic' and 'appointment' wording on the second-opinion page
- **Where:** /home/user/dralhazmi.com/src/pages/[lang]/second-opinion.astro lines 27 and 32
- **Checked:** Confirmed in src/pages/[lang]/second-opinion.astro line 27 (EN 'recommends a consultation' vs AR «يوصي بموعد استشارة») and line 32 (EN 'a consultation in person' vs AR «بزيارة العيادة»), and visible in the auditor's render. Arabic implies an existing clinic (rule 5) and adds appointment wording (rule 3). Downgraded from high: it is a secondary page and body text, not a call to action, and no address or hours are stated.
- **Fix:** Line 27: «يردّ د. علاء الحازمي عبر واتساب، أو يوصي باستشارة إن تطلّب الأمر فحصًا.» Line 32: «الرأي المكتوب لا يغني عن الفحص السريري، وقد يوصي د. علاء الحازمي باستشارة حضورية.»

### 27. [MEDIUM] AI disclosure weaker in Arabic: «المساعد الذكي» instead of an explicit artificial-intelligence statement
- **Where:** /home/user/dralhazmi.com/src/data/site.ts line 41; src/pages/[lang]/index.astro line 138; src/pages/[lang]/journey.astro line 41; src/pages/[lang]/privacy.astro line 37
- **Checked:** Confirmed by grep: every Faisal mention in Arabic uses «ذكي» (site.ts 41, index.astro 138, journey.astro 41, privacy.astro 37); «الذكاء الاصطناعي» never appears next to Faisal (only in the about bio and the SDAIA name). English always says 'AI assistant'. «المساعد الذكي» is a common label for AI assistants, so many readers will understand it, but next to a human first name it is not unambiguous and the disclosure is an owner requirement. Downgraded from high because the disclosure exists, only less explicitly.
- **Fix:** Minimal change that keeps the approved sentence structure: replace «المساعد الذكي» with «مساعد الذكاء الاصطناعي» in all four places, e.g. «يردّ على الاتصالات فيصل، مساعد الذكاء الاصطناعي للدكتور علاء الحازمي، ويمكنه تسجيل رسالتك.»; privacy: «فيصل، وهو مساعد يعمل بالذكاء الاصطناعي يسجّل رسالتك للفريق». The owner should approve since the privacy notice is approved text.

### 28. [MEDIUM] Arabic hero lead: verb «أجرى» has no stated subject
- **Where:** /home/user/dralhazmi.com/src/pages/[lang]/index.astro line 23
- **Checked:** Confirmed in index.astro line 23 and baseline ar-desktop-seg01.png: the sentence opens with a noun fragment («خبرة تتجاوز…») and continues «وأجرى… عملياته», with no subject in the sentence; the name appears only in the site header. The same clause in about.astro works because it follows the name. It is the first sentence Arabic visitors read. English is a subject-less fragment throughout, so a passive matches it.
- **Fix:** «خبرة تتجاوز خمسة عشر عامًا في جراحة السمنة والجراحة الأيضية والجراحة العامة، وفي السنوات الأخيرة أُجريت العمليات كلها تقريبًا بالروبوت.» (keeps past tense per rule 5; no need to change the number format).

### 29. [MEDIUM] English accessible names on Arabic pages
- **Where:** /home/user/dralhazmi.com/src/layouts/Base.astro lines 70 and 104; src/data/site.ts lines 45-52; src/pages/404.astro line 15
- **Checked:** Confirmed: Base.astro line 70 `aria-label="Main"` and line 104 `aria-label="Contact"` are hard-coded, and the built http://localhost:4400/ar/ contains both. Arabic screen-reader users hear English landmark names; this passes axe but conflicts with rule 8 and objective (e). The other parts are weaker: Latin platform names (Instagram, TikTok…) are normal on Arabic sites and a matter of taste, apart from WhatsApp being written «واتساب» elsewhere; media.astro filters on s.name, so any rename must keep a stable key. 404.astro is a single lang=en page with an Arabic block and an English-only title, which is minor.
- **Fix:** Localise the two aria-labels («التنقل الرئيسي» / «التواصل») via the ui dictionary; note the contact-bar div needs a role (e.g. role="region") for the label to be exposed at all. Optional: add an `ar` display name to social entries (keep `name` as the key used by media.astro), and make the 404 title 'Page not found | الصفحة غير موجودة'.

### 30. [LOW] 'Infection' rendered as «الالتهاب» in both risk statements
- **Where:** /home/user/dralhazmi.com/src/pages/[lang]/index.astro lines 97 and 123
- **Checked:** Confirmed at index.astro lines 97 and 123. «العدوى» is the precise term for infection; «الالتهاب» strictly means inflammation. However Saudi patients commonly use «التهاب» for wound infection, so the meaning largely survives. A terminology precision issue, not a misleading risk statement. The proposed «تجلّط الدم» to «الجلطات الدموية» swap is stylistic and not needed.
- **Fix:** Replace «الالتهاب» with «العدوى» in both sentences (or «العدوى (التهاب الجرح)» on first use). Leave the rest of the approved wording untouched.

### 31. [LOW] 'Medical (non-surgical) treatment' narrowed to «دوائي» on journey and second-opinion pages
- **Where:** /home/user/dralhazmi.com/src/pages/[lang]/journey.astro lines 21-22; src/pages/[lang]/second-opinion.astro line 21
- **Checked:** Confirmed: journey.astro lines 21-22 («جراحية أو دوائية», «العلاج الدوائي») and second-opinion.astro line 21 («خيارات العلاج الدوائي للسمنة») against EN 'medical'. The same journey page's FAQ (line 33) and index.astro lines 52, 89, 103 use «طبي» and explicitly include nutrition and activity. A real inconsistency and narrowing, but not harmful.
- **Fix:** Use «طبي» consistently: «خطة واضحة، جراحية أو طبية…», «إجراء العملية أو بدء العلاج الطبي…», «خيارات العلاج الطبي (غير الجراحي) للسمنة».

### 32. [LOW] Metabolic surgery summary: 'improving type 2 diabetes' rendered «علاج»
- **Where:** /home/user/dralhazmi.com/src/data/site.ts line 120
- **Checked:** Confirmed at site.ts line 120 (EN 'aimed at improving', AR «تهدف إلى علاج»). The auditor overstates it: «علاج» means treatment, not cure, and «تهدف إلى» keeps the hedge. Still, Arabic is slightly stronger than English in a regulated context, so aligning is worthwhile. index.astro line 63 («الجراحة الأيضية لعلاج السكري» for 'Metabolic surgery for type 2 diabetes') is a normal rendering and not a defect.
- **Fix:** site.ts line 120: «جراحة تهدف إلى تحسين السكري من النوع الثاني وغيره من الأمراض الأيضية المرتبطة بالسمنة.» Leave index.astro line 63, or optionally «الجراحة الأيضية لمرضى السكري من النوع الثاني».

### 33. [LOW] Stat tile reads «2 بورد أمريكي» (number agreement)
- **Where:** /home/user/dralhazmi.com/src/pages/[lang]/index.astro line 28
- **Checked:** Confirmed in index.astro line 28 and ar-desktop-seg01.png: large '2' above «بورد أمريكي: الجراحة وطب السمنة». A digit followed by a singular noun is ungrammatical for two. Number-over-label tiles are tolerated loosely, so low to medium; it does sit in the hero. The first proposed fix («2» + «شهادتان…») would be redundant ('2 two certificates').
- **Fix:** The stats items already have a `word` flag: make `v` bilingual and for Arabic show the word «بوردان» (word: true) with label «أمريكيان: الجراحة وطب السمنة»; or keep '2' with label «من شهادات البورد الأمريكي: الجراحة وطب السمنة».

### 34. [LOW] KFSHRC roles: 'Section' and 'Department' both «قسم»
- **Where:** /home/user/dralhazmi.com/src/pages/[lang]/about.astro line 18
- **Checked:** Confirmed in about.astro line 18. Both units are called «قسم», so the section-within-department hierarchy is lost; the statement is not false, since they are two different units. This is credentials wording (rule 7) and the hospital's own Arabic unit names are unknown, so it must not be changed without the owner.
- **Fix:** Ask the owner for the official Arabic unit names; if confirmed, «ترأّس شعبة الجراحة العامة وجراحة الجهاز الهضمي العلوي، وشغل منصب نائب رئيس قسم الجراحة». Do not change unilaterally.

### 35. [LOW] Pull-quote drops 'time' in Arabic
- **Where:** /home/user/dralhazmi.com/src/pages/[lang]/index.astro line 33
- **Checked:** Confirmed in index.astro lines 32-33: EN 'Every patient deserves time to understand all of their options…'; AR «من حق كل مريض أن يفهم خياراته كلها…» has no 'time'. An attributed quote should say the same thing in both languages; the Arabic is still true and compliant, so low.
- **Fix:** «من حق كل مريض أن ينال الوقت الكافي لفهم خياراته كلها، الجراحية وغير الجراحية، قبل اتخاذ أي قرار.» (owner approval, since it is his quote).

### 36. [LOW] 'Minimally invasive' rendered inconsistently; fellowship named two ways
- **Where:** /home/user/dralhazmi.com/src/pages/[lang]/about.astro lines 22, 39; src/pages/[lang]/resources.astro lines 40, 61, 73; src/pages/[lang]/index.astro lines 110, 115
- **Checked:** Partly confirmed. index.astro 110/115 use «جراحة المناظير» and about.astro 22/39 plus resources.astro 40, 61, 73 use «الجراحة طفيفة التوغل» for the same English term. But the homepage/about fellowship difference also exists in English ('minimally invasive and bariatric surgery' vs 'minimally invasive surgery at the … Bariatric Surgery Center'), so that part is not an Arabic parity defect. site.ts 140 «عبر فتحات صغيرة» is a good patient gloss and site.ts 164 «بالمنظار» is fine. Credentials wording falls under rule 7.
- **Fix:** Unify the Arabic term only: use «جراحة المناظير (الجراحة طفيفة التوغل)» on first mention in about.astro lines 22 and 39 and in resources, with owner sign-off for the credentials lines. Leave site.ts 140 and 164.

### 37. [LOW] 'Discussed' becomes «يُحدَّد» (determined) in three places
- **Where:** /home/user/dralhazmi.com/src/data/site.ts line 148; src/pages/[lang]/index.astro line 121; src/pages/[lang]/treatments/index.astro line 15
- **Checked:** Confirmed: site.ts line 148, index.astro line 121, treatments/index.astro line 15 (the auditor said 14). English says 'is discussed' in all three; journey.astro line 33 renders it correctly as «تُناقَش». index.astro line 52 is not affected, because its English says 'decided'. A tone and parity drift, not a factual error.
- **Fix:** «ويُناقَش الأسلوب الأنسب لحالتك خلال الاستشارة.» / «ويُناقَش الأنسب لحالتك خلال الاستشارة.» / «أما خياراتك فتُناقَش خلال الاستشارة.»

### 38. [LOW] 'When suitable' rendered «عند الحاجة»; 'Who it may suit' loses 'may'
- **Where:** /home/user/dralhazmi.com/src/pages/[lang]/treatments/[slug].astro line 12; src/data/site.ts line 184; src/pages/[lang]/index.astro lines 58, 89
- **Checked:** Confirmed: site.ts 184, index.astro 58 and 89 use «عند الحاجة» for 'when suitable'; treatments/[slug].astro line 12 has «من المرشّح لهذا العلاج؟» for 'Who it may suit'. «عند الحاجة» is not more promissory than English, so the risk is minimal. The heading losing its hedge is the more meaningful part.
- **Fix:** Heading: «لمن قد يناسب هذا العلاج؟». Optionally «إذا كانت مناسبة» in the three medicine phrases.

### 39. [LOW] Hard-coded Latin 'WhatsApp' label on Arabic pages (the bidi-reversal claim is wrong)
- **Where:** /home/user/dralhazmi.com/src/pages/[lang]/second-opinion.astro line 55; src/pages/[lang]/privacy.astro line 85
- **Checked:** The label is hard-coded Latin in second-opinion.astro line 55 and privacy.astro line 85 although ui.whatsapp has «واتساب» (site.ts line 67). The 'reversed, colon on the wrong side' claim does not hold: in the auditor's own render the line reads right to left as WhatsApp, colon, number, which is the correct order for an RTL paragraph, and the number is isolated LTR. Only the untranslated label is a defect, so low.
- **Fix:** Replace the literal with `{ui.whatsapp[lang]}` in both files: «واتساب: ‎+966 50 970 4040».

### 40. [LOW] Guideline and society names vary across pages
- **Where:** /home/user/dralhazmi.com/src/data/site.ts line 108; src/pages/[lang]/resources.astro
- **Checked:** Confirmed: site.ts 108 spells out «الجمعية الأمريكية لجراحة السمنة والأيض والاتحاد الدولي لجراحة السمنة» (short IFSO name), index.astro 77 uses «إرشادات ASMBS/IFSO لعام 2022», index.astro 122 uses «الإرشادات الدولية لعام 2022 (ASMBS/IFSO)», and about.astro 47 and resources use the full IFSO name «…والاضطرابات الأيضية». Varying the phrasing by context is acceptable; the only real inconsistency is the two different Arabic names for IFSO. Cosmetic.
- **Fix:** Use the full IFSO name «الاتحاد الدولي لجراحة السمنة والاضطرابات الأيضية» in site.ts line 108. Optionally add «(ASMBS)» and «(SAGES)» after the Arabic names in resources for parity with IFSO/ABOM/SRS. No wider rewrite.

### 41. [LOW] BMI advice sentence ambiguous: «ويحدّد التقييم الأنسب لك»
- **Where:** /home/user/dralhazmi.com/src/pages/[lang]/index.astro line 87
- **Checked:** Partly confirmed. index.astro line 87: without diacritics «ويحدّد التقييم الأنسب لك» can be read as 'determines the most suitable assessment', whereas English says 'an assessment shows which suits you'. That is a real ambiguity. The gender-agreement claim on line 77 («وليست تشخيصًا») is not a defect: it is an ellipsis whose implied subject is the result («النتيجة», named in the next sentence and in the placeholder «ستظهر النتيجة هنا»).
- **Fix:** Line 87: «…والعلاج الطبي خيار متاح أيضًا، ويبيّن التقييم أيهما أنسب لك.» Leave line 77.

### 42. [LOW] Follow-up FAQ: «مدى الحياة» attaches to the wrong noun
- **Where:** /home/user/dralhazmi.com/src/pages/[lang]/index.astro line 135
- **Checked:** Confirmed at index.astro line 135: «بزيارة سنوية لدى مختص في علاج السمنة مدى الحياة» can be read as 'a specialist in lifelong obesity treatment'; English is 'a yearly review … for life'. The modifier placement is a real, small clarity issue. The other two points («مختص في علاج السمنة», «دعم نمط الحياة») are acceptable renderings and a matter of style on approved FAQ wording.
- **Fix:** Reorder only: «ثم بزيارة سنوية مدى الحياة لدى مختص في علاج السمنة.» Leave the rest.

### 43. [LOW] Conditional sentences without «فـ» before the answer
- **Where:** /home/user/dralhazmi.com/src/pages/[lang]/index.astro line 136; src/pages/[lang]/second-opinion.astro line 26
- **Checked:** Confirmed in the cited lines. Strict grammar requires «فـ» only where the answer starts with «سـ»: index.astro 136 and second-opinion.astro 26 («…، سيطلب الفريق»), and privacy.astro 44 already writes «فسنطلب», so the site is inconsistent. The «يمكن/يمكنك» cases (index 131, second-opinion 15, privacy 65) are acceptable in modern standard Arabic and should be left. Very minor.
- **Fix:** Only the two «سيطلب» cases: «…فسيطلب الفريق موافقتك أولًا». Leave the others.

### 44. [LOW] Homepage journey step 4: «متابعة مستمرة» for 'Long-term follow-up'
- **Where:** /home/user/dralhazmi.com/src/pages/[lang]/index.astro lines 104 and 97
- **Checked:** Confirmed at index.astro line 104: the step title is «متابعة مستمرة» (continuous) while English says 'Long-term follow-up' and line 97 and journey.astro use «طويلة الأمد». Line 97 «مواعيد المتابعة» for 'follow-up visits' is harmless, but «زيارات» matches journey.astro and avoids appointment wording.
- **Fix:** Step title «متابعة طويلة الأمد»; line 97 «فالتخلّف عن زيارات المتابعة يزيد خطر المضاعفات».

### 45. [LOW] Spelling and diacritic inconsistencies for the same words
- **Where:** /home/user/dralhazmi.com/src/pages/[lang]/about.astro line 33; index.astro line 138; journey.astro line 41; second-opinion.astro lines 27, 29; src/data/site.ts line 41
- **Checked:** Confirmed samples: «يرد» (site.ts 41, journey 41, privacy 37, second-opinion 27) vs «يردّ» (index 138); «يُرجى» (second-opinion 26) vs «يرجى» (line 29, same page); «للجراحين» (about 33) vs «للجرّاحين» (index 29, resources); «للدكتور علاء» (index 138) vs the full name elsewhere; «خمسة عشر عامًا» (index 23, 110) vs «15 عامًا» (about 18). These are cosmetic and can be normalised without changing wording. The words-versus-digits number difference is acceptable and need not change.
- **Fix:** Normalise shadda and diacritics («الجرّاحين», «يردّ», «يُرجى», «التحكّم») and use the full name «د. علاء الحازمي» in index.astro line 138. Leave the number format.

### 46. [LOW] Resources page: Arabic SASMBS description says more than English
- **Where:** /home/user/dralhazmi.com/src/pages/[lang]/resources.astro line 31
- **Checked:** Confirmed at resources.astro line 31: Arabic adds «وتضم نصائح عامة وحاسبة لمؤشر كتلة الجسم», absent from English. I did not check the external site, so the added detail is unverified. It is a description of a third-party resource, not a claim about the doctor, so low. The other two points are not defects: «تحالف العمل لمكافحة السمنة» is a reasonable rendering of Obesity Action Coalition, and «الإرشادات والبيانات» is disambiguated by its description («البيانات الرسمية والإرشادات…»).
- **Fix:** Make the two languages match: either trim Arabic to «الجمعية المتخصصة في طب وجراحة السمنة في المملكة.» or, after checking the site, add the same detail to English. Optionally add the Latin name in brackets after the Obesity Action Coalition Arabic name.

### 47. [LOW] Arabic hero headline «جراحة / بدقّة الروبوت.» vs 'Precision surgery, guided by robotics.'
- **Where:** /home/user/dralhazmi.com/src/pages/[lang]/index.astro lines 19-20
- **Checked:** Confirmed in index.astro lines 19-20 and ar-desktop-seg01.png. Arabic attributes the precision to the robot ('surgery with the robot's precision'), a mild shift from English and from the site's own later framing of surgeon skill plus robotic steadiness. The first line is a single bare word, which the screenshot shows as visually unbalanced. The headline is creative copy, not approved medical wording, so it is free to change; the shift is mild and not a compliance problem.
- **Fix:** «جراحة دقيقة،» / «بمساعدة الروبوت.» (or «…يقودها الروبوت» is to be avoided; keep the surgeon as the agent). Confirm the final line with the owner.


## a11y-ux (16 confirmed)

### 48. [HIGH] Keyboard focus lands completely underneath the fixed bottom contact bar (WCAG 2.4.11 Focus Not Obscured)
- **Where:** /home/user/dralhazmi.com/src/styles/global.css:25 and :289-298
- **Checked:** Reproduced with Playwright at 375x667 on /en/: .contact-bar is position:fixed (top 600.5px), html has only scroll-padding-top (global.css:25). Tabbing forward, 3 of 44 stops had elementFromPoint = .contact-bar at top, middle and bottom (two FAQ summaries and footer 'Privacy'). The auditor's count of 11 is overstated in my run (I got 3 fully hidden), but any fully hidden focus stop fails 2.4.11 AA, so the finding stands.
- **Fix:** Inside the <820px rule add html { scroll-padding-bottom: 5.5rem } (bar is 66.5px EN / 69.5px AR) and keep body padding-bottom at least the bar height so the footer's last links can scroll clear. Re-run a tab-through at 375 and 768 in both languages after the redesign and assert no focused element is covered at its centre point.

### 49. [HIGH] Mobile navigation hides 2 of 6 items off-screen with no scroll affordance, and the current-page item stays off-screen
- **Where:** /home/user/dralhazmi.com/src/layouts/Base.astro:70-74; /home/user/dralhazmi.com/src/styles/global.css:115
- **Checked:** Reproduced at 375px: nav clientWidth 375, scrollWidth 594 (EN) / 516 (AR), scrollLeft 0, scrollbar-width none. EN: 'Second Opinion' 389-503 and 'Learn' 529-570 fully off-screen while 'Your Journey' ends at 363, so nothing is visibly cut to hint at more. AR: 'رأي طبي ثانٍ' -54..27 (cut) and 'تثقيف' -116..-80. On /en/media/ and /ar/media/ the aria-current link is off-screen on load. Second Opinion is a main conversion path, so high is fair on the device most patients use.
- **Fix:** On phones use a disclosure menu (details/summary or button[aria-expanded], a few lines of inline JS at most) listing all 6 items with 44px rows, or wrap the links to two rows. If the scroller is kept: add an inline-end fade mask, and scroll the aria-current link into view on load. Translate the menu label for Arabic.

### 50. [MEDIUM] Keyboard focus is clipped under the sticky header when tabbing backwards (scroll-padding-top smaller than header)
- **Where:** /home/user/dralhazmi.com/src/styles/global.css:25, :94-99
- **Checked:** Measured header 109.9px at 1440 and 122.5px at 375 (EN), 132.8px AR at 320, vs scroll-padding-top 6rem = 96px. Shift+Tab put targets at y=96: 8 of 44 stops partly under the header at 375, 3 at 1440. In my run no element was entirely hidden (bottom edge always visible; worst case 'or call +966...' and 'How much weight will I lose?' had top and middle covered), so this is partial obscuring: allowed by 2.4.11 AA, fails 2.4.12 AAA, but it also cuts the top of anchor/skip-link targets. Downgraded from high to medium.
- **Fix:** Set scroll-padding-top from the real header height: define --header-h per breakpoint/language (or set it once with a tiny inline ResizeObserver script) and use scroll-padding-top: calc(var(--header-h) + 1rem). If the redesign makes the header a single compact row on phones the value becomes small and stable.

### 51. [MEDIUM] Sticky header plus fixed contact bar cover 73-79% of the viewport at 400% zoom and about half of a landscape phone
- **Where:** /home/user/dralhazmi.com/src/styles/global.css:94 (.header sticky), :289 (.contact-bar fixed)
- **Checked:** Reproduced: at 320x256 header bottom 122.5px + bar 66.5px (EN) = 189 of 256px; AR 132.8 + 69.5 = 202px (79%). At 667x375 header 110 + bar 66.5 = 176px (47%). No horizontal overflow (scrollWidth = viewport), so 1.4.10 is not strictly failed, but content is close to unusable at 400% zoom and cramped in landscape. Medium rather than high because it is not a hard AA failure and portrait phones (28%) are acceptable.
- **Fix:** At (max-height: 500px) and below ~820px width make the header position: static (or reduce it to one row) and keep only a compact contact bar; the contact bar must stay available since WhatsApp contact is a key objective. Collapse the nav row on phones so the header is one ~56px row.

### 52. [MEDIUM] Contact bar 'Call' button is clipped at 320px and with WCAG text-spacing at 375px
- **Where:** /home/user/dralhazmi.com/src/styles/global.css:293-294; /home/user/dralhazmi.com/src/layouts/Base.astro:106
- **Checked:** Reproduced: at 320px EN a.btn-call spans 129-327.4 (7px beyond the viewport, past the bar's 16px padding); with letter-spacing .12em / word-spacing .16em at 375px it spans 143.5-385.7. Page scrollWidth stays 320 because the bar is fixed, so the overflow is simply cut off. Text stays readable but the pill end and border are lost (1.4.10/1.4.12 loss of content is marginal).
- **Fix:** .contact-bar .btn { min-width: 0; flex: 1 1 auto } and below ~360px either hide the word 'Call' visually (keep it in the accessible name) or let the bar wrap to two rows; drop the hard white-space: nowrap on the label while keeping the number itself in a nowrap bdi.

### 53. [MEDIUM] BMI calculator has no error state: invalid, out-of-range, metre and Persian-digit input fail silently
- **Where:** /home/user/dralhazmi.com/src/pages/[lang]/index.astro:237-246 and the inline script (num/update)
- **Checked:** Reproduced on /en/: '1.70'+'95', Persian '۱۷۰'+'۹۵' and 'abc'+'95' leave #bmi-out hidden with the empty-state text and no aria-invalid; Arabic-Indic '١٧٠'+'٩٥' gives 32.9. Source (index.astro script) maps only U+0660-0669 and silently requires 100-230 cm / 30-350 kg. A patient typing height in metres gets no feedback.
- **Fix:** Add a short translated hint line under the fields linked with aria-describedby (new UI microcopy, not medical content, so rule 7 is not affected; needs an Arabic version written natively), show an error message in the live region and set aria-invalid when a non-empty value does not parse or is out of range, and extend the digit map to U+06F0-06F9. Optionally auto-interpret values between 1.0 and 2.3 as metres.

### 54. [MEDIUM] Accessible names for navigation and contact bar are English-only and the bar's aria-label is on a role-less div
- **Where:** /home/user/dralhazmi.com/src/layouts/Base.astro:70 and :104
- **Checked:** Confirmed in source and built /ar/: <nav aria-label="Main"> on Arabic pages, and <div class="contact-bar" aria-label="Contact"> with no role, outside header/main/footer. aria-label on a generic div is not exposed, and the bar is outside all landmarks whenever it is displayed (<820px). Conflicts with the objective that Arabic is first-class.
- **Fix:** Use translated labels from the ui dictionary (e.g. 'القائمة الرئيسية' and 'تواصل') and make the bar <nav aria-label={...}> or move it inside <footer>. Re-run axe at 375px, not only at desktop width.

### 55. [MEDIUM] Decorative '+' on FAQ summaries is exposed as text; step numerals are very low contrast
- **Where:** /home/user/dralhazmi.com/src/styles/global.css:225 and :205-208
- **Checked:** Confirmed summary::after content is "+" with no alt text (global.css:225), so generated content is appended to each of the 15 question names in screen readers that read it. Confirmed .steps li::before colour rgb(201,191,174) at 35.2px on #fbfaf7, about 1.7:1, below the 3:1 large-text minimum. The numerals carry the step order visually on journey and second-opinion pages, and list-style: none can drop list semantics in Safari/VoiceOver, so I raise this to medium for the contrast part.
- **Fix:** summary::after { content: '+' / '' } (with a plain fallback declaration before it) or an aria-hidden inline SVG; set step numerals to a colour with at least 3:1 (e.g. var(--muted) #5a6570 or the accent) and add role="list" to the <ol class="steps"> to keep list semantics in Safari.

### 56. [LOW] BMI placeholder text fails contrast and reads as a pre-filled value
- **Where:** /home/user/dralhazmi.com/src/pages/[lang]/index.astro:237-238; /home/user/dralhazmi.com/src/styles/global.css:243-247
- **Checked:** Confirmed computed ::placeholder colour rgb(117,117,117) on the sand .bmi background (#f3f0ea), about 4.0:1, under 4.5:1. Placeholders '170' and '95' are plausible values at 1.25rem. Real but minor: the fields have visible labels and the grey is distinguishable from the ink text for most users; downgraded to low.
- **Fix:** Set .bmi input::placeholder { color: var(--muted); opacity: 1 } or remove the numeric placeholders and show 'e.g. 170' as a hint under each field (ties in with the BMI error/hint fix).

### 57. [LOW] External links open a new tab with no warning, the only cue is aria-hidden, and behaviour is inconsistent
- **Where:** /home/user/dralhazmi.com/src/pages/[lang]/index.astro:313; resources.astro:96; media.astro:36; links.astro
- **Checked:** Confirmed 18 a[target=_blank] on /en/ (FAQ sources, index.astro:313) and resources.astro:96 rows with target=_blank, while media.astro:36 links have no target. Opening new tabs without notice is an advisory technique (G201), not an AA failure, so low rather than medium; the inconsistency is real.
- **Fix:** Keep new tabs for cited sources (reasonable so patients do not lose their place in the FAQ) but add a visually hidden '(opens in a new tab)' / '(يفتح في تبويب جديد)' suffix and a visible external glyph; apply the same behaviour to social links on media and links pages.

### 58. [LOW] Language of parts missing for English text embedded in Arabic pages
- **Where:** /home/user/dralhazmi.com/src/layouts/Base.astro:87; /home/user/dralhazmi.com/src/pages/[lang]/index.astro:313 and the credentials <p dir=ltr>; resources.astro
- **Checked:** On built /ar/ I found 4 of 11 [dir=ltr] elements containing Latin words with no lang='en' ancestor (credentials paragraphs and FAQ citation bdi); source confirms dir='ltr' without lang at Base.astro:87, index.astro:259 area and :313. This is a 3.1.2 issue for the English citations; credential abbreviations are arguably exempt. Low is right.
- **Fix:** Add lang="en" alongside dir="ltr" on citations, the credentials string and English journal/resource names when lang is 'ar'. Phone-number bdi elements need no lang.

### 59. [LOW] Scroll-reveal animation is dead code in the built CSS
- **Where:** /home/user/dralhazmi.com/src/styles/global.css:311-313; built _astro/global.*.css
- **Checked:** Confirmed: built /_astro/global.nH6oAbt7.css contains '.reveal{animation:linear both rise view();animation-range:entry cover 22%}'. animation-timeline cannot be set through the shorthand, so the declaration is dropped: computed animationName 'none', animationTimeline 'auto' on all 23 .reveal elements, opacity 1, with CSS.supports true and no reduced-motion. The source at global.css:312 is correct; the minifier breaks it. No user harm today, but the intended motion never runs.
- **Fix:** If reveals are wanted, prevent the merge (e.g. put animation-timeline in a separate rule/selector such as .reveal:not(#_) or configure the CSS minifier) and assert on the built CSS. Keep it inside prefers-reduced-motion: no-preference and @supports, and ensure content is visible without it.

### 60. [LOW] Current-page indicator and link underlines disappear in forced-colors mode
- **Where:** /home/user/dralhazmi.com/src/styles/global.css:84-91
- **Checked:** Confirmed with forcedColors: active on /en/about/: .nav a[aria-current] computed background-image 'none', text-decoration none, same colour as other nav links, so the current page has no visual indicator (aria-current still exposed to AT). The .ulink underline is drawn with background-image (global.css:84-91).
- **Fix:** Draw the current-page/hover indicator with text-decoration or border-bottom, or add @media (forced-colors: active) { .ulink:hover, .ulink[aria-current='page'] { text-decoration: underline; text-underline-offset: .3em } }.

### 61. [LOW] No authored focus style: links, buttons and summaries rely on the browser default ring
- **Where:** /home/user/dralhazmi.com/src/styles/global.css (no :focus-visible rule; only :248)
- **Checked:** Confirmed: computed outline on tabbed elements is the UA default 'rgb(16,16,16) auto 1px'; only .bmi input:focus has a custom ring (global.css:248). Not a WCAG failure (default rings are exempt and visible), but for a redesign a consistent, clearly visible focus ring on light and dark surfaces is a legitimate improvement.
- **Fix:** :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px } plus a light variant on dark sections (.cta-band, dark footer); verify at least 3:1 against each background and keep the skip-link style.

### 62. [LOW] Small touch targets for standalone text links (pass 2.5.8 only through spacing)
- **Where:** /home/user/dralhazmi.com/src/layouts/Base.astro:66, :91-98; /home/user/dralhazmi.com/src/pages/[lang]/index.astro:313
- **Checked:** Measured on /ar/ at desktop: footer links 22px tall, language switch 28px; source shows plain inline .ulink anchors with no padding (Base.astro:66, 91-98). 2.5.8 AA is met via spacing/inline exceptions, so this is a usability improvement rather than a conformance defect, but the language switch being a small text link matters for Arabic-first access on phones.
- **Fix:** Give standalone links padding-block and min-height 44px on coarse pointers (@media (pointer: coarse)), make footer links a list with 44px rows, and style the language switch as a 44px-high pill.

### 63. [LOW] Header Contact button and bottom contact bar both shown between 641 and 819px; heading level skipped on Learn page; /faisal/ pages have no landmarks
- **Where:** /home/user/dralhazmi.com/src/styles/global.css:295-303; /home/user/dralhazmi.com/src/pages/[lang]/media.astro:31-36; /home/user/dralhazmi.com/public/faisal/index.html
- **Checked:** Confirmed at 768x1024 and 667x375: .header .btn display flex and .contact-bar display flex simultaneously (breakpoints 640 vs 820 in global.css:295-303). media.astro has h1 at line 31 then h3 at line 36 with no h2. public/faisal/*.html contain no <main> or role attributes (grep found only the h1). All minor, best-practice level.
- **Fix:** Use one breakpoint for hiding the header button and showing the bar; change media cards to h2 (keep the visual size via class); wrap /faisal/ page bodies in <main> and keep them noindex.


## visual-design (25 confirmed)

### 64. [HIGH] Hero: portrait's offset outline frame collides with the stats strip and the 'FACS' figure
- **Where:** src/styles/global.css .portrait::before (inset 28px -28px -28px 28px) and .stats; src/pages/[lang]/index.astro hero. Reproduced at http://localhost:4400/en/ and /ar/ at 1440 and 390 wide.
- **Checked:** Reproduced by measurement and crop. Desktop EN: .portrait bottom = 748px, .stats top = 748px (zero gap), so the keyline's bottom edge is at y=776 and the 'FACS' line box starts at y=777; my crop shows the stats top rule passing behind the frame and the frame corner about 5px above the 'FACS' cap height. Same in Arabic (mirrored, above 'FACS' on the left). Mobile EN: portrait bottom 1059 = stats top 1059; frame bottom sits directly on '15+' and the stats top rule is hidden behind the photo. All four first-screen variants are affected, so it is a concrete defect, not taste.
- **Fix:** Reserve space for the decoration: add padding-bottom of at least 56px to .hero-grid (offset 28px + 28px air), or margin-top: 3.5rem on the .stats wrapper. Cleaner alternative: replace the offset keyline with a contained backing shape that ends at the photo baseline. Keep the logical-property mirroring for RTL.

### 65. [HIGH] Persistent chrome eats about 21% of the phone viewport; nav is a clipped, unsignalled horizontal scroller
- **Where:** Base.astro header (.header-row + .nav) and .contact-bar; global.css .nav { overflow-x:auto; scrollbar-width:none }
- **Checked:** Reproduced: mobile header 109px (EN) / 115px (AR), contact bar 66px / 70px, i.e. 175-185px of 844px permanently covered. Nav scrollWidth 594px in a 390px box in EN ('Second Opinion' and 'Learn' off-screen, no affordance); 482px in AR with the 'second opinion' item cut mid-word at the left edge (seen in my 390px AR screenshot). Two of six primary destinations are undiscoverable on phones.
- **Fix:** On phones make the header one 56px row (brand, language switch, menu control) with the six links in a <details>-based disclosure or popover panel that is keyboard operable and closes on Escape; alternatively keep the scroller but make only the brand row sticky and add an inline-end fade mask so the cut is intentional. Do not rely on a pure-CSS hide-on-scroll-down header: scroll-direction detection is not broadly available without JS. Keep the contact bar (WhatsApp + call) but add env(safe-area-inset-bottom) padding.

### 66. [HIGH] Inner treatment and second-opinion pages are under-designed: H2s jammed against the preceding paragraph, no structure, no visual identity
- **Where:** src/pages/[lang]/treatments/[slug].astro, second-opinion.astro; global.css h1,h2,h3 { margin: 0 0 .6em }
- **Checked:** Reproduced on /en/treatments/robotic-surgery/: lead ends y=424, H2 starts 443 (19px above) while its own paragraph starts 31px below the H2 box; next H2 is 17px under the previous paragraph. Same on /en/second-opinion/ (17px above every H2). H2 is 51.2px introducing 2-3 line paragraphs; the page template is h1, lead, three h2+p, a notice. No eyebrow, breadcrumb, sibling navigation or closing band in the template source. Column is 732px (auditor said 772, which is the second-opinion page) with about 350px empty either side.
- **Fix:** Build an article template: header band (sand, eyebrow, H1, lead), body column of about 65ch, inner-page h2 at clamp(1.5rem,2.4vw,2rem) with margin-top 2.5em and margin-bottom .5em, a prev/next treatment pager, and the dark closing band. A side rail with a compact WhatsApp contact card is good; keep the Faisal AI disclosure and the existing 'general information, not medical advice' and 'Medically reviewed' lines. Do not alter the approved what/who/expect wording.

### 67. [MEDIUM] Mobile hero: the only photo is entirely below the fold; first screen is text plus a sliver of hair
- **Where:** index.astro hero; global.css .hero-grid (single column <900px), .portrait max-width 320px; 390x844 at /en/ and /ar/
- **Checked:** Reproduced: at 390x844 the portrait starts at y=667 (EN) / 690 (AR); the contact bar starts at y=778, so only about 110px (top of the hair) shows. Mobile hero is 1331px (EN) / 1357px (AR). Downgraded from high because the headline, lead, WhatsApp button and phone number are all in the first screen, so the contact objective is met; what is missing is the trust cue.
- **Fix:** Below 900px use a compact portrait (120-150px arch) beside or above the eyebrow so face + headline + WhatsApp button fit in about 660px of visible height, and reduce hero top padding (currently 56px) to about 2rem. Put the three stats in one 3-column row under the CTA. Do not shorten or reword the approved lead.

### 68. [MEDIUM] No illustration or iconography anywhere: nine homepage sections are text + hairlines only
- **Where:** src/pages/[lang]/index.astro (all sections after the hero)
- **Checked:** Confirmed from source and screenshots: the only image element on the homepage is the hero portrait; desktop page is 7387px tall and every later section is type plus 1px rules. This is a reasoned design critique relevant to the 'stunning' brief, but it is an absence rather than a defect and partly overlaps the monotony finding, so medium rather than high.
- **Fix:** Add a small bespoke inline-SVG line system (currentColor, aria-hidden, about 1 KB each): abstract glyphs for the four robotic points and the treatments, a connecting path for the journey, and a low-opacity arc motif on dark bands. Constraints: strictly abstract (no likeness of any robotic system or vendor silhouette, no people), no third-party icon CDN, mirror directional glyphs in RTL, keep total added weight to a few KB.

### 69. [MEDIUM] Monotony: the same 'rule + small numeral + title + 15px grey text' pattern is used for five consecutive sections
- **Where:** global.css .points, .t-list, .facts, .steps, .dl, .faq, .link-list; .section vs .section-sand
- **Checked:** Confirmed in CSS: all seven components are a 1px ink top rule with --line row dividers; surfaces alternate only #fbfaf7 / #f3f0ea; the single dark section is at y=1445-1983 of 7387 with no further contrast until the CTA band at 6690. Valid design critique, medium.
- **Fix:** Differentiate section layouts and widen the surface range (pale teal tint, deeper sand, a second dark or teal moment mid-page). Correction to the proposed fix: do NOT style the two paths as 'outlined card vs filled teal card'; that visually favours surgery and contradicts the approved message 'Not every patient needs surgery'. Give both paths equal visual weight.

### 70. [MEDIUM] FAQ: 15 undifferentiated accordion rows with a 440px empty left column; answers and sources poorly styled
- **Where:** index.astro #faq (.split with h2.narrow-col + .wide-col.faq); global.css .faq / details / summary
- **Checked:** Core claim reproduced, several numbers wrong. FAQ list starts at x=580 and the H2 column is position: static, so once the H2 scrolls away the left 456px is blank for about 1400px. 15 details, no grouping; indicator is a text '+' rotated 45deg; no hover/open styling; no open animation. Corrections: the section is 1622px desktop / 1848px mobile (not 1908 / 2353); an opened answer measured 552 chars over 7 lines, about 80-88 chars per line (not 95); source links are p.small at 14px, not 'full-size'.
- **Fix:** Make the H2 column sticky (top = header height) and add a one-line intro plus the 'Medically reviewed' line there; style the open state (ink question, inline-start accent border, answer max 65ch); render sources as one compact 'Sources' row; replace '+' with an SVG plus/minus with a 44px hit area; add ::details-content / interpolate-size animation as progressive enhancement, disabled under reduced motion. Grouping into clusters is fine but the cluster labels are new copy in both languages and must be approved; keep all 15 questions, their wording and every cited source unchanged.

### 71. [MEDIUM] Homepage journey steps look unfinished: 14px numerals glued to the titles, no rules, no connection
- **Where:** global.css line with .points p { font-size: .95rem; color: var(--body); margin: 0 } overriding .big-num; index.astro journey <ol class="points"> with <p class="big-num">
- **Checked:** Reproduced, and the root cause is a CSS specificity bug the auditor did not identify: the markup uses <p class="big-num"> (intended 4rem, #c9bfae, margin-bottom 1rem) but '.points p' (specificity 0,1,1) beats '.big-num' (0,1,0), so the computed style is 15.2px, colour rgb(62,73,84), margin 0, and the gap to the h3 is 0px. My screenshot shows tiny '1 2 3 4' sitting on the titles. So the intended design is not what ships. Three numeral styles across robotic points (01-04), journey page (.steps 2.2rem) and here is also true.
- **Fix:** Immediate fix: raise specificity (.points .big-num { font-size: 4rem; line-height: 1; color: #c9bfae; margin: 0 0 1rem }) or scope the generic rule to .points p:not(.big-num):not(.point-num). Then unify to one numeral system site-wide and render the four steps as a connected timeline (horizontal on desktop, vertical on mobile, mirrored in RTL), with the 'Your journey in detail' link in the section head.

### 72. [MEDIUM] Type scale has a hole: 77/51px display sizes drop straight to 18px h3 and 15px body copy
- **Where:** global.css h1/h2/h3, .points p, .t-desc, .stat-label, plus ad hoc serif sizes (.t-name, .card h3, .bmi h3, .stat-value, .point-num, .big-num, .steps li::before)
- **Checked:** Measured exactly as reported at 1440px: h1 76.8px, h2 51.2px, lead 19.2px, h3 18.4px, .points p and .t-desc 15.2px, .stat-label 14px, footer 14.4px. The ad hoc sizes listed are all present in the CSS. Description copy at 15.2px in #3e4954 is small for a patient audience.
- **Fix:** Define a tokenised fluid scale and map every component to it; add a serif h3 display step (1.5-1.75rem) for card titles; set description copy to at least 1rem; cap inner-page h2 at about 2-2.75rem.

### 73. [MEDIUM] Inconsistent vertical rhythm between sections and inside components
- **Where:** global.css .section padding, .btn-row margin-block 1.5rem, h2 margin, .facts margin-bottom 3rem; journey.astro, about.astro
- **Checked:** Reproduced: /en/journey/ steps end y=1111, button 1135-1189, 'Common questions' H2 at 1213 (24px each side). /en/about/: first .facts ends 1560 and 'Education and training' starts 1608 (48px) whereas 'Certifications' has the full 120px section padding above. Homepage section padding is 120px top and bottom, so adjacent same-colour areas show about 240px voids.
- **Fix:** Introduce spacing tokens and a flow rule: section padding clamp(3.5rem,7vw,6rem); prose h2 margin-top 2.5-3em; button rows margin-block 2rem or more; consistent gap between stacked list blocks. Balance split layouts by aligning column ends.

### 74. [MEDIUM] Portrait treatment is inconsistent and the About page wastes it
- **Where:** about.astro (<Image class="hero-photo">) vs index.astro (.portrait/.portrait-frame); global.css .hero-photo
- **Checked:** Confirmed: homepage uses the arch frame with keyline; About uses the same file as a plain 420x414 rectangle with 6px radius, placed at y=364 while the H1 is at y=230 (134px lower), no caption. In the single-column mobile layout the image comes after the H1, credentials and three bio paragraphs, so it is off the first screen. The homepage About block has no image (source confirmed).
- **Fix:** Use one portrait language (the arch) at two or three sizes, including beside the About H1 so it shows on the first mobile screen. A caption plate must use only the existing name and credential string. Avoid repeating the same single photograph more than twice per page (hero plus one small use); a footer/CTA avatar on every page would over-expose the one image.

### 75. [MEDIUM] About page reads as a CV dump: flat lists and a dot-separated run-on paragraph for memberships
- **Where:** src/pages/[lang]/about.astro (.facts lists, memberships <p>)
- **Checked:** Confirmed: certifications and education are full-width .facts lists (1192px) of single-line items; memberships is one <p> 1192px wide joined by middots; the credentials line is a bare .lead; all H2s are 51.2px. Layout critique is valid.
- **Fix:** Restructure layout only: memberships as a wrapped list or 2-column list (split on the existing middots), certifications as tiles, education as a timeline. Constraints the original fix skipped: years exist only inside the approved education strings (2003, 2003-2009, 2009-2010, 2022), so a year column may only surface those and must not add dates to certifications or roles; do not add expanded full names or a 'Previous experience' entry unless the text already exists in the approved copy; the former-hospital mention must stay in the past tense exactly as written.

### 76. [MEDIUM] Line lengths exceed comfortable measure in several places
- **Where:** about.astro memberships <p> in .wrap; treatments/[slug].astro wrap max-width 780px; global.css details p max-width 44rem
- **Checked:** Confirmed with corrections: memberships paragraph is 1192px wide at 17px, about 150 chars per line. Treatment body paragraphs are 732px: 250 chars over 3 lines, about 85-90 per line (auditor said 95-100). FAQ answers 704px: 552 chars over 7 lines, about 80-88 per line. All above the 60-75 comfort range; the memberships line is the serious one.
- **Fix:** Cap prose at about 65ch for Latin and a similar measure for Arabic (.narrow prose, details p, About paragraphs, memberships); add text-wrap: pretty on paragraphs and text-wrap: balance on headings (the journey H2 does orphan 'follow-up.' in my screenshot).

### 77. [MEDIUM] Arabic headings: Amiri at weight 400 is too light and calligraphic against Plex body and against the Latin scale; hero headline lacks mass
- **Where:** global.css :lang(ar) --serif 'Amiri'; h1,h2 font-weight 400; :lang(ar) .brand-name font-weight 700
- **Checked:** Partly reproduced. True: Arabic h1 is Amiri 400 at the same 76.8px as Latin; the brand name is Amiri 700, so the small logo is heavier than the page headline; in my /ar/ screenshot the two-line headline fills roughly 150px and 350px of a 627px column. Not reproduced: the shadda does not collide with the line above, and word gaps in the CTA and headline look normal. The narrow headline is mostly because the approved Arabic copy is two short lines, which must not be reworded. The 'religious-text tone' point is a judgement call. Downgraded to medium.
- **Fix:** Zero-byte first step: Amiri 700 and IBM Plex Sans Arabic 600 are already shipped, so test h1/h2 at Amiri 700 or Plex 600 for Arabic headings with Amiri reserved for the quote, and scale Arabic display sizes up about 10-15%. Do not apply negative word-spacing to Arabic. Only add a new self-hosted Arabic face if it keeps the Arabic page at or below its current 470 KB. Re-balance the hero through layout and size, not by changing the headline text.

### 78. [MEDIUM] Arabic small text is too small and loses hierarchy cues that English gets from uppercase tracking
- **Where:** global.css body:lang(ar) font-size 1.125rem vs fixed .stat-label .875rem, .points p / .t-desc .95rem, .footer .9rem; :lang(ar) .eyebrow and .dl dt overrides
- **Checked:** Measured on /ar/: body bumped to 18px but .stat-label 14px, .points p and .t-desc 15.2px, footer 14.4px, identical to English. Arabic eyebrow is 16px with letter-spacing 0 and no transform, so its only cue is colour and weight 600; .dl dt becomes .95rem muted with no other cue. Confirmed in my /ar/ screenshot (stat labels notably small beside Arabic body).
- **Fix:** Add Arabic minimums for sub-body text (1rem for descriptions, about .9375rem for captions) and line-height about 1.7 for small text. Give Arabic eyebrows a non-typographic cue (short accent rule or dot at inline-start) and set dl labels in ink at weight 500-600.

### 79. [MEDIUM] Treatment/resource rows on mobile: misaligned inset, orphan arrow row, wrapped titles pushed off the number
- **Where:** global.css .t-row (flex-wrap, padding 2rem .75rem), .t-num width 2.5rem, gap 2rem; index.astro treatments, resources.astro
- **Checked:** Measured at 390px on /en/: row x=24 but .t-num x=36; .t-name x=108 width 246; .t-desc wraps back to x=36; .t-arrow drops to its own line; each row is 239px tall (234px in AR), so five treatments take about 1200px. Matches the report.
- **Fix:** Below 640px switch .t-row to grid: [num auto][content 1fr][arrow auto], number and arrow on the title line, description in the content column, padding-inline 0 to align with the heading, .t-name about 1.5rem. Target about 130px per row; add an :active tint.

### 80. [MEDIUM] Colour: the teal accent and the WhatsApp action are almost absent; primary CTA is the same near-black as everything else
- **Where:** global.css .btn-primary, .btn-wa { background: var(--ink) }; --wa: #11803f declared but unused
- **Checked:** Confirmed: computed .btn-primary background is rgb(20,32,43); a scan of the built stylesheet finds zero uses of var(--wa); teal appears only in the italic headline line, eyebrows, numerals, links and the FAQ '+'. Buttons, dark section and CTA band share one colour, so the main action has no distinct role. White on #0e6a70 computes to about 6.3:1, so a teal fill passes AA.
- **Fix:** Give teal the action role (filled primary buttons, darker hover, visible focus ring), ink for text and dark surfaces. Add simple inline-SVG channel glyphs to WhatsApp and call buttons (aria-hidden, text label kept as 'Contact on WhatsApp' / تواصل). Re-run contrast checks for every new pairing, including light buttons on dark bands. Remove or use the dead --wa token.

### 81. [LOW] Latin 'AH' monogram and Latin credential string are used unchanged in the Arabic UI
- **Where:** src/layouts/Base.astro lines 59 and 84 (<span class="monogram">AH</span>); global.css .monogram (Newsreader, direction: ltr); index.astro about block site.credentials
- **Checked:** Confirmed in source and in my /ar/ screenshots: the Latin 'AH' mark appears beside the Arabic name in header and footer, and 'MD, FACS, ABS, ABOM, MBA' appears in Latin in the About block and footer. The post-nominals are real credentials conventionally written in Latin, so that half is not a defect; the monogram is a small first-class-Arabic polish item. Low.
- **Fix:** Use a script-neutral mark (the arch shape) or an Arabic initials monogram when lang=ar. Keep the Latin post-nominals with dir=ltr isolation as now; do not invent Arabic equivalents or a new descriptor line without owner-approved wording.

### 82. [LOW] Resources page is two long identical link tables with an empty page header
- **Where:** src/pages/[lang]/resources.astro; reuses .t-list/.t-row
- **Checked:** Confirmed: header section is 485px tall with H1 and a 640px-wide lead, right half empty; then 'For patients' (section 1162px) and 'For healthcare professionals' (1299px) using the treatment-index row with 1.9rem serif titles in a 390px title column, so long organisation names wrap. Functional and readable, so low.
- **Fix:** Card or compact-row layout with smaller titles (about 1.35rem), in-page anchors for the two groups in the header, the independence note in a tinted box. Organisation abbreviations may be typographic text only (no logos). Add language/PDF chips only where the language of each linked resource has been verified; do not guess.

### 83. [LOW] 'Two paths' + BMI card: weak comparison and a dead-looking calculator
- **Where:** index.astro #paths (.points with two divs, #bmi); global.css .bmi, .bmi-result { min-height: 7rem }, .bmi input
- **Checked:** Confirmed in source: the two paths are h3 + plain ul with list-style none; BMI inputs have placeholders '170' and '95', underline-only styling, a reserved 7rem result area with 'Your result will appear here.', and a full-width button always shown. The paths section is 1607px tall on mobile. It works and is accessible, so this is polish: low.
- **Fix:** Pair the two paths as equal-weight cards with list markers; box the inputs with visible unit suffixes and replace value-like placeholders with a clearly styled hint. Corrections to the proposed fix: keep the WhatsApp button always visible and enabled (hiding it until a result exists makes contact harder); a banded BMI scale is new medical presentation, so it may only show the thresholds already in the approved text and must keep the 'education only, not a diagnosis' note next to it; an 'or both' badge is new copy needing approval in both languages.

### 84. [LOW] Quote section is a large, undecorated void between hero and content
- **Where:** index.astro <figure class="quote wrap">; global.css .quote (centered, max-width 920px) inside .section
- **Checked:** Confirmed: the section is 470px tall on desktop containing only the centred blockquote and a muted name caption, and it is the only centred block on the page. Valid but minor.
- **Fix:** Turn it into a designed pull-quote (large opening mark, « » for Arabic, start-aligned on the grid, thin rule, attribution) or merge it into the About block. Keep the quote wording unchanged.

### 85. [LOW] Closing CTA band and footer are generic and thin
- **Where:** index.astro .cta-band; Base.astro footer; about.astro and journey.astro (no closing band)
- **Checked:** Partly reproduced. True: the footer has only four links (phone, Trusted resources, All links, Privacy), so the six main pages are missing; the Faisal disclosure and 997 emergency line are 14.4px muted text; copyright sits in the links column; About ends at the memberships paragraph and Journey at its FAQ with no closing band. False: the claimed RTL misalignment. In Arabic the button spans x=260-422 and the phone line x=180-421, so both share the same inline-start (right) edge, exactly mirroring LTR; my /ar/ screenshot confirms it. Downgraded to low.
- **Fix:** Add a consistent closing band to every page and a fuller footer: site navigation, contact with the Faisal AI disclosure kept prominent, the 997 emergency line as a distinct callout, and a bottom bar with copyright, privacy and language switch. No address, hours or map. No RTL alignment fix is needed for the CTA actions.

### 86. [LOW] Header: two-row desktop header is tall (110px) and the nav is detached from the right-hand actions
- **Where:** Base.astro header; global.css .header (rgba(251,250,247,.92) + blur), .header-row, .nav
- **Checked:** Measured: header is 110px (EN) / 116px (AR) at 1440px with the nav on a second row. My screenshot scrolled over the dark section shows the translucent header turning flat grey with the heading ghosting through. Active state is the 1px .ulink underline.
- **Fix:** One 72px row at 1000px and wider (brand, nav, language + Contact). Raise header opacity to about .98 or use a solid background so it stays cream over dark bands. Stronger active state (2px accent underline). A shrink-on-scroll effect should be progressive enhancement only, with no layout shift and nothing under reduced motion.

### 87. [LOW] Stats strip is typographically uneven and one 'stat' is not a number
- **Where:** index.astro c.stats ('15+', '2', 'FACS'); global.css .stats, .stat-value, .stat-label
- **Checked:** Confirmed: three items at 40px serif with 14px labels; all have word:false so 'FACS' is set as a figure; on mobile they stack in one column taking 325px (334px AR) with no dividers (seen in my 390px screenshot).
- **Fix:** Recast as a compact credential row with dividers; on mobile a 3-column mini grid under the CTA. Reuse only the existing approved values and labels in both languages; the label wording must not be rewritten, and no new figures may be added.

### 88. [LOW] Motion and interaction polish are minimal: no visible focus/hover system, reveal animation only in supporting browsers
- **Where:** global.css .btn hover, .t-row:hover, motion block; focus rules limited to .skip-link:focus, main:focus, .bmi input:focus
- **Checked:** Confirmed by scanning the built stylesheet: the only focus rules are the skip link, main and the BMI inputs; there is no global :focus-visible, so links and buttons use the browser default ring (present, and axe is clean, so not an accessibility failure, but it is faint on the ink buttons in my tabbed screenshot). .reveal is gated by @supports (animation-timeline: view()), with content fully visible otherwise, which is a safe fallback. Hover is a 1px lift and colour swap; no :active states.
- **Fix:** Add a focus-visible token (2px accent outline + 2px offset, light variant on dark surfaces) applied to links, buttons, summary and rows; add :active states and small arrow/underline micro-interactions. Any signature motion must sit inside prefers-reduced-motion: no-preference, be CSS-only, and leave content visible without it.


## performance (13 confirmed)

### 89. [HIGH] Web fonts are 77-97% of page weight; Arabic pages download 399 KB of fonts (Amiri alone is 248 KB)
- **Where:** src/layouts/Base.astro lines 2-11; src/pages/404.astro lines 2-6; built /_astro/*.woff2
- **Checked:** Reproduced with my own Playwright run against localhost:4400 (390px, 4x CPU, 1.6 Mbps/150 ms). /en/: 11 requests, fonts 185,680 B in 7 files. /ar/: 13 requests, fonts 399,052 B in 9 files. File sizes in baseline-dist/_astro match exactly (amiri-arabic-400 108,560; amiri-arabic-700 99,968; plex arabic 42,848 + 45,688). Base.astro lines 2-11 are the @fontsource imports. I did not re-run the fontTools subsetting, so the post-subset sizes are the auditor's figures, not mine.
- **Fix:** Replace @fontsource CSS imports with hand-written @font-face rules pointing at build-time woff2 subsets (pyftsubset with layout-features=*, so Arabic shaping and ligatures survive). Use the robust option (full U+0600-06FF plus ASCII and the punctuation in use), not the per-build 'only glyphs in the HTML' option: the BMI calculator writes digits and text at runtime and approved copy may change, so a missing glyph would fall back silently. Check Arabic rendering in the RTL screenshots after subsetting. No new font families or third-party requests.

### 90. [HIGH] Amiri Bold (120 KB) is downloaded on every Arabic page for the brand name only
- **Where:** src/styles/global.css lines 110 and 284; /_astro/amiri-arabic-700-normal.*.woff2, amiri-latin-700-normal.*.woff2
- **Checked:** Confirmed. global.css has exactly two font-weight: 700 rules, line 110 (:lang(ar) .brand-name) and line 284 (:lang(ar) .footer-name). My /ar/ request log shows amiri-arabic-700 (99,968 B) and amiri-latin-700 (20,300 B) both fetched, 120.3 KB together, about 26% of the page. I did not check whether any <strong> sits inside Amiri-set headings on other pages; if one does, removing the 700 face would give synthesised bold there.
- **Fix:** Preferred: keep the bold wordmark but serve an Amiri 700 subset limited to the name string plus space and full stop (auditor measured about 14 KB), or render the Arabic wordmark as inline SVG paths with an accessible text label. Dropping to Amiri 400 is the cheapest option but changes the look of the Arabic brand; if chosen, grep the Arabic pages for bold text inside serif elements first.

### 91. [HIGH] Links page serves the 142 KB full-size JPEG for a 120 px avatar and it is that page's LCP
- **Where:** src/pages/[lang]/links.astro line 20
- **Checked:** Reproduced. /en/links/ requests /images/dr-alaa-alhazmi.jpg at 142,117 B (natural 990x977) and renders it at 120x118. LCP was the IMG at 1,956 ms against FCP 768 ms. links.astro line 20 uses a plain <img> pointing at the public/ file.
- **Fix:** Import the portrait from src/assets and use Astro <Image> with widths [120, 240, 360], sizes="120px", loading="eager", fetchpriority="high", keeping the alt text and round crop. Keep public/images/dr-alaa-alhazmi.jpg in place because JSON-LD and Open Graph reference it.

### 92. [MEDIUM] English pages download a 42.8 KB Arabic font to draw one word (the language switch)
- **Where:** src/layouts/Base.astro line 66; src/styles/global.css lines 16-22
- **Checked:** Confirmed. /en/, /en/about/ and /en/links/ all fetch ibm-plex-sans-arabic-arabic-400-normal (42,848 B); the only Arabic text is the header switch (Base.astro line 66, lang={other}). That is 23% of /en/about/. Downgraded from high: the font is not render-blocking (font-display: swap) and affects one small word, so it is wasted bytes, not a visible delay.
- **Fix:** On English pages set the switch to a system face (html:lang(en) .lang { font-family: system-ui, sans-serif }), or serve a one-word subset (about 4 KB) if the brand face matters. Keep lang="ar" on the link. The proposed 'mirror' on Arabic pages saves nothing by itself: Plex Latin is needed there anyway for digits and the phone number, and is better solved by the merged Arabic+ASCII face in the next finding.

### 93. [MEDIUM] Arabic pages download Newsreader Latin (22.5 KB) for the 'AH' monogram and numerals, plus four Latin subset files (79.5 KB) mostly for spaces, digits and punctuation
- **Where:** src/styles/global.css lines 106, 159, 167, 174, 184, 207, 250; @fontsource unicode-range split in /_astro/global.nH6oAbt7.css
- **Checked:** Confirmed. My /ar/ log shows newsreader-latin-400 (22,480), amiri-latin-400 (19,544), amiri-latin-700 (20,300), plex-latin-400 (19,164) and plex-latin-600 (20,500). The fontsource Arabic unicode-range in the built CSS starts at U+6?? and contains no U+0020, digits or full stop, so Arabic text does pull the Latin file. Newsreader is hard-coded at global.css 106, 159, 167, 174, 184, 207 and 250.
- **Fix:** Build each Arabic face as a single file covering Arabic plus ASCII space, digits and punctuation with one unicode-range (removes 4 requests per Arabic page). For Newsreader on Arabic pages serve a digits + 'AH' subset (about 2 KB) or draw the monogram as inline SVG. Western digits in a different face than the Arabic text is a design decision; keep the phone number in <bdi dir="ltr">.

### 94. [MEDIUM] Render-blocking CSS is 64% unused @font-face rules, split over two requests, with two base64 fonts embedded
- **Where:** /_astro/global.nH6oAbt7.css, /_astro/Base.CARRmTtf.css; astro.config.mjs
- **Checked:** Confirmed: global.nH6oAbt7.css is 26,200 B and Base.CARRmTtf.css 11,631 B, both linked in <head>; 44 @font-face rules in total; cyrillic, greek, vietnamese and latin-ext ranges are present; both files contain data:font/woff URIs. astro.config.mjs has no inlineStylesheets setting. 'hero-phone' (links.astro line 23) has no CSS rule, which is cosmetic, not performance. Downgraded from high: this is about 12 KB gzip and FCP is already about 0.8 s on the throttled profile. The 0.82 -> 0.28 s FCP claim is from the auditor's combined test build and I did not reproduce it.
- **Fix:** Hand-written @font-face for only the faces each language needs, woff2 only, and build.inlineStylesheets: 'always' in astro.config.mjs (about 4 KB gzip inline, so losing cross-page CSS caching costs little). Either style .hero-phone or remove the class.

### 95. [MEDIUM] Hero intro animation starts at opacity 0 and delays LCP by about 540 ms on the Arabic homepage
- **Where:** src/styles/global.css lines 305-309; src/pages/[lang]/index.astro lines 166-169
- **Checked:** Reproduced. On /ar/ at 390px my run gave FCP 848 ms, first LCP candidate the portrait at 848 ms (37,052 px), then final LCP <p class="lead intro-3"> at 1,484 ms (43,928 px), a 636 ms gap. global.css lines 305-309 animate from opacity 0 with 0.15 s and 0.3 s delays. On /en/ the portrait is the LCP at 796 ms, so the metric is unaffected there, though the H1 and lead are still hidden for 150-300 ms. Downgraded from high: 1.45 s is still well inside the 2.5 s threshold.
- **Fix:** Keep the entrance motion but never start the H1, lead or buttons at opacity 0: animate transform only, or reserve the fade for the eyebrow and decorative elements. Leave the prefers-reduced-motion block as it is.

### 96. [MEDIUM] Hero portrait srcset/sizes do not match the rendered box: image is always upscaled about 1.25x and about 21% of downloaded pixels are cropped away
- **Where:** src/pages/[lang]/index.astro line 176; src/styles/global.css lines 147-148
- **Checked:** Confirmed at 390px, DPR 2: the browser fetched the 640w file (22,086 B, 640x632 intrinsic) for a 314x393 box that needs 786 px of height, a 1.24x upscale. The frame is aspect-ratio 4/5 with object-fit: cover (global.css 147-148) over a near-square source, so the sides are cropped. I did not test the desktop or AVIF numbers. The softness is mild on a portrait, so this sits at the low end of medium.
- **Fix:** Crop at build time to 4:5 (Astro Image width/height with fit="cover", checking the face stays centred as it is now) and declare true sizes, e.g. widths [320, 480, 640, 800] and sizes="(max-width: 899px) min(320px, calc(100vw - 76px)), 440px". AVIF via <Picture formats={['avif','webp']}> is optional. about.astro line 59 needs no change.

### 97. [LOW] GitHub Pages cannot serve long-lived cache headers, so every hashed asset is revalidated after 10 minutes
- **Where:** .github/workflows/deploy.yml; public/CNAME
- **Checked:** deploy.yml uses actions/deploy-pages and public/CNAME is dralhazmi.com, so the site is on GitHub Pages, whose documented default is Cache-Control: max-age=600 with no header configuration. Live headers cannot be checked from this sandbox. Downgraded from medium: revalidation returns small 304 responses in parallel over one HTTP/2 connection, and the only real fix is a hosting change.
- **Fix:** Within the redesign, just reduce the file count (subset and merged fonts, inline CSS). Treat a move to a host with header control as a separate owner decision; it would also require re-checking the privacy page's statement about who sees request logs.

### 98. [LOW] The root URL shows nothing until a JavaScript redirect runs, adding a full extra navigation for first-time visitors
- **Where:** src/pages/index.astro
- **Checked:** Confirmed in src/pages/index.astro: an inline head script calls location.replace to /ar/ or /en/. The extra hop is real but small (a 1.9 KB document) and unavoidable on GitHub Pages. Part of the claim is wrong: without JavaScript the page is not blank, it shows two working language links. The proposed fixes are weak: the redirect fires before a prefetch could finish, and a noscript meta refresh to /en/ would push Arabic no-JS visitors to English and remove their choice.
- **Fix:** Leave the redirect logic as is. Do not add the noscript refresh. Optionally style the fallback links so the no-JS page looks intentional.

### 99. [LOW] Deploy ships 84 font files (1.86 MB) of which at most 16 can ever be requested
- **Where:** dist/_astro/ (from @fontsource imports in src/layouts/Base.astro and src/pages/404.astro)
- **Checked:** Confirmed: baseline-dist/_astro holds 93 files, 42 .woff and 42 .woff2. Only latin and arabic subsets appeared in my request logs. No visitor cost.
- **Fix:** Resolved by the hand-written @font-face change: emit woff2 only, for the faces actually used.

### 100. [LOW] Small font-swap layout shifts on first load (CLS 0.006-0.019)
- **Where:** font-display: swap in /_astro/*.css; src/styles/global.css lines 16-22
- **Checked:** Reproduced: CLS 0.018 on /en/, 0.017 on /ar/, 0.014 on /en/about/ and /en/links/. All far below the 0.1 threshold; it is a visible but minor jump when fonts arrive.
- **Fix:** Subsetting should remove most of it by getting fonts in sooner. If any remains, add metric-matched fallback @font-face rules (local() with size-adjust and ascent-override) for Georgia to Newsreader and for the system Arabic face.

### 101. [LOW] Performance budget to hold the redesign to
- **Where:** Whole site
- **Checked:** This is a guardrail, not a defect. The baseline figures I could check hold: 11 requests on /en/ and 13 on /ar/, a 22 KB hero image, no third-party requests. The ceilings depend on the auditor's subsetting figures, which I did not re-measure.
- **Fix:** Adopt as acceptance criteria for the redesign: English page <= 130 KB and Arabic <= 240 KB cold; <= 8 requests English and <= 11 Arabic; no new font families or weights; decorative art as inline SVG or CSS; entrance and scroll motion on transform only, never opacity 0 on the H1, lead or portrait; no font preloads unless re-measured; JavaScript limited to the existing inline calculator; CLS < 0.02. Re-measure after the build, because the byte ceilings are estimates.
