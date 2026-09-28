export const RFQ_ACCEPTED_EXT = ['pdf', 'dwg', 'step', 'stp', 'stl', 'iges', 'igs'] as const;
export const RFQ_MAX_FILE_BYTES = 25 * 1024 * 1024;
export const RFQ_MAX_FILES = 5;

export type RfqNeed =
  | 'cnc-milling' | 'cnc-turning' | 'multi-axis-machining' | 'prototype'
  | 'production' | 'custom-precision-parts' | 'other';

export type RfqFileMeta = { name: string; size: number; ext: string };

export type RfqPayload = {
  lang: 'en' | 'fr';
  need: RfqNeed | '';
  industry: string;
  material: string;
  quantity: string;
  deliveryDate: string;
  files: RfqFileMeta[];
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phone: string;
  description: string;
  additional: string;
  consent: boolean;
  /** Where the visitor came from (page path) — useful for lead attribution. */
  sourcePath?: string;
};

export type RfqResult = { ok: true; reference: string } | { ok: false; error: string };
