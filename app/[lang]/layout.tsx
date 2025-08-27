import type { Metadata } from 'next';
import '../globals.css';
// import { initLingui } from '@/lib/initLingui';
import { LinguiClientProvider } from '@/components/LinguiClientProvider';
import { allMessages, getI18nInstance } from '@/lib/i18n';
import { LanguageSelector } from '@/components/LangSelector';
import { setI18n } from '@lingui/react/server';
import { ReactNode, use } from 'react';

export const metadata: Metadata = {
  title: 'Lingui POC',
  description: 'Proof of concept for Lingui with Next.js',
  icons: { icon: '/lingui-logo.svg' },
};

type Props = {
  params: Promise<{
    lang: string;
  }>;
  children: ReactNode;
};

export default function RootLayout({ children, params }: Props) {
  // initLingui(lang);

  const { lang } = use(params);

  const i18n = getI18nInstance(lang);

  setI18n(i18n);

  return (
    <html lang={lang}>
      <body className="h-screen w-full bg-gradient-to-b from-purple-50 to-pink-50">
        <div className="relative mx-auto max-w-6xl">
          <LinguiClientProvider
            initialLocale={lang}
            initialMessages={allMessages[lang]!}
          >
            <LanguageSelector currentLang="en" />

            {children}
          </LinguiClientProvider>
        </div>
      </body>
    </html>
  );
}
