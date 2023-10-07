import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ locale }) => ({
  messages: (await import(`./dictionaries/${locale}.json`)).default,
}));

export const i18n = {
  defaultLocale: "en",
  locales: ["en", "cn"],
} as const;

export type Locale = (typeof i18n)["locales"][number];
