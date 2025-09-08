import { NextResponse } from 'next/server';
import { headers, cookies } from 'next/headers';
import { getI18nInstance } from '@/lib/i18n';

export async function GET() {
  const h = await headers();
  const c = await cookies();

  const lang = h.get('x-locale') || c.get('lang')?.value || 'en';

  const i18n = getI18nInstance(lang);

  return NextResponse.json({
    message: i18n._({
      id: 'api.hello',
      message: 'this an api translation test text',
    }),
  });
}
