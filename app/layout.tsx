import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lingui POC",
  description: "Proof of concept for Lingui with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
