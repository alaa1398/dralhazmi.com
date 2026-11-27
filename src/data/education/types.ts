// Patient education sheets ("Learn" library). One file per sheet in this folder.
// Content rules: every clinical item names its evidence basis and references.
// A sheet stays `draft` (shown with a banner, hidden from search engines and the
// sitemap) until Dr. Alhazmi approves it; then set status 'approved' and fill `reviewed`.
import type { T } from '../site';

/** guideline: a society guideline or position statement; consensus: a published
 *  expert consensus or Delphi; study: published research (cohort, review) that no
 *  guideline states; opinion: common practice with no published source. */
export type Evidence = 'guideline' | 'consensus' | 'study' | 'opinion';

/** A value Dr. Alhazmi still has to decide. Drafts show it as "decision needed". */
export const PENDING = '{{CHAIR}}';

export type Item = {
  text: T;
  ev: Evidence;
  refs?: string[]; // reference ids, e.g. ['R1', 'R3']
};

export type KeyNumber = {
  value: T;
  label: T;
  ev: Evidence | 'fact';
  refs?: string[];
};

export type Tone = 'neutral' | 'green' | 'amber' | 'red';

export type Panel = {
  heading: T;
  icon: IconName;
  tone?: Tone;
  intro?: T;
  /** Show the practice's WhatsApp number in this panel (screen and print). */
  whatsapp?: boolean;
  items: Item[];
};

export type Reference = {
  id: string;
  /** Citation in its original language (not translated). */
  cite: string;
  url?: string;
};

export type Topic = 'before' | 'after' | 'nutrition' | 'safety';

export type Sheet = {
  slug: string;
  /** Accent used for the card and the sheet header. */
  hue: 'teal' | 'coral' | 'amber' | 'violet' | 'sky' | 'leaf';
  icon: IconName;
  topics: Topic[];
  title: T;
  subtitle: T;
  appliesTo: T;
  keyNumbers: KeyNumber[];
  panels: Panel[];
  /** Questions clinic staff ask so the patient explains it back in their own words. */
  teachBack: T[];
  refs: Reference[];
  status: 'draft' | 'approved';
  version: string;
  /** ISO date of Dr. Alhazmi's approval; required once approved. */
  reviewed?: string;
  /** ISO date; at most 3 years after `reviewed`. */
  nextReview?: string;
  /** Working-group AI agents that drafted and checked the sheet. For tracing only; never shown to
   *  patients as authors, because they are not clinicians. */
  drafters: string[];
};

export type IconName =
  | 'bowl' | 'drop' | 'egg' | 'clock' | 'pill' | 'sun' | 'calendar' | 'test'
  | 'list' | 'walk' | 'nosmoke' | 'moon' | 'bag' | 'check' | 'phone' | 'alert'
  | 'heart' | 'stomach' | 'baby' | 'leaf' | 'shield' | 'chat';
