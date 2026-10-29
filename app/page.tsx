import type { Metadata, Viewport } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import SiteFooter from "@/components/home/SiteFooter";
import SiteHeader from "@/components/home/SiteHeader";
import UpdateCard from "@/components/home/UpdateCard";
import { homeFonts } from "@/lib/fonts";
import { pageMetadata } from "@/lib/metadata";
import { CODEVEDA_URL, CONTACT_EMAIL, OG_IMAGE, ROUTES, SITE_DESCRIPTION, SITE_NAME, SITE_TAGLINE, SITE_URL, SOCIAL_LINKS, absoluteUrl, socialLink } from "@/lib/site";
import { getUpdates } from "@/lib/updates";

const title = `${SITE_NAME} — ${SITE_TAGLINE}`;

export const metadata: Metadata = pageMetadata({
  path: ROUTES.home,
  title,
  absoluteTitle: true,
  description: SITE_DESCRIPTION,
});

export const viewport: Viewport = { themeColor: "#FFFFFF" };

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: absoluteUrl(ROUTES.home),
      logo: { "@type": "ImageObject", url: absoluteUrl("/kriralife-logo-square.png"), width: 512, height: 512 },
      image: absoluteUrl(OG_IMAGE.url),
      description: SITE_DESCRIPTION,
      slogan: SITE_TAGLINE,
      email: CONTACT_EMAIL,
      founder: { "@type": "Person", name: "Bhaskar Das", image: absoluteUrl("/images/bhaskar-das.webp") },
      contactPoint: { "@type": "ContactPoint", contactType: "customer support", email: CONTACT_EMAIL, availableLanguage: ["English"] },
      owns: [
        { "@type": "WebApplication", "@id": `${SITE_URL}/codeveda/#app`, name: "Codeveda", url: absoluteUrl(ROUTES.codeveda) },
        { "@type": "MobileApplication", "@id": `${SITE_URL}/foreverdays/#app`, name: "ForeverDays", url: absoluteUrl(ROUTES.foreverdays) },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: absoluteUrl(ROUTES.home),
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      inLanguage: "en",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "WebPage",
      "@id": `${absoluteUrl(ROUTES.home)}#webpage`,
      url: absoluteUrl(ROUTES.home),
      name: title,
      description: SITE_DESCRIPTION,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organization` },
      primaryImageOfPage: absoluteUrl(OG_IMAGE.url),
      inLanguage: "en",
    },
    {
      "@type": "ItemList",
      name: "Kriralife products",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Codeveda", url: absoluteUrl(ROUTES.codeveda) },
        { "@type": "ListItem", position: 2, name: "ForeverDays", url: absoluteUrl(ROUTES.foreverdays) },
      ],
    },
  ],
};

export default async function HomePage() {
  const updates = await getUpdates(3);

  return (
    <>
      <JsonLd data={jsonLd} />
      <div className={`page-home ${homeFonts}`} style={{ width: "100%", background: "#FFFFFF", color: "#1B2A44", fontFamily: "var(--font-nunito-sans), system-ui, sans-serif" }}>
        <SiteHeader current="home" />
        <main id="main">
          <section id="top" style={{ position: "relative", overflow: "hidden" }}>
            <div aria-hidden="true" style={{ position: "absolute", right: "-180px", top: "-220px", width: "640px", height: "640px", borderRadius: "999px", background: "#FFF4DE" }} />
            <svg aria-hidden="true" className="kl-sway" viewBox="0 0 200 200" style={{ position: "absolute", left: "-80px", bottom: "-70px", width: "320px", height: "320px" }}>
              <path d="M20 180 C 20 90, 80 20, 180 20 C 180 120, 120 180, 20 180 Z" fill="#E8F6F1" />
              <path d="M34 166 C 80 120, 122 78, 166 34" stroke="#CFEDE2" strokeWidth="6" fill="none" strokeLinecap="round" />
            </svg>
            <div style={{ position: "relative", maxWidth: "1200px", margin: "0 auto", padding: "clamp(56px, 8vw, 112px) clamp(16px, 4vw, 40px) clamp(56px, 7vw, 96px)", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "48px 56px" }}>
              <div style={{ flex: "999 1 520px", minWidth: "0" }}>
                <p className="kl-in" style={{ margin: "0", display: "inline-flex", alignItems: "center", gap: "10px", padding: "6px 16px 6px 6px", borderRadius: "999px", background: "#E8F6F1", color: "#0A7D6B", fontSize: "13px", fontWeight: "800", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  <span aria-hidden="true" style={{ width: "22px", height: "22px", borderRadius: "999px", background: "#FEAE33" }} />
                  Independent product studio
                </p>
                <h1 className="kl-in" style={{ animationDelay: "90ms", margin: "24px 0 0", maxWidth: "12ch", fontFamily: "var(--font-nunito), var(--font-nunito-sans), sans-serif", fontWeight: "900", fontSize: "clamp(48px, 7vw, 96px)", lineHeight: "1", letterSpacing: "-0.035em", color: "#1B2A44" }}>
                  {"Thoughtful software for everyday "}
                  <span style={{ position: "relative", whiteSpace: "nowrap", color: "#12936F" }}>
                    life.
                    <svg aria-hidden="true" viewBox="0 0 200 20" preserveAspectRatio="none" style={{ position: "absolute", left: "0", bottom: "-0.1em", width: "100%", height: "0.22em" }}>
                      <path d="M4 14 C 50 4, 120 2, 196 10" stroke="#FEAE33" strokeWidth="7" fill="none" strokeLinecap="round" />
                    </svg>
                  </span>
                </h1>
                <p className="kl-in" style={{ animationDelay: "180ms", margin: "30px 0 0", maxWidth: "540px", fontSize: "clamp(17px, 1.5vw, 20px)", lineHeight: "1.6", color: "#51607A" }}>
                  Kriralife designs, builds and runs small, focused apps and SaaS products — each one made to do a single job really well, and to make everyday life a little lighter.
                </p>
                <div className="kl-in" style={{ animationDelay: "270ms", display: "flex", flexWrap: "wrap", gap: "12px", marginTop: "36px" }}>
                  <a href="#products" style={{ display: "inline-flex", alignItems: "center", gap: "8px", minHeight: "54px", padding: "0 26px", borderRadius: "999px", background: "#0A7D6B", color: "#FFFFFF", textDecoration: "none", fontWeight: "700", fontSize: "16px", boxShadow: "0 12px 26px rgba(10,125,107,0.25)" }}>
                    Explore the products
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M12 5v14M6 13l6 6 6-6" />
                    </svg>
                  </a>
                  <a href="#about" style={{ display: "inline-flex", alignItems: "center", minHeight: "54px", padding: "0 24px", borderRadius: "999px", background: "#FFFFFF", color: "#1B2A44", border: "1.5px solid #CBD6E2", textDecoration: "none", fontWeight: "700", fontSize: "16px" }}>
                    About Kriralife
                  </a>
                </div>
                <ul className="kl-in" aria-label="Kriralife at a glance" style={{ animationDelay: "340ms", margin: "34px 0 0", padding: "0", listStyle: "none", display: "flex", flexWrap: "wrap", gap: "10px 22px", fontSize: "15px", fontWeight: "700", color: "#3B4A63" }}>
                  <li style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                    <span aria-hidden="true" style={{ width: "10px", height: "10px", borderRadius: "999px", background: "#1BA982" }} />
                    2 products live
                  </li>
                  <li style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                    <span aria-hidden="true" style={{ width: "10px", height: "10px", borderRadius: "999px", background: "#0780F0" }} />
                    Web & mobile
                  </li>
                  <li style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                    <span aria-hidden="true" style={{ width: "10px", height: "10px", borderRadius: "999px", background: "#FEAE33" }} />
                    1,000+ learners on Codeveda
                  </li>
                </ul>
              </div>
              <div className="kl-in" style={{ animationDelay: "200ms", flex: "1 1 420px", minWidth: "0", maxWidth: "520px", margin: "0 auto" }}>
                <div style={{ position: "relative", width: "100%", height: "600px" }}>
                  <span aria-hidden="true" style={{ position: "absolute", left: "12%", top: "110px", zIndex: "0", width: "400px", height: "400px", maxWidth: "82%", borderRadius: "999px", background: "#E8F6F1" }} />
                  <span aria-hidden="true" className="kl-float-sm" style={{ position: "absolute", right: "16%", top: "54px", zIndex: "0", width: "52px", height: "52px", borderRadius: "999px", background: "#FEAE33" }} />
                  <p style={{ position: "absolute", left: "4%", top: "0", zIndex: "5", margin: "0", display: "inline-flex", alignItems: "center", gap: "10px", padding: "8px 14px", borderRadius: "999px", background: "#FFFFFF", border: "1px solid #E3ECE8", boxShadow: "0 10px 24px rgba(27,42,68,0.08)", fontSize: "12px", fontWeight: "800", letterSpacing: "0.08em", textTransform: "uppercase", color: "#3B4A63" }}>
                    <span aria-hidden="true" className="kl-pulse" style={{ width: "8px", height: "8px", borderRadius: "999px", background: "#1BA982" }} />
                    Now shipping · 2 products
                  </p>
                  <svg className="kl-spin" viewBox="0 0 24 24" fill="#0780F0" aria-hidden="true" style={{ position: "absolute", right: "4%", top: "20px", width: "28px", height: "28px" }}>
                    <path d="M12 1l2.6 8.4L23 12l-8.4 2.6L12 23l-2.6-8.4L1 12l8.4-2.6z" />
                  </svg>
                  <Link href="/codeveda/" aria-label="Codeveda: learn to code by reading and playing" className="kl-float" style={{ position: "absolute", left: "0", top: "64px", zIndex: "1", width: "76%", padding: "22px 22px 20px", backgroundColor: "#15123A", backgroundImage: "radial-gradient(rgba(255,247,234,0.09) 1.2px, transparent 1.6px)", backgroundSize: "20px 20px", color: "#FFF7EA", border: "2px solid #0A0820", borderRadius: "24px", boxShadow: "8px 8px 0 #7B5CFF", transform: "rotate(-4deg)", textDecoration: "none", fontFamily: "var(--font-bricolage), system-ui, sans-serif", display: "flex", flexDirection: "column", gap: "16px" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <svg viewBox="0 0 46 82" fill="none" aria-hidden="true" style={{ height: "24px", width: "14px" }}>
                        <circle cx="5.5" cy="26.5" r="6" fill="#FFF7EA" />
                        <circle cx="5.5" cy="54.5" r="6" fill="#FFF7EA" />
                        <path d="M21 4 H27 Q32 4 32 9 V33 L40 40.5 L32 48 V72 Q32 77 27 77 H21" stroke="#FFF7EA" strokeWidth="9" strokeLinejoin="round" />
                      </svg>
                      <span style={{ fontSize: "18px", fontWeight: "800", letterSpacing: "-0.04em", lineHeight: "1" }}>
                        CODEVEDA
                      </span>
                      <span style={{ padding: "3px 8px", borderRadius: "999px", background: "rgba(185,166,255,0.18)", color: "#E4DCFF", fontSize: "11px", fontWeight: "700" }}>
                        Beta
                      </span>
                    </span>
                    <span style={{ display: "block", fontWeight: "800", fontSize: "clamp(36px, 3.6vw, 46px)", lineHeight: "0.95", letterSpacing: "-0.055em" }}>
                      <span style={{ display: "block" }}>
                        read
                        <span style={{ fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace", fontWeight: "600", letterSpacing: "-0.06em", color: "#FFD23F" }}>
                          ()
                        </span>
                      </span>
                      <span style={{ display: "block" }}>
                        <span style={{ padding: "0 0.1em", borderRadius: "0.12em", background: "#7B5CFF" }}>
                          play
                        </span>
                        <span style={{ fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace", fontWeight: "600", letterSpacing: "-0.06em", color: "#FFD23F" }}>
                          ()
                        </span>
                      </span>
                      <span style={{ display: "block", color: "#3DDC97" }}>
                        get_it
                        <span style={{ fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace", fontWeight: "600", letterSpacing: "-0.06em", color: "#FFD23F" }}>
                          ()
                        </span>
                      </span>
                    </span>
                    <span style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
                      <span style={{ padding: "6px 12px", borderRadius: "999px", border: "1.5px solid rgba(255,247,234,0.3)", fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace", fontSize: "12px", fontWeight: "600" }}>
                        16 free courses
                      </span>
                      <span aria-hidden="true" style={{ width: "38px", height: "38px", flex: "none", borderRadius: "999px", background: "#FFD23F", border: "2px solid #0A0820", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#15123A" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M5 12h14M13 6l6 6-6 6" />
                        </svg>
                      </span>
                    </span>
                  </Link>
                  <Link href="/foreverdays/" aria-label="ForeverDays: for the days, worth remembering" className="kl-float" style={{ animationDuration: "8.5s", animationDelay: "-3s", position: "absolute", right: "0", top: "150px", zIndex: "2", display: "block", width: "214px", maxWidth: "50%", padding: "8px", borderRadius: "38px", background: "#2A2422", boxShadow: "0 30px 60px rgba(27,42,68,0.22)", transform: "rotate(5deg)" }}>
                    <img src="/images/foreverdays-upcoming.webp" alt="" style={{ display: "block", width: "100%", height: "auto", borderRadius: "31px" }} width="920" height="2000" decoding="async" />
                  </Link>
                  <span aria-hidden="true" className="kl-wiggle" style={{ position: "absolute", left: "44%", top: "318px", zIndex: "3", display: "inline-flex", alignItems: "center", gap: "6px", padding: "8px 14px", borderRadius: "999px", background: "#FFD23F", color: "#15123A", border: "2px solid #0A0820", boxShadow: "3px 3px 0 #0A0820", fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace", fontSize: "12px", fontWeight: "700", whiteSpace: "nowrap", transform: "rotate(-6deg)" }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#15123A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                    All tests pass
                  </span>
                  <div aria-hidden="true" className="kl-float-sm" style={{ animationDelay: "-1.5s", position: "absolute", left: "2%", bottom: "36px", zIndex: "4", width: "272px", maxWidth: "72%", padding: "12px 14px", borderRadius: "20px", background: "#F5EFE8", border: "1px solid #E8DED4", boxShadow: "0 16px 36px rgba(27,42,68,0.14)", display: "flex", alignItems: "center", gap: "12px", fontFamily: "-apple-system, BlinkMacSystemFont, var(--font-inter), 'Segoe UI', sans-serif", color: "#1E1A1A" }}>
                    <img src="/images/foreverdays-icon.webp" alt="" width="40" height="40" style={{ display: "block", flex: "none", width: "40px", height: "40px", borderRadius: "10px" }} decoding="async" />
                    <span style={{ minWidth: "0", display: "flex", flexDirection: "column", gap: "2px" }}>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12.5px", fontWeight: "600", color: "#B33650" }}>
                        <svg className="kl-ring" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#B33650" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                          <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                        </svg>
                        Next reminder · in 7 days
                      </span>
                      <span style={{ fontFamily: "var(--font-instrument-serif), Georgia, serif", fontSize: "21px", lineHeight: "1.1" }}>
                        Wedding Anniversary
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section aria-label="What Kriralife makes" style={{ maxWidth: "1200px", margin: "0 auto", padding: "clamp(24px, 3vw, 40px) clamp(16px, 4vw, 40px) clamp(72px, 9vw, 120px)" }}>
            <div className="kl-reveal" style={{ paddingTop: "clamp(40px, 5vw, 64px)", borderTop: "1px solid #E3ECE8", display: "flex", flexWrap: "wrap", gap: "20px 64px" }}>
              <p style={{ flex: "0 0 180px", margin: "14px 0 0", fontSize: "13px", fontWeight: "800", letterSpacing: "0.1em", textTransform: "uppercase", color: "#0A7D6B" }}>
                What we make
              </p>
              <div style={{ flex: "1 1 640px", minWidth: "0" }}>
                <p style={{ margin: "0", fontFamily: "var(--font-nunito), var(--font-nunito-sans), sans-serif", fontWeight: "800", fontSize: "clamp(30px, 3.6vw, 50px)", lineHeight: "1.24", letterSpacing: "-0.025em", color: "#1B2A44" }}>
                  {"Small, focused software that respects your "}
                  <span style={{ color: "#0A66C2" }}>
                    time
                  </span>
                  {", your "}
                  <mark style={{ padding: "0 0.12em", borderRadius: "0.14em", background: "#FFE3A8", color: "#1B2A44" }}>
                    attention
                  </mark>
                  {" and the "}
                  <em style={{ fontFamily: "var(--font-instrument-serif), Georgia, serif", fontWeight: "400", fontSize: "1.12em", letterSpacing: "-0.01em", color: "#0A7D6B" }}>
                    days that matter
                  </em>
                  {" — like "}
                  <Link href="/codeveda/" style={{ display: "inline-flex", alignItems: "center", gap: "10px", verticalAlign: "0.14em", padding: "6px 16px 6px 6px", borderRadius: "999px", background: "#15123A", color: "#FFF7EA", textDecoration: "none", fontFamily: "var(--font-bricolage), sans-serif", fontSize: "0.44em", fontWeight: "800", letterSpacing: "-0.02em", lineHeight: "1" }}>
                    <span aria-hidden="true" style={{ width: "34px", height: "34px", flex: "none", borderRadius: "999px", background: "#6B4CF6", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg viewBox="0 0 46 82" fill="none" aria-hidden="true" style={{ height: "17px", width: "10px" }}>
                        <circle cx="5.5" cy="26.5" r="6" fill="#FFF7EA" />
                        <circle cx="5.5" cy="54.5" r="6" fill="#FFF7EA" />
                        <path d="M21 4 H27 Q32 4 32 9 V33 L40 40.5 L32 48 V72 Q32 77 27 77 H21" stroke="#FFF7EA" strokeWidth="9" strokeLinejoin="round" />
                      </svg>
                    </span>
                    Codeveda
                  </Link>
                  {" for learning to code, and "}
                  <Link href="/foreverdays/" style={{ display: "inline-flex", alignItems: "center", gap: "10px", verticalAlign: "0.14em", padding: "6px 16px 6px 6px", borderRadius: "999px", background: "#F5EFE8", border: "1px solid #E8DED4", color: "#1E1A1A", textDecoration: "none", fontFamily: "var(--font-instrument-serif), Georgia, serif", fontWeight: "400", fontSize: "0.5em", letterSpacing: "0", lineHeight: "1" }}>
                    <img src="/images/foreverdays-icon.webp" alt="" width="34" height="34" style={{ display: "block", flex: "none", width: "34px", height: "34px", borderRadius: "9px" }} loading="lazy" decoding="async" />
                    ForeverDays
                  </Link>
                  {" for remembering the people you love."}
                </p>
                <ul aria-label="Kinds of products" style={{ margin: "36px 0 0", padding: "0", listStyle: "none", display: "flex", flexWrap: "wrap", gap: "10px" }}>
                  <li style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "10px 16px", borderRadius: "999px", background: "#E8F1FC", fontSize: "15px", fontWeight: "700", color: "#1B2A44" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0A66C2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="3" y="4" width="18" height="14" rx="2" />
                      <path d="M8 21h8M12 18v3" />
                    </svg>
                    Web apps
                  </li>
                  <li style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "10px 16px", borderRadius: "999px", background: "#E8F6F1", fontSize: "15px", fontWeight: "700", color: "#1B2A44" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0A7D6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="7" y="2" width="10" height="20" rx="2.5" />
                      <path d="M11 18h2" />
                    </svg>
                    Mobile apps
                  </li>
                  <li style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "10px 16px", borderRadius: "999px", background: "#E0F5F3", fontSize: "15px", fontWeight: "700", color: "#1B2A44" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00857A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M7 18a4.5 4.5 0 0 1-.6-8.96A6 6 0 0 1 18 8.5a4.5 4.5 0 0 1-.5 9.5z" />
                    </svg>
                    SaaS products
                  </li>
                  <li style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "10px 16px", borderRadius: "999px", background: "#FFF4DE", fontSize: "15px", fontWeight: "700", color: "#1B2A44" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#A35A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M2 5h6a4 4 0 0 1 4 4v12a3 3 0 0 0-3-3H2zM22 5h-6a4 4 0 0 0-4 4v12a3 3 0 0 1 3-3h7z" />
                    </svg>
                    Learning tools
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section id="products" style={{ background: "#F3F9F6", padding: "clamp(64px, 8vw, 112px) 0" }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(16px, 4vw, 40px)" }}>
              <div className="kl-reveal" style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "16px 48px", marginBottom: "48px" }}>
                <div style={{ flex: "1 1 520px", minWidth: "0" }}>
                  <p style={{ margin: "0", fontSize: "13px", fontWeight: "800", letterSpacing: "0.1em", textTransform: "uppercase", color: "#0A7D6B" }}>
                    The products
                  </p>
                  <h2 style={{ margin: "14px 0 0", fontFamily: "var(--font-nunito), var(--font-nunito-sans), sans-serif", fontWeight: "900", fontSize: "clamp(34px, 4.4vw, 58px)", lineHeight: "1.04", letterSpacing: "-0.03em", color: "#1B2A44" }}>
                    Two products, two personalities.
                  </h2>
                </div>
                <p style={{ flex: "0 1 420px", margin: "0", fontSize: "17px", lineHeight: "1.6", color: "#51607A" }}>
                  Each one is designed around the people who use it — a playful school for learning to code, and a calm little app for the days that matter. Open either for the full story.
                </p>
              </div>
              <article className="kl-reveal" style={{ display: "flex", flexWrap: "wrap", backgroundColor: "#15123A", backgroundImage: "radial-gradient(rgba(255,247,234,0.09) 1.2px, transparent 1.6px)", backgroundSize: "26px 26px", color: "#FFF7EA", border: "2px solid #0A0820", borderRadius: "28px", boxShadow: "8px 8px 0 #7B5CFF", overflow: "hidden", fontFamily: "var(--font-bricolage), system-ui, sans-serif" }}>
                <div style={{ flex: "1 1 440px", minWidth: "0", padding: "clamp(28px, 4vw, 56px)", display: "flex", flexDirection: "column", justifyContent: "center", gap: "22px" }}>
                  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px 14px" }}>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>
                      <svg viewBox="0 0 46 82" fill="none" aria-hidden="true" style={{ height: "28px", width: "16px" }}>
                        <circle cx="5.5" cy="26.5" r="6" fill="#FFF7EA" />
                        <circle cx="5.5" cy="54.5" r="6" fill="#FFF7EA" />
                        <path d="M21 4 H27 Q32 4 32 9 V33 L40 40.5 L32 48 V72 Q32 77 27 77 H21" stroke="#FFF7EA" strokeWidth="9" strokeLinejoin="round" />
                      </svg>
                      <h3 style={{ margin: "0", fontSize: "21px", fontWeight: "800", letterSpacing: "-0.04em", lineHeight: "1" }}>
                        CODEVEDA
                      </h3>
                    </span>
                    <span style={{ padding: "5px 12px", borderRadius: "999px", background: "rgba(185,166,255,0.16)", color: "#E4DCFF", fontSize: "13px", fontWeight: "600" }}>
                      Text-based courses · Web · Beta
                    </span>
                  </div>
                  <p style={{ margin: "6px 0 0", fontWeight: "800", fontSize: "clamp(52px, 5.6vw, 84px)", lineHeight: "0.94", letterSpacing: "-0.055em", color: "#FFF7EA" }}>
                    <span style={{ display: "block" }}>
                      read
                      <span style={{ fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace", fontWeight: "600", letterSpacing: "-0.06em", color: "#FFD23F" }}>
                        ()
                      </span>
                    </span>
                    <span style={{ display: "block" }}>
                      <span style={{ padding: "0 0.1em", borderRadius: "0.12em", background: "#7B5CFF" }}>
                        play
                      </span>
                      <span style={{ fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace", fontWeight: "600", letterSpacing: "-0.06em", color: "#FFD23F" }}>
                        ()
                      </span>
                    </span>
                    <span style={{ display: "block", color: "#3DDC97" }}>
                      get_it
                      <span style={{ fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace", fontWeight: "600", letterSpacing: "-0.06em", color: "#FFD23F" }}>
                        ()
                      </span>
                    </span>
                  </p>
                  <p style={{ margin: "0", maxWidth: "480px", fontSize: "17px", lineHeight: "1.6", color: "#D6D2EA" }}>
                    <strong style={{ color: "#FFF7EA", fontWeight: "700" }}>
                      Skip long videos.
                    </strong>
                    {" Short written lessons paired with interactive visuals you can drag, toggle and tweak — play with a concept until it clicks."}
                  </p>
                  <ul aria-label="Codeveda in numbers" style={{ margin: "0", padding: "0", listStyle: "none", display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    <li style={{ padding: "7px 12px", borderRadius: "999px", border: "1.5px solid rgba(255,247,234,0.28)", fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace", fontSize: "13px", fontWeight: "600" }}>
                      16 free courses
                    </li>
                    <li style={{ padding: "7px 12px", borderRadius: "999px", border: "1.5px solid rgba(255,247,234,0.28)", fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace", fontSize: "13px", fontWeight: "600" }}>
                      1,100+ chapters
                    </li>
                    <li style={{ padding: "7px 12px", borderRadius: "999px", border: "1.5px solid rgba(255,247,234,0.28)", fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace", fontSize: "13px", fontWeight: "600" }}>
                      1,000+ learners
                    </li>
                  </ul>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", marginTop: "4px" }}>
                    <Link href="/codeveda/" style={{ display: "inline-flex", alignItems: "center", gap: "8px", minHeight: "52px", padding: "0 22px", borderRadius: "14px", border: "2px solid #0A0820", background: "#6B4CF6", color: "#FFFFFF", boxShadow: "4px 4px 0 #0A0820", textDecoration: "none", fontWeight: "700", fontSize: "16px" }}>
                      Explore Codeveda
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </Link>
                    <a href="https://www.codeveda.dev" style={{ display: "inline-flex", alignItems: "center", gap: "8px", minHeight: "52px", padding: "0 22px", borderRadius: "14px", border: "2px solid rgba(255,247,234,0.5)", color: "#FFF7EA", textDecoration: "none", fontWeight: "700", fontSize: "16px" }}>
                      codeveda.dev
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M14 5h5v5M19 5l-8 8M18 14v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h4" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div aria-hidden="true" style={{ flex: "1 1 460px", minWidth: "0", padding: "clamp(28px, 4vw, 56px) clamp(20px, 3vw, 44px)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ position: "relative", width: "100%", maxWidth: "480px", height: "460px" }}>
                    <span className="kl-wiggle" style={{ position: "absolute", right: "0", top: "-4px", zIndex: "5", transform: "rotate(-5deg)", fontFamily: "var(--font-caveat), cursive", fontSize: "28px", fontWeight: "700", color: "#FFD23F", whiteSpace: "nowrap" }}>
                      drag it. tweak it. get it.
                    </span>
                    <span className="kl-float-sm" style={{ position: "absolute", right: "2%", top: "84px", width: "30px", height: "30px", borderRadius: "999px", background: "#FF6B5B", border: "2px solid #0A0820" }} />
                    <span className="kl-spin" style={{ position: "absolute", right: "8%", bottom: "18px", width: "26px", height: "26px", background: "#3DDC97", border: "2px solid #0A0820", transform: "rotate(45deg)" }} />
                    <div className="kl-float" style={{ position: "absolute", left: "0", top: "40px", width: "78%", padding: "20px 20px 24px", background: "#FFF7EA", color: "#15123A", border: "2px solid #0A0820", borderRadius: "20px", boxShadow: "7px 7px 0 #0A0820", transform: "rotate(-6deg)" }}>
                      <span style={{ fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace", fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em" }}>
                        01 · READ
                      </span>
                      <span style={{ display: "block", margin: "8px 0 12px", fontSize: "24px", fontWeight: "800", letterSpacing: "-0.03em" }}>
                        Arrow functions
                      </span>
                      <span style={{ display: "block", width: "92%", height: "8px", marginBottom: "8px", borderRadius: "999px", background: "#DCD5EE" }} />
                      <span style={{ display: "block", width: "60%", height: "8px", marginBottom: "8px", borderRadius: "999px", background: "#FFD23F" }} />
                      <span style={{ display: "block", width: "82%", height: "8px", borderRadius: "999px", background: "#DCD5EE" }} />
                    </div>
                    <div className="kl-float" style={{ animationDuration: "8s", animationDelay: "-2.5s", position: "absolute", left: "18%", top: "176px", zIndex: "2", width: "76%", padding: "20px", background: "#7B5CFF", color: "#FFF7EA", border: "2px solid #0A0820", borderRadius: "20px", boxShadow: "7px 7px 0 #0A0820", transform: "rotate(4deg)" }}>
                      <span style={{ fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace", fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em" }}>
                        02 · PLAY
                      </span>
                      <div style={{ marginTop: "16px", display: "flex", alignItems: "center", gap: "14px" }}>
                        <span style={{ position: "relative", flex: "1", height: "10px", borderRadius: "999px", background: "rgba(255,247,234,0.35)", border: "2px solid #0A0820" }}>
                          <span style={{ position: "absolute", left: "0", top: "0", bottom: "0", width: "58%", borderRadius: "999px", background: "#FFD23F" }} />
                          <span style={{ position: "absolute", left: "58%", top: "50%", width: "20px", height: "20px", margin: "-10px 0 0 -10px", borderRadius: "999px", background: "#FFF7EA", border: "2px solid #0A0820" }} />
                        </span>
                        <span style={{ flex: "none", width: "46px", height: "26px", padding: "2px", borderRadius: "999px", background: "#3DDC97", border: "2px solid #0A0820", display: "flex", justifyContent: "flex-end" }}>
                          <span style={{ width: "18px", height: "18px", borderRadius: "999px", background: "#FFF7EA", border: "2px solid #0A0820" }} />
                        </span>
                      </div>
                      <div style={{ marginTop: "16px", display: "flex", gap: "10px" }}>
                        <span style={{ width: "44px", height: "44px", borderRadius: "11px", background: "#FFD23F", color: "#15123A", border: "2px solid #0A0820", boxShadow: "3px 3px 0 #0A0820", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace", fontWeight: "700" }}>
                          A
                        </span>
                        <span style={{ width: "44px", height: "44px", borderRadius: "11px", background: "#3DDC97", color: "#15123A", border: "2px solid #0A0820", boxShadow: "3px 3px 0 #0A0820", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace", fontWeight: "700" }}>
                          B
                        </span>
                        <span style={{ width: "44px", height: "44px", borderRadius: "11px", background: "#FF6B5B", color: "#15123A", border: "2px solid #0A0820", boxShadow: "3px 3px 0 #0A0820", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace", fontWeight: "700" }}>
                          C
                        </span>
                      </div>
                    </div>
                    <div className="kl-float-sm" style={{ animationDelay: "-1s", position: "absolute", left: "6%", top: "326px", zIndex: "3", width: "64%", padding: "18px 20px", background: "#FFD23F", color: "#15123A", border: "2px solid #0A0820", borderRadius: "20px", boxShadow: "7px 7px 0 #0A0820", transform: "rotate(-2.5deg)" }}>
                      <span style={{ fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace", fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em" }}>
                        03 · CHECK
                      </span>
                      <span style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px", marginTop: "8px" }}>
                        <span style={{ fontSize: "20px", fontWeight: "800", letterSpacing: "-0.02em" }}>
                          3 / 3
                        </span>
                        <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "6px 12px", borderRadius: "999px", background: "#15123A", color: "#FFF7EA", fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace", fontSize: "12px", fontWeight: "600" }}>
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#3DDC97" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M5 12.5l4.5 4.5L19 7.5" />
                          </svg>
                          All tests pass
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </article>
              <article className="kl-reveal" style={{ marginTop: "40px", display: "flex", flexDirection: "row-reverse", flexWrap: "wrap", background: "#F5EFE8", color: "#1E1A1A", border: "1px solid #E8DED4", borderRadius: "28px", overflow: "hidden", fontFamily: "-apple-system, BlinkMacSystemFont, var(--font-inter), 'Segoe UI', sans-serif" }}>
                <div style={{ flex: "1 1 440px", minWidth: "0", padding: "clamp(28px, 4vw, 56px)", display: "flex", flexDirection: "column", justifyContent: "center", gap: "22px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                    <img src="/images/foreverdays-icon.webp" alt="" width="56" height="56" style={{ display: "block", flex: "none", width: "56px", height: "56px", borderRadius: "13px", boxShadow: "0 10px 24px rgba(179,54,80,0.24)" }} loading="lazy" decoding="async" />
                    <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                      <h3 style={{ margin: "0", fontFamily: "var(--font-instrument-serif), Georgia, serif", fontWeight: "400", fontSize: "32px", lineHeight: "1" }}>
                        ForeverDays
                      </h3>
                      <span style={{ fontSize: "14px", color: "#6E6660" }}>
                        For the days, worth remembering
                      </span>
                    </div>
                  </div>
                  <p style={{ margin: "6px 0 0", fontFamily: "var(--font-instrument-serif), Georgia, serif", fontSize: "clamp(50px, 5.4vw, 80px)", lineHeight: "0.98", letterSpacing: "-0.015em" }}>
                    {"Remember every day that "}
                    <em style={{ color: "#B33650" }}>
                      matters.
                    </em>
                  </p>
                  <p style={{ margin: "0", maxWidth: "480px", fontSize: "17px", lineHeight: "1.6", color: "#6E6660" }}>
                    Birthdays, anniversaries, milestones and festivals — counted down, gently reminded and planned for, all in one calm little app.
                  </p>
                  <ul style={{ margin: "0", padding: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "12px", fontSize: "16px", lineHeight: "1.45" }}>
                    <li style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#B33650" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none", marginTop: "1px" }}>
                        <path d="M5 12.5l4.5 4.5L19 7.5" />
                      </svg>
                      Countdowns and preparation checklists
                    </li>
                    <li style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#B33650" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none", marginTop: "1px" }}>
                        <path d="M5 12.5l4.5 4.5L19 7.5" />
                      </svg>
                      Reminders at the exact day and time you pick
                    </li>
                    <li style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#B33650" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none", marginTop: "1px" }}>
                        <path d="M5 12.5l4.5 4.5L19 7.5" />
                      </svg>
                      Festivals like Karwa Chauth, right on your calendar
                    </li>
                  </ul>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginTop: "4px" }}>
                    <Link href="/foreverdays/" style={{ display: "inline-flex", alignItems: "center", gap: "8px", minHeight: "52px", padding: "0 24px", borderRadius: "999px", background: "#B33650", color: "#FFFFFF", textDecoration: "none", fontWeight: "600", fontSize: "16px", boxShadow: "0 10px 24px rgba(179,54,80,0.22)" }}>
                      Explore ForeverDays
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </Link>
                    <a href="#" style={{ display: "inline-flex", alignItems: "center", minHeight: "52px", padding: "0 22px", borderRadius: "999px", background: "#FDFBF9", color: "#1E1A1A", border: "1px solid #E3D8CD", textDecoration: "none", fontWeight: "600", fontSize: "16px" }}>
                      Get the app [link]
                    </a>
                  </div>
                  <p style={{ margin: "0", fontSize: "14px", color: "#6E6660" }}>
                    Available on [iOS · Android (soon)]
                  </p>
                </div>
                <div style={{ flex: "1 1 460px", minWidth: "0", background: "#EFE6DC", padding: "clamp(28px, 4vw, 56px) clamp(16px, 3vw, 40px)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ position: "relative", width: "100%", maxWidth: "460px", height: "600px" }}>
                    <div className="kl-float" style={{ animationDuration: "9s", animationDelay: "-3s", position: "absolute", left: "0", top: "64px", width: "220px", maxWidth: "58%", padding: "8px", borderRadius: "38px", background: "#2A2422", boxShadow: "0 28px 56px rgba(120,60,60,0.18)", transform: "rotate(-6deg)" }}>
                      <img src="/images/foreverdays-calendar.webp" alt="ForeverDays Calendar screen with Karwa Chauth on Thursday, 29 October" style={{ display: "block", width: "100%", height: "auto", borderRadius: "31px" }} width="920" height="2000" loading="lazy" decoding="async" />
                    </div>
                    <div className="kl-float" style={{ animationDuration: "8s", position: "absolute", right: "2%", top: "0", zIndex: "2", width: "268px", maxWidth: "72%", padding: "9px", borderRadius: "46px", background: "#2A2422", boxShadow: "0 36px 72px rgba(120,60,60,0.24)" }}>
                      <img src="/images/foreverdays-upcoming.webp" alt="ForeverDays Upcoming screen: Wedding Anniversary in 23 days, with a reminder and preparation checklist" style={{ display: "block", width: "100%", height: "auto", borderRadius: "38px" }} width="920" height="2000" loading="lazy" decoding="async" />
                    </div>
                    <div className="kl-float-sm" style={{ animationDelay: "-2s", position: "absolute", left: "0", bottom: "22px", zIndex: "3", width: "280px", maxWidth: "86%", padding: "14px 16px", borderRadius: "22px", background: "#FDFBF9", boxShadow: "0 18px 44px rgba(80,40,40,0.16)", display: "flex", alignItems: "flex-start", gap: "12px" }}>
                      <span aria-hidden="true" style={{ width: "40px", height: "40px", flex: "none", borderRadius: "999px", background: "#F7E4E6", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#B33650" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                          <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                        </svg>
                      </span>
                      <span style={{ minWidth: "0", display: "flex", flexDirection: "column", gap: "3px" }}>
                        <span style={{ fontSize: "13px", fontWeight: "600", color: "#B33650" }}>
                          Next reminder · Wed, 11 Nov, 8:00 PM
                        </span>
                        <span style={{ fontSize: "14px", lineHeight: "1.4" }}>
                          Wedding Anniversary is in 7 days. Start planning!
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </section>
          <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "clamp(64px, 8vw, 112px) clamp(16px, 4vw, 40px)" }}>
            <div className="kl-reveal" style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "16px 48px" }}>
              <div style={{ flex: "1 1 520px", minWidth: "0" }}>
                <p style={{ margin: "0", fontSize: "13px", fontWeight: "800", letterSpacing: "0.1em", textTransform: "uppercase", color: "#0A7D6B" }}>
                  The Kriralife way
                </p>
                <h2 style={{ margin: "14px 0 0", maxWidth: "18ch", fontFamily: "var(--font-nunito), var(--font-nunito-sans), sans-serif", fontWeight: "900", fontSize: "clamp(34px, 4.4vw, 58px)", lineHeight: "1.04", letterSpacing: "-0.03em", color: "#1B2A44" }}>
                  Small products. Sharp focus. Long-term care.
                </h2>
              </div>
              <p style={{ flex: "0 1 400px", margin: "0", fontSize: "17px", lineHeight: "1.6", color: "#51607A" }}>
                Three rules every Kriralife product is built on — from the first sketch to the hundredth update.
              </p>
            </div>
            <div className="kl-reveal" style={{ marginTop: "48px", display: "flex", flexWrap: "wrap", gap: "20px" }}>
              <div className="kl-lift" style={{ flex: "1 1 280px", minWidth: "0", padding: "30px", background: "#FFFFFF", border: "1px solid #E3ECE8", borderTop: "5px solid #1BA982", borderRadius: "26px", display: "flex", flexDirection: "column", gap: "14px" }}>
                <span aria-hidden="true" style={{ width: "54px", height: "54px", borderRadius: "18px", background: "#E8F6F1", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0A7D6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="9" />
                    <circle cx="12" cy="12" r="5" />
                    <circle cx="12" cy="12" r="1" />
                  </svg>
                </span>
                <span style={{ fontSize: "14px", fontWeight: "800", color: "#0A7D6B" }}>
                  01
                </span>
                <h3 style={{ margin: "0", fontFamily: "var(--font-nunito), var(--font-nunito-sans), sans-serif", fontSize: "23px", fontWeight: "800", letterSpacing: "-0.01em" }}>
                  Do one job well
                </h3>
                <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#51607A" }}>
                  Every product solves a single, clear problem — and leaves out everything that gets in the way.
                </p>
              </div>
              <div className="kl-lift" style={{ flex: "1 1 280px", minWidth: "0", padding: "30px", background: "#FFFFFF", border: "1px solid #E3ECE8", borderTop: "5px solid #0780F0", borderRadius: "26px", display: "flex", flexDirection: "column", gap: "14px" }}>
                <span aria-hidden="true" style={{ width: "54px", height: "54px", borderRadius: "18px", background: "#E8F1FC", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0A66C2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 12a9 9 0 1 1-3-6.7L21 8" />
                    <path d="M21 3v5h-5" />
                  </svg>
                </span>
                <span style={{ fontSize: "14px", fontWeight: "800", color: "#0A66C2" }}>
                  02
                </span>
                <h3 style={{ margin: "0", fontFamily: "var(--font-nunito), var(--font-nunito-sans), sans-serif", fontSize: "23px", fontWeight: "800", letterSpacing: "-0.01em" }}>
                  Ship, then listen
                </h3>
                <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#51607A" }}>
                  Products go out early and get better fast — real feedback shapes every update.
                </p>
              </div>
              <div className="kl-lift" style={{ flex: "1 1 280px", minWidth: "0", padding: "30px", background: "#FFFFFF", border: "1px solid #E3ECE8", borderTop: "5px solid #FEAE33", borderRadius: "26px", display: "flex", flexDirection: "column", gap: "14px" }}>
                <span aria-hidden="true" style={{ width: "54px", height: "54px", borderRadius: "18px", background: "#FFF4DE", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#A35A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                </span>
                <span style={{ fontSize: "14px", fontWeight: "800", color: "#A35A00" }}>
                  03
                </span>
                <h3 style={{ margin: "0", fontFamily: "var(--font-nunito), var(--font-nunito-sans), sans-serif", fontSize: "23px", fontWeight: "800", letterSpacing: "-0.01em" }}>
                  Built to last
                </h3>
                <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#51607A" }}>
                  Simple, fast and looked after for the long run — no surprise shutdowns, no bloat.
                </p>
              </div>
            </div>
          </section>
          <section id="about" style={{ background: "#F3F9F6", padding: "clamp(64px, 8vw, 112px) 0" }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(16px, 4vw, 40px)", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "40px 72px" }}>
              <div className="kl-reveal" style={{ flex: "1 1 340px", minWidth: "0", maxWidth: "460px", position: "relative" }}>
                <img src="/images/bhaskar-das.webp" alt="Bhaskar Das, the maker behind Kriralife" style={{ position: "relative", display: "block", width: "100%", height: "auto", aspectRatio: "960 / 913", borderRadius: "32px", background: "#EEF8F3" }} width="960" height="913" loading="lazy" decoding="async" />
              </div>
              <div className="kl-reveal" style={{ flex: "1 1 480px", minWidth: "0" }}>
                <p style={{ margin: "0", fontSize: "13px", fontWeight: "800", letterSpacing: "0.1em", textTransform: "uppercase", color: "#0A7D6B" }}>
                  The maker
                </p>
                <h2 style={{ margin: "14px 0 0", fontFamily: "var(--font-nunito), var(--font-nunito-sans), sans-serif", fontWeight: "900", fontSize: "clamp(34px, 4.4vw, 56px)", lineHeight: "1.06", letterSpacing: "-0.03em", color: "#1B2A44" }}>
                  Hi, I'm Bhaskar Das — the person behind Kriralife.
                </h2>
                <p style={{ margin: "24px 0 0", fontSize: "clamp(19px, 1.8vw, 22px)", lineHeight: "1.55", color: "#1B2A44" }}>
                  I'm a developer who builds the products I wish existed. I take each one from idea to launch — design, code and support — so every detail gets real attention.
                </p>
                <p style={{ margin: "18px 0 0", fontSize: "17px", lineHeight: "1.7", color: "#51607A" }}>
                  Codeveda started as a way out of tutorial hell — learning to code by reading and playing, not sitting through hours of video. ForeverDays came from [the date you almost forgot]. Both keep improving based on what people who use them tell me.
                </p>
                <div style={{ marginTop: "32px", display: "flex", flexWrap: "wrap", gap: "12px" }}>
                  <a href="#contact" style={{ display: "inline-flex", alignItems: "center", minHeight: "50px", padding: "0 24px", borderRadius: "999px", background: "#0A7D6B", color: "#FFFFFF", textDecoration: "none", fontWeight: "700", fontSize: "16px" }}>
                    Say hello
                  </a>
                  <a href={socialLink("GitHub")} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", minHeight: "50px", padding: "0 22px", borderRadius: "999px", background: "#FFFFFF", color: "#1B2A44", border: "1.5px solid #CBD6E2", textDecoration: "none", fontWeight: "700", fontSize: "16px" }}>
                    GitHub
                  </a>
                  <a href={socialLink("LinkedIn")} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", minHeight: "50px", padding: "0 22px", borderRadius: "999px", background: "#FFFFFF", color: "#1B2A44", border: "1.5px solid #CBD6E2", textDecoration: "none", fontWeight: "700", fontSize: "16px" }}>
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section id="journal" style={{ maxWidth: "1200px", margin: "0 auto", padding: "clamp(64px, 8vw, 112px) clamp(16px, 4vw, 40px)" }}>
            <div className="kl-reveal" style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "16px 48px" }}>
              <div style={{ flex: "1 1 520px", minWidth: "0" }}>
                <p style={{ margin: "0", fontSize: "13px", fontWeight: "800", letterSpacing: "0.1em", textTransform: "uppercase", color: "#0A7D6B" }}>
                  Journal
                </p>
                <h2 style={{ margin: "14px 0 0", fontFamily: "var(--font-nunito), var(--font-nunito-sans), sans-serif", fontWeight: "900", fontSize: "clamp(34px, 4.4vw, 58px)", lineHeight: "1.04", letterSpacing: "-0.03em", color: "#1B2A44" }}>
                  Fresh from the studio.
                </h2>
              </div>
              <Link href={ROUTES.updates} style={{ display: "inline-flex", alignItems: "center", gap: "8px", minHeight: "50px", padding: "0 22px", borderRadius: "999px", background: "#FFFFFF", color: "#1B2A44", border: "1.5px solid #CBD6E2", textDecoration: "none", fontWeight: "700", fontSize: "16px" }}>
                All updates
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>
            {updates.length > 0 ? (
              <div className="kl-reveal" style={{ marginTop: "48px", display: "flex", flexWrap: "wrap", gap: "24px" }}>
                {updates.map((update) => (
                  <UpdateCard key={update.id} update={update} />
                ))}
              </div>
            ) : (
              <p className="kl-reveal" style={{ margin: "48px 0 0", fontSize: "17px", lineHeight: "1.6", color: "#51607A" }}>
                New updates are on their way. Meanwhile, see what&apos;s new on <a href={`${CODEVEDA_URL}/updates`}>codeveda.dev</a>.
              </p>
            )}
          </section>
          <section id="follow" style={{ padding: "0 clamp(16px, 4vw, 40px) clamp(64px, 8vw, 112px)" }}>
            <div className="kl-reveal" style={{ position: "relative", overflow: "hidden", maxWidth: "1120px", margin: "0 auto", padding: "clamp(36px, 5vw, 64px)", borderRadius: "36px", background: "#1B2A44", color: "#FFFFFF", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "32px 56px" }}>
              <span aria-hidden="true" className="kl-follow-dot" style={{ position: "absolute", right: "-60px", top: "-70px", width: "220px", height: "220px", borderRadius: "999px", background: "#FEAE33" }} />
              <svg aria-hidden="true" viewBox="0 0 200 200" style={{ position: "absolute", left: "-50px", bottom: "-70px", width: "240px", height: "240px", transform: "rotate(-24deg)" }}>
                <path d="M20 180 C 20 90, 80 20, 180 20 C 180 120, 120 180, 20 180 Z" fill="#1BA982" fillOpacity="0.28" />
              </svg>
              <div style={{ position: "relative", flex: "1 1 420px", minWidth: "0" }}>
                <p style={{ margin: "0", fontSize: "13px", fontWeight: "800", letterSpacing: "0.1em", textTransform: "uppercase", color: "#8FDF73" }}>
                  Follow along
                </p>
                <h2 style={{ margin: "14px 0 0", fontFamily: "var(--font-nunito), var(--font-nunito-sans), sans-serif", fontWeight: "900", fontSize: "clamp(32px, 3.8vw, 50px)", lineHeight: "1.04", letterSpacing: "-0.03em", color: "#FFFFFF" }}>
                  Stay in the loop.
                </h2>
                <p style={{ margin: "14px 0 0", maxWidth: "460px", fontSize: "17px", lineHeight: "1.6", color: "#C9D3E0" }}>
                  New Codeveda courses, ForeverDays features and life at Kriralife — follow along on social for every update as it ships.
                </p>
              </div>
              <ul aria-label="Social profiles" style={{ position: "relative", flex: "1 1 380px", minWidth: "0", margin: "0", padding: "0", listStyle: "none", display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {SOCIAL_LINKS.map((social, i) => (
                  <li key={social.name}>
                    <a href={social.href} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "8px", minHeight: "54px", padding: "0 24px", borderRadius: "999px", background: i === 0 ? "#FEAE33" : "#FFFFFF", color: "#1B2A44", textDecoration: "none", fontSize: "16px", fontWeight: "800" }}>
                      {social.name}
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M7 17L17 7M9 7h8v8" />
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
