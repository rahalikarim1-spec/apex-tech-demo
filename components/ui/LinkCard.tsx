import Link from 'next/link';
import { Icon } from './Icon';

export function LinkCard({ href, title, text, icon, meta, cta }: { href: string; title: string; text?: string; icon?: string; meta?: string; cta?: string }) {
  return (
    <Link href={href} className="card card-hover group flex h-full flex-col p-5 sm:p-6">
      <div className="mb-4 flex items-center justify-between">
        <span className="grid h-10 w-10 place-items-center rounded-md bg-steel/10 text-steel">
          <Icon name={icon ?? 'gear'} />
        </span>
        {meta && <span className="font-display text-[11px] font-semibold uppercase tracking-widest text-steel">{meta}</span>}
      </div>
      <h3 className="font-display text-xl font-semibold">{title}</h3>
      {text && <p className="mt-2 flex-1 text-[15px] leading-relaxed opacity-80">{text}</p>}
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-steel transition group-hover:gap-2.5">
        {cta ?? ''}<Icon name="arrow" className="h-4 w-4" />
      </span>
    </Link>
  );
}
