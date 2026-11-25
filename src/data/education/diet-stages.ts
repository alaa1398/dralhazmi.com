// Drafted by Dana (Clinical Nutrition) with Noura (Bariatric Nurse Coordinator), 2026-11-25.
// Evidence review by Ali, 2026-11-25 (docs/education/diet-stages.md).
// Arabic: draft translation [ARABIC REVIEW] - needs a native-speaker read-aloud before approval.
// R7 (SCFHS pathway) is left off the page: it could not be opened to confirm.
import { PENDING, type Sheet } from './types';

export const dietStages: Sheet = {
  slug: 'diet-stages',
  hue: 'leaf',
  icon: 'bowl',
  topics: ['after', 'nutrition'],
  title: { en: 'Your diet stages after surgery', ar: 'مراحل الأكل بعد العملية' },
  subtitle: {
    en: 'How to move safely from liquids back to regular food.',
    ar: 'كيف تنتقل بأمان من السوائل إلى الطعام المعتاد.',
  },
  appliesTo: { en: 'Sleeve gastrectomy and gastric bypass', ar: 'تكميم المعدة وتحويل المسار' },
  keyNumbers: [
    { value: { en: '60 g+', ar: '60 غ+' }, label: { en: `protein a day, at least ${PENDING}`, ar: `بروتين يوميًا على الأقل ${PENDING}` }, ev: 'guideline', refs: ['R1', 'R2'] },
    { value: { en: '6–8 cups', ar: '6–8 أكواب' }, label: { en: `fluid a day, about 1.4–1.9 liters ${PENDING}`, ar: `سوائل يوميًا، نحو 1.4–1.9 لتر ${PENDING}` }, ev: 'guideline', refs: ['R1'] },
    { value: { en: '20–30 min', ar: '20–30 دقيقة' }, label: { en: 'to eat each meal', ar: 'لتناول كل وجبة' }, ev: 'guideline', refs: ['R1'] },
    { value: { en: '4–6 weeks', ar: '4–6 أسابيع' }, label: { en: `until regular textures ${PENDING}`, ar: `حتى العودة إلى الطعام المعتاد ${PENDING}` }, ev: 'guideline', refs: ['R1'] },
  ],
  panels: [
    {
      tone: 'neutral', icon: 'calendar',
      heading: { en: 'The stages', ar: 'المراحل' },
      intro: { en: `Your team tells you when to move on. ${PENDING}`, ar: `فريقك يخبرك متى تنتقل إلى المرحلة التالية. ${PENDING}` },
      items: [
        { text: { en: 'Clear liquids: water, broth, decaf tea. First 1–2 days.', ar: 'سوائل صافية: ماء، مرق، شاي منزوع الكافيين. أول يوم أو يومين.' }, ev: 'guideline', refs: ['R1', 'R2'] },
        { text: { en: 'Full liquids: high-protein, low-sugar drinks and soups. Up to week 1–2.', ar: 'سوائل كاملة: مشروبات وشوربات غنية بالبروتين وقليلة السكر. حتى الأسبوع 1–2.' }, ev: 'guideline', refs: ['R1'] },
        { text: { en: 'Puree (smooth) food after liquids.', ar: 'طعام مهروس ناعم بعد السوائل.' }, ev: 'guideline', refs: ['R1'] },
        { text: { en: 'Soft food you can mash with a fork: from week 2–3.', ar: 'طعام طري يُهرس بالشوكة: من الأسبوع 2–3.' }, ev: 'guideline', refs: ['R1'] },
        { text: { en: 'Regular textures: from week 4–6.', ar: 'الطعام المعتاد: من الأسبوع 4–6.' }, ev: 'guideline', refs: ['R1'] },
        { text: { en: 'Try one new food at a time.', ar: 'جرّب صنفًا جديدًا واحدًا في كل مرة.' }, ev: 'opinion' },
      ],
    },
    {
      tone: 'neutral', icon: 'egg',
      heading: { en: 'Protein first', ar: 'البروتين أولًا' },
      items: [
        { text: { en: 'Eat the protein part of each meal first.', ar: 'ابدأ بالجزء البروتيني من كل وجبة.' }, ev: 'opinion' },
        { text: { en: 'Spread protein over meals and snacks.', ar: 'وزّع البروتين على الوجبات والوجبات الخفيفة.' }, ev: 'guideline', refs: ['R1'] },
        { text: { en: 'Good choices: eggs, fish, chicken, yogurt, cheese, lentils.', ar: 'خيارات جيدة: البيض، السمك، الدجاج، الزبادي، الجبن، العدس.' }, ev: 'guideline', refs: ['R1'] },
        { text: { en: 'Milk upsets you? Choose lactose-free milk.', ar: 'الحليب يزعجك؟ اختر حليبًا خاليًا من اللاكتوز.' }, ev: 'guideline', refs: ['R1'] },
      ],
    },
    {
      tone: 'neutral', icon: 'drop',
      heading: { en: 'Drink enough, by sipping', ar: 'اشرب كفايتك، رشفة رشفة' },
      items: [
        { text: { en: 'Sip all day, between meals.', ar: 'ارتشف طوال اليوم، بين الوجبات.' }, ev: 'guideline', refs: ['R1'] },
        { text: { en: `Do not drink with meals. ${PENDING}`, ar: `لا تشرب مع الوجبات. ${PENDING}` }, ev: 'guideline', refs: ['R2'] },
        { text: { en: `After eating, wait 30 minutes before drinking. ${PENDING}`, ar: `بعد الأكل، انتظر 30 دقيقة قبل الشرب. ${PENDING}` }, ev: 'consensus', refs: ['R3', 'R5'] },
        { text: { en: 'Limit caffeine (regular coffee and tea) early on.', ar: 'قلّل الكافيين (القهوة والشاي العاديين) في البداية.' }, ev: 'guideline', refs: ['R1'] },
      ],
    },
    {
      tone: 'neutral', icon: 'clock',
      heading: { en: 'Eating habits for life', ar: 'عادات أكل مدى الحياة' },
      items: [
        { text: { en: 'Small meals at set times. No nibbling all day.', ar: 'وجبات صغيرة في أوقات محددة. لا تأكل بشكل متواصل طوال اليوم.' }, ev: 'guideline', refs: ['R1'] },
        { text: { en: 'Small bites. Chew each bite well.', ar: 'لقمات صغيرة، وامضغ كل لقمة جيدًا.' }, ev: 'guideline', refs: ['R1', 'R2'] },
        { text: { en: 'Eat slowly: 20–30 minutes per meal.', ar: 'كُل ببطء: 20–30 دقيقة لكل وجبة.' }, ev: 'guideline', refs: ['R1', 'R2'] },
        { text: { en: 'Stop when comfortable, not full.', ar: 'توقّف عند الشعور بالارتياح، لا عند الامتلاء.' }, ev: 'guideline', refs: ['R1'] },
      ],
    },
    {
      tone: 'amber', icon: 'alert',
      heading: { en: 'Avoid early on', ar: 'تجنّب في البداية' },
      items: [
        { text: { en: 'Fizzy drinks.', ar: 'المشروبات الغازية.' }, ev: 'guideline', refs: ['R1'] },
        { text: { en: 'Sugary drinks, sweets and baked goods.', ar: 'المشروبات المحلّاة والحلويات والمخبوزات.' }, ev: 'guideline', refs: ['R1', 'R5'] },
        { text: { en: 'Tough or dry meat.', ar: 'اللحوم القاسية أو الجافة.' }, ev: 'guideline', refs: ['R1'] },
        { text: { en: 'Bread, rice and pasta: they may feel “stuck”.', ar: 'الخبز والأرز والمعكرونة: قد تشعر أنها «عالقة».' }, ev: 'guideline', refs: ['R1'] },
        { text: { en: 'Skins, peels and stringy vegetables.', ar: 'القشور والخضار الليفية.' }, ev: 'guideline', refs: ['R1'] },
      ],
    },
    {
      tone: 'neutral', icon: 'stomach',
      heading: { en: 'When a food does not agree with you', ar: 'عندما لا يناسبك طعام ما' },
      items: [
        { text: { en: 'Nausea, vomiting, or food coming back up.', ar: 'غثيان أو قيء أو رجوع الطعام.' }, ev: 'guideline', refs: ['R1'] },
        { text: { en: 'Food feels stuck after you swallow.', ar: 'تشعر أن الطعام عالق بعد البلع.' }, ev: 'guideline', refs: ['R1'] },
        { text: { en: 'After sweets: sweating, fast heartbeat, cramps, diarrhea (“dumping”). It happens after either operation, more often after bypass.', ar: 'بعد الحلويات: تعرّق وتسارع النبض ومغص وإسهال («متلازمة الإغراق»). تحدث بعد العمليتين، وأكثر بعد تحويل المسار.' }, ev: 'consensus', refs: ['R5'] },
        { text: { en: 'Vomiting? Go back to liquids or soft food for 1–2 days.', ar: 'تتقيأ؟ ارجع إلى السوائل أو الطعام الطري يومًا أو يومين.' }, ev: 'guideline', refs: ['R1'] },
      ],
    },
    {
      tone: 'amber', icon: 'phone',
      heading: { en: 'Contact your surgical team', ar: 'تواصل مع فريقك الجراحي' },
      items: [
        { text: { en: 'Vomiting that keeps coming back.', ar: 'قيء يتكرر.' }, ev: 'guideline', refs: ['R2'] },
        { text: { en: 'Dizziness or headache from too little fluid.', ar: 'دوخة أو صداع بسبب قلة السوائل.' }, ev: 'guideline', refs: ['R1'] },
        { text: { en: 'Food gets stuck again and again.', ar: 'الطعام يعلق مرارًا.' }, ev: 'opinion' },
        { text: { en: 'Dumping that diet changes do not fix.', ar: 'متلازمة الإغراق لا تتحسن بتعديل الأكل.' }, ev: 'consensus', refs: ['R5'] },
        { text: { en: 'Before fasting Ramadan: plan it with your surgeon and dietitian.', ar: 'قبل صيام رمضان: خطّط له مع جرّاحك وأخصائي التغذية.' }, ev: 'consensus', refs: ['R6'] },
      ],
    },
    {
      tone: 'red', icon: 'alert',
      heading: { en: 'Call 997 or go to the emergency department', ar: 'اتصل على 997 أو توجّه إلى الطوارئ' },
      items: [
        { text: { en: 'Vomit that is bright red or dark brown.', ar: 'قيء أحمر فاتح أو بني داكن.' }, ev: 'guideline', refs: ['R1'] },
        { text: { en: 'You cannot keep any fluids down.', ar: 'لا تستطيع الاحتفاظ بأي سوائل.' }, ev: 'opinion', refs: ['R1'] },
        { text: { en: 'Severe belly pain, chest pain, or trouble breathing.', ar: 'ألم شديد في البطن أو ألم في الصدر أو صعوبة في التنفس.' }, ev: 'opinion' },
      ],
    },
  ],
  teachBack: [
    { en: 'Which stage are you on now, and what comes next?', ar: 'في أي مرحلة أنت الآن، وما المرحلة التالية؟' },
    { en: 'What do you eat first at each meal?', ar: 'ماذا تأكل أولًا في كل وجبة؟' },
    { en: 'How will you get enough fluid if you do not drink with meals?', ar: 'كيف ستشرب كفايتك من السوائل إن لم تشرب مع الوجبات؟' },
  ],
  refs: [
    { id: 'R1', cite: 'Benson-Davies S, Frederiksen K, Patel R. Bariatric nutrition and evaluation of the metabolic surgical patient: update to the 2022 Obesity Medicine Association (OMA) bariatric surgery, gastrointestinal hormones, and the microbiome clinical practice statement. Obes Pillars. 2025;13:100154.', url: 'https://doi.org/10.1016/j.obpill.2024.100154' },
    { id: 'R2', cite: 'Stenberg E, et al. Guidelines for perioperative care in bariatric surgery: Enhanced Recovery After Surgery (ERAS) Society recommendations: a 2021 update. World J Surg. 2022;46:729–751.', url: 'https://doi.org/10.1007/s00268-021-06394-9' },
    { id: 'R3', cite: 'Mechanick JI, et al. Clinical practice guidelines for the perioperative nutrition, metabolic, and nonsurgical support of patients undergoing bariatric procedures, 2019 update (AACE/TOS/ASMBS/OMA/ASA). Surg Obes Relat Dis. 2020;16:175–247.', url: 'https://doi.org/10.1016/j.soard.2019.10.025' },
    { id: 'R5', cite: 'Scarpellini E, et al. International consensus on the diagnosis and management of dumping syndrome. Nat Rev Endocrinol. 2020;16:448–466.', url: 'https://doi.org/10.1038/s41574-020-0357-5' },
    { id: 'R6', cite: 'Kermansaravi M, et al. Religious fasting of Muslim patients after metabolic and bariatric surgery: a modified Delphi consensus. Obes Surg. 2021;31:5303–5311.', url: 'https://doi.org/10.1007/s11695-021-05724-z' },
  ],
  status: 'draft',
  version: '0.2',
  drafters: ['Dana (Clinical Nutrition)', 'Noura (Bariatric Nurse Coordinator)', 'Ali (Evidence, Guidelines & Outcomes)'],
};
