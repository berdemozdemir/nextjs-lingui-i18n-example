import Negotiator from 'negotiator';
import { NextRequest, NextResponse } from 'next/server';
import linguiConfig from './lingui.config';

const { locales } = linguiConfig;
const LOCALE_COOKIE = 'your_locale_cookie';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = locales.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`),
  );
  if (hasLocale) return NextResponse.next();

  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;
  if (cookieLocale && locales.includes(cookieLocale)) {
    return redirectWithLocale(request, cookieLocale);
  }

  const ref = request.headers.get('referer');
  if (ref) {
    try {
      const refUrl = new URL(ref);
      const refLocale = locales.find(
        (l) =>
          refUrl.pathname === `/${l}` || refUrl.pathname.startsWith(`/${l}/`),
      );
      if (refLocale) return redirectWithLocale(request, refLocale);
    } catch {}
  }

  const headers = {
    'accept-language': request.headers.get('accept-language') || '',
  };
  const preferred =
    new Negotiator({ headers }).languages(locales.slice())[0] || locales[0];

  return redirectWithLocale(request, preferred);
}

function redirectWithLocale(request: NextRequest, locale: string) {
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${request.nextUrl.pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
