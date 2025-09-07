import Negotiator from 'negotiator';
import { NextRequest, NextResponse } from 'next/server';
import linguiConfig from './lingui.config';

const locales = linguiConfig.locales as readonly string[];

type Locale = (typeof locales)[number];

const LOCALE_COOKIE = 'lang';

const isSupported = (l: unknown): l is Locale =>
  typeof l === 'string' && locales.includes(l);

function pickPreferred(req: NextRequest): Locale {
  const h = { 'accept-language': req.headers.get('accept-language') || '' };
  const preferred = new Negotiator({ headers: h }).languages([...locales])[0];
  return (isSupported(preferred) ? preferred : locales[0]) as Locale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const seg0Raw = pathname.split('/')[1];
  if (isSupported(seg0Raw)) {
    const seg0: Locale = seg0Raw;

    const reqHeaders = new Headers(request.headers);
    reqHeaders.set('x-locale', seg0);

    const res = NextResponse.next({ request: { headers: reqHeaders } });
    res.cookies.set(LOCALE_COOKIE, seg0, { path: '/', sameSite: 'lax' });
    return res;
  }

  const cookieLocaleRaw = request.cookies.get(LOCALE_COOKIE)?.value;
  const locale: Locale = isSupported(cookieLocaleRaw)
    ? cookieLocaleRaw
    : pickPreferred(request);

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;

  const res = NextResponse.redirect(url);
  res.cookies.set(LOCALE_COOKIE, locale, { path: '/', sameSite: 'lax' });
  return res;
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
