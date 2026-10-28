import Link from "next/link";
import type { CSSProperties } from "react";
import { ROUTES } from "@/lib/site";

const navLink: CSSProperties = { display: "inline-flex", alignItems: "center", gap: "8px", minHeight: "44px", padding: "0 14px", borderRadius: "999px", textDecoration: "none", color: "#3B4A63", fontSize: "15px", fontWeight: "600" };
const currentLink: CSSProperties = { ...navLink, padding: "0 15px", color: "#0A7D6B", background: "#E8F6F1", fontWeight: "700" };

export default function SiteHeader({ current }: { current: "home" | "updates" }) {
  const linkProps = (page: typeof current) =>
    current === page ? { "aria-current": "page" as const, style: currentLink } : { style: navLink };

  return (
    <header style={{ position: "sticky", top: "0", zIndex: "20", background: "rgba(255,255,255,0.92)", backdropFilter: "blur(12px)", borderBottom: "1px solid #E3ECE8" }}>
      <nav aria-label="Primary" style={{ maxWidth: "1200px", margin: "0 auto", padding: "12px clamp(16px, 4vw, 40px)", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "8px 24px" }}>
        <Link href={ROUTES.home} style={{ display: "inline-flex", alignItems: "center", minHeight: "44px", textDecoration: "none" }}>
          <img src="/images/kriralife-logo.png" alt="Kriralife" width="121" height="34" style={{ display: "block", width: "auto", height: "34px" }} decoding="async" />
        </Link>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "4px" }}>
          <Link href={ROUTES.home} {...linkProps("home")}>
            Home
          </Link>
          <Link href={ROUTES.codeveda} style={navLink}>
            <span aria-hidden="true" style={{ width: "8px", height: "8px", borderRadius: "3px", background: "#6B4CF6" }} />
            Codeveda
          </Link>
          <Link href={ROUTES.foreverdays} style={navLink}>
            <span aria-hidden="true" style={{ width: "8px", height: "8px", borderRadius: "3px", background: "#B33650" }} />
            ForeverDays
          </Link>
          <Link href={ROUTES.updates} {...linkProps("updates")}>
            Journal
          </Link>
          <Link href="/#about" style={navLink}>
            About
          </Link>
          <a href="#contact" style={{ ...navLink, padding: "0 20px", marginLeft: "8px", color: "#FFFFFF", background: "#0A7D6B", fontWeight: "700" }}>
            Get in touch
          </a>
        </div>
      </nav>
    </header>
  );
}
