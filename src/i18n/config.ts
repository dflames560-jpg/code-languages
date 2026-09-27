export const defaultLocale = "en" as const;
export const locales = ["en", "es", "fr"] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  en: "English",
  es: "Español",
  fr: "Français",
};