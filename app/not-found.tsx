import type { Metadata } from "next";
import Link from "next/link";
import { homeFonts } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
  alternates: { canonical: null },
};

export default function NotFound() {
  return (
    <main id="main" className={`page-home ${homeFonts}`} style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "20px", padding: "40px 16px", textAlign: "center" }}>
      <img src="/images/kriralife-logo.png" alt="Kriralife" width="121" height="34" style={{ height: "34px", width: "auto" }} />
      <h1 style={{ margin: "12px 0 0", fontFamily: "var(--font-nunito), sans-serif", fontWeight: 900, fontSize: "clamp(40px, 6vw, 72px)", letterSpacing: "-0.03em", color: "#1B2A44" }}>Page not found.</h1>
      <p style={{ margin: 0, maxWidth: "420px", fontSize: "18px", lineHeight: 1.6, color: "#51607A" }}>The page you&apos;re looking for has moved or never existed.</p>
      <Link href="/" style={{ display: "inline-flex", alignItems: "center", minHeight: "52px", padding: "0 24px", borderRadius: "999px", background: "#0A7D6B", color: "#FFFFFF", textDecoration: "none", fontWeight: 700 }}>Back to Kriralife</Link>
    </main>
  );
}
