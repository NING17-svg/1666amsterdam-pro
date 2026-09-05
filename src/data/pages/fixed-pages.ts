import type { PageContent } from "@/types/content";

export const releasePlatformsPage: PageContent = {
  id: "fixed-release-platforms-en-us",
  translationKey: "release-platforms",
  locale: "en-US",
  routeKind: "fixed",
  slug: "release",
  url: "/release",
  pageType: "release",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: "1666 Amsterdam Release Date and Supported Platforms",
  seoTitle: "1666 Amsterdam Release Date and Supported Platforms",
  metaDescription:
    "1666 Amsterdam release date: August 25, 2026 in Steam Early Access. Steam launch, Prologue demo, and platform status for PS5, Xbox, and Switch as of 2026-08-26.",
  summary:
    "1666 Amsterdam entered Steam Early Access on August 25, 2026 under Steam AppID 3949550, published by Panache Digital Games. A separate Prologue demo is also available on Steam and covers the intro with Noa Brooklyn and Aaron. As of 2026-08-26, 1666 Amsterdam is confirmed for PC via Steam only.",
  hero: {
    eyebrow: "Release & Platforms",
    subtitle:
      "Steam Early Access launched August 25, 2026 on PC. PS5, Xbox, and Switch statuses not announced as of 2026-08-26.",
    ctas: [
      { label: "Prologue demo guide", href: "/prologue-demo/" },
      { label: "Early Access FAQ", href: "/early-access/" },
      { label: "PC system requirements", href: "/system-requirements/" },
    ],
  },
  quickAnswer:
    "The 1666 Amsterdam release entered Steam Early Access on August 25, 2026 under Steam AppID 3949550, published by Panache Digital Games. A separate Prologue demo is also available on Steam and covers the intro with Noa Brooklyn and Aaron. As of 2026-08-26, 1666 Amsterdam is confirmed for PC via Steam only, and PS5, Xbox, Xbox Series X|S, and Nintendo Switch or Switch 2 versions are not announced.",
  keyFacts: [
    { label: "EA launch", value: "2026-08-25 on Steam (AppID 3949550)" },
    { label: "Publisher", value: "Panache Digital Games (self-published)" },
    { label: "Prologue demo", value: "Available free on Steam" },
    { label: "EA window", value: "Roughly 1 year" },
    { label: "Main story at EA start", value: "~15 hours" },
  ],
  modules: [
    {
      id: "release-quick-answer",
      type: "prose",
      heading: "Quick Answer",
      body: "The 1666 Amsterdam release entered Steam Early Access on August 25, 2026 under Steam AppID 3949550, published by Panache Digital Games. A separate Prologue demo is also available on Steam and covers the intro with Noa Brooklyn and Aaron. As of 2026-08-26, 1666 Amsterdam is confirmed for PC via Steam only, and PS5, Xbox, Xbox Series X|S, and Nintendo Switch or Switch 2 versions are not announced.",
    },
    {
      id: "release-confirmed",
      type: "prose",
      heading: "Confirmed 1666 Amsterdam Release on Steam",
      body: "The 1666 Amsterdam release on Steam went live on August 25, 2026, marking the start of a roughly one-year Early Access window. Panache Digital Games is self-publishing, and the Steam store page lists 11 supported in-game UI languages. The Early Access build opens with about 15 hours of main-story content, and additional chapters are scheduled to land during the EA window.\n\nThe Steam store page is the single most reliable source for the 1666 Amsterdam release date, the Steam AppID 3949550, and the current Early Access status. SteamDB listings mirror the same AppID and can be used as discovery only, not as the sole fact source. Panache Digital Games communications confirm the developer, the creative director, and the self-publishing model.",
      links: [
        {
          label: "Prologue demo guide",
          href: "/prologue-demo/",
          description: "Free Steam demo that introduces Noa Brooklyn and Aaron.",
        },
        {
          label: "Early Access FAQ",
          href: "/early-access/",
          description: "EA window, ~15-hour main story, and EA roadmap.",
        },
      ],
    },
    {
      id: "release-platforms",
      type: "callout",
      tone: "unknown",
      title: "Platform status — Not announced as of 2026-08-26",
      body: "1666 Amsterdam is confirmed only for PC via Steam. The Steam store page does not list any console SKU, and Panache Digital Games has not announced a 1666 Amsterdam release on PlayStation 5, Xbox Series X|S, Xbox One, Nintendo Switch, or Switch 2. There is also no announced Xbox Game Pass inclusion for 1666 Amsterdam.",
    },
    {
      id: "release-post-ea",
      type: "prose",
      heading: "What Changes After the EA Window",
      body: "Panache Digital Games has stated a roughly one-year Early Access plan for 1666 Amsterdam, but has not announced a specific EA end date. There is no confirmed full-release date, no confirmed 1.0 launch trailer, and no confirmed post-EA price. Anything beyond the 2026-08-26 confirmed scope should be treated as not announced until Panache Digital Games or the Steam store page updates.",
    },
    {
      id: "release-sources",
      type: "prose",
      heading: "Sources",
      body: "- [Steam store page for 1666: Amsterdam](https://store.steampowered.com/app/3949550) - `official/store` - checked `2026-08-26` - EA launch date 2026-08-25, AppID 3949550, PC-only platform status, 11 supported UI languages, Prologue demo link.\n- [Panache Digital Games official site](https://panachedigital.com/) - `official/store` - checked `2026-08-26` - Developer identity, Patrice Désilets as creative director, and self-publishing status.\n- [IGN: 1666: Amsterdam preview](https://www.ign.com/articles/1666-amsterdam-preview) - `media/interview` - checked `2026-08-26` - Attributed description of Early Access scope and roughly 15-hour starting main story.\n- [Eurogamer: 1666: Amsterdam preview](https://www.eurogamer.net/1666-amsterdam-preview) - `media/interview` - checked `2026-08-26` - Attributed confirmation that 1666 Amsterdam is currently a Steam-only release during the EA window.\n- [SteamDB listing for AppID 3949550](https://steamdb.info/app/3949550/) - `wiki/reference` - checked `2026-08-26` - Discovery only for AppID 3949550 and EA window; not used as the sole fact source.",
    },
  ],
  faqIds: ["release-when", "release-ps5", "release-xbox", "release-switch"],
  relatedPageIds: [
    "fixed-prologue-demo-en-us",
    "fixed-early-access-faq-en-us",
    "fixed-system-requirements-en-us",
  ],
  schemaTypes: ["Article", "FAQPage", "BreadcrumbList"],
  sourceStatus: "official",
  lastReviewed: "2026-08-26",
};

export const systemRequirementsPage: PageContent = {
  id: "fixed-system-requirements-en-us",
  translationKey: "system-requirements",
  locale: "en-US",
  routeKind: "fixed",
  slug: "system-requirements",
  url: "/system-requirements",
  pageType: "wiki",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: "1666 Amsterdam System Requirements and PC Specs",
  seoTitle: "1666 Amsterdam System Requirements and PC Specs",
  metaDescription:
    "PC specs and the 1666 Amsterdam system requirements for Early Access. Steam store status, Prologue demo, and what is not announced as of 2026-08-26.",
  summary:
    "1666 Amsterdam system requirements on PC are not published as specific CPU, GPU, RAM, or storage tiers as of 2026-08-26. The Steam store page for AppID 3949550 lists the game as a Windows title available through Steam Early Access, but does not publish minimum or recommended hardware tiers yet. Players who already own a recent mid-range gaming PC should be able to install the Prologue demo to verify real-world performance before buying the Early Access build.",
  hero: {
    eyebrow: "PC Specs",
    subtitle:
      "No minimum or recommended spec tier published yet — use the free Prologue demo as a practical benchmark.",
    ctas: [{ label: "Release & Platforms", href: "/release/" }],
  },
  quickAnswer:
    "1666 Amsterdam system requirements on PC are not published as specific CPU, GPU, RAM, or storage tiers as of 2026-08-26. The Steam store page for AppID 3949550 lists the game as a Windows title available through Steam Early Access, but does not publish minimum or recommended hardware tiers yet. Players who already own a recent mid-range gaming PC should be able to install the Prologue demo to verify real-world performance before buying the Early Access build.",
  keyFacts: [
    { label: "Platform target", value: "Windows PC via Steam" },
    { label: "AppID", value: "3949550" },
    { label: "EA launch", value: "2026-08-25" },
    { label: "Minimum spec", value: "Not announced as of 2026-08-26" },
    { label: "Recommended spec", value: "Not announced as of 2026-08-26" },
  ],
  modules: [
    {
      id: "sysreq-quick-answer",
      type: "prose",
      heading: "Quick Answer",
      body: "1666 Amsterdam system requirements on PC are not published as specific CPU, GPU, RAM, or storage tiers as of 2026-08-26. The Steam store page for AppID 3949550 lists the game as a Windows title available through Steam Early Access, but does not publish minimum or recommended hardware tiers yet. Players who already own a recent mid-range gaming PC should be able to install the Prologue demo to verify real-world performance before buying the Early Access build.",
    },
    {
      id: "sysreq-current",
      type: "prose",
      heading: "Current 1666 Amsterdam System Requirements Status",
      body: "The 1666 Amsterdam system requirements page on Steam does not list separate minimum and recommended hardware tiers at the time of writing. Panache Digital Games has not posted CPU model names, GPU model names, RAM tiers, or storage figures for the Early Access build, and no third-party database has published a verified minimum or recommended spec that can be cited as official. Anything you read about exact 1666 Amsterdam minimum requirements from a non-official source should be treated as unverified.\n\nThe Prologue demo is the closest practical benchmark. Because the demo uses the same engine, lighting model, and dual day-and-night Amsterdam city as the EA build, players can install the demo and run it on their existing hardware to gauge performance before committing to Early Access. The Steam store page serves the demo as a separate download under the same 1666 Amsterdam listing.",
    },
    {
      id: "sysreq-confirmed",
      type: "prose",
      heading: "What the Steam Store Page Does Confirm",
      body: "The Steam store page for 1666 Amsterdam confirms the platform target (Windows PC via Steam), the Steam AppID 3949550, the Early Access launch date of August 25, 2026, and the fact that the title is currently in the Steam-only PC release window. The page also lists 11 supported in-game UI languages. None of those facts by themselves imply a specific CPU, GPU, or RAM tier.",
    },
    {
      id: "sysreq-guidance",
      type: "callout",
      tone: "tip",
      title: "Practical guidance before official specs land",
      body: "Treat the Early Access build as an open-world action-adventure with handcrafted 1666 Amsterdam city streaming, dual day-and-night lighting, third-person combat with Witchcraft and Spellcasting effects, and dynamic Originals encounters. Builds that handle similar open-world action-adventure games at 1080p on medium-to-high settings generally provide a reasonable starting point, but a published minimum spec is the only authoritative answer and that is not yet available.",
    },
    {
      id: "sysreq-sources",
      type: "prose",
      heading: "Sources",
      body: "- [Steam store page for 1666: Amsterdam](https://store.steampowered.com/app/3949550) - `official/store` - checked `2026-08-26` - Confirms PC/Windows platform target, AppID 3949550, Early Access launch date 2026-08-25, and the absence of a published minimum or recommended spec tier.\n- [Panache Digital Games official site](https://panachedigital.com/) - `official/store` - checked `2026-08-26` - Developer identity and self-publishing status; the official site does not publish PC hardware tiers that the Steam page omits.\n- [IGN: 1666: Amsterdam preview](https://www.ign.com/articles/1666-amsterdam-preview) - `media/interview` - checked `2026-08-26` - Attributed description of the open-world dual day/night 1666 Amsterdam city that informs the practical PC spec guidance.\n- [SteamDB listing for AppID 3949550](https://steamdb.info/app/3949550/) - `wiki/reference` - checked `2026-08-26` - Discovery only for AppID 3949550 and platform availability; not used as the sole fact source for any specific CPU/GPU/RAM value.",
    },
  ],
  faqIds: ["sysreq-min", "sysreq-rec", "sysreq-deck", "sysreq-storage"],
  relatedPageIds: [
    "fixed-release-platforms-en-us",
    "fixed-troubleshooting-en-us",
  ],
  schemaTypes: ["Article", "FAQPage", "BreadcrumbList"],
  sourceStatus: "official",
  lastReviewed: "2026-08-26",
};

export const prologueDemoPage: PageContent = {
  id: "fixed-prologue-demo-en-us",
  translationKey: "prologue-demo",
  locale: "en-US",
  routeKind: "fixed",
  slug: "prologue-demo",
  url: "/prologue-demo",
  pageType: "guides",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: "1666 Amsterdam Prologue Demo: How to Play and What is Inside",
  seoTitle: "1666 Amsterdam Prologue Demo: How to Play and What is Inside",
  metaDescription:
    "The 1666 Amsterdam Prologue demo is on Steam and covers the intro with Noa and Aaron. See how to access it, what is included, the Bateratze cat choice, and how it differs from Early Access.",
  summary:
    "The 1666 Amsterdam Prologue demo is a free Steam download under AppID 3949550 that lets you play the introduction of Noa Brooklyn and Aaron before the Early Access build. It uses the same dual day-and-night 1666 Amsterdam city and the same Noa-and-Aaron perspective switching as the Early Access release, but it covers only the opening segment, the Bateratze tarot cat choice, and the Library / 1999 Hotel prologue sequence.",
  hero: {
    eyebrow: "Prologue Demo",
    subtitle:
      "Free Steam demo of the 1666 Amsterdam intro with Noa and Aaron. Best way to test the game before buying the Early Access pass.",
    ctas: [
      { label: "Release & Platforms", href: "/release/" },
      { label: "Early Access FAQ", href: "/early-access/" },
      { label: "Story & setting", href: "/story-setting/" },
    ],
  },
  quickAnswer:
    "The 1666 Amsterdam Prologue demo is a free Steam download under AppID 3949550 that lets you play the introduction of Noa Brooklyn and Aaron before the Early Access build. It uses the same dual day-and-night 1666 Amsterdam city and the same Noa-and-Aaron perspective switching as the Early Access release, but it covers only the opening segment. The Prologue demo also routes you through the Forest Opening, the Sacred Tree Bateratze cat choice, the Library Section XIV clue puzzle, the 1999 Hotel ritual scene, and the cat portal traversal that completes the Prologue.",
  keyFacts: [
    { label: "Price", value: "Free" },
    { label: "Platform", value: "Steam (PC)" },
    { label: "Content", value: "Intro of Noa Brooklyn and Aaron" },
    { label: "Engine", value: "Same as Early Access build" },
    { label: "Save carryover", value: "No — standalone preview" },
    { label: "Bateratze choice", value: "Spirit, Hermit, Dreamer, Wildling, Guardian, Alchemist" },
  ],
  modules: [
    {
      id: "demo-quick-answer",
      type: "prose",
      heading: "Quick Answer",
      body: "The 1666 Amsterdam Prologue demo is a free Steam download under AppID 3949550 that lets you play the introduction of Noa Brooklyn and Aaron before the Early Access build. It uses the same dual day-and-night 1666 Amsterdam city and the same Noa-and-Aaron perspective switching as the Early Access release, but it covers only the opening segment. The Prologue demo is the recommended way to try 1666 Amsterdam before buying the Early Access pass.",
    },
    {
      id: "demo-find",
      type: "prose",
      heading: "Where to Find the 1666 Amsterdam Prologue Demo",
      body: "The Prologue demo lives on the same Steam store listing as the Early Access build of 1666 Amsterdam, under Steam AppID 3949550. Panache Digital Games publishes it as a free, separate download so players can sample the introduction without buying the Early Access pass. Install it through the Steam client by searching for 1666 Amsterdam, opening the store page, and selecting the demo from the available play options.\n\nThe demo is currently a Steam-only release. There is no confirmed console demo for PlayStation 5, Xbox Series X|S, Xbox One, Nintendo Switch, or Switch 2 as of 2026-09-01, and Panache Digital Games has not announced post-launch extensions to the demo. The Steam listing is the only authoritative source for whether a 1666 Amsterdam Prologue demo is live, so players should start there.",
    },
    {
      id: "demo-steps",
      type: "steps",
      heading: "Steam Library Steps",
      items: [
        {
          title: "Open Steam and search for 1666 Amsterdam",
          body: "Launch the Steam client and search for 1666 Amsterdam to find the store page.",
        },
        {
          title: "Open the 1666 Amsterdam store page",
          body: "Click into the store page for 1666 Amsterdam (AppID 3949550).",
        },
        {
          title: "Choose the Prologue demo entry under play options",
          body: "Scroll to the play options area on the store page and select the Prologue demo entry.",
        },
        {
          title: "Install the demo",
          body: "Click Install and wait for the download to finish. The demo then appears in your Steam library alongside any other 1666 Amsterdam content.",
        },
      ],
    },
    {
      id: "demo-content",
      type: "prose",
      heading: "What Content the Prologue Demo Covers",
      body: "The 1666 Amsterdam Prologue demo focuses on the opening of the story, introducing Noa Brooklyn and her cat companion Aaron inside the handcrafted 1666 Amsterdam city. Players get a hands-on look at the perspective switch between Noa and Aaron, including the cat-vision mechanic that Aaron brings from the 1999 timeline. IGN's Prologue hands-on preview describes the demo as a focused introduction that establishes the dual-protagonist loop before players reach the larger Early Access scope.\n\nThe demo does not include the full 15-hour main story or the multi-borough chapter structure that opens the Early Access build. It also does not include post-introduction systems such as the full Gablestone investigation loop or the timed Esbat moon-night missions, because those systems expand across the EA main story. Use the demo to evaluate the combat feel, the cat-vision switching, and the 1666 Amsterdam setting, then move into Early Access for the full chapter experience.",
      links: [
        {
          label: "Aaron the cat companion",
          href: "/aaron-companion/",
          description: "1999 timeline cat with cat-vision perspective switch.",
        },
        {
          label: "Multi-borough chapters",
          href: "/chapters/",
          description: "Prologue is chapter one; rest follow in the EA window.",
        },
        {
          label: "Story & setting",
          href: "/story-setting/",
          description: "1666 Dutch Golden Age dual day/night city context.",
        },
      ],
    },
    {
      id: "demo-vs-ea",
      type: "comparison",
      heading: "Demo vs Early Access Differences",
      options: [
        {
          name: "Prologue demo",
          summary:
            "Free, Steam-only, covers the intro of Noa Brooklyn and Aaron with the same engine and setting as EA. Includes the Bateratze cat choice, the Library clue puzzle, the 1999 Hotel scene, and the cat portal traversal. No multi-borough chapter content or full Esbat missions.",
          bestFor: "Trying the game before buying Early Access or testing hardware.",
          badge: "Free",
        },
        {
          name: "Early Access build",
          summary:
            "Paid Steam purchase that opens the ~15-hour starting main story, the first multi-borough chapter, and the full Witchcraft, Gablestone, Esbat, and Originals systems.",
          bestFor: "Players ready for the playable game proper and the EA roadmap.",
          badge: "Paid",
        },
      ],
    },
    {
      id: "demo-when-useful",
      type: "prose",
      heading: "When the Prologue Demo Is Useful",
      body: "The 1666 Amsterdam Prologue demo is most useful for players who want to test the game on their hardware, players who want to confirm the cat-vision mechanic feels right, and players who want to experience the introduction before committing to the Early Access window. It is also useful for press and content creators who need to evaluate the title without buying the EA pass. Players who already bought Early Access can still play the demo as a clean way to revisit the intro.\n\nAfter finishing the demo, players who want to keep going should buy the Early Access build on the same Steam listing. The Prologue demo does not grant access to the EA main story, the multi-borough chapters, or any future content updates. There is no demo-to-EA upgrade path beyond the standard Steam purchase, and no announced bundle that combines the demo with bonus content.",
    },
    {
      id: "demo-bateratze",
      type: "prose",
      heading: "Bateratze Cat Companion Choice in the Prologue",
      body: "The Bateratze is the witch's familiar cat that Noa Brooklyn commits to at the Sacred Tree near the end of the Forest Opening segment. Once the red-leaf torch is enchanted and Lux is gathered a second time at the Commencement Fire Pan, the Prologue presents a carousel of six tarot cat archetypes: The Spirit, The Hermit, The Dreamer, The Wildling, The Guardian, and The Alchemist. Each one represents a different playstyle hint — story-led, careful exploration, discovery, open-world, combat-leaning, and magic-focused — but the Prologue does not surface any stat differences on the choice screen. The on-screen confirmation reads as a commitment rather than a build sheet, and the successful pick produces a 'Union Cat Chosen' notice that advances the story.\n\nBecause the choice is locked in for the rest of the Prologue, the practical guidance is to pick the appearance and archetype you want to see in the later cat sequence. The 9puz Prologue walkthrough explicitly warns against basing the pick on unofficial tier lists, since no stat bonus is shown next to any of the six options at the Sacred Tree. Players who want to test multiple Bateratze picks can do so across separate demo installs, because the Prologue save does not carry over into the Early Access build.",
      links: [
        {
          label: "Aaron the cat companion",
          href: "/aaron-companion/",
          description: "The 1999 timeline cat that pairs with Noa on the day-side loop.",
        },
      ],
    },
    {
      id: "demo-bateratze-grid",
      type: "entity-grid",
      heading: "Six Bateratze Cat Archetypes at the Sacred Tree",
      items: [
        {
          title: "The Spirit",
          summary:
            "Mystical / otherworldly archetype. The Prologue surfaces no stat difference; pick for the archetype you want in the later cat sequence.",
          badge: "Story-led",
        },
        {
          title: "The Hermit",
          summary:
            "Solitary / wise archetype. No stat difference shown at the Sacred Tree carousel.",
          badge: "Careful",
        },
        {
          title: "The Dreamer",
          summary:
            "Curious / imaginative archetype. No stat difference shown at the Sacred Tree carousel.",
          badge: "Discovery",
        },
        {
          title: "The Wildling",
          summary:
            "Free / nature-loving archetype. No stat difference shown at the Sacred Tree carousel.",
          badge: "Open-world",
        },
        {
          title: "The Guardian",
          summary:
            "Protective / defensive archetype. No stat difference shown at the Sacred Tree carousel.",
          badge: "Combat-leaning",
        },
        {
          title: "The Alchemist",
          summary:
            "Magic-focused archetype. No stat difference shown at the Sacred Tree carousel.",
          badge: "Magic",
        },
      ],
    },
    {
      id: "demo-walkthrough",
      type: "steps",
      heading: "Prologue Milestone-by-Milestone Walkthrough",
      items: [
        {
          title: "Forest Opening — gather Lux and enchant the red-leaf torch",
          body: "At the first Life Echo, gather Lux, then Concentrate on the red-leaf torch and hold Enchant. This is the tutorial beat that teaches the Lux / Enchant interaction.",
        },
        {
          title: "Commencement (December 1665) — repeat the Lux cycle",
          body: "At the Commencement Fire Pan, repeat the Lux gathering cycle so the Prologue ritual can move forward to the Sacred Tree.",
        },
        {
          title: "Sacred Tree — pick your Bateratze cat companion",
          body: "Analyze the cats at the Sacred Tree (hold Concentrate on the highlighted group), then confirm a Bateratze from the carousel. Pick the archetype you want; no stat differences are shown.",
        },
        {
          title: "Library (as Clio) — find Section VI and return to Lucas",
          body: "Use the registry along the library wall to Lucas's left to find Section VI. Concentrate exposes white points of interest. Return to Lucas once you have the Section VI entry.",
        },
        {
          title: "Library — recover the Hidden Note from Section XIV",
          body: "Move to the upper level above the desk area. Search the Rembrandt bust to obtain the Hidden Note with Aaron's message. The first search opens a readable Ancient Civilizations entry; the second surfaces the Hidden Note above protected script.",
        },
        {
          title: "1999 Hotel (as Aaron, Dec 30, 1999) — collect the ritual items",
          body: "Follow Agnes. Pick up the four candles from the chest beneath the window, the dry leaves from the low dresser under the round wall mirror, and the tapestry from the open luggage on the striped sofa. Once all three are collected, the ceremony cutscene starts automatically.",
        },
        {
          title: "Cat portal traversal and Sacred Tree finish",
          body: "Follow the blue cat-eye marks through the room and corridor; pass the red-lit threshold into the forest. At the clearing, Concentrate and Analyze the frozen red-hooded woman (Noa). Move around the rear of the Sacred Tree, step onto the low roots, climb the branch curling above Noa, and touch the blue translucent feline trace.",
        },
      ],
    },
    {
      id: "demo-library",
      type: "prose",
      heading: "Library Section XIV and the Roman-Numeral Clues",
      body: "The Library clue puzzle is split between Section VI and Section XIV. Section VI covers ancient writing systems and languages, and you locate it along the library wall to Lucas's left by using Concentrate to expose white points of interest. Once the Section VI entry is readable, return to Lucas and he unlocks the next step.\n\nSection XIV is the Rembrandt and Dutch Golden Age material, and it sits on the upper level above the desk area. Search the bust of Rembrandt to obtain the Hidden Note. The first search opens a readable Ancient Civilizations entry; the second search surfaces the Hidden Note with Aaron's message above protected script. Treat the Rembrandt bust as the load-bearing puzzle object — many community walkthroughs note that players who wander the upper stacks without checking the bust miss the Hidden Note entirely.",
    },
    {
      id: "demo-portal",
      type: "prose",
      heading: "Cat Portal Traversal Tips",
      body: "The Prologue finishes with a cat-only traversal sequence that routes you from the 1999 Hotel back into the Forest Opening and up the Sacred Tree. Use the Cat Senses action when the route becomes visually noisy, and follow the blue cat-eye marks through the room and corridor. Accelerate when the 'Move Faster' tutorial appears, then pass the red-lit threshold back into the forest.\n\nAt the clearing, Concentrate and Analyze the frozen red-hooded woman — the 9puz walkthrough identifies her as Noa the Collector. The common failure signal here is standing below Noa after analysis with no new dialogue; the answer is vertical. Move around the rear of the Sacred Tree, step onto the low roots, climb the branch curling above Noa, and reach the blue translucent feline trace with an interaction marker. Touching the trace triggers the Prologue completion sequence and cements the cat companion bond set up at the Sacred Tree earlier.",
    },
    {
      id: "demo-hotel",
      type: "prose",
      heading: "1999 Hotel Ritual Items (Aaron, December 30, 1999)",
      body: "The 1999 Hotel sequence plays as Aaron, the cat companion, and uses three ritual items rather than a stat challenge. Pick them up in any order — once all three are in the inventory, the ceremony cutscene begins automatically and the Prologue advances to the cat portal traversal.\n\n- Four candles — wooden chest beneath the window, beside the armchair. Pickup readout shows `x4 Candles`.\n- Dry leaves — low dresser under the round wall mirror near the room entrance.\n- Tapestry — open luggage on the striped sofa.\n\nThe items do not require manual placement; the cutscene handles the ritual arrangement. After the ceremony, the narration switches to 'When everything was ready…' and the cat portal traversal starts.",
    },
    {
      id: "demo-sources",
      type: "prose",
      heading: "Sources",
      body: "- [Steam store page for 1666: Amsterdam](https://store.steampowered.com/app/3949550) - `official/store` - checked `2026-09-01` - Confirms the 1666 Amsterdam Prologue demo is live on Steam under AppID 3949550 as a free download alongside the EA build.\n- [Panache Digital Games official site](https://panachedigital.com/) - `official/store` - checked `2026-09-01` - Developer and self-publisher identity for the demo and the EA build.\n- [IGN: 1666: Amsterdam Prologue hands-on preview](https://www.ign.com/articles/1666-amsterdam-prologue-hands-on-preview) - `media/interview` - checked `2026-09-01` - Attributed description of the Prologue demo as a focused intro to Noa and Aaron and the dual-protagonist cat-vision loop.\n- [IGN: 1666: Amsterdam preview](https://www.ign.com/articles/1666-amsterdam-preview) - `media/interview` - checked `2026-09-01` - Attributed description of the broader EA scope that the demo only partially covers.\n- [9puz: 1666 Amsterdam Prologue walkthrough](https://9puz.com/4730-1666-amsterdam-prologue-walkthrough/) - `wiki/reference` - checked `2026-09-01` - Walkthrough of the Forest Opening Lux cycle, Sacred Tree Bateratze carousel, Library Section VI / Section XIV clue locations, 1999 Hotel ritual items (candles, dry leaves, tapestry), and cat portal traversal at the Sacred Tree.\n- [Sportskeeda: 1666 Amsterdam Prologue walkthrough](https://widgets.sportskeeda.com/esports/1666-amsterdam-prologue-walkthrough) - `media/interview` - checked `2026-09-01` - Walkthrough covering the Bateratze tarot cat companion options, Prologue milestone order, and cat portal traversal tips for the demo completion sequence.\n- [SteamDB listing for AppID 3949550](https://steamdb.info/app/3949550/) - `wiki/reference` - checked `2026-09-01` - Discovery only for the Prologue demo entry on AppID 3949550; not used as the sole fact source.",
    },
  ],
  faqIds: [
    "demo-download",
    "demo-full-game",
    "demo-console",
    "demo-save",
    "demo-bateratze",
    "demo-walkthrough",
    "demo-library",
    "demo-hotel-items",
  ],
  relatedPageIds: [
    "fixed-release-platforms-en-us",
    "fixed-early-access-faq-en-us",
    "fixed-story-setting-en-us",
    "fixed-aaron-companion-en-us",
    "fixed-multi-borough-chapters-en-us",
  ],
  schemaTypes: ["Article", "FAQPage", "BreadcrumbList"],
  sourceStatus: "official",
  lastReviewed: "2026-09-01",
};

export const earlyAccessFaqPage: PageContent = {
  id: "fixed-early-access-faq-en-us",
  translationKey: "early-access-faq",
  locale: "en-US",
  routeKind: "fixed",
  slug: "early-access",
  url: "/early-access",
  pageType: "guides",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: "1666 Amsterdam Early Access: Launch, Length, and Content",
  seoTitle: "1666 Amsterdam Early Access: Launch, Length, and Content",
  metaDescription:
    "1666 Amsterdam Early Access launched on Steam on August 25, 2026. EA window, roughly 15-hour main story at start, the Prologue demo, and the chapter roadmap.",
  summary:
    "1666 Amsterdam Early Access launched on Steam on August 25, 2026 under AppID 3949550, with Panache Digital Games self-publishing. The EA plan spans roughly one year and the opening EA build includes about 15 hours of main-story content. The Prologue demo is a separate free Steam download that covers the intro of Noa Brooklyn and Aaron.",
  hero: {
    eyebrow: "Early Access FAQ",
    subtitle:
      "EA launched August 25, 2026. ~15-hour main story at start, ~1-year EA plan, four core systems live at launch.",
    ctas: [
      { label: "Release & Platforms", href: "/release/" },
      { label: "Prologue demo", href: "/prologue-demo/" },
      { label: "Multi-borough chapters", href: "/chapters/" },
    ],
  },
  quickAnswer:
    "1666 Amsterdam Early Access launched on Steam on August 25, 2026 under AppID 3949550, with Panache Digital Games self-publishing. The EA plan spans roughly one year and the opening EA build includes about 15 hours of main-story content. The Prologue demo is a separate free Steam download that covers the intro of Noa Brooklyn and Aaron. A specific EA end date and the full chapter list beyond the Prologue are not announced as of 2026-08-26.",
  keyFacts: [
    { label: "EA launch", value: "2026-08-25 on Steam" },
    { label: "Self-publisher", value: "Panache Digital Games" },
    { label: "EA window", value: "Roughly 1 year" },
    { label: "Main story at EA start", value: "~15 hours" },
    { label: "Prologue demo", value: "Free on Steam" },
  ],
  modules: [
    {
      id: "ea-quick-answer",
      type: "prose",
      heading: "Quick Answer",
      body: "1666 Amsterdam Early Access launched on Steam on August 25, 2026 under AppID 3949550, with Panache Digital Games self-publishing. The EA plan spans roughly one year and the opening EA build includes about 15 hours of main-story content. The Prologue demo is a separate free Steam download that covers the intro of Noa Brooklyn and Aaron. A specific EA end date and the full chapter list beyond the Prologue are not announced as of 2026-08-26.",
    },
    {
      id: "ea-includes",
      type: "prose",
      heading: "What 1666 Amsterdam Early Access Includes at Launch",
      body: "The 1666 Amsterdam Early Access build ships with the opening main story of the title. Panache Digital Games has described the launch content as about 15 hours of main-story play, set in a handcrafted dual day-and-night 1666 Amsterdam. Players control Noa Brooklyn and her cat companion Aaron, and the EA build opens the multi-borough chapter structure that will continue to expand during the EA window.\n\nWitchcraft and Spellcasting, Gablestone investigation, Esbat moon-night missions, and The Originals faction all form part of the EA build, because they are core systems rather than post-launch additions. Players who buy the Early Access pass get the same engine, the same dual day-and-night 1666 Amsterdam, the same Noa-and-Aaron perspective switching, and the same eleven supported in-game UI languages as the Prologue demo. The difference is depth and scope, not feature completeness.",
    },
    {
      id: "ea-systems",
      type: "entity-grid",
      heading: "Systems Available in Early Access",
      items: [
        {
          title: "Witchcraft & Spellcasting",
          summary:
            "Primary magic combat verb used during Esbat nights against Originals.",
          href: "/witchcraft/",
        },
        {
          title: "Gablestone",
          summary:
            "Day-side clue loop that identifies which human faces are Originals.",
          href: "/gablestone/",
        },
        {
          title: "Esbat",
          summary:
            "Moon-night mission system that triggers after Gablestone evidence matures.",
          href: "/esbat/",
        },
        {
          title: "The Originals",
          summary:
            "Ancient entities hidden behind human faces inside 1666 Amsterdam.",
          href: "/the-originals/",
        },
      ],
    },
    {
      id: "ea-window",
      type: "prose",
      heading: "How Long the 1666 Amsterdam Early Access Window Lasts",
      body: "Panache Digital Games has stated a roughly one-year Early Access plan for 1666 Amsterdam. The EA window opened on August 25, 2026, which puts the expected close somewhere around late summer 2027 at the current pace. Panache has not posted an exact EA end date, and the Steam store page does not list a 1.0 launch date. Players who want a precise end date should wait for an official Panache communication or a Steam store page update.\n\nChapter releases during the EA window follow a content roadmap that Panache Digital Games has not fully published. The Prologue demo is the introduction, and the EA build opens the first multi-borough chapter. Subsequent chapters are expected to add new boroughs and new story beats, but the chapter list beyond the Prologue and the cadence of those updates are not announced as of 2026-08-26.",
    },
    {
      id: "ea-roadmap",
      type: "callout",
      tone: "tip",
      title: "What to Expect From the Chapter Roadmap",
      body: "Expect new chapters to land across the EA window with new boroughs, new Originals, and new story beats. The dual day-and-night 1666 Amsterdam city will continue to grow, and the EA roadmap will likely include new Esbat missions, new Gablestone leads, and new Witchcraft progression tiers. None of these roadmap details are officially dated yet, so treat any leaked roadmap as rumor until Panache Digital Games confirms the schedule on the Steam store page or in an official press release.",
    },
    {
      id: "ea-vs-demo",
      type: "prose",
      heading: "How 1666 Amsterdam Early Access Compares to the Prologue Demo",
      body: "The Early Access build and the Prologue demo share the same engine and the same setting. The EA build adds the 15-hour opening main story, the multi-borough chapter structure, and the full scope of Witchcraft, Gablestone, Esbat, and Originals systems. The Prologue demo is the introductory segment, and it does not include the multi-borough chapter layout or the timed Esbat missions that anchor the EA build.\n\nPlayers who only want a quick preview should start with the Prologue demo on Steam. Players who want the playable game proper should buy the Early Access pass, because that is the only way to access the EA main story. There is no upgrade bundle that combines the demo and the EA pass beyond the standard Steam purchase, and demo saves do not carry over into the EA build.",
    },
    {
      id: "ea-who",
      type: "prose",
      heading: "Who Should Buy the Early Access Pass",
      body: "Buy the Early Access pass if you want to play the 1666 Amsterdam main story today, follow the chapter roadmap as it lands, and engage with the four core systems at their launch scope. Start with the Prologue demo instead if you want to test the cat-vision switching, verify performance on your PC, or evaluate the tone before committing to the roughly one-year EA window. Both paths live on the same Steam store page under AppID 3949550.",
    },
    {
      id: "ea-sources",
      type: "prose",
      heading: "Sources",
      body: "- [Steam store page for 1666: Amsterdam](https://store.steampowered.com/app/3949550) - `official/store` - checked `2026-08-26` - Confirms EA launch date 2026-08-25, AppID 3949550, Prologue demo link, 11 supported UI languages, and self-publishing under Panache Digital Games.\n- [Panache Digital Games official site](https://panachedigital.com/) - `official/store` - checked `2026-08-26` - Developer identity, Patrice Désilets as creative director, self-publishing status, and the roughly one-year EA plan.\n- [IGN: 1666: Amsterdam preview](https://www.ign.com/articles/1666-amsterdam-preview) - `media/interview` - checked `2026-08-26` - Attributed description of the 15-hour starting main story and the multi-borough chapter structure inside the EA window.\n- [Eurogamer: 1666: Amsterdam preview](https://www.eurogamer.net/1666-amsterdam-preview) - `media/interview` - checked `2026-08-26` - Attributed confirmation of EA scope and that the Prologue demo is the intro leading into the EA main story.\n- [SteamDB listing for AppID 3949550](https://steamdb.info/app/3949550/) - `wiki/reference` - checked `2026-08-26` - Discovery only for the EA entry under AppID 3949550; not used as the sole fact source.",
    },
  ],
  faqIds: ["ea-start", "ea-window", "ea-main-story", "ea-demo-included", "ea-roadmap"],
  relatedPageIds: [
    "fixed-release-platforms-en-us",
    "fixed-prologue-demo-en-us",
    "fixed-multi-borough-chapters-en-us",
    "fixed-troubleshooting-en-us",
    "fixed-controls-en-us",
  ],
  schemaTypes: ["Article", "FAQPage", "BreadcrumbList"],
  sourceStatus: "official",
  lastReviewed: "2026-08-26",
};

export const storySettingPage: PageContent = {
  id: "fixed-story-setting-en-us",
  translationKey: "story-setting",
  locale: "en-US",
  routeKind: "fixed",
  slug: "story-setting",
  url: "/story-setting",
  pageType: "guides",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: "1666 Amsterdam Story and Setting: 1666, Dutch Golden Age",
  seoTitle: "1666 Amsterdam Story and Setting: 1666, Dutch Golden Age",
  metaDescription:
    "The 1666 Amsterdam story is set in 1666 during the Dutch Golden Age, in a dual day/night open city. See the premise, lore, and chapters.",
  summary:
    "The 1666 Amsterdam story is set in 1666 Amsterdam during the Dutch Golden Age, in a handcrafted dual day/night open city. The plot follows Noa Brooklyn, known as the Collector and raised by the Zaindaris, who investigates the Originals through Gablestone clues and confronts them during Esbat moon-night missions.",
  hero: {
    eyebrow: "Story & Setting",
    subtitle:
      "1666 Amsterdam in the Dutch Golden Age — a handcrafted dual day/night city where Noa Brooklyn, Aaron, and the Originals drive a multi-borough story.",
    ctas: [
      { label: "Noa Brooklyn", href: "/noa-brooklyn/" },
      { label: "Multi-borough chapters", href: "/chapters/" },
    ],
  },
  quickAnswer:
    "The 1666 Amsterdam story is set in 1666 Amsterdam during the Dutch Golden Age, in a handcrafted dual day/night open city. The plot follows Noa Brooklyn, known as the Collector and raised by the Zaindaris, who investigates the Originals through Gablestone clues and confronts them during Esbat moon-night missions. The game ships in a multi-borough chapter structure, with the Prologue as the first chapter and roughly 15 hours of main story at EA start.",
  keyFacts: [
    { label: "Time period", value: "1666, Dutch Golden Age" },
    { label: "Setting", value: "Handcrafted dual day/night Amsterdam" },
    { label: "Protagonist", value: "Noa Brooklyn (The Collector)" },
    { label: "Companion", value: "Aaron (1999 timeline cat)" },
    { label: "EA main story", value: "~15 hours at EA start" },
  ],
  modules: [
    {
      id: "story-quick-answer",
      type: "prose",
      heading: "Quick Answer",
      body: "The 1666 Amsterdam story is set in 1666 Amsterdam during the Dutch Golden Age, in a handcrafted dual day/night open city. The plot follows Noa Brooklyn, known as the Collector and raised by the Zaindaris, who investigates the Originals through Gablestone clues and confronts them during Esbat moon-night missions. The game ships in a multi-borough chapter structure, with the Prologue as the first chapter and roughly 15 hours of main story at EA start.",
    },
    {
      id: "story-premise",
      type: "prose",
      heading: "What is the 1666 Amsterdam story and time period?",
      body: "The 1666 Amsterdam story opens in 1666, the year the city's historic fire reshaped parts of its medieval center, and places that real-world moment inside a Dutch Golden Age setting. Panache Digital Games describes the city as handcrafted and dual-faced: a daytime Amsterdam where Noa Brooklyn walks, investigates, and reads the social surface, and a nighttime Amsterdam where the same streets carry a different threat layer. The dual day/night open city is the central canvas for the 1666 Amsterdam story, and every mechanic is built around what changes when the moon rises.\n\nThe protagonist is Noa Brooklyn, a character raised outside the city's human mainstream by the Zaindaris. The Zaindaris upbringing gives her the alias \"The Collector\" and ties her to folklore that the city's official institutions would rather ignore. Noa's investigation work happens in the day, with cat companion Aaron's cat-vision perspective available as a second playable layer during scouting and clue phases. That dual investigation is the spine of the day-side loop.",
      links: [
        {
          label: "Noa Brooklyn",
          href: "/noa-brooklyn/",
          description: "Protagonist profile and Collector alias.",
        },
        {
          label: "Aaron the cat companion",
          href: "/aaron-companion/",
          description: "Second playable character with cat-vision.",
        },
      ],
    },
    {
      id: "story-boroughs",
      type: "prose",
      heading: "How does the multi-borough chapter structure shape the setting?",
      body: "The 1666 Amsterdam story is delivered through a multi-borough chapter structure rather than a single open-world narrative. Each borough of the handcrafted 1666 Amsterdam city has its own story beat, its own cast of human-faced suspects, and its own set of Gablestone leads. The Prologue ships as the first chapter at EA launch, and the rest of the chapter list will roll out during the Steam Early Access window, which Panache Digital Games has framed at roughly one year. At EA start, players have roughly 15 hours of main story available, so the Prologue chapter alone is not the complete arc.\n\nBecause the chapter list is multi-borough, day-side exploration and night-side Esbat combat are interleaved at the borough level. Day loops feed clues into the borough's Gablestone board, and Esbat nights then close that board by forcing the marked human face to reveal its true form. IGN, Eurogamer, and the Steam store description all describe this as a per-borough loop, so a player moving from one borough to the next should expect a different social mix and a different set of human-faced suspects in each. Specific borough names, the full chapter list beyond the Prologue, and the exact EA chapter cadence have not been published as of 2026-08-26.",
    },
    {
      id: "story-cast",
      type: "prose",
      heading: "Cast, Languages, and Sources",
      body: "The setting also leans on a layered cast. Noa Brooklyn is the player character, Aaron is the second playable character and cat companion from the 1999 timeline, and the named suspects and Originals are met as borough residents before they are fought on Esbat nights. The 11 supported UI languages do not change the cast or the lore but do change the in-game text players will read while investigating. Source maps to the same Steam AppID 3949550 page and the Panache Digital Games official site, with IGN's preview and Eurogamer's preview as the strongest media context.\n\nThe Prologue demo is the earliest place players encounter this layered cast in playable form. The Forest Opening and Sacred Tree sequence introduces the Bateratze tarot cat companion system, the Library sequence frames the 1666 investigation loop as a clue puzzle, the 1999 Hotel scene drops Aaron into his own timeline as a cat, and the cat portal traversal stitches the 1666 and 1999 perspectives back together at the Sacred Tree.",
      links: [
        {
          label: "Prologue demo walkthrough",
          href: "/prologue-demo/",
          description: "Forest Opening, Sacred Tree Bateratze choice, Library clues, 1999 Hotel, cat portal.",
        },
      ],
    },
    {
      id: "story-sources",
      type: "prose",
      heading: "Sources",
      body: "- [Steam store page for 1666: Amsterdam](https://store.steampowered.com/app/3949550) - `official/store` - checked `2026-09-01` - EA launch date, Prologue demo, multi-borough chapter structure, ~15 hours of main story at EA start\n- [Panache Digital Games official site](https://panachedigital.com/) - `official/store` - checked `2026-09-01` - developer identity, 1666 Dutch Golden Age dual day/night handcrafted open city, Zaindaris-raised protagonist\n- [IGN: 1666: Amsterdam preview](https://www.ign.com/articles/1666-amsterdam-preview) - `media/interview` - checked `2026-09-01` - day-side investigation, Esbat night-side combat, multi-borough chapter framing\n- [Eurogamer: 1666: Amsterdam preview](https://www.eurogamer.net/1666-amsterdam-preview) - `media/interview` - checked `2026-09-01` - dual day/night city framing, Noa Brooklyn and Aaron perspective pairing\n- [9puz: 1666 Amsterdam Prologue walkthrough](https://9puz.com/4730-1666-amsterdam-prologue-walkthrough/) - `wiki/reference` - checked `2026-09-01` - Prologue Bateratze cat companion choice and Forest Opening / Sacred Tree / Library / 1999 Hotel / cat portal sequence used to anchor the cast in this section",
    },
  ],
  faqIds: [
    "story-year",
    "story-real",
    "story-ea-length",
    "story-day-night",
    "story-boroughs",
  ],
  relatedPageIds: [
    "fixed-noa-brooklyn-en-us",
    "fixed-aaron-companion-en-us",
    "fixed-multi-borough-chapters-en-us",
    "fixed-prologue-demo-en-us",
  ],
  schemaTypes: ["Article", "FAQPage", "BreadcrumbList"],
  sourceStatus: "official",
  lastReviewed: "2026-08-26",
};

export const noaBrooklynPage: PageContent = {
  id: "fixed-noa-brooklyn-en-us",
  translationKey: "noa-brooklyn",
  locale: "en-US",
  routeKind: "fixed",
  slug: "noa-brooklyn",
  url: "/noa-brooklyn",
  pageType: "guides",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: "1666 Amsterdam Noa Brooklyn: Collector Protagonist",
  seoTitle: "1666 Amsterdam Noa Brooklyn: Collector Protagonist",
  metaDescription:
    "1666 Amsterdam Noa Brooklyn is the player character and the Collector, raised by the Zaindaris. See her role, Aaron, and unannounced facts as of 2026-08-26.",
  summary:
    "1666 Amsterdam Noa Brooklyn is the player character and is known by the alias the Collector. She was raised outside the city's human mainstream by the Zaindaris, a community that gives her both her alias and her access to folklore the city's official institutions ignore.",
  hero: {
    eyebrow: "Character",
    subtitle:
      "The Collector raised by the Zaindaris. Day-side investigator, night-side Witchcraft combatant.",
    ctas: [
      { label: "Aaron the cat companion", href: "/aaron-companion/" },
      { label: "Story & setting", href: "/story-setting/" },
    ],
  },
  quickAnswer:
    "1666 Amsterdam Noa Brooklyn is the player character and is known by the alias the Collector. She was raised outside the city's human mainstream by the Zaindaris, a community that gives her both her alias and her access to folklore the city's official institutions ignore. Her day-side work is Gablestone investigation in the handcrafted 1666 Amsterdam city, and her night-side work is Esbat moon-night combat against the Originals using Witchcraft and Spellcasting. She plays alongside Aaron, a cat companion summoned from the 1999 timeline.",
  keyFacts: [
    { label: "Role", value: "Player character; The Collector" },
    { label: "Raised by", value: "The Zaindaris (outside the city institutions)" },
    { label: "Day-side loop", value: "Gablestone investigation" },
    { label: "Night-side loop", value: "Esbat moon-night combat with Witchcraft" },
    { label: "Companion", value: "Aaron (1999 timeline cat)" },
  ],
  modules: [
    {
      id: "noa-quick-answer",
      type: "prose",
      heading: "Quick Answer",
      body: "1666 Amsterdam Noa Brooklyn is the player character and is known by the alias the Collector. She was raised outside the city's human mainstream by the Zaindaris, a community that gives her both her alias and her access to folklore the city's official institutions ignore. Her day-side work is Gablestone investigation in the handcrafted 1666 Amsterdam city, and her night-side work is Esbat moon-night combat against the Originals using Witchcraft and Spellcasting. She plays alongside Aaron, a cat companion summoned from the 1999 timeline.",
    },
    {
      id: "noa-collector",
      type: "prose",
      heading: "Who is 1666 Amsterdam Noa Brooklyn and why is she called the Collector?",
      body: "Noa Brooklyn is the player character of 1666 Amsterdam and the face of the game's day and night loops. Panache Digital Games introduces her as The Collector, an alias tied to the Zaindaris community that raised her outside the city's official institutions. The Zaindaris upbringing is the reason 1666 Amsterdam Noa Brooklyn can read the social surface during the day and then walk into a different threat layer at night when the Esbat moon-night missions trigger.\n\nThe Collector name also explains how 1666 Amsterdam Noa Brooklyn uses Gablestone investigation. The Gablestone loop is the day-side clue board: each borough resident who is actually an Original leaves traces that the Collector can read because of her Zaindaris background. IGN's preview frames Gablestone as the investigation verb that pulls the city's human faces apart, and the Steam store description confirms that this loop feeds directly into Esbat moon-night combat. Without the Collector alias and the Zaindaris framing, the player would not have a reason to recognize which borough face is an Original.\n\nThe protagonist role also carries a visual identity rooted in 17th-century Amsterdam. The game is set during the Dutch Golden Age, so her clothing, social position, and the social friction she encounters while investigating all read against the city's historical reality. Eurogamer's preview and IGN's Prologue hands-on note that the dual day/night open city is built to make Noa's role as the Collector feel grounded rather than imported from a modern action framework, which is part of why the 1666 Amsterdam Noa Brooklyn character has become a recurring search suggestion.",
    },
    {
      id: "noa-playloop",
      type: "prose",
      heading: "How does Noa Brooklyn play alongside Aaron and the magic systems?",
      body: "The 1666 Amsterdam Noa Brooklyn character is built for two interlocking combat verbs. Day-side, she walks the borough and runs Gablestone investigation; night-side, she casts through the Witchcraft system during Esbat moon-night missions. The Spellcasting subsystem is integrated into Esbat combat, so the same character who reads clues by day becomes the combat lead by night, and her Zaindaris background is what gives her access to spells the rest of the city's residents cannot use. The Steam store page and IGN preview both describe this as a single character loop, not two separate protagonists.\n\nAaron is the second playable character and the cat companion 1666 Amsterdam Noa Brooklyn plays with. Aaron is a cat summoned from the 1999 timeline and offers a cat-vision perspective that switches out of Noa's body for scouting and clue work. That perspective switch is not a separate story arc for Aaron as of 2026-08-26: he complements 1666 Amsterdam Noa Brooklyn rather than replacing her, and his role is keyed to day-side investigation and access to spaces Noa cannot reach. IGN's Prologue hands-on preview describes the Aaron pairing as the same mission played from two bodies, not a parallel story.",
    },
    {
      id: "noa-scope",
      type: "callout",
      tone: "caution",
      title: "What remains unannounced as of 2026-08-26",
      body: "Noa's full character arc beyond the Zaindaris upbringing, the relationship between her Collector alias and the Originals, and her long-term endgame against the human-faced entities have not been published. The 1666 Amsterdam Noa Brooklyn role at EA launch is anchored by the Prologue chapter (2026-08-25) with about 15 hours of main story available and a roughly one-year EA plan.",
    },
    {
      id: "noa-sources",
      type: "prose",
      heading: "Sources",
      body: "- [Steam store page for 1666: Amsterdam](https://store.steampowered.com/app/3949550) - `official/store` - checked `2026-08-26` - protagonist Noa Brooklyn as the Collector, Witchcraft and Gablestone mechanics, EA launch date 2026-08-25\n- [Panache Digital Games official site](https://panachedigital.com/) - `official/store` - checked `2026-08-26` - Zaindaris-raised background, the Collector alias, dual day/night 1666 Amsterdam city\n- [IGN: 1666: Amsterdam Prologue hands-on preview](https://www.ign.com/articles/1666-amsterdam-prologue-hands-on-preview) - `media/interview` - checked `2026-08-26` - Noa and Aaron perspective pairing, Zaindaris framing\n- [Eurogamer: 1666: Amsterdam preview](https://www.eurogamer.net/1666-amsterdam-preview) - `media/interview` - checked `2026-08-26` - Noa Brooklyn as player character in a dual day/night city",
    },
  ],
  faqIds: ["noa-who", "noa-collector", "noa-only", "noa-magic", "noa-arc"],
  relatedPageIds: [
    "fixed-aaron-companion-en-us",
    "fixed-story-setting-en-us",
    "fixed-controls-en-us",
  ],
  schemaTypes: ["Article", "FAQPage", "BreadcrumbList"],
  sourceStatus: "official",
  lastReviewed: "2026-08-26",
};

export const aaronCompanionPage: PageContent = {
  id: "fixed-aaron-companion-en-us",
  translationKey: "aaron-companion",
  locale: "en-US",
  routeKind: "fixed",
  slug: "aaron-companion",
  url: "/aaron-companion",
  pageType: "guides",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: "1666 Amsterdam Aaron: Cat Companion and Cat Vision",
  seoTitle: "1666 Amsterdam Aaron: Cat Companion and Cat Vision",
  metaDescription:
    "1666 Amsterdam Aaron is the cat companion, brought from 1999 with cat-vision. See how Aaron pairs with Noa Brooklyn; unannounced facts as of 2026-08-26.",
  summary:
    "1666 Amsterdam Aaron is the cat companion and second playable character, brought in from the 1999 timeline with a cat-vision perspective switch. He is not a parallel protagonist; he pairs with Noa Brooklyn during day-side investigation and gives the player a different sensory layer for scouting Gablestone leads in the handcrafted 1666 Amsterdam city.",
  hero: {
    eyebrow: "Character",
    subtitle:
      "Cat companion from a 1999 timeline. Cat-vision perspective switch for day-side Gablestone scouting.",
    ctas: [
      { label: "Noa Brooklyn", href: "/noa-brooklyn/" },
      { label: "Story & setting", href: "/story-setting/" },
    ],
  },
  quickAnswer:
    "1666 Amsterdam Aaron is the cat companion and second playable character, brought in from the 1999 timeline with a cat-vision perspective switch. He is not a parallel protagonist; he pairs with Noa Brooklyn during day-side investigation and gives the player a different sensory layer for scouting Gablestone leads in the handcrafted 1666 Amsterdam city. Aaron's combat role, individual progression, and exact age in 1999 have not been detailed beyond his cat-vision identity, with most details unannounced as of 2026-08-26.",
  keyFacts: [
    { label: "Role", value: "Cat companion; second playable character" },
    { label: "Origin", value: "Summoned from a 1999 timeline" },
    { label: "Defining mechanic", value: "Cat-vision perspective switch" },
    { label: "Day loop role", value: "Scouting spaces Noa cannot reach" },
    { label: "Combat role", value: "Narrower than day-side role" },
  ],
  modules: [
    {
      id: "aaron-quick-answer",
      type: "prose",
      heading: "Quick Answer",
      body: "1666 Amsterdam Aaron is the cat companion and second playable character, brought in from the 1999 timeline with a cat-vision perspective switch. He is not a parallel protagonist; he pairs with Noa Brooklyn during day-side investigation and gives the player a different sensory layer for scouting Gablestone leads in the handcrafted 1666 Amsterdam city. Aaron's combat role, individual progression, and exact age in 1999 have not been detailed beyond his cat-vision identity, with most details unannounced as of 2026-08-26.",
    },
    {
      id: "aaron-origin",
      type: "prose",
      heading: "Who is 1666 Amsterdam Aaron and where does he come from?",
      body: "Aaron is the cat companion in 1666 Amsterdam, and Panache Digital Games frames him as a cat summoned from a 1999 timeline rather than a cat native to 1666. The 1999 origin is a deliberate lore hook that puts a 20th-century perspective inside the 17th-century city and gives the dual day/night open city a second playable body to inhabit. The Steam store description treats Aaron as a named character rather than a generic pet, and IGN's Prologue hands-on preview confirms that he is a fully playable second character with his own camera, movement, and sensory layer.\n\nBecause Aaron is the cat companion 1666 Amsterdam pairs with Noa Brooklyn, his role is keyed to investigation rather than to combat. Cat-vision is the defining mechanic for Aaron in 1666 Amsterdam: it is a perspective switch that changes what the player can see and reach during the day-side Gablestone loop. Borough interiors, alleyways, and high shelves are the kinds of spaces Noa Brooklyn cannot access as a human, and Aaron's cat body becomes the practical workaround. IGN's preview frames the pairing as \"one mission, two bodies\" rather than a parallel story, and that framing matches how 1666 Amsterdam Aaron is positioned on the Steam store page.\n\nThe lore that frames Aaron as a cat summoned from the 1999 timeline is also the reason he does not carry a 17th-century social identity. Noa Brooklyn is the player-facing human lead because she has to walk into 1666 Amsterdam's Dutch Golden Age social institutions; Aaron is the player-facing cat lead because he does not. Reddit threads and IGN previews both use the phrase \"cat companion\" when referring to him, which is the term players are most likely to search for when looking up 1666 Amsterdam Aaron.",
    },
    {
      id: "aaron-cat-vision",
      type: "prose",
      heading: "How does Aaron's cat-vision work and what is not yet announced?",
      body: "Aaron's cat-vision mechanic in 1666 Amsterdam is a perspective switch rather than a separate combat system. During the day-side Gablestone investigation loop, the player can move Aaron as a cat to scout spaces Noa Brooklyn cannot reach. Cat-vision is also a sensory layer: the IGN Prologue hands-on preview describes the Aaron perspective as giving the player different sight and movement cues than the Noa perspective, which is what makes his scouting role useful. The same preview also notes that the perspective switch is built into the mission flow rather than being a separate mode the player has to toggle manually.\n\nThe 1666 Amsterdam Aaron character does not appear to have a standalone combat role at EA launch. Esbat moon-night missions are framed around Noa Brooklyn and the Witchcraft / Spellcasting system, with the Originals' true forms as the night-side targets. Aaron's role during Esbat nights is therefore narrower than his day-side role, and most of his mechanical value is read during Gablestone investigation. The Steam store description supports that framing by listing Aaron as a companion and a perspective switch rather than as a parallel combat lead.",
    },
    {
      id: "aaron-unannounced",
      type: "callout",
      tone: "unknown",
      title: "What remains unannounced as of 2026-09-01",
      body: "His exact age in the 1999 timeline, his full upgrade tree, his named relationship to the Zaindaris, and whether he has a separate combat moveset during Esbat nights are all unannounced. The Steam store description, the Panache Digital Games official site, and IGN's previews are the strongest anchors for the current confirmed framing; the Reddit r/1666Amsterdam cat-choice discussion threads reflect community demand for more Aaron detail rather than official fact.",
    },
    {
      id: "aaron-prologue-link",
      type: "prose",
      heading: "Aaron in the Prologue Demo",
      body: "The Prologue demo on Steam is the first place players meet Aaron as a tarot-cat companion system rather than just a perspective switch. Noa commits to a Bateratze cat archetype at the Sacred Tree, and the 1999 Hotel sequence plays entirely as Aaron — the candles, dry leaves, and tapestry pickup beats are framed as a 1999 ritual scene rather than as 1666 gameplay. The cat portal traversal at the end of the Prologue is also the moment where Aaron's 1999 perspective and Noa's 1666 perspective are stitched back together, which is why the Prologue is the most direct hands-on preview of Aaron's role.",
      links: [
        {
          label: "Prologue demo walkthrough",
          href: "/prologue-demo/",
          description: "Bateratze choice, Library clues, 1999 Hotel ritual items, cat portal traversal.",
        },
      ],
    },
    {
      id: "aaron-sources",
      type: "prose",
      heading: "Sources",
      body: "- [Steam store page for 1666: Amsterdam](https://store.steampowered.com/app/3949550) - `official/store` - checked `2026-09-01` - Aaron as cat companion, 1999 timeline origin, cat-vision perspective, EA launch on 2026-08-25\n- [Panache Digital Games official site](https://panachedigital.com/) - `official/store` - checked `2026-09-01` - Aaron as named playable character, dual day/night 1666 Amsterdam city\n- [IGN: 1666: Amsterdam Prologue hands-on preview](https://www.ign.com/articles/1666-amsterdam-prologue-hands-on-preview) - `media/interview` - checked `2026-09-01` - perspective switch framing, day-side scouting role, one-mission-two-bodies pairing\n- [9puz: 1666 Amsterdam Prologue walkthrough](https://9puz.com/4730-1666-amsterdam-prologue-walkthrough/) - `wiki/reference` - checked `2026-09-01` - 1999 Hotel ritual items (candles, dry leaves, tapestry) and cat portal traversal sequence that uses Aaron's 1999 perspective\n- [Sportskeeda: 1666 Amsterdam Prologue walkthrough](https://widgets.sportskeeda.com/esports/1666-amsterdam-prologue-walkthrough) - `media/interview` - checked `2026-09-01` - tarot cat companion system context for the Bateratze choice at the Sacred Tree\n- [Reddit r/1666Amsterdam](https://www.reddit.com/r/1666Amsterdam/) - `community/video` - checked `2026-09-01` - community demand signal around Aaron's role, used here for terminology not for fact confirmation",
    },
  ],
  faqIds: ["aaron-who", "aaron-cat-vision", "aaron-playable", "aaron-esbat", "aaron-tree"],
  relatedPageIds: [
    "fixed-noa-brooklyn-en-us",
    "fixed-story-setting-en-us",
    "fixed-controls-en-us",
    "fixed-prologue-demo-en-us",
  ],
  schemaTypes: ["Article", "FAQPage", "BreadcrumbList"],
  sourceStatus: "official",
  lastReviewed: "2026-08-26",
};

export const theOriginalsPage: PageContent = {
  id: "fixed-the-originals-en-us",
  translationKey: "the-originals",
  locale: "en-US",
  routeKind: "fixed",
  slug: "the-originals",
  url: "/the-originals",
  pageType: "guides",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: "1666 Amsterdam Originals: Ancient Faction Behind Faces",
  seoTitle: "1666 Amsterdam Originals: Ancient Faction Behind Faces",
  metaDescription:
    "1666 Amsterdam Originals are ancient entities hidden behind human faces. See how Gablestone and Esbat reveal them and unannounced info as of 2026-08-26.",
  summary:
    "1666 Amsterdam Originals are ancient entities that hide behind human faces inside the city's Dutch Golden Age society. They are the central antagonist faction and the target of both of the game's day-night loops.",
  hero: {
    eyebrow: "Faction",
    subtitle:
      "Ancient entities hidden behind human faces. Target of the Gablestone day loop and the Esbat night loop.",
    ctas: [
      { label: "Esbat moon-night missions", href: "/esbat/" },
      { label: "Gablestone investigation", href: "/gablestone/" },
      { label: "Witchcraft", href: "/witchcraft/" },
    ],
  },
  quickAnswer:
    "1666 Amsterdam Originals are ancient entities that hide behind human faces inside the city's Dutch Golden Age society. They are the central antagonist faction and the target of both of the game's day-night loops. During the day, Gablestone investigation lets Noa Brooklyn identify which human faces are actually Originals; at night, Esbat moon-night missions force those marked faces to reveal and confront their true forms using the Witchcraft system. The full Originals roster, individual names, and powers have not been announced as of 2026-08-26.",
  keyFacts: [
    { label: "Faction type", value: "Ancient antagonist faction" },
    { label: "Disguise", value: "Human faces in Dutch Golden Age society" },
    { label: "Day loop", value: "Gablestone investigation identifies them" },
    { label: "Night loop", value: "Esbat moon-night combat reveals true forms" },
    { label: "Combat verb", value: "Witchcraft / Spellcasting" },
  ],
  modules: [
    {
      id: "orig-quick-answer",
      type: "prose",
      heading: "Quick Answer",
      body: "1666 Amsterdam Originals are ancient entities that hide behind human faces inside the city's Dutch Golden Age society. They are the central antagonist faction and the target of both of the game's day-night loops. During the day, Gablestone investigation lets Noa Brooklyn identify which human faces are actually Originals; at night, Esbat moon-night missions force those marked faces to reveal and confront their true forms using the Witchcraft system. The full Originals roster, individual names, and powers have not been announced as of 2026-08-26.",
    },
    {
      id: "orig-hide",
      type: "prose",
      heading: "What are the 1666 Amsterdam Originals and how do they hide?",
      body: "The Originals in 1666 Amsterdam are ancient entities that walk the handcrafted 1666 Amsterdam city behind human faces. Panache Digital Games describes them as the core antagonist faction: they are old, they are hidden in plain sight, and they have been part of the city's social surface long enough to read as ordinary residents. IGN's preview and the Steam store description both frame the Originals as the reason the dual day/night city exists at all. Without the Originals, the day loop would not need to investigate and the night loop would not need to fight.\n\nThe mechanism the Originals in 1666 Amsterdam use to stay hidden is the human-face mask itself. The Steam store page describes them as living inside the city's social institutions as neighbors, borough residents, and possibly officials. The mask is not a literal disguise in the cutscene sense; it is a social layer that the Originals can maintain because the city's official institutions do not recognize what is underneath. That framing makes the Originals harder to identify than a generic monster faction and gives the Gablestone investigation loop a reason to exist.\n\nThe Originals in 1666 Amsterdam are also why the protagonist is called the Collector. Noa Brooklyn's Zaindaris upbringing is what gives her the ability to read past the human faces the rest of the city accepts. Eurogamer's preview and IGN's preview both describe the Originals as a faction whose true forms can only be revealed through ritual conditions, which is why Esbat moon nights are the right time to confront them and why day-time investigation alone cannot close the case.",
    },
    {
      id: "orig-reveal",
      type: "prose",
      heading: "How do Gablestone and Esbat reveal the Originals in 1666 Amsterdam?",
      body: "The 1666 Amsterdam Originals are revealed through a two-step day-night loop. The first step is Gablestone investigation during the day. Noa Brooklyn walks the borough, collects clues, and reads the social traces that point at a specific human face being more than a human. The Gablestone board is the investigation verb, and it is the only way the player can mark which borough resident to confront later. The Steam store description and IGN preview both describe Gablestone as a free-choice investigation loop rather than a linear quest, which means the player chooses which Originals to chase first in each borough.\n\nThe second step is the Esbat moon-night mission. When the moon is right, the marked human faces drop their masks and the 1666 Amsterdam Originals reveal their true forms. The Esbat ritual is when the original entity is forced to show itself and when the player uses the Witchcraft / Spellcasting system to fight it. IGN's preview and the Steam store description both describe Esbat as a timed event system with moon-phase triggers rather than as something the player can summon at will, which is why the day-side Gablestone work has to be ready before the night falls.",
      links: [
        {
          label: "Esbat moon-night missions",
          href: "/esbat/",
          description: "The night-side ritual that reveals true forms.",
        },
        {
          label: "Gablestone investigation",
          href: "/gablestone/",
          description: "The day-side clue loop that feeds Esbat.",
        },
        {
          label: "Witchcraft and Spellcasting",
          href: "/witchcraft/",
          description: "The magic system used during Esbat fights.",
        },
      ],
    },
    {
      id: "orig-boroughs",
      type: "prose",
      heading: "Originals and the multi-borough chapter structure",
      body: "The 1666 Amsterdam Originals are also tied to the multi-borough chapter structure. Each borough has its own set of human-faced suspects and its own set of Gablestone leads, and the Originals confrontation in each borough is the chapter's payoff. Specific Original names, their powers, the Esbat calendar dates that trigger each confrontation, and the full Originals roster have not been announced as of 2026-08-26. Panache Digital Games and the Steam store description are the official anchors for the current confirmed framing; IGN's preview and Eurogamer's preview are the strongest media context.",
    },
    {
      id: "orig-sources",
      type: "prose",
      heading: "Sources",
      body: "- [Steam store page for 1666: Amsterdam](https://store.steampowered.com/app/3949550) - `official/store` - checked `2026-08-26` - Originals as ancient entities behind human faces, Gablestone and Esbat loops, EA launch on 2026-08-25\n- [Panache Digital Games official site](https://panachedigital.com/) - `official/store` - checked `2026-08-26` - Originals faction framing, dual day/night 1666 Amsterdam city\n- [IGN: 1666: Amsterdam preview](https://www.ign.com/articles/1666-amsterdam-preview) - `media/interview` - checked `2026-08-26` - Gablestone day-side investigation, Esbat night-side confrontation, true form reveals\n- [Eurogamer: 1666: Amsterdam preview](https://www.eurogamer.net/1666-amsterdam-preview) - `media/interview` - checked `2026-08-26` - Originals as hidden faction, ritual condition for true form reveal",
    },
  ],
  faqIds: ["orig-what", "orig-identify", "orig-reveal", "orig-witchcraft", "orig-roster"],
  relatedPageIds: [
    "fixed-esbat-moon-missions-en-us",
    "fixed-gablestone-investigation-en-us",
    "fixed-witchcraft-spellcasting-en-us",
  ],
  schemaTypes: ["Article", "FAQPage", "BreadcrumbList"],
  sourceStatus: "official",
  lastReviewed: "2026-08-26",
};

export const witchcraftSpellcastingPage: PageContent = {
  id: "fixed-witchcraft-spellcasting-en-us",
  translationKey: "witchcraft-spellcasting",
  locale: "en-US",
  routeKind: "fixed",
  slug: "witchcraft",
  url: "/witchcraft",
  pageType: "guides",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: "1666 Amsterdam Witchcraft and Spellcasting System Explained",
  seoTitle: "1666 Amsterdam Witchcraft and Spellcasting System Explained",
  metaDescription:
    "1666 Amsterdam witchcraft is the core magic system for Esbat combat. See how Witchcraft fits the loop and what is unannounced as of 2026-08-26.",
  summary:
    "1666 Amsterdam witchcraft is the core magic verb. According to the Steam store page and the IGN preview, Witchcraft and Spellcasting is what Noa Brooklyn uses against The Originals, while Gablestone investigation gathers clues during the day and Esbat moon-night missions confront those entities at night.",
  hero: {
    eyebrow: "System",
    subtitle:
      "The core magic verb for Esbat combat against The Originals. Spell list, tier progression, and resource specifics are unannounced.",
    ctas: [
      { label: "Esbat moon-night missions", href: "/esbat/" },
      { label: "The Originals", href: "/the-originals/" },
    ],
  },
  quickAnswer:
    "1666 Amsterdam witchcraft is the core magic verb. According to the Steam store page and the IGN preview, Witchcraft and Spellcasting is what Noa Brooklyn uses against The Originals, while Gablestone investigation gathers clues during the day and Esbat moon-night missions confront those entities at night. The full spell list, tier progression, and resource specifics are not announced as of 2026-08-26.",
  keyFacts: [
    { label: "System role", value: "Core magic verb in combat" },
    { label: "Used by", value: "Noa Brooklyn (protagonist)" },
    { label: "Used during", value: "Esbat moon-night missions" },
    { label: "Targets", value: "The Originals' true forms" },
    { label: "Spell specifics", value: "Not announced as of 2026-08-26" },
  ],
  modules: [
    {
      id: "witch-quick-answer",
      type: "prose",
      heading: "Quick Answer",
      body: "1666 Amsterdam witchcraft is the core magic verb. According to the Steam store page and the IGN preview, Witchcraft and Spellcasting is what Noa Brooklyn uses against The Originals, while Gablestone investigation gathers clues during the day and Esbat moon-night missions confront those entities at night. The full spell list, tier progression, and resource specifics are not announced as of 2026-08-26.",
    },
    {
      id: "witch-combat",
      type: "prose",
      heading: "How 1666 Amsterdam witchcraft fits combat against The Originals",
      body: "The Steam store page describes 1666 Amsterdam witchcraft as the core magic system protagonist Noa Brooklyn uses against The Originals. The IGN preview and the Eurogamer preview both frame it as the moment-to-moment combat layer: spells replace or augment melee strikes, and the system is what turns a long investigation lead into a fight against an ancient entity hidden behind a human face.\n\nTwo design notes appear repeatedly in the official sources. First, Witchcraft and Spellcasting is positioned as a defining system rather than a side ability, so every Esbat encounter assumes the protagonist has access to it. Second, Panache Digital Games describes the city itself as a handcrafted open world with a day-and-night split, which means witchcraft combat is not always available. Esbat moon nights are when you actually fight the true form. Daylight hours are reserved for Gablestone investigation.",
    },
    {
      id: "witch-loop",
      type: "prose",
      heading: "How witchcraft connects to The Originals, Gablestone, and Esbat",
      body: "The three combat and investigation systems in 1666 Amsterdam form a single loop. Gablestone investigation runs during the day and produces clues about which human faces hide The Originals. Esbat moon-night missions open once the moon phase triggers, and you identify the true form of an Original, mark it, and fight it. Witchcraft and Spellcasting is the magic you cast during that fight. Without witchcraft, the Esbat encounter has no offensive layer beyond melee, and without Esbat the Gablestone clue loop never resolves into a confrontation.\n\nThis is why the IGN preview describes the moment an Esbat moon night lands and an Original's mask cracks as the moment witchcraft becomes useful. The Steam store page links Witchcraft and Spellcasting directly to combat against The Originals, and the same description ties Gablestone investigation to free-choice task completion during the day. The systems are not separate subsystems but phases of the same play loop.",
    },
    {
      id: "witch-unannounced",
      type: "callout",
      tone: "unknown",
      title: "What remains unannounced as of 2026-08-26",
      body: "Full spell list, tier progression, resource or mana economy, cooldown rules, whether Aaron uses the same magic verb, and how witchcraft balance will change during the EA window. Panache Digital Games has not published a system deep-dive at the Early Access launch on August 25, 2026.",
    },
    {
      id: "witch-sources",
      type: "prose",
      heading: "Sources",
      body: "- [Steam store page for 1666: Amsterdam](https://store.steampowered.com/app/3949550) - `official/store` - checked `2026-08-26` - Witchcraft and Spellcasting as the core magic system, EA launch date 2026-08-25, Prologue demo availability, Panache Digital Games developer attribution, Gablestone day-side loop.\n- [Panache Digital Games official site](https://panachedigital.com/) - `official/store` - checked `2026-08-26` - Developer attribution and the day/night handcrafted city framing referenced in the magic system context.\n- [IGN: 1666: Amsterdam preview](https://www.ign.com/articles/1666-amsterdam-preview) - `media/interview` - checked `2026-08-26` - Attributed statements about witchcraft as the combat layer, Esbat moon nights, and Original encounters.\n- [Eurogamer: 1666: Amsterdam preview](https://www.eurogamer.net/1666-amsterdam-preview) - `media/interview` - checked `2026-08-26` - Attributed statements about the magic system and dual day/night city design.",
    },
  ],
  faqIds: ["witch-only", "witch-unlock", "witch-day", "witch-aaron", "witch-balance"],
  relatedPageIds: [
    "fixed-esbat-moon-missions-en-us",
    "fixed-the-originals-en-us",
    "fixed-controls-en-us",
  ],
  schemaTypes: ["Article", "FAQPage", "BreadcrumbList"],
  sourceStatus: "official",
  lastReviewed: "2026-08-26",
};

export const gablestoneInvestigationPage: PageContent = {
  id: "fixed-gablestone-investigation-en-us",
  translationKey: "gablestone-investigation",
  locale: "en-US",
  routeKind: "fixed",
  slug: "gablestone",
  url: "/gablestone",
  pageType: "guides",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: "1666 Amsterdam Gablestone Investigation: How It Works",
  seoTitle: "1666 Amsterdam Gablestone Investigation: How It Works",
  metaDescription:
    "1666 Amsterdam Gablestone is the day-side investigation loop. See how it reveals The Originals behind human faces and what is unannounced as of 2026-08-26.",
  summary:
    "1666 Amsterdam Gablestone is the day-side clue system. According to the Steam store page and the IGN preview, Gablestone lets you track clues and use free-choice task completion during daylight hours, building the case that a given human face actually hides one of The Originals.",
  hero: {
    eyebrow: "System",
      subtitle:
        "Day-side clue loop with free-choice task completion. Feeds the Esbat moon-night trigger.",
    ctas: [
      { label: "Esbat moon-night missions", href: "/esbat/" },
      { label: "The Originals", href: "/the-originals/" },
    ],
  },
  quickAnswer:
    "1666 Amsterdam Gablestone is the day-side clue system. According to the Steam store page and the IGN preview, Gablestone lets you track clues and use free-choice task completion during daylight hours, building the case that a given human face actually hides one of The Originals. Once a clue trail is mature, an Esbat moon night triggers and you confront the entity using witchcraft. The full Gablestone clue list and outcome table are not announced as of 2026-08-26.",
  keyFacts: [
    { label: "Loop", value: "Day-side investigation" },
    { label: "Mechanic", value: "Free-choice task completion" },
    { label: "Goal", value: "Identify Originals behind human faces" },
    { label: "Downstream", value: "Feeds Esbat moon-night trigger" },
    { label: "Clue specifics", value: "Not announced as of 2026-08-26" },
  ],
  modules: [
    {
      id: "gab-quick-answer",
      type: "prose",
      heading: "Quick Answer",
      body: "1666 Amsterdam Gablestone is the day-side clue system. According to the Steam store page and the IGN preview, Gablestone lets you track clues and use free-choice task completion during daylight hours, building the case that a given human face actually hides one of The Originals. Once a clue trail is mature, an Esbat moon night triggers and you confront the entity using witchcraft. The full Gablestone clue list and outcome table are not announced as of 2026-08-26.",
    },
    {
      id: "gab-daynight",
      type: "prose",
      heading: "How 1666 Amsterdam Gablestone fits the day-and-night play loop",
      body: "The Steam store page describes 1666 Amsterdam Gablestone as the day-side investigation system that pairs with Esbat moon-night missions. Panache Digital Games frames the city as a handcrafted open world with a true day-and-night split, and Gablestone is the activity you perform during the day: you read the city, identify which human faces might be hiding The Originals, and decide which tasks to complete to harden that theory.\n\nFree-choice task completion is the verb the store page keeps repeating. Gablestone is not a strict quest log; you can pick the order in which you close out tasks tied to a suspect. That means two players can arrive at the same Esbat trigger via different routes, but the system still pushes toward the same nighttime confrontation once the clue chain is mature enough. The IGN preview describes Gablestone as the loop that gives Esbat its meaning, since without a Gablestone case the moon-night fight has nothing to fight.",
    },
    {
      id: "gab-originals",
      type: "prose",
      heading: "How Gablestone reveals The Originals and feeds Esbat",
      body: "The Originals are the ancient entities Gablestone is designed to expose. According to the Steam store page, The Originals are hidden behind human faces in 1666 Amsterdam, and Gablestone is what peels that mask back. The Eurogamer preview and the IGN preview both describe the Gablestone-to-Esbat handoff as the moment the day loop turns into a night loop: Gablestone produces a suspect, Esbat identifies the true form and lets you mark and fight it.\n\nThis is also where the three named systems on the Steam store page meet. Gablestone is the day-side investigation verb. Esbat is the timed ritual night that opens once the moon phase triggers. Witchcraft and Spellcasting is the magic you cast during the Esbat fight. Gablestone does not cast spells; it accumulates the evidence that makes the Esbat confrontation possible. Treat any third-party Gablestone walkthrough or outcome chart as speculative until Panache Digital Games publishes one.",
    },
    {
      id: "gab-unannounced",
      type: "callout",
      tone: "unknown",
      title: "What remains unannounced as of 2026-08-26",
      body: "Full Gablestone clue list, exact task types, wrong-guess consequences, whether multiple suspects can run in parallel, whether Aaron's cat-vision perspective contributes to Gablestone, and the EA roadmap for new clue types. The Steam store page and the Panache Digital Games site cover the existence of the system and its role in the loop, but the system specifics remain unpublished.",
    },
    {
      id: "gab-sources",
      type: "prose",
      heading: "Sources",
      body: "- [Steam store page for 1666: Amsterdam](https://store.steampowered.com/app/3949550) - `official/store` - checked `2026-08-26` - Gablestone as the day-side investigation system, free-choice task completion, link to The Originals and Esbat, EA launch date 2026-08-25.\n- [Panache Digital Games official site](https://panachedigital.com/) - `official/store` - checked `2026-08-26` - Developer attribution and the day/night handcrafted city framing that hosts Gablestone.\n- [IGN: 1666: Amsterdam preview](https://www.ign.com/articles/1666-amsterdam-preview) - `media/interview` - checked `2026-08-26` - Attributed statements about Gablestone feeding Esbat and identifying The Originals.\n- [Eurogamer: 1666: Amsterdam preview](https://www.eurogamer.net/1666-amsterdam-preview) - `media/interview` - checked `2026-08-26` - Attributed statements about the day-to-night handoff between Gablestone and Esbat.",
    },
  ],
  faqIds: ["gab-what", "gab-direct", "gab-choice", "gab-aaron", "gab-ea"],
  relatedPageIds: [
    "fixed-esbat-moon-missions-en-us",
    "fixed-the-originals-en-us",
    "fixed-controls-en-us",
  ],
  schemaTypes: ["Article", "FAQPage", "BreadcrumbList"],
  sourceStatus: "official",
  lastReviewed: "2026-08-26",
};

export const esbatMoonMissionsPage: PageContent = {
  id: "fixed-esbat-moon-missions-en-us",
  translationKey: "esbat-moon-missions",
  locale: "en-US",
  routeKind: "fixed",
  slug: "esbat",
  url: "/esbat",
  pageType: "guides",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: "1666 Amsterdam Esbat Moon-Night Missions: How They Work",
  seoTitle: "1666 Amsterdam Esbat Moon-Night Missions: How They Work",
  metaDescription:
    "1666 Amsterdam Esbat moon-night missions are the timed ritual nights where you mark The Originals. See what is unannounced as of 2026-08-26.",
  summary:
    "1666 Amsterdam Esbat is the moon-night mission system. According to the Steam store page and the IGN preview, Esbat opens when the moon phase triggers, and you identify the true form of an Original, mark it, and fight it using Witchcraft.",
  hero: {
    eyebrow: "System",
    subtitle:
      "Moon-night ritual where The Originals reveal their true forms. Triggered by the moon phase after Gablestone evidence matures.",
    ctas: [
      { label: "The Originals", href: "/the-originals/" },
      { label: "Gablestone investigation", href: "/gablestone/" },
      { label: "Witchcraft", href: "/witchcraft/" },
    ],
  },
  quickAnswer:
    "1666 Amsterdam Esbat is the moon-night mission system. According to the Steam store page and the IGN preview, Esbat opens when the moon phase triggers, and you identify the true form of an Original, mark it, and fight it using Witchcraft. Esbat is the night-side counterpart to Gablestone day-side investigation, and the only time the masked faces behind The Originals crack open. The full Esbat calendar and ritual details are not announced as of 2026-08-26.",
  keyFacts: [
    { label: "Loop", value: "Moon-night ritual" },
    { label: "Trigger", value: "Moon phase after Gablestone evidence matures" },
    { label: "Action", value: "Identify, mark, fight the true form of an Original" },
    { label: "Magic", value: "Witchcraft / Spellcasting" },
    { label: "Calendar", value: "Not announced as of 2026-08-26" },
  ],
  modules: [
    {
      id: "esbat-quick-answer",
      type: "prose",
      heading: "Quick Answer",
      body: "1666 Amsterdam Esbat is the moon-night mission system. According to the Steam store page and the IGN preview, Esbat opens when the moon phase triggers, and you identify the true form of an Original, mark it, and fight it using Witchcraft. Esbat is the night-side counterpart to Gablestone day-side investigation, and the only time the masked faces behind The Originals crack open. The full Esbat calendar and ritual details are not announced as of 2026-08-26.",
    },
    {
      id: "esbat-trigger",
      type: "prose",
      heading: "How 1666 Amsterdam Esbat triggers after Gablestone investigation",
      body: "The Steam store page describes Esbat as the moon-night mission system that opens once Gablestone day-side investigation has produced enough evidence. According to the store page and the Panache Digital Games official site, the city runs on a true day-and-night split, and Esbat is what happens during the night half of that split. The IGN preview and the Eurogamer preview both describe Esbat as a ritual night rather than a free-roam sandbox moment: there is a window, and you have to act inside it.\n\nGablestone is the upstream system. Once the Gablestone clue trail on a suspect is mature, Esbat is the system that lets you identify the true form of an Original, mark it, and engage. The IGN preview frames the Esbat moment as the point where the mask on an Original cracks, which is the visual confirmation that the day-side investigation was right. Without Gablestone evidence, Esbat does not have a target; without Esbat, the Gablestone case has nowhere to resolve.",
    },
    {
      id: "esbat-combat",
      type: "prose",
      heading: "How Esbat combat uses witchcraft against The Originals",
      body: "Esbat is the offensive moment of the play loop. According to the Steam store page, you fight The Originals using Witchcraft and Spellcasting during Esbat nights. The store page ties the three named systems together explicitly: Gablestone investigation runs during the day with free-choice task completion, Esbat moon-night missions trigger on the moon phase, and Witchcraft and Spellcasting is the magic you cast during the fight.\n\nTwo implications follow. First, Esbat is the only window where the Witchcraft system has a purpose; ordinary enemies can be handled with melee or ranged weapons, but only Originals demand the magic verb. Second, Esbat encounters presume a Gablestone case has already pointed at the right suspect. The IGN preview describes this as the moment the investigation pays off, which is also the moment Witchcraft becomes essential rather than optional.",
    },
    {
      id: "esbat-unannounced",
      type: "callout",
      tone: "unknown",
      title: "What remains unannounced as of 2026-08-26",
      body: "Esbat calendar dates, number of Esbat nights per chapter, length of each ritual window, full Originals roster, individual Original powers, spell loadout available during Esbat, whether Aaron's 1999 cat-vision perspective plays a role during Esbat nights, and whether Esbat outcomes branch based on Gablestone accuracy.",
    },
    {
      id: "esbat-sources",
      type: "prose",
      heading: "Sources",
      body: "- [Steam store page for 1666: Amsterdam](https://store.steampowered.com/app/3949550) - `official/store` - checked `2026-08-26` - Esbat moon-night mission system, moon-phase trigger, link to Gablestone and Witchcraft, EA launch date 2026-08-25, 11 supported UI languages.\n- [Panache Digital Games official site](https://panachedigital.com/) - `official/store` - checked `2026-08-26` - Developer attribution and the day/night handcrafted city framing that hosts Esbat.\n- [IGN: 1666: Amsterdam preview](https://www.ign.com/articles/1666-amsterdam-preview) - `media/interview` - checked `2026-08-26` - Attributed statements about Esbat nights, the mask-cracking moment, and Witchcraft combat against Originals.\n- [Eurogamer: 1666: Amsterdam preview](https://www.eurogamer.net/1666-amsterdam-preview) - `media/interview` - checked `2026-08-26` - Attributed statements about the ritual-night framing and the day-to-night handoff between Gablestone and Esbat.",
    },
  ],
  faqIds: ["esbat-what", "esbat-gab", "esbat-witch", "esbat-cal", "esbat-skip"],
  relatedPageIds: [
    "fixed-the-originals-en-us",
    "fixed-gablestone-investigation-en-us",
    "fixed-witchcraft-spellcasting-en-us",
    "fixed-troubleshooting-en-us",
    "fixed-controls-en-us",
  ],
  schemaTypes: ["Article", "FAQPage", "BreadcrumbList"],
  sourceStatus: "official",
  lastReviewed: "2026-08-26",
};

export const multiBoroughChaptersPage: PageContent = {
  id: "fixed-multi-borough-chapters-en-us",
  translationKey: "multi-borough-chapters",
  locale: "en-US",
  routeKind: "fixed",
  slug: "chapters",
  url: "/chapters",
  pageType: "guides",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: "1666 Amsterdam Chapters: Multi-Borough Structure and EA Roadmap",
  seoTitle: "1666 Amsterdam Chapters: Multi-Borough Structure and EA Roadmap",
  metaDescription:
    "1666 Amsterdam chapters use a multi-borough structure. The Prologue is chapter one. See EA roadmap, ~15 hours of main story, and unannounced info as of 2026-08-26.",
  summary:
    "The 1666 Amsterdam chapters use a multi-borough chapter structure rather than a single open-world arc. The Prologue is the first chapter and ships at EA launch on 2026-08-25, with about 15 hours of main story at EA start and a roughly one-year EA window.",
  hero: {
    eyebrow: "Chapters & Roadmap",
    subtitle:
      "Prologue ships at EA launch; the multi-borough structure expands across the year-long EA window.",
    ctas: [
      { label: "Early Access FAQ", href: "/early-access/" },
      { label: "Story & setting", href: "/story-setting/" },
    ],
  },
  quickAnswer:
    "The 1666 Amsterdam chapters use a multi-borough chapter structure rather than a single open-world arc. The Prologue is the first chapter and ships at EA launch on 2026-08-25, with about 15 hours of main story at EA start and a roughly one-year EA window. Each chapter is anchored to a different borough and runs the day-night pattern of Gablestone investigation and Esbat moon-night combat. Borough names, the full chapter list, and EA cadence have not been announced as of 2026-08-26.",
  keyFacts: [
    { label: "Chapter 1", value: "Prologue (shipped at EA launch 2026-08-25)" },
    { label: "Structure", value: "Multi-borough chapter layout" },
    { label: "EA main story", value: "~15 hours at EA start" },
    { label: "EA window", value: "Roughly 1 year" },
    { label: "Borough names", value: "Not announced as of 2026-08-26" },
  ],
  modules: [
    {
      id: "chap-quick-answer",
      type: "prose",
      heading: "Quick Answer",
      body: "The 1666 Amsterdam chapters use a multi-borough chapter structure rather than a single open-world arc. The Prologue is the first chapter and ships at EA launch on 2026-08-25, with about 15 hours of main story at EA start and a roughly one-year EA window. Each chapter is anchored to a different borough and runs the day-night pattern of Gablestone investigation and Esbat moon-night combat. Borough names, the full chapter list, and EA cadence have not been announced as of 2026-08-26.",
    },
    {
      id: "chap-structure",
      type: "prose",
      heading: "How is the 1666 Amsterdam chapters structure organized across boroughs?",
      body: "The 1666 Amsterdam chapters are organized by borough rather than by a single linear timeline. Each borough of the handcrafted 1666 Amsterdam city is the anchor for one chapter, and each chapter runs the same day-night pattern: Gablestone investigation during the day to identify Originals, and Esbat moon-night missions at night to confront their true forms with the Witchcraft system. The Steam EA FAQ and IGN's preview both describe the chapter list as borough-based, which is why the multi-borough framing matters for how the game is paced.\n\nThe multi-borough chapter structure is also why the Prologue is positioned as chapter one. The Prologue ships at EA launch on 2026-08-25, and Panache Digital Games has framed it as the entry point into the broader multi-borough story. IGN's preview and Eurogamer's preview describe the Prologue as setting up the day-night loop and the Originals framing rather than as a complete arc, which is consistent with a roughly 15-hour main story at EA start and additional chapters delivered over the EA window.\n\nEach borough chapter of the 1666 Amsterdam chapter list is expected to carry its own cast of human-faced suspects, its own Gablestone clue board, and its own Esbat confrontation. The Steam store description and IGN preview both support the per-borough framing, and the multi-borough structure is the reason the day loop and the night loop are interleaved rather than separated. The player's progression through the 1666 Amsterdam chapters is therefore tied to moving from borough to borough, not to a single escalating main story.",
    },
    {
      id: "chap-roadmap",
      type: "prose",
      heading: "What is the 1666 Amsterdam EA roadmap and chapter cadence?",
      body: "The 1666 Amsterdam EA roadmap is the plan Panache Digital Games has set for shipping additional chapters during the Steam Early Access window. EA launch was 2026-08-25 with the Prologue chapter, roughly 15 hours of main story, and a roughly one-year EA plan. The Steam EA FAQ frames the EA roadmap as a progressive release of new chapters and borough content rather than a fixed content drop, and IGN's preview describes the EA roadmap as a story-driven rollout that will expand the multi-borough structure over time.\n\nThe 1666 Amsterdam EA roadmap also has practical implications for when players should expect new chapters. The roughly one-year EA plan means that new chapters and borough content are expected to ship throughout the EA window, but the exact chapter cadence, the post-EA retail scope, and any post-EA price change have not been announced as of 2026-09-01. The Steam EA FAQ is the official anchor for the roughly one-year plan, and IGN's preview and Eurogamer's preview add the strongest media context for the EA roadmap framing.\n\nPlayers looking up the 1666 Amsterdam chapter list should also note what the multi-borough structure does to length. Because each chapter is borough-anchored, the total main story length is not the 15 hours at EA start plus the same again per chapter; it is a borough-by-borough progression whose final scope depends on how many chapters Panache Digital Games ships during and after the EA window. The Steam EA FAQ, the Steam store page description, and the Panache Digital Games official site are the official anchors for the current confirmed facts; IGN's preview and Eurogamer's preview are the strongest media context.\n\nFor players who want to see the Prologue chapter in motion before buying the EA pass, the free Steam Prologue demo walks the same Forest Opening, Sacred Tree, Library, 1999 Hotel, and cat portal sequence that anchors chapter one, with the Bateratze tarot cat companion choice as the Prologue's main long-tail decision.",
      links: [
        {
          label: "Prologue demo walkthrough",
          href: "/prologue-demo/",
          description: "Free Steam demo covering the chapter-one Prologue and the Bateratze choice.",
        },
      ],
    },
    {
      id: "chap-sources",
      type: "prose",
      heading: "Sources",
      body: "- [Steam store page for 1666: Amsterdam](https://store.steampowered.com/app/3949550) - `official/store` - checked `2026-09-01` - Prologue as chapter one, EA launch date 2026-08-25, multi-borough chapter structure, ~15 hours of main story\n- [Panache Digital Games official site](https://panachedigital.com/) - `official/store` - checked `2026-09-01` - EA roadmap framing, multi-borough 1666 Amsterdam city, Panache self-publishing\n- [IGN: 1666: Amsterdam preview](https://www.ign.com/articles/1666-amsterdam-preview) - `media/interview` - checked `2026-09-01` - EA roadmap, multi-borough chapter framing, Prologue-as-entry-point\n- [Eurogamer: 1666: Amsterdam preview](https://www.eurogamer.net/1666-amsterdam-preview) - `media/interview` - checked `2026-09-01` - Prologue as opening, day-night loop per chapter, EA rollout framing\n- [9puz: 1666 Amsterdam Prologue walkthrough](https://9puz.com/4730-1666-amsterdam-prologue-walkthrough/) - `wiki/reference` - checked `2026-09-01` - Chapter-one Prologue milestone order referenced in the chapters roadmap context",
    },
  ],
  faqIds: ["chap-first", "chap-ea-length", "chap-ea-window", "chap-boroughs", "chap-total"],
  relatedPageIds: [
    "fixed-early-access-faq-en-us",
    "fixed-story-setting-en-us",
    "fixed-prologue-demo-en-us",
  ],
  schemaTypes: ["Article", "FAQPage", "BreadcrumbList"],
  sourceStatus: "official",
  lastReviewed: "2026-08-26",
};

export const patriceDesiletsLegacyPage: PageContent = {
  id: "fixed-patrice-desilets-legacy-en-us",
  translationKey: "patrice-desilets-legacy",
  locale: "en-US",
  routeKind: "fixed",
  slug: "patrice-desilets",
  url: "/patrice-desilets",
  pageType: "guides",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: "1666 Amsterdam Patrice Désilets: Legacy and New IP",
  seoTitle: "1666 Amsterdam Patrice Désilets: Legacy and New IP",
  metaDescription:
    "1666 Amsterdam Patrice Désilets is a new IP at Panache Digital Games. See why it is not an Assassin's Creed sequel and what is unannounced as of 2026-08-26.",
  summary:
    "1666 Amsterdam Patrice Désilets is the creative director's new IP at Panache Digital Games. He previously directed Assassin's Creed and Assassin's Creed II at Ubisoft and is the creative director of Prince of Palestine at the same studio.",
  hero: {
    eyebrow: "Creator Context",
    subtitle:
      "Creative director at Panache Digital Games, creator lineage at Ubisoft and Panache. 1666 Amsterdam is a new IP.",
    ctas: [{ label: "Press coverage", href: "/press-coverage/" }],
  },
  quickAnswer:
    "1666 Amsterdam Patrice Désilets is the creative director's new IP at Panache Digital Games. He previously directed Assassin's Creed and Assassin's Creed II at Ubisoft and is the creative director of Prince of Palestine at the same studio. 1666 Amsterdam is not a sequel or remake of those prior titles, and any gameplay overlap with Prince of Palestine or Assassin's Creed is unannounced as of 2026-08-26.",
  keyFacts: [
    { label: "Role", value: "Creative director at Panache Digital Games" },
    { label: "Studio", value: "Panache Digital Games (self-publisher)" },
    { label: "Prior Ubisoft credits", value: "Assassin's Creed, Assassin's Creed II" },
    { label: "Parallel project", value: "Prince of Palestine at same studio" },
    { label: "Gameplay overlap", value: "Not announced as of 2026-08-26" },
  ],
  modules: [
    {
      id: "pat-quick-answer",
      type: "prose",
      heading: "Quick Answer",
      body: "1666 Amsterdam Patrice Désilets is the creative director's new IP at Panache Digital Games. He previously directed Assassin's Creed and Assassin's Creed II at Ubisoft and is the creative director of Prince of Palestine at the same studio. 1666 Amsterdam is not a sequel or remake of those prior titles, and any gameplay overlap with Prince of Palestine or Assassin's Creed is unannounced as of 2026-08-26.",
    },
    {
      id: "pat-panache",
      type: "prose",
      heading: "How 1666 Amsterdam Patrice Désilets leads the new IP at Panache Digital Games",
      body: "The Steam store page lists 1666 Amsterdam as developed by Panache Digital Games with Patrice Désilets as creative director. The Panache Digital Games official site and the Panache Digital Games team page confirm his role on the project and at the studio. The IGN interview with Patrice Désilets covers the game directly and is the cleanest media anchor for his creative-director position on 1666 Amsterdam.\n\nThe studio framing matters here. Panache Digital Games is a small independent team that previously shipped Ancestors: The Humankind Odyssey. Prince of Palestine is also in development at Panache Digital Games under Désilets, and the IGN interview treats 1666 Amsterdam as a parallel project rather than an offshoot of Prince of Palestine. The Panache Digital Games site carries the official developer attribution for both titles.",
    },
    {
      id: "pat-ac",
      type: "prose",
      heading: "Why 1666 Amsterdam is a new IP, not an Assassin's Creed sequel",
      body: "Patrice Désilets directed Assassin's Creed and Assassin's Creed II at Ubisoft before founding his own path, and that creator lineage is one reason 1666 Amsterdam draws search interest. According to the Wikipedia reference for Patrice Désilets and the Panache Digital Games official site, his prior work is the public record of who he is. The Steam store page, the IGN interview, and the eurogamer preview all position 1666 Amsterdam as a new IP set in a handcrafted 1666 Amsterdam with a protagonist who is not Altaïr, Ezio, or any returning Assassin's Creed character.\n\nThe IGN interview explicitly treats 1666 Amsterdam as a standalone project rather than a continuation of his Ubisoft work. Noa Brooklyn is the protagonist, the setting is 17th-century Amsterdam rather than the Holy Land, and the combat verbs are Witchcraft, Gablestone, and Esbat rather than the parkour and hidden-blade loop of Assassin's Creed. The Panache Digital Games team page lists him as creative director of 1666 Amsterdam, which is the most reliable statement of his current role.\n\nThe legacy context here is for clarification, not as a current-game fact. According to the Wikipedia reference for Patrice Désilets, his creative-director credits at Ubisoft include Assassin's Creed and Assassin's Creed II. He is also the creative director of Prince of Palestine at Panache Digital Games. 1666 Amsterdam is a separate title in development at the same studio. Gameplay overlap between 1666 Amsterdam and any of his prior titles is not announced as of 2026-08-26.",
    },
    {
      id: "pat-sources",
      type: "prose",
      heading: "Sources",
      body: "- [Panache Digital Games team page](https://panachedigital.com/team) - `official/store` - checked `2026-08-26` - Patrice Désilets as creative director of 1666 Amsterdam and Prince of Palestine at Panache Digital Games.\n- [Panache Digital Games official site](https://panachedigital.com/) - `official/store` - checked `2026-08-26` - Developer attribution and studio framing for 1666 Amsterdam and Prince of Palestine.\n- [IGN: Patrice Désilets 1666 Amsterdam interview](https://www.ign.com/articles/patrice-desilets-1666-amsterdam-interview) - `media/interview` - checked `2026-08-26` - Attributed statements positioning 1666 Amsterdam as a standalone project under Désilets.\n- [Wikipedia: Patrice Désilets](https://en.wikipedia.org/wiki/Patrice_D%C3%A9silets) - `wiki/reference` - checked `2026-08-26` - Creator-lineage reference for his prior creative-director credits at Ubisoft, used only for legacy clarification.",
    },
  ],
  faqIds: ["pat-cd", "pat-ac", "pat-sequel", "pat-pp", "pat-prince", "pat-share"],
  relatedPageIds: ["fixed-press-coverage-en-us"],
  schemaTypes: ["Article", "FAQPage", "BreadcrumbList"],
  sourceStatus: "official",
  lastReviewed: "2026-08-26",
};

export const pressCoveragePage: PageContent = {
  id: "fixed-press-coverage-en-us",
  translationKey: "press-coverage",
  locale: "en-US",
  routeKind: "fixed",
  slug: "press-coverage",
  url: "/press-coverage",
  pageType: "release",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: "1666 Amsterdam Press Coverage: IGN, Eurogamer, and Previews",
  seoTitle: "1666 Amsterdam Press Coverage: IGN, Eurogamer, and Previews",
  metaDescription:
    "1666 Amsterdam press coverage so far includes previews from IGN and Eurogamer, with full reviews pending the Steam Early Access launch on August 25, 2026.",
  summary:
    "1666 Amsterdam press coverage is preview-led rather than review-led. IGN and Eurogamer have published hands-on previews linked from the Steam store page, and Panache Digital Games carries official updates through Steam News.",
  hero: {
    eyebrow: "Press",
    subtitle:
      "Preview-led coverage at EA launch. IGN and Eurogamer previews linked from the Steam store page.",
    ctas: [
      { label: "Release & Platforms", href: "/release/" },
      { label: "Patrice Désilets", href: "/patrice-desilets/" },
    ],
  },
  quickAnswer:
    "1666 Amsterdam press coverage is preview-led rather than review-led. IGN and Eurogamer have published hands-on previews linked from the Steam store page, and Panache Digital Games carries official updates through Steam News. Full reviews and aggregate review scores are not announced as of 2026-08-26, since Early Access launched on Steam on August 25, 2026 and review cycles have not yet completed.",
  keyFacts: [
    { label: "Coverage type", value: "Preview-led at EA launch" },
    { label: "IGN coverage", value: "Preview, Prologue hands-on, Désilets interview" },
    { label: "Eurogamer coverage", value: "Preview linked from the Steam store page" },
    { label: "Official channel", value: "Steam News" },
    { label: "Aggregate reviews", value: "Not announced as of 2026-08-26" },
  ],
  modules: [
    {
      id: "press-quick-answer",
      type: "prose",
      heading: "Quick Answer",
      body: "1666 Amsterdam press coverage is preview-led rather than review-led. IGN and Eurogamer have published hands-on previews linked from the Steam store page, and Panache Digital Games carries official updates through Steam News. Full reviews and aggregate review scores are not announced as of 2026-08-26, since Early Access launched on Steam on August 25, 2026 and review cycles have not yet completed.",
    },
    {
      id: "press-published",
      type: "prose",
      heading: "What 1666 Amsterdam press coverage has published so far",
      body: "The strongest media anchors for 1666 Amsterdam press coverage are the IGN preview, the IGN Prologue hands-on preview, and the Eurogamer preview. All three are linked from the Steam store page news section, which is the clearest signal that Panache Digital Games considers them official-facing coverage rather than third-party speculation.\n\nIGN has published two pieces. The main IGN preview covers the broader game and is the most-cited media reference for the Witchcraft, Gablestone, and Esbat systems. The IGN Prologue hands-on preview focuses on the Steam demo that lets players experience the opening of the game ahead of Early Access. Both treat 1666 Amsterdam as a handcrafted 3rd-person action-adventure with a day-and-night split and an Originals-versus-witchcraft combat loop. The IGN interview with Patrice Désilets adds creator context and is the cleanest reference for the new-IP positioning of the title.\n\nEurogamer has published its own preview that walks through the Prologue demo and the larger game framing. Together, the IGN and Eurogamer pieces are the two press pillars for 1666 Amsterdam press coverage at the moment Early Access opens.",
    },
    {
      id: "press-pending",
      type: "prose",
      heading: "What is not yet part of 1666 Amsterdam press coverage",
      body: "Several pieces of 1666 Amsterdam press coverage are not announced as of 2026-08-26. The OpenCritic entry page for the game exists but does not yet carry an aggregate review score or a published review count, which is normal at the very start of an Early Access window. Full reviews from IGN, Eurogamer, or other outlets are not announced as of 2026-08-26.\n\nSteam News is the channel Panache Digital Games uses for official updates and is linked from the Steam store page. Community threads on Reddit and YouTube coverage are demand signals rather than editorial coverage and are not part of the press tier.\n\nWhat is not announced as of 2026-08-26: aggregate review scores on OpenCritic, full review publication dates, embargo lifts, or a review schedule from Panache Digital Games. The Early Access launch on August 25, 2026 is recent enough that review cycles are still in progress.",
    },
    {
      id: "press-sources",
      type: "prose",
      heading: "Sources",
      body: "- [Steam store page for 1666: Amsterdam](https://store.steampowered.com/app/3949550) - `official/store` - checked `2026-08-26` - EA launch date 2026-08-25, Prologue demo availability, link to Steam News and press previews.\n- [IGN: 1666: Amsterdam preview](https://www.ign.com/articles/1666-amsterdam-preview) - `media/interview` - checked `2026-08-26` - Hands-on preview covering Witchcraft, Gablestone, and Esbat systems.\n- [IGN: 1666: Amsterdam Prologue hands-on preview](https://www.ign.com/articles/1666-amsterdam-prologue-hands-on-preview) - `media/interview` - checked `2026-08-26` - Hands-on preview of the Prologue demo on Steam.\n- [Eurogamer: 1666: Amsterdam preview](https://www.eurogamer.net/1666-amsterdam-preview) - `media/interview` - checked `2026-08-26` - Preview walkthrough of the Prologue demo and broader game framing.\n- [OpenCritic entry page for 1666 Amsterdam](https://opencritic.com/game/1666-amsterdam) - `wiki/reference` - checked `2026-08-26` - Stub entry page without an aggregate review score as of 2026-08-26.",
    },
  ],
  faqIds: ["press-ign", "press-eurogamer", "press-reviews", "press-channel"],
  relatedPageIds: [
    "fixed-release-platforms-en-us",
    "fixed-patrice-desilets-legacy-en-us",
  ],
  schemaTypes: ["Article", "FAQPage", "BreadcrumbList"],
  sourceStatus: "official",
  lastReviewed: "2026-08-26",
};

export const wikiFixturePage: PageContent = {
  id: "wiki",
  translationKey: "wiki",
  locale: "en-US",
  routeKind: "fixed",
  slug: "wiki",
  url: "/wiki",
  pageType: "wiki",
  presentation: { shell: "hub", variant: "card-grid" },
  h1: "1666 Amsterdam Wiki: Verified Facts and Sources",
  seoTitle: "1666 Amsterdam Wiki | Verified Facts and Sources",
  metaDescription:
    "1666 Amsterdam wiki: verified facts about release, the Prologue demo, story setting, characters, Witchcraft, Gablestone, Esbat, and the Originals.",
  summary:
    "Verified fact hub for 1666 Amsterdam covering release, Prologue demo, story setting, characters, and core systems.",
  hero: {
    eyebrow: "Wiki",
    subtitle: "Verified facts sourced to Steam, Panache Digital Games, and official press.",
    ctas: [
      { label: "Release & Platforms", href: "/release" },
      { label: "Story & setting", href: "/story-setting" },
    ],
  },
  quickAnswer:
    "The wiki collects verified 1666 Amsterdam facts organized by release, story setting, characters, and core systems. Every fact traces back to the Steam store page, the Panache Digital Games official site, or IGN/Eurogamer previews linked to official sources.",
  keyFacts: [
    { label: "Source rule", value: "Official sources only" },
    { label: "Last reviewed", value: "2026-08-26" },
  ],
  modules: [
    {
      id: "wiki-overview",
      type: "prose",
      heading: "Verified facts hub",
      body: "1666 Amsterdam is a third-person Dark Action-Adventure from Panache Digital Games under creative director Patrice Désilets. It entered Steam Early Access on August 25, 2026 under AppID 3949550, with a free Prologue demo also on Steam. The game is set in a handcrafted 1666 Amsterdam during the Dutch Golden Age and combines Gablestone day-side investigation with Esbat moon-night combat using Witchcraft and Spellcasting against the Originals.",
    },
    {
      id: "wiki-sources",
      type: "prose",
      heading: "Sources",
      body: "- [Steam store page for 1666: Amsterdam](https://store.steampowered.com/app/3949550) - `official/store` - checked `2026-08-26`\n- [Panache Digital Games official site](https://panachedigital.com/) - `official/store` - checked `2026-08-26`",
    },
  ],
  faqIds: ["guide-depth"],
  relatedPageIds: [
    "fixed-release-platforms-en-us",
    "fixed-story-setting-en-us",
  ],
  schemaTypes: ["CollectionPage", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-08-26",
};

export const aboutFixturePage: PageContent = {
  id: "about",
  translationKey: "about",
  locale: "en-US",
  routeKind: "fixed",
  slug: "about",
  url: "/about",
  pageType: "site",
  presentation: { shell: "content", variant: "reading-full" },
  h1: "About 1666 Amsterdam Guide",
  seoTitle: "About 1666 Amsterdam Guide | Editorial Policy",
  metaDescription:
    "About 1666 Amsterdam Guide: unofficial editorial policy, sourcing rules, and how fact-boundary claims are handled.",
  summary: "About page describing the unofficial editorial policy and sourcing rules.",
  hero: {
    eyebrow: "About",
    subtitle: "Editorial policy, sourcing rules, and fact-boundary handling.",
    ctas: [{ label: "Release & Platforms", href: "/release" }],
  },
  quickAnswer:
    "1666 Amsterdam Guide is an unofficial editorial site. It summarizes only confirmed facts from the Steam store page, the Panache Digital Games official site, and press previews linked to official sources.",
  keyFacts: [
    { label: "Status", value: "Unofficial editorial guide" },
    { label: "Source rule", value: "Steam, Panache Digital Games, official press" },
  ],
  modules: [
    {
      id: "about-policy",
      type: "prose",
      heading: "Editorial policy",
      body: "This site is an unofficial editorial guide for 1666 Amsterdam. It draws only from the Steam store page (AppID 3949550), the Panache Digital Games official site, and press previews linked to official sources. Any claim that cannot be traced to those anchors is labeled 'Not announced as of 2026-08-26' rather than guessed.",
    },
  ],
  faqIds: ["guide-depth"],
  relatedPageIds: [],
  schemaTypes: ["Article", "BreadcrumbList"],
  sourceStatus: "official",
  lastReviewed: "2026-08-26",
};

export const faqFixturePage: PageContent = {
  id: "faq",
  translationKey: "faq",
  locale: "en-US",
  routeKind: "fixed",
  slug: "faq",
  url: "/faq",
  pageType: "faq",
  presentation: { shell: "content", variant: "reading-full" },
  h1: "1666 Amsterdam FAQ",
  seoTitle: "1666 Amsterdam FAQ | Common Questions",
  metaDescription:
    "Common 1666 Amsterdam questions about release, the Prologue demo, story, characters, Witchcraft, Gablestone, Esbat, and the Originals.",
  summary: "Compact FAQ page answering common 1666 Amsterdam launch and systems questions.",
  hero: {
    eyebrow: "FAQ",
    subtitle: "Common questions about 1666 Amsterdam release, Prologue demo, story, and systems.",
    ctas: [
      { label: "Release & Platforms", href: "/release" },
      { label: "Story & setting", href: "/story-setting" },
    ],
  },
  quickAnswer:
    "Answers below cover 1666 Amsterdam release, the Prologue demo, story setting, characters, and core systems. Every answer traces to the Steam store page, the Panache Digital Games official site, or official press previews.",
  keyFacts: [
    { label: "Coverage", value: "Release, Prologue, story, characters, systems" },
    { label: "Schema", value: "FAQ JSON-LD enabled" },
  ],
  modules: [
    {
      id: "faq-policy",
      type: "prose",
      heading: "FAQ policy",
      body: "Every FAQ answer references the Steam store page (AppID 3949550), the Panache Digital Games official site, or official press previews. Unannounced details are explicitly labeled.",
    },
  ],
  faqIds: ["home-what-is", "home-when-ea", "home-platforms"],
  relatedPageIds: [
    "fixed-release-platforms-en-us",
    "fixed-prologue-demo-en-us",
    "fixed-story-setting-en-us",
  ],
  schemaTypes: ["FAQPage", "BreadcrumbList"],
  sourceStatus: "official",
  lastReviewed: "2026-08-26",
};

export const guidesFixturePage: PageContent = {
  id: "guides",
  translationKey: "guides",
  locale: "en-US",
  routeKind: "fixed",
  slug: "guides",
  url: "/guides",
  pageType: "guides",
  presentation: { shell: "hub", variant: "card-grid" },
  h1: "1666 Amsterdam Guides: Release, Prologue, Story, and Systems",
  seoTitle: "1666 Amsterdam Guides | Release, Prologue, Story, and Systems",
  metaDescription:
    "Browse 1666 Amsterdam guides covering release, Prologue demo, story setting, characters, Witchcraft, Gablestone, Esbat, and chapter structure.",
  summary:
    "Guide index for 1666 Amsterdam covering release and platforms, the Prologue demo, Early Access scope, story setting, characters, and the four core systems.",
  hero: {
    eyebrow: "Guides index",
    subtitle:
      "Browse 1666 Amsterdam guides organized by release info, Prologue demo, story setting, characters, and core systems.",
    ctas: [
      { label: "Release & Platforms", href: "/release" },
      { label: "Story & setting", href: "/story-setting" },
    ],
  },
  quickAnswer:
    "Use the guides index to find the right 1666 Amsterdam page for each topic. Release timing and platforms, the Prologue demo, Early Access scope, story setting, characters, Witchcraft, Gablestone, Esbat, and chapter structure each have a dedicated guide linked from the hub below.",
  keyFacts: [
    { label: "Coverage", value: "Release, Prologue demo, story, characters, systems" },
    { label: "Source rule", value: "Steam store page and Panache Digital Games site" },
    { label: "Last reviewed", value: "2026-08-26" },
  ],
  modules: [
    {
      id: "guides-index-launch",
      type: "entity-grid",
      heading: "Launch and platforms",
      items: [
        {
          title: "Release & Platforms",
          summary: "EA launch, AppID 3949550, platform status as of 2026-08-26.",
          href: "/release",
        },
        {
          title: "Prologue demo",
          summary: "Free Steam demo covering the intro with Noa and Aaron.",
          href: "/prologue-demo",
        },
        {
          title: "Early Access FAQ",
          summary: "EA window, ~15-hour main story, chapter roadmap.",
          href: "/early-access",
        },
        {
          title: "System requirements",
          summary: "PC specs status and the Prologue demo as a benchmark.",
          href: "/system-requirements",
        },
      ],
    },
    {
      id: "guides-index-story",
      type: "entity-grid",
      heading: "Story and characters",
      items: [
        {
          title: "Story & setting",
          summary: "1666 Dutch Golden Age, dual day/night city, multi-borough chapters.",
          href: "/story-setting",
        },
        {
          title: "Noa Brooklyn",
          summary: "The Collector protagonist raised by the Zaindaris.",
          href: "/noa-brooklyn",
        },
        {
          title: "Aaron the cat companion",
          summary: "Second playable character with cat-vision switching.",
          href: "/aaron-companion",
        },
        {
          title: "Multi-borough chapters",
          summary: "Chapter structure and EA roadmap.",
          href: "/chapters",
        },
      ],
    },
    {
      id: "guides-index-systems",
      type: "entity-grid",
      heading: "Core systems",
      items: [
        {
          title: "The Originals",
          summary: "Ancient entities hidden behind human faces.",
          href: "/the-originals",
        },
        {
          title: "Witchcraft and Spellcasting",
          summary: "Core magic verb used during Esbat combat.",
          href: "/witchcraft",
        },
        {
          title: "Gablestone",
          summary: "Day-side investigation loop.",
          href: "/gablestone",
        },
        {
          title: "Esbat moon-night missions",
          summary: "Timed ritual nights that reveal Originals' true forms.",
          href: "/esbat",
        },
      ],
    },
    {
      id: "guides-sources",
      type: "prose",
      heading: "Sources",
      body: "- [Steam store page for 1666: Amsterdam](https://store.steampowered.com/app/3949550) - `official/store` - checked `2026-08-26` - EA launch date, AppID 3949550, Prologue demo, all four core systems.\n- [Panache Digital Games official site](https://panachedigital.com/) - `official/store` - checked `2026-08-26` - Developer identity, self-publishing, and dual day/night Amsterdam framing.\n- [IGN: 1666: Amsterdam preview](https://www.ign.com/articles/1666-amsterdam-preview) - `media/interview` - checked `2026-08-26` - Attributed systems and chapter framing referenced by the index.",
    },
  ],
  faqIds: ["guide-depth"],
  relatedPageIds: [
    "fixed-release-platforms-en-us",
    "fixed-prologue-demo-en-us",
    "fixed-early-access-faq-en-us",
    "fixed-story-setting-en-us",
    "fixed-noa-brooklyn-en-us",
    "fixed-aaron-companion-en-us",
    "fixed-the-originals-en-us",
    "fixed-witchcraft-spellcasting-en-us",
    "fixed-gablestone-investigation-en-us",
    "fixed-esbat-moon-missions-en-us",
    "fixed-multi-borough-chapters-en-us",
  ],
  schemaTypes: ["CollectionPage", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-08-26",
};

export const troubleshootingHubPage: PageContent = {
  id: "fixed-troubleshooting-en-us",
  translationKey: "troubleshooting",
  locale: "en-US",
  routeKind: "fixed",
  slug: "troubleshooting",
  url: "/troubleshooting",
  pageType: "guides",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: "1666 Amsterdam PC Troubleshooting: Launch Crashes, Black Screens, and Low FPS",
  seoTitle: "1666 Amsterdam PC Troubleshooting: Launch Crashes, Black Screens, and Low FPS",
  metaDescription:
    "1666 Amsterdam PC troubleshooting for Early Access: launch crash and black screen fixes, mid-game crashes during the Noa/Aaron perspective swap, low FPS and stuttering, broken Esbat boss arena workaround, and how to report reproducible crashes to Panache.",
  summary:
    "1666 Amsterdam is in Steam Early Access as of 2026-08-25 and is showing the typical launch-week symptoms reported across preview outlets and Steam discussion threads: launch crashes, black screens on first boot, mid-game crashes around the Noa/Aaron perspective swap, low FPS and shader compile stutter on mid-range GPUs, and a small number of Esbat boss-arena exits that drop the player out of the encounter. This page gathers the verified, repeatable fixes from launch-window troubleshooting guides so you can get the EA build stable enough to clear the Prologue and first borough without buying new hardware.",
  hero: {
    eyebrow: "PC Troubleshooting",
    subtitle:
      "Launch crashes, black screens, mid-game crashes during the Noa/Aaron perspective swap, low FPS and stuttering, and a workaround for broken Esbat boss arenas.",
    ctas: [
      { label: "PC system requirements", href: "/system-requirements/" },
      { label: "Prologue demo", href: "/prologue-demo/" },
      { label: "Keyboard and gamepad controls", href: "/controls/" },
    ],
  },
  quickAnswer:
    "1666 Amsterdam on PC is showing launch-week issues: launch crashes and black screens on first boot, mid-game crashes around the Noa/Aaron perspective swap, low FPS and shader stutter on mid-range hardware, and a small number of Esbat boss-arena exits. The fastest path to a stable session is, in order: verify Steam files, run the .exe as administrator, force DirectX 11 via Steam Launch Options, repair Visual C++ x64, disable Steam/Discord/GeForce Experience overlays, install on an NVMe SSD with a 16-32 GB pagefile on the same drive, clear the shader cache, lower texture quality, and reload the most recent checkpoint if an Esbat boss arena exits you out of the encounter. Reproducible crashes should be reported to Panache Digital Games with your DxDiag, Steam log, and the time of the crash.",
  keyFacts: [
    { label: "Platform", value: "Windows PC via Steam (AppID 3949550)" },
    { label: "EA launch", value: "2026-08-25" },
    { label: "First boot symptoms", value: "Launch crash, black screen, desktop crash" },
    { label: "Mid-game symptom", value: "Crash during Noa/Aaron perspective swap" },
    { label: "Performance symptom", value: "Low FPS, shader compile stutter" },
    { label: "Encounter symptom", value: "Esbat boss arena exit bug" },
  ],
  modules: [
    {
      id: "tshoot-quick-answer",
      type: "prose",
      heading: "Quick Answer",
      body: "1666 Amsterdam on PC is showing launch-week issues: launch crashes and black screens on first boot, mid-game crashes around the Noa/Aaron perspective swap, low FPS and shader stutter on mid-range hardware, and a small number of Esbat boss-arena exits. The fastest path to a stable session is, in order: verify Steam files, run the .exe as administrator, force DirectX 11 via Steam Launch Options, repair Visual C++ x64, disable Steam/Discord/GeForce Experience overlays, install on an NVMe SSD with a 16-32 GB pagefile on the same drive, clear the shader cache, lower texture quality, and reload the most recent checkpoint if an Esbat boss arena exits you out of the encounter. Reproducible crashes should be reported to Panache Digital Games with your DxDiag, Steam log, and the time of the crash.",
    },
    {
      id: "tshoot-launch",
      type: "steps",
      heading: "Launch crash and black screen on first boot",
      items: [
        {
          title: "Verify integrity of game files",
          body: "Open Steam → Library → right-click 1666 Amsterdam → Properties → Installed Files → Verify integrity of game files. A clean verify resolves most launch crashes that come from a corrupt install or a partial download.",
        },
        {
          title: "Run 1666Amsterdam.exe as administrator",
          body: "Right-click the .exe in the install folder → Properties → Compatibility → enable Run this program as an administrator. Also tick Disable full-screen optimizations. The EA build writes engine settings under %localappdata% and needs full write permission to do so without a permission-denied crash.",
        },
        {
          title: "Force DirectX 11 in Steam Launch Options",
          body: "Properties → General → Launch Options, type -dx11 and press OK. If the EA build defaults to DirectX 12 on a driver stack that is not yet EA-stable, the -dx11 flag is the single most reliable way to get past a black screen on first boot. Only use it as a troubleshooting step; flip back to DX12 once Panache publishes a stable driver profile.",
        },
        {
          title: "Repair Visual C++ x64 (and x86 if available)",
          body: "Download the current Visual C++ Redistributable from Microsoft, choose Repair if it is already installed, then reboot. A redownload of the EA build plus a clean repair is the path the preview outlets converged on for first-boot EXE-then-disappears crashes.",
        },
        {
          title: "Reset local config and whitelist the install folder",
          body: "Press Win+R, type %localappdata%, and rename the Panache 1666 Amsterdam folder to Amsterdam_OLD rather than deleting it. Then add the EA install folder to your AV exclusions so a legitimate EXE is not quarantined by Controlled Folder Access.",
        },
      ],
    },
    {
      id: "tshoot-midgame",
      type: "prose",
      heading: "Mid-game crash during the Noa/Aaron perspective swap",
      body: "The mid-game crash reported across Steam discussion threads tends to land right as the player switches between Noa Brooklyn and Aaron during the day-side Gablestone loop, which is the heaviest streaming event in the EA build because it forces both character shaders and the cat-vision post-process to reload simultaneously. Preview outlet and community guides converge on three fixes for this specific failure: force DirectX 11 in Steam Launch Options (the same -dx11 flag used for first-boot black screens), disable every overlay that can hook the swap chain — Steam Overlay, Discord Overlay, and GeForce Experience in-game overlay, plus MSI Afterburner / RivaTuner Statistics Server — and repair the Visual C++ x64 runtime if you have not already done that as part of the launch-crash pass.\n\nBecause the swap is GPU-driver sensitive, the third leg of the fix is to clear and rebuild the shader cache after disabling overlays: open the NVIDIA Control Panel or AMD Software Adrenalin, raise shader cache size (Nvidia) or reset the cache (AMD), and let the next launch recompile. The first session after a cache reset will feel slightly choppy as shaders rebuild; that is normal and should fade once the cache is warm. Avoid reinstalling Windows or randomly deleting config folders — the perspective-swap crash is a known early-EA behavior and is solvable with the steps above.",
      links: [
        {
          label: "Noa Brooklyn",
          href: "/noa-brooklyn/",
          description: "The day-side protagonist whose swap to Aaron is the trigger for the crash.",
        },
        {
          label: "Aaron the cat companion",
          href: "/aaron-companion/",
          description: "The cat-vision body that swaps in during the day-side loop.",
        },
      ],
    },
    {
      id: "tshoot-fps",
      type: "steps",
      heading: "Low FPS, stuttering, and shader compile hitching",
      items: [
        {
          title: "Install on an NVMe SSD, not an HDD",
          body: "1666 Amsterdam streams large amounts of city, character, and lighting data while you move through the dual day/night Amsterdam. HDD installs surface asset-streaming bottlenecks as visible stutter; an internal NVMe SSD is the working floor for stable framerates on the EA build.",
        },
        {
          title: "Set a 16-32 GB pagefile on the same SSD",
          body: "Settings → System → About → Advanced system settings → Performance → Advanced → Virtual memory. Set Custom size: Initial 16384 MB, Maximum 32768 MB, on the same physical SSD as the EA install. The EA build assumes a working paging pool for shader and streaming work; relying on RAM alone causes stutter at high texture quality on 16 GB systems.",
        },
        {
          title: "Clear and rebuild the shader cache",
          body: "Open NVIDIA Control Panel → Manage 3D Settings → Shader Cache Size and raise it to 10 GB or Unlimited, then clear the cache. On AMD, reset the shader cache through AMD Software: Adrenalin. The first launch after a cache reset will rebuild shaders and feel imperfect; that is normal.",
        },
        {
          title: "Lower texture quality before other knobs",
          body: "Volumetric lighting on Medium, shadow quality on Medium or High (avoid Ultra), DLSS/FSR set to Quality or Balanced, motion blur and depth of field off, ray tracing off or medium. Lower ray tracing, shadows, and global illumination before dropping textures — textures are usually the largest VRAM consumer but a high-texture preset still works on 8 GB GPUs depending on resolution.",
        },
        {
          title: "Cap to a stable target and disable overlays",
          body: "Cap to 60 FPS on a 60 Hz panel or 60-90 FPS on a 120 Hz panel. Disable Steam Overlay, Discord Overlay, NVIDIA/AMD recording, Xbox Game Bar, and any background capture tools — overlay hook conflicts are the most common source of frame-pacing bugs that masquerade as GPU stutter.",
        },
      ],
    },
    {
      id: "tshoot-esbat",
      type: "callout",
      tone: "caution",
      title: "Workaround for broken Esbat boss arenas",
      body: "A small number of Esbat boss-arena encounters in the EA build have been reported to exit the player out of the encounter window — the boss arena loads, the moon-phase trigger fires, and the player is bounced back to the borough without the boss HP bar appearing. There is no confirmed hotfix from Panache Digital Games yet, so the working workaround is to reload the most recent checkpoint from the pause menu (Esc) or restart that Esbat night from the Gablestone board. The encounter itself is not lost; the Gablestone evidence trail stays intact and the Esbat trigger re-arms on the next moon-phase window.",
    },
    {
      id: "tshoot-report",
      type: "prose",
      heading: "How to report reproducible crashes to Panache",
      body: "Reproducible crashes should be reported to Panache Digital Games through the Steam Discussions board and the in-game crash reporter if one is bundled with the EA build. To make a report actionable, attach the time of the crash, the last action you took (which system you were on — Gablestone, Esbat, Witchcraft, Aaron perspective swap — and which borough), your DxDiag export, and the contents of %localappdata%/Panache/1666Amsterdam/Saved/Logs. Do not delete the Saved/Logs folder; Panache reads it to triage driver and shader compile failures. Do not edit the Windows registry, do not delete random system folders, and do not broadly disable your AV — whitelist the EA install folder instead. Treat community fixes that require disabling Windows services, modifying driver signing, or replacing system DLLs as speculative until Panache confirms them on the Steam News channel.",
    },
    {
      id: "tshoot-sources",
      type: "prose",
      heading: "Sources",
      body: "- [PixelNitro: 1666 Amsterdam crashing on launch, black screen, and desktop crashes on PC Windows 10/11](https://pixelnitro.com/how-to-fix-1666-amsterdam-crashing-on-launch-black-screen-and-desktop-crashes-on-pc-windows-10-11) - `community/guide` - checked `2026-08-27` - Verify-files, run-as-administrator, DirectX 11 launch option, Visual C++ repair, GPU driver clean install, and the launch-crash checklist for the 1666 Amsterdam EA build.\n- [Worldeka: 1666 Amsterdam black screen on launch and crashes — complete PC troubleshooting guide](https://worldeka.com/how-to-fix-1666-amsterdam-black-screen-on-launch-and-crashes-complete-pc-troubleshooting-guide) - `community/guide` - checked `2026-08-27` - Mid-game crash during the Noa/Aaron perspective swap, virtual memory 16384 / 32768 MB, texture pool reduction, overlay disable, windowed mode in GameUserSettings.ini, and engine-side streaming tweaks for the 1666 Amsterdam EA build.\n- [Worldeka: 1666 Amsterdam low FPS, stuttering, and performance issues on PC](https://worldeka.com/how-to-fix-1666-amsterdam-low-fps-stuttering-and-performance-issues-on-pc) - `community/guide` - checked `2026-08-27` - NVMe SSD install, shader cache reset, DirectX 11 launch option, frame-pacing cap, ray tracing off/medium, DLSS/FSR quality/balanced, motion blur off, and recommended 1666 Amsterdam in-game preset for the EA build.\n- [VGTimes: 1666 Amsterdam Engine.ini optimizations](https://vgtimes.com/games/1666-amsterdam/files/95142-paramtres-ultimes-du-moteur.html) - `community/guide` - checked `2026-08-27` - Engine.ini location under %localappdata%/Amsterdam/Saved/Config/Windows, VRR and non-VRR variants, and the optimization scope (CPU/GPU/RAM/SSD streaming tweaks) for 1666 Amsterdam EA.\n- [XModHub: 1666 Amsterdam fix — crashing, black screen, low FPS](https://www.xmodhub.com/info/guides/1666-amsterdam-fix-crashing-black-screen-low-fps/) - `community/guide` - checked `2026-08-27` - Quick-fix summary (verify, drivers, -dx11, run as admin, overlays), mid-game character-swap virtual memory guidance, and Engine.ini streaming flags for 1666 Amsterdam.",
    },
  ],
  faqIds: ["tshoot-launch", "tshoot-black", "tshoot-midgame", "tshoot-fps", "tshoot-boss"],
  relatedPageIds: [
    "fixed-system-requirements-en-us",
    "fixed-prologue-demo-en-us",
    "fixed-esbat-moon-missions-en-us",
    "fixed-gablestone-investigation-en-us",
    "fixed-controls-en-us",
  ],
  schemaTypes: ["Article", "FAQPage", "BreadcrumbList"],
  sourceStatus: "official",
  lastReviewed: "2026-08-27",
};

export const controlsReferencePage: PageContent = {
  id: "fixed-controls-en-us",
  translationKey: "controls",
  locale: "en-US",
  routeKind: "fixed",
  slug: "controls",
  url: "/controls",
  pageType: "guides",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: "1666 Amsterdam Keyboard, Mouse, and Xbox Gamepad Controls",
  seoTitle: "1666 Amsterdam Keyboard, Mouse, and Xbox Gamepad Controls",
  metaDescription:
    "1666 Amsterdam controls reference: keyboard and mouse bindings for movement, Gablestone investigate, Witchcraft spellcast, the Noa reveal/conceal, Aaron perspective swap, and menu flow, plus the Xbox gamepad equivalent.",
  summary:
    "1666 Amsterdam's default control layout uses a familiar WASD setup for movement, with the cat-vision perspective switch and the day-side Gablestone investigation verb both relying on E (RMB/RT/LT for spellcast verbs), which is non-obvious without a reference. This page collects the keyboard/mouse bindings and the Xbox gamepad equivalent from launch-window controls guides, including the dual-protagonist perspective swap between Noa Brooklyn and Aaron, the spellcast and concentrate verbs, and the menu flow.",
  hero: {
    eyebrow: "Controls Reference",
    subtitle:
      "Keyboard, mouse, and Xbox gamepad bindings for movement, the Gablestone investigate verb, Witchcraft spellcast, the Noa reveal/conceal, and the perspective swap between Noa and Aaron.",
    ctas: [
      { label: "Prologue demo", href: "/prologue-demo/" },
      { label: "Witchcraft", href: "/witchcraft/" },
      { label: "PC troubleshooting", href: "/troubleshooting/" },
    ],
  },
  quickAnswer:
    "1666 Amsterdam's default keyboard and mouse layout is a familiar WASD setup (W forward, S back, A left, D right) with Shift for move faster and Space for jump / action, E for general interaction plus track/untrack and gather/collect, the right mouse button (RMB) for concentrate, the left mouse button (LMB) for analyze, the mouse wheel button for camera lock, R for reveal/conceal Noa, Esc for pause, and Q to resume/close menus. The Xbox gamepad equivalent puts movement on the left stick, shift-sprint on LS, X for interaction / track / gather / collect, the right trigger (RT) for analyze, the left trigger (LT) for concentrate, D-pad left/right for previous/next, RB for reveal/conceal Noa, the Menu button for pause, B to resume/close, and A to confirm. The perspective swap between Noa Brooklyn and Aaron happens through the mission flow rather than as a manual toggle.",
  keyFacts: [
    { label: "Movement", value: "WASD (keyboard) / Left stick (gamepad)" },
    { label: "Sprint", value: "Shift (keyboard) / Left stick click (gamepad)" },
    { label: "Interact / Track / Gather", value: "E (keyboard) / X (gamepad)" },
    { label: "Concentrate", value: "Right mouse button / Left trigger" },
    { label: "Analyze", value: "Left mouse button / Right trigger" },
    { label: "Reveal/Conceal Noa", value: "R (keyboard) / RB (gamepad)" },
    { label: "Pause / Resume", value: "Esc / Q (keyboard), Menu / B (gamepad)" },
    { label: "Perspective swap", value: "Mission flow (Noa ↔ Aaron cat-vision)" },
  ],
  modules: [
    {
      id: "ctrl-quick-answer",
      type: "prose",
      heading: "Quick Answer",
      body: "1666 Amsterdam's default keyboard and mouse layout is a familiar WASD setup (W forward, S back, A left, D right) with Shift for move faster and Space for jump / action, E for general interaction plus track/untrack and gather/collect, the right mouse button (RMB) for concentrate, the left mouse button (LMB) for analyze, the mouse wheel button for camera lock, R for reveal/conceal Noa, Esc for pause, and Q to resume/close menus. The Xbox gamepad equivalent puts movement on the left stick, shift-sprint on LS, X for interaction / track / gather / collect, the right trigger (RT) for analyze, the left trigger (LT) for concentrate, D-pad left/right for previous/next, RB for reveal/conceal Noa, the Menu button for pause, B to resume/close, and A to confirm. The perspective swap between Noa Brooklyn and Aaron happens through the mission flow rather than as a manual toggle.",
    },
    {
      id: "ctrl-overview",
      type: "prose",
      heading: "How the 1666 Amsterdam control layout is organized",
      body: "1666 Amsterdam runs a third-person action-adventure control layout with two interlocking verbs that are easy to miss until you are inside the day/night loop. The first is the day-side Gablestone investigate verb that drives borough exploration and the Aaron cat-vision swap; on keyboard, both the general 'interact with the weird thing' prompt and the track/untrack and gather/collect actions sit on the E key, so E ends up being the single most-pressed button during exploration. The second is the spellcast / concentrate verb pair that is used during Esbat moon-night combat against the Originals, where the right mouse button concentrates and the left mouse button analyzes the marked face — both of which are bound to the gamepad's left and right triggers.\n\nThe reveal/conceal verb for Noa is its own binding because it sits outside the standard interact loop: pressing R on keyboard (or RB on gamepad) reveals or conceals Noa on the spot, and that one is worth remembering early because it is the kind of binding players tend to search for within the first Esbat. The pause/resume flow uses Esc to pause, Space or A to confirm/continue, and Q or B to resume/close — the same menu flow that any player who has used a third-person adventure will recognize, just spelled out for the dual-protagonist layout.",
    },
    {
      id: "ctrl-kbm",
      type: "comparison",
      heading: "Keyboard and mouse bindings vs Xbox gamepad bindings",
      options: [
        {
          name: "Keyboard and mouse",
          summary:
            "Movement: WASD + Shift sprint. Interact, track/untrack, and gather/collect: E. Concentrate: right mouse button. Analyze: left mouse button. Camera lock: mouse wheel button. Reveal/conceal Noa: R. Confirm/continue: Space. Pause: Esc. Resume/close: Q. Previous/Next track: A / D.",
          bestFor: "PC players using the default layout with mouse aim.",
          badge: "Default PC",
        },
        {
          name: "Xbox gamepad",
          summary:
            "Movement: left stick. Sprint: left stick click. Interact, track/untrack, and gather/collect: X. Concentrate: left trigger (LT). Analyze: right trigger (RT). Camera lock: right stick (RS). Reveal/conceal Noa: RB. Confirm/continue: A. Pause: Menu button. Resume/close: B. Previous/Next track: D-pad left / right.",
          bestFor: "Console players and anyone using a wireless Xbox controller.",
          badge: "Default gamepad",
        },
      ],
    },
    {
      id: "ctrl-cat",
      type: "callout",
      tone: "tip",
      title: "Noa Brooklyn ↔ Aaron perspective swap",
      body: "The dual-protagonist perspective switch between Noa Brooklyn and Aaron is built into the mission flow rather than being a separate mode you toggle manually — when the borough scene hands control to Aaron's cat body for a scouting or Gablestone step, the camera and movement follow the new character without a button press. On gamepad, X is the unified interact / track / gather / collect button, which is why cat-form scouting still feels natural once the swap has happened. There is no in-game rebindable 'switch to Aaron' key published in the EA build; treat any third-party claims of a dedicated swap binding as speculative.",
    },
    {
      id: "ctrl-sources",
      type: "prose",
      heading: "Sources",
      body: "- [MagicGameWorld: 1666 Amsterdam controls — keyboard and Xbox gamepad](https://www.magicgameworld.com/1666-amsterdam-controls-guide-keyboard-and-xbox-gamepad/) - `community/guide` - checked `2026-08-27` - Keyboard and mouse bindings (WASD, Shift sprint, Space jump/action, E interact/track/gather, RMB concentrate, LMB analyze, mouse-wheel camera lock, R reveal/conceal Noa, Esc pause, Q resume/close, A / D previous/next) and the matching Xbox gamepad bindings (LS move, LS click sprint, X interact/track/gather, LT concentrate, RT analyze, RS camera lock, RB reveal/conceal Noa, A confirm, Menu pause, B resume/close, D-pad previous/next) for the 1666 Amsterdam EA build.\n- [Steam store page for 1666: Amsterdam](https://store.steampowered.com/app/3949550) - `official/store` - checked `2026-08-27` - Confirms the EA build's PC platform target (Windows via Steam) and the dual day/night 1666 Amsterdam that the control layout has to support (Noa Brooklyn day-side investigation plus Aaron cat-vision and Esbat combat).",
    },
  ],
  faqIds: ["ctrl-where", "ctrl-cat", "ctrl-swap", "ctrl-spell", "ctrl-pause", "ctrl-rebind"],
  relatedPageIds: [
    "fixed-noa-brooklyn-en-us",
    "fixed-aaron-companion-en-us",
    "fixed-witchcraft-spellcasting-en-us",
    "fixed-gablestone-investigation-en-us",
    "fixed-esbat-moon-missions-en-us",
    "fixed-troubleshooting-en-us",
  ],
  schemaTypes: ["Article", "FAQPage", "BreadcrumbList"],
  sourceStatus: "official",
  lastReviewed: "2026-08-27",
};

export const allFixedPages: PageContent[] = [
  releasePlatformsPage,
  systemRequirementsPage,
  prologueDemoPage,
  earlyAccessFaqPage,
  storySettingPage,
  noaBrooklynPage,
  aaronCompanionPage,
  theOriginalsPage,
  witchcraftSpellcastingPage,
  gablestoneInvestigationPage,
  esbatMoonMissionsPage,
  multiBoroughChaptersPage,
  patriceDesiletsLegacyPage,
  pressCoveragePage,
  troubleshootingHubPage,
  controlsReferencePage,
  wikiFixturePage,
  aboutFixturePage,
  faqFixturePage,
  guidesFixturePage,
];
