import { href } from '@/lib/routes';
import { breadcrumbLd } from '@/lib/seo';
import { getLang, staticMetadata, type LangParams } from '@/lib/page';
import { getDict } from '@/content/ui';
import { PageHero } from '@/components/ui/PageHero';
import { Section, SectionHeading } from '@/components/ui/Section';
import { CtaBand } from '@/components/ui/CtaBand';
import { JsonLd } from '@/components/ui/JsonLd';
import { Icon } from '@/components/ui/Icon';

export const generateMetadata = (p: LangParams) => staticMetadata(p.params, 'quality', (l) => getDict(l).quality.seoTitle, (l) => getDict(l).quality.seoDescription);

export default async function Quality({ params }: LangParams) {
  const lang = await getLang(params);
  const d = getDict(lang);
  const q = d.quality;
  const crumbs = [{ name: d.nav.home_crumb, href: `/${lang}` }, { name: d.nav.quality, href: href(lang, 'quality') }];
  return (
    <>
      <JsonLd data={breadcrumbLd(crumbs.map((x) => ({ name: x.name, path: x.href })))} />
      <PageHero crumbs={crumbs} crumbLabel={d.nav.breadcrumbs} eyebrow={d.nav.quality} h1={q.h1} lead={q.lead} />
      <Section>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {q.pillars.map((p) => (
            <div key={p.t} className="card p-6"><Icon name={p.t.length % 2 ? 'ruler' : 'shield'} className="h-7 w-7 text-steel" /><h2 className="mt-4 font-display text-xl font-semibold">{p.t}</h2><p className="mt-2 leading-relaxed text-[#46586a]">{p.x}</p></div>
          ))}
        </div>
      </Section>
      <Section tone="navy">
        <SectionHeading title={q.flowTitle} />
        <ol className="mt-9 grid gap-4 md:grid-cols-5">
          {q.flow.map((f, i) => (
            <li key={f} className="card p-5"><span className="font-display text-sm font-semibold text-steel-light">0{i + 1}</span><p className="mt-1 font-display text-lg font-semibold text-white">{f}</p></li>
          ))}
        </ol>
      </Section>
      <Section tone="paper">
        <div className="grid gap-8 lg:grid-cols-2">
          <div><SectionHeading title={q.certTitle} text={q.certText} /></div>
          {/* CONTENT PLACEHOLDER: current certificate upload slot. Do not claim ISO 9001:2015 or any certification until a valid, current certificate is supplied. */}
          <div className="rounded-xl border-2 border-dashed border-steel/40 bg-white p-6 text-center">
            <Icon name="file" className="mx-auto h-9 w-9 text-steel" />
            <p className="mt-3 font-display text-lg font-semibold">{q.certSlot}</p>
            <p className="mt-1 text-sm text-[#5a6b7b]">{q.certSlotText}</p>
          </div>
        </div>
      </Section>
      <CtaBand lang={lang} location="quality" title={q.ctaH} text={q.ctaT} />
    </>
  );
}
