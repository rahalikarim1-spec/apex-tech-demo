import { href } from '@/lib/routes';
import { breadcrumbLd } from '@/lib/seo';
import { getLang, staticMetadata, type LangParams } from '@/lib/page';
import { getDict } from '@/content/ui';
import { MACHINES } from '@/content/equipment';
import { PageHero } from '@/components/ui/PageHero';
import { Section, SectionHeading } from '@/components/ui/Section';
import { CtaBand } from '@/components/ui/CtaBand';
import { JsonLd } from '@/components/ui/JsonLd';
import { MachineCard } from '@/components/sections/MachineCard';
import { Icon } from '@/components/ui/Icon';
import { ButtonLink } from '@/components/ui/Button';
import { rfqHref } from '@/lib/routes';

export const generateMetadata = (p: LangParams) => staticMetadata(p.params, 'equipment', (l) => getDict(l).equipment.seoTitle, (l) => getDict(l).equipment.seoDescription);

export default async function Equipment({ params }: LangParams) {
  const lang = await getLang(params);
  const d = getDict(lang);
  const crumbs = [{ name: d.nav.home_crumb, href: `/${lang}` }, { name: d.nav.equipment, href: href(lang, 'equipment') }];
  const [featured, ...fleet] = MACHINES;
  return (
    <>
      <JsonLd data={breadcrumbLd(crumbs.map((c) => ({ name: c.name, path: c.href })))} />
      <PageHero crumbs={crumbs} crumbLabel={d.nav.breadcrumbs} eyebrow={d.nav.equipment} h1={d.equipment.h1} lead={d.equipment.lead}>
        <ButtonLink href={rfqHref(lang)} cta="equipment_rfq" arrow>{d.cta.rfq}</ButtonLink>
      </PageHero>
      <Section>
        <SectionHeading title={d.equipment.featured} />
        <div className="mt-8"><MachineCard machine={featured} lang={lang} featured /></div>
      </Section>
      <Section tone="paper">
        <SectionHeading title={d.equipment.fleet} text={d.equipment.specsNote} />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {fleet.map((m) => <MachineCard key={m.id} machine={m} lang={lang} />)}
        </div>
        <p className="mt-6 text-sm text-[#5a6b7b]">{d.equipment.addNote}</p>
      </Section>
      <Section tone="navy">
        <SectionHeading title={d.equipment.capsTitle} />
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {d.equipment.caps.map((c) => <li key={c} className="card flex items-center gap-3 p-5 font-display font-semibold text-white"><Icon name="check" className="h-5 w-5 text-steel-light" />{c}</li>)}
        </ul>
      </Section>
      <CtaBand lang={lang} location="equipment" title={d.cta.production} text={d.home.finalText} />
    </>
  );
}
