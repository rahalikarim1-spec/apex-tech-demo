import type { L } from '@/lib/i18n';
import type { IndustryId, MaterialId, ServiceId } from './registry';

export type Material = {
  id: MaterialId;
  name: L<string>;
  short: L<string>;
  seoTitle: L<string>;
  seoDescription: L<string>;
  h1: L<string>;
  overview: L<string>;
  considerations: L<string[]>;
  applications: L<string[]>;
  services: ServiceId[];
  industries: IndustryId[];
};

/** Shown on every material page: no grade, stock or property is promised in this demo. */
export const MATERIAL_DISCLAIMER: L<string> = {
  en: 'Available grades, forms and certifications are confirmed with Apex during quotation. General notes on this page are informational, not a material specification.',
  fr: "Les nuances, formes et certifications disponibles sont confirmées avec Apex lors de la soumission. Les notes de cette page sont informatives et ne constituent pas une spécification de matériau.",
};

export const MATERIALS: Material[] = [
  {
    id: 'carbon-steel',
    name: { en: 'Carbon Steel', fr: 'Acier au carbone' },
    short: { en: 'Strong, economical steel for shafts, plates and structural machined parts.', fr: 'Acier résistant et économique pour arbres, plaques et pièces structurales.' },
    seoTitle: { en: 'Carbon Steel CNC Machining | Steel Machining | Apex', fr: "Usinage CNC d'acier au carbone | Apex Technologies" },
    seoDescription: { en: 'Carbon steel and steel machining services from Burnaby, BC. CNC milling and turning of shafts, plates and structural parts for industrial customers.', fr: "Usinage d'acier au carbone à Burnaby (C.-B.). Fraisage et tournage CNC d'arbres, plaques et pièces structurales pour clients industriels." },
    h1: { en: 'Carbon Steel CNC Machining', fr: "Usinage CNC d'acier au carbone" },
    overview: {
      en: 'Carbon steel is the workhorse of industrial machining: strong, widely available and cost-effective. It is a natural choice for parts where strength matters more than corrosion resistance.',
      fr: "L'acier au carbone est le cheval de bataille de l'usinage industriel : résistant, largement disponible et économique. C'est un choix naturel lorsque la résistance importe plus que la résistance à la corrosion.",
    },
    considerations: {
      en: ['Unprotected surfaces can rust, so plating, coating or oiling is often specified', 'Machinability varies with carbon content and condition', 'Heat treatment can change hardness and may be planned after or before machining', 'Stress relief may matter for parts prone to distortion'],
      fr: ['Les surfaces non protégées peuvent rouiller : placage, revêtement ou huilage sont souvent spécifiés', 'Usinabilité variable selon la teneur en carbone et l’état', 'Le traitement thermique modifie la dureté et peut être prévu avant ou après usinage', 'Le détensionnement peut compter pour les pièces sujettes à la déformation'],
    },
    applications: { en: ['Shafts and pins', 'Base plates and brackets', 'Gears and structural components', 'General industrial machinery parts'], fr: ['Arbres et goupilles', 'Plaques de base et supports', 'Engrenages et composants structuraux', 'Pièces de machinerie industrielle générale'] },
    services: ['cnc-turning', 'cnc-milling', 'production-machining'],
    industries: ['construction', 'industrial-machinery', 'mining'],
  },
  {
    id: 'stainless-steel',
    name: { en: 'Stainless Steel', fr: 'Acier inoxydable' },
    short: { en: 'Corrosion-resistant alloys for fluid, medical and food-adjacent equipment.', fr: 'Alliages résistants à la corrosion pour équipements de fluides, médicaux et alimentaires.' },
    seoTitle: { en: 'Stainless Steel CNC Machining | Precision Parts | Apex', fr: "Usinage CNC d'acier inoxydable | Pièces de précision | Apex" },
    seoDescription: { en: 'Stainless steel CNC machining in Burnaby, BC. Precision milled and turned components in corrosion-resistant steels, with passivation coordinated through partners.', fr: "Usinage CNC d'acier inoxydable à Burnaby (C.-B.). Composants fraisés et tournés de précision, avec passivation coordonnée via des partenaires." },
    h1: { en: 'Stainless Steel CNC Machining', fr: "Usinage CNC d'acier inoxydable" },
    overview: {
      en: 'Stainless steels combine strength with resistance to corrosion, which is why they appear in fluid systems, process equipment and medical hardware. Different families behave very differently on the machine.',
      fr: "Les aciers inoxydables allient résistance mécanique et résistance à la corrosion, d'où leur présence dans les systèmes de fluides, équipements de procédé et matériel médical. Les familles se comportent très différemment à l'usinage.",
    },
    considerations: {
      en: ['Many grades work-harden, so tool sharpness and steady feeds matter', 'Heat is retained in the cut, which affects tooling and finish', 'Passivation or electro-polishing can restore or enhance surface corrosion resistance and is coordinated through partners', 'Grade selection should follow the service environment'],
      fr: ["De nombreuses nuances s'écrouissent : outils affûtés et avances régulières sont importants", 'La chaleur reste dans la coupe, ce qui influence outillage et finition', "La passivation ou l'électropolissage peuvent rétablir ou améliorer la résistance à la corrosion en surface et sont coordonnés par des partenaires", "Le choix de la nuance doit suivre l'environnement de service"],
    },
    applications: { en: ['Fittings and valve components', 'Medical and pharmaceutical equipment parts', 'Process and instrumentation hardware', 'Corrosion-exposed structural parts'], fr: ['Raccords et composants de valves', "Pièces d'équipements médicaux et pharmaceutiques", "Quincaillerie de procédé et d'instrumentation", 'Pièces structurales exposées à la corrosion'] },
    services: ['multi-axis-machining', 'cnc-turning', 'cnc-milling'],
    industries: ['oil-gas', 'medical-pharmaceutical', 'firefighting'],
  },
  {
    id: 'alloy-steel',
    name: { en: 'Alloy Steel', fr: 'Acier allié' },
    short: { en: 'High-strength steels for heavily loaded, wear-exposed components.', fr: "Aciers à haute résistance pour composants fortement sollicités et exposés à l'usure." },
    seoTitle: { en: 'Alloy Steel CNC Machining | Apex Technologies', fr: "Usinage CNC d'acier allié | Apex Technologies" },
    seoDescription: { en: 'Alloy steel machining for high-load parts from Burnaby, BC. CNC turning and milling of shafts, connectors and tooling, with heat treating coordinated by partners.', fr: "Usinage d'acier allié pour pièces fortement sollicitées à Burnaby (C.-B.). Tournage et fraisage CNC d'arbres, connecteurs et outillage, traitement thermique par des partenaires." },
    h1: { en: 'Alloy Steel CNC Machining', fr: "Usinage CNC d'acier allié" },
    overview: {
      en: 'Alloy steels add elements that raise strength, toughness or hardenability. They are chosen for components that carry heavy loads, transmit torque or resist wear, and often reach their final properties through heat treatment.',
      fr: "Les aciers alliés contiennent des éléments qui augmentent résistance, ténacité ou trempabilité. On les choisit pour les composants qui portent de fortes charges, transmettent du couple ou résistent à l'usure, souvent avec un traitement thermique.",
    },
    considerations: {
      en: ['Condition at machining (annealed vs pre-hardened) changes tooling and cycle time', 'Heat treatment can cause movement, so machining sequence matters', 'Threads and critical bores may be finished after heat treatment', 'Surface protection is usually required'],
      fr: ["L'état à l'usinage (recuit ou prétrempé) modifie outillage et temps de cycle", 'Le traitement thermique peut causer des mouvements : la séquence compte', 'Filetages et alésages critiques peuvent être finis après traitement thermique', 'Une protection de surface est généralement requise'],
    },
    applications: { en: ['Drive shafts and torque-carrying parts', 'Drilling and tooling components', 'Heavy-duty connectors', 'Wear-exposed pins and sleeves'], fr: ["Arbres d'entraînement et pièces de transmission de couple", 'Composants de forage et d’outillage', 'Connecteurs robustes', 'Goupilles et manchons exposés à l’usure'] },
    services: ['cnc-turning', 'multi-axis-machining', 'production-machining'],
    industries: ['horizontal-directional-drilling', 'mining', 'oil-gas'],
  },
  {
    id: 'aluminum',
    name: { en: 'Aluminum', fr: 'Aluminium' },
    short: { en: 'Lightweight, quick-to-machine alloys for housings, plates and prototypes.', fr: 'Alliages légers et rapides à usiner pour boîtiers, plaques et prototypes.' },
    seoTitle: { en: 'Aluminum CNC Machining | Custom Aluminum Parts | Apex', fr: "Usinage CNC d'aluminium | Pièces sur mesure | Apex" },
    seoDescription: { en: 'Aluminum CNC machining in Burnaby, BC. Custom milled and turned aluminum parts, prototype to production, with anodizing available through partners.', fr: "Usinage CNC d'aluminium à Burnaby (C.-B.). Pièces d'aluminium fraisées et tournées sur mesure, du prototype à la production, anodisation via des partenaires." },
    h1: { en: 'Aluminum CNC Machining', fr: "Usinage CNC d'aluminium" },
    overview: {
      en: 'Aluminum offers a favourable strength-to-weight ratio, good thermal conductivity and generally efficient machining, which is why it is common in enclosures, heat-managing parts and prototypes.',
      fr: "L'aluminium offre un bon rapport résistance/poids, une bonne conductivité thermique et un usinage généralement efficace, d'où sa présence dans les boîtiers, pièces thermiques et prototypes.",
    },
    considerations: {
      en: ['Chip evacuation matters in deep pockets', 'Thin walls can move, so workholding and cut sequence are planned carefully', 'Anodizing, chromate conversion and other finishes are coordinated through partners', 'Alloy choice affects strength, machinability and finish response'],
      fr: ["L'évacuation des copeaux est importante dans les poches profondes", 'Les parois minces peuvent bouger : fixation et séquence de coupe sont planifiées avec soin', "Anodisation, conversion au chromate et autres finitions sont coordonnées par des partenaires", "Le choix de l'alliage influence résistance, usinabilité et réponse à la finition"],
    },
    applications: { en: ['Housings and enclosures', 'Heat sinks and thermal parts', 'Brackets and frames', 'Rapid prototypes'], fr: ['Boîtiers et enveloppes', 'Dissipateurs et pièces thermiques', 'Supports et cadres', 'Prototypes rapides'] },
    services: ['cnc-milling', 'prototype-machining', 'cnc-machining'],
    industries: ['telecommunications-instruments', 'logistics-warehousing', 'medical-pharmaceutical'],
  },
  {
    id: 'polymers-plastics',
    name: { en: 'Polymers & Plastics', fr: 'Polymères et plastiques' },
    short: { en: 'Engineering plastics for insulation, low friction and lightweight parts.', fr: 'Plastiques techniques pour isolation, faible friction et pièces légères.' },
    seoTitle: { en: 'Plastic CNC Machining | Engineering Plastics | Apex', fr: "Usinage CNC de plastiques techniques | Apex Technologies" },
    seoDescription: { en: 'Plastic CNC machining in Burnaby, BC. Precision milled and turned polymer components for industrial, instrument and medical equipment.', fr: "Usinage CNC de plastiques à Burnaby (C.-B.). Composants en polymères fraisés et tournés pour équipements industriels, instruments et médicaux." },
    h1: { en: 'Plastic CNC Machining', fr: 'Usinage CNC de plastiques' },
    overview: {
      en: 'Machined polymers give designers electrical insulation, chemical resistance, low friction or low weight. They can replace metal where those properties matter, but they behave differently under heat and load.',
      fr: "Les polymères usinés offrent isolation électrique, résistance chimique, faible friction ou faible poids. Ils peuvent remplacer le métal lorsque ces propriétés importent, mais réagissent différemment à la chaleur et à la charge.",
    },
    considerations: {
      en: ['Heat from cutting can soften or distort plastics', 'Thermal expansion and moisture uptake affect final dimensions', 'Sharp tools and controlled cutting forces protect finish', 'Material choice should reflect chemical and temperature exposure'],
      fr: ['La chaleur de coupe peut ramollir ou déformer les plastiques', "Dilatation thermique et absorption d'humidité influencent les dimensions finales", "Outils affûtés et efforts de coupe contrôlés protègent la finition", "Le choix du matériau doit refléter l'exposition chimique et thermique"],
    },
    applications: { en: ['Insulators and spacers', 'Bearings, bushings and wear pads', 'Instrument components', 'Lightweight fixtures'], fr: ['Isolants et entretoises', 'Paliers, bagues et patins d’usure', "Composants d'instruments", 'Gabarits légers'] },
    services: ['cnc-milling', 'prototype-machining', 'custom-precision-parts'],
    industries: ['medical-pharmaceutical', 'telecommunications-instruments', 'logistics-warehousing'],
  },
  {
    id: 'bronze',
    name: { en: 'Bronze', fr: 'Bronze' },
    short: { en: 'Copper alloys with good wear and bearing characteristics.', fr: "Alliages de cuivre aux bonnes caractéristiques d'usure et de palier." },
    seoTitle: { en: 'Bronze CNC Machining | Bushings & Bearings | Apex', fr: "Usinage CNC de bronze | Bagues et paliers | Apex" },
    seoDescription: { en: 'Bronze CNC machining from Burnaby, BC. Turned and milled bushings, bearings and wear components for industrial equipment.', fr: "Usinage CNC de bronze à Burnaby (C.-B.). Bagues, paliers et pièces d'usure tournés et fraisés pour équipements industriels." },
    h1: { en: 'Bronze CNC Machining', fr: 'Usinage CNC de bronze' },
    overview: {
      en: 'Bronze alloys are valued where sliding contact, wear resistance and corrosion resistance meet. Bushings, bearings and wear plates are typical uses.',
      fr: "Les alliages de bronze sont appréciés lorsque contact glissant, résistance à l'usure et résistance à la corrosion se rencontrent. Bagues, paliers et plaques d'usure en sont les usages types.",
    },
    considerations: {
      en: ['Machinability depends on the alloy; some free-machining grades cut cleanly', 'Fit and clearance matter for bearing surfaces', 'Material cost is higher than steel, so nesting and stock size are planned', 'Lubrication design should be part of the drawing'],
      fr: ["L'usinabilité dépend de l'alliage ; certaines nuances de décolletage coupent proprement", "L'ajustement et le jeu comptent pour les surfaces de palier", "Le coût matière est supérieur à l'acier : dimensions de brut planifiées", 'La conception de lubrification doit figurer au plan'],
    },
    applications: { en: ['Bushings and sleeve bearings', 'Wear plates', 'Marine and fluid fittings', 'Gears and worm wheels'], fr: ['Bagues et paliers lisses', "Plaques d'usure", 'Raccords marins et de fluides', 'Engrenages et roues à vis'] },
    services: ['cnc-turning', 'production-machining', 'custom-precision-parts'],
    industries: ['mining', 'construction', 'industrial-machinery'],
  },
  {
    id: 'brass',
    name: { en: 'Brass', fr: 'Laiton' },
    short: { en: 'Free-machining copper-zinc alloy for fittings, connectors and precision turned parts.', fr: 'Alliage cuivre-zinc de décolletage pour raccords, connecteurs et pièces tournées de précision.' },
    seoTitle: { en: 'Brass CNC Machining | Fittings & Connectors | Apex', fr: "Usinage CNC de laiton | Raccords et connecteurs | Apex" },
    seoDescription: { en: 'Brass CNC machining in Burnaby, BC. Turned and milled brass fittings, connectors and precision parts, prototype to production.', fr: "Usinage CNC de laiton à Burnaby (C.-B.). Raccords, connecteurs et pièces de précision en laiton tournés et fraisés, du prototype à la production." },
    h1: { en: 'Brass CNC Machining', fr: 'Usinage CNC de laiton' },
    overview: {
      en: 'Brass is among the easiest metals to machine, cutting cleanly and holding fine detail. It combines corrosion resistance with useful electrical and thermal conductivity.',
      fr: "Le laiton compte parmi les métaux les plus faciles à usiner : coupe nette et détails fins. Il allie résistance à la corrosion et conductivité électrique et thermique utile.",
    },
    considerations: {
      en: ['Free-machining grades allow efficient production of turned parts', 'Can be plated or left bare depending on the application', 'Requirements for lead content vary by industry and should be stated at quotation', 'Softer than steel, so handling avoids marking finished surfaces'],
      fr: ['Les nuances de décolletage permettent une production efficace de pièces tournées', "Peut être plaqué ou laissé nu selon l'application", "Les exigences sur la teneur en plomb varient selon l'industrie et doivent être précisées à la soumission", "Plus tendre que l'acier : la manutention évite de marquer les surfaces finies"],
    },
    applications: { en: ['Fittings, couplings and adapters', 'Electrical connectors and terminals', 'Instrument components', 'Fluid-control parts'], fr: ['Raccords, accouplements et adaptateurs', 'Connecteurs et bornes électriques', "Composants d'instruments", 'Pièces de contrôle de fluides'] },
    services: ['cnc-turning', 'cnc-milling', 'production-machining'],
    industries: ['firefighting', 'telecommunications-instruments', 'oil-gas'],
  },
  {
    id: 'copper',
    name: { en: 'Copper', fr: 'Cuivre' },
    short: { en: 'High-conductivity metal for electrical and thermal components.', fr: 'Métal à haute conductivité pour composants électriques et thermiques.' },
    seoTitle: { en: 'Copper CNC Machining | Electrical & Thermal Parts | Apex', fr: "Usinage CNC de cuivre | Pièces électriques et thermiques | Apex" },
    seoDescription: { en: 'Copper CNC machining from Burnaby, BC. Precision milled and turned copper parts for electrical, RF and thermal applications.', fr: "Usinage CNC de cuivre à Burnaby (C.-B.). Pièces de cuivre fraisées et tournées pour applications électriques, RF et thermiques." },
    h1: { en: 'Copper CNC Machining', fr: 'Usinage CNC de cuivre' },
    overview: {
      en: 'Copper is chosen for its electrical and thermal conductivity. Pure copper is soft and gummy on the machine, so process planning matters for a clean finish and burr control.',
      fr: "Le cuivre est choisi pour sa conductivité électrique et thermique. Le cuivre pur est mou et pâteux à l'usinage : la planification du procédé compte pour une finition propre et le contrôle des bavures.",
    },
    considerations: {
      en: ['Soft, ductile material tends to burr and smear without sharp tooling', 'Surface oxidation is normal; plating may be specified', 'Material cost and scrap rate influence pricing of small runs', 'Alloys can trade some conductivity for machinability'],
      fr: ["Matériau mou et ductile : bavures et étalement sans outils affûtés", "L'oxydation de surface est normale ; un placage peut être spécifié", "Coût matière et taux de rebut influencent le prix des petites séries", "Certains alliages sacrifient un peu de conductivité pour l'usinabilité"],
    },
    applications: { en: ['Electrical contacts and busbars', 'Heat spreaders and thermal blocks', 'RF and telecom components', 'Grounding hardware'], fr: ['Contacts électriques et barres omnibus', 'Répartiteurs de chaleur et blocs thermiques', 'Composants RF et télécom', 'Quincaillerie de mise à la terre'] },
    services: ['cnc-milling', 'prototype-machining', 'custom-precision-parts'],
    industries: ['telecommunications-instruments', 'industrial-machinery', 'medical-pharmaceutical'],
  },
  {
    id: 'silver',
    name: { en: 'Silver', fr: 'Argent' },
    short: { en: 'Precious metal for specialized electrical contact and conductive applications.', fr: 'Métal précieux pour contacts électriques et applications conductrices spécialisées.' },
    seoTitle: { en: 'Silver Machining | Specialty Precision Parts | Apex', fr: "Usinage d'argent | Pièces de précision spécialisées | Apex" },
    seoDescription: { en: 'Silver component machining enquiries from Burnaby, BC. Discuss your specialized conductive or contact part with the Apex team.', fr: "Demandes d'usinage de composants en argent depuis Burnaby (C.-B.). Discutez de votre pièce conductrice ou de contact spécialisée avec l'équipe Apex." },
    h1: { en: 'Silver Component Machining', fr: "Usinage de composants en argent" },
    overview: {
      en: 'Silver has the highest electrical and thermal conductivity of the metals and is used in specialized contacts and conductive components. Because of its cost, silver work is handled case by case.',
      fr: "L'argent offre la plus haute conductivité électrique et thermique des métaux et sert dans des contacts et composants conducteurs spécialisés. En raison de son coût, chaque demande est traitée au cas par cas.",
    },
    considerations: {
      en: ['Material cost makes scrap and stock size critical; quantity and form should be discussed early', 'Very soft in pure form, so alloys may be specified', 'Handling and storage plans for precious metal are agreed before work begins', 'Silver plating on another base metal is sometimes an alternative to solid silver'],
      fr: ["Le coût matière rend rebut et dimensions du brut critiques ; quantité et forme sont à discuter tôt", "Très mou à l'état pur : des alliages peuvent être spécifiés", "La manutention et l'entreposage du métal précieux sont convenus avant le début", "Le placage d'argent sur un autre métal est parfois une alternative à l'argent massif"],
    },
    applications: { en: ['Electrical contacts', 'Specialty conductive components', 'Thermal interface parts', 'Custom instrument components'], fr: ['Contacts électriques', 'Composants conducteurs spécialisés', "Pièces d'interface thermique", "Composants d'instruments sur mesure"] },
    services: ['custom-precision-parts', 'prototype-machining', 'cnc-milling'],
    industries: ['telecommunications-instruments', 'medical-pharmaceutical', 'industrial-machinery'],
  },
];

export const getMaterial = (id: MaterialId) => {
  const m = MATERIALS.find((x) => x.id === id);
  if (!m) throw new Error(`Unknown material ${id}`);
  return m;
};
