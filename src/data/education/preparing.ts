// Drafted by Noura (Bariatric Nurse Coordinator) with Tariq (Anesthesia & Perioperative), 2026-11-25.
// Evidence review by Ali, 2026-11-25 (docs/education/preparing.md).
// Arabic: draft translation [ARABIC REVIEW] - needs a native-speaker read-aloud before approval.
// R2 (AACE 2019) read and confirmed through Tavily on 2026-11-27 (docs/education/preparing-validation.md).
// R6 (ASMBS optimization) stays off the page: its full text could not be read to confirm.
import { PENDING, type Sheet } from './types';

export const preparing: Sheet = {
  slug: 'preparing',
  hue: 'sky',
  icon: 'list',
  topics: ['before'],
  title: { en: 'Getting ready for your surgery', ar: 'الاستعداد للعملية' },
  subtitle: {
    en: 'What to do in the weeks before your weight-loss operation.',
    ar: 'ما تفعله في الأسابيع التي تسبق عملية إنقاص الوزن.',
  },
  appliesTo: { en: 'Sleeve gastrectomy and gastric bypass', ar: 'تكميم المعدة وتحويل المسار' },
  keyNumbers: [
    { value: { en: '4 weeks', ar: '4 أسابيع' }, label: { en: 'at least: stop smoking before surgery', ar: 'على الأقل: توقّف عن التدخين قبل العملية' }, ev: 'guideline', refs: ['R1'] },
    { value: { en: '2–4 weeks', ar: '2–4 أسابيع' }, label: { en: 'low-calorie diet before surgery', ar: 'نظام منخفض السعرات قبل العملية' }, ev: 'guideline', refs: ['R1'] },
    { value: { en: '24 hours', ar: '24 ساعة' }, label: { en: 'clear liquids only before surgery', ar: 'سوائل صافية فقط قبل العملية' }, ev: 'opinion' },
    { value: { en: '12–18 months', ar: '12–18 شهرًا' }, label: { en: 'wait before pregnancy after surgery', ar: 'انتظار قبل الحمل بعد العملية' }, ev: 'guideline', refs: ['R2', 'R11', 'R5'] },
  ],
  panels: [
    {
      tone: 'neutral', icon: 'check',
      heading: { en: 'Your checks before surgery', ar: 'الفحوصات قبل العملية' },
      items: [
        { text: { en: 'See the surgeon to plan your operation.', ar: 'قابل الجرّاح لتخطيط عمليتك.' }, ev: 'guideline', refs: ['R1'] },
        { text: { en: 'Meet the dietitian for a full nutrition check.', ar: 'قابل أخصائي التغذية لتقييم غذائي شامل.' }, ev: 'guideline', refs: ['R1'] },
        { text: { en: 'Meet the psychologist to talk about habits and support.', ar: 'قابل الأخصائي النفسي للحديث عن العادات والدعم.' }, ev: 'guideline', refs: ['R1'] },
        { text: { en: 'Have the blood tests and other checks your doctors order.', ar: 'أجرِ تحاليل الدم والفحوصات التي يطلبها أطباؤك.' }, ev: 'opinion' },
        { text: { en: 'Answer sleep apnea questions (breathing stops during sleep).', ar: 'أجب عن أسئلة انقطاع النفس أثناء النوم.' }, ev: 'guideline', refs: ['R1', 'R2'] },
        { text: { en: 'You will have a camera test of the stomach (endoscopy).', ar: 'سيُجرى لك منظار للمعدة.' }, ev: 'guideline', refs: ['R8'] },
      ],
    },
    {
      tone: 'neutral', icon: 'nosmoke',
      heading: { en: 'Stop smoking and vaping', ar: 'توقّف عن التدخين والسجائر الإلكترونية' },
      items: [
        { text: { en: 'Stop all smoking at least 4 weeks before surgery.', ar: 'توقّف عن التدخين تمامًا قبل العملية بـ 4 أسابيع على الأقل.' }, ev: 'guideline', refs: ['R1'] },
        { text: { en: 'Surgery soon? Stop now. It still helps.', ar: 'العملية قريبة؟ توقّف الآن، فذلك يفيد.' }, ev: 'guideline', refs: ['R2'] },
        { text: { en: 'Smoking raises the risk of ulcers, infection and lung problems.', ar: 'التدخين يزيد خطر القرحة والالتهابات ومشكلات الرئة.' }, ev: 'guideline', refs: ['R1'] },
        { text: { en: 'Stop vaping and all nicotine products too.', ar: 'توقّف أيضًا عن السجائر الإلكترونية وكل منتجات النيكوتين.' }, ev: 'opinion', refs: ['R11'] },
        { text: { en: 'Ask your team for help to quit.', ar: 'اطلب من فريقك المساعدة على الإقلاع.' }, ev: 'guideline', refs: ['R1'] },
      ],
    },
    {
      tone: 'neutral', icon: 'bowl',
      heading: { en: 'Diet and activity', ar: 'الأكل والنشاط' },
      items: [
        { text: { en: 'Follow a low-calorie diet for 2–4 weeks before surgery.', ar: 'اتبع نظامًا منخفض السعرات لمدة 2–4 أسابيع قبل العملية.' }, ev: 'guideline', refs: ['R1'] },
        { text: { en: 'It shrinks the liver, so surgery is safer.', ar: 'يقلّص حجم الكبد، فتصبح العملية أكثر أمانًا.' }, ev: 'guideline', refs: ['R1'] },
        { text: { en: 'Diabetes? Your sugar can drop low. Check it often.', ar: 'لديك سكري؟ قد ينخفض السكر، فافحصه كثيرًا.' }, ev: 'guideline', refs: ['R1'] },
        { text: { en: 'Keep active, for example with daily walks.', ar: 'حافظ على نشاطك، بالمشي اليومي مثلًا.' }, ev: 'opinion' },
      ],
    },
    {
      tone: 'neutral', icon: 'pill',
      heading: { en: 'Medicines: tell your team about all of them', ar: 'الأدوية: أخبر فريقك بها كلها' },
      items: [
        { text: { en: 'Blood thinners: ask before stopping. Never stop on your own.', ar: 'مميّعات الدم: اسأل قبل إيقافها، ولا توقفها من تلقاء نفسك.' }, ev: 'opinion' },
        { text: { en: 'Diabetes medicines may need new doses before surgery.', ar: 'قد تحتاج أدوية السكري إلى تعديل الجرعات قبل العملية.' }, ev: 'guideline', refs: ['R1'] },
        { text: { en: 'Weight-loss injections (GLP-1 medicines): stop them 7 days before surgery.', ar: 'إبر إنقاص الوزن (أدوية GLP-1): أوقفها قبل العملية بـ 7 أيام.' }, ev: 'guideline', refs: ['R13', 'R3'] },
        { text: { en: 'Herbal products and supplements: tell your team. Some are paused.', ar: 'الأعشاب والمكمّلات: أخبر فريقك، فبعضها يُوقف مؤقتًا.' }, ev: 'consensus', refs: ['R7'] },
        { text: { en: 'Estrogen pills are usually stopped before surgery: 1 cycle of birth control pills, or 3 weeks of hormone replacement.', ar: 'تُوقف حبوب الإستروجين عادةً قبل العملية: دورة واحدة من حبوب منع الحمل، أو 3 أسابيع من العلاج الهرموني التعويضي.' }, ev: 'guideline', refs: ['R2', 'R1'] },
      ],
    },
    {
      tone: 'neutral', icon: 'baby',
      heading: { en: 'Pregnancy and birth control', ar: 'الحمل ومنع الحمل' },
      items: [
        { text: { en: 'Avoid pregnancy for 12–18 months after surgery.', ar: 'تجنّبي الحمل لمدة 12–18 شهرًا بعد العملية.' }, ev: 'guideline', refs: ['R2', 'R5', 'R11'] },
        { text: { en: 'Fertility often rises after surgery. Plan birth control now.', ar: 'تزداد الخصوبة غالبًا بعد العملية، فخطّطي لمنع الحمل من الآن.' }, ev: 'guideline', refs: ['R2', 'R5'] },
        { text: { en: 'Birth control pills may work less well after surgery.', ar: 'قد تقل فعالية حبوب منع الحمل بعد العملية.' }, ev: 'consensus', refs: ['R5'] },
        { text: { en: 'After either operation, ask about an implant or IUD (coil).', ar: 'بعد أي من العمليتين، اسألي عن الغرسة أو اللولب.' }, ev: 'consensus', refs: ['R5'] },
      ],
    },
    {
      tone: 'neutral', icon: 'bag',
      heading: { en: 'Fasting and what to bring', ar: 'الصيام قبل العملية وما تحضره معك' },
      items: [
        { text: { en: 'For 24 hours before surgery: clear liquids only, no solid food.', ar: 'خلال 24 ساعة قبل العملية: سوائل صافية فقط، دون طعام صلب.' }, ev: 'opinion' },
        { text: { en: 'Clear drinks (water) until 2 hours before.', ar: 'المشروبات الصافية (الماء) حتى ساعتين قبل التخدير.' }, ev: 'guideline', refs: ['R1', 'R4'] },
        { text: { en: 'Follow the exact times your hospital gives you.', ar: 'التزم بالأوقات التي يحددها لك المستشفى.' }, ev: 'opinion' },
        { text: { en: 'Bring your sleep apnea (CPAP) machine and mask.', ar: 'أحضر جهاز انقطاع النفس أثناء النوم (CPAP) والقناع.' }, ev: 'guideline', refs: ['R1', 'R2'] },
        { text: { en: 'Bring your medicines or a written list.', ar: 'أحضر أدويتك أو قائمة مكتوبة بها.' }, ev: 'opinion' },
        { text: { en: 'Bring loose clothes, flat shoes, glasses and a charger. Leave valuables home.', ar: 'أحضر ملابس واسعة وحذاءً مسطحًا ونظارتك وشاحنًا، واترك الأشياء الثمينة في المنزل.' }, ev: 'opinion' },
      ],
    },
    {
      tone: 'amber', icon: 'phone',
      heading: { en: 'Contact your surgical team', ar: 'تواصل مع فريقك الجراحي' },
      items: [
        { text: { en: 'You get a fever, cough or cold before surgery.', ar: 'أصابتك حمى أو سعال أو زكام قبل العملية.' }, ev: 'opinion' },
        { text: { en: 'You start, stop or change any medicine.', ar: 'بدأت دواءً أو أوقفته أو غيّرته.' }, ev: 'opinion' },
        { text: { en: 'You think you may be pregnant.', ar: 'تعتقدين أنك قد تكونين حاملًا.' }, ev: 'opinion' },
        { text: { en: 'You cannot follow the diet, or your sugar readings stay low.', ar: 'لا تستطيع الالتزام بالنظام الغذائي، أو قراءات السكر تبقى منخفضة.' }, ev: 'opinion' },
      ],
    },
  ],
  teachBack: [
    { en: 'When will you stop smoking, and who can help you?', ar: 'متى ستتوقف عن التدخين، ومن يمكنه مساعدتك؟' },
    { en: 'Which of your medicines will you ask your team about?', ar: 'أي أدويتك ستسأل فريقك عنها؟' },
    { en: 'When is your last meal and your last drink before surgery?', ar: 'متى آخر وجبة وآخر مشروب لك قبل العملية؟' },
  ],
  refs: [
    { id: 'R1', cite: 'Stenberg E, et al. Guidelines for perioperative care in bariatric surgery: Enhanced Recovery After Surgery (ERAS) Society recommendations: a 2021 update. World J Surg. 2022;46:729–751.', url: 'https://doi.org/10.1007/s00268-021-06394-9' },
    { id: 'R2', cite: 'Mechanick JI, et al. Clinical practice guidelines for the perioperative nutrition, metabolic, and nonsurgical support of patients undergoing bariatric procedures, 2019 update (AACE/TOS/ASMBS/OMA/ASA). Endocr Pract. 2019;25:1346–1359.', url: 'https://doi.org/10.4158/GL-2019-0406' },
    { id: 'R3', cite: 'Kindel TL, et al. Multi-society clinical practice guidance for the safe use of glucagon-like peptide-1 receptor agonists in the perioperative period. Surg Endosc. 2025;39:180–183.', url: 'https://doi.org/10.1007/s00464-024-11263-2' },
    { id: 'R4', cite: 'American Society of Anesthesiologists Task Force on Preoperative Fasting. Practice guidelines for preoperative fasting and the use of pharmacologic agents to reduce the risk of pulmonary aspiration: application to healthy patients undergoing elective procedures. Anesthesiology. 2017;126:376–393.', url: 'https://doi.org/10.1097/ALN.0000000000001452' },
    { id: 'R5', cite: 'Shawe J, et al. Pregnancy after bariatric surgery: consensus recommendations for periconception, antenatal and postnatal care. Obes Rev. 2019;20:1507–1522.', url: 'https://doi.org/10.1111/obr.12927' },
    { id: 'R7', cite: 'Cummings KC, et al. Preoperative management of surgical patients using dietary supplements: Society for Perioperative Assessment and Quality Improvement (SPAQI) consensus statement. Mayo Clin Proc. 2021;96:1342–1355.', url: 'https://doi.org/10.1016/j.mayocp.2020.08.016' },
    { id: 'R8', cite: 'Brown WA, et al. International Federation for Surgery for Obesity and Metabolic Disorders position statement on the role of upper gastrointestinal endoscopy before and after metabolic bariatric surgery. Obes Surg. 2025;35:4889–4916.', url: 'https://doi.org/10.1007/s11695-025-08206-8' },
    { id: 'R13', cite: 'American Society of Anesthesiologists Task Force on Preoperative Fasting. Consensus-based guidance on preoperative management of patients (adults and children) on glucagon-like peptide-1 (GLP-1) receptor agonists. June 2023.', url: 'https://www.asahq.org/about-asa/newsroom/news-releases/2023/06/american-society-of-anesthesiologists-consensus-based-guidance-on-preoperative' },
    { id: 'R11', cite: 'American Society for Metabolic and Bariatric Surgery. Life after bariatric surgery; FAQs of bariatric surgery (patient pages). Accessed 25 November 2026.', url: 'https://asmbs.org/patients/life-after-bariatric-surgery/' },
  ],
  status: 'draft',
  version: '0.5',
  drafters: ['Noura (Bariatric Nurse Coordinator)', 'Tariq (Anesthesia & Perioperative Medicine)', 'Ali (Evidence, Guidelines & Outcomes)'],
};
