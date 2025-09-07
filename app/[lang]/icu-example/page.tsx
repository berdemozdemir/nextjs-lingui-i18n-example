'use client';

import { Container } from '@/components/Container';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Plural,
  Select,
  SelectOrdinal,
  Trans,
  useLingui,
} from '@lingui/react/macro';
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

export default function ClientExamplePage() {
  const { i18n } = useLingui();

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

      <div className="flex items-center gap-2">
        <p className="w-32">
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
        <p className="w-32">
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
        <div className="w-30">
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

      <hr className="my-4" />

      <div>
        <li>{i18n.number(12345.678)}</li>

        <li>
          {i18n.number(12345.678, { style: 'currency', currency: 'USD' })}
        </li>

        <li>
          {i18n.number(0.75, { style: 'percent' })} {/* %75 */}
        </li>

        <li>
          {i18n.number(123456789, { notation: 'compact' })} {/* 123M */}
        </li>

        <li>
          {i18n.number(1234.56, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}{' '}
        </li>

        <li>{i18n.date(new Date(), { dateStyle: 'short' })}</li>

        <li>{i18n.date(new Date(), { dateStyle: 'long' })}</li>

        <li>{i18n.date(new Date(), { timeStyle: 'short' })}</li>

        <li>
          {i18n.date(new Date(), { dateStyle: 'full', timeStyle: 'long' })}
        </li>
      </div>

      <hr className="my-4" />

      <p className="text-sm text-gray-500">
        <Trans>
          Translations can be used with dynamic values, as shown in the examples
          below:
        </Trans>
      </p>

      <div className="flex items-center gap-2">
        <ArrowRight className="mx-2" />

        <Trans>You&apos;ve selected the value {count}</Trans>
      </div>

      <div className="flex items-center gap-2">
        <ArrowRight className="mx-2" />

        <Trans>You&apos;ve ranked as {rank}</Trans>
      </div>
    </Container>
  );
}
