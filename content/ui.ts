import type { Lang } from '@/lib/i18n';
import { en, type Dict } from './ui-en';
import { fr } from './ui-fr';

const dicts: Record<Lang, Dict> = { en, fr };
export const getDict = (lang: Lang): Dict => dicts[lang];
export type { Dict };
