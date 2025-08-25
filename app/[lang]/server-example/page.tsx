import { initLingui } from '@/lib/initLingui';
import { Trans } from '@lingui/react/macro';
import { setI18n } from '@lingui/react/server';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Page({ params }: { params: { lang: string } }) {
  const i18nInstance = initLingui(params.lang);

  setI18n(i18nInstance);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="rounded-2xl border border-white/60 bg-white/70 shadow-lg">
        <div className="px-6 py-5 sm:px-8 sm:py-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/60 px-3 py-1 text-xs text-gray-600">
            <span className="size-1.5 rounded-full bg-emerald-400"></span>
            {i18nInstance._('Server rendered')}
          </div>

          <h1 className="mt-3 text-xl font-semibold tracking-tight text-gray-800 sm:text-2xl">
            <Trans
              id="home.title"
              context="heading"
              comment="main heading of page"
            >
              Server side translated title
            </Trans>
          </h1>

          <p className="mt-2 text-sm text-gray-600">
            {i18nInstance._('Lingui + Next.js RSC örneği')}
          </p>

          <div className="mt-4 flex items-center gap-3">
            <Link
              href="/server-example"
              className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-white transition hover:opacity-90"
            >
              {i18nInstance._('Other Pages')}

              <ArrowRight className="size-4" />
            </Link>

            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-lg border border-black/10 bg-white/70 px-4 py-2 text-gray-800 transition hover:bg-white"
            >
              {i18nInstance._({
                id: 'home.button',
                message: 'Home Page',
                comment: 'a button of Home Page',
              })}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
