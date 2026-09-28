'use client';
import { useState, type ReactNode } from 'react';

type Opt = { id: string; name: string };
type Item = { id: string; industry: string; material: string; service: string };
type Filters = { industry: string; material: string; service: string };

/** Client-side filter over server-rendered project cards (cards stay in the HTML for SEO). */
export function ProjectExplorer({ items, options, labels, children }: {
  lang: string;
  items: Item[];
  options: { industry: Opt[]; material: Opt[]; service: Opt[] };
  labels: { all: string; industry: string; material: string; service: string; none: string; reset: string };
  children: { id: string; node: ReactNode }[];
}) {
  const [f, setF] = useState<Filters>({ industry: '', material: '', service: '' });
  const visible = new Set(items.filter((i) => (!f.industry || i.industry === f.industry) && (!f.material || i.material === f.material) && (!f.service || i.service === f.service)).map((i) => i.id));
  const sel = (key: keyof Filters, label: string) => (
    <label className="block">
      <span className="label">{label}</span>
      <select className="field" value={f[key]} onChange={(e) => setF({ ...f, [key]: e.target.value })}>
        <option value="">{labels.all}</option>
        {options[key].map((o) => <option key={o.id} value={o.id}>{o.name}</option>)}
      </select>
    </label>
  );
  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-3">{sel('industry', labels.industry)}{sel('material', labels.material)}{sel('service', labels.service)}</div>
      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3" aria-live="polite">
        {children.map((c) => <div key={c.id} hidden={!visible.has(c.id)}>{c.node}</div>)}
      </div>
      {visible.size === 0 && (
        <p className="mt-6 text-[#46586a]">{labels.none} <button type="button" className="font-semibold text-steel underline" onClick={() => setF({ industry: '', material: '', service: '' })}>{labels.reset}</button></p>
      )}
    </div>
  );
}
