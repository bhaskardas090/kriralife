import Link from "next/link";
import type { CSSProperties } from "react";
import { CONTACT_EMAIL, ROUTES, SOCIAL_LINKS } from "@/lib/site";

const footerLink: CSSProperties = { display: "inline-flex", alignItems: "center", minHeight: "40px", color: "#E6ECF3", textDecoration: "none", fontSize: "15px" };
const columnHeading: CSSProperties = { margin: "0 0 8px", fontSize: "12px", fontWeight: "800", letterSpacing: "0.1em", textTransform: "uppercase", color: "#A9B6C9" };
const legalLink: CSSProperties = { display: "inline-flex", alignItems: "center", minHeight: "44px", color: "#A9B6C9", textDecoration: "none", fontSize: "14px" };
const list: CSSProperties = { margin: "0", padding: "0", listStyle: "none" };
const column: CSSProperties = { flex: "1 1 150px", minWidth: "0" };

export default function SiteFooter() {
  return (
    <footer id="contact" style={{ background: "#12203A", color: "#FFFFFF" }}>
      <div aria-hidden="true" style={{ display: "flex", height: "6px" }}>
        <span style={{ flex: "1", background: "#1BA982" }} />
        <span style={{ flex: "1", background: "#0780F0" }} />
        <span style={{ flex: "1", background: "#FEAE33" }} />
      </div>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "clamp(64px, 8vw, 104px) clamp(16px, 4vw, 40px) 36px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "32px" }}>
          <div style={{ flex: "1 1 560px", minWidth: "0" }}>
            <p style={{ margin: "0", fontSize: "13px", fontWeight: "800", letterSpacing: "0.1em", textTransform: "uppercase", color: "#8FDF73" }}>
              Get in touch
            </p>
            <h2 style={{ margin: "14px 0 0", maxWidth: "18ch", fontFamily: "var(--font-nunito), var(--font-nunito-sans), sans-serif", fontWeight: "900", fontSize: "clamp(34px, 4.4vw, 58px)", lineHeight: "1.04", letterSpacing: "-0.03em", color: "#FFFFFF" }}>
              Ideas, feedback or a bug to report? I'd love to hear it.
            </h2>
          </div>
          <a href={`mailto:${CONTACT_EMAIL}`} style={{ display: "inline-flex", alignItems: "center", gap: "10px", minHeight: "58px", padding: "0 28px", borderRadius: "999px", background: "#FEAE33", color: "#1B2A44", textDecoration: "none", fontWeight: "800", fontSize: "17px", maxWidth: "100%", overflowWrap: "anywhere" }}>
            {CONTACT_EMAIL}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: 0 }}>
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>
        <div style={{ marginTop: "72px", paddingTop: "48px", borderTop: "1px solid rgba(255,255,255,0.12)", display: "flex", flexWrap: "wrap", gap: "40px 48px" }}>
          <div style={{ flex: "2 1 300px", minWidth: "0" }}>
            <Link href={ROUTES.home} style={{ display: "inline-flex", alignItems: "center", minHeight: "44px", textDecoration: "none" }}>
              <img src="/images/kriralife-logo-light.png" alt="Kriralife" width="163" height="46" style={{ display: "block", width: "auto", height: "46px" }} loading="lazy" decoding="async" />
            </Link>
            <p style={{ margin: "14px 0 0", maxWidth: "320px", fontSize: "15px", lineHeight: "1.6", color: "#A9B6C9" }}>
              Thoughtful software for everyday life. Independent, focused and built to last.
            </p>
          </div>
          <nav aria-label="Products" style={column}>
            <p style={columnHeading}>Products</p>
            <ul style={list}>
              <li>
                <Link href={ROUTES.codeveda} style={footerLink}>Codeveda</Link>
              </li>
              <li>
                <Link href={ROUTES.foreverdays} style={footerLink}>ForeverDays</Link>
              </li>
            </ul>
          </nav>
          <nav aria-label="Studio" style={column}>
            <p style={columnHeading}>Studio</p>
            <ul style={list}>
              <li>
                <Link href="/#about" style={footerLink}>About</Link>
              </li>
              <li>
                <Link href={ROUTES.updates} style={footerLink}>Journal</Link>
              </li>
              <li>
                <Link href="/#follow" style={footerLink}>Follow along</Link>
              </li>
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} style={footerLink}>Contact</a>
              </li>
            </ul>
          </nav>
          <nav aria-label="Follow Kriralife" style={column}>
            <p style={columnHeading}>Follow</p>
            <ul style={list}>
              {SOCIAL_LINKS.map((social) => (
                <li key={social.name}>
                  <a href={social.href} target="_blank" rel="noopener noreferrer" style={footerLink}>
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div style={{ marginTop: "48px", paddingTop: "24px", borderTop: "1px solid rgba(255,255,255,0.12)", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "8px 24px" }}>
          <p style={{ margin: "0", fontSize: "14px", color: "#A9B6C9" }}>
            © 2026 Kriralife. All rights reserved.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0 22px" }}>
            <a href="#main" style={legalLink}>
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
