# CONTENT_INDEX.md

## How To Use This File

Use this index to find the current role of each URL before editing. Update it whenever URLs, page roles, metadata, CTAs, schema, or internal-link responsibilities change.

## Page Inventory

The rows below are the primary-locale baseline for 1666: Amsterdam (1666amsterdam.pro). The site launches in `en-US` only. All pages live in `src/data/pages/home.ts` (home) and `src/data/pages/fixed-pages.ts` (all 18 non-home pages). Localized versions keep the same `translationKey`, use the locale prefix configured in `src/data/site.ts`, and must appear in canonical, hreflang, sitemap, and route-manifest validation when added.

| URL | File/Route | Type | Primary Keyword | Search Intent | Primary CTA | Internal-Link Role | Notes |
|---|---|---|---|---|---|---|---|
| `/` | `src/data/pages/home.ts` | Landing | 1666: Amsterdam | Find EA launch status, Prologue demo, and systems | Prologue demo / Release | Hub | Split-panel variant; EA launch hub for 2026-08-25 Steam release. |
| `/release` | `src/data/pages/fixed-pages.ts` (releasePlatformsPage) | Release | 1666 Amsterdam release date | Check EA launch date and platforms | Prologue demo / Early Access FAQ | Launch hub | Steam AppID 3949550, EA launch 2026-08-25, PC-only as of 2026-08-26. |
| `/system-requirements` | `src/data/pages/fixed-pages.ts` (systemRequirementsPage) | Wiki | 1666 Amsterdam system requirements | Check PC specs | Release & Platforms | Reference | No published min/rec; Prologue demo as benchmark. |
| `/prologue-demo` | `src/data/pages/fixed-pages.ts` (prologueDemoPage) | Guides | 1666 Amsterdam Prologue demo | How to play the free Steam demo and finish the Bateratze, Library, 1999 Hotel, and cat portal sequence | Release / Early Access FAQ / Aaron / Story / Chapters | Guide | Demo entry under Steam AppID 3949550; milestone walkthrough + Bateratze tarot cat choice + Library Section XIV + 1999 Hotel ritual items + cat portal traversal. |
| `/early-access` | `src/data/pages/fixed-pages.ts` (earlyAccessFaqPage) | Guides | 1666 Amsterdam Early Access | EA window, main story length, roadmap | Release / Chapters | Guide | ~15-hour main story, ~1-year EA plan. |
| `/story-setting` | `src/data/pages/fixed-pages.ts` (storySettingPage) | Guides | 1666 Amsterdam story setting | 1666 Dutch Golden Age, dual day/night city | Noa Brooklyn / Chapters | Guide | Multi-borough chapter framing. |
| `/noa-brooklyn` | `src/data/pages/fixed-pages.ts` (noaBrooklynPage) | Guides | 1666 Amsterdam Noa Brooklyn | The Collector protagonist | Aaron / Story | Character | Zaindaris-raised protagonist. |
| `/aaron-companion` | `src/data/pages/fixed-pages.ts` (aaronCompanionPage) | Guides | 1666 Amsterdam Aaron | Cat companion and cat-vision | Noa Brooklyn / Story | Character | 1999 timeline cat with perspective switch. |
| `/the-originals` | `src/data/pages/fixed-pages.ts` (theOriginalsPage) | Guides | 1666 Amsterdam Originals | Ancient entities behind human faces | Esbat / Gablestone / Witchcraft | Guide | Antagonist faction. |
| `/witchcraft` | `src/data/pages/fixed-pages.ts` (witchcraftSpellcastingPage) | Guides | 1666 Amsterdam Witchcraft | Core magic verb in Esbat combat | Esbat / Originals | System | Spellcasting during moon-night fights. |
| `/gablestone` | `src/data/pages/fixed-pages.ts` (gablestoneInvestigationPage) | Guides | 1666 Amsterdam Gablestone | Day-side investigation loop | Esbat / Originals | System | Free-choice task completion during the day. |
| `/esbat` | `src/data/pages/fixed-pages.ts` (esbatMoonMissionsPage) | Guides | 1666 Amsterdam Esbat | Moon-night ritual that reveals true forms | Originals / Gablestone / Witchcraft | System | Triggers on moon phase after Gablestone evidence. |
| `/chapters` | `src/data/pages/fixed-pages.ts` (multiBoroughChaptersPage) | Guides | 1666 Amsterdam chapters | Multi-borough structure and EA roadmap | Early Access FAQ / Story | Guide | Prologue is chapter one; rest follow in EA window. |
| `/patrice-desilets` | `src/data/pages/fixed-pages.ts` (patriceDesiletsLegacyPage) | Guides | 1666 Amsterdam Patrice Désilets | Creative director lineage at Panache Digital Games | Press coverage | Trust | New IP at Panache Digital Games; not AC sequel. |
| `/press-coverage` | `src/data/pages/fixed-pages.ts` (pressCoveragePage) | Release | 1666 Amsterdam press coverage | IGN and Eurogamer previews, review status | Release / Patrice Désilets | Trust | Preview-led coverage at EA launch. |
| `/troubleshooting` | `src/data/pages/fixed-pages.ts` (troubleshootingHubPage) | Guides | 1666 Amsterdam PC troubleshooting | Launch crashes, black screen, mid-game crashes, low FPS, Esbat boss-arena bug | System requirements / Prologue demo / Controls | Reference | Launch-window fixes from preview outlets and Steam discussions. |
| `/controls` | `src/data/pages/fixed-pages.ts` (controlsReferencePage) | Guides | 1666 Amsterdam keyboard mouse gamepad controls | Bind movement, Gablestone, Witchcraft, perspective swap, pause | Witchcraft / Gablestone / Troubleshooting | Reference | Keyboard/mouse + Xbox gamepad equivalents for the EA build. |
| `/wiki` | `src/data/pages/fixed-pages.ts` (wikiFixturePage) | Wiki | 1666 Amsterdam wiki | Verified facts and sources | Release / Story | Hub fixture | Template fixture for review-date rendering validation. |
| `/about` | `src/data/pages/fixed-pages.ts` (aboutFixturePage) | Site | about 1666 Amsterdam Guide | Trust and editorial policy | Release | Trust fixture | Template fixture; unofficial editorial policy. |
| `/faq` | `src/data/pages/fixed-pages.ts` (faqFixturePage) | FAQ | 1666 Amsterdam FAQ | Common launch and systems questions | Release / Story | Answer hub fixture | Template fixture; FAQ JSON-LD enabled. |
| `/guides` | `src/data/pages/fixed-pages.ts` (guidesFixturePage) | Guides | 1666 Amsterdam guides | Browse all guides by topic | Release / Story | Hub fixture | Template fixture; guides index. |

## Generated Route Families

- All 19 fixed pages: authored in `src/data/pages/home.ts` and `src/data/pages/fixed-pages.ts` with explicit locale `en-US` and final URL.
- Entity Hubs and details: not generated (entity families empty per content-package.json).
- Final route inventory: `npm run routes:manifest` → 19 routes.
- Secondary locales are not configured for launch (en-US only); the launch_locales list is `["en-US"]`.

## Content Clusters

- Launch facts: `/release`, `/system-requirements`, `/early-access`, `/press-coverage`
- Story and characters: `/story-setting`, `/noa-brooklyn`, `/aaron-companion`, `/chapters`
- Core systems: `/the-originals`, `/witchcraft`, `/gablestone`, `/esbat`
- Prologue and creator: `/prologue-demo`, `/patrice-desilets`
- Evergreen hub and trust: `/`, `/wiki`, `/guides`, `/faq`, `/about`

## Internal Linking Map

- Homepage (`/`) links to all 14 topic pages via the entity-grid module and the 14-item relatedPageIds array.
- `/story-setting` and `/chapters` cross-link protagonist/system pages.
- System pages (`/the-originals`, `/witchcraft`, `/gablestone`, `/esbat`) cross-link each other in a 4-way loop.
- `/press-coverage` links to `/release` and `/patrice-desilets`.
- `/prologue-demo` and `/early-access` link to `/release`, `/story-setting`, `/chapters`, and (after the Prologue demo expansion) `/aaron-companion` for the tarot-cat companion system.
- `/troubleshooting` cross-links to `/system-requirements`, `/prologue-demo`, `/esbat`, `/gablestone`, and `/controls`.
- `/controls` cross-links to `/noa-brooklyn`, `/aaron-companion`, `/witchcraft`, `/gablestone`, `/esbat`, and `/troubleshooting`.

## Topic Clusters

The 14 topic pages partition into four clusters:

1. Launch & Platforms (`/release`, `/system-requirements`, `/prologue-demo`, `/early-access`, `/press-coverage`, `/troubleshooting`, `/controls`)
2. Story & Setting (`/story-setting`, `/noa-brooklyn`, `/aaron-companion`, `/chapters`)
3. Enemies & Magic (`/the-originals`, `/witchcraft`, `/gablestone`, `/esbat`)
4. Creator & Press (`/patrice-desilets`, `/press-coverage`)

## Open Questions

- Additional locales beyond `en-US` are not declared. If a secondary locale is added, all page URLs must be localized via `localizePath` and `translationKey` must match across locales.
- Aggregate review scores on OpenCritic and full review publications are pending as of 2026-08-26.