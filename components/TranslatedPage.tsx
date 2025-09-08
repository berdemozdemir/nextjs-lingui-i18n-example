import { getI18nInstance } from '@/lib/i18n';
import { setI18n } from '@lingui/react/server';
import { cookies, headers } from 'next/headers';
import { ReactNode } from 'react';

type TranslatedPageProps = {
  children: ReactNode;
};

export const TranslatedPage = async ({ children }: TranslatedPageProps) => {
  const allHeaders = await headers();
  const c = await cookies();

  const cookieLang = c.get('lang')?.value;
  const headerLang = allHeaders.get('x-locale');

  const lang = headerLang || cookieLang || 'en';

  const i18n = getI18nInstance(lang);

  setI18n(i18n);

  return <>{children}</>;
};
