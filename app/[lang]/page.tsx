'use client';

import { Container } from '@/components/Container';
import { LinkCard } from '@/components/LinkCard';
import { Trans } from '@lingui/react/macro';

export default function Home() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <Container>
        <h1>
          <Trans>This is an example translate for testing crowdin</Trans>
        </h1>

        <LinkCard href="/server-example">
          <Trans>Server Example</Trans>
        </LinkCard>

        <LinkCard href="/client-example">
          <Trans>Client Example</Trans>
        </LinkCard>

        <LinkCard href="/icu-example">
          <Trans>ICU Examples</Trans>
        </LinkCard>
      </Container>
    </div>
  );
}
