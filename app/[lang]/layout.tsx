import type { Metadata } from "next";
import "../globals.css";
import { initLingui } from "@/lib/initLingui";
import { LinguiClientProvider } from "@/components/LinguiClientProvider";
import { allMessages } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Lingui POC",
  description: "Proof of concept for Lingui with Next.js",
  icons: { icon: "/lingui-logo.svg" },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: "en" | "tr" }>;
}>) {
  const { lang } = await params;

  initLingui(lang);

  return (
    <html lang={lang}>
      <body className="h-screen w-full bg-gradient-to-b from-purple-50 to-pink-50">
        <LinguiClientProvider
          initialLocale={lang}
          initialMessages={allMessages[lang]!}
        >
          {children}
        </LinguiClientProvider>
      </body>
    </html>
  );
}
