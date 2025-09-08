'use client';

import { Container } from '@/components/Container';
import { LinkCard } from '@/components/LinkCard';
import { Trans } from '@lingui/react/macro';

export default function Home() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <Container>
        <LinkCard href="/server-example">
          <Trans>Server Example</Trans>
        </LinkCard>

        <LinkCard href="/client-example">
          <Trans>Client Example</Trans>
        </LinkCard>

        <LinkCard href="/icu-example">
          <Trans>ICU Example</Trans>
        </LinkCard>

        <LinkCard href="/action-example">
          <Trans>Action Example</Trans>
        </LinkCard>

        <LinkCard href="/api-example">
          <Trans>API Example</Trans>
        </LinkCard>
      </Container>
    </div>
  );
}
