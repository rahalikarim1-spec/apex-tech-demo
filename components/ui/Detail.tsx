import type { ReactNode } from 'react';
import Link from 'next/link';
import { Icon } from './Icon';

/** Two-column detail layout: content + sticky aside (RFQ card). */
export function DetailShell({ children, aside }: { children: ReactNode; aside: ReactNode }) {
  return (
    <div className="wrap grid gap-12 py-14 lg:grid-cols-[minmax(0,1fr)_320px] lg:py-20">
      <div className="min-w-0 space-y-14">{children}</div>
      <div>{aside}</div>
    </div>
  );
}

export function Block({ title, children, id }: { title: string; children: ReactNode; id?: string }) {
  return (
    <section id={id} aria-labelledby={id ? `${id}-h` : undefined}>
      <h2 id={id ? `${id}-h` : undefined} className="font-display text-2xl font-semibold sm:text-[1.75rem]">{title}</h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}

export function CheckList({ items, cols }: { items: string[]; cols?: boolean }) {
  return (
    <ul className={`check-list grid gap-x-8 gap-y-3 text-[#33465a] ${cols ? 'sm:grid-cols-2' : ''}`}>
      {items.map((i) => <li key={i}>{i}</li>)}
    </ul>
  );
}

export function PillLinks({ items }: { items: { href: string; label: string }[] }) {
  return (
    <ul className="flex flex-wrap gap-2.5">
      {items.map((i) => (
        <li key={i.href}>
          <Link href={i.href} className="group inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-4 py-2 text-[15px] font-medium text-ink transition hover:border-steel hover:text-steel">
            {i.label}<Icon name="arrow" className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function Steps({ items }: { items: { title: string; text: string }[] }) {
  return (
    <ol className="grid gap-4 sm:grid-cols-2">
      {items.map((s, i) => (
        <li key={s.title} className="rounded-lg border border-ink/10 bg-paper p-5">
          <span className="font-display text-sm font-semibold text-steel">0{i + 1}</span>
          <h3 className="mt-1 font-display text-lg font-semibold">{s.title}</h3>
          <p className="mt-1.5 text-[15px] leading-relaxed text-[#46586a]">{s.text}</p>
        </li>
      ))}
    </ol>
  );
}

export function Advantages({ items }: { items: { title: string; text: string }[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {items.map((a) => (
        <div key={a.title} className="rounded-lg border border-ink/10 p-5">
          <h3 className="font-display text-lg font-semibold">{a.title}</h3>
          <p className="mt-1.5 text-[15px] leading-relaxed text-[#46586a]">{a.text}</p>
        </div>
      ))}
    </div>
  );
}
