'use client';

import { Trans } from '@lingui/react/macro';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export const HomePageButton = () => (
  <Link
    href="/"
    className="absolute -top-5 left-0 flex items-center gap-1 text-xs text-gray-500 hover:underline"
  >
    <ArrowLeft size={14} />

    <Trans id="home.button" context="navigation" comment="Home page button">
      Home Page
    </Trans>
  </Link>
);
