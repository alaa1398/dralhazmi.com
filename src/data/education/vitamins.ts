// Drafted by Anas (Clinical Pharmacist) with Dana (Clinical Nutrition), 2026-11-25.
// Evidence review by Ali, 2026-11-25 (docs/education/vitamins.md).
// Arabic: draft translation [ARABIC REVIEW] - needs a native-speaker read-aloud before approval.
// No brand names, by rule. ASMBS 2016 doses are confirmed only as quoted in BOMSS 2020 (R2).
import { PENDING, type Sheet } from './types';

export const vitamins: Sheet = {
  slug: 'vitamins',
  hue: 'amber',
  icon: 'pill',
  topics: ['after', 'nutrition'],
  title: { en: 'Your vitamins after surgery', ar: 'الفيتامينات بعد العملية' },
  subtitle: {
    en: 'How to take your vitamins and minerals safely, for life.',
    ar: 'كيف تتناول الفيتامينات والمعادن بأمان، مدى الحياة.',
  },
  appliesTo: { en: 'Sleeve gastrectomy and gastric bypass', ar: 'تكميم المعدة وتحويل المسار' },
  keyNumbers: [
    { value: { en: 'For life', ar: 'مدى الحياة' }, label: { en: 'vitamins and minerals every day', ar: 'فيتامينات ومعادن كل يوم' }, ev: 'guideline', refs: ['R1', 'R2'] },
    { value: { en: '1,200–1,500 mg', ar: '1200–1500 ملغ' }, label: { en: 'calcium a day, from food plus supplements', ar: 'كالسيوم يوميًا من الطعام والمكمّلات' }, ev: 'guideline', refs: ['R1', 'R2'] },
    { value: { en: '2 hours', ar: 'ساعتان' }, label: { en: 'gap between calcium and iron', ar: 'فاصل بين الكالسيوم والحديد' }, ev: 'guideline', refs: ['R2', 'R8'] },
    { value: { en: '3–6 months', ar: '3–6 أشهر' }, label: { en: 'between blood tests in year one, then yearly', ar: 'بين تحاليل الدم في السنة الأولى، ثم سنويًا' }, ev: 'guideline', refs: ['R1', 'R2'] },
  ],
  panels: [
    {
      tone: 'neutral', icon: 'pill',
      heading: { en: 'Every day, for life', ar: 'كل يوم، مدى الحياة' },
      items: [
        { text: { en: 'Take a complete multivitamin with minerals every day.', ar: 'تناول فيتامينات متعددة كاملة مع المعادن كل يوم.' }, ev: 'guideline', refs: ['R1', 'R2'] },
        { text: { en: 'How many: 2 a day.', ar: 'العدد: حبتان يوميًا.' }, ev: 'guideline', refs: ['R7'] },
        { text: { en: 'Early on, chewable or liquid forms are easier to take.', ar: 'في البداية، الأشكال القابلة للمضغ أو السائلة أسهل في التناول.' }, ev: 'guideline', refs: ['R8'] },
        { text: { en: 'Never stop on your own. Vitamins are for life.', ar: 'لا توقفها من تلقاء نفسك. الفيتامينات مدى الحياة.' }, ev: 'guideline', refs: ['R2'] },
        { text: { en: 'Buy supplements only from a licensed pharmacy.', ar: 'اشترِ المكمّلات من صيدلية مرخّصة فقط.' }, ev: 'opinion' },
      ],
    },
    {
      tone: 'neutral', icon: 'sun',
      heading: { en: 'Calcium and vitamin D: for your bones', ar: 'الكالسيوم وفيتامين د: لعظامك' },
      items: [
        { text: { en: 'Split calcium into smaller doses through the day.', ar: 'قسّم الكالسيوم على جرعات صغيرة خلال اليوم.' }, ev: 'guideline', refs: ['R1', 'R2'] },
        { text: { en: 'Calcium citrate: with or without food. Carbonate: with meals.', ar: 'سترات الكالسيوم: مع الطعام أو بدونه. كربونات الكالسيوم: مع الوجبات.' }, ev: 'guideline', refs: ['R1', 'R2'] },
        { text: { en: 'Take vitamin D 3,000 IU a day; your blood test may change the dose.', ar: 'تناول فيتامين د بجرعة 3000 وحدة دولية يوميًا؛ وقد يغيّر تحليل الدم الجرعة.' }, ev: 'guideline', refs: ['R1', 'R8'] },
      ],
    },
    {
      tone: 'neutral', icon: 'drop',
      heading: { en: 'Iron and vitamin B12: for your blood', ar: 'الحديد وفيتامين ب12: لدمك' },
      items: [
        { text: { en: 'Iron: 45–60 mg a day in total. Men with no history of anemia may need only 18 mg.', ar: 'الحديد: 45–60 ملغ يوميًا من كل المكمّلات. وقد يكفي 18 ملغ للرجال الذين لم يُصابوا بفقر الدم من قبل.' }, ev: 'guideline', refs: ['R1'] },
        { text: { en: 'Women who have periods usually need more iron.', ar: 'النساء في سن الدورة الشهرية يحتجن عادةً إلى حديد أكثر.' }, ev: 'guideline', refs: ['R1', 'R2'] },
        { text: { en: 'Take iron with orange juice or vitamin C.', ar: 'تناول الحديد مع عصير البرتقال أو فيتامين سي.' }, ev: 'guideline', refs: ['R2'] },
        { text: { en: 'Keep iron and calcium at least 2 hours apart.', ar: 'افصل بين الحديد والكالسيوم ساعتين على الأقل.' }, ev: 'guideline', refs: ['R2', 'R8'] },
        { text: { en: 'You need extra vitamin B12: an injection once a month.', ar: 'تحتاج إلى فيتامين ب12 إضافي: حقنة مرة كل شهر.' }, ev: 'guideline', refs: ['R1'] },
      ],
    },
    {
      tone: 'neutral', icon: 'shield',
      heading: { en: 'Vitamin B1 (thiamine): protects nerves and brain', ar: 'فيتامين ب1 (الثيامين): يحمي الأعصاب والدماغ' },
      items: [
        { text: { en: 'Your multivitamin must contain vitamin B1.', ar: 'يجب أن تحتوي الفيتامينات المتعددة على فيتامين ب1.' }, ev: 'guideline', refs: ['R1', 'R2'] },
        { text: { en: 'B1 can drop fast if you keep vomiting.', ar: 'قد ينخفض فيتامين ب1 بسرعة إذا تكرر القيء.' }, ev: 'guideline', refs: ['R2'] },
        { text: { en: 'Vitamin B1: at least 12 mg a day, ideally 50 mg once or twice a day.', ar: 'فيتامين ب1: 12 ملغ يوميًا على الأقل، والأفضل 50 ملغ مرة أو مرتين يوميًا.' }, ev: 'guideline', refs: ['R1'] },
      ],
    },
    {
      tone: 'neutral', icon: 'list',
      heading: { en: 'Sleeve or bypass: mostly the same', ar: 'التكميم أو تحويل المسار: النصائح متشابهة غالبًا' },
      items: [
        { text: { en: 'Most vitamin advice is the same for both operations.', ar: 'معظم نصائح الفيتامينات واحدة للعمليتين.' }, ev: 'guideline', refs: ['R2'] },
        { text: { en: 'Zinc, copper and selenium are checked if you have symptoms, or yearly as your team decides.', ar: 'يُفحص الزنك والنحاس والسيلينيوم عند ظهور أعراض، أو سنويًا حسب ما يقرره فريقك.' }, ev: 'guideline', refs: ['R2', 'R9'] },
        { text: { en: 'Your multivitamin should include vitamin A.', ar: 'يجب أن تحتوي الفيتامينات المتعددة على فيتامين أ.' }, ev: 'guideline', refs: ['R1'] },
      ],
    },
    {
      tone: 'neutral', icon: 'test',
      heading: { en: 'Your blood tests', ar: 'تحاليل الدم' },
      items: [
        { text: { en: 'Year one: every 3–6 months.', ar: 'السنة الأولى: كل 3–6 أشهر.' }, ev: 'guideline', refs: ['R1', 'R2'] },
        { text: { en: 'After that: at least once a year, for life.', ar: 'بعد ذلك: مرة في السنة على الأقل، مدى الحياة.' }, ev: 'guideline', refs: ['R2', 'R3'] },
        { text: { en: 'Blood count, iron stores (ferritin), folate (a B vitamin) and B12.', ar: 'صورة الدم، ومخزون الحديد (الفيريتين)، والفولات (من فيتامينات ب)، وب12.' }, ev: 'guideline', refs: ['R2'] },
        { text: { en: 'Vitamin D, calcium, kidney and liver tests.', ar: 'فيتامين د، والكالسيوم، ووظائف الكلى والكبد.' }, ev: 'guideline', refs: ['R2'] },
        { text: { en: 'Zinc and copper (minerals) at least once a year.', ar: 'الزنك والنحاس (معادن) مرة في السنة على الأقل.' }, ev: 'guideline', refs: ['R2'] },
      ],
    },
    {
      tone: 'amber', icon: 'phone',
      heading: { en: 'Contact your surgical team', ar: 'تواصل مع فريقك الجراحي' },
      items: [
        { text: { en: 'Vomiting that does not stop, or you cannot keep vitamins down.', ar: 'قيء لا يتوقف، أو لا تستطيع الاحتفاظ بالفيتامينات.' }, ev: 'guideline', refs: ['R2'] },
        { text: { en: 'Eating very little, or losing weight very fast.', ar: 'تأكل قليلًا جدًا، أو ينخفض وزنك بسرعة كبيرة.' }, ev: 'guideline', refs: ['R2'] },
        { text: { en: 'Numbness, tingling or burning in your feet or legs.', ar: 'تنميل أو وخز أو حرقة في القدمين أو الساقين.' }, ev: 'guideline', refs: ['R2'] },
        { text: { en: `Hair loss or a change in taste. ${PENDING}`, ar: `تساقط الشعر أو تغيّر في التذوق. ${PENDING}` }, ev: 'guideline', refs: ['R2', 'R8'] },
        { text: { en: 'Unusual tiredness, breathlessness or pale skin.', ar: 'تعب غير معتاد، أو ضيق في التنفس، أو شحوب.' }, ev: 'opinion' },
        { text: { en: 'You stopped your vitamins, for any reason.', ar: 'توقفت عن الفيتامينات لأي سبب.' }, ev: 'opinion' },
      ],
    },
    {
      tone: 'red', icon: 'alert',
      heading: { en: 'Call 997 or go to the emergency department', ar: 'اتصل على 997 أو توجّه إلى الطوارئ' },
      items: [
        { text: { en: 'Confusion, or very sleepy and hard to wake.', ar: 'تشوّش، أو نعاس شديد وصعوبة في الاستيقاظ.' }, ev: 'guideline', refs: ['R2'] },
        { text: { en: 'Cannot walk steadily, or new trouble with balance.', ar: 'لا تستطيع المشي بثبات، أو صعوبة جديدة في التوازن.' }, ev: 'guideline', refs: ['R2'] },
        { text: { en: 'Fast heartbeat with breathlessness or swollen legs.', ar: 'تسارع النبض مع ضيق في التنفس أو تورم الساقين.' }, ev: 'guideline', refs: ['R2'] },
        { text: { en: 'Tell staff: “I had weight-loss surgery. Check vitamin B1.”', ar: 'أخبر الطاقم: «أجريت جراحة سمنة. افحصوا فيتامين ب1».' }, ev: 'opinion', refs: ['R2'] },
      ],
    },
  ],
  teachBack: [
    { en: 'Which vitamins will you take every day, and for how long?', ar: 'ما الفيتامينات التي ستتناولها كل يوم، وإلى متى؟' },
    { en: 'How will you space your calcium and your iron?', ar: 'كيف ستفصل بين الكالسيوم والحديد؟' },
    { en: 'What would make you go to the emergency department?', ar: 'ما الذي يستدعي ذهابك إلى الطوارئ؟' },
  ],
  refs: [
    { id: 'R1', cite: 'Parrott J, et al. American Society for Metabolic and Bariatric Surgery Integrated Health Nutritional Guidelines for the Surgical Weight Loss Patient 2016 Update: Micronutrients. Surg Obes Relat Dis. 2017;13:727–741.', url: 'https://doi.org/10.1016/j.soard.2016.12.018' },
    { id: 'R2', cite: 'O’Kane M, et al. British Obesity and Metabolic Surgery Society guidelines on perioperative and postoperative biochemical monitoring and micronutrient replacement for patients undergoing bariatric surgery: 2020 update. Obes Rev. 2020;21:e13087.', url: 'https://doi.org/10.1111/obr.13087' },
    { id: 'R3', cite: 'Steenackers N, et al. Current clinical practice guidelines for nutritional screening before and after sleeve gastrectomy and Roux-en-Y gastric bypass: a scoping review. Curr Obes Rep. 2025;14:16.', url: 'https://doi.org/10.1007/s13679-025-00606-2' },
    { id: 'R7', cite: 'Mechanick JI, et al. Clinical practice guidelines for the perioperative nutrition, metabolic, and nonsurgical support of patients undergoing bariatric procedures, 2019 update (AACE/TOS/ASMBS/OMA/ASA). Endocr Pract. 2019;25:1346–1359.', url: 'https://doi.org/10.4158/GL-2019-0406' },
    { id: 'R8', cite: 'Benson-Davies S, Frederiksen K, Patel R. Bariatric nutrition and evaluation of the metabolic surgical patient: update to the 2022 Obesity Medicine Association (OMA) clinical practice statement. Obes Pillars. 2025;13:100154.', url: 'https://doi.org/10.1016/j.obpill.2024.100154' },
    { id: 'R9', cite: 'British Obesity and Metabolic Surgery Society. Post-bariatric surgery nutritional guidance for GPs. Updated 2023.', url: 'https://bomss.org/bomss-post-bariatric-surgery-nutritional-guidance-for-gps' },
  ],
  status: 'draft',
  version: '0.4',
  drafters: ['Anas (Clinical Pharmacist)', 'Dana (Clinical Nutrition)', 'Ali (Evidence, Guidelines & Outcomes)'],
};
