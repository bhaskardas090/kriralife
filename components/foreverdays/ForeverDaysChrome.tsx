import Link from "next/link";
import type { CSSProperties } from "react";
import { CONTACT_EMAIL, ROUTES } from "@/lib/site";

// Header and footer shared by the ForeverDays landing page and its privacy policy.

const navLink: CSSProperties = { display: "inline-flex", alignItems: "center", gap: "8px", minHeight: "44px", padding: "0 14px", borderRadius: "999px", textDecoration: "none", color: "#4A433F", fontSize: "15px", fontWeight: "500" };
const footerLink: CSSProperties = { display: "inline-flex", alignItems: "center", minHeight: "44px", color: "#4A433F", textDecoration: "none", fontSize: "15px" };

export function ForeverDaysHeader({ current }: { current: "app" | "privacy" }) {
  return (
    <header style={{ position: "sticky", top: "0", zIndex: "20", background: "rgba(245,239,232,0.92)", backdropFilter: "blur(12px)", borderBottom: "1px solid #E8DED4" }}>
      <nav aria-label="Primary" style={{ maxWidth: "1200px", margin: "0 auto", padding: "12px clamp(16px, 4vw, 40px)", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "8px 24px" }}>
        <Link href={ROUTES.home} style={{ display: "inline-flex", alignItems: "center", gap: "10px", minHeight: "44px", textDecoration: "none", color: "#1E1A1A", fontFamily: "var(--font-bricolage), var(--font-inter), sans-serif", fontWeight: "700", fontSize: "20px", letterSpacing: "-0.02em" }}>
          <img src="/images/kriralife-logo.png" alt="Kriralife" width="121" height="34" style={{ display: "block", width: "auto", height: "34px" }} decoding="async" />
        </Link>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "4px" }}>
          <Link href={ROUTES.home} style={navLink}>
            Home
          </Link>
          <Link href={ROUTES.codeveda} style={navLink}>
            <span aria-hidden="true" style={{ width: "8px", height: "8px", borderRadius: "3px", background: "#6B4CF6" }} />
            Codeveda
          </Link>
          <Link href={ROUTES.foreverdays} aria-current={current === "app" ? "page" : undefined} style={{ ...navLink, color: "#8E2A40", background: "#F7E4E6", fontWeight: "600" }}>
            <span aria-hidden="true" style={{ width: "8px", height: "8px", borderRadius: "3px", background: "#B33650" }} />
            ForeverDays
          </Link>
          <Link href={`${ROUTES.foreverdays}#get`} style={{ ...navLink, padding: "0 18px", marginLeft: "8px", color: "#FFFFFF", background: "#B33650", fontWeight: "600" }}>
            Get the app
          </Link>
        </div>
      </nav>
    </header>
  );
}

export function ForeverDaysFooter({ current }: { current: "app" | "privacy" }) {
  return (
    <footer style={{ borderTop: "1px solid #E8DED4" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "28px clamp(16px, 4vw, 40px)", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "12px 24px" }}>
        <p style={{ margin: "0", fontSize: "14px", lineHeight: "1.6", color: "#6E6660" }}>
          {"ForeverDays is made by Bhaskar Das at Kriralife. Also from the studio: "}
          <Link href={ROUTES.codeveda} style={{ color: "#1E1A1A", fontWeight: "600" }}>
            Codeveda
          </Link>
        </p>
        <nav aria-label="Footer" style={{ display: "flex", flexWrap: "wrap", gap: "0 22px" }}>
          <Link href={ROUTES.home} style={footerLink}>
            All products
          </Link>
          <a href={`mailto:${CONTACT_EMAIL}`} style={footerLink}>
            Contact
          </a>
          <Link href={ROUTES.foreverdaysPrivacy} aria-current={current === "privacy" ? "page" : undefined} style={footerLink}>
            Privacy
          </Link>
        </nav>
      </div>
    </footer>
  );
}
