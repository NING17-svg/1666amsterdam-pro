import type { SiteLocaleConfig } from "@/types/localization";

export interface SiteOfficialSource {
  label: string;
  href: string;
  description: string;
}

export interface SiteConfig {
  name: string;
  brandMark?: string;
  gameName: string;
  domain: string;
  baseUrl: string;
  description: string;
  tagline: string;
  primaryLocale: string;
  locales: SiteLocaleConfig[];
  author: string;
  gaMeasurementId: string;
  bingSiteAuthCode: string;
  officialSources: SiteOfficialSource[];
  disclaimer: string;
}

export const site: SiteConfig = {
  name: "1666: Amsterdam Guide",
  brandMark: "1666",
  gameName: "1666: Amsterdam",
  domain: "1666amsterdam.pro",
  baseUrl: (process.env.NEXT_PUBLIC_SITE_URL || "https://1666amsterdam.pro").replace(/\/$/, ""),
  description:
    "1666: Amsterdam — Early Access launch hub covering release platforms, Prologue demo, lore, characters, and core systems for the Panache Digital Games dark action-adventure.",
  tagline: "1666: Amsterdam Early Access guide, lore, and system explainer hub.",
  primaryLocale: "en-US",
  locales: [
    {
      code: "en-US",
      label: "English",
      pathPrefix: "",
      htmlLang: "en-US",
      openGraphLocale: "en_US",
      ui: {
        searchOpen: "Search",
        searchClose: "Close search",
        searchPlaceholder: "Search this guide",
        searchSubmit: "Search",
        searchLoading: "Loading search…",
        searchError: "Search is unavailable right now.",
        searchNoResults: "No matching pages found.",
        recentUpdates: "Recent updates",
        lastReviewed: "Last reviewed",
      },
    },
  ],
  author: "1666: Amsterdam Guide",
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "",
  bingSiteAuthCode: process.env.NEXT_PUBLIC_BING_SITE_AUTH_CODE || "",
  officialSources: [
    {
      label: "Steam store page for 1666: Amsterdam",
      href: "https://store.steampowered.com/app/3949550",
      description: "Official Steam store page (Panache Digital Games).",
    },
    {
      label: "Panache Digital Games",
      href: "https://panachedigital.com/",
      description: "Official developer site.",
    },
  ],
  disclaimer:
    "Unofficial fan guide. All current-game facts come from the Steam store page, Panache Digital Games official communications, and IGN/Eurogamer previews linked to official sources as of 2026-08-26.",
};
