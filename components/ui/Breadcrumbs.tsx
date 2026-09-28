import Link from 'next/link';
import { Icon } from './Icon';

export type Crumb = { name: string; href: string };

export function Breadcrumbs({ items, label, dark }: { items: Crumb[]; label: string; dark?: boolean }) {
  return (
    <nav aria-label={label} className={`text-sm ${dark ? 'text-metal' : 'text-[#5a6b7b]'}`}>
      <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1">
        {items.map((c, i) => {
          const last = i === items.length - 1;
          return (
            <li key={c.href} className="flex items-center gap-1.5">
              {last ? (
                <span aria-current="page" className={dark ? 'text-white' : 'text-ink'}>{c.name}</span>
              ) : (
                <Link href={c.href} className="hover:underline underline-offset-4">{c.name}</Link>
              )}
              {!last && <Icon name="chevron" className="h-3 w-3 -rotate-90 opacity-60" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
