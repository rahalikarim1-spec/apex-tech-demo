import { href } from '@/lib/routes';
import { breadcrumbLd } from '@/lib/seo';
import { getLang, staticMetadata, type LangParams } from '@/lib/page';
import { getDict } from '@/content/ui';
import { COMPLEMENTARY_SERVICES } from '@/content/complementary';
import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/ui/Section';
import { CtaBand } from '@/components/ui/CtaBand';
import { JsonLd } from '@/components/ui/JsonLd';
import { Icon } from '@/components/ui/Icon';

export const generateMetadata = (p: LangParams) => staticMetadata(p.params, 'complementary-services', (l) => getDict(l).complementary.seoTitle, (l) => getDict(l).complementary.seoDescription);

export default async function Complementary({ params }: LangParams) {
  const lang = await getLang(params);
  const d = getDict(lang);
  const c = d.complementary;
  const crumbs = [
    { name: d.nav.home_crumb, href: `/${lang}` },
    { name: d.nav.capabilities, href: href(lang, 'capabilities') },
    { name: c.title, href: href(lang, 'complementary-services') },
  ];
  return (
    <>
      <JsonLd data={breadcrumbLd(crumbs.map((x) => ({ name: x.name, path: x.href })))} />
      <PageHero crumbs={crumbs} crumbLabel={d.nav.breadcrumbs} eyebrow={d.nav.capabilities} h1={c.h1} lead={c.lead} />
      <Section>
        <div role="note" className="mb-10 flex gap-4 rounded-xl border border-steel/30 bg-steel/5 p-5 sm:p-6">
          <Icon name="shield" className="mt-0.5 h-6 w-6 shrink-0 text-steel" />
          <div><h2 className="font-display text-lg font-semibold">{c.noticeTitle}</h2><p className="mt-1 leading-relaxed text-[#33465a]">{c.notice}</p></div>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {COMPLEMENTARY_SERVICES.map((s) => (
            <li key={s.id} className="card p-5">
              <h3 className="font-display text-lg font-semibold">{s.name[lang]}</h3>
              <p className="mt-1.5 text-[15px] leading-relaxed text-[#46586a]">{s.text[lang]}</p>
              <p className="mt-3 inline-block rounded bg-paper px-2 py-1 text-xs font-medium text-[#5a6b7b]">{d.common.partnerNote}</p>
            </li>
          ))}
        </ul>
      </Section>
      <CtaBand lang={lang} location="complementary" title={c.ctaH} text={c.ctaT} />
    </>
  );
}
