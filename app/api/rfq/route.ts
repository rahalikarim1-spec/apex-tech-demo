import { NextResponse } from 'next/server';
import type { RfqPayload } from '@/lib/rfq/types';
import { validateAll } from '@/lib/rfq/validate';

export const dynamic = 'force-dynamic';

/**
 * RFQ endpoint stub. Validates the payload and acknowledges it.
 * TODO (go-live): send the notification email, push to CRM/ERP, persist drawings.
 * Intentionally does nothing external so the demo cannot send email.
 */
export async function POST(req: Request) {
  let body: RfqPayload;
  try {
    body = (await req.json()) as RfqPayload;
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_json' }, { status: 400 });
  }
  const errors = validateAll(body);
  if (Object.keys(errors).length) {
    return NextResponse.json({ ok: false, error: 'validation' }, { status: 422 });
  }
  const reference = `RFQ-${Date.now().toString(36).toUpperCase().slice(-6)}`;
  return NextResponse.json({ ok: true, reference });
}
