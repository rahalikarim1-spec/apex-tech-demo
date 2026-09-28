import { href } from '@/lib/routes';
import { breadcrumbLd } from '@/lib/seo';
import { getLang, staticMetadata, type LangParams } from '@/lib/page';
import { getDict } from '@/content/ui';
import { INDUSTRIES } from '@/content/industries';
import { MATERIALS } from '@/content/materials';
import { COMPANY } from '@/content/site';
import { PageHero } from '@/components/ui/PageHero';
import { JsonLd } from '@/components/ui/JsonLd';
import { Icon } from '@/components/ui/Icon';
import { RfqForm } from '@/components/rfq/RfqForm';

export const generateMetadata = (p: LangParams) => staticMetadata(p.params, 'rfq', (l) => getDict(l).rfq.seoTitle, (l) => getDict(l).rfq.seoDescription);

export default async function RfqPage({ params }: LangParams) {
  const lang = await getLang(params);
  const d = getDict(lang);
  const crumbs = [{ name: d.nav.home_crumb, href: `/${lang}` }, { name: d.cta.rfq, href: href(lang, 'rfq') }];
  return (
    <>
      <JsonLd data={breadcrumbLd(crumbs.map((x) => ({ name: x.name, path: x.href })))} />
      <PageHero crumbs={crumbs} crumbLabel={d.nav.breadcrumbs} eyebrow={d.cta.rfq} h1={d.rfq.h1} lead={d.rfq.lead} />
      <div className="bg-paper">
        <div className="wrap grid gap-8 py-10 lg:grid-cols-[minmax(0,1fr)_300px] lg:py-14">
          <RfqForm
            lang={lang}
            d={d.rfq}
            industries={INDUSTRIES.map((i) => ({ id: i.id, name: i.name[lang] }))}
            materials={MATERIALS.map((m) => ({ id: m.id, name: m.name[lang] }))}
            homeHref={`/${lang}`}
          />
          <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-xl border border-ink/10 bg-white p-5">
              <h2 className="font-display text-lg font-semibold">{d.rfq.sideTitle}</h2>
              <p className="mt-1 text-sm text-[#5a6b7b]">{d.rfq.sideText}</p>
              <p className="mt-4 space-y-2 text-[15px]">
                <a href={COMPANY.phoneHref} className="flex items-center gap-2 font-medium text-steel hover:underline"><Icon name="phone" className="h-4 w-4" />{COMPANY.phone}</a>
                <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-2 font-medium text-steel hover:underline"><Icon name="mail" className="h-4 w-4" />{COMPANY.email}</a>
              </p>
            </div>
            <ul className="rounded-xl border border-ink/10 bg-white p-5 text-sm text-[#33465a]">
              {d.rfq.sideBullets.map((b) => <li key={b} className="flex items-center gap-2 py-1"><Icon name="check" className="h-4 w-4 text-steel" />{b}</li>)}
            </ul>
          </aside>
        </div>
      </div>
    </>
  );
}
