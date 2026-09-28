import type { L } from '@/lib/i18n';
import type { ServiceId, IndustryId, MaterialId } from './registry';

export type Faq = { q: string; a: string };

export type Service = {
  id: ServiceId;
  name: L<string>;
  short: L<string>;
  seoTitle: L<string>;
  seoDescription: L<string>;
  h1: L<string>;
  intro: L<string[]>;
  capabilities: L<string[]>;
  applications: L<string[]>;
  advantages: L<{ title: string; text: string }[]>;
  process: L<{ title: string; text: string }[]>;
  faq: L<Faq[]>;
  industries: IndustryId[];
  materials: MaterialId[];
  related: ServiceId[];
  ctaLabel: L<string>;
};

export const SERVICES: Service[] = [
  {
    id: 'cnc-machining',
    name: { en: 'CNC Machining', fr: 'Usinage CNC' },
    short: {
      en: 'The full CNC machining offer from one Burnaby machine shop: milling, turning and multi-axis work for industrial parts.',
      fr: "Toute l'offre d'usinage CNC d'un seul atelier de Burnaby : fraisage, tournage et usinage multi-axes pour pièces industrielles.",
    },
    seoTitle: {
      en: 'CNC Machining Services in Burnaby, BC | Apex Technologies',
      fr: "Services d'usinage CNC à Burnaby, C.-B. | Apex Technologies",
    },
    seoDescription: {
      en: 'CNC machine shop in Burnaby serving Vancouver, British Columbia, Canada and the USA since 1997. Milling, turning and multi-axis machining. Request a quote.',
      fr: "Atelier d'usinage CNC à Burnaby desservant Vancouver, la Colombie-Britannique, le Canada et les États-Unis depuis 1997. Fraisage, tournage, multi-axes. Demandez une soumission.",
    },
    h1: { en: 'CNC Machining Services from Burnaby, BC', fr: "Services d'usinage CNC depuis Burnaby, C.-B." },
    intro: {
      en: [
        'Apex Technologies has been a CNC machine shop for industrial customers since 1997. From our facility in Burnaby, we machine custom parts for buyers and engineers across Vancouver, British Columbia, Canada and the United States.',
        'Our CNC machining work covers milling, turning and multi-axis manufacturing on equipment from HAAS, BROTHER, TAKISAWA and DN Solutions. Whether you need a single prototype or a repeat production run, the process starts from the same place: your drawing and your requirements.',
      ],
      fr: [
        "Apex Technologies est un atelier d'usinage CNC au service des clients industriels depuis 1997. Depuis notre installation de Burnaby, nous usinons des pièces sur mesure pour des acheteurs et ingénieurs de Vancouver, de la Colombie-Britannique, du Canada et des États-Unis.",
        "Notre travail d'usinage CNC couvre le fraisage, le tournage et la fabrication multi-axes sur des équipements HAAS, BROTHER, TAKISAWA et DN Solutions. D'un prototype unique à une série récurrente, le processus part toujours du même point : votre plan et vos exigences.",
      ],
    },
    capabilities: {
      en: ['CNC milling for prismatic and complex geometries', 'CNC turning, including complex turning with live tooling', 'Multi-axis machining to reduce setups', 'Prototype, low-volume and production runs', 'Metals and engineering plastics', 'Coordination of finishing through partner processes'],
      fr: ['Fraisage CNC de géométries prismatiques et complexes', "Tournage CNC, y compris tournage complexe avec outils tournants", "Usinage multi-axes pour réduire le nombre de montages", 'Prototypes, petites séries et production', "Métaux et plastiques techniques", 'Coordination des finitions via des partenaires'],
    },
    applications: {
      en: ['Housings, brackets and mounting plates', 'Shafts, bushings and fittings', 'Manifolds and fluid-handling components', 'Replacement and legacy parts without a current supplier'],
      fr: ['Boîtiers, supports et plaques de montage', 'Arbres, bagues et raccords', 'Blocs et composants de manutention de fluides', 'Pièces de remplacement ou héritées sans fournisseur actuel'],
    },
    advantages: {
      en: [
        { title: 'One shop, several processes', text: 'Milling, turning and multi-axis work under one roof means fewer hand-offs between suppliers for many part families.' },
        { title: 'Engineering-led quoting', text: 'Drawings are reviewed for manufacturability before pricing, so questions surface before the job is on a machine.' },
        { title: 'Decades of repeat work', text: 'Operating since 1997 and with 7M+ parts manufactured, Apex is built for repeatable, documented production.' },
        { title: 'Cross-border customers', text: 'We work with industrial buyers in both Canada and the USA.' },
      ],
      fr: [
        { title: 'Un atelier, plusieurs procédés', text: "Fraisage, tournage et multi-axes sous un même toit : moins de transferts entre fournisseurs pour de nombreuses familles de pièces." },
        { title: 'Soumission pilotée par l’ingénierie', text: "Les plans sont examinés sous l'angle de la fabricabilité avant la tarification : les questions surgissent avant l'usinage." },
        { title: 'Des décennies de travail récurrent', text: "En activité depuis 1997 avec plus de 7 M de pièces fabriquées, Apex est conçu pour une production répétable et documentée." },
        { title: 'Clients transfrontaliers', text: "Nous travaillons avec des acheteurs industriels au Canada et aux États-Unis." },
      ],
    },
    process: {
      en: [
        { title: 'Send your drawing', text: 'Upload a PDF, DWG, STEP, STL or IGES file with quantity and material.' },
        { title: 'Engineering review', text: 'We check geometry, material and requirements, and confirm open questions with you.' },
        { title: 'Quote & plan', text: 'You receive pricing and lead time, then the process route is planned.' },
        { title: 'Machine & inspect', text: 'Parts are machined, inspected and released against your drawing.' },
      ],
      fr: [
        { title: 'Envoyez votre plan', text: 'Téléversez un fichier PDF, DWG, STEP, STL ou IGES avec quantité et matériau.' },
        { title: 'Revue d’ingénierie', text: 'Nous vérifions la géométrie, le matériau et les exigences, puis confirmons les points ouverts avec vous.' },
        { title: 'Soumission et planification', text: 'Vous recevez prix et délai, puis la gamme de fabrication est planifiée.' },
        { title: 'Usinage et inspection', text: 'Les pièces sont usinées, inspectées et libérées selon votre plan.' },
      ],
    },
    faq: {
      en: [
        { q: 'What types of CNC machining does Apex offer?', a: 'Apex offers CNC milling, CNC turning and multi-axis machining, for prototypes through to production quantities. Each is covered on its own page so you can see how it applies to your part.' },
        { q: 'Do you serve customers outside British Columbia?', a: 'Yes. Apex supplies industrial customers across Canada and the United States from its Burnaby facility.' },
        { q: 'Which file formats can I send for a quote?', a: 'PDF, DWG, STEP, STL and IGES files are accepted through the RFQ form. A 2D drawing with the 3D model is the most useful combination.' },
      ],
      fr: [
        { q: "Quels types d'usinage CNC Apex offre-t-il ?", a: "Apex offre le fraisage CNC, le tournage CNC et l'usinage multi-axes, du prototype aux quantités de production. Chacun a sa propre page pour comprendre son application à votre pièce." },
        { q: 'Servez-vous des clients hors de la Colombie-Britannique ?', a: "Oui. Apex approvisionne des clients industriels partout au Canada et aux États-Unis depuis son installation de Burnaby." },
        { q: 'Quels formats de fichier puis-je envoyer pour une soumission ?', a: "Les fichiers PDF, DWG, STEP, STL et IGES sont acceptés via le formulaire de soumission. Un plan 2D accompagné du modèle 3D est la combinaison la plus utile." },
      ],
    },
    industries: ['oil-gas', 'mining', 'industrial-machinery', 'medical-pharmaceutical'],
    materials: ['aluminum', 'stainless-steel', 'carbon-steel', 'brass'],
    related: ['cnc-milling', 'cnc-turning', 'multi-axis-machining'],
    ctaLabel: { en: 'Request a CNC Machining Quote', fr: 'Demander une soumission en usinage CNC' },
  },
  {
    id: 'cnc-milling',
    name: { en: 'CNC Milling', fr: 'Fraisage CNC' },
    short: {
      en: 'Precision CNC milling for housings, plates, manifolds and complex prismatic parts.',
      fr: 'Fraisage CNC de précision pour boîtiers, plaques, blocs et pièces prismatiques complexes.',
    },
    seoTitle: { en: 'CNC Milling Services | Burnaby, BC | Apex Technologies', fr: 'Services de fraisage CNC | Burnaby, C.-B. | Apex Technologies' },
    seoDescription: {
      en: 'Custom CNC milling services for industrial parts from Burnaby, BC. Flat, pocketed and contoured geometries in metals and plastics. Send your drawing for a quote.',
      fr: "Services de fraisage CNC sur mesure pour pièces industrielles à Burnaby (C.-B.). Géométries planes, poches et contours en métaux et plastiques. Envoyez votre plan.",
    },
    h1: { en: 'CNC Milling Services for Custom Industrial Parts', fr: 'Fraisage CNC pour pièces industrielles sur mesure' },
    intro: {
      en: [
        'CNC milling removes material with rotating cutting tools moving across a fixed workpiece. It is the right process when your part is defined by faces, pockets, slots, bores and hole patterns rather than by a single axis of rotation.',
        'Apex mills custom parts for industrial buyers in Canada and the USA. Send a drawing and we will review the features, the material and the quantity, and tell you how we would approach the job.',
      ],
      fr: [
        "Le fraisage CNC enlève de la matière avec des outils rotatifs se déplaçant autour d'une pièce fixe. C'est le bon procédé lorsque votre pièce est définie par des faces, poches, rainures, alésages et motifs de perçage plutôt que par un axe de rotation.",
        "Apex fraise des pièces sur mesure pour des acheteurs industriels au Canada et aux États-Unis. Envoyez un plan : nous examinerons les caractéristiques, le matériau et la quantité, puis vous expliquerons notre approche.",
      ],
    },
    capabilities: {
      en: ['Face milling, pocketing and slotting', 'Drilled, bored and tapped hole patterns', 'Contoured and profiled features', 'Housings, plates and blocks from bar or plate stock', 'Aluminum, steels, stainless, brass, copper and plastics', 'Combined with turning or multi-axis work when geometry requires it'],
      fr: ['Surfaçage, poches et rainures', 'Motifs de perçage, alésage et taraudage', 'Contours et profils', 'Boîtiers, plaques et blocs usinés dans la barre ou la plaque', 'Aluminium, aciers, inoxydable, laiton, cuivre et plastiques', 'Combiné au tournage ou au multi-axes selon la géométrie'],
    },
    applications: {
      en: ['Hydraulic and fluid manifolds', 'Instrument and electronics enclosures', 'Mounting plates, brackets and frames', 'Tooling components and fixtures'],
      fr: ['Blocs hydrauliques et de fluides', "Boîtiers d'instruments et d'électronique", 'Plaques de montage, supports et cadres', "Composants d'outillage et gabarits"],
    },
    advantages: {
      en: [
        { title: 'Feature-driven review', text: 'We look at pockets, thin walls and hole depth up front, because these drive cycle time and risk more than overall size.' },
        { title: 'Fewer setups where possible', text: 'Where a part needs several faces machined, we plan workholding to limit re-fixturing and stacked error.' },
        { title: 'Scales from one to many', text: 'The same milling capability supports prototypes and repeat orders.' },
      ],
      fr: [
        { title: 'Revue axée sur les caractéristiques', text: "Nous examinons poches, parois minces et profondeur de trous dès le départ, car ils influencent le temps de cycle et le risque plus que la taille." },
        { title: 'Moins de montages quand possible', text: "Lorsqu'une pièce exige plusieurs faces, nous planifions le porte-pièce pour limiter les reprises et le cumul d'erreurs." },
        { title: 'De un à plusieurs', text: "La même capacité de fraisage soutient les prototypes et les commandes récurrentes." },
      ],
    },
    process: {
      en: [
        { title: 'Feature review', text: 'Pockets, walls, threads and datum scheme are checked against the material.' },
        { title: 'Workholding plan', text: 'Fixturing and operation order are set to control distortion and setups.' },
        { title: 'Machining', text: 'Roughing and finishing on CNC mills, with in-process checks as needed.' },
        { title: 'Inspection & release', text: 'Critical features are verified before the parts ship.' },
      ],
      fr: [
        { title: 'Revue des caractéristiques', text: 'Poches, parois, filetages et références sont validés selon le matériau.' },
        { title: 'Plan de fixation', text: "Le montage et l'ordre des opérations limitent la déformation et les reprises." },
        { title: 'Usinage', text: 'Ébauche et finition sur fraiseuses CNC, avec contrôles en cours de fabrication au besoin.' },
        { title: 'Inspection et libération', text: "Les caractéristiques critiques sont vérifiées avant l'expédition." },
      ],
    },
    faq: {
      en: [
        { q: 'When should I choose milling over turning?', a: 'Choose milling when the part is mostly flat faces, pockets and hole patterns. Choose turning when it is essentially round. Many parts need both, which is where multi-axis machining helps.' },
        { q: 'Can Apex mill both metals and plastics?', a: 'Yes. Typical materials include aluminum, steels, stainless steel, brass, copper and engineering plastics. Exact grades are confirmed during quoting.' },
        { q: 'How do I get a CNC milling quote?', a: 'Use the RFQ form to upload your drawing and describe quantity and material. Our team replies with questions or a quote.' },
      ],
      fr: [
        { q: 'Quand choisir le fraisage plutôt que le tournage ?', a: "Choisissez le fraisage lorsque la pièce comporte surtout des faces planes, poches et motifs de trous. Choisissez le tournage pour une pièce essentiellement ronde. Beaucoup de pièces exigent les deux : c'est là que le multi-axes aide." },
        { q: "Apex peut-il fraiser métaux et plastiques ?", a: "Oui. Les matériaux courants incluent aluminium, aciers, inoxydable, laiton, cuivre et plastiques techniques. Les nuances exactes sont confirmées lors de la soumission." },
        { q: 'Comment obtenir une soumission de fraisage CNC ?', a: "Utilisez le formulaire pour téléverser votre plan et indiquer quantité et matériau. Notre équipe répond avec des questions ou une soumission." },
      ],
    },
    industries: ['oil-gas', 'telecommunications-instruments', 'industrial-machinery', 'construction'],
    materials: ['aluminum', 'stainless-steel', 'alloy-steel', 'polymers-plastics'],
    related: ['cnc-turning', 'multi-axis-machining', 'prototype-machining'],
    ctaLabel: { en: 'Get a CNC Milling Quote', fr: 'Obtenir une soumission de fraisage CNC' },
  },
  {
    id: 'cnc-turning',
    name: { en: 'CNC Turning', fr: 'Tournage CNC' },
    short: {
      en: 'CNC turning and complex turning for shafts, bushings, fittings and round parts.',
      fr: 'Tournage CNC et tournage complexe pour arbres, bagues, raccords et pièces rondes.',
    },
    seoTitle: { en: 'CNC Turning Services | Burnaby, BC | Apex Technologies', fr: 'Services de tournage CNC | Burnaby, C.-B. | Apex Technologies' },
    seoDescription: {
      en: 'CNC turning services for shafts, fittings and round parts, including complex turning on a dual-turret DN Solutions Lynx 2100LSYB. Burnaby, BC. Request a quote.',
      fr: "Services de tournage CNC pour arbres, raccords et pièces rondes, dont le tournage complexe sur un DN Solutions Lynx 2100LSYB à double tourelle. Burnaby (C.-B.).",
    },
    h1: { en: 'CNC Turning Services for Shafts, Fittings and Round Parts', fr: 'Tournage CNC pour arbres, raccords et pièces rondes' },
    intro: {
      en: [
        'In CNC turning, the workpiece rotates while a cutting tool shapes it. It is the natural process for shafts, pins, bushings, spacers, fittings and any part that is round about one axis.',
        'Apex runs turning capability that includes complex turning. Our DN Solutions Lynx 2100LSYB has dual turrets and 4-axis capability, which lets suitable parts be turned and milled in one cycle instead of moving between machines.',
      ],
      fr: [
        "En tournage CNC, la pièce tourne pendant qu'un outil la façonne. C'est le procédé naturel pour arbres, goupilles, bagues, entretoises, raccords et toute pièce ronde autour d'un axe.",
        "Apex offre une capacité de tournage incluant le tournage complexe. Notre DN Solutions Lynx 2100LSYB, à double tourelle et capacité 4 axes, permet de tourner et fraiser certaines pièces en un seul cycle plutôt que de passer d'une machine à l'autre.",
      ],
    },
    capabilities: {
      en: ['Turning of shafts, pins, bushings and fittings', 'Complex turning on dual-turret equipment', '4-axis capability for turned parts with milled features', 'Bores, grooves, threads and profiles', 'Metals and engineering plastics'],
      fr: ['Tournage d’arbres, goupilles, bagues et raccords', 'Tournage complexe sur équipement à double tourelle', 'Capacité 4 axes pour pièces tournées avec caractéristiques fraisées', 'Alésages, gorges, filetages et profils', 'Métaux et plastiques techniques'],
    },
    applications: {
      en: ['Drive shafts and spindles', 'Fittings, couplings and connectors', 'Bushings, sleeves and spacers', 'Pins, studs and threaded components'],
      fr: ["Arbres d'entraînement et broches", 'Raccords, accouplements et connecteurs', 'Bagues, manchons et entretoises', 'Goupilles, goujons et composants filetés'],
    },
    advantages: {
      en: [
        { title: 'Done-in-one potential', text: 'Live-tool and dual-turret machines can complete flats, cross-holes and threads in the same setup as the turned profile.' },
        { title: 'Concentricity by design', text: 'Machining related diameters in one holding helps keep features aligned to each other.' },
        { title: 'Efficient for repeat parts', text: 'Turned parts suit repeat production and stable, documented programs.' },
      ],
      fr: [
        { title: "Potentiel de pièce finie en un montage", text: "Les machines à outils tournants et double tourelle peuvent réaliser méplats, trous transversaux et filetages dans le même montage que le profil tourné." },
        { title: 'Concentricité par conception', text: "Usiner des diamètres reliés dans une seule prise aide à garder les caractéristiques alignées." },
        { title: 'Efficace pour les pièces récurrentes', text: 'Les pièces tournées se prêtent à la production récurrente et aux programmes stables et documentés.' },
      ],
    },
    process: {
      en: [
        { title: 'Drawing & stock review', text: 'Bar size, material and critical diameters are confirmed.' },
        { title: 'Turning strategy', text: 'Operation order and tooling are planned, with milling operations included where the machine allows.' },
        { title: 'Turning & finishing', text: 'Parts are turned, threaded and deburred to drawing.' },
        { title: 'Inspection', text: 'Critical diameters and features are checked before release.' },
      ],
      fr: [
        { title: 'Revue du plan et du brut', text: 'Le diamètre de barre, le matériau et les diamètres critiques sont confirmés.' },
        { title: 'Stratégie de tournage', text: "L'ordre des opérations et l'outillage sont planifiés, avec fraisage inclus lorsque la machine le permet." },
        { title: 'Tournage et finition', text: 'Les pièces sont tournées, filetées et ébavurées selon le plan.' },
        { title: 'Inspection', text: 'Les diamètres et caractéristiques critiques sont vérifiés avant la libération.' },
      ],
    },
    faq: {
      en: [
        { q: 'What is complex turning?', a: 'Complex turning combines standard lathe operations with additional axes or live tooling, so a part can receive milled flats, cross-holes or off-centre features without moving to a separate mill.' },
        { q: 'Which machine does Apex use for complex turning?', a: 'Apex operates a DN Solutions Lynx 2100LSYB with dual turrets and 4-axis capability, alongside other CNC equipment. See the Equipment page for details.' },
        { q: 'Can you turn parts from bar and from forgings or castings?', a: 'Send the drawing and describe your starting stock. We will confirm how the part can be held and machined.' },
      ],
      fr: [
        { q: "Qu'est-ce que le tournage complexe ?", a: "Le tournage complexe combine les opérations de tour classiques à des axes supplémentaires ou outils tournants : la pièce peut recevoir méplats, trous transversaux ou caractéristiques décentrées sans passer sur une fraiseuse." },
        { q: 'Quelle machine Apex utilise-t-il pour le tournage complexe ?', a: "Apex exploite un DN Solutions Lynx 2100LSYB à double tourelle et capacité 4 axes, en plus d'autres équipements CNC. Consultez la page Équipement." },
        { q: 'Pouvez-vous tourner des pièces issues de barres, de forgeages ou de moulages ?', a: "Envoyez le plan et décrivez votre brut de départ. Nous confirmerons comment la pièce peut être tenue et usinée." },
      ],
    },
    industries: ['oil-gas', 'horizontal-directional-drilling', 'mining', 'firefighting'],
    materials: ['stainless-steel', 'alloy-steel', 'brass', 'bronze'],
    related: ['cnc-milling', 'multi-axis-machining', 'production-machining'],
    ctaLabel: { en: 'Get a CNC Turning Quote', fr: 'Obtenir une soumission de tournage CNC' },
  },
  {
    id: 'multi-axis-machining',
    name: { en: 'Multi-Axis CNC Machining', fr: 'Usinage CNC multi-axes' },
    short: {
      en: 'Multi-axis CNC machining that reduces setups on complex parts and keeps features related.',
      fr: "Usinage CNC multi-axes qui réduit les montages sur les pièces complexes et garde les caractéristiques reliées.",
    },
    seoTitle: { en: 'Multi-Axis CNC Machining | Burnaby, BC | Apex Technologies', fr: 'Usinage CNC multi-axes | Burnaby, C.-B. | Apex Technologies' },
    seoDescription: {
      en: 'Multi-axis CNC machining for complex industrial parts in Burnaby, BC. Fewer setups, related features machined together. Serving Canada and the USA. Request a quote.',
      fr: "Usinage CNC multi-axes pour pièces industrielles complexes à Burnaby (C.-B.). Moins de montages, caractéristiques usinées ensemble. Canada et États-Unis. Demandez une soumission.",
    },
    h1: { en: 'Multi-Axis CNC Machining for Complex Parts', fr: 'Usinage CNC multi-axes pour pièces complexes' },
    intro: {
      en: [
        'Every time a part is unclamped and re-fixtured, tolerance stack-up and handling time enter the job. Multi-axis machining addresses this by reaching more of the part in a single setup.',
        'Apex applies multi-axis manufacturing — including 4-axis capability and dual-turret complex turning — to parts whose geometry would otherwise take several machines. Tell us what the part has to do and we will advise on the most direct route.',
      ],
      fr: [
        "Chaque fois qu'une pièce est détachée et refixée, le cumul de tolérances et le temps de manutention entrent dans le travail. L'usinage multi-axes y répond en atteignant davantage de la pièce en un seul montage.",
        "Apex applique la fabrication multi-axes — dont la capacité 4 axes et le tournage complexe à double tourelle — aux pièces dont la géométrie exigerait autrement plusieurs machines. Dites-nous ce que la pièce doit accomplir et nous vous conseillerons la voie la plus directe.",
      ],
    },
    capabilities: {
      en: ['4-axis capability', 'Dual-turret complex turning', 'Turn-and-mill parts in fewer setups', 'Angled and cross features', 'Related features machined in one holding', 'Programming reviewed against the 3D model'],
      fr: ['Capacité 4 axes', 'Tournage complexe à double tourelle', 'Pièces tourner-fraiser en moins de montages', 'Caractéristiques inclinées et transversales', 'Caractéristiques reliées usinées en une seule prise', 'Programmation validée sur le modèle 3D'],
    },
    applications: {
      en: ['Valve and fluid-control bodies', 'Parts with angled ports or cross-holes', 'Turned parts with milled flats and keyways', 'Compact assemblies where features must align'],
      fr: ['Corps de valves et de contrôle de fluides', 'Pièces à orifices inclinés ou trous transversaux', 'Pièces tournées avec méplats et rainures de clavette', 'Assemblages compacts aux caractéristiques alignées'],
    },
    advantages: {
      en: [
        { title: 'Less stacked error', text: 'Fewer re-clamps means fewer opportunities for features to drift relative to each other.' },
        { title: 'Shorter path through the shop', text: 'One machine doing the work of several can cut queue time between operations.' },
        { title: 'Design freedom', text: 'Geometry that seems awkward for 3-axis work can become straightforward.' },
      ],
      fr: [
        { title: "Moins d'erreurs cumulées", text: "Moins de reprises signifie moins d'occasions de dérive relative entre les caractéristiques." },
        { title: "Trajet plus court dans l'atelier", text: "Une machine qui fait le travail de plusieurs peut réduire les temps d'attente entre opérations." },
        { title: 'Liberté de conception', text: "Une géométrie délicate en 3 axes peut devenir simple." },
      ],
    },
    process: {
      en: [
        { title: '3D model review', text: 'We check access to every feature and identify the best orientations.' },
        { title: 'Setup strategy', text: 'Workholding is planned to reach as much of the part as possible.' },
        { title: 'Multi-axis machining', text: 'Related features are machined together.' },
        { title: 'Verification', text: 'Critical relationships are inspected against your drawing.' },
      ],
      fr: [
        { title: 'Revue du modèle 3D', text: "Nous vérifions l'accès à chaque caractéristique et les meilleures orientations." },
        { title: 'Stratégie de montage', text: 'Le porte-pièce est planifié pour atteindre le plus de surfaces possible.' },
        { title: 'Usinage multi-axes', text: 'Les caractéristiques reliées sont usinées ensemble.' },
        { title: 'Vérification', text: 'Les relations critiques sont inspectées selon votre plan.' },
      ],
    },
    faq: {
      en: [
        { q: 'What multi-axis capability does Apex have?', a: 'Apex offers 4-axis capability and dual-turret complex turning on its DN Solutions Lynx 2100LSYB, plus multi-axis manufacturing across its equipment. Detailed machine specifications are shared during quoting.' },
        { q: 'Is multi-axis machining always more expensive?', a: 'Not necessarily. Although machine time can cost more, fewer setups, less fixturing and less handling often offset it on complex parts. Simple parts are usually better made on simpler machines.' },
        { q: 'Should I send a 3D model?', a: 'Yes, where you have one. A STEP file next to the 2D drawing helps us plan orientations and tool access.' },
      ],
      fr: [
        { q: "Quelle capacité multi-axes Apex possède-t-il ?", a: "Apex offre la capacité 4 axes et le tournage complexe à double tourelle sur son DN Solutions Lynx 2100LSYB, ainsi que la fabrication multi-axes sur son parc. Les spécifications détaillées sont partagées lors de la soumission." },
        { q: "L'usinage multi-axes est-il toujours plus cher ?", a: "Pas nécessairement. Le temps machine peut coûter plus, mais moins de montages, de fixations et de manutention compensent souvent sur les pièces complexes. Les pièces simples sont mieux servies par des machines plus simples." },
        { q: 'Dois-je envoyer un modèle 3D ?', a: "Oui, si vous en avez un. Un fichier STEP avec le plan 2D nous aide à planifier orientations et accès d'outils." },
      ],
    },
    industries: ['oil-gas', 'medical-pharmaceutical', 'telecommunications-instruments', 'horizontal-directional-drilling'],
    materials: ['stainless-steel', 'aluminum', 'alloy-steel', 'brass'],
    related: ['cnc-turning', 'cnc-milling', 'custom-precision-parts'],
    ctaLabel: { en: 'Discuss a Multi-Axis Part', fr: 'Discuter d’une pièce multi-axes' },
  },
  {
    id: 'prototype-machining',
    name: { en: 'Prototype CNC Machining', fr: 'Usinage CNC de prototypes' },
    short: {
      en: 'Fast, engineering-friendly prototype machining to validate designs before committing to production.',
      fr: "Usinage de prototypes rapide et orienté ingénierie pour valider vos conceptions avant la production.",
    },
    seoTitle: { en: 'Prototype CNC Machining | Burnaby, BC | Apex Technologies', fr: 'Usinage CNC de prototypes | Burnaby, C.-B. | Apex Technologies' },
    seoDescription: {
      en: 'Prototype CNC machining in Burnaby, BC for engineers and product teams. Machined from real production materials so you can test form, fit and function. Request a quote.',
      fr: "Usinage CNC de prototypes à Burnaby (C.-B.) pour ingénieurs et équipes produit. Usiné dans de vrais matériaux de production pour tester forme, ajustement et fonction.",
    },
    h1: { en: 'Prototype CNC Machining for Engineers and Product Teams', fr: 'Usinage CNC de prototypes pour ingénieurs et équipes produit' },
    intro: {
      en: [
        'A prototype only answers your questions if it behaves like the final part. Machining prototypes from real engineering materials lets you test fit, function and assembly with parts that reflect production reality.',
        'Apex supports prototype and development work alongside production. Because the same shop can later run the repeat order, design decisions made at the prototype stage carry straight into manufacturing.',
      ],
      fr: [
        "Un prototype ne répond à vos questions que s'il se comporte comme la pièce finale. Usiner des prototypes dans de vrais matériaux d'ingénierie permet de tester ajustement, fonction et assemblage avec des pièces représentatives.",
        "Apex soutient le développement de prototypes en parallèle de la production. Comme le même atelier peut ensuite réaliser la commande récurrente, les décisions du stade prototype se transposent directement en fabrication.",
      ],
    },
    capabilities: {
      en: ['Single pieces and small quantities', 'Machined from production-intent materials', 'Design-for-manufacturing feedback', 'Iterations as designs evolve', 'Milling, turning and multi-axis options', 'A direct route to production runs'],
      fr: ['Pièces uniques et petites quantités', 'Usinées dans des matériaux représentatifs de la production', 'Rétroaction sur la fabricabilité', 'Itérations au fil de l’évolution du design', 'Options de fraisage, tournage et multi-axes', 'Passage direct aux séries de production'],
    },
    applications: {
      en: ['Form, fit and function testing', 'Pre-production validation builds', 'Custom equipment and one-off development', 'Replacement parts with no drawing history'],
      fr: ['Essais de forme, ajustement et fonction', 'Séries de validation préproduction', 'Équipements sur mesure et développements uniques', 'Pièces de remplacement sans historique de plan'],
    },
    advantages: {
      en: [
        { title: 'Real materials', text: 'Testing in the intended material avoids surprises that appear only after switching from a substitute.' },
        { title: 'DFM input early', text: 'Feedback on radii, wall thickness and tolerances at the prototype stage prevents redesign later.' },
        { title: 'No hand-off at scale-up', text: 'The shop that machined the prototype understands the part when volume arrives.' },
      ],
      fr: [
        { title: 'Matériaux réels', text: "Tester dans le matériau prévu évite les surprises apparaissant seulement après un changement de substitut." },
        { title: 'Avis DFM dès le début', text: "Des commentaires sur rayons, épaisseurs de paroi et tolérances au stade prototype évitent des refontes." },
        { title: 'Aucun transfert à la montée en volume', text: "L'atelier qui a usiné le prototype connaît la pièce quand le volume arrive." },
      ],
    },
    process: {
      en: [
        { title: 'Share the design', text: 'Send CAD and drawing files with material and quantity.' },
        { title: 'DFM feedback', text: 'We flag features that will drive cost or risk.' },
        { title: 'Machine the prototype', text: 'Parts are machined and inspected against your requirements.' },
        { title: 'Iterate or scale', text: 'Revise the design or move to a production quote.' },
      ],
      fr: [
        { title: 'Partagez la conception', text: 'Envoyez fichiers CAO et plans avec matériau et quantité.' },
        { title: 'Rétroaction DFM', text: 'Nous signalons les caractéristiques qui influenceront coût ou risque.' },
        { title: 'Usinage du prototype', text: 'Les pièces sont usinées et inspectées selon vos exigences.' },
        { title: 'Itérer ou passer à l’échelle', text: 'Révisez la conception ou passez à une soumission de production.' },
      ],
    },
    faq: {
      en: [
        { q: 'Can Apex machine a single prototype?', a: 'Yes. Prototype and low-quantity work is part of the offer. Describe the quantity in the RFQ form and we will confirm feasibility and lead time.' },
        { q: 'Will prototype machining reflect production quality?', a: 'Prototypes are machined on the same class of CNC equipment used for production, which is why they are useful for validating fit and function.' },
        { q: 'Can the prototype become a production part?', a: 'That is the intended path. Once the design is proven, the same drawing can be quoted for production quantities.' },
      ],
      fr: [
        { q: 'Apex peut-il usiner un seul prototype ?', a: "Oui. Les prototypes et petites quantités font partie de l'offre. Indiquez la quantité dans le formulaire et nous confirmerons faisabilité et délai." },
        { q: 'Un prototype usiné reflète-t-il la qualité de production ?', a: "Les prototypes sont usinés sur la même catégorie d'équipements CNC que la production, ce qui les rend utiles pour valider ajustement et fonction." },
        { q: 'Le prototype peut-il devenir une pièce de production ?', a: "C'est la voie prévue. Une fois la conception validée, le même plan peut être soumissionné pour des quantités de production." },
      ],
    },
    industries: ['telecommunications-instruments', 'medical-pharmaceutical', 'industrial-machinery', 'firefighting'],
    materials: ['aluminum', 'polymers-plastics', 'stainless-steel', 'brass'],
    related: ['production-machining', 'cnc-milling', 'custom-precision-parts'],
    ctaLabel: { en: 'Quote My Prototype', fr: 'Soumission pour mon prototype' },
  },
  {
    id: 'production-machining',
    name: { en: 'Production CNC Machining', fr: 'Usinage CNC de production' },
    short: {
      en: 'Repeatable, documented CNC production for buyers who need consistent parts on schedule.',
      fr: "Production CNC répétable et documentée pour les acheteurs qui exigent des pièces constantes dans les délais.",
    },
    seoTitle: { en: 'Production CNC Machining | Burnaby, BC | Apex Technologies', fr: 'Usinage CNC de production | Burnaby, C.-B. | Apex Technologies' },
    seoDescription: {
      en: 'Production CNC machining from Burnaby, BC. Repeat orders, planned releases and documented processes for industrial buyers in Canada and the USA.',
      fr: "Usinage CNC de production à Burnaby (C.-B.). Commandes récurrentes, livraisons planifiées et procédés documentés pour acheteurs industriels du Canada et des États-Unis.",
    },
    h1: { en: 'Production CNC Machining for Repeatable Supply', fr: 'Usinage CNC de production pour un approvisionnement répétable' },
    intro: {
      en: [
        'For procurement and operations teams, production machining is about predictability: the fiftieth lot should match the first, arrive when promised, and come with the paperwork your quality system expects.',
        'Apex has manufactured more than seven million parts since 1997. That history of repeat work informs how we plan production: stable programs, controlled revisions and clear communication about lead time.',
      ],
      fr: [
        "Pour les équipes d'approvisionnement et d'exploitation, l'usinage de production repose sur la prévisibilité : le cinquantième lot doit ressembler au premier, arriver à la date promise et être accompagné de la documentation exigée par votre système qualité.",
        "Apex a fabriqué plus de sept millions de pièces depuis 1997. Cet historique de travail récurrent guide notre planification : programmes stables, révisions contrôlées et communication claire sur les délais.",
      ],
    },
    capabilities: {
      en: ['Repeat and recurring orders', 'Stable, documented CNC programs', 'Revision control tied to your drawings', 'Inspection planned around critical features', 'ERP-supported job tracking and traceability', 'Coordination of secondary processes with partners'],
      fr: ['Commandes répétées et récurrentes', 'Programmes CNC stables et documentés', 'Contrôle des révisions lié à vos plans', 'Inspection planifiée autour des caractéristiques critiques', 'Suivi des travaux et traçabilité appuyés par ERP', 'Coordination des procédés secondaires avec des partenaires'],
    },
    applications: {
      en: ['Recurring OEM component supply', 'Maintenance and replacement part programs', 'Assembly-ready components', 'Ongoing supply for industrial equipment builders'],
      fr: ["Approvisionnement récurrent de composants OEM", 'Programmes de pièces de maintenance et de remplacement', 'Composants prêts à assembler', "Approvisionnement continu pour fabricants d'équipement industriel"],
    },
    advantages: {
      en: [
        { title: 'Consistency across lots', text: 'Documented programs and revision control support the same result on every release.' },
        { title: 'Planning with you', text: 'Forecasts and release schedules help align machine time to your demand.' },
        { title: 'Single accountable supplier', text: 'Apex coordinates machining and, where required, partner finishing so you deal with one point of contact.' },
      ],
      fr: [
        { title: 'Constance entre les lots', text: "Programmes documentés et contrôle des révisions soutiennent un résultat identique à chaque livraison." },
        { title: 'Planification avec vous', text: "Prévisions et calendriers de livraison alignent le temps machine sur votre demande." },
        { title: 'Un seul fournisseur responsable', text: "Apex coordonne l'usinage et, au besoin, la finition chez des partenaires : vous avez un seul interlocuteur." },
      ],
    },
    process: {
      en: [
        { title: 'Production review', text: 'Drawing, quantities and release schedule are reviewed together.' },
        { title: 'Process lock', text: 'Programs, tooling and inspection plan are set and documented.' },
        { title: 'Production run', text: 'Parts are machined and tracked through the job.' },
        { title: 'Final inspection & shipping', text: 'Parts are verified and shipped, with records retained.' },
      ],
      fr: [
        { title: 'Revue de production', text: 'Plan, quantités et calendrier de livraison sont examinés ensemble.' },
        { title: 'Figer le procédé', text: "Programmes, outillage et plan d'inspection sont établis et documentés." },
        { title: 'Série de production', text: 'Les pièces sont usinées et suivies tout au long du travail.' },
        { title: 'Inspection finale et expédition', text: 'Les pièces sont vérifiées et expédiées, les registres conservés.' },
      ],
    },
    faq: {
      en: [
        { q: 'Does Apex handle recurring production orders?', a: 'Yes. Recurring supply is central to the business, backed by 7M+ parts manufactured since 1997.' },
        { q: 'Can Apex provide traceability and inspection records?', a: 'Apex uses ERP-supported processes and inspection, including CMM quality control. Documentation requirements can be discussed during quoting.' },
        { q: 'What information do you need for a production quote?', a: 'Drawings, material, annual or per-release quantities, and any special requirements such as finishing or certifications.' },
      ],
      fr: [
        { q: 'Apex gère-t-il les commandes de production récurrentes ?', a: "Oui. L'approvisionnement récurrent est au cœur de l'entreprise, avec plus de 7 M de pièces fabriquées depuis 1997." },
        { q: "Apex peut-il fournir traçabilité et registres d'inspection ?", a: "Apex utilise des processus appuyés par ERP et l'inspection, dont le contrôle qualité par MMT. Les exigences documentaires se discutent lors de la soumission." },
        { q: "Quelles informations faut-il pour une soumission de production ?", a: "Plans, matériau, quantités annuelles ou par livraison et exigences particulières comme la finition ou les certifications." },
      ],
    },
    industries: ['industrial-machinery', 'oil-gas', 'construction', 'logistics-warehousing'],
    materials: ['carbon-steel', 'aluminum', 'stainless-steel', 'alloy-steel'],
    related: ['prototype-machining', 'cnc-turning', 'cnc-machining'],
    ctaLabel: { en: 'Need Production Capacity?', fr: 'Besoin de capacité de production ?' },
  },
  {
    id: 'custom-precision-parts',
    name: { en: 'Custom Precision Parts', fr: 'Pièces de précision sur mesure' },
    short: {
      en: 'Custom machined parts built to your drawing, from one-off components to ongoing supply.',
      fr: "Pièces usinées sur mesure selon votre plan, du composant unique à l'approvisionnement continu.",
    },
    seoTitle: { en: 'Custom Machined Parts Manufacturer | Apex Technologies', fr: "Fabricant de pièces usinées sur mesure | Apex Technologies" },
    seoDescription: {
      en: 'Custom precision parts manufacturer in Burnaby, BC. Machined to your drawing in metals and plastics for industrial customers across Canada and the USA.',
      fr: "Fabricant de pièces de précision sur mesure à Burnaby (C.-B.). Usinées selon votre plan en métaux et plastiques pour clients industriels du Canada et des États-Unis.",
    },
    h1: { en: 'Custom Precision Parts Manufacturer', fr: 'Fabricant de pièces de précision sur mesure' },
    intro: {
      en: [
        'Catalogue parts rarely fit specialized equipment. When a component has to match your design, your interface and your material, you need a precision parts manufacturer that starts from your drawing rather than from a standard range.',
        'Apex manufactures custom machined parts for industrial customers, choosing between milling, turning and multi-axis routes based on what the geometry requires — not on what is easiest for the shop.',
      ],
      fr: [
        "Les pièces de catalogue conviennent rarement aux équipements spécialisés. Quand un composant doit respecter votre conception, votre interface et votre matériau, il faut un fabricant qui part de votre plan plutôt que d'une gamme standard.",
        "Apex fabrique des pièces usinées sur mesure pour des clients industriels, en choisissant entre fraisage, tournage et multi-axes selon ce que la géométrie exige — et non ce qui est le plus simple pour l'atelier.",
      ],
    },
    capabilities: {
      en: ['Built to your drawing or 3D model', 'Process route chosen per part', 'Wide range of metals and plastics', 'Complementary finishing via partners', 'Single pieces to recurring supply'],
      fr: ['Fabriquées selon votre plan ou modèle 3D', 'Gamme choisie pièce par pièce', 'Vaste choix de métaux et de plastiques', 'Finitions complémentaires via des partenaires', "Pièces uniques à approvisionnement récurrent"],
    },
    applications: {
      en: ['Specialized equipment components', 'Obsolete or hard-to-source parts', 'Interface parts that must match existing assemblies', 'Custom fixtures and tooling'],
      fr: ['Composants pour équipements spécialisés', 'Pièces obsolètes ou difficiles à trouver', "Pièces d'interface devant correspondre à des assemblages existants", 'Gabarits et outillage sur mesure'],
    },
    advantages: {
      en: [
        { title: 'Drawing-first approach', text: 'Your requirements set the process, material and inspection plan.' },
        { title: 'Straight answers on feasibility', text: 'If a feature is risky or costly, we tell you before quoting.' },
        { title: 'Support beyond machining', text: 'Anodizing, plating, heat treating and other finishing can be coordinated through established partners.' },
      ],
      fr: [
        { title: 'Approche centrée sur le plan', text: "Vos exigences déterminent le procédé, le matériau et le plan d'inspection." },
        { title: 'Réponses franches sur la faisabilité', text: "Si une caractéristique est risquée ou coûteuse, nous vous le disons avant la soumission." },
        { title: "Soutien au-delà de l'usinage", text: "Anodisation, placage, traitement thermique et autres finitions peuvent être coordonnés par des partenaires établis." },
      ],
    },
    process: {
      en: [
        { title: 'Requirements capture', text: 'Drawing, material, quantity and function are confirmed.' },
        { title: 'Route planning', text: 'Milling, turning or multi-axis is selected for the part.' },
        { title: 'Manufacture', text: 'Parts are machined and finished, with partner processes coordinated.' },
        { title: 'Inspection & delivery', text: 'Parts are inspected and shipped to your site.' },
      ],
      fr: [
        { title: 'Saisie des exigences', text: 'Plan, matériau, quantité et fonction sont confirmés.' },
        { title: 'Planification de la gamme', text: 'Fraisage, tournage ou multi-axes est choisi selon la pièce.' },
        { title: 'Fabrication', text: 'Les pièces sont usinées et finies, les procédés partenaires étant coordonnés.' },
        { title: 'Inspection et livraison', text: 'Les pièces sont inspectées et expédiées chez vous.' },
      ],
    },
    faq: {
      en: [
        { q: 'Can you make a part if I only have a sample?', a: 'Contact us to discuss it. Depending on the part, a sample can be measured to support a drawing, and we will tell you what is realistic.' },
        { q: 'Do you handle finishing like anodizing or plating?', a: 'Finishing is available through established subcontracting partners where appropriate and is coordinated by Apex. See Complementary Services.' },
        { q: 'What is the minimum order quantity?', a: 'Apex quotes single prototypes through production quantities. Tell us your quantity in the RFQ.' },
      ],
      fr: [
        { q: "Pouvez-vous fabriquer une pièce si je n'ai qu'un échantillon ?", a: "Contactez-nous. Selon la pièce, un échantillon peut être mesuré pour établir un plan et nous vous dirons ce qui est réaliste." },
        { q: "Offrez-vous des finitions comme l'anodisation ou le placage ?", a: "Les finitions sont offertes par des partenaires sous-traitants établis, au besoin, et coordonnées par Apex. Voir Services complémentaires." },
        { q: 'Quelle est la quantité minimale de commande ?', a: "Apex soumissionne des prototypes uniques jusqu'à des quantités de production. Indiquez votre quantité dans le formulaire." },
      ],
    },
    industries: ['oil-gas', 'mining', 'construction', 'firefighting'],
    materials: ['stainless-steel', 'aluminum', 'bronze', 'copper'],
    related: ['prototype-machining', 'production-machining', 'multi-axis-machining'],
    ctaLabel: { en: 'Need a Precision Part?', fr: 'Besoin d’une pièce de précision ?' },
  },
];

export const getService = (id: ServiceId) => {
  const s = SERVICES.find((x) => x.id === id);
  if (!s) throw new Error(`Unknown service ${id}`);
  return s;
};
