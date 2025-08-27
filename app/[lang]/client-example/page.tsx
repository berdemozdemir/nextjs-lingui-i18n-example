'use client';

import { Container } from '@/components/Container';
import { Trans } from '@lingui/react/macro';

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Container showHomeButton>
        <h1 className="text-xl font-semibold tracking-tight text-gray-800 sm:text-2xl">
          <Trans
            id="client.title"
            context="heading"
            comment="main heading of page"
          >
            Client side translated title
          </Trans>
        </h1>

        <p className="mb-4 text-sm text-gray-600">
          <Trans
            id="example.description"
            context="heading"
            comment="main heading of page"
          >
            Lingui + Next.js RSC example
          </Trans>
        </p>

        <div className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/60 px-3 py-1 text-xs text-gray-600">
          <span className="size-1.5 rounded-full bg-emerald-400"></span>
          <Trans
            id="client.subtitle"
            context="heading"
            comment="main subtitle of page"
          >
            Client rendered
          </Trans>
        </div>
      </Container>
    </div>
  );
}
