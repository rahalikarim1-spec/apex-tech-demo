import Link from 'next/link';
import type { Lang } from '@/lib/i18n';
import { href } from '@/lib/routes';
import type { Machine } from '@/content/equipment';
import { getService } from '@/content/services';
import { getDict } from '@/content/ui';
import { Icon } from '@/components/ui/Icon';

/** Reusable machine card. Add machines in content/equipment.ts — this component renders any of them. */
export function MachineCard({ machine: m, lang, featured }: { machine: Machine; lang: Lang; featured?: boolean }) {
  const d = getDict(lang);
  return (
    <article className={`card overflow-hidden ${featured ? 'grid lg:grid-cols-[1fr_1.1fr]' : ''}`}>
      <div className={`on-dark tech-grid bg-ink p-6 ${featured ? 'lg:p-10' : ''}`}>
        <div className="flex items-center justify-between">
          <p className="font-display text-xs font-semibold uppercase tracking-[.16em] text-steel-light">{m.brand}</p>
          <span className={`rounded px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider ${m.status === 'verified' ? 'bg-steel/30 text-white' : 'bg-amber-200 text-amber-900'}`}>
            {m.status === 'verified' ? d.common.verified : d.common.placeholder}
          </span>
        </div>
        <h3 className={`mt-3 font-display font-semibold text-white ${featured ? 'text-3xl sm:text-4xl' : 'text-2xl'}`}>{m.model ?? m.brand}</h3>
        <p className="mt-1 text-metal">{m.type[lang]}</p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {m.highlights[lang].map((h) => <li key={h} className="rounded-full border border-white/15 px-3 py-1 text-sm text-white">{h}</li>)}
        </ul>
      </div>
      <div className="bg-white p-6 lg:p-8">
        <table className="w-full text-left text-[15px]">
          <caption className="sr-only">{m.brand} {m.model}</caption>
          <tbody className="divide-y divide-ink/10">
            {m.specs.map((s) => (
              <tr key={s.label.en}>
                <th scope="row" className="w-1/2 py-2.5 pr-3 font-medium text-[#5a6b7b]">{s.label[lang]}</th>
                <td className={`py-2.5 ${s.value ? 'font-medium text-ink' : 'text-amber-800'}`}>{s.value ? s.value[lang] : d.common.tbc}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-steel">{d.equipment.linkedServices}</p>
        <ul className="mt-2 flex flex-wrap gap-2">
          {m.services.map((sid) => (
            <li key={sid}><Link href={href(lang, 'services', sid)} className="inline-flex items-center gap-1 rounded-full bg-paper px-3 py-1.5 text-sm font-medium hover:text-steel">{getService(sid).name[lang]}<Icon name="arrow" className="h-3 w-3" /></Link></li>
          ))}
        </ul>
      </div>
    </article>
  );
}
