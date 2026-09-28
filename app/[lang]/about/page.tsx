import { href } from '@/lib/routes';
import { breadcrumbLd } from '@/lib/seo';
import { getLang, staticMetadata, type LangParams } from '@/lib/page';
import { getDict } from '@/content/ui';
import { PageHero } from '@/components/ui/PageHero';
import { Section, SectionHeading } from '@/components/ui/Section';
import { CtaBand } from '@/components/ui/CtaBand';
import { JsonLd } from '@/components/ui/JsonLd';
import { Icon } from '@/components/ui/Icon';
import { PLACEHOLDER_NOTE } from '@/content/site';

export const generateMetadata = (p: LangParams) => staticMetadata(p.params, 'about', (l) => getDict(l).about.seoTitle, (l) => getDict(l).about.seoDescription);

export default async function About({ params }: LangParams) {
  const lang = await getLang(params);
  const d = getDict(lang);
  const a = d.about;
  const crumbs = [{ name: d.nav.home_crumb, href: `/${lang}` }, { name: d.nav.about, href: href(lang, 'about') }];
  return (
    <>
      <JsonLd data={breadcrumbLd(crumbs.map((x) => ({ name: x.name, path: x.href })))} />
      <PageHero crumbs={crumbs} crumbLabel={d.nav.breadcrumbs} eyebrow={d.nav.about} h1={a.h1} lead={a.lead} />
      <section className="on-dark border-b border-white/10 bg-navy">
        <dl className="wrap grid grid-cols-2 lg:grid-cols-4">
          {a.stats.map((s, i) => (
            <div key={s.l} className={`px-2 py-8 sm:px-6 ${i > 0 ? 'border-l border-white/10' : ''}`}>
              <dd className="font-display text-3xl font-semibold text-white sm:text-4xl">{s.v}</dd><dt className="mt-1 text-sm text-metal">{s.l}</dt>
            </div>
          ))}
        </dl>
      </section>
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <h2 className="h2">{a.storyH}</h2>
          <div className="prose-apex text-[17px]">{a.story.map((p) => <p key={p.slice(0, 20)}>{p}</p>)}</div>
        </div>
      </Section>
      <Section tone="paper">
        <SectionHeading title={a.valuesH} />
        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {a.values.map((v) => <div key={v.t} className="card p-6"><Icon name="check" className="h-6 w-6 text-steel" /><h3 className="mt-3 font-display text-xl font-semibold">{v.t}</h3><p className="mt-2 text-[15px] leading-relaxed text-[#46586a]">{v.x}</p></div>)}
        </div>
      </Section>
      <Section>
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div><SectionHeading title={a.marketH} text={a.marketT} /></div>
          {/* CONTENT PLACEHOLDER: verified facility / team photography */}
          <div className="rounded-xl border-2 border-dashed border-steel/40 p-8 text-center">
            <Icon name="users" className="mx-auto h-9 w-9 text-steel" />
            <p className="mt-3 font-display text-lg font-semibold">{a.teamSlot}</p>
            <p className="mt-1 text-sm text-[#5a6b7b]">{a.teamSlotText}</p>
            <p className="mt-2 text-xs text-[#6b7b8a]">{PLACEHOLDER_NOTE[lang]}</p>
          </div>
        </div>
      </Section>
      <CtaBand lang={lang} location="about" title={a.ctaH} text={d.home.finalText} />
    </>
  );
}
