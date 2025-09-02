'use client';

import { Container } from '@/components/Container';
import { LinkCard } from '@/components/LinkCard';
import { Trans } from '@lingui/react/macro';

export default function Home() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <Container>
        <LinkCard href="/server-example">
          <Trans id="navigator.server">Server Example</Trans>
        </LinkCard>

        <LinkCard href="/client-example">
          <Trans id="navigator.client">Client Example</Trans>
        </LinkCard>

        <LinkCard href="/icu-example">
          <Trans id="navigator.icu">ICU Examples</Trans>
        </LinkCard>
      </Container>
    </div>
  );
}
