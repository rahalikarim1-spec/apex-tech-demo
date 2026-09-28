import Link from 'next/link';
import { href } from '@/lib/routes';
import { breadcrumbLd } from '@/lib/seo';
import { getLang, staticMetadata, type LangParams } from '@/lib/page';
import { getDict } from '@/content/ui';
import { INSIGHTS } from '@/content/insights';
import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/ui/Section';
import { CtaBand } from '@/components/ui/CtaBand';
import { JsonLd } from '@/components/ui/JsonLd';
import { Icon } from '@/components/ui/Icon';

export const generateMetadata = (p: LangParams) => staticMetadata(p.params, 'insights', (l) => getDict(l).insights.seoTitle, (l) => getDict(l).insights.seoDescription);

export default async function Insights({ params }: LangParams) {
  const lang = await getLang(params);
  const d = getDict(lang);
  const crumbs = [{ name: d.nav.home_crumb, href: `/${lang}` }, { name: d.nav.insights, href: href(lang, 'insights') }];
  return (
    <>
      <JsonLd data={breadcrumbLd(crumbs.map((x) => ({ name: x.name, path: x.href })))} />
      <PageHero crumbs={crumbs} crumbLabel={d.nav.breadcrumbs} eyebrow={d.nav.insights} h1={d.insights.h1} lead={d.insights.lead} />
      <Section>
        <div className="grid gap-5 md:grid-cols-2">
          {INSIGHTS.map((a) => (
            <Link key={a.id} href={href(lang, 'insights', a.id)} className="card card-hover group flex flex-col p-6">
              <span className="w-fit rounded bg-amber-100 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-amber-900">{d.insights.planned}</span>
              <h2 className="mt-3 font-display text-2xl font-semibold">{a.title[lang]}</h2>
              <p className="mt-2 flex-1 leading-relaxed text-[#46586a]">{a.summary[lang]}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-steel">{d.common.learn}<Icon name="arrow" className="h-4 w-4" /></span>
            </Link>
          ))}
        </div>
        <p className="mt-8 text-sm text-[#5a6b7b]">{d.insights.architectureNote}</p>
      </Section>
      <CtaBand lang={lang} location="insights" title={d.cta.discuss} text={d.home.finalText} />
    </>
  );
}
