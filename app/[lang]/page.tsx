'use client';

import { LinkCard } from '@/components/LinkCard';
import { Trans } from '@lingui/react/macro';

export default function Home() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div className="flex h-fit flex-col gap-4 rounded-2xl bg-white px-10 py-16 shadow-xl">
        <LinkCard href="/server-example">
          <Trans>Server Example</Trans>
        </LinkCard>

        <LinkCard href="/client-example">
          <Trans>Client Example</Trans>
        </LinkCard>

        <LinkCard href="/form-example">
          <Trans>Form Example</Trans>
        </LinkCard>

        <LinkCard href="/icu-examples">
          <Trans>ICU Examples</Trans>
        </LinkCard>
      </div>
    </div>
  );
}
