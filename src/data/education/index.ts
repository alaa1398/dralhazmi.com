import type { T } from '../site';
import type { Evidence, Topic } from './types';
import { preparing } from './preparing';
import { dietStages } from './diet-stages';
import { vitamins } from './vitamins';
import { warningSigns } from './warning-signs';

export * from './types';

/** All sheets, in library order. */
export const sheets = [preparing, dietStages, vitamins, warningSigns];

export const learnUi = {
  title: { en: 'Patient education library', ar: 'مكتبة التثقيف الصحي' },
  navLabel: { en: 'Learn', ar: 'تثقيف' },
  description: {
    en: 'Guides for before and after bariatric surgery, built on published guidelines and ready to print for the clinic.',
    ar: 'أدلة لما قبل جراحة السمنة وبعدها، مبنية على الإرشادات المنشورة وجاهزة للطباعة في العيادة.',
  },
  lead: {
    en: 'Short, practical guides for patients and families. Each one shows where its advice comes from and prints on one sheet of paper.',
    ar: 'أدلة قصيرة وعملية للمرضى وأسرهم. يوضّح كل دليل مصدر نصائحه، ويُطبع على ورقة واحدة.',
  },
  all: { en: 'All', ar: 'الكل' },
  filterLabel: { en: 'Filter guides by topic', ar: 'تصفية الأدلة حسب الموضوع' },
  open: { en: 'Open guide', ar: 'افتح الدليل' },
  appliesTo: { en: 'Applies to', ar: 'ينطبق على' },
  keyNumbers: { en: 'Key numbers', ar: 'أرقام مهمة' },
  print: { en: 'Print this guide', ar: 'اطبع هذا الدليل' },
  largePrint: { en: 'Large print', ar: 'خط كبير' },
  references: { en: 'Sources', ar: 'المصادر' },
  refsNote: {
    en: 'Sources are listed in their original language.',
    ar: 'المصادر مذكورة بلغتها الأصلية.',
  },
  evidenceTitle: { en: 'Where the advice comes from', ar: 'مصدر النصائح' },
  teachBack: { en: 'Check your understanding', ar: 'تأكّد من فهمك' },
  teachBackNote: {
    en: 'Try answering in your own words. Your care team may ask you the same questions.',
    ar: 'حاول الإجابة بكلماتك. قد يسألك فريقك الطبي الأسئلة نفسها.',
  },
  disclaimer: {
    en: 'General information, not a personal plan. Follow the instructions your own surgical team gives you.',
    ar: 'معلومات عامة وليست خطة علاجية خاصة بك. اتبع تعليمات فريقك الجراحي.',
  },
  emergency: {
    en: 'In an emergency, call 997 or go to the nearest emergency department.',
    ar: 'في الحالات الطارئة، اتصل على 997 أو توجّه إلى أقرب قسم طوارئ.',
  },
  draftBanner: {
    en: 'Draft for medical review. Not yet approved; do not use for patient care.',
    ar: 'مسودة للمراجعة الطبية. لم تُعتمد بعد؛ لا تُستخدم في رعاية المرضى.',
  },
  pending: { en: 'decision needed', ar: 'بانتظار القرار' },
  whatsappLine: { en: 'Dr. Alhazmi’s patients: WhatsApp', ar: 'لمرضى د. علاء الحازمي: واتساب' },
  whatsappNote: { en: 'Not for emergencies. In an emergency, call 997.', ar: 'ليس للحالات الطارئة. في الطوارئ اتصل على 997.' },
  qrThis: { en: 'Scan to open this guide online', ar: 'امسح لفتح هذا الدليل على الإنترنت' },
  qrOther: { en: 'بالعربية', ar: 'In English' },
  reviewed: { en: 'Reviewed by Dr. Alaa Alhazmi', ar: 'راجعه د. علاء الحازمي' },
  nextReview: { en: 'Next review', ar: 'المراجعة القادمة' },
  version: { en: 'Version', ar: 'الإصدار' },
  madeTitle: { en: 'How this guide was made', ar: 'كيف أُعدّ هذا الدليل' },
  madeDraft: {
    en: 'Drafted with the help of AI tools from the published sources listed here. Not yet reviewed or approved by Dr. Alaa Alhazmi.',
    ar: 'أُعدّت المسودة بمساعدة أدوات الذكاء الاصطناعي من المصادر المنشورة المذكورة هنا. لم يراجعها د. علاء الحازمي أو يعتمدها بعد.',
  },
  madeApproved: {
    en: 'Drafted with the help of AI tools from the published sources listed here, then checked and approved by Dr. Alaa Alhazmi.',
    ar: 'أُعدّت المسودة بمساعدة أدوات الذكاء الاصطناعي من المصادر المنشورة المذكورة هنا، ثم راجعها د. علاء الحازمي واعتمدها.',
  },
  back: { en: 'All guides', ar: 'جميع الأدلة' },
  videos: { en: 'Videos and social channels', ar: 'المقاطع وحسابات التواصل' },
  resources: { en: 'Trusted resources from medical societies', ar: 'مصادر موثوقة من الجمعيات الطبية' },
} satisfies Record<string, T>;

export const evidenceLabel: Record<Evidence | 'fact', T> = {
  guideline: { en: 'Guideline', ar: 'إرشادات' },
  consensus: { en: 'Expert consensus', ar: 'إجماع الخبراء' },
  study: { en: 'Published study', ar: 'دراسة منشورة' },
  opinion: { en: 'Expert opinion', ar: 'رأي الخبراء' },
  fact: { en: 'Fact', ar: 'معلومة' },
};

export const evidenceHelp: Record<Evidence, T> = {
  guideline: {
    en: 'A medical society’s published guideline or position statement says this.',
    ar: 'تنص على ذلك إرشادات أو بيانات منشورة لجمعية طبية.',
  },
  consensus: {
    en: 'A published agreement among expert panels says this.',
    ar: 'ينص على ذلك اتفاق منشور بين لجان من الخبراء.',
  },
  study: {
    en: 'Published research supports this, but no guideline states it.',
    ar: 'تدعم ذلك أبحاث منشورة، ولا تنص عليه إرشادات.',
  },
  opinion: {
    en: 'Common surgical practice; no published guideline states it directly.',
    ar: 'ممارسة جراحية شائعة، ولا تنص عليها إرشادات منشورة بشكل مباشر.',
  },
};

export const topicLabel: Record<Topic, T> = {
  before: { en: 'Before surgery', ar: 'قبل العملية' },
  after: { en: 'After surgery', ar: 'بعد العملية' },
  nutrition: { en: 'Food and vitamins', ar: 'الغذاء والفيتامينات' },
  safety: { en: 'Safety', ar: 'السلامة' },
};
