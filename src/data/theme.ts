import type { ThemeConfig } from "@/types/theme";

export const theme = {
  mode: "dark",
  tokens: {
    pageBg: "#0E1014",
    surface1: "#161A20",
    surface2: "#1F242C",
    surface3: "#2A3038",
    surfaceInverse: "#E8DCC4",
    textPrimary: "#ECE4D2",
    textMuted: "#A39882",
    textInverse: "#1A1410",
    textOnAccentPrimary: "#1A1410",
    textLink: "#E0A050",
    focusRing: "#F5C26B",
    line: "#2C323A",
    lineStrong: "#454D57",
    accentPrimary: "#C8853A",
    accentSecondary: "#6B5B95",
    accentBright: "#F5C26B",
    statusConfirmed: "#6FB573",
    statusCaution: "#C8645A",
    statusUnknown: "#7A8A95",
  },
  typography: {
    headingFamily:
      "Spectral, 'Playfair Display', Georgia, 'Times New Roman', serif",
    bodyFamily:
      "Inter, 'Helvetica Neue', system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
    headingWeight: 700,
  },
  shape: {
    radius: "4px",
    borderWidth: "1px",
    shadow: "0 2px 12px rgba(0, 0, 0, 0.35)",
    hoverLift: "2px",
  },
  density: "comfortable",
  background: { mode: "gradient", overlay: 0.15, position: "top center" },
  variants: {
    home: "split-panel",
    hub: "card-grid",
    content: "reading-right-rail",
    workspace: "full-width",
  },
  decoration: { motif: "lines", intensity: "low" },
} satisfies ThemeConfig;
