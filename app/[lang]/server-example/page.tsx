import { ServerExamplePage } from '@/components/ServerExamplePage';
import { TranslatedPage } from '@/components/TranslatedPage';
import { AvailableLocale } from '@/lib/common';
import { use } from 'react';

export default function Page({
  params,
}: {
  params: Promise<{ lang: AvailableLocale }>;
}) {
  const { lang } = use(params);

  return (
    <TranslatedPage lang={lang}>
      <ServerExamplePage />
    </TranslatedPage>
  );
}
