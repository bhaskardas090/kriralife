import type { Metadata, Viewport } from "next";
import JsonLd from "@/components/JsonLd";
import DayKindPicker from "@/components/foreverdays/DayKindPicker";
import FestivalCard from "@/components/foreverdays/FestivalCard";
import { ForeverDaysFooter, ForeverDaysHeader } from "@/components/foreverdays/ForeverDaysChrome";
import PrepChecklist from "@/components/foreverdays/PrepChecklist";
import { foreverdaysFonts } from "@/lib/fonts";
import { pageMetadata } from "@/lib/metadata";
import { ORG_REF, ROUTES, SITE_NAME, WEBSITE_REF, absoluteUrl } from "@/lib/site";

const title = "ForeverDays — Birthday & anniversary reminder app";
const description =
  "Remember every day that matters. ForeverDays counts down birthdays, anniversaries, milestones and festivals, with gentle reminders and preparation checklists.";

export const metadata: Metadata = pageMetadata({
  path: ROUTES.foreverdays,
  title,
  socialTitle: `${title} | ${SITE_NAME}`,
  description,
  keywords: ["ForeverDays", "birthday reminder app", "anniversary reminder", "countdown app", "important dates app", "festival calendar", "Karwa Chauth reminder", "event planner checklist"],
});

export const viewport: Viewport = { themeColor: "#F5EFE8" };

const pageUrl = absoluteUrl(ROUTES.foreverdays);
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MobileApplication",
      "@id": `${pageUrl}#app`,
      name: "ForeverDays",
      alternateName: "ForeverDays — For the days, worth remembering",
      url: pageUrl,
      description,
      applicationCategory: "LifestyleApplication",
      image: absoluteUrl("/images/foreverdays-icon.webp"),
      screenshot: [
        absoluteUrl("/images/foreverdays-upcoming.webp"),
        absoluteUrl("/images/foreverdays-calendar.webp"),
        absoluteUrl("/images/foreverdays-new-date.webp"),
        absoluteUrl("/images/foreverdays-all-dates.webp"),
      ],
      featureList: [
        "Countdowns to birthdays, anniversaries and milestones",
        "Reminders at the exact day and time you pick",
        "Preparation checklists",
        "Festival calendars, such as Festivals in India",
      ],
      publisher: ORG_REF,
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
      primaryImageOfPage: absoluteUrl("/images/foreverdays-upcoming.webp"),
      inLanguage: "en",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: SITE_NAME, item: absoluteUrl(ROUTES.home) },
        { "@type": "ListItem", position: 2, name: "ForeverDays", item: pageUrl },
      ],
    },
  ],
};

export default function ForeverDaysPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <div className={`page-foreverdays ${foreverdaysFonts}`} style={{ width: "100%", background: "#F5EFE8", color: "#1E1A1A", fontFamily: "-apple-system, BlinkMacSystemFont, var(--font-inter), 'Segoe UI', sans-serif" }}>
        <ForeverDaysHeader current="app" />
        <main id="main">
          <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "clamp(40px, 6vw, 80px) clamp(16px, 4vw, 40px) clamp(56px, 7vw, 96px)", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "48px 64px" }}>
            <div style={{ flex: "1 1 460px", minWidth: "0" }}>
              <div className="kl-in" style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <img src="/images/foreverdays-icon.webp" alt="ForeverDays app icon" width="64" height="64" style={{ display: "block", width: "64px", height: "64px", borderRadius: "15px", boxShadow: "0 12px 28px rgba(179,54,80,0.24)" }} decoding="async" />
                <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ fontFamily: "var(--font-instrument-serif), Georgia, serif", fontSize: "32px", lineHeight: "1" }}>
                    ForeverDays
                  </span>
                  <span style={{ fontSize: "14px", color: "#6E6660" }}>
                    For the days, worth remembering
                  </span>
                </div>
              </div>
              <h1 className="kl-in" style={{ animationDelay: "90ms", margin: "32px 0 0", fontFamily: "var(--font-instrument-serif), Georgia, serif", fontWeight: "400", fontSize: "clamp(56px, 7.6vw, 108px)", lineHeight: "0.96", letterSpacing: "-0.015em" }}>
                {"Remember every day that "}
                <em style={{ fontStyle: "italic", color: "#B33650" }}>
                  matters.
                </em>
              </h1>
              <p className="kl-in" style={{ animationDelay: "180ms", margin: "26px 0 0", maxWidth: "500px", fontSize: "clamp(17px, 1.5vw, 20px)", lineHeight: "1.6", color: "#6E6660" }}>
                Birthdays, anniversaries, milestones and festivals — counted down, gently reminded and planned for, all in one calm little app.
              </p>
              <div className="kl-in" style={{ animationDelay: "270ms", display: "flex", flexWrap: "wrap", gap: "12px", marginTop: "34px" }}>
                <a href="#get" style={{ display: "inline-flex", alignItems: "center", gap: "8px", minHeight: "54px", padding: "0 26px", borderRadius: "999px", background: "#B33650", color: "#FFFFFF", textDecoration: "none", fontWeight: "600", fontSize: "17px", boxShadow: "0 10px 24px rgba(179,54,80,0.25)" }}>
                  Get ForeverDays
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
                <a href="#plan" style={{ display: "inline-flex", alignItems: "center", minHeight: "54px", padding: "0 24px", borderRadius: "999px", background: "#FDFBF9", color: "#1E1A1A", border: "1px solid #E3D8CD", textDecoration: "none", fontWeight: "600", fontSize: "17px" }}>
                  See how it works
                </a>
              </div>
              <p className="kl-in" style={{ animationDelay: "340ms", margin: "22px 0 0", fontSize: "14px", color: "#6E6660" }}>
                Available on [iOS · Android (soon)]
              </p>
            </div>
            <div style={{ flex: "1 1 480px", minWidth: "0", display: "flex", justifyContent: "center" }}>
              <div style={{ position: "relative", width: "100%", maxWidth: "520px", height: "660px" }}>
                <div className="kl-float" style={{ animationDuration: "9s", animationDelay: "-3s", position: "absolute", left: "0", top: "76px", width: "232px", maxWidth: "62%", padding: "8px", borderRadius: "40px", background: "#2A2422", boxShadow: "0 30px 60px rgba(120,60,60,0.18)", transform: "rotate(-7deg)" }}>
                  <img src="/images/foreverdays-welcome.webp" alt="ForeverDays welcome screen saying: Today is Aarav's Birthday" style={{ display: "block", width: "100%", height: "auto", borderRadius: "33px" }} width="920" height="2000" decoding="async" />
                </div>
                <div className="kl-float" style={{ animationDuration: "8s", position: "absolute", right: "2%", top: "0", zIndex: "2", width: "290px", maxWidth: "78%", padding: "9px", borderRadius: "48px", background: "#2A2422", boxShadow: "0 40px 80px rgba(120,60,60,0.25)" }}>
                  <img src="/images/foreverdays-upcoming.webp" alt="ForeverDays Upcoming screen: Wedding Anniversary in 23 days, with a reminder and preparation checklist" style={{ display: "block", width: "100%", height: "auto", borderRadius: "40px" }} width="920" height="2000" decoding="async" />
                </div>
                <div className="kl-float-sm" style={{ animationDelay: "-2s", position: "absolute", left: "0", bottom: "34px", zIndex: "3", width: "290px", maxWidth: "86%", padding: "14px 16px", borderRadius: "22px", background: "#FDFBF9", boxShadow: "0 18px 44px rgba(80,40,40,0.16)", display: "flex", alignItems: "flex-start", gap: "12px" }}>
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
          </section>
          <div style={{ borderTop: "1px solid #E8DED4", borderBottom: "1px solid #E8DED4", background: "#FDFBF9" }}>
            <p className="kl-reveal" style={{ maxWidth: "1200px", margin: "0 auto", padding: "26px clamp(16px, 4vw, 40px)", textAlign: "center", fontFamily: "var(--font-instrument-serif), Georgia, serif", fontSize: "clamp(22px, 2.6vw, 34px)", lineHeight: "1.35", color: "#1E1A1A" }}>
              {"birthdays "}
              <span style={{ color: "#C9B9AC" }}>
                ·
              </span>
              {" "}
              <em style={{ color: "#B33650" }}>
                anniversaries
              </em>
              {" "}
              <span style={{ color: "#C9B9AC" }}>
                ·
              </span>
              {" relationships "}
              <span style={{ color: "#C9B9AC" }}>
                ·
              </span>
              {" "}
              <em style={{ color: "#5B3FA0" }}>
                family
              </em>
              {" "}
              <span style={{ color: "#C9B9AC" }}>
                ·
              </span>
              {" achievements "}
              <span style={{ color: "#C9B9AC" }}>
                ·
              </span>
              {" "}
              <em style={{ color: "#85551D" }}>
                milestones
              </em>
              {" "}
              <span style={{ color: "#C9B9AC" }}>
                ·
              </span>
              {" celebrations "}
              <span style={{ color: "#C9B9AC" }}>
                ·
              </span>
              {" "}
              <em style={{ color: "#2D6C54" }}>
                festivals
              </em>
              {" "}
              <span style={{ color: "#C9B9AC" }}>
                ·
              </span>
              {" memorials"}
            </p>
          </div>
          <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "clamp(72px, 9vw, 120px) clamp(16px, 4vw, 40px)", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "48px 72px" }}>
            <div style={{ flex: "1 1 380px", minWidth: "0" }}>
              <p style={{ margin: "0", fontSize: "13px", fontWeight: "600", letterSpacing: "0.08em", textTransform: "uppercase", color: "#6E6660" }}>
                Step 1 of 6
              </p>
              <h2 style={{ margin: "14px 0 0", fontFamily: "var(--font-instrument-serif), Georgia, serif", fontWeight: "400", fontSize: "clamp(42px, 5.4vw, 72px)", lineHeight: "1", letterSpacing: "-0.01em" }}>
                {"What are you "}
                <em style={{ color: "#B33650" }}>
                  remembering?
                </em>
              </h2>
              <p style={{ margin: "22px 0 0", maxWidth: "440px", fontSize: "18px", lineHeight: "1.6", color: "#6E6660" }}>
                Pick the kind of day and ForeverDays sets the icon, the colour and the checklist ideas for you. Adding a date takes six gentle steps.
              </p>
              <p style={{ margin: "18px 0 0", fontSize: "15px", fontWeight: "600", color: "#8E2A40" }}>
                Try it — tap a kind of day.
              </p>
            </div>
            <DayKindPicker />
          </section>
          <section id="plan" style={{ background: "#FDFBF9", borderTop: "1px solid #E8DED4", borderBottom: "1px solid #E8DED4" }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "clamp(72px, 9vw, 120px) clamp(16px, 4vw, 40px)", display: "flex", flexWrap: "wrap-reverse", alignItems: "center", gap: "48px 72px" }}>
              <div style={{ flex: "1 1 480px", minWidth: "0", display: "flex", justifyContent: "center" }}>
                <PrepChecklist />
              </div>
              <div style={{ flex: "1 1 380px", minWidth: "0" }}>
                <p style={{ margin: "0", fontSize: "13px", fontWeight: "600", letterSpacing: "0.08em", textTransform: "uppercase", color: "#6E6660" }}>
                  Countdowns · Reminders · Preparation
                </p>
                <h2 style={{ margin: "14px 0 0", fontFamily: "var(--font-instrument-serif), Georgia, serif", fontWeight: "400", fontSize: "clamp(42px, 5.4vw, 72px)", lineHeight: "1", letterSpacing: "-0.01em" }}>
                  {"Plan, "}
                  <em style={{ color: "#B33650" }}>
                    don't panic.
                  </em>
                </h2>
                <p style={{ margin: "22px 0 0", maxWidth: "460px", fontSize: "18px", lineHeight: "1.6", color: "#6E6660" }}>
                  Every date gets a countdown, a reminder at the moment you choose and a small preparation checklist — so the day arrives with a plan, not a scramble.
                </p>
                <ul style={{ margin: "28px 0 0", padding: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "14px", fontSize: "16px", lineHeight: "1.5" }}>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#B33650" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none", marginTop: "2px" }}>
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                    A countdown to every date, with the next one front and centre
                  </li>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#B33650" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none", marginTop: "2px" }}>
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                    Reminders on the exact day and time you pick
                  </li>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#B33650" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none", marginTop: "2px" }}>
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                    Preparation checklists you tick off as you go
                  </li>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#B33650" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none", marginTop: "2px" }}>
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                    Years and ages worked out — “8 years”, “Aarav turns 5”
                  </li>
                </ul>
                <p style={{ margin: "26px 0 0", fontSize: "15px", fontWeight: "600", color: "#8E2A40" }}>
                  Go on — tick off the checklist.
                </p>
              </div>
            </div>
          </section>
          <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "clamp(72px, 9vw, 120px) clamp(16px, 4vw, 40px)", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "48px 72px" }}>
            <div style={{ flex: "1 1 380px", minWidth: "0" }}>
              <p style={{ margin: "0", fontSize: "13px", fontWeight: "600", letterSpacing: "0.08em", textTransform: "uppercase", color: "#6E6660" }}>
                Calendar
              </p>
              <h2 style={{ margin: "14px 0 0", fontFamily: "var(--font-instrument-serif), Georgia, serif", fontWeight: "400", fontSize: "clamp(42px, 5.4vw, 72px)", lineHeight: "1", letterSpacing: "-0.01em" }}>
                {"Festivals, already "}
                <em style={{ color: "#2D6C54" }}>
                  on the calendar.
                </em>
              </h2>
              <p style={{ margin: "22px 0 0", maxWidth: "460px", fontSize: "18px", lineHeight: "1.6", color: "#6E6660" }}>
                Choose a festival calendar — like Festivals in India — and see observances right beside your own dates. Spot one you celebrate? Add it in a tap.
              </p>
              <div style={{ marginTop: "22px", display: "flex", flexWrap: "wrap", gap: "10px 22px", fontSize: "15px", color: "#4A433F" }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                  <span aria-hidden="true" style={{ width: "9px", height: "9px", borderRadius: "999px", background: "#B33650" }} />
                  Your dates
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                  <span aria-hidden="true" style={{ width: "9px", height: "9px", borderRadius: "999px", background: "#2D6C54" }} />
                  Festivals
                </span>
              </div>
              <FestivalCard />
            </div>
            <div style={{ flex: "1 1 420px", minWidth: "0", display: "flex", justifyContent: "center" }}>
              <div className="kl-float" style={{ animationDuration: "8s", width: "300px", maxWidth: "86%", padding: "9px", borderRadius: "48px", background: "#2A2422", boxShadow: "0 40px 80px rgba(120,60,60,0.22)", transform: "rotate(2deg)" }}>
                <img src="/images/foreverdays-calendar.webp" alt="ForeverDays Calendar screen for October 2026 with Karwa Chauth on Thursday, 29 October" style={{ display: "block", width: "100%", height: "auto", borderRadius: "40px" }} width="920" height="2000" loading="lazy" decoding="async" />
              </div>
            </div>
          </section>
          <section style={{ background: "#EFE6DC", padding: "clamp(72px, 9vw, 120px) 0" }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(16px, 4vw, 40px)" }}>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "20px 48px" }}>
                <div style={{ flex: "1 1 520px", minWidth: "0" }}>
                  <p style={{ margin: "0", fontSize: "13px", fontWeight: "600", letterSpacing: "0.08em", textTransform: "uppercase", color: "#6E6660" }}>
                    A closer look
                  </p>
                  <h2 style={{ margin: "14px 0 0", fontFamily: "var(--font-instrument-serif), Georgia, serif", fontWeight: "400", fontSize: "clamp(42px, 5.4vw, 72px)", lineHeight: "1", letterSpacing: "-0.01em" }}>
                    Calm by design.
                  </h2>
                </div>
                <p style={{ flex: "0 1 380px", margin: "0", fontSize: "18px", lineHeight: "1.6", color: "#6E6660" }}>
                  Soft colours, gentle type and nothing you don't need — an app you'll actually enjoy opening.
                </p>
              </div>
              <div style={{ marginTop: "52px", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "40px 32px" }}>
                <figure className="kl-reveal" style={{ margin: "0", flex: "0 1 300px", minWidth: "0", display: "flex", flexDirection: "column", alignItems: "center", gap: "22px" }}>
                  <div className="kl-float" style={{ animationDuration: "8s", width: "100%", maxWidth: "280px", padding: "8px", borderRadius: "44px", background: "#2A2422", boxShadow: "0 30px 60px rgba(120,60,60,0.18)" }}>
                    <img src="/images/foreverdays-new-date.webp" alt="New Date screen asking: What are you remembering? with nine kinds of day" style={{ display: "block", width: "100%", height: "auto", borderRadius: "37px" }} width="920" height="2000" loading="lazy" decoding="async" />
                  </div>
                  <figcaption style={{ textAlign: "center" }}>
                    <span style={{ display: "block", fontFamily: "var(--font-instrument-serif), Georgia, serif", fontSize: "28px" }}>
                      Six gentle steps
                    </span>
                    <span style={{ display: "block", marginTop: "6px", fontSize: "15px", lineHeight: "1.5", color: "#6E6660" }}>
                      Add a date without filling in a form.
                    </span>
                  </figcaption>
                </figure>
                <figure className="kl-reveal" style={{ margin: "0", flex: "0 1 300px", minWidth: "0", display: "flex", flexDirection: "column", alignItems: "center", gap: "22px" }}>
                  <div className="kl-float" style={{ animationDuration: "8s", animationDelay: "-2.7s", width: "100%", maxWidth: "280px", padding: "8px", borderRadius: "44px", background: "#2A2422", boxShadow: "0 30px 60px rgba(120,60,60,0.18)" }}>
                    <img src="/images/foreverdays-all-dates.webp" alt="All dates screen with search and filters for birthdays, anniversaries and milestones" style={{ display: "block", width: "100%", height: "auto", borderRadius: "37px" }} width="920" height="2000" loading="lazy" decoding="async" />
                  </div>
                  <figcaption style={{ textAlign: "center" }}>
                    <span style={{ display: "block", fontFamily: "var(--font-instrument-serif), Georgia, serif", fontSize: "28px" }}>
                      Find anything
                    </span>
                    <span style={{ display: "block", marginTop: "6px", fontSize: "15px", lineHeight: "1.5", color: "#6E6660" }}>
                      Search “Mom”, “birthday” or “November” and filter by kind.
                    </span>
                  </figcaption>
                </figure>
                <figure className="kl-reveal" style={{ margin: "0", flex: "0 1 300px", minWidth: "0", display: "flex", flexDirection: "column", alignItems: "center", gap: "22px" }}>
                  <div className="kl-float" style={{ animationDuration: "8s", animationDelay: "-5.3s", width: "100%", maxWidth: "280px", aspectRatio: "296 / 627", padding: "28px 22px", borderRadius: "44px", background: "#FDFBF9", boxShadow: "0 30px 60px rgba(120,60,60,0.14)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "18px", textAlign: "center" }}>
                    <img src="/images/foreverdays-icon.webp" alt="" width="96" height="96" style={{ display: "block", width: "96px", height: "96px", borderRadius: "22px", boxShadow: "0 16px 36px rgba(179,54,80,0.25)" }} loading="lazy" decoding="async" />
                    <span style={{ fontFamily: "var(--font-instrument-serif), Georgia, serif", fontSize: "34px", lineHeight: "1" }}>
                      ForeverDays
                    </span>
                    <span style={{ fontFamily: "var(--font-instrument-serif), Georgia, serif", fontStyle: "italic", fontSize: "22px", lineHeight: "1.25", color: "#8E2A40" }}>
                      Today is Aarav's Birthday
                    </span>
                    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#B33650" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M4 21h16M5 21v-7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v7" />
                      <path d="M5 16c1.5 1 3 1 4.5 0s3-1 4.5 0 3 1 4.5 0" />
                      <path d="M12 12V8" />
                      <path d="M12 5.5c.8-.8.8-2 0-3-.8 1-.8 2.2 0 3z" />
                    </svg>
                  </div>
                  <figcaption style={{ textAlign: "center" }}>
                    <span style={{ display: "block", fontFamily: "var(--font-instrument-serif), Georgia, serif", fontSize: "28px" }}>
                      A personal hello
                    </span>
                    <span style={{ display: "block", marginTop: "6px", fontSize: "15px", lineHeight: "1.5", color: "#6E6660" }}>
                      On a big day, the app opens with who it's for.
                    </span>
                  </figcaption>
                </figure>
              </div>
            </div>
          </section>
          <section id="get" style={{ padding: "clamp(72px, 9vw, 120px) clamp(16px, 4vw, 40px)" }}>
            <div className="kl-reveal" style={{ maxWidth: "960px", margin: "0 auto", padding: "clamp(40px, 6vw, 72px) clamp(24px, 5vw, 64px)", borderRadius: "44px", background: "#FDFBF9", boxShadow: "0 30px 80px rgba(120,60,60,0.10)", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
              <img className="kl-float-sm" src="/images/foreverdays-icon.webp" alt="ForeverDays app icon" width="112" height="112" style={{ display: "block", width: "112px", height: "112px", borderRadius: "26px", boxShadow: "0 18px 40px rgba(179,54,80,0.28)" }} loading="lazy" decoding="async" />
              <h2 style={{ margin: "30px 0 0", fontFamily: "var(--font-instrument-serif), Georgia, serif", fontWeight: "400", fontSize: "clamp(44px, 6vw, 80px)", lineHeight: "1", letterSpacing: "-0.01em" }}>
                {"Someone's day is "}
                <em style={{ color: "#B33650" }}>
                  coming up.
                </em>
              </h2>
              <p style={{ margin: "18px 0 0", maxWidth: "460px", fontSize: "18px", lineHeight: "1.6", color: "#6E6660" }}>
                Be the one who remembers — and shows up ready.
              </p>
              <div style={{ marginTop: "32px", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px" }}>
                <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: "8px", minHeight: "56px", padding: "0 28px", borderRadius: "999px", background: "#B33650", color: "#FFFFFF", textDecoration: "none", fontWeight: "600", fontSize: "17px", boxShadow: "0 10px 24px rgba(179,54,80,0.25)" }}>
                  Get ForeverDays [link]
                </a>
              </div>
              <p style={{ margin: "18px 0 0", fontSize: "14px", color: "#6E6660" }}>
                Available on [iOS · Android] · [free / your pricing]
              </p>
            </div>
          </section>
        </main>
        <ForeverDaysFooter current="app" />
      </div>
    </>
  );
}
