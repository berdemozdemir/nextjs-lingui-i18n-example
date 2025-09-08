'use client';

import { Container } from '@/components/Container';
import { exampleAction } from '@/lib/action';
import { Trans } from '@lingui/react/macro';
import { useState } from 'react';

export default function HelloDemo() {
  const [msg, setMsg] = useState('');

  const [isHidden, setIsHidden] = useState(false);

  return (
    <Container showHomeButton>
      <div className="min-w-xs">
        {!isHidden && (
          <button
            className="cursor-pointer hover:underline"
            onClick={async () => {
              setIsHidden(true);
              setMsg(await exampleAction());
            }}
          >
            <Trans>Load Message</Trans>
          </button>
        )}

        <p>{msg}</p>
      </div>
    </Container>
  );
}
