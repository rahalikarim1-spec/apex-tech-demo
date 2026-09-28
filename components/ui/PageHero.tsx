import type { ReactNode } from 'react';
import { Breadcrumbs, type Crumb } from './Breadcrumbs';

export function PageHero({
  crumbs, crumbLabel, eyebrow, h1, lead, children, aside,
}: { crumbs?: Crumb[]; crumbLabel?: string; eyebrow?: string; h1: string; lead?: string; children?: ReactNode; aside?: ReactNode }) {
  return (
    <header className="on-dark tech-grid relative overflow-hidden bg-ink">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_80%_at_85%_0%,rgba(57,122,156,.28),transparent_70%)]" />
      <div className="wrap relative py-12 sm:py-16 lg:py-20">
        {crumbs && crumbLabel && <div className="mb-6"><Breadcrumbs items={crumbs} label={crumbLabel} dark /></div>}
        <div className={aside ? 'grid items-center gap-10 lg:grid-cols-[1.3fr_1fr]' : 'max-w-3xl'}>
          <div>
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            <h1 className="font-display text-[2.1rem] font-semibold leading-[1.08] text-white sm:text-5xl lg:text-[3.4rem]">{h1}</h1>
            {lead && <p className="lead mt-5 max-w-2xl">{lead}</p>}
            {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
          </div>
          {aside}
        </div>
      </div>
    </header>
  );
}
