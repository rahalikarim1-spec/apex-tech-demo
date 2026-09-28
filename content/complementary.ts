import type { L } from '@/lib/i18n';

export type ComplementaryService = { id: string; name: L<string>; text: L<string> };

/** These processes are delivered through established subcontracting partners where appropriate. */
export const COMPLEMENTARY_SERVICES: ComplementaryService[] = [
  { id: 'anodizing', name: { en: 'Anodizing', fr: 'Anodisation' }, text: { en: 'Protective and decorative oxide layer for aluminum parts.', fr: "Couche d'oxyde protectrice et décorative pour pièces d'aluminium." } },
  { id: 'passivation', name: { en: 'Passivation', fr: 'Passivation' }, text: { en: 'Surface treatment that supports corrosion resistance of stainless steel.', fr: "Traitement de surface qui soutient la résistance à la corrosion de l'inoxydable." } },
  { id: 'glass-beading', name: { en: 'Glass Beading', fr: 'Microbillage de verre' }, text: { en: 'Uniform matte surface finish using glass media.', fr: 'Finition de surface mate uniforme au moyen de billes de verre.' } },
  { id: 'heat-treating', name: { en: 'Heat Treating', fr: 'Traitement thermique' }, text: { en: 'Thermal processing to change hardness and mechanical properties.', fr: 'Traitement thermique pour modifier dureté et propriétés mécaniques.' } },
  { id: 'sand-blasting', name: { en: 'Sand Blasting', fr: 'Sablage' }, text: { en: 'Abrasive blasting for cleaning and texture.', fr: 'Projection abrasive pour nettoyage et texture.' } },
  { id: 'laser-etching', name: { en: 'Laser Etching', fr: 'Gravure laser' }, text: { en: 'Permanent marking such as part numbers and logos.', fr: 'Marquage permanent, comme numéros de pièce et logos.' } },
  { id: 'welding', name: { en: 'Welding', fr: 'Soudage' }, text: { en: 'Joining of machined components and fabrications.', fr: "Assemblage de composants usinés et d'ensembles soudés." } },
  { id: 'electro-plating', name: { en: 'Electro-Plating', fr: 'Électrodéposition' }, text: { en: 'Metallic coatings for corrosion resistance, wear or conductivity.', fr: 'Revêtements métalliques pour résistance à la corrosion, usure ou conductivité.' } },
  { id: 'electro-polishing', name: { en: 'Electro-Polishing', fr: 'Électropolissage' }, text: { en: 'Electrochemical smoothing of metal surfaces.', fr: 'Lissage électrochimique des surfaces métalliques.' } },
  { id: 'chromate-conversion', name: { en: 'Chromate Conversion Coating', fr: 'Conversion au chromate' }, text: { en: 'Conversion coating for corrosion protection and paint adhesion.', fr: 'Revêtement de conversion pour protection contre la corrosion et adhérence de la peinture.' } },
];
