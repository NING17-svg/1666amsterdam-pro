import { site } from "@/data/site";

export interface LocalizedNavigationItem {
  href: string;
  labels: Record<string, string>;
}

export const primaryNavigation: LocalizedNavigationItem[] = [
  { href: "/release/", labels: { "en-US": "Release & Platforms" } },
  { href: "/prologue-demo/", labels: { "en-US": "Prologue demo" } },
  { href: "/early-access/", labels: { "en-US": "Early Access FAQ" } },
  { href: "/story-setting/", labels: { "en-US": "Story & Setting" } },
  { href: "/chapters/", labels: { "en-US": "Chapters" } },
  { href: "/the-originals/", labels: { "en-US": "The Originals" } },
  { href: "/witchcraft/", labels: { "en-US": "Witchcraft" } },
  { href: "/gablestone/", labels: { "en-US": "Gablestone" } },
  { href: "/esbat/", labels: { "en-US": "Esbat" } },
  { href: "/controls/", labels: { "en-US": "Controls" } },
  { href: "/troubleshooting/", labels: { "en-US": "PC troubleshooting" } },
  { href: "/patrice-desilets/", labels: { "en-US": "Patrice Désilets" } },
  { href: "/press-coverage/", labels: { "en-US": "Press coverage" } },
  { href: "/system-requirements/", labels: { "en-US": "System requirements" } },
];

export const footerNavigation: LocalizedNavigationItem[] = [
  { href: "/story-setting/", labels: { "en-US": "Story & Setting" } },
  { href: "/press-coverage/", labels: { "en-US": "Press coverage" } },
];

export function navigationLabel(
  item: LocalizedNavigationItem,
  locale: string,
): string {
  return (
    item.labels[locale] ||
    item.labels[site.primaryLocale] ||
    Object.values(item.labels)[0]
  );
}
