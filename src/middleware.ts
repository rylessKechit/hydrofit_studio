import { NextRequest, NextResponse } from "next/server";

const LOCALES = ["fr", "en", "ar"];
const DEFAULT_LOCALE = "fr";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the pathname already starts with a locale
  const hasLocale = LOCALES.some(
    (locale) =>
      pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (hasLocale) {
    // Set Content-Language header for SEO
    const locale = LOCALES.find(
      (l) => pathname.startsWith(`/${l}/`) || pathname === `/${l}`
    );
    const response = NextResponse.next();
    if (locale) {
      response.headers.set("Content-Language", locale);
    }
    return response;
  }

  // Skip static files, API routes, and special Next.js paths
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // Redirect to French by default
  const url = request.nextUrl.clone();
  url.pathname = `/${DEFAULT_LOCALE}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|sitemap.xml|robots.txt|.*\\..*).*)"],
};
