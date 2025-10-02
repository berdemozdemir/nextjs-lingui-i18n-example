# Next.js + Lingui i18n Example

A web application demonstrating internationalization (i18n) in Next.js using Lingui, with dynamic ICU message formatting, language switching, and both client/server translation examples.

- Dynamic ICU message formatting (plural, select, ordinal)
- Language selector for switching between locales
- Client-side and server-side translation examples
- Responsive and modern UI
- Easily extendable for new languages

## Tech Stack

- **Framework:** Next.js (React)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI, Lucide React, custom components
- **i18n:** Lingui

## Demo

You can visit the deployed app here: [https://nextjs-lingui-i18n-example.vercel.app/](https://nextjs-lingui-i18n-example.vercel.app/)

## Features

- ICU message formatting for pluralization, gender, and ordinal values
- Language selector for switching between English, German, and Turkish
- Client and server rendering examples for translations
- Organized translation files for each locale
- Modern UI with reusable components

## Getting Started

1. Install dependencies:
   ```sh
   pnpm install
   ```
2. Run the development server:
   ```sh
   pnpm dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Folder Structure

- `app/` — Next.js app directory
- `components/` — UI and i18n components
- `lib/` — i18n initialization and utilities
- `locales/` — Translation files (`.po`, `.js`)
- `public/` — Static assets
