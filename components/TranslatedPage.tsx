import { initLingui } from '@/lib/initLingui';
import { setI18n } from '@lingui/react/server';
import { ReactNode } from 'react';

type TranslatedPageProps = {
  lang: string;
  children: ReactNode;
};

export const TranslatedPage = ({ lang, children }: TranslatedPageProps) => {
  const i18nInstance = initLingui(lang);

  setI18n(i18nInstance);

  return <>{children}</>;
};
