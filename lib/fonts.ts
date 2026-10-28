import {
  Bricolage_Grotesque,
  Caveat,
  Instrument_Serif,
  Inter,
  JetBrains_Mono,
  Nunito,
  Nunito_Sans,
} from "next/font/google";

// Self-hosted at build time by next/font: no request to Google at runtime, no layout shift.
// Each page applies only the variables it uses, so only those files are preloaded on that route.

export const nunito = Nunito({ subsets: ["latin"], weight: ["600", "700", "800", "900"], variable: "--font-nunito", display: "swap" });
export const nunitoSans = Nunito_Sans({ subsets: ["latin"], axes: ["opsz"], variable: "--font-nunito-sans", display: "swap" });
export const bricolage = Bricolage_Grotesque({ subsets: ["latin"], axes: ["opsz"], variable: "--font-bricolage", display: "swap" });
export const caveat = Caveat({ subsets: ["latin"], variable: "--font-caveat", display: "swap", preload: false });
export const instrumentSerif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-instrument-serif", display: "swap" });
export const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
export const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono", display: "swap", preload: false });

export const homeFonts = [nunito, nunitoSans, bricolage, caveat, instrumentSerif, inter, jetbrainsMono].map((f) => f.variable).join(" ");
export const codevedaFonts = [bricolage, caveat, jetbrainsMono].map((f) => f.variable).join(" ");
export const foreverdaysFonts = [bricolage, instrumentSerif, inter].map((f) => f.variable).join(" ");
