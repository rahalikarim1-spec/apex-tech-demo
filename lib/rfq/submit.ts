import type { RfqPayload, RfqResult } from './types';

/**
 * RFQ transport layer — the ONLY file the form talks to.
 *
 * Demo mode (default): simulates latency and returns a fake reference. No email is sent
 * and no files leave the browser.
 *
 * Going live later (no form changes needed):
 *  1. Set NEXT_PUBLIC_RFQ_MODE=api
 *  2. Implement delivery in app/api/rfq/route.ts (email via Resend/Postmark/SES,
 *     CRM/ERP webhook, file storage such as S3/Supabase Storage for drawings).
 *  3. For drawings, add a pre-signed upload step inside `submitRfq` and pass the
 *     stored URLs alongside `files` metadata.
 */
const MODE = process.env.NEXT_PUBLIC_RFQ_MODE === 'api' ? 'api' : 'demo';

const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));
const makeRef = () => `RFQ-${Date.now().toString(36).toUpperCase().slice(-6)}`;

export async function submitRfq(payload: RfqPayload, opts: { simulateError?: boolean } = {}): Promise<RfqResult> {
  if (MODE === 'api') {
    try {
      const res = await fetch('/api/rfq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = (await res.json()) as RfqResult;
      return res.ok ? data : { ok: false, error: 'request_failed' };
    } catch {
      return { ok: false, error: 'network' };
    }
  }
  await wait(1400);
  if (opts.simulateError) return { ok: false, error: 'simulated' };
  return { ok: true, reference: makeRef() };
}

/** Same contract for the contact form. */
export async function submitContact(data: Record<string, string>, opts: { simulateError?: boolean } = {}): Promise<RfqResult> {
  void data;
  await wait(1000);
  if (opts.simulateError) return { ok: false, error: 'simulated' };
  return { ok: true, reference: makeRef() };
}
