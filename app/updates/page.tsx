import type { Metadata, Viewport } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import SiteFooter from "@/components/home/SiteFooter";
import SiteHeader from "@/components/home/SiteHeader";
import { ProductBadge, TypeBadge, productStyle } from "@/components/home/UpdateCard";
import { homeFonts } from "@/lib/fonts";
import { pageMetadata } from "@/lib/metadata";
import { CODEVEDA_URL, ORG_REF, ROUTES, WEBSITE_REF, absoluteUrl } from "@/lib/site";
import { getUpdates, isoDate, updateAnchor } from "@/lib/updates";

const title = "Journal — all updates";
const description = "Every new course, feature and fix shipped by Kriralife, newest first.";

export const metadata: Metadata = pageMetadata({ path: ROUTES.updates, title, description });

export const viewport: Viewport = { themeColor: "#FFFFFF" };

export default async function UpdatesPage() {
  const updates = await getUpdates();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${absoluteUrl(ROUTES.updates)}#webpage`,
    url: absoluteUrl(ROUTES.updates),
    name: title,
    description,
    inLanguage: "en",
    isPartOf: WEBSITE_REF,
    publisher: ORG_REF,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: updates.map((update, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: update.title,
        url: `${absoluteUrl(ROUTES.updates)}#${updateAnchor(update)}`,
      })),
    },
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <div className={`page-home ${homeFonts}`} style={{ width: "100%", background: "#FFFFFF", color: "#1B2A44", fontFamily: "var(--font-nunito-sans), system-ui, sans-serif" }}>
        <SiteHeader current="updates" />
        <main id="main" style={{ maxWidth: "880px", margin: "0 auto", padding: "clamp(56px, 7vw, 96px) clamp(16px, 4vw, 40px) clamp(64px, 8vw, 112px)" }}>
          <p style={{ margin: "0", fontSize: "13px", fontWeight: "800", letterSpacing: "0.1em", textTransform: "uppercase", color: "#0A7D6B" }}>
            Journal
          </p>
          <h1 style={{ margin: "14px 0 0", fontFamily: "var(--font-nunito), var(--font-nunito-sans), sans-serif", fontWeight: "900", fontSize: "clamp(40px, 5.4vw, 68px)", lineHeight: "1.02", letterSpacing: "-0.03em", color: "#1B2A44" }}>
            Fresh from the studio.
          </h1>
          <p style={{ margin: "18px 0 0", maxWidth: "560px", fontSize: "clamp(17px, 1.6vw, 19px)", lineHeight: "1.6", color: "#51607A" }}>
            Every new course, feature and fix we ship, newest first.
          </p>

          {updates.length > 0 ? (
            <ol style={{ margin: "56px 0 0", padding: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "20px" }}>
              {updates.map((update) => (
                <li key={update.id} id={updateAnchor(update)} style={{ scrollMarginTop: "96px" }}>
                  <article style={{ display: "flex", flexWrap: "wrap", gap: "20px 24px", padding: "clamp(22px, 3vw, 32px)", background: "#FFFFFF", border: "1px solid #E3ECE8", borderRadius: "26px" }}>
                    <span aria-hidden="true" style={{ flex: "0 0 auto", display: "inline-flex", alignItems: "center", justifyContent: "center", width: "64px", height: "64px", borderRadius: "20px", ...productStyle(update).tile, fontSize: "32px", lineHeight: "1" }}>
                      {update.icon || "✨"}
                    </span>
                    <div style={{ flex: "1 1 300px", minWidth: "0", display: "flex", flexDirection: "column", gap: "10px" }}>
                      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px 10px" }}>
                        <ProductBadge update={update} />
                        <TypeBadge type={update.type} />
                        <time dateTime={isoDate(update.date)} style={{ fontSize: "14px", fontWeight: "600", color: "#51607A" }}>
                          {update.date}
                        </time>
                      </div>
                      <h2 style={{ margin: "0", fontFamily: "var(--font-nunito), var(--font-nunito-sans), sans-serif", fontSize: "clamp(21px, 2.2vw, 25px)", fontWeight: "800", lineHeight: "1.3", letterSpacing: "-0.01em" }}>
                        <a href={`#${updateAnchor(update)}`} style={{ color: "inherit", textDecoration: "none" }}>
                          {update.title}
                        </a>
                      </h2>
                      <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.65", color: "#51607A" }}>
                        {update.description}
                      </p>
                      {update.details && update.details.length > 0 && (
                        <ul style={{ margin: "4px 0 0", paddingLeft: "20px", fontSize: "15px", lineHeight: "1.65", color: "#3B4A63" }}>
                          {update.details.map((detail) => (
                            <li key={detail}>{detail}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </article>
                </li>
              ))}
            </ol>
          ) : (
            <p style={{ margin: "56px 0 0", fontSize: "17px", lineHeight: "1.6", color: "#51607A" }}>
              Couldn&apos;t load updates right now. See what&apos;s new on <a href={`${CODEVEDA_URL}/updates`}>codeveda.dev</a>.
            </p>
          )}

          <p style={{ margin: "48px 0 0", fontSize: "15px", color: "#51607A" }}>
            Want to try what&apos;s new? <a href={CODEVEDA_URL} style={{ fontWeight: "700" }}>Open Codeveda →</a> or <Link href={ROUTES.foreverdays} style={{ fontWeight: "700" }}>get ForeverDays →</Link>
          </p>
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
