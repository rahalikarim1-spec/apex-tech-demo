import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLang } from '@/lib/i18n';
import { buildMetadata } from '@/lib/seo';
import { getDict } from '@/content/ui';
import { Hero } from '@/components/sections/Hero';
import {
  CapabilitiesSection, EquipmentPreview, IndustriesSection, LocationSection, MaterialsSection, MetricsBar,
  ProcessSection, ProjectsPreview, QualitySection, TestimonialsSection, TrustStrip, WhySection,
} from '@/components/sections/HomeSections';
import { CtaBand } from '@/components/ui/CtaBand';

type P = { params: Promise<{ lang: string }> };

const META = {
  en: { title: 'CNC Machining Burnaby & Vancouver | Precision Machine Shop | Apex Technologies', description: 'Precision CNC machining in Burnaby, BC serving Vancouver, Canada and the USA since 1997. CNC milling, turning and multi-axis manufacturing. 7M+ parts manufactured. Request a quote.' },
  fr: { title: "Usinage CNC Burnaby et Vancouver | Atelier d'usinage de précision | Apex Technologies", description: "Usinage CNC de précision à Burnaby (C.-B.) pour Vancouver, le Canada et les États-Unis depuis 1997. Fraisage, tournage et multi-axes CNC. Plus de 7 M de pièces fabriquées. Demandez une soumission." },
};

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  return buildMetadata({ lang, ...META[lang], paths: { en: '/en', fr: '/fr' } });
}

export default async function Home({ params }: P) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const d = getDict(lang);
  return (
    <>
      <Hero lang={lang} />
      <MetricsBar lang={lang} />
      <TrustStrip lang={lang} />
      <CapabilitiesSection lang={lang} />
      <IndustriesSection lang={lang} />
      <WhySection lang={lang} />
      <CtaBand lang={lang} location="home_mid" title={d.home.ctaMid.t} text={d.home.ctaMid.x} primaryLabel={d.cta.upload} tone="steel" />
      <ProcessSection lang={lang} />
      <EquipmentPreview lang={lang} />
      <MaterialsSection lang={lang} />
      <QualitySection lang={lang} />
      <ProjectsPreview lang={lang} />
      <TestimonialsSection lang={lang} />
      <LocationSection lang={lang} />
      <CtaBand lang={lang} location="home_final" title={d.home.finalH2} text={d.home.finalText} />
    </>
  );
}
