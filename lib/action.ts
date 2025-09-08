'use server';

import { headers, cookies } from 'next/headers';
import { getI18nInstance } from '@/lib/i18n';

export async function exampleAction() {
  const h = await headers();
  const c = await cookies();

  const lang = h.get('x-locale') || c.get('lang')?.value || 'en';

  const i18n = getI18nInstance(lang);

  return i18n._({
    id: 'action.hello',
    message: 'this is a server action translation test text',
  });
}
