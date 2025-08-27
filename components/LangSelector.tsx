'use client';

import { useMemo, useTransition } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { LucideLoader2 } from 'lucide-react';
import {
  AvailableLocale,
  getAvailableLocales,
  LOCALE_COOKIE,
} from '@/lib/common';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import cookies from 'js-cookie';

function replaceLangInPath(pathname: string, nextLang: string) {
  const parts = pathname.split('/');

  parts[1] = nextLang;

  return parts.join('/') || `/${nextLang}`;
}

export function LanguageSelector({
  currentLang,
}: {
  currentLang: AvailableLocale;
}) {
  const router = useRouter();

  const pathname = usePathname();

  const [isTransitioning, startTransition] = useTransition();

  const languages = useMemo(() => getAvailableLocales(), []);

  const active = useMemo(
    () => languages.find((l) => l.code === currentLang),
    [languages, currentLang],
  );

  const selectLanguage = (lng: AvailableLocale) => {
    cookies.set(LOCALE_COOKIE, lng, {
      path: '/',
      sameSite: 'lax',
      expires: 365,
    });

    const nextPath = replaceLangInPath(pathname ?? '/', lng);
    startTransition(() => {
      router.replace(nextPath);
      router.refresh();
    });
  };

  return (
    <Select
      defaultValue={active?.code}
      onValueChange={(v) => selectLanguage(v as AvailableLocale)}
    >
      <SelectTrigger
        className="absolute top-6 right-6 w-fit gap-3"
        disabled={isTransitioning}
      >
        <SelectValue />
        {isTransitioning && (
          <LucideLoader2
            className="mx-3 shrink-0 animate-spin text-white"
            size="24"
          />
        )}
      </SelectTrigger>

      <SelectContent>
        {languages.map((lng) => (
          <SelectItem value={lng.code} key={lng.code}>
            <div className="flex gap-1">
              <span>{lng.flag}</span>

              <span>{lng.nativeName}</span>

              <span className="font-mono text-xs text-gray-500">
                ({lng.code})
              </span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
