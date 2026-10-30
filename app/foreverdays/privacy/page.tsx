import type { Metadata, Viewport } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import JsonLd from "@/components/JsonLd";
import { ForeverDaysFooter, ForeverDaysHeader } from "@/components/foreverdays/ForeverDaysChrome";
import { foreverdaysFonts } from "@/lib/fonts";
import { pageMetadata } from "@/lib/metadata";
import { CONTACT_EMAIL, ROUTES, SITE_NAME, WEBSITE_REF, absoluteUrl } from "@/lib/site";

// Every statement here should match what the ForeverDays iOS app actually does
// (ai-projects/forever-days). When the app starts collecting something new, update
// this page and LAST_UPDATED before shipping that version.
const LAST_UPDATED = { iso: "2026-10-30", label: "October 30, 2026" };

const title = "ForeverDays Privacy Policy";
const description =
  "How the ForeverDays app handles your data: what it collects, why, where it's stored, who processes it, and how to delete it.";

export const metadata: Metadata = pageMetadata({
  path: ROUTES.foreverdaysPrivacy,
  title,
  socialTitle: `${title} | ${SITE_NAME}`,
  description,
});

export const viewport: Viewport = { themeColor: "#F5EFE8" };

const pageUrl = absoluteUrl(ROUTES.foreverdaysPrivacy);
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: title,
      description,
      isPartOf: WEBSITE_REF,
      about: { "@id": `${absoluteUrl(ROUTES.foreverdays)}#app` },
      dateModified: LAST_UPDATED.iso,
      inLanguage: "en",
      breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: SITE_NAME, item: absoluteUrl(ROUTES.home) },
        { "@type": "ListItem", position: 2, name: "ForeverDays", item: absoluteUrl(ROUTES.foreverdays) },
        { "@type": "ListItem", position: 3, name: "Privacy Policy", item: pageUrl },
      ],
    },
  ],
};

const SECTIONS = [
  { id: "summary", title: "The short version" },
  { id: "who", title: "Who we are" },
  { id: "collect", title: "What we collect" },
  { id: "not-collect", title: "What we don't collect" },
  { id: "use", title: "How we use it" },
  { id: "storage", title: "Where it's stored and who processes it" },
  { id: "on-device", title: "What stays on your iPhone" },
  { id: "others", title: "Information about other people" },
  { id: "sharing", title: "Sharing" },
  { id: "deletion", title: "Keeping and deleting your data" },
  { id: "security", title: "Security" },
  { id: "rights", title: "Your rights" },
  { id: "children", title: "Children" },
  { id: "changes", title: "Changes to this policy" },
  { id: "contact", title: "Contact" },
] as const;

type SectionId = (typeof SECTIONS)[number]["id"];

const ink = "#1E1A1A";
const muted = "#4A433F";
const accent = "#B33650";

function Section({ id, children }: { id: SectionId; children: ReactNode }) {
  const heading = SECTIONS.find((s) => s.id === id)!.title;
  return (
    <section id={id} aria-labelledby={`${id}-title`} style={{ scrollMarginTop: "96px", paddingTop: "40px", marginTop: "40px", borderTop: "1px solid #E8DED4" }}>
      <h2 id={`${id}-title`} style={{ margin: "0", fontFamily: "var(--font-instrument-serif), Georgia, serif", fontWeight: "400", fontSize: "clamp(28px, 3.2vw, 38px)", lineHeight: "1.1", letterSpacing: "-0.01em", color: ink }}>
        {heading}
      </h2>
      {children}
    </section>
  );
}

function H3({ children }: { children: ReactNode }) {
  return <h3 style={{ margin: "28px 0 0", fontSize: "18px", fontWeight: "700", lineHeight: "1.4", color: ink }}>{children}</h3>;
}

function P({ children }: { children: ReactNode }) {
  return <p style={{ margin: "14px 0 0", fontSize: "17px", lineHeight: "1.7", color: muted }}>{children}</p>;
}

function List({ children }: { children: ReactNode }) {
  return <ul style={{ margin: "14px 0 0", paddingLeft: "22px", fontSize: "17px", lineHeight: "1.7", color: muted, display: "flex", flexDirection: "column", gap: "8px" }}>{children}</ul>;
}

function B({ children }: { children: ReactNode }) {
  return <strong style={{ color: ink, fontWeight: "600" }}>{children}</strong>;
}

function Ext({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" style={{ color: accent }}>
      {children}
    </a>
  );
}

const Email = () => <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: accent, fontWeight: "600" }}>{CONTACT_EMAIL}</a>;

export default function ForeverDaysPrivacyPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <div className={`page-foreverdays ${foreverdaysFonts}`} style={{ width: "100%", background: "#F5EFE8", color: ink, fontFamily: "-apple-system, BlinkMacSystemFont, var(--font-inter), 'Segoe UI', sans-serif" }}>
        <ForeverDaysHeader current="privacy" />
        <main id="main" style={{ maxWidth: "780px", margin: "0 auto", padding: "clamp(40px, 6vw, 80px) clamp(16px, 4vw, 40px) clamp(56px, 7vw, 96px)" }}>
          <nav aria-label="Breadcrumb" style={{ fontSize: "14px", color: "#6E6660" }}>
            <Link href={ROUTES.foreverdays} style={{ color: accent, textDecoration: "none", fontWeight: "600" }}>
              ← ForeverDays
            </Link>
          </nav>
          <h1 style={{ margin: "20px 0 0", fontFamily: "var(--font-instrument-serif), Georgia, serif", fontWeight: "400", fontSize: "clamp(44px, 6vw, 72px)", lineHeight: "1", letterSpacing: "-0.01em" }}>
            Privacy <em style={{ color: accent }}>Policy</em>
          </h1>
          <p style={{ margin: "18px 0 0", fontSize: "15px", color: "#6E6660" }}>
            Last updated <time dateTime={LAST_UPDATED.iso}>{LAST_UPDATED.label}</time> · Applies to the ForeverDays app for iPhone and this website.
          </p>

          <nav aria-label="On this page" style={{ marginTop: "36px", padding: "22px 24px", background: "#FDFBF9", border: "1px solid #E8DED4", borderRadius: "20px" }}>
            <p style={{ margin: "0", fontSize: "13px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#6E6660" }}>On this page</p>
            <ol style={{ margin: "12px 0 0", paddingLeft: "22px", columns: "2 220px", columnGap: "32px", fontSize: "15px", lineHeight: "1.9" }}>
              {SECTIONS.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} style={{ color: muted, textDecoration: "none" }}>{s.title}</a>
                </li>
              ))}
            </ol>
          </nav>

          <Section id="summary">
            <List>
              <li>Your dates, people, notes, checklists, reminders and memories are saved on your iPhone and backed up to your account so they survive a lost or new phone.</li>
              <li>Only you can read your backup. We don&apos;t sell your data, show ads, or track you across other apps and websites.</li>
              <li>We use a few Google Firebase services to run the backup and to spot crashes and slow screens.</li>
              <li>You can delete everything, or your whole account, from inside the app at any time.</li>
            </List>
          </Section>

          <Section id="who">
            <P>
              ForeverDays is made by Bhaskar Das at {SITE_NAME} (&quot;we&quot;, &quot;us&quot;). We are responsible for the personal data described here. Questions or requests go to <Email />.
            </P>
          </Section>

          <Section id="collect">
            <H3>Your account</H3>
            <P>
              ForeverDays asks you to sign in with <B>Apple</B> or <B>Google</B> so your data can be backed up and restored. From that sign-in we receive your <B>name</B>, your <B>email address</B> and a <B>unique account ID</B>. With Sign in with Apple you can choose to hide your email; we then only see Apple&apos;s private relay address. We never see your Apple or Google password.
            </P>

            <H3>What you add to the app</H3>
            <P>Everything you create is backed up to your account:</P>
            <List>
              <li><B>Dates</B> — title, day, occasion, how it repeats, notes, and any festival it follows.</li>
              <li><B>People</B> — name, notes and an optional photo.</li>
              <li><B>Reminders and alarms</B> — when and how you want to be reminded, and the message.</li>
              <li><B>Preparation checklists</B> — your tasks and whether they&apos;re done.</li>
              <li><B>Memories</B> — photos you add to a date, their captions and when they were taken.</li>
            </List>

            <H3>Photos you choose</H3>
            <P>
              ForeverDays uses Apple&apos;s photo picker, so the app only receives the photos you pick — it can&apos;t see the rest of your library. Photos are resized and saved on your iPhone, then backed up (see <a href="#storage" style={{ color: accent }}>where it&apos;s stored</a>).
            </P>

            <H3>Account and device details</H3>
            <P>
              To support you and understand who uses the app, your account&apos;s profile stores: your plan (Free or Pro), how you signed in, the app version, iOS version, iPhone model, your device&apos;s region and language settings, your time zone, when the account was created, and when you last signed in and last opened the app.
            </P>

            <H3>Diagnostics and usage</H3>
            <P>The app includes three Google Firebase tools that collect technical data automatically:</P>
            <List>
              <li><B>Firebase Crashlytics</B> — crash reports: what the app was doing when it crashed, device model, iOS version and app version.</li>
              <li><B>Firebase Performance Monitoring</B> — timings such as how long the app takes to start and how long network requests take.</li>
              <li><B>Google Analytics for Firebase</B> — basic usage such as app opens, sessions and screens viewed, with an app-instance identifier, device type and approximate region (derived from your IP address).</li>
            </List>
            <P>We use this only to fix problems and improve the app — never for advertising.</P>

            <H3>Purchases</H3>
            <P>
              Pro is bought through Apple&apos;s App Store. Apple handles payment; we never receive your card or billing details. The app only learns which plan you have so it can unlock features.
            </P>
          </Section>

          <Section id="not-collect">
            <P>ForeverDays does <B>not</B> access your contacts, precise location, camera, microphone or health data. It does not ask for permission to track you, and it contains no advertising.</P>
          </Section>

          <Section id="use">
            <List>
              <li>To provide the app: show your dates, schedule your reminders, and keep your data in sync and backed up across your devices.</li>
              <li>To restore your data when you sign in on a new or reset iPhone.</li>
              <li>To unlock the features of your plan.</li>
              <li>To answer support requests and fix crashes and bugs.</li>
              <li>To understand, in aggregate, how the app is used so we can improve it.</li>
            </List>
            <P>Where data-protection law requires a legal basis, we rely on providing the service you asked for (contract) and on our legitimate interest in keeping the app reliable and improving it.</P>
          </Section>

          <Section id="storage">
            <List>
              <li>
                <B>Google Firebase</B> (Authentication, Cloud Firestore and Cloud Storage) holds your account, your backed-up dates, people and photos, and your profile. Security rules let each account read and write only its own data.
              </li>
              <li>
                <B>Apple</B> handles Sign in with Apple and App Store purchases; <B>Google</B> handles Sign in with Google, plus Crashlytics, Performance Monitoring and Analytics.
              </li>
            </List>
            <P>
              These providers process data on our behalf under their own terms, and their servers may be outside your country. You can read <Ext href="https://firebase.google.com/support/privacy">Firebase&apos;s privacy and security information</Ext>, <Ext href="https://policies.google.com/privacy">Google&apos;s Privacy Policy</Ext> and <Ext href="https://www.apple.com/legal/privacy/">Apple&apos;s Privacy Policy</Ext>.
            </P>
          </Section>

          <Section id="on-device">
            <P>
              Reminders and alarms are scheduled by iOS on your iPhone. Home Screen widgets read a copy of your upcoming dates that stays on the device. Your app settings are also kept only on your iPhone.
            </P>
          </Section>

          <Section id="others">
            <P>
              ForeverDays is about the people you care about, so you may add their names, important dates, notes and photos. We store that information only so the app can work for you, and we never contact those people or use their information for anything else. Please add only what you&apos;re comfortable keeping, and respect their wishes if they ask you to remove it.
            </P>
          </Section>

          <Section id="sharing">
            <P>
              We don&apos;t sell or rent your personal data, and we don&apos;t share it with advertisers. We share it only with the service providers listed above so they can run the app for us, or when the law requires it — for example, to respond to a valid legal request.
            </P>
          </Section>

          <Section id="deletion">
            <P>We keep your data while you have an account. You stay in control:</P>
            <List>
              <li><B>Settings › Data › Delete all data</B> permanently removes every date, reminder, checklist, note, photo and person from your iPhone and from your cloud backup. Your account remains.</li>
              <li><B>Settings › Backup &amp; sync › Delete account</B> permanently deletes your account, your profile and everything backed up in Firebase, then removes your data from the iPhone.</li>
              <li><B>Signing out</B> removes your data from that iPhone; it stays in your backup and returns when you sign in again.</li>
            </List>
            <P>
              Crash reports, performance data and analytics are kept by Google for a limited time under its retention settings and are not tied to the content you create. If you can&apos;t use the app, email <Email /> from your account&apos;s address and we&apos;ll delete your data for you.
            </P>
          </Section>

          <Section id="security">
            <P>
              Data travels between the app and our providers over encrypted connections, and access rules keep each account&apos;s backup private to that account. No system is perfectly secure, but we limit what we collect and who can reach it.
            </P>
          </Section>

          <Section id="rights">
            <P>
              Depending on where you live (for example under the GDPR in Europe, the UK GDPR, India&apos;s Digital Personal Data Protection Act or California&apos;s CCPA), you may have the right to access, correct, export or delete your personal data, to object to or restrict some processing, and to withdraw consent. Most of this you can do in the app; for anything else, email <Email />. We&apos;ll reply within 30 days. You can also complain to your local data-protection authority.
            </P>
          </Section>

          <Section id="children">
            <P>
              ForeverDays is not directed to children under 13 (or the minimum age in your country), and we don&apos;t knowingly collect their personal data. If you believe a child has given us data, contact us and we&apos;ll delete it.
            </P>
          </Section>

          <Section id="changes">
            <P>
              If we change how ForeverDays handles your data, we&apos;ll update this page and the date at the top. If a change is significant, we&apos;ll also tell you in the app or by email before it takes effect.
            </P>
          </Section>

          <Section id="contact">
            <P>
              Questions, requests or concerns about your privacy: <Email />. ForeverDays is made by Bhaskar Das at {SITE_NAME}.
            </P>
          </Section>
        </main>
        <ForeverDaysFooter current="privacy" />
      </div>
    </>
  );
}
