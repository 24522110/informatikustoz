import { uzLatn } from './uz-Latn';
import { uzCyrl } from './uz-Cyrl';
import { ru } from './ru';
import { en } from './en';
import { SupportedLocale } from '../types';

export const locales: Record<SupportedLocale, typeof uzLatn> = {
  'uz-Latn': uzLatn,
  'uz-Cyrl': uzCyrl,
  'ru': ru,
  'en': en
};

export const localeNames: Record<SupportedLocale, { label: string; flag: string }> = {
  'uz-Latn': { label: "O‘zbekcha", flag: "🇺🇿" },
  'uz-Cyrl': { label: "Ўзбекча", flag: "🇺🇿" },
  'ru': { label: "Русский", flag: "🇷🇺" },
  'en': { label: "English", flag: "🇬🇧" }
};
