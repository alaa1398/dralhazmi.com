// Drafted by Amal (Quality & Patient Safety) with Khalid (Surgical Lead), 2026-11-25.
// Arabic: draft translation [ARABIC REVIEW] - needs a native-speaker read-aloud before approval.
import { PENDING, type Sheet } from './types';

export const warningSigns: Sheet = {
  slug: 'warning-signs',
  hue: 'coral',
  icon: 'alert',
  topics: ['after', 'safety'],
  title: { en: 'Warning signs after surgery', ar: 'علامات الخطر بعد العملية' },
  subtitle: {
    en: 'Know which symptoms are normal, which need a call today, and which are an emergency.',
    ar: 'اعرف أي الأعراض طبيعية، وأيها يستدعي التواصل مع فريقك اليوم، وأيها حالة طارئة.',
  },
  appliesTo: { en: 'Sleeve gastrectomy and gastric bypass', ar: 'تكميم المعدة وتحويل المسار' },
  keyNumbers: [
    { value: { en: '997', ar: '997' }, label: { en: 'Saudi ambulance (Red Crescent)', ar: 'الإسعاف في المملكة (الهلال الأحمر)' }, ev: 'fact', refs: ['R13'] },
    { value: { en: PENDING, ar: PENDING }, label: { en: 'resting heart beats a minute that mean an emergency', ar: 'نبضة في الدقيقة أثناء الراحة تعني حالة طارئة' }, ev: 'guideline', refs: ['R2', 'R3'] },
    { value: { en: '8 in 10', ar: '8 من 10' }, label: { en: 'blood clots after weight-loss surgery that start after going home', ar: 'من الجلطات بعد جراحة السمنة تبدأ بعد الخروج من المستشفى' }, ev: 'guideline', refs: ['R1'] },
    { value: { en: '3–4 months', ar: '3–4 أشهر' }, label: { en: 'when most vitamin B1 emergencies happen', ar: 'الفترة التي تحدث فيها معظم حالات نقص فيتامين ب1 الطارئة' }, ev: 'guideline', refs: ['R7'] },
  ],
  panels: [
    {
      tone: 'green', icon: 'check',
      heading: { en: 'Normal in the first weeks', ar: 'طبيعي في الأسابيع الأولى' },
      items: [
        { text: { en: 'Mild pain at the small cuts, easing day by day', ar: 'ألم خفيف مكان الجروح الصغيرة يخفّ يومًا بعد يوم' }, ev: 'opinion' },
        { text: { en: 'Feeling tired for a few weeks', ar: 'الشعور بالتعب لبضعة أسابيع' }, ev: 'opinion' },
        { text: { en: 'Feeling full after a few spoonfuls', ar: 'الشعور بالشبع بعد ملاعق قليلة' }, ev: 'opinion' },
      ],
    },
    {
      tone: 'amber', icon: 'phone',
      heading: { en: 'Contact your surgical team today', ar: 'تواصل مع فريقك الجراحي اليوم' },
      items: [
        { text: { en: 'Nausea or vomiting that keeps coming back', ar: 'غثيان أو قيء يتكرر' }, ev: 'guideline', refs: ['R7', 'R6'] },
        { text: { en: `Cannot keep fluids or vitamins down for ${PENDING} hours`, ar: `لا تستطيع الاحتفاظ بالسوائل أو الفيتامينات لمدة ${PENDING} ساعة` }, ev: 'opinion', refs: ['R6'] },
        { text: { en: 'Drying out: dark or little urine, dizzy when standing', ar: 'علامات الجفاف: بول داكن أو قليل، ودوخة عند الوقوف' }, ev: 'opinion' },
        { text: { en: 'Wound red, swollen, warm, or leaking', ar: 'الجرح أحمر أو متورم أو ساخن أو يخرج منه سائل' }, ev: 'opinion' },
        { text: { en: `Temperature of ${PENDING} °C`, ar: `حرارة ${PENDING} درجة مئوية` }, ev: 'opinion' },
        { text: { en: 'New trouble swallowing food you managed before', ar: 'صعوبة جديدة في بلع طعام كنت تتناوله من قبل' }, ev: 'opinion' },
        { text: { en: 'Cannot reach your team today? Go to the emergency department', ar: 'لم تتمكن من التواصل مع فريقك اليوم؟ توجّه إلى قسم الطوارئ' }, ev: 'opinion' },
      ],
    },
    {
      tone: 'red', icon: 'alert',
      heading: { en: 'Call 997 or go to the emergency department now', ar: 'اتصل على 997 أو توجّه إلى الطوارئ فورًا' },
      items: [
        { text: { en: `Heart racing at rest, over ${PENDING} beats a minute`, ar: `تسارع ضربات القلب أثناء الراحة، أكثر من ${PENDING} نبضة في الدقيقة` }, ev: 'guideline', refs: ['R2', 'R3'] },
        { text: { en: 'Severe stomach pain, or pain that keeps getting worse', ar: 'ألم شديد في البطن، أو ألم يزداد سوءًا' }, ev: 'opinion', refs: ['R4'] },
        { text: { en: 'Short of breath or breathing fast', ar: 'ضيق في التنفس أو تنفس سريع' }, ev: 'guideline', refs: ['R2', 'R5'] },
        { text: { en: 'Chest pain, worse when you breathe in', ar: 'ألم في الصدر يزداد مع الشهيق' }, ev: 'guideline', refs: ['R5'] },
        { text: { en: 'One leg swollen, painful, or warm', ar: 'تورم إحدى الساقين أو ألمها أو سخونتها' }, ev: 'guideline', refs: ['R1', 'R5'] },
        { text: { en: 'Vomiting blood, or black, tar-like stools', ar: 'قيء دموي، أو براز أسود كالقطران' }, ev: 'opinion', refs: ['R14'] },
        { text: { en: `Temperature of ${PENDING} °C or shaking chills`, ar: `حرارة ${PENDING} درجة مئوية أو قشعريرة ورجفة` }, ev: 'opinion' },
        { text: { en: 'Confusion, hard to wake, or fainting', ar: 'تشوّش، أو صعوبة في الاستيقاظ، أو إغماء' }, ev: 'guideline', refs: ['R7'] },
        { text: { en: 'Tell staff: “I had a sleeve (or bypass) on this date.”', ar: 'أخبر الطاقم: «أجريت عملية تكميم (أو تحويل مسار) بتاريخ كذا».' }, ev: 'opinion', refs: ['R4'] },
      ],
    },
    {
      tone: 'neutral', icon: 'calendar',
      heading: { en: 'Later warning signs (months or years after)', ar: 'علامات خطر لاحقة (بعد أشهر أو سنوات)' },
      items: [
        { text: { en: 'Vomiting for days plus confusion, unsteady walking or double vision: emergency (low vitamin B1)', ar: 'قيء لأيام مع تشوّش أو عدم اتزان في المشي أو رؤية مزدوجة: حالة طارئة (نقص فيتامين ب1)' }, ev: 'guideline', refs: ['R7'] },
        { text: { en: 'Numbness or weakness with poor eating: contact your team today', ar: 'تنميل أو ضعف مع قلة الأكل: تواصل مع فريقك اليوم' }, ev: 'guideline', refs: ['R7'] },
        { text: { en: 'Bypass: sudden, strong cramping pain that comes and goes: emergency (internal hernia)', ar: 'بعد تحويل المسار: ألم مغص قوي ومفاجئ يأتي ويذهب: حالة طارئة (فتق داخلي)' }, ev: 'guideline', refs: ['R8', 'R9'] },
        { text: { en: 'Sleeve: new or worse heartburn, or food coming back up: tell your team', ar: 'بعد التكميم: حرقة جديدة أو أسوأ، أو رجوع الطعام: أخبر فريقك' }, ev: 'guideline', refs: ['R10'] },
        { text: { en: 'Within an hour of sweet food: sweating, racing heart, cramps, diarrhea (“dumping”): tell your team', ar: 'خلال ساعة من تناول السكريات: تعرّق وتسارع النبض ومغص وإسهال («متلازمة الإغراق»): أخبر فريقك' }, ev: 'consensus', refs: ['R11'] },
        { text: { en: '1–3 hours after eating: shaky, sweaty, hungry, confused (low blood sugar): tell your team', ar: 'بعد 1–3 ساعات من الأكل: رجفة وتعرّق وجوع وتشوّش (انخفاض السكر): أخبر فريقك' }, ev: 'consensus', refs: ['R11', 'R12'] },
        { text: { en: 'Low sugar with fainting or confusion: call 997', ar: 'انخفاض السكر مع إغماء أو تشوّش: اتصل على 997' }, ev: 'opinion', refs: ['R12'] },
      ],
    },
  ],
  teachBack: [
    { en: 'Which symptoms mean you should call 997 instead of waiting for the clinic?', ar: 'ما الأعراض التي تعني أن تتصل على 997 بدل انتظار العيادة؟' },
    { en: 'What will you tell the emergency staff about your operation?', ar: 'ماذا ستقول لطاقم الطوارئ عن عمليتك؟' },
    { en: 'What would you do if you could not keep fluids down today?', ar: 'ماذا ستفعل إن لم تستطع الاحتفاظ بالسوائل اليوم؟' },
  ],
  refs: [
    { id: 'R1', cite: 'Stenberg E, et al. Guidelines for perioperative care in bariatric surgery: ERAS Society recommendations, 2021 update. World J Surg. 2022;46:729–751.', url: 'https://doi.org/10.1007/s00268-021-06394-9' },
    { id: 'R2', cite: 'Mechanick JI, et al. Clinical practice guidelines for the perioperative nutrition, metabolic, and nonsurgical support of patients undergoing bariatric procedures, 2019 update (AACE/TOS/ASMBS/OMA/ASA). Surg Obes Relat Dis. 2020;16:175–247.', url: 'https://doi.org/10.1016/j.soard.2019.10.025' },
    { id: 'R3', cite: 'Hamilton EC, et al. Clinical predictors of leak after laparoscopic Roux-en-Y gastric bypass for morbid obesity. Surg Endosc. 2003;17:679–684.', url: 'https://pubmed.ncbi.nlm.nih.gov/12618940/' },
    { id: 'R4', cite: 'Al Zoubi M, et al. Challenges in the diagnosis of leak after sleeve gastrectomy. Obes Surg. 2021;31:612–616.', url: 'https://pubmed.ncbi.nlm.nih.gov/33025538/' },
    { id: 'R5', cite: 'Centers for Disease Control and Prevention. About venous thromboembolism (blood clots).', url: 'https://www.cdc.gov/blood-clots/about/' },
    { id: 'R6', cite: 'Sippey M, et al. 30-day readmissions after sleeve gastrectomy versus Roux-en-Y gastric bypass. Surg Obes Relat Dis. 2016;12:991–996.', url: 'https://pubmed.ncbi.nlm.nih.gov/27067353/' },
    { id: 'R7', cite: 'ASMBS Wernicke’s Encephalopathy Task Force. Clinical guidelines on Wernicke’s encephalopathy. Surg Obes Relat Dis. 2025;21:707–718.', url: 'https://doi.org/10.1016/j.soard.2025.03.009' },
    { id: 'R8', cite: 'Oviedo RJ, et al. (ASMBS Clinical Issues Committee). Chronic abdominal pain after Roux-en-Y gastric bypass. Surg Obes Relat Dis. 2026;22:309–316.', url: 'https://pubmed.ncbi.nlm.nih.gov/41412884/' },
    { id: 'R9', cite: 'Murakami K, et al. Closure of mesenteric defects after Roux-en-Y gastric bypass. Cochrane Database Syst Rev. 2025;4:CD014612.', url: 'https://pubmed.ncbi.nlm.nih.gov/40197535/' },
    { id: 'R10', cite: 'Campos GM, et al. ASMBS position statement on the rationale for performance of upper gastrointestinal endoscopy before and after metabolic and bariatric surgery. Surg Obes Relat Dis. 2021;17:837–847.', url: 'https://pubmed.ncbi.nlm.nih.gov/33875361/' },
    { id: 'R11', cite: 'Scarpellini E, et al. International consensus on the diagnosis and management of dumping syndrome. Nat Rev Endocrinol. 2020;16:448–466.', url: 'https://pubmed.ncbi.nlm.nih.gov/32457534/' },
    { id: 'R12', cite: 'Abdelgadir E, et al. Post-bariatric hypoglycemia management: a Gulf Cooperation Council consensus. J Endocr Soc. 2026;10:bvaf225.', url: 'https://pubmed.ncbi.nlm.nih.gov/41647132/' },
    { id: 'R13', cite: 'Aljabri D, Albinali H. Public awareness of the 997 emergency medical services number. Front Public Health. 2022;10:937202.', url: 'https://pubmed.ncbi.nlm.nih.gov/36262224/' },
    { id: 'R14', cite: 'Dick A, et al. Gastrointestinal bleeding after gastric bypass surgery. Surg Obes Relat Dis. 2010;6:643–647.', url: 'https://pubmed.ncbi.nlm.nih.gov/21111381/' },
  ],
  status: 'draft',
  version: '0.1',
  drafters: ['Amal (Quality & Patient Safety)', 'Khalid (Surgical Lead)', 'Ali (Evidence, Guidelines & Outcomes)'],
};
