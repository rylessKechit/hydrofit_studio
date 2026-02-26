export const LOCALES = ["fr", "en", "ar"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "fr";
export const SITE_URL = "https://www.hydrafitstudio.com";
export const RTL_LOCALES: readonly string[] = ["ar"];
