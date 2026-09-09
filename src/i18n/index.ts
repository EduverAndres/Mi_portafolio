import { es } from './es';
import { en } from './en';
import type { Dict } from './types';

export type { Dict } from './types';

export const LANGUAGES = {
  es: { name: 'Español', htmlLang: 'es-CO', ogLocale: 'es_CO' },
  en: { name: 'English', htmlLang: 'en', ogLocale: 'en_US' },
} as const;

export type Lang = keyof typeof LANGUAGES;

export const DEFAULT_LANG: Lang = 'es';

const dictionaries: Record<Lang, Dict> = { es, en };

export function getDict(lang: Lang): Dict {
  return dictionaries[lang];
}

/** El español vive en `/`; el inglés, bajo `/en`. */
export function localizePath(path: string, lang: Lang): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (lang === DEFAULT_LANG) return clean;
  return clean === '/' ? '/en' : `/en${clean}`;
}

export function otherLang(lang: Lang): Lang {
  return lang === 'es' ? 'en' : 'es';
}
