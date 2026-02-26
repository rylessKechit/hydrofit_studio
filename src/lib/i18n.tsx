"use client";

import { createContext, useContext, useEffect } from "react";

// Re-export from config for convenience in client components
export { LOCALES, DEFAULT_LOCALE, SITE_URL } from "./i18n-config";
export type { Locale } from "./i18n-config";

import { DEFAULT_LOCALE, RTL_LOCALES, type Locale } from "./i18n-config";

const LocaleContext = createContext<Locale>(DEFAULT_LOCALE);

export function LocaleProvider({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = RTL_LOCALES.includes(locale) ? "rtl" : "ltr";
  }, [locale]);

  return (
    <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>
  );
}

export function useLocale(): Locale {
  return useContext(LocaleContext);
}
