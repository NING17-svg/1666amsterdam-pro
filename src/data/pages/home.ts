import { site } from "@/data/site";
import type { PageContent } from "@/types/content";

export const homePage: PageContent = {
  id: "home",
  translationKey: "home",
  locale: "en-US",
  routeKind: "home",
  slug: "",
  url: "/",
  pageType: "home",
  presentation: { shell: "home", variant: "split-panel" },
  h1: `${site.gameName} — Release, Prologue Demo, Story & Systems`,
  seoTitle: `${site.gameName} — Release, Prologue Demo, Story & Systems`,
  metaDescription:
    "Hub for 1666 Amsterdam by Panache Digital Games. Early Access launch status, Prologue demo, story setting, Noa Brooklyn, Aaron, and every core system.",
  summary:
    "Find everything about 1666: Amsterdam, the new Panache Digital Games action-adventure, including release status, Prologue demo, story, characters, systems, and chapter structure.",
  hero: {
    eyebrow: "Early Access launch hub",
    subtitle:
      "1666: Amsterdam by Panache Digital Games — Early Access launched August 25, 2026 on Steam. Prologue demo, story, characters, and four interlocking systems in one hub.",
    ctas: [
      { label: "Release & Platforms", href: "/release/" },
      { label: "Prologue demo guide", href: "/prologue-demo/" },
    ],
  },
  quickAnswer:
    "1666: Amsterdam is a third-person Dark Action-Adventure from Panache Digital Games, led by creative director Patrice Désilets. It launched into Steam Early Access on August 25, 2026 under AppID 3949550 with a Prologue demo already available. Players explore a handcrafted 1666 Amsterdam as Noa Brooklyn and her cat companion Aaron, and engage with Witchcraft, Gablestone investigation, Esbat moon-night missions, and The Originals.",
  keyFacts: [
    { label: "Developer", value: "Panache Digital Games" },
    { label: "EA launch", value: "2026-08-25 on Steam (AppID 3949550)" },
    { label: "Prologue demo", value: "Available free on Steam" },
    { label: "Core systems", value: "Witchcraft, Gablestone, Esbat, The Originals" },
    { label: "Platforms", value: "PC (Steam) only as of 2026-08-26" },
  ],
  modules: [
    {
      id: "home-quick-answer",
      type: "prose",
      heading: "Quick Answer",
      body: "1666: Amsterdam is a third-person Dark Action-Adventure from Panache Digital Games, led by creative director Patrice Désilets. It launched into Steam Early Access on August 25, 2026 under AppID 3949550 with a Prologue demo already available. Players explore a handcrafted 1666 Amsterdam as Noa Brooklyn and her cat companion Aaron, and engage with Witchcraft, Gablestone investigation, Esbat moon-night missions, and The Originals.",
    },
    {
      id: "home-launch-status",
      type: "prose",
      heading: "1666 Amsterdam Release Status and Platforms",
      body: "1666: Amsterdam entered Steam Early Access on August 25, 2026, with a stated Early Access plan of roughly one year. The Early Access build opens with about 15 hours of main-story content and adds new chapters as the EA window progresses. The Prologue demo is a separate, free download on Steam that introduces Noa and Aaron before the Early Access launch.\n\nAs of August 26, 2026, the title is confirmed for PC via Steam only. Panache Digital Games self-publishes the title, and 11 in-game UI languages are supported. There is no confirmed PS5, Xbox Series X|S, Xbox One, Nintendo Switch, or Switch 2 release on the Steam store page or in Panache Digital Games communications as of 2026-08-26, and no announced Xbox Game Pass inclusion.",
    },
    {
      id: "home-systems",
      type: "prose",
      heading: "Story Setting, Characters, and Core Systems",
      body: "The setting of 1666: Amsterdam is a handcrafted, dual day-and-night recreation of Amsterdam during the Dutch Golden Age. Players switch between Noa Brooklyn, called The Collector and raised by the Zaindaris, and Aaron, a cat summoned from a 1999 timeline who brings a cat-vision mechanic into play. Together they confront The Originals, ancient entities hidden behind human faces.\n\nFour interlocking systems carry the game forward. Witchcraft and Spellcasting form the core magic verb in combat. Gablestone is an investigation mechanic that lets players trace clues to identify Originals in human form. Esbat missions trigger on moon-night calendar beats and let players mark and fight the true forms of hidden Originals. Multi-borough chapters structure the main story across Amsterdam districts, with the EA roadmap adding new boroughs and chapters during the year-long Early Access window.",
      links: [
        {
          label: "Story and setting",
          href: "/story-setting/",
          description:
            "Premise, time period, and dual day/night 1666 Amsterdam city.",
        },
        {
          label: "Noa Brooklyn",
          href: "/noa-brooklyn/",
          description:
            "The Collector protagonist raised by the Zaindaris.",
        },
        {
          label: "Aaron the cat companion",
          href: "/aaron-companion/",
          description: "Second playable character with cat-vision.",
        },
      ],
    },
    {
      id: "home-where-to-start",
      type: "entity-grid",
      heading: "Where to Start as a New Player",
      items: [
        {
          title: "Release & Platforms",
          summary:
            "Live EA launch and platform status for 1666: Amsterdam as of 2026-08-26.",
          href: "/release/",
        },
        {
          title: "Prologue demo guide",
          summary:
            "How to access the free Steam demo and what content it covers.",
          href: "/prologue-demo/",
        },
        {
          title: "Early Access FAQ",
          summary:
            "EA window, ~15-hour opening main story, and EA roadmap.",
          href: "/early-access/",
        },
        {
          title: "Story & setting",
          summary:
            "1666 Dutch Golden Age, dual day/night city, multi-borough chapters.",
          href: "/story-setting/",
        },
        {
          title: "Noa Brooklyn",
          summary:
            "The Collector protagonist raised by the Zaindaris.",
          href: "/noa-brooklyn/",
        },
        {
          title: "Aaron the cat companion",
          summary:
            "Cat companion from 1999 timeline with cat-vision switching.",
          href: "/aaron-companion/",
        },
        {
          title: "The Originals",
          summary:
            "Ancient entities hidden behind human faces in 1666 Amsterdam.",
          href: "/the-originals/",
        },
        {
          title: "Esbat moon-night missions",
          summary:
            "Timed ritual nights where Originals reveal their true forms.",
          href: "/esbat/",
        },
        {
          title: "Multi-borough chapters",
          summary:
            "Chapter structure and EA roadmap for the year-long EA window.",
          href: "/chapters/",
        },
        {
          title: "Patrice Désilets legacy",
          summary:
            "Creative director lineage at Panache Digital Games.",
          href: "/patrice-desilets/",
        },
        {
          title: "Press coverage",
          summary:
            "IGN and Eurogamer previews linked from the Steam store page.",
          href: "/press-coverage/",
        },
        {
          title: "PC system requirements",
          summary:
            "Hardware status as of 2026-08-26; demo as practical benchmark.",
          href: "/system-requirements/",
        },
      ],
    },
    {
      id: "home-fact-boundary",
      type: "callout",
      tone: "caution",
      title: "Fact boundary — 2026-08-26",
      body: "All current-game facts on this site are sourced from the Steam store page (AppID 3949550), the Panache Digital Games official site, and IGN/Eurogamer previews linked to official sources. Anything not confirmed on those sources is labeled 'Not announced as of 2026-08-26' rather than guessed.",
    },
    {
      id: "home-sources",
      type: "prose",
      heading: "Sources",
      body: "- [Steam store page for 1666: Amsterdam](https://store.steampowered.com/app/3949550) - `official/store` - checked `2026-08-26` - EA launch date, AppID 3949550, Prologue demo availability, Witchcraft, Gablestone, Esbat, Originals, 11 supported UI languages, and PC-only platform status.\n- [Panache Digital Games official site](https://panachedigital.com/) - `official/store` - checked `2026-08-26` - Developer identity, Patrice Désilets as creative director, and self-publishing status.\n- [IGN: 1666: Amsterdam preview](https://www.ign.com/articles/1666-amsterdam-preview) - `media/interview` - checked `2026-08-26` - Attributed preview impressions of dual day-and-night Amsterdam, Noa and Aaron dual protagonists, and Originals system.\n- [IGN: 1666: Amsterdam Prologue hands-on preview](https://www.ign.com/articles/1666-amsterdam-prologue-hands-on-preview) - `media/interview` - checked `2026-08-26` - Attributed description of Prologue demo content covering the intro with Noa and Aaron.\n- [SteamDB listing for AppID 3949550](https://steamdb.info/app/3949550/) - `wiki/reference` - checked `2026-08-26` - Discovery only for AppID 3949550; not used as the sole fact source.",
    },
  ],
  faqIds: [
    "home-what-is",
    "home-when-ea",
    "home-prologue-demo",
    "home-protagonists",
    "home-platforms",
  ],
  relatedPageIds: [
    "fixed-release-platforms-en-us",
    "fixed-prologue-demo-en-us",
    "fixed-early-access-faq-en-us",
    "fixed-story-setting-en-us",
    "fixed-noa-brooklyn-en-us",
    "fixed-aaron-companion-en-us",
    "fixed-the-originals-en-us",
    "fixed-esbat-moon-missions-en-us",
    "fixed-multi-borough-chapters-en-us",
    "fixed-patrice-desilets-legacy-en-us",
    "fixed-press-coverage-en-us",
    "fixed-system-requirements-en-us",
  ],
  schemaTypes: ["WebSite", "CollectionPage", "FAQPage", "BreadcrumbList"],
  sourceStatus: "official",
  lastReviewed: "2026-08-26",
};
