import type { Metadata, Viewport } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import FlexPlayground from "@/components/codeveda/FlexPlayground";
import OutputQuiz from "@/components/codeveda/OutputQuiz";
import { codevedaFonts } from "@/lib/fonts";
import { pageMetadata } from "@/lib/metadata";
import { ORG_REF, ROUTES, SITE_NAME, WEBSITE_REF, absoluteUrl } from "@/lib/site";

const title = "Codeveda — Learn to code by reading and playing";
const description =
  "Skip long videos. Codeveda pairs short written coding lessons with interactive visuals to drag and tweak. 16 free courses: Python, JavaScript, React & more.";

export const metadata: Metadata = pageMetadata({
  path: ROUTES.codeveda,
  title,
  socialTitle: `${title} | ${SITE_NAME}`,
  description,
  keywords: ["Codeveda", "learn to code", "free coding courses", "interactive coding lessons", "text-based programming courses", "Python course", "JavaScript course", "React course", "tutorial hell"],
});

export const viewport: Viewport = { themeColor: "#15123A" };

const COURSES: [string, string][] = [
  ["Python Mastery", "python-mastery-from-basics-to-brilliance"],
  ["JavaScript Fundamentals", "javascript-fundamentals"],
  ["TypeScript Foundations", "typescript-foundations"],
  ["FastAPI — Beginner to Pro", "fastapi-beginner-to-pro"],
  ["Express.js Mastery", "expressjs-mastery"],
  ["AI Engineering Core", "ai-engineering-core"],
  ["Node.js", "nodejs-code-outside-the-browser"],
  ["React Mastery", "react-mastery"],
  ["HTML & CSS Mastery", "html-css-mastery"],
  ["Advanced JavaScript", "advance-javascript-dom-bom-web-api"],
  ["DBMS", "database-management-system-dbms"],
  ["AWS Cloud Practitioner", "aws-certified-cloud-practitioner"],
];

const pageUrl = absoluteUrl(ROUTES.codeveda);
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "@id": `${pageUrl}#app`,
      name: "Codeveda",
      url: "https://www.codeveda.dev",
      description,
      applicationCategory: "EducationalApplication",
      operatingSystem: "Web",
      isAccessibleForFree: true,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      publisher: ORG_REF,
      sameAs: [
        "https://www.codeveda.dev",
        "https://github.com/codevedadev",
        "https://www.youtube.com/@codeveda-dev",
        "https://www.instagram.com/codeveda.dev",
        "https://www.linkedin.com/company/codeveda-dev",
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: title,
      description,
      isPartOf: WEBSITE_REF,
      about: { "@id": `${pageUrl}#app` },
      breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
      inLanguage: "en",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: SITE_NAME, item: absoluteUrl(ROUTES.home) },
        { "@type": "ListItem", position: 2, name: "Codeveda", item: pageUrl },
      ],
    },
    {
      "@type": "ItemList",
      name: "Codeveda courses",
      itemListElement: COURSES.map(([name, slug], i) => ({
        "@type": "ListItem",
        position: i + 1,
        name,
        url: `https://www.codeveda.dev/courses/${slug}`,
      })),
    },
  ],
};

export default function CodevedaPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <div className={`page-codeveda ${codevedaFonts}`} style={{ width: "100%", background: "#15123A", color: "#15123A", fontFamily: "var(--font-bricolage), system-ui, sans-serif" }}>
        <header style={{ position: "sticky", top: "0", zIndex: "20", background: "rgba(21,18,58,0.94)", backdropFilter: "blur(10px)", borderBottom: "1px solid rgba(255,247,234,0.1)" }}>
          <nav aria-label="Primary" style={{ maxWidth: "1200px", margin: "0 auto", padding: "12px clamp(16px, 4vw, 40px)", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "8px 24px" }}>
            <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "10px", minHeight: "44px", textDecoration: "none", color: "#FFF7EA", fontWeight: "700", fontSize: "20px", letterSpacing: "-0.02em" }}>
              <img src="/images/kriralife-logo-light.png" alt="Kriralife" width="121" height="34" style={{ display: "block", width: "auto", height: "34px" }} decoding="async" />
            </Link>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "4px" }}>
              <Link href="/" style={{ display: "inline-flex", alignItems: "center", minHeight: "44px", padding: "0 14px", borderRadius: "999px", textDecoration: "none", color: "#D6D2EA", fontSize: "15px", fontWeight: "500" }}>
                Home
              </Link>
              <Link href="/codeveda/" aria-current="page" style={{ display: "inline-flex", alignItems: "center", gap: "8px", minHeight: "44px", padding: "0 14px", borderRadius: "999px", textDecoration: "none", color: "#FFF7EA", background: "rgba(185,166,255,0.18)", fontSize: "15px", fontWeight: "600" }}>
                <span aria-hidden="true" style={{ width: "8px", height: "8px", borderRadius: "3px", background: "#8C72FF" }} />
                Codeveda
              </Link>
              <Link href="/foreverdays/" style={{ display: "inline-flex", alignItems: "center", gap: "8px", minHeight: "44px", padding: "0 14px", borderRadius: "999px", textDecoration: "none", color: "#D6D2EA", fontSize: "15px", fontWeight: "500" }}>
                <span aria-hidden="true" style={{ width: "8px", height: "8px", borderRadius: "3px", background: "#E0577A" }} />
                ForeverDays
              </Link>
              <a href="https://www.codeveda.dev/courses" style={{ display: "inline-flex", alignItems: "center", minHeight: "44px", padding: "0 18px", marginLeft: "8px", borderRadius: "12px", border: "2px solid #0A0820", textDecoration: "none", color: "#FFFFFF", background: "#6B4CF6", boxShadow: "3px 3px 0 #0A0820", fontSize: "15px", fontWeight: "700" }}>
                Start reading
              </a>
            </div>
          </nav>
        </header>
        <main id="main">
          <section style={{ backgroundColor: "#15123A", backgroundImage: "radial-gradient(rgba(255,247,234,0.09) 1.2px, transparent 1.6px)", backgroundSize: "26px 26px", color: "#FFF7EA" }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "clamp(48px, 7vw, 96px) clamp(16px, 4vw, 40px) clamp(56px, 7vw, 96px)", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "56px" }}>
              <div style={{ flex: "1 1 500px", minWidth: "0" }}>
                <div className="kl-in" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "12px 14px" }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "10px", color: "#FFF7EA" }}>
                    <svg viewBox="0 0 46 82" fill="none" aria-hidden="true" style={{ height: "30px", width: "17px" }}>
                      <circle cx="5.5" cy="26.5" r="6" fill="currentColor" />
                      <circle cx="5.5" cy="54.5" r="6" fill="currentColor" />
                      <path d="M21 4 H27 Q32 4 32 9 V33 L40 40.5 L32 48 V72 Q32 77 27 77 H21" stroke="currentColor" strokeWidth="9" strokeLinejoin="round" />
                    </svg>
                    <span style={{ fontSize: "22px", fontWeight: "800", letterSpacing: "-0.04em", lineHeight: "1" }}>
                      CODEVEDA
                    </span>
                  </span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 12px 6px 8px", borderRadius: "999px", background: "rgba(185,166,255,0.14)", color: "#E4DCFF", fontSize: "14px", fontWeight: "600" }}>
                    <span aria-hidden="true" style={{ width: "20px", height: "20px", borderRadius: "999px", background: "#3DDC97", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#15123A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M7 17L17 7M8 7h9v9" />
                      </svg>
                    </span>
                    Escape tutorial hell
                  </span>
                </div>
                <h1 className="kl-in" style={{ animationDelay: "90ms", margin: "30px 0 0", fontWeight: "800", fontSize: "clamp(64px, 9vw, 128px)", lineHeight: "0.94", letterSpacing: "-0.055em", color: "#FFF7EA" }}>
                  <span className="sr-only">Codeveda: learn to code by reading and playing — </span>
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
                </h1>
                <p className="kl-in" style={{ animationDelay: "180ms", margin: "30px 0 0", maxWidth: "520px", fontSize: "clamp(18px, 1.6vw, 21px)", lineHeight: "1.55", color: "#D6D2EA" }}>
                  <strong style={{ color: "#FFF7EA", fontWeight: "700" }}>
                    Skip long videos.
                  </strong>
                  {" Codeveda pairs short written lessons with interactive visuals you can drag, toggle and tweak — so you play with a concept until it clicks."}
                </p>
                <div className="kl-in" style={{ animationDelay: "270ms", display: "flex", flexWrap: "wrap", gap: "14px", marginTop: "34px" }}>
                  <a href="https://www.codeveda.dev/courses" style={{ display: "inline-flex", alignItems: "center", gap: "8px", minHeight: "54px", padding: "0 24px", borderRadius: "14px", border: "2px solid #0A0820", background: "#6B4CF6", color: "#FFFFFF", boxShadow: "5px 5px 0 #0A0820", textDecoration: "none", fontWeight: "700", fontSize: "17px" }}>
                    Start reading
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </a>
                  <a href="https://www.codeveda.dev" style={{ display: "inline-flex", alignItems: "center", gap: "8px", minHeight: "54px", padding: "0 24px", borderRadius: "14px", border: "2px solid rgba(255,247,234,0.5)", color: "#FFF7EA", textDecoration: "none", fontWeight: "700", fontSize: "17px" }}>
                    Visit codeveda.dev
                  </a>
                </div>
                <p className="kl-in" style={{ animationDelay: "340ms", margin: "26px 0 0", fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace", fontSize: "13px", color: "#B4AFCF" }}>
                  16 free courses · 1,100+ chapters · 1,000+ learners
                </p>
              </div>
              <div aria-hidden="true" className="kl-in" style={{ animationDelay: "200ms", flex: "1 1 460px", minWidth: "0" }}>
                <div style={{ position: "relative", width: "100%", maxWidth: "540px", height: "520px", margin: "0 auto" }}>
                  <span className="kl-wiggle" style={{ position: "absolute", right: "0", top: "-6px", zIndex: "5", transform: "rotate(-5deg)", fontFamily: "var(--font-caveat), cursive", fontSize: "30px", fontWeight: "700", color: "#FFD23F", whiteSpace: "nowrap" }}>
                    drag it. tweak it. get it.
                  </span>
                  <span className="kl-float-sm" style={{ position: "absolute", right: "3%", top: "96px", width: "34px", height: "34px", borderRadius: "999px", background: "#FF6B5B", border: "2px solid #0A0820" }} />
                  <span className="kl-spin" style={{ position: "absolute", right: "9%", bottom: "26px", width: "30px", height: "30px", background: "#3DDC97", border: "2px solid #0A0820", transform: "rotate(45deg)" }} />
                  <span className="kl-float-sm" style={{ animationDelay: "-2s", position: "absolute", left: "2%", bottom: "6px", width: "46px", height: "18px", borderRadius: "999px", background: "#7CC4FF", border: "2px solid #0A0820", transform: "rotate(-14deg)" }} />
                  <div className="kl-float" style={{ position: "absolute", left: "0", top: "44px", width: "80%", padding: "22px 22px 26px", background: "#FFF7EA", color: "#15123A", border: "2px solid #0A0820", borderRadius: "22px", boxShadow: "8px 8px 0 #0A0820", transform: "rotate(-6deg)" }}>
                    <span style={{ fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace", fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em" }}>
                      01 · READ
                    </span>
                    <span style={{ display: "block", margin: "10px 0 14px", fontSize: "26px", fontWeight: "800", letterSpacing: "-0.03em" }}>
                      Arrow functions
                    </span>
                    <span style={{ display: "block", width: "92%", height: "9px", marginBottom: "9px", borderRadius: "999px", background: "#DCD5EE" }} />
                    <span style={{ display: "block", width: "62%", height: "9px", marginBottom: "9px", borderRadius: "999px", background: "#FFD23F" }} />
                    <span style={{ display: "block", width: "84%", height: "9px", marginBottom: "9px", borderRadius: "999px", background: "#DCD5EE" }} />
                    <span style={{ display: "block", width: "70%", height: "9px", borderRadius: "999px", background: "#DCD5EE" }} />
                  </div>
                  <div className="kl-float" style={{ animationDuration: "8s", animationDelay: "-2.5s", position: "absolute", left: "16%", top: "196px", zIndex: "2", width: "78%", padding: "22px", background: "#7B5CFF", color: "#FFF7EA", border: "2px solid #0A0820", borderRadius: "22px", boxShadow: "8px 8px 0 #0A0820", transform: "rotate(4deg)" }}>
                    <span style={{ fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace", fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em" }}>
                      02 · PLAY
                    </span>
                    <div style={{ marginTop: "18px", display: "flex", alignItems: "center", gap: "16px" }}>
                      <span style={{ position: "relative", flex: "1", height: "10px", borderRadius: "999px", background: "rgba(255,247,234,0.35)", border: "2px solid #0A0820" }}>
                        <span style={{ position: "absolute", left: "0", top: "0", bottom: "0", width: "58%", borderRadius: "999px", background: "#FFD23F" }} />
                        <span style={{ position: "absolute", left: "58%", top: "50%", width: "22px", height: "22px", margin: "-11px 0 0 -11px", borderRadius: "999px", background: "#FFF7EA", border: "2px solid #0A0820" }} />
                      </span>
                      <span style={{ flex: "none", width: "48px", height: "28px", padding: "2px", borderRadius: "999px", background: "#3DDC97", border: "2px solid #0A0820", display: "flex", justifyContent: "flex-end" }}>
                        <span style={{ width: "20px", height: "20px", borderRadius: "999px", background: "#FFF7EA", border: "2px solid #0A0820" }} />
                      </span>
                    </div>
                    <div style={{ marginTop: "18px", display: "flex", gap: "12px" }}>
                      <span style={{ width: "50px", height: "50px", borderRadius: "12px", background: "#FFD23F", color: "#15123A", border: "2px solid #0A0820", boxShadow: "3px 3px 0 #0A0820", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace", fontWeight: "700" }}>
                        A
                      </span>
                      <span style={{ width: "50px", height: "50px", borderRadius: "12px", background: "#3DDC97", color: "#15123A", border: "2px solid #0A0820", boxShadow: "3px 3px 0 #0A0820", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace", fontWeight: "700" }}>
                        B
                      </span>
                      <span style={{ width: "50px", height: "50px", borderRadius: "12px", background: "#FF6B5B", color: "#15123A", border: "2px solid #0A0820", boxShadow: "3px 3px 0 #0A0820", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace", fontWeight: "700" }}>
                        C
                      </span>
                    </div>
                  </div>
                  <div className="kl-float-sm" style={{ animationDelay: "-1s", position: "absolute", left: "6%", top: "356px", zIndex: "3", width: "68%", padding: "20px 22px", background: "#FFD23F", color: "#15123A", border: "2px solid #0A0820", borderRadius: "22px", boxShadow: "8px 8px 0 #0A0820", transform: "rotate(-2.5deg)" }}>
                    <span style={{ fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace", fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em" }}>
                      03 · CHECK
                    </span>
                    <span style={{ display: "block", margin: "8px 0 14px", fontSize: "22px", fontWeight: "800", letterSpacing: "-0.02em" }}>
                      3 / 3 challenges
                    </span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "8px 14px", borderRadius: "999px", background: "#15123A", color: "#FFF7EA", fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace", fontSize: "13px", fontWeight: "600" }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3DDC97" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M5 12.5l4.5 4.5L19 7.5" />
                      </svg>
                      All tests pass
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div aria-hidden="true" style={{ background: "linear-gradient(#15123A 50%, #FFF7EA 50%)", overflow: "hidden", padding: "30px 0" }}>
            <div style={{ margin: "0 -80px", transform: "rotate(-2deg)", background: "#7B5CFF", borderTop: "2px solid #0A0820", borderBottom: "2px solid #0A0820", padding: "16px 0", overflow: "hidden", whiteSpace: "nowrap", fontWeight: "800", fontSize: "clamp(22px, 2.4vw, 32px)", letterSpacing: "-0.03em", color: "#FFF7EA" }}>
              <div className="kl-marquee" style={{ display: "flex", width: "max-content" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "28px", paddingRight: "28px" }}>
                  <span>
                    HTML & CSS
                  </span>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="#FFD23F" aria-hidden="true" style={{ flex: "none" }}>
                    <path d="M12 1l2.6 8.4L23 12l-8.4 2.6L12 23l-2.6-8.4L1 12l8.4-2.6z" />
                  </svg>
                  <span>
                    JavaScript
                  </span>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="#FFD23F" aria-hidden="true" style={{ flex: "none" }}>
                    <path d="M12 1l2.6 8.4L23 12l-8.4 2.6L12 23l-2.6-8.4L1 12l8.4-2.6z" />
                  </svg>
                  <span>
                    Python
                  </span>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="#FFD23F" aria-hidden="true" style={{ flex: "none" }}>
                    <path d="M12 1l2.6 8.4L23 12l-8.4 2.6L12 23l-2.6-8.4L1 12l8.4-2.6z" />
                  </svg>
                  <span>
                    React
                  </span>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="#FFD23F" aria-hidden="true" style={{ flex: "none" }}>
                    <path d="M12 1l2.6 8.4L23 12l-8.4 2.6L12 23l-2.6-8.4L1 12l8.4-2.6z" />
                  </svg>
                  <span>
                    Node.js
                  </span>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="#FFD23F" aria-hidden="true" style={{ flex: "none" }}>
                    <path d="M12 1l2.6 8.4L23 12l-8.4 2.6L12 23l-2.6-8.4L1 12l8.4-2.6z" />
                  </svg>
                  <span>
                    FastAPI
                  </span>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="#FFD23F" aria-hidden="true" style={{ flex: "none" }}>
                    <path d="M12 1l2.6 8.4L23 12l-8.4 2.6L12 23l-2.6-8.4L1 12l8.4-2.6z" />
                  </svg>
                  <span>
                    DBMS
                  </span>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="#FFD23F" aria-hidden="true" style={{ flex: "none" }}>
                    <path d="M12 1l2.6 8.4L23 12l-8.4 2.6L12 23l-2.6-8.4L1 12l8.4-2.6z" />
                  </svg>
                  <span>
                    AWS Cloud
                  </span>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="#FFD23F" aria-hidden="true" style={{ flex: "none" }}>
                    <path d="M12 1l2.6 8.4L23 12l-8.4 2.6L12 23l-2.6-8.4L1 12l8.4-2.6z" />
                  </svg>
                  <span>
                    AI Engineering
                  </span>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="#FFD23F" aria-hidden="true" style={{ flex: "none" }}>
                    <path d="M12 1l2.6 8.4L23 12l-8.4 2.6L12 23l-2.6-8.4L1 12l8.4-2.6z" />
                  </svg>
                  <span>
                    TypeScript
                  </span>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="#FFD23F" aria-hidden="true" style={{ flex: "none" }}>
                    <path d="M12 1l2.6 8.4L23 12l-8.4 2.6L12 23l-2.6-8.4L1 12l8.4-2.6z" />
                  </svg>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "28px", paddingRight: "28px" }}>
                  <span>
                    HTML & CSS
                  </span>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="#FFD23F" aria-hidden="true" style={{ flex: "none" }}>
                    <path d="M12 1l2.6 8.4L23 12l-8.4 2.6L12 23l-2.6-8.4L1 12l8.4-2.6z" />
                  </svg>
                  <span>
                    JavaScript
                  </span>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="#FFD23F" aria-hidden="true" style={{ flex: "none" }}>
                    <path d="M12 1l2.6 8.4L23 12l-8.4 2.6L12 23l-2.6-8.4L1 12l8.4-2.6z" />
                  </svg>
                  <span>
                    Python
                  </span>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="#FFD23F" aria-hidden="true" style={{ flex: "none" }}>
                    <path d="M12 1l2.6 8.4L23 12l-8.4 2.6L12 23l-2.6-8.4L1 12l8.4-2.6z" />
                  </svg>
                  <span>
                    React
                  </span>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="#FFD23F" aria-hidden="true" style={{ flex: "none" }}>
                    <path d="M12 1l2.6 8.4L23 12l-8.4 2.6L12 23l-2.6-8.4L1 12l8.4-2.6z" />
                  </svg>
                  <span>
                    Node.js
                  </span>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="#FFD23F" aria-hidden="true" style={{ flex: "none" }}>
                    <path d="M12 1l2.6 8.4L23 12l-8.4 2.6L12 23l-2.6-8.4L1 12l8.4-2.6z" />
                  </svg>
                  <span>
                    FastAPI
                  </span>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="#FFD23F" aria-hidden="true" style={{ flex: "none" }}>
                    <path d="M12 1l2.6 8.4L23 12l-8.4 2.6L12 23l-2.6-8.4L1 12l8.4-2.6z" />
                  </svg>
                  <span>
                    DBMS
                  </span>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="#FFD23F" aria-hidden="true" style={{ flex: "none" }}>
                    <path d="M12 1l2.6 8.4L23 12l-8.4 2.6L12 23l-2.6-8.4L1 12l8.4-2.6z" />
                  </svg>
                  <span>
                    AWS Cloud
                  </span>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="#FFD23F" aria-hidden="true" style={{ flex: "none" }}>
                    <path d="M12 1l2.6 8.4L23 12l-8.4 2.6L12 23l-2.6-8.4L1 12l8.4-2.6z" />
                  </svg>
                  <span>
                    AI Engineering
                  </span>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="#FFD23F" aria-hidden="true" style={{ flex: "none" }}>
                    <path d="M12 1l2.6 8.4L23 12l-8.4 2.6L12 23l-2.6-8.4L1 12l8.4-2.6z" />
                  </svg>
                  <span>
                    TypeScript
                  </span>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="#FFD23F" aria-hidden="true" style={{ flex: "none" }}>
                    <path d="M12 1l2.6 8.4L23 12l-8.4 2.6L12 23l-2.6-8.4L1 12l8.4-2.6z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <section style={{ background: "#FFF7EA", color: "#15123A", padding: "clamp(48px, 7vw, 96px) 0 clamp(72px, 9vw, 128px)" }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(16px, 4vw, 40px)" }}>
              <div className="kl-reveal" style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "20px 48px" }}>
                <div style={{ flex: "1 1 560px", minWidth: "0" }}>
                  <p style={{ margin: "0", fontFamily: "var(--font-caveat), cursive", fontSize: "30px", fontWeight: "700", color: "#5B3DF0" }}>
                    inside every lesson
                  </p>
                  <h2 style={{ margin: "6px 0 0", fontWeight: "800", fontSize: "clamp(42px, 5.6vw, 80px)", lineHeight: "0.96", letterSpacing: "-0.05em" }}>
                    Three layers. One page.
                    <br />
                    Zero playlists.
                  </h2>
                </div>
                <p style={{ flex: "0 1 380px", margin: "0", fontSize: "18px", lineHeight: "1.55", color: "#55526E" }}>
                  Every Codeveda lesson stacks the same way — so you always know what's next, and nothing is filler.
                </p>
              </div>
              <div className="kl-reveal" style={{ marginTop: "56px", display: "flex", flexWrap: "wrap", alignItems: "flex-start", gap: "28px" }}>
                <div style={{ flex: "1 1 300px", minWidth: "0", padding: "28px", background: "#5B3DF0", color: "#FFF7EA", border: "2px solid #15123A", borderRadius: "26px", boxShadow: "6px 6px 0 #15123A", transform: "rotate(-1.5deg)", display: "flex", flexDirection: "column", gap: "14px" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace", fontSize: "14px", fontWeight: "700" }}>
                      01
                    </span>
                    <svg width="56" height="56" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M32 18c-6-5-14-6-22-5v34c8-1 16 0 22 5 6-5 14-6 22-5V13c-8-1-16 0-22 5z" />
                      <path d="M32 18v34M17 24h8M17 31h8M39 24h8M39 31h8" />
                    </svg>
                  </div>
                  <h3 style={{ margin: "0", fontSize: "36px", fontWeight: "800", letterSpacing: "-0.04em" }}>
                    Read.
                  </h3>
                  <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.55" }}>
                    A short, focused explanation. Minutes, not hours — and the page waits when you pause.
                  </p>
                </div>
                <div style={{ flex: "1 1 300px", minWidth: "0", marginTop: "28px", padding: "28px", background: "#3DDC97", color: "#15123A", border: "2px solid #15123A", borderRadius: "26px", boxShadow: "6px 6px 0 #15123A", transform: "rotate(1deg)", display: "flex", flexDirection: "column", gap: "14px" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace", fontSize: "14px", fontWeight: "700" }}>
                      02
                    </span>
                    <svg width="56" height="56" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="8" y="14" width="48" height="36" rx="8" />
                      <path d="M16 26h32M16 38h32" />
                      <circle cx="26" cy="26" r="4.5" fill="currentColor" />
                      <circle cx="40" cy="38" r="4.5" fill="currentColor" />
                    </svg>
                  </div>
                  <h3 style={{ margin: "0", fontSize: "36px", fontWeight: "800", letterSpacing: "-0.04em" }}>
                    Play.
                  </h3>
                  <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.55" }}>
                    Drag, toggle and tweak a live visual until the idea clicks. Break it on purpose — that's the point.
                  </p>
                </div>
                <div style={{ flex: "1 1 300px", minWidth: "0", padding: "28px", background: "#FFD23F", color: "#15123A", border: "2px solid #15123A", borderRadius: "26px", boxShadow: "6px 6px 0 #15123A", transform: "rotate(-1deg)", display: "flex", flexDirection: "column", gap: "14px" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace", fontSize: "14px", fontWeight: "700" }}>
                      03
                    </span>
                    <svg width="56" height="56" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="32" cy="26" r="16" />
                      <path d="M25 26l5 5 9-10" />
                      <path d="M23 40l-4 16 13-6 13 6-4-16" />
                    </svg>
                  </div>
                  <h3 style={{ margin: "0", fontSize: "36px", fontWeight: "800", letterSpacing: "-0.04em" }}>
                    Check.
                  </h3>
                  <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.55" }}>
                    Practice and challenges confirm it stuck — then earn a certificate anyone can verify.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section style={{ backgroundColor: "#15123A", backgroundImage: "radial-gradient(rgba(255,247,234,0.09) 1.2px, transparent 1.6px)", backgroundSize: "26px 26px", color: "#FFF7EA", padding: "clamp(64px, 8vw, 112px) 0" }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(16px, 4vw, 40px)" }}>
              <div className="kl-reveal" style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "20px 48px" }}>
                <div style={{ flex: "1 1 560px", minWidth: "0" }}>
                  <p style={{ margin: "0", fontFamily: "var(--font-caveat), cursive", fontSize: "30px", fontWeight: "700", color: "#FFD23F" }}>
                    go on, touch it
                  </p>
                  <h2 style={{ margin: "6px 0 0", fontWeight: "800", fontSize: "clamp(42px, 5.6vw, 80px)", lineHeight: "0.96", letterSpacing: "-0.05em" }}>
                    Center the box.
                    <br />
                    <span style={{ color: "#B9A6FF" }}>
                      Ten seconds. Go.
                    </span>
                  </h2>
                </div>
                <p style={{ flex: "0 1 380px", margin: "0", fontSize: "18px", lineHeight: "1.55", color: "#D6D2EA" }}>
                  A pocket-sized taste of the interactive visuals inside every Codeveda lesson. Tap the options and watch the layout react.
                </p>
              </div>
              <FlexPlayground />
            </div>
          </section>
          <section style={{ background: "#FBEFD9", color: "#15123A", padding: "clamp(64px, 8vw, 112px) 0" }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(16px, 4vw, 40px)" }}>
              <div className="kl-reveal" style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "20px 48px" }}>
                <div style={{ flex: "1 1 560px", minWidth: "0" }}>
                  <p style={{ margin: "0", fontFamily: "var(--font-caveat), cursive", fontSize: "30px", fontWeight: "700", color: "#5B3DF0" }}>
                    pick a book →
                  </p>
                  <h2 style={{ margin: "6px 0 0", fontWeight: "800", fontSize: "clamp(42px, 5.6vw, 80px)", lineHeight: "0.96", letterSpacing: "-0.05em" }}>
                    Sixteen books.
                    <br />
                    All free to open.
                  </h2>
                </div>
                <a href="https://www.codeveda.dev/courses" style={{ display: "inline-flex", alignItems: "center", gap: "8px", minHeight: "52px", padding: "0 22px", borderRadius: "14px", border: "2px solid #15123A", background: "#FFFFFF", color: "#15123A", boxShadow: "4px 4px 0 #15123A", textDecoration: "none", fontWeight: "700", fontSize: "16px" }}>
                  View all courses
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
              </div>
              <div className="kl-reveal" style={{ marginTop: "48px", overflowX: "auto", paddingTop: "16px", paddingBottom: "8px" }}>
                <div style={{ minWidth: "980px", padding: "0 12px" }}>
                  <nav aria-label="Courses on the shelf" style={{ display: "flex", alignItems: "flex-end", gap: "10px", height: "380px" }}>
                    <a className="kl-spine" href="https://www.codeveda.dev/courses/python-mastery-from-basics-to-brilliance" style={{ flex: "1 1 0", minWidth: "64px", height: "340px", padding: "14px 0", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", background: "#3159C9", color: "#FFF7EA", border: "2px solid #15123A", borderRadius: "8px 8px 4px 4px", boxShadow: "inset -10px 0 0 rgba(21,18,58,0.18)", textDecoration: "none" }}>
                      <span style={{ fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace", fontSize: "14px", fontWeight: "700" }}>
                        py
                      </span>
                      <span style={{ writingMode: "vertical-rl", transform: "rotate(180deg)", whiteSpace: "nowrap", fontSize: "17px", fontWeight: "800", letterSpacing: "-0.02em" }}>
                        Python Mastery
                      </span>
                      <span aria-hidden="true" style={{ width: "26px", height: "5px", borderRadius: "999px", background: "rgba(255,247,234,0.6)" }} />
                    </a>
                    <a className="kl-spine" href="https://www.codeveda.dev/courses/javascript-fundamentals" style={{ flex: "1 1 0", minWidth: "64px", height: "300px", padding: "14px 0", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", background: "#FFD23F", color: "#15123A", border: "2px solid #15123A", borderRadius: "8px 8px 4px 4px", boxShadow: "inset -10px 0 0 rgba(21,18,58,0.12)", textDecoration: "none" }}>
                      <span style={{ fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace", fontSize: "14px", fontWeight: "700" }}>
                        js
                      </span>
                      <span style={{ writingMode: "vertical-rl", transform: "rotate(180deg)", whiteSpace: "nowrap", fontSize: "17px", fontWeight: "800", letterSpacing: "-0.02em" }}>
                        JavaScript Fundamentals
                      </span>
                      <span aria-hidden="true" style={{ width: "26px", height: "5px", borderRadius: "999px", background: "rgba(21,18,58,0.4)" }} />
                    </a>
                    <a className="kl-spine" href="https://www.codeveda.dev/courses/typescript-foundations" style={{ flex: "1 1 0", minWidth: "64px", height: "320px", padding: "14px 0", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", background: "#7CC4FF", color: "#15123A", border: "2px solid #15123A", borderRadius: "8px 8px 4px 4px", boxShadow: "inset -10px 0 0 rgba(21,18,58,0.12)", textDecoration: "none" }}>
                      <span style={{ fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace", fontSize: "14px", fontWeight: "700" }}>
                        ts
                      </span>
                      <span style={{ writingMode: "vertical-rl", transform: "rotate(180deg)", whiteSpace: "nowrap", fontSize: "17px", fontWeight: "800", letterSpacing: "-0.02em" }}>
                        TypeScript Foundations
                      </span>
                      <span aria-hidden="true" style={{ width: "26px", height: "5px", borderRadius: "999px", background: "rgba(21,18,58,0.4)" }} />
                    </a>
                    <a className="kl-spine" href="https://www.codeveda.dev/courses/fastapi-beginner-to-pro" style={{ flex: "1 1 0", minWidth: "64px", height: "356px", padding: "14px 0", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", background: "#0E7C86", color: "#FFF7EA", border: "2px solid #15123A", borderRadius: "8px 8px 4px 4px", boxShadow: "inset -10px 0 0 rgba(21,18,58,0.18)", textDecoration: "none" }}>
                      <span style={{ fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace", fontSize: "14px", fontWeight: "700" }}>
                        api
                      </span>
                      <span style={{ writingMode: "vertical-rl", transform: "rotate(180deg)", whiteSpace: "nowrap", fontSize: "17px", fontWeight: "800", letterSpacing: "-0.02em" }}>
                        FastAPI — Beginner to Pro
                      </span>
                      <span aria-hidden="true" style={{ width: "26px", height: "5px", borderRadius: "999px", background: "rgba(255,247,234,0.6)" }} />
                    </a>
                    <a className="kl-spine" href="https://www.codeveda.dev/courses/expressjs-mastery" style={{ flex: "1 1 0", minWidth: "64px", height: "312px", padding: "14px 0", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", background: "#15123A", color: "#FFF7EA", border: "2px solid #15123A", borderRadius: "8px 8px 4px 4px", boxShadow: "inset -10px 0 0 rgba(255,247,234,0.08)", textDecoration: "none" }}>
                      <span style={{ fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace", fontSize: "14px", fontWeight: "700" }}>
                        ex
                      </span>
                      <span style={{ writingMode: "vertical-rl", transform: "rotate(180deg)", whiteSpace: "nowrap", fontSize: "17px", fontWeight: "800", letterSpacing: "-0.02em" }}>
                        Express.js Mastery
                      </span>
                      <span aria-hidden="true" style={{ width: "26px", height: "5px", borderRadius: "999px", background: "rgba(255,247,234,0.6)" }} />
                    </a>
                    <a className="kl-spine" href="https://www.codeveda.dev/courses/ai-engineering-core" style={{ flex: "1 1 0", minWidth: "64px", height: "332px", padding: "14px 0", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", background: "#B9A6FF", color: "#15123A", border: "2px solid #15123A", borderRadius: "8px 8px 4px 4px", boxShadow: "inset -10px 0 0 rgba(21,18,58,0.12)", textDecoration: "none" }}>
                      <span style={{ fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace", fontSize: "14px", fontWeight: "700" }}>
                        ai
                      </span>
                      <span style={{ writingMode: "vertical-rl", transform: "rotate(180deg)", whiteSpace: "nowrap", fontSize: "17px", fontWeight: "800", letterSpacing: "-0.02em" }}>
                        AI Engineering Core
                      </span>
                      <span aria-hidden="true" style={{ width: "26px", height: "5px", borderRadius: "999px", background: "rgba(21,18,58,0.4)" }} />
                    </a>
                    <a className="kl-spine" href="https://www.codeveda.dev/courses/nodejs-code-outside-the-browser" style={{ flex: "1 1 0", minWidth: "64px", height: "296px", padding: "14px 0", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", background: "#3DDC97", color: "#15123A", border: "2px solid #15123A", borderRadius: "8px 8px 4px 4px", boxShadow: "inset -10px 0 0 rgba(21,18,58,0.12)", textDecoration: "none" }}>
                      <span style={{ fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace", fontSize: "14px", fontWeight: "700" }}>
                        node
                      </span>
                      <span style={{ writingMode: "vertical-rl", transform: "rotate(180deg)", whiteSpace: "nowrap", fontSize: "17px", fontWeight: "800", letterSpacing: "-0.02em" }}>
                        Node.js
                      </span>
                      <span aria-hidden="true" style={{ width: "26px", height: "5px", borderRadius: "999px", background: "rgba(21,18,58,0.4)" }} />
                    </a>
                    <a className="kl-spine" href="https://www.codeveda.dev/courses/react-mastery" style={{ flex: "1 1 0", minWidth: "64px", height: "344px", padding: "14px 0", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", background: "#FF6B5B", color: "#15123A", border: "2px solid #15123A", borderRadius: "8px 8px 4px 4px", boxShadow: "inset -10px 0 0 rgba(21,18,58,0.12)", textDecoration: "none" }}>
                      <span style={{ fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace", fontSize: "14px", fontWeight: "700" }}>
                        jsx
                      </span>
                      <span style={{ writingMode: "vertical-rl", transform: "rotate(180deg)", whiteSpace: "nowrap", fontSize: "17px", fontWeight: "800", letterSpacing: "-0.02em" }}>
                        React Mastery
                      </span>
                      <span aria-hidden="true" style={{ width: "26px", height: "5px", borderRadius: "999px", background: "rgba(21,18,58,0.4)" }} />
                    </a>
                    <a className="kl-spine" href="https://www.codeveda.dev/courses/html-css-mastery" style={{ flex: "1 1 0", minWidth: "64px", height: "318px", padding: "14px 0", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", background: "#5B3DF0", color: "#FFF7EA", border: "2px solid #15123A", borderRadius: "8px 8px 4px 4px", boxShadow: "inset -10px 0 0 rgba(21,18,58,0.18)", textDecoration: "none" }}>
                      <span style={{ fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace", fontSize: "14px", fontWeight: "700" }}>
                        {"</>"}
                      </span>
                      <span style={{ writingMode: "vertical-rl", transform: "rotate(180deg)", whiteSpace: "nowrap", fontSize: "17px", fontWeight: "800", letterSpacing: "-0.02em" }}>
                        HTML & CSS Mastery
                      </span>
                      <span aria-hidden="true" style={{ width: "26px", height: "5px", borderRadius: "999px", background: "rgba(255,247,234,0.6)" }} />
                    </a>
                    <a className="kl-spine" href="https://www.codeveda.dev/courses/advance-javascript-dom-bom-web-api" style={{ flex: "1 1 0", minWidth: "64px", height: "336px", padding: "14px 0", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", background: "#FFD23F", color: "#15123A", border: "2px solid #15123A", borderRadius: "8px 8px 4px 4px", boxShadow: "inset -10px 0 0 rgba(21,18,58,0.12)", textDecoration: "none" }}>
                      <span style={{ fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace", fontSize: "14px", fontWeight: "700" }}>
                        dom
                      </span>
                      <span style={{ writingMode: "vertical-rl", transform: "rotate(180deg)", whiteSpace: "nowrap", fontSize: "17px", fontWeight: "800", letterSpacing: "-0.02em" }}>
                        Advanced JavaScript
                      </span>
                      <span aria-hidden="true" style={{ width: "26px", height: "5px", borderRadius: "999px", background: "rgba(21,18,58,0.4)" }} />
                    </a>
                    <a className="kl-spine" href="https://www.codeveda.dev/courses/database-management-system-dbms" style={{ flex: "1 1 0", minWidth: "64px", height: "300px", padding: "14px 0", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", background: "#7CC4FF", color: "#15123A", border: "2px solid #15123A", borderRadius: "8px 8px 4px 4px", boxShadow: "inset -10px 0 0 rgba(21,18,58,0.12)", textDecoration: "none" }}>
                      <span style={{ fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace", fontSize: "14px", fontWeight: "700" }}>
                        sql
                      </span>
                      <span style={{ writingMode: "vertical-rl", transform: "rotate(180deg)", whiteSpace: "nowrap", fontSize: "17px", fontWeight: "800", letterSpacing: "-0.02em" }}>
                        DBMS
                      </span>
                      <span aria-hidden="true" style={{ width: "26px", height: "5px", borderRadius: "999px", background: "rgba(21,18,58,0.4)" }} />
                    </a>
                    <a className="kl-spine" href="https://www.codeveda.dev/courses/aws-certified-cloud-practitioner" style={{ flex: "1 1 0", minWidth: "64px", height: "362px", padding: "14px 0", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", background: "#FF6B5B", color: "#15123A", border: "2px solid #15123A", borderRadius: "8px 8px 4px 4px", boxShadow: "inset -10px 0 0 rgba(21,18,58,0.12)", textDecoration: "none" }}>
                      <span style={{ fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace", fontSize: "14px", fontWeight: "700" }}>
                        aws
                      </span>
                      <span style={{ writingMode: "vertical-rl", transform: "rotate(180deg)", whiteSpace: "nowrap", fontSize: "17px", fontWeight: "800", letterSpacing: "-0.02em" }}>
                        AWS Cloud Practitioner
                      </span>
                      <span aria-hidden="true" style={{ width: "26px", height: "5px", borderRadius: "999px", background: "rgba(21,18,58,0.4)" }} />
                    </a>
                    <a href="https://www.codeveda.dev/courses" style={{ flex: "1 1 0", minWidth: "64px", height: "250px", padding: "14px 0", display: "flex", alignItems: "center", justifyContent: "center", background: "transparent", color: "#15123A", border: "2px dashed #15123A", borderRadius: "8px 8px 4px 4px", textDecoration: "none" }}>
                      <span style={{ writingMode: "vertical-rl", transform: "rotate(180deg)", whiteSpace: "nowrap", fontSize: "17px", fontWeight: "800", letterSpacing: "-0.02em" }}>
                        +4 more
                      </span>
                    </a>
                  </nav>
                  <div aria-hidden="true" style={{ height: "16px", margin: "0 -12px", background: "#15123A", borderRadius: "8px" }} />
                </div>
              </div>
              <ul aria-label="Codeveda in numbers" style={{ margin: "36px 0 0", padding: "0", listStyle: "none", display: "flex", flexWrap: "wrap", gap: "12px" }}>
                <li style={{ padding: "10px 16px", borderRadius: "999px", background: "#FFF7EA", border: "2px solid #15123A", boxShadow: "3px 3px 0 #15123A", fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace", fontSize: "14px", fontWeight: "600" }}>
                  16 courses
                </li>
                <li style={{ padding: "10px 16px", borderRadius: "999px", background: "#FFF7EA", border: "2px solid #15123A", boxShadow: "3px 3px 0 #15123A", fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace", fontSize: "14px", fontWeight: "600" }}>
                  1,100+ chapters
                </li>
                <li style={{ padding: "10px 16px", borderRadius: "999px", background: "#FFF7EA", border: "2px solid #15123A", boxShadow: "3px 3px 0 #15123A", fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace", fontSize: "14px", fontWeight: "600" }}>
                  289 hours of reading
                </li>
                <li style={{ padding: "10px 16px", borderRadius: "999px", background: "#FFF7EA", border: "2px solid #15123A", boxShadow: "3px 3px 0 #15123A", fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace", fontSize: "14px", fontWeight: "600" }}>
                  1,000+ learners
                </li>
                <li style={{ padding: "10px 16px", borderRadius: "999px", background: "#3DDC97", border: "2px solid #15123A", boxShadow: "3px 3px 0 #15123A", fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace", fontSize: "14px", fontWeight: "700" }}>
                  free to start
                </li>
              </ul>
            </div>
          </section>
          <section style={{ backgroundColor: "#15123A", backgroundImage: "radial-gradient(rgba(255,247,234,0.09) 1.2px, transparent 1.6px)", backgroundSize: "26px 26px", color: "#FFF7EA", padding: "clamp(64px, 8vw, 112px) 0" }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(16px, 4vw, 40px)", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "56px" }}>
              <div style={{ flex: "1 1 440px", minWidth: "0" }}>
                <p style={{ margin: "0", fontFamily: "var(--font-caveat), cursive", fontSize: "30px", fontWeight: "700", color: "#FFD23F" }}>
                  then prove it
                </p>
                <h2 style={{ margin: "6px 0 0", fontWeight: "800", fontSize: "clamp(42px, 5.2vw, 76px)", lineHeight: "0.96", letterSpacing: "-0.05em" }}>
                  Challenges that check
                  <br />
                  <span style={{ color: "#3DDC97" }}>
                    you actually got it.
                  </span>
                </h2>
                <p style={{ margin: "22px 0 0", maxWidth: "480px", fontSize: "18px", lineHeight: "1.55", color: "#D6D2EA" }}>
                  Real-code questions after every topic, in six formats. Finish a set and earn a certificate anyone can verify.
                </p>
                <ul aria-label="Challenge formats" style={{ margin: "28px 0 0", padding: "0", listStyle: "none", display: "flex", flexWrap: "wrap", gap: "10px" }}>
                  <li className="kl-bob" style={{ padding: "9px 15px", borderRadius: "12px", background: "#B9A6FF", color: "#15123A", border: "2px solid #0A0820", boxShadow: "3px 3px 0 #0A0820", transform: "rotate(-2deg)", fontSize: "15px", fontWeight: "700" }}>
                    True / False
                  </li>
                  <li className="kl-bob" style={{ padding: "9px 15px", borderRadius: "12px", background: "#3DDC97", color: "#15123A", border: "2px solid #0A0820", boxShadow: "3px 3px 0 #0A0820", transform: "rotate(1.5deg)", fontSize: "15px", fontWeight: "700" }}>
                    Multiple choice
                  </li>
                  <li className="kl-bob" style={{ padding: "9px 15px", borderRadius: "12px", background: "#FFF7EA", color: "#15123A", border: "2px solid #0A0820", boxShadow: "3px 3px 0 #0A0820", transform: "rotate(-1deg)", fontSize: "15px", fontWeight: "700" }}>
                    Fill in the blank
                  </li>
                  <li className="kl-bob" style={{ padding: "9px 15px", borderRadius: "12px", background: "#7CC4FF", color: "#15123A", border: "2px solid #0A0820", boxShadow: "3px 3px 0 #0A0820", transform: "rotate(2deg)", fontSize: "15px", fontWeight: "700" }}>
                    Rearrange
                  </li>
                  <li className="kl-bob" style={{ padding: "9px 15px", borderRadius: "12px", background: "#FFD23F", color: "#15123A", border: "2px solid #0A0820", boxShadow: "3px 3px 0 #0A0820", transform: "rotate(-1.5deg)", fontSize: "15px", fontWeight: "700" }}>
                    Guess the output
                  </li>
                  <li className="kl-bob" style={{ padding: "9px 15px", borderRadius: "12px", background: "#FF6B5B", color: "#15123A", border: "2px solid #0A0820", boxShadow: "3px 3px 0 #0A0820", transform: "rotate(1deg)", fontSize: "15px", fontWeight: "700" }}>
                    Multiple answer
                  </li>
                </ul>
                <div style={{ marginTop: "32px", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "14px 24px" }}>
                  <a href="https://www.codeveda.dev/challenges" style={{ display: "inline-flex", alignItems: "center", minHeight: "52px", padding: "0 22px", borderRadius: "14px", border: "2px solid #0A0820", background: "#FFF7EA", color: "#15123A", boxShadow: "4px 4px 0 #0A0820", textDecoration: "none", fontWeight: "700", fontSize: "16px" }}>
                    Try a challenge
                  </a>
                  <a href="https://www.codeveda.dev/verify" style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "44px", color: "#FFF7EA", textDecoration: "none", fontWeight: "700", fontSize: "16px" }}>
                    Verify a certificate
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="kl-reveal" style={{ flex: "1 1 460px", minWidth: "0", position: "relative", padding: "20px" }}>
                <div aria-hidden="true" style={{ position: "absolute", inset: "20px", background: "#FFD23F", border: "2px solid #0A0820", borderRadius: "26px", transform: "rotate(3deg)" }} />
                <div aria-hidden="true" style={{ position: "absolute", inset: "20px", background: "#7B5CFF", border: "2px solid #0A0820", borderRadius: "26px", transform: "rotate(-3deg)" }} />
                <OutputQuiz />
              </div>
            </div>
          </section>
          <section style={{ backgroundColor: "#7B5CFF", backgroundImage: "radial-gradient(rgba(21,18,58,0.12) 1.2px, transparent 1.6px)", backgroundSize: "26px 26px", color: "#FFF7EA", padding: "clamp(72px, 9vw, 128px) clamp(16px, 4vw, 40px)" }}>
            <figure className="kl-reveal" style={{ margin: "0 auto", maxWidth: "1040px" }}>
              <svg width="72" height="58" viewBox="0 0 72 58" fill="#15123A" aria-hidden="true">
                <path d="M0 58V34C0 14 8 3 28 0l3 9C20 12 15 18 15 28h14v30zM41 58V34C41 14 49 3 69 0l3 9C61 12 56 18 56 28h14v30z" />
              </svg>
              <blockquote style={{ margin: "24px 0 0", fontWeight: "800", fontSize: "clamp(32px, 4.6vw, 64px)", lineHeight: "1.1", letterSpacing: "-0.04em" }}>
                {"In the age of AI, reading matters more than ever — it's how we "}
                <mark style={{ padding: "0 0.12em", borderRadius: "0.14em", background: "#FFD23F", color: "#15123A", boxDecorationBreak: "clone", WebkitBoxDecorationBreak: "clone" }}>
                  validate what an AI agent gives us
                </mark>
                .
              </blockquote>
              <figcaption style={{ marginTop: "24px", fontFamily: "var(--font-caveat), cursive", fontSize: "32px", fontWeight: "700", color: "#15123A" }}>
                — the Codeveda idea
              </figcaption>
            </figure>
          </section>
          <section style={{ background: "#15123A", color: "#FFF7EA" }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "clamp(72px, 9vw, 120px) clamp(16px, 4vw, 40px) 40px" }}>
              <div className="kl-reveal" style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "32px" }}>
                <div style={{ flex: "1 1 560px", minWidth: "0" }}>
                  <p style={{ margin: "0", fontFamily: "var(--font-caveat), cursive", fontSize: "30px", fontWeight: "700", color: "#FFD23F" }}>
                    your move
                  </p>
                  <h2 style={{ margin: "6px 0 0", fontWeight: "800", fontSize: "clamp(46px, 6.4vw, 96px)", lineHeight: "0.94", letterSpacing: "-0.055em" }}>
                    Close the tab on
                    <br />
                    <span style={{ color: "#B9A6FF" }}>
                      tutorial hell.
                    </span>
                  </h2>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
                  <a href="https://www.codeveda.dev/courses" style={{ display: "inline-flex", alignItems: "center", gap: "8px", minHeight: "56px", padding: "0 26px", borderRadius: "14px", border: "2px solid #0A0820", background: "#6B4CF6", color: "#FFFFFF", boxShadow: "5px 5px 0 #0A0820", textDecoration: "none", fontWeight: "700", fontSize: "17px" }}>
                    Start reading
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </a>
                  <a href="https://www.codeveda.dev" style={{ display: "inline-flex", alignItems: "center", minHeight: "56px", padding: "0 24px", borderRadius: "14px", border: "2px solid rgba(255,247,234,0.5)", color: "#FFF7EA", textDecoration: "none", fontWeight: "700", fontSize: "17px" }}>
                    codeveda.dev
                  </a>
                </div>
              </div>
              <footer style={{ marginTop: "80px", paddingTop: "24px", borderTop: "1px solid rgba(255,247,234,0.14)", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "12px 24px" }}>
                <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "#B4AFCF" }}>
                  {"Codeveda is made by Bhaskar Das at Kriralife. Also from the studio: "}
                  <Link href="/foreverdays/" style={{ color: "#FFF7EA", fontWeight: "700" }}>
                    ForeverDays
                  </Link>
                </p>
                <nav aria-label="Footer" style={{ display: "flex", flexWrap: "wrap", gap: "0 22px" }}>
                  <Link href="/" style={{ display: "inline-flex", alignItems: "center", minHeight: "44px", color: "#E4DCFF", textDecoration: "none", fontSize: "15px" }}>
                    All products
                  </Link>
                  <a href="https://github.com/codevedadev" style={{ display: "inline-flex", alignItems: "center", minHeight: "44px", color: "#E4DCFF", textDecoration: "none", fontSize: "15px" }}>
                    GitHub
                  </a>
                  <a href="https://www.youtube.com/@codeveda-dev" style={{ display: "inline-flex", alignItems: "center", minHeight: "44px", color: "#E4DCFF", textDecoration: "none", fontSize: "15px" }}>
                    YouTube
                  </a>
                  <a href="https://www.instagram.com/codeveda.dev" style={{ display: "inline-flex", alignItems: "center", minHeight: "44px", color: "#E4DCFF", textDecoration: "none", fontSize: "15px" }}>
                    Instagram
                  </a>
                  <a href="https://www.linkedin.com/company/codeveda-dev" style={{ display: "inline-flex", alignItems: "center", minHeight: "44px", color: "#E4DCFF", textDecoration: "none", fontSize: "15px" }}>
                    LinkedIn
                  </a>
                </nav>
              </footer>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
