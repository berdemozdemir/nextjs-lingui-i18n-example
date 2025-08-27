export const Locales = {
  tr: { code: 'tr', nativeName: 'Türkçe', flag: '🇹🇷' },
  en: { code: 'en', nativeName: 'English', flag: '🌎' },
};

export type AvailableLocale = keyof typeof Locales;

export function getAvailableLocales() {
  return Object.values(Locales).map(
    ({ code, nativeName, flag }) =>
      ({
        code,
        nativeName,
        flag,
      }) as const,
  );
}

export const DEFAULT_LANGUAGE = Locales.en;

export const LOCALE_COOKIE = 'locale';
