import type { RfqPayload } from './types';

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export type RfqErrorKey = 'required' | 'invalidEmail' | 'consentReq' | 'pickOne';
export type RfqErrors = Partial<Record<keyof RfqPayload, RfqErrorKey>>;

/** Per-step validation. Shared by the client form and the /api/rfq stub. */
export function validateStep(step: number, v: RfqPayload): RfqErrors {
  const e: RfqErrors = {};
  if (step === 0 && !v.need) e.need = 'pickOne';
  if (step === 3) {
    if (!v.firstName.trim()) e.firstName = 'required';
    if (!v.lastName.trim()) e.lastName = 'required';
    if (!v.company.trim()) e.company = 'required';
    if (!v.email.trim()) e.email = 'required';
    else if (!EMAIL_RE.test(v.email.trim())) e.email = 'invalidEmail';
    if (!v.phone.trim()) e.phone = 'required';
  }
  if (step === 4 && !v.consent) e.consent = 'consentReq';
  return e;
}

export function validateAll(v: RfqPayload): RfqErrors {
  return { ...validateStep(0, v), ...validateStep(3, v), ...validateStep(4, v) };
}
