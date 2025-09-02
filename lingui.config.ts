import { formatter } from '@lingui/format-json';
import type { LinguiConfig } from '@lingui/conf';

const config: LinguiConfig = {
  locales: ['en', 'tr', 'de'],
  sourceLocale: 'en',
  format: formatter({ style: 'minimal' }), // generate json instead of po
  fallbackLocales: {
    default: 'en',
  },
  catalogs: [
    {
      path: 'locales/{locale}/messages',
      include: ['app/', 'components'],
      exclude: ['**/node_modules/**', '.next/**'],
    },
  ],
};

export default config;
