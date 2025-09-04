import { Trans } from '@lingui/react/macro';
import { Container } from './Container';

export const ServerExamplePage = () => (
  <Container showHomeButton>
    <h1 className="text-xl font-semibold tracking-tight text-gray-800 sm:text-2xl">
      <Trans>Server side translated title</Trans>
    </h1>

    <p className="mb-4 text-sm text-gray-600">
      <Trans
        id="server.description"
        context="heading"
        comment="main heading of page" // context and comment for translators in crowdin
      >
        Lingui + Next.js RSC example
      </Trans>
    </p>

    <div className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/60 px-3 py-1 text-xs text-gray-600">
      <span className="size-1.5 rounded-full bg-emerald-400"></span>

      <Trans>Server rendered</Trans>
    </div>
  </Container>
);
