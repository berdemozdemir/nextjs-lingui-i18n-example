import { Container } from '@/components/Container';
import { AvailableLocale } from '@/lib/common';
import { initLingui } from '@/lib/initLingui';
import { Trans } from '@lingui/react/macro';
import { setI18n } from '@lingui/react/server';
import { use } from 'react';

export default function Page({
  params,
}: {
  params: Promise<{ lang: AvailableLocale }>;
}) {
  const { lang } = use(params);

  const i18nInstance = initLingui(lang);

  setI18n(i18nInstance);

  return (
    <Container showHomeButton>
      <h1 className="text-xl font-semibold tracking-tight text-gray-800 sm:text-2xl">
        <Trans
          id="server.title"
          context="heading"
          comment="main heading of server example page"
        >
          Server side translated title
        </Trans>
      </h1>

      <p className="mb-4 text-sm text-gray-600">
        <Trans
          id="server.example"
          context="example"
          comment=" example of server page"
        >
          Lingui + Next.js RSC example
        </Trans>
      </p>

      <div className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/60 px-3 py-1 text-xs text-gray-600">
        <span className="size-1.5 rounded-full bg-emerald-400"></span>

        <Trans id="server.rendered" comment="main subtitle of page">
          Server rendered
        </Trans>
      </div>
    </Container>
  );
}
