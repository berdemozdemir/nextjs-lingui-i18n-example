'use client';

import { Container } from '@/components/Container';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Plural, Select, SelectOrdinal, Trans } from '@lingui/react/macro';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

export default function ClientExamplePage() {
  const [count, setCount] = useState(0);

  const [rank, setRank] = useState(0);

  const [gender, setGender] = useState<'male' | 'female' | 'other'>('other');

  return (
    <Container showHomeButton>
      <h1 className="mb-3 text-2xl font-bold">
        <Trans>The ICU Format</Trans>
      </h1>

      <p className="mb-3">
        <Trans>
          The ICU <strong>(International Components for Unicode)</strong> format
          is a way of handling different linguistic and cultural needs for a
          given localization.
        </Trans>
      </p>

      <p className="mb-3">
        <Trans>
          Across different cultures, things like count of objects, numbers (i.e.
          money), gender, and dates can cause a sentence structure to change in
          a unique way to that language.
        </Trans>
      </p>

      <p>
        <Trans>
          Additionally, you may have a dynamic value used in your localization,
          which would need to be handled differently based on different
          languages&apos; grammar, etc.
        </Trans>
      </p>

      <hr className="my-4" />

      <h2 className="mb-3 text-xl font-bold">
        <Trans>Count Examples</Trans>
      </h2>

      <div className="flex items-center gap-2">
        <p className="w-26">
          <Plural value={count} _0="No items" _1="# item" other="# items" />
        </p>

        <ChevronDown
          className="h-fit cursor-pointer rounded border-2 p-1"
          onClick={() => setCount(Math.max(0, count - 1))}
        />

        <ChevronUp
          className="h-fit cursor-pointer rounded border-2 p-1"
          onClick={() => setCount(count + 1)}
        />
      </div>

      <div className="flex items-center gap-2">
        <p className="w-26">
          <SelectOrdinal
            value={rank}
            _0="No rank"
            one="#st"
            two="#nd"
            few="#rd"
            other="#th"
          />
        </p>

        <ChevronDown
          className="h-fit cursor-pointer rounded border-2 p-1"
          onClick={() => setRank(Math.max(0, rank - 1))}
        />

        <ChevronUp
          className="h-fit cursor-pointer rounded border-2 p-1"
          onClick={() => setRank(rank + 1)}
        />
      </div>

      <div className="flex items-center gap-4">
        <div className="w-24">
          <Select
            value={gender}
            _male="He replied"
            _female="She replied"
            other="They replied"
          />
        </div>

        <RadioGroup
          value={gender}
          onValueChange={(v) => setGender(v as 'male' | 'female' | 'other')}
          className="flex items-center gap-4"
        >
          <div className="flex items-center gap-2">
            <RadioGroupItem id="male" value="male" />
            <Label htmlFor="male">
              <Trans>male</Trans>
            </Label>
          </div>

          <div className="flex items-center gap-2">
            <RadioGroupItem id="female" value="female" />
            <Label htmlFor="female">
              <Trans>female</Trans>
            </Label>
          </div>

          <div className="flex items-center gap-2">
            <RadioGroupItem id="other" value="other" />
            <Label htmlFor="other">
              <Trans>other</Trans>
            </Label>
          </div>
        </RadioGroup>
      </div>
    </Container>
  );
}
