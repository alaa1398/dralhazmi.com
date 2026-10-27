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
  location: {
    en: 'Dr. Sulaiman Al Habib Hospital, Al-Takhassusi, Riyadh',
    ar: 'مستشفى د. سليمان الحبيب، فرع التخصصي، الرياض',
  },
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
    name: { en: 'Bariatric Surgery', ar: 'جراحات السمنة' },
    summary: {
      en: 'Weight-loss operations such as sleeve gastrectomy and gastric bypass, for people living with obesity.',
      ar: 'عمليات إنقاص الوزن مثل تكميم المعدة وتحويل المسار، للمصابين بالسمنة.',
    },
    what: {
      en: 'Bariatric surgery changes the stomach and, in some operations, the small intestine, to reduce how much you eat and change the hormones that control hunger and metabolism. The most common operations are sleeve gastrectomy and gastric bypass. Revision surgery is an option for some patients who had a previous weight-loss operation.',
      ar: 'تُغيّر جراحات السمنة حجم المعدة، وفي بعض العمليات الأمعاء الدقيقة أيضًا، لتقليل كمية الطعام وتعديل الهرمونات التي تتحكم في الجوع والتمثيل الغذائي. أكثر العمليات شيوعًا تكميم المعدة وتحويل المسار. وتُعدّ الجراحة التصحيحية خيارًا لبعض المرضى الذين أجروا عملية سابقة لإنقاص الوزن.',
    },
    who: {
      en: 'The 2022 ASMBS/IFSO guidelines recommend surgery for adults with a BMI of 35 or more, and considering it from a BMI of 30 with metabolic disease (lower thresholds apply to people of Asian descent). Whether surgery is right for you is decided only after a full assessment.',
      ar: 'توصي إرشادات الجمعيتين الأمريكية والدولية لجراحة السمنة (ASMBS/IFSO) لعام 2022 بالجراحة للبالغين الذين يبلغ مؤشر كتلة الجسم لديهم 35 فأكثر، وبالنظر فيها ابتداءً من 30 مع وجود أمراض أيضية (وتنطبق حدود أقل على ذوي الأصول الآسيوية). ولا يُحدَّد مدى ملاءمة الجراحة لك إلا بعد تقييم شامل.',
    },
    expect: {
      en: 'Assessment by the surgical and nutrition team, preparation before the operation, a short hospital stay, and long-term follow-up on diet, vitamins and activity.',
      ar: 'تقييم من الفريق الجراحي وفريق التغذية، ثم تهيئة قبل العملية، وإقامة قصيرة في المستشفى، ومتابعة طويلة الأمد للنظام الغذائي والفيتامينات والنشاط البدني.',
    },
  },
  {
    slug: 'metabolic-surgery',
    name: { en: 'Metabolic Surgery', ar: 'الجراحة الأيضية' },
    summary: {
      en: 'Surgery aimed at improving type 2 diabetes and other metabolic diseases linked to obesity.',
      ar: 'جراحة تهدف إلى تحسين السكري من النوع الثاني والأمراض الأيضية الأخرى المرتبطة بالسمنة.',
    },
    what: {
      en: 'Metabolic surgery uses the same operations as bariatric surgery, but the main goal is treating conditions such as type 2 diabetes, high blood pressure, fatty liver and sleep apnea, not only weight loss.',
      ar: 'تعتمد الجراحة الأيضية على العمليات نفسها المستخدمة في جراحات السمنة، لكن هدفها الأساسي علاج أمراض مثل السكري من النوع الثاني وارتفاع ضغط الدم والكبد الدهني وانقطاع النفس أثناء النوم، وليس إنقاص الوزن فقط.',
    },
    who: {
      en: 'Adults with obesity and a metabolic disease that is hard to control with medicine and lifestyle changes. The decision is made with your physicians after a full assessment.',
      ar: 'البالغون المصابون بالسمنة مع مرض أيضي يصعب التحكم فيه بالأدوية وتغيير نمط الحياة. ويُتخذ القرار بالتنسيق مع أطبائك بعد تقييم شامل.',
    },
    expect: {
      en: 'Close coordination with your endocrinologist or physician, careful adjustment of medicines after surgery, and long-term follow-up.',
      ar: 'تنسيق وثيق مع طبيب الغدد الصماء أو طبيبك المعالج، وضبط دقيق للأدوية بعد الجراحة، ومتابعة طويلة الأمد.',
    },
  },
  {
    slug: 'robotic-surgery',
    name: { en: 'Robotic Surgery', ar: 'الجراحة الروبوتية' },
    summary: {
      en: 'Minimally invasive surgery using the da Vinci robotic system.',
      ar: 'جراحة طفيفة التوغل باستخدام نظام دافنشي الروبوتي.',
    },
    what: {
      en: 'In robotic surgery, the surgeon controls precise instruments and a magnified 3D camera from a console, working through small incisions. Dr. Alhazmi trained on the da Vinci system and maintains an almost exclusively robotic practice.',
      ar: 'في الجراحة الروبوتية يتحكم الجرّاح من وحدة تحكم في أدوات دقيقة وكاميرا مكبّرة ثلاثية الأبعاد، ويعمل من خلال فتحات صغيرة. تدرّب د. علاء الحازمي على نظام دافنشي، ويعتمد في ممارسته الجراحية على الجراحة الروبوتية بشكل شبه كامل.',
    },
    who: {
      en: 'Many bariatric, hernia, gallbladder and other abdominal operations can be done robotically. The best approach for you is discussed at your consultation.',
      ar: 'يمكن إجراء كثير من عمليات السمنة والفتق والمرارة وغيرها من عمليات البطن بالروبوت. ويُناقَش النهج الأنسب لحالتك خلال الاستشارة.',
    },
    expect: {
      en: 'Small incisions and the same preparation and follow-up as the equivalent standard operation.',
      ar: 'فتحات صغيرة، والتهيئة والمتابعة نفسها المتّبعة في العملية التقليدية المماثلة.',
    },
  },
  {
    slug: 'general-surgery',
    name: { en: 'General Surgery', ar: 'الجراحة العامة' },
    summary: {
      en: 'Gallbladder, hernia, upper GI and other common abdominal operations.',
      ar: 'عمليات المرارة والفتق والجهاز الهضمي العلوي وغيرها من عمليات البطن الشائعة.',
    },
    what: {
      en: 'General surgery covers common abdominal conditions, including gallstones, hernias (including abdominal wall reconstruction), reflux and hiatal hernia, and other upper gastrointestinal conditions. Most are done with minimally invasive or robotic techniques.',
      ar: 'تشمل الجراحة العامة حالات البطن الشائعة، ومنها حصوات المرارة والفتق (بما في ذلك إعادة بناء جدار البطن) والارتجاع وفتق الحجاب الحاجز وغيرها من أمراض الجهاز الهضمي العلوي. ويُجرى معظمها بتقنيات طفيفة التوغل أو بالروبوت.',
    },
    who: {
      en: 'Adults referred by their physician or seeking a surgical opinion on an abdominal condition.',
      ar: 'البالغون المحالون من أطبائهم أو الراغبون في رأي جراحي حول حالة في البطن.',
    },
    expect: {
      en: 'A consultation and any needed tests, a clear plan, and follow-up after the operation.',
      ar: 'استشارة وما يلزم من فحوصات، وخطة واضحة، ومتابعة بعد العملية.',
    },
  },
  {
    slug: 'obesity-medicine',
    name: { en: 'Obesity Medicine', ar: 'طب السمنة' },
    summary: {
      en: 'Non-surgical treatment of obesity, including nutrition, activity and medicines.',
      ar: 'علاج السمنة دون جراحة، ويشمل التغذية والنشاط البدني والأدوية.',
    },
    what: {
      en: 'Obesity is a chronic disease. Treatment can include nutrition and activity plans, behavioral support and, when suitable, anti-obesity medicines, alone or alongside surgery. Dr. Alhazmi is certified by the American Board of Obesity Medicine.',
      ar: 'السمنة مرض مزمن. وقد يشمل العلاج خططًا للتغذية والنشاط البدني ودعمًا سلوكيًا، وعند الملاءمة أدوية علاج السمنة، منفردة أو مع الجراحة. د. علاء الحازمي حاصل على شهادة البورد الأمريكي لطب السمنة.',
    },
    who: {
      en: 'Anyone living with obesity who wants a medical plan, whether or not surgery is an option for them.',
      ar: 'كل من يعاني من السمنة ويرغب في خطة علاجية طبية، سواء كانت الجراحة خيارًا مناسبًا له أم لا.',
    },
    expect: {
      en: 'A full assessment, a personal plan, and regular follow-up to adjust it.',
      ar: 'تقييم شامل، وخطة شخصية، ومتابعة منتظمة لتعديلها.',
    },
  },
];

export const asmbsSource = {
  label: 'Eisenberg D, et al. 2022 ASMBS and IFSO: Indications for Metabolic and Bariatric Surgery. Surg Obes Relat Dis. 2022;18(12):1345-1356.',
  url: 'https://doi.org/10.1016/j.soard.2022.08.013',
};
