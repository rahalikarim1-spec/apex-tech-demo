'use client';
import { useState } from 'react';
import { MAP_EMBED_URL } from '@/content/site';
import { Icon } from './Icon';

/** Click-to-load Google Map: keeps third-party JS/cookies and weight out of the initial page load. */
export function MapEmbed({ title, loadLabel, privacy, address }: { title: string; loadLabel: string; privacy: string; address: string }) {
  const [on, setOn] = useState(false);
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-ink/10 bg-navy sm:aspect-[16/10]">
      {on ? (
        <iframe title={title} src={MAP_EMBED_URL} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="absolute inset-0 h-full w-full border-0" allowFullScreen />
      ) : (
        <button type="button" onClick={() => setOn(true)} className="tech-grid group absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center text-white">
          <span className="grid h-14 w-14 place-items-center rounded-full bg-steel transition group-hover:scale-105"><Icon name="pin" className="h-7 w-7" /></span>
          <span className="font-display text-lg font-semibold">{address}</span>
          <span className="btn btn-ghost !min-h-[40px]">{loadLabel}</span>
          <span className="max-w-xs text-xs text-metal">{privacy}</span>
        </button>
      )}
    </div>
  );
}
