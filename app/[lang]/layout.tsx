import type { Metadata } from 'next';
import '../globals.css';
import { LinguiClientProvider } from '@/components/LinguiClientProvider';
import { allMessages } from '@/lib/i18n';
import { LanguageSelector } from '@/components/LangSelector';
import { ReactNode, use } from 'react';
import { AvailableLocale } from '@/lib/common';

export const metadata: Metadata = {
  title: 'Lingui POC',
  icons: { icon: '/lingui-logo.svg' },
};

type Props = {
  params: Promise<{
    lang: string;
  }>;
  children: ReactNode;
};

export default function RootLayout({ children, params }: Props) {
  const { lang } = use(params);

  return (
    <html lang={lang}>
      <body className="h-screen w-full bg-gradient-to-b from-purple-50 to-pink-50">
        <div className="relative mx-auto max-w-6xl">
          <LinguiClientProvider
            initialLocale={lang}
            initialMessages={allMessages[lang]!}
          >
            <LanguageSelector currentLang={lang as AvailableLocale} />

            {children}
          </LinguiClientProvider>
        </div>
      </body>
    </html>
  );
}
