// Shared site data. Every user-facing string has an English and an Arabic version.

export const langs = ['en', 'ar'] as const;
export type Lang = (typeof langs)[number];
export type T = Record<Lang, string>;

// Used by every page under src/pages/[lang]/ to build /en/ and /ar/ versions.
export const langPaths = () => langs.map((lang) => ({ params: { lang } }));

// Draft mode: shows a review banner and asks search engines not to index.
// Set to false only after Dr. Alhazmi approves the content.
export const DRAFT = true;

export const site = {
  url: 'https://dralhazmi.com',
  name: { en: 'Dr. Alaa Alhazmi', ar: 'د. علاء الحازمي' },
  title: {
    en: 'Bariatric, Metabolic & Robotic Surgeon',
    ar: 'استشاري جراحة السمنة والجراحة الأيضية والروبوتية',
  },
  credentials: 'MD, FACS, ABS, ABOM, MBA',
};

export const phone = {
  intl: '+966 50 970 4040',
  tel: 'tel:+966509704040',
  whatsapp: 'https://wa.me/966509704040',
};

export function whatsappLink(message?: string) {
  return message ? `${phone.whatsapp}?text=${encodeURIComponent(message)}` : phone.whatsapp;
}

export const whatsappMessages = {
  booking: { en: 'Appointment request: ', ar: 'طلب موعد: ' },
  secondOpinion: { en: 'Second opinion request: ', ar: 'طلب رأي طبي ثانٍ: ' },
};

export const faisalNote: T = {
  en: 'Calls are answered by Faisal, Dr. Alhazmi’s AI assistant, who can take your message.',
  ar: 'يرد على الاتصالات فيصل، المساعد الذكي للدكتور علاء الحازمي، ويمكنه تسجيل رسالتك.',
};

export const social = [
  { name: 'WhatsApp', handle: '+966 50 970 4040', url: phone.whatsapp },
  { name: 'Instagram', handle: '@alaa.a.alhazmi', url: 'https://www.instagram.com/alaa.a.alhazmi/' },
  { name: 'Snapchat', handle: '@dralaa.alhazmi', url: 'https://www.snapchat.com/add/dralaa.alhazmi' },
  { name: 'TikTok', handle: '@dr.alaa.hazmi', url: 'https://www.tiktok.com/@dr.alaa.hazmi' },
  { name: 'YouTube', handle: '@AlaaAlhazmi-g8e', url: 'https://www.youtube.com/@AlaaAlhazmi-g8e' },
  { name: 'X', handle: '@DrAlaaHazmi', url: 'https://x.com/DrAlaaHazmi' },
  { name: 'LinkedIn', handle: 'in/dr-alaa-alhazmi', url: 'https://www.linkedin.com/in/dr-alaa-alhazmi' },
  { name: 'Facebook', handle: '@dr.alaa.alhazmi.ksa', url: 'https://www.facebook.com/dr.alaa.alhazmi.ksa' },
];

export const nav: { path: string; label: T }[] = [
  { path: '', label: { en: 'Home', ar: 'الرئيسية' } },
  { path: 'about', label: { en: 'About', ar: 'نبذة' } },
  { path: 'treatments', label: { en: 'Treatments', ar: 'العلاجات' } },
  { path: 'journey', label: { en: 'Your Journey', ar: 'رحلتك العلاجية' } },
  { path: 'second-opinion', label: { en: 'Second Opinion', ar: 'رأي طبي ثانٍ' } },
  { path: 'media', label: { en: 'Learn', ar: 'تثقيف' } },
  { path: 'team', label: { en: 'Team', ar: 'الفريق' } },
];

export const ui = {
  bookWhatsApp: { en: 'Book on WhatsApp', ar: 'احجز عبر واتساب' },
  whatsapp: { en: 'WhatsApp', ar: 'واتساب' },
  call: { en: 'Call', ar: 'اتصال' },
  switchLang: { en: 'العربية', ar: 'English' },
  draft: {
    en: 'Draft for review. Content is not yet approved for publication.',
    ar: 'مسودة للمراجعة. لم يُعتمد المحتوى للنشر بعد.',
  },
  emergency: {
    en: 'For a medical emergency, call 997 or go to the nearest emergency department.',
    ar: 'في الحالات الطارئة، اتصل على 997 أو توجّه إلى أقرب قسم طوارئ.',
  },
  links: { en: 'All links', ar: 'جميع الروابط' },
  privacy: { en: 'Privacy', ar: 'الخصوصية' },
  learnMore: { en: 'Learn more', ar: 'اعرف المزيد' },
  rights: { en: 'All rights reserved.', ar: 'جميع الحقوق محفوظة.' },
};

export type Treatment = {
  slug: string;
  name: T;
  summary: T;
  what: T;
  who: T;
  expect: T;
};

export const treatments: Treatment[] = [
  {
    slug: 'bariatric-surgery',
    name: { en: 'Bariatric Surgery', ar: 'جراحة السمنة' },
    summary: {
      en: 'Weight-loss operations such as sleeve gastrectomy and gastric bypass, for people living with obesity.',
      ar: 'عمليات لإنقاص الوزن، مثل تكميم المعدة وتحويل المسار، لمن يعانون من السمنة.',
    },
    what: {
      en: 'Bariatric surgery changes the stomach and, in some operations, the small intestine, to reduce how much you eat and change the hormones that control hunger and metabolism. The most common operations are sleeve gastrectomy and gastric bypass. Revision surgery is an option for some patients who had a previous weight-loss operation.',
      ar: 'تُجرى جراحة السمنة على المعدة، وفي بعض العمليات على الأمعاء الدقيقة أيضًا، فتقلّ كمية الطعام التي يتناولها المريض، وتتغيّر الهرمونات المسؤولة عن الشعور بالجوع وعن عمليات الأيض. وأشهر هذه العمليات تكميم المعدة وتحويل المسار. أما من أجرى عملية سابقة لإنقاص الوزن، فقد تكون العملية التصحيحية خيارًا مناسبًا له.',
    },
    who: {
      en: 'The 2022 ASMBS/IFSO guidelines recommend surgery for adults with a BMI of 35 or more, and considering it from a BMI of 30 with metabolic disease (lower thresholds apply to people of Asian descent). Whether surgery is right for you is decided only after a full assessment.',
      ar: 'توصي الإرشادات الصادرة عام 2022 عن الجمعية الأمريكية لجراحة السمنة والأيض والاتحاد الدولي لجراحة السمنة بالجراحة للبالغين الذين يبلغ مؤشر كتلة الجسم لديهم 35 فأكثر، وتنصح بالنظر فيها ابتداءً من 30 لمن لديهم مرض أيضي، مع حدود أقل لذوي الأصول الآسيوية. ولا يُحدَّد ما إذا كانت الجراحة مناسبة لك إلا بعد تقييم شامل.',
    },
    expect: {
      en: 'Assessment by the surgical and nutrition team, preparation before the operation, a short hospital stay, and long-term follow-up on diet, vitamins and activity.',
      ar: 'يبدأ العلاج بتقييم من الفريق الجراحي وفريق التغذية، ثم مرحلة تهيئة قبل العملية، فإقامة قصيرة في المستشفى، تليها متابعة طويلة الأمد للنظام الغذائي والفيتامينات والنشاط البدني.',
    },
  },
  {
    slug: 'metabolic-surgery',
    name: { en: 'Metabolic Surgery', ar: 'الجراحة الأيضية' },
    summary: {
      en: 'Surgery aimed at improving type 2 diabetes and other metabolic diseases linked to obesity.',
      ar: 'جراحة تهدف إلى علاج السكري من النوع الثاني وغيره من الأمراض الأيضية المرتبطة بالسمنة.',
    },
    what: {
      en: 'Metabolic surgery uses the same operations as bariatric surgery, but the main goal is treating conditions such as type 2 diabetes, high blood pressure, fatty liver and sleep apnea, not only weight loss.',
      ar: 'تُجرى في الجراحة الأيضية العمليات نفسها المتّبعة في جراحة السمنة، غير أن هدفها الأول علاج أمراض مثل السكري من النوع الثاني وارتفاع ضغط الدم والكبد الدهني وانقطاع النفس أثناء النوم، لا إنقاص الوزن وحده.',
    },
    who: {
      en: 'Adults with obesity and a metabolic disease that is hard to control with medicine and lifestyle changes. The decision is made with your physicians after a full assessment.',
      ar: 'البالغون المصابون بالسمنة ممن لديهم مرض أيضي يصعب ضبطه بالأدوية وتغيير نمط الحياة. ويُتّخذ القرار بالتنسيق مع أطبائك بعد تقييم شامل.',
    },
    expect: {
      en: 'Close coordination with your endocrinologist or physician, careful adjustment of medicines after surgery, and long-term follow-up.',
      ar: 'تنسيق وثيق مع طبيب الغدد الصمّاء أو طبيبك المعالج، وتعديل مدروس للأدوية بعد العملية، ومتابعة طويلة الأمد.',
    },
  },
  {
    slug: 'robotic-surgery',
    name: { en: 'Robotic Surgery', ar: 'الجراحة الروبوتية' },
    summary: {
      en: 'Minimally invasive surgery using a robotic system.',
      ar: 'جراحة عبر فتحات صغيرة بمساعدة الروبوت الجراحي.',
    },
    what: {
      en: 'In robotic surgery, the surgeon controls precise instruments and a magnified 3D camera from a console, working through small incisions. Dr. Alhazmi is trained in robotic surgery and maintains an almost exclusively robotic practice.',
      ar: 'في الجراحة الروبوتية، يجلس الجرّاح إلى وحدة تحكّم يحرّك منها أدوات دقيقة وكاميرا تعرض صورة مكبّرة ثلاثية الأبعاد، ويُجري العملية من خلال فتحات صغيرة. وقد تدرّب د. علاء الحازمي على الجراحة الروبوتية، ويُجري عملياته كلها تقريبًا بالروبوت.',
    },
    who: {
      en: 'Many bariatric, hernia, gallbladder and other abdominal operations can be done robotically. The best approach for you is discussed at your consultation.',
      ar: 'يمكن إجراء كثير من عمليات السمنة والفتق والمرارة وغيرها من عمليات البطن بالروبوت. ويُحدَّد الأسلوب الأنسب لحالتك خلال الاستشارة.',
    },
    expect: {
      en: 'Small incisions and the same preparation and follow-up as the equivalent standard operation.',
      ar: 'فتحات صغيرة، مع التهيئة والمتابعة نفسها المتّبعة في العملية المماثلة بالأسلوب المعتاد.',
    },
  },
  {
    slug: 'general-surgery',
    name: { en: 'General Surgery', ar: 'الجراحة العامة' },
    summary: {
      en: 'Gallbladder, hernia, upper GI and other common abdominal operations.',
      ar: 'عمليات المرارة والفتق والجهاز الهضمي العلوي، وغيرها من عمليات البطن الشائعة.',
    },
    what: {
      en: 'General surgery covers common abdominal conditions, including gallstones, hernias (including abdominal wall reconstruction), reflux and hiatal hernia, and other upper gastrointestinal conditions. Most are done with minimally invasive or robotic techniques.',
      ar: 'تُعنى الجراحة العامة بأمراض البطن الشائعة، ومنها حصوات المرارة، والفتق بأنواعه بما في ذلك إعادة بناء جدار البطن، وارتجاع المريء وفتق الحجاب الحاجز، وغيرها من أمراض الجهاز الهضمي العلوي. ويُجرى معظمها بالمنظار أو بالروبوت.',
    },
    who: {
      en: 'Adults referred by their physician or seeking a surgical opinion on an abdominal condition.',
      ar: 'البالغون المحالون من أطبائهم، ومن يرغبون في رأي جراحي في حالة تخص البطن.',
    },
    expect: {
      en: 'A consultation and any needed tests, a clear plan, and follow-up after the operation.',
      ar: 'استشارة وما يلزم من فحوصات، ثم خطة علاجية واضحة، ومتابعة بعد العملية.',
    },
  },
  {
    slug: 'obesity-medicine',
    name: { en: 'Obesity Medicine', ar: 'طب السمنة' },
    summary: {
      en: 'Non-surgical treatment of obesity, including nutrition, activity and medicines.',
      ar: 'علاج السمنة دون جراحة، بالتغذية والنشاط البدني والأدوية.',
    },
    what: {
      en: 'Obesity is a chronic disease. Treatment can include nutrition and activity plans, behavioral support and, when suitable, anti-obesity medicines, alone or alongside surgery. Dr. Alhazmi is certified by the American Board of Obesity Medicine.',
      ar: 'السمنة مرض مزمن، وقد يشمل علاجها خطة للتغذية والنشاط البدني، ودعمًا سلوكيًا، وأدوية علاج السمنة عند الحاجة، إما وحدها أو إلى جانب الجراحة. ود. علاء الحازمي حاصل على البورد الأمريكي لطب السمنة.',
    },
    who: {
      en: 'Anyone living with obesity who wants a medical plan, whether or not surgery is an option for them.',
      ar: 'كل من يعاني من السمنة ويرغب في خطة علاج طبية، سواء كانت الجراحة خيارًا مناسبًا له أم لا.',
    },
    expect: {
      en: 'A full assessment, a personal plan, and regular follow-up to adjust it.',
      ar: 'تقييم شامل، ثم خطة علاج خاصة بك، ومتابعة منتظمة لتعديلها حسب استجابتك.',
    },
  },
];

export const asmbsSource = {
  label: 'Eisenberg D, et al. 2022 ASMBS and IFSO: Indications for Metabolic and Bariatric Surgery. Surg Obes Relat Dis. 2022;18(12):1345-1356.',
  url: 'https://doi.org/10.1016/j.soard.2022.08.013',
};
