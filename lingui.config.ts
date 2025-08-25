import type { LinguiConfig } from "@lingui/conf";

const config: LinguiConfig = {
  locales: ["en", "ar", "pseudo"],
  pseudoLocale: "pseudo",
  sourceLocale: "en",
  fallbackLocales: {
    default: "en",
  },
  catalogs: [
    {
      path: "locales/{locale}",
      include: ["app/"],
    },
  ],
};

export default config;
