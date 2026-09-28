import type { L } from '@/lib/i18n';
import type { IndustryId, MaterialId, ServiceId } from './registry';

export type Industry = {
  id: IndustryId;
  name: L<string>;
  short: L<string>;
  seoTitle: L<string>;
  seoDescription: L<string>;
  h1: L<string>;
  intro: L<string>;
  needs: L<string[]>;
  why: L<string>;
  quality: L<string>;
  services: ServiceId[];
  materials: MaterialId[];
};

const QUALITY_NOTE: L<string> = {
  en: 'Apex inspects parts against your drawing, with CMM quality control and ERP-supported traceability. Documentation and certification requirements specific to your sector should be raised at the RFQ stage so they can be confirmed.',
  fr: "Apex inspecte les pièces selon votre plan, avec contrôle qualité par MMT et traçabilité appuyée par ERP. Les exigences de documentation et de certification propres à votre secteur doivent être soulevées dès la demande de soumission afin d'être confirmées.",
};

export const INDUSTRIES: Industry[] = [
  {
    id: 'mining',
    name: { en: 'Mining & Resource Extraction', fr: 'Exploitation minière et extraction de ressources' },
    short: { en: 'Wear-resistant, dependable components for equipment that works in harsh conditions.', fr: 'Composants robustes et fiables pour équipements exploités en conditions difficiles.' },
    seoTitle: { en: 'Mining CNC Machining | Precision Parts | Apex Technologies', fr: "Usinage CNC pour l'exploitation minière | Apex Technologies" },
    seoDescription: { en: 'Mining CNC machining from Burnaby, BC: custom machined components for resource extraction equipment, in steels and other materials. Request a quote.', fr: "Usinage CNC pour l'exploitation minière depuis Burnaby (C.-B.) : composants sur mesure pour équipements d'extraction, en aciers et autres matériaux." },
    h1: { en: 'CNC Machining for Mining & Resource Extraction', fr: "Usinage CNC pour l'exploitation minière et l'extraction de ressources" },
    intro: {
      en: 'Mining equipment runs long hours in abrasive, wet and vibrating environments, and downtime is expensive. Buyers need machined components — pins, bushings, shafts, fittings and housings — that fit reliably and can be re-ordered without redrawing.',
      fr: "L'équipement minier travaille de longues heures en milieu abrasif, humide et vibrant, et l'arrêt coûte cher. Les acheteurs ont besoin de composants usinés — goupilles, bagues, arbres, raccords et boîtiers — qui s'ajustent bien et se recommandent sans redessiner.",
    },
    needs: {
      en: ['Replacement and maintenance components with repeat demand', 'Shafts, pins and bushings in tough steels', 'Fittings and housings for fluid and power transmission', 'Parts for older equipment with limited supplier support'],
      fr: ['Composants de remplacement et de maintenance à demande récurrente', 'Arbres, goupilles et bagues en aciers robustes', 'Raccords et boîtiers pour transmission de fluides et de puissance', 'Pièces pour équipements anciens avec support fournisseur limité'],
    },
    why: {
      en: 'Apex has supplied industrial customers since 1997 and understands the rhythm of maintenance-driven demand: urgent one-offs today, repeat orders tomorrow.',
      fr: "Apex sert des clients industriels depuis 1997 et comprend le rythme d'une demande liée à la maintenance : pièces urgentes aujourd'hui, commandes récurrentes demain.",
    },
    quality: QUALITY_NOTE,
    services: ['cnc-turning', 'production-machining', 'custom-precision-parts'],
    materials: ['alloy-steel', 'carbon-steel', 'bronze'],
  },
  {
    id: 'oil-gas',
    name: { en: 'Oil & Gas', fr: 'Pétrole et gaz' },
    short: { en: 'Machined components for fluid-handling, drilling and process equipment.', fr: 'Composants usinés pour équipements de manutention de fluides, de forage et de procédé.' },
    seoTitle: { en: 'Oil & Gas CNC Machining | Apex Technologies, Burnaby', fr: 'Usinage CNC pour le pétrole et le gaz | Apex Technologies' },
    seoDescription: { en: 'Oil and gas CNC machining in Burnaby, BC: precision fittings, manifolds and components in stainless and alloy steels for Canadian and US customers.', fr: 'Usinage CNC pour le pétrole et le gaz à Burnaby (C.-B.) : raccords, blocs et composants de précision en aciers inoxydables et alliés pour clients canadiens et américains.' },
    h1: { en: 'Oil & Gas CNC Machining', fr: 'Usinage CNC pour le pétrole et le gaz' },
    intro: {
      en: 'Oil and gas equipment moves fluids under pressure, and its components must hold their geometry and their seals. Engineers and buyers in this sector need machined parts made from suitable materials, inspected against clear requirements, and supplied consistently.',
      fr: "L'équipement pétrolier et gazier déplace des fluides sous pression et ses composants doivent conserver leur géométrie et leurs joints. Ingénieurs et acheteurs du secteur ont besoin de pièces usinées dans des matériaux adéquats, inspectées selon des exigences claires et livrées de façon constante.",
    },
    needs: {
      en: ['Manifolds, valve bodies and fluid-control blocks', 'Fittings, connectors and threaded components', 'Shafts, spindles and sleeves for rotating equipment', 'Stainless and alloy steel components for demanding service'],
      fr: ['Blocs, corps de valves et blocs de contrôle de fluides', 'Raccords, connecteurs et composants filetés', "Arbres, broches et manchons pour équipements rotatifs", 'Composants en inoxydable et acier allié pour service exigeant'],
    },
    why: {
      en: 'Complex turning and multi-axis capability let Apex machine angled ports and turned-and-milled features together, which suits fluid-handling geometry.',
      fr: "Le tournage complexe et la capacité multi-axes permettent à Apex d'usiner orifices inclinés et caractéristiques tournées-fraisées ensemble, ce qui convient à la géométrie de manutention de fluides.",
    },
    quality: QUALITY_NOTE,
    services: ['multi-axis-machining', 'cnc-turning', 'cnc-milling'],
    materials: ['stainless-steel', 'alloy-steel', 'carbon-steel'],
  },
  {
    id: 'medical-pharmaceutical',
    name: { en: 'Medical & Pharmaceutical', fr: 'Médical et pharmaceutique' },
    short: { en: 'Precision components for medical and pharmaceutical equipment, in corrosion-resistant materials.', fr: 'Composants de précision pour équipements médicaux et pharmaceutiques, en matériaux résistants à la corrosion.' },
    seoTitle: { en: 'Medical & Pharmaceutical CNC Machining | Apex Technologies', fr: "Usinage CNC médical et pharmaceutique | Apex Technologies" },
    seoDescription: { en: 'Medical CNC machining for equipment and instrument components from Burnaby, BC. Stainless steel, aluminum and plastics, machined to your drawing.', fr: "Usinage CNC médical pour composants d'équipements et d'instruments depuis Burnaby (C.-B.). Inoxydable, aluminium et plastiques usinés selon votre plan." },
    h1: { en: 'Medical & Pharmaceutical CNC Machining', fr: 'Usinage CNC médical et pharmaceutique' },
    intro: {
      en: 'Medical and pharmaceutical equipment demands clean geometry, consistent surfaces and materials that tolerate cleaning and sterilization. Component buyers in this sector want traceable, well-documented machining with a supplier that communicates clearly.',
      fr: "Les équipements médicaux et pharmaceutiques exigent des géométries nettes, des surfaces constantes et des matériaux tolérant nettoyage et stérilisation. Les acheteurs du secteur veulent un usinage traçable et bien documenté auprès d'un fournisseur qui communique clairement.",
    },
    needs: {
      en: ['Stainless steel components for equipment and instruments', 'Housings and frames in aluminum', 'Plastic components with tight fits', 'Surface finishes coordinated through partners (e.g. passivation, electro-polishing)'],
      fr: ["Composants en acier inoxydable pour équipements et instruments", 'Boîtiers et cadres en aluminium', 'Composants plastiques à ajustements serrés', 'Finitions de surface coordonnées par des partenaires (ex. passivation, électropolissage)'],
    },
    why: {
      en: 'Apex machines components for equipment builders and can coordinate finishing steps through partners. Regulatory or device-specific requirements are not assumed: they are confirmed with you at quotation.',
      fr: "Apex usine des composants pour fabricants d'équipement et peut coordonner les finitions via des partenaires. Les exigences réglementaires ou propres aux dispositifs ne sont pas présumées : elles sont confirmées avec vous à la soumission.",
    },
    quality: QUALITY_NOTE,
    services: ['prototype-machining', 'multi-axis-machining', 'custom-precision-parts'],
    materials: ['stainless-steel', 'aluminum', 'polymers-plastics'],
  },
  {
    id: 'telecommunications-instruments',
    name: { en: 'Telecommunications & Instruments', fr: 'Télécommunications et instruments' },
    short: { en: 'Housings, brackets and precision parts for telecom equipment and instrumentation.', fr: 'Boîtiers, supports et pièces de précision pour équipements de télécommunication et instruments.' },
    seoTitle: { en: 'Telecommunications & Instrument Machining | Apex Technologies', fr: "Usinage pour télécommunications et instruments | Apex Technologies" },
    seoDescription: { en: 'Telecommunications machining and instrument parts from Burnaby, BC. Aluminum, brass and copper components for RF, electronics and instrumentation.', fr: "Usinage pour télécommunications et pièces d'instruments depuis Burnaby (C.-B.). Composants en aluminium, laiton et cuivre pour RF, électronique et instrumentation." },
    h1: { en: 'Telecommunications & Instrument Machining', fr: 'Usinage pour télécommunications et instruments' },
    intro: {
      en: 'Telecom and instrumentation products are built around enclosures, connectors, heat paths and mounting interfaces where fit and finish are visible and functional. Development cycles are short and design revisions are frequent.',
      fr: "Les produits de télécommunication et d'instrumentation reposent sur des boîtiers, connecteurs, chemins thermiques et interfaces de montage où l'ajustement et la finition sont visibles et fonctionnels. Les cycles de développement sont courts et les révisions fréquentes.",
    },
    needs: {
      en: ['Aluminum housings and heat-dissipating parts', 'Brass and copper connectors and contacts', 'Precision brackets and mounting plates', 'Prototype builds ahead of production'],
      fr: ['Boîtiers en aluminium et pièces de dissipation thermique', 'Connecteurs et contacts en laiton et cuivre', 'Supports et plaques de montage de précision', 'Prototypes avant la production'],
    },
    why: {
      en: 'Prototype and production sit in the same shop, so a design that proves out on a bench can move to repeat supply without re-quoting from scratch. Surface finishing such as anodizing or plating is available through partners.',
      fr: "Prototype et production se font dans le même atelier : une conception validée peut passer à l'approvisionnement récurrent sans tout soumissionner à nouveau. Des finitions comme l'anodisation ou le placage sont offertes par des partenaires.",
    },
    quality: QUALITY_NOTE,
    services: ['prototype-machining', 'cnc-milling', 'custom-precision-parts'],
    materials: ['aluminum', 'brass', 'copper'],
  },
  {
    id: 'firefighting',
    name: { en: 'Firefighting', fr: 'Lutte contre les incendies' },
    short: { en: 'Durable machined parts for firefighting equipment, fittings and apparatus.', fr: "Pièces usinées durables pour équipements, raccords et appareils de lutte contre les incendies." },
    seoTitle: { en: 'Firefighting Equipment Machining | Apex Technologies', fr: "Usinage pour équipements de lutte contre l'incendie | Apex Technologies" },
    seoDescription: { en: 'CNC machined components for firefighting equipment from Burnaby, BC: fittings, nozzles bodies and apparatus parts in brass, aluminum and steel.', fr: "Composants usinés CNC pour équipements de lutte contre l'incendie à Burnaby (C.-B.) : raccords, corps de lances et pièces d'appareils en laiton, aluminium et acier." },
    h1: { en: 'Machined Components for Firefighting Equipment', fr: "Composants usinés pour équipements de lutte contre l'incendie" },
    intro: {
      en: 'Firefighting equipment must work the first time, in wet, dirty and physically punishing conditions. Fittings, couplings and mounting hardware need robust materials and threads that engage cleanly.',
      fr: "L'équipement de lutte contre l'incendie doit fonctionner du premier coup, en conditions humides, sales et éprouvantes. Raccords, accouplements et quincaillerie de montage exigent des matériaux robustes et des filetages qui s'engagent proprement.",
    },
    needs: {
      en: ['Brass and aluminum fittings and couplings', 'Threaded connectors and adapters', 'Custom brackets and mounting hardware', 'Replacement parts for existing apparatus'],
      fr: ['Raccords et accouplements en laiton et aluminium', 'Connecteurs et adaptateurs filetés', 'Supports et quincaillerie de montage sur mesure', 'Pièces de remplacement pour appareils existants'],
    },
    why: {
      en: 'Turned and milled parts with clean threads and consistent fits are a core part of Apex’s work. Equipment standards that apply to your product are yours to specify; Apex machines to your drawing.',
      fr: "Les pièces tournées et fraisées avec filetages nets et ajustements constants sont au cœur du travail d'Apex. Les normes applicables à votre produit vous appartiennent ; Apex usine selon votre plan.",
    },
    quality: QUALITY_NOTE,
    services: ['cnc-turning', 'cnc-milling', 'custom-precision-parts'],
    materials: ['brass', 'aluminum', 'stainless-steel'],
  },
  {
    id: 'construction',
    name: { en: 'Construction', fr: 'Construction' },
    short: { en: 'Machined parts for construction equipment, tooling and heavy-duty assemblies.', fr: "Pièces usinées pour équipements de construction, outillage et assemblages lourds." },
    seoTitle: { en: 'Construction Equipment CNC Machining | Apex Technologies', fr: "Usinage CNC pour équipements de construction | Apex Technologies" },
    seoDescription: { en: 'CNC machining for construction equipment and tooling from Burnaby, BC. Pins, shafts, bushings and custom components in steel and other materials.', fr: "Usinage CNC pour équipements et outillage de construction depuis Burnaby (C.-B.). Goupilles, arbres, bagues et composants sur mesure en acier et autres matériaux." },
    h1: { en: 'CNC Machining for Construction Equipment', fr: 'Usinage CNC pour équipements de construction' },
    intro: {
      en: 'Construction equipment takes shock loads, dirt and constant repositioning. Its machined parts — pins, sleeves, shafts and mounting components — are simple in concept but unforgiving of poor fits.',
      fr: "L'équipement de construction subit chocs, saleté et repositionnements constants. Ses pièces usinées — goupilles, manchons, arbres et composants de montage — sont simples en concept mais peu tolérantes aux mauvais ajustements.",
    },
    needs: {
      en: ['Pins, sleeves and bushings for articulating joints', 'Shafts and spindles', 'Custom brackets and adapters', 'Recurring supply for equipment builders'],
      fr: ['Goupilles, manchons et bagues pour articulations', 'Arbres et broches', 'Supports et adaptateurs sur mesure', 'Approvisionnement récurrent pour fabricants'],
    },
    why: {
      en: 'Turning and production capability suit repeat OEM and aftermarket demand across Canada and the USA.',
      fr: "Le tournage et la capacité de production conviennent à la demande OEM et de rechange récurrente au Canada et aux États-Unis.",
    },
    quality: QUALITY_NOTE,
    services: ['production-machining', 'cnc-turning', 'custom-precision-parts'],
    materials: ['carbon-steel', 'alloy-steel', 'bronze'],
  },
  {
    id: 'horizontal-directional-drilling',
    name: { en: 'Horizontal Directional Drilling', fr: 'Forage directionnel horizontal' },
    short: { en: 'Precision components for HDD tooling, drill string parts and support equipment.', fr: "Composants de précision pour outils de FDH, pièces de train de tiges et équipements de soutien." },
    seoTitle: { en: 'Horizontal Directional Drilling Parts Machining | Apex Technologies', fr: "Usinage de pièces pour forage directionnel horizontal | Apex Technologies" },
    seoDescription: { en: 'CNC machining for horizontal directional drilling (HDD) tooling and components from Burnaby, BC. Threaded, turned and milled parts in tough steels.', fr: "Usinage CNC pour outillage et composants de forage directionnel horizontal (FDH) depuis Burnaby (C.-B.). Pièces filetées, tournées et fraisées en aciers robustes." },
    h1: { en: 'Machined Components for Horizontal Directional Drilling', fr: 'Composants usinés pour le forage directionnel horizontal' },
    intro: {
      en: 'HDD tooling is loaded in torque, thrust and abrasion underground, where a failed part means pulling the string. Threaded connections, housings and adapters must be made from suitable steels with good thread geometry.',
      fr: "L'outillage de FDH subit couple, poussée et abrasion sous terre, où une pièce défaillante oblige à remonter le train de tiges. Connexions filetées, boîtiers et adaptateurs doivent être faits d'aciers appropriés avec une bonne géométrie de filetage.",
    },
    needs: {
      en: ['Threaded connections and adapters', 'Housings for tooling and electronics carriers', 'Shafts, sleeves and wear components', 'Custom parts for drilling equipment builders'],
      fr: ['Connexions filetées et adaptateurs', "Boîtiers pour outillage et supports d'électronique", "Arbres, manchons et pièces d'usure", 'Pièces sur mesure pour fabricants de foreuses'],
    },
    why: {
      en: 'Complex turning with milled features handles threaded, cross-drilled geometry efficiently, and Apex can plan heat treating through partners where your specification requires it.',
      fr: "Le tournage complexe avec fraisage traite efficacement les géométries filetées et percées transversalement, et Apex peut planifier un traitement thermique via des partenaires si votre spécification l'exige.",
    },
    quality: QUALITY_NOTE,
    services: ['cnc-turning', 'multi-axis-machining', 'custom-precision-parts'],
    materials: ['alloy-steel', 'stainless-steel', 'carbon-steel'],
  },
  {
    id: 'industrial-machinery',
    name: { en: 'Industrial Machinery', fr: 'Machinerie industrielle' },
    short: { en: 'Machined components for OEMs and equipment builders — prototype through production.', fr: "Composants usinés pour fabricants d'équipement — du prototype à la production." },
    seoTitle: { en: 'Precision Machining for Industrial Equipment | Apex Technologies', fr: "Usinage de précision pour équipements industriels | Apex Technologies" },
    seoDescription: { en: 'Precision machining for industrial equipment and OEMs from Burnaby, BC. Custom parts from prototype to repeat production for Canada and the USA.', fr: "Usinage de précision pour équipements industriels et OEM depuis Burnaby (C.-B.). Pièces sur mesure du prototype à la production récurrente au Canada et aux États-Unis." },
    h1: { en: 'Precision Machining for Industrial Equipment', fr: "Usinage de précision pour équipements industriels" },
    intro: {
      en: 'Machinery builders rely on suppliers who can machine a dozen different part families, hold revisions, and deliver on time so the assembly line keeps moving. Industrial equipment is the broadest segment Apex serves.',
      fr: "Les fabricants de machines comptent sur des fournisseurs capables d'usiner plusieurs familles de pièces, de maintenir les révisions et de livrer à temps pour que la chaîne d'assemblage avance. L'équipement industriel est le segment le plus vaste d'Apex.",
    },
    needs: {
      en: ['Mixed part families from one supplier', 'Prototype through recurring production', 'Shafts, housings, plates and adapters', 'Machining plus coordinated finishing'],
      fr: ['Familles de pièces variées chez un seul fournisseur', 'Du prototype à la production récurrente', 'Arbres, boîtiers, plaques et adaptateurs', 'Usinage et finition coordonnée'],
    },
    why: {
      en: 'Milling, turning and multi-axis capability under one roof, with 7M+ parts manufactured since 1997, lets OEMs consolidate suppliers.',
      fr: "Fraisage, tournage et multi-axes sous un même toit, avec plus de 7 M de pièces fabriquées depuis 1997, permettent aux OEM de regrouper leurs fournisseurs.",
    },
    quality: QUALITY_NOTE,
    services: ['production-machining', 'cnc-machining', 'prototype-machining'],
    materials: ['carbon-steel', 'aluminum', 'stainless-steel'],
  },
  {
    id: 'logistics-warehousing',
    name: { en: 'Logistics & Warehousing', fr: 'Logistique et entreposage' },
    short: { en: 'Machined parts for material-handling systems, conveyors and warehouse automation.', fr: "Pièces usinées pour systèmes de manutention, convoyeurs et automatisation d'entrepôt." },
    seoTitle: { en: 'Material Handling & Warehouse Equipment Machining | Apex', fr: "Usinage pour manutention et équipement d'entrepôt | Apex Technologies" },
    seoDescription: { en: 'CNC machined components for logistics and warehousing equipment from Burnaby, BC: rollers, shafts, brackets and adapters, prototype to production.', fr: "Composants usinés CNC pour équipements de logistique et d'entreposage à Burnaby (C.-B.) : rouleaux, arbres, supports et adaptateurs, du prototype à la production." },
    h1: { en: 'Machined Parts for Logistics & Warehousing Equipment', fr: "Pièces usinées pour équipements de logistique et d'entreposage" },
    intro: {
      en: 'Conveyors, sorters and automated storage systems run continuously, so wear parts and moving components need dependable geometry and repeat availability. Integrators need a machining partner that can support both new builds and spares.',
      fr: "Convoyeurs, trieurs et systèmes de stockage automatisés fonctionnent en continu ; pièces d'usure et composants mobiles exigent une géométrie fiable et une disponibilité récurrente. Les intégrateurs ont besoin d'un partenaire d'usinage pour les nouveaux projets comme pour les pièces de rechange.",
    },
    needs: {
      en: ['Shafts, rollers and spindles', 'Brackets, mounting plates and adapters', 'Wear and replacement parts', 'Aluminum components where weight matters'],
      fr: ['Arbres, rouleaux et broches', 'Supports, plaques de montage et adaptateurs', "Pièces d'usure et de remplacement", 'Composants en aluminium lorsque le poids compte'],
    },
    why: {
      en: 'Repeat-friendly production planning suits spare-parts programs and rolling equipment rollouts.',
      fr: "Une planification de production adaptée à la répétition convient aux programmes de pièces de rechange et aux déploiements d'équipements progressifs.",
    },
    quality: QUALITY_NOTE,
    services: ['production-machining', 'cnc-turning', 'cnc-milling'],
    materials: ['aluminum', 'carbon-steel', 'polymers-plastics'],
  },
];

export const getIndustry = (id: IndustryId) => {
  const i = INDUSTRIES.find((x) => x.id === id);
  if (!i) throw new Error(`Unknown industry ${id}`);
  return i;
};
