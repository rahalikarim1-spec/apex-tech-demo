'use client';
import { useEffect } from 'react';
import { track, type AnalyticsEvent } from '@/lib/analytics';

/** Fires a view event (service_view / industry_view) once on mount. */
export function TrackView({ event, id, lang }: { event: AnalyticsEvent; id: string; lang: string }) {
  useEffect(() => { track(event, { id, lang }); }, [event, id, lang]);
  return null;
}
