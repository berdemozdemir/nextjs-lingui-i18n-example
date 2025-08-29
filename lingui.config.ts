import type { LinguiConfig } from '@lingui/conf';

const config: LinguiConfig = {
  locales: ['en', 'tr', 'de'],
  sourceLocale: 'en',
  fallbackLocales: {
    default: 'en',
  },
  catalogs: [
    {
      path: 'locales/{locale}',
      include: ['app/', 'components'],
    },
  ],
};

export default config;
