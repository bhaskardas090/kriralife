import Link from "next/link";
import type { CSSProperties } from "react";
import { ROUTES } from "@/lib/site";
import { isoDate, updateAnchor, type StudioUpdate, type UpdateProduct } from "@/lib/updates";

export const TYPE_COLORS: Record<StudioUpdate["type"], { bg: string; fg: string }> = {
  Feature: { bg: "#7B5CFF", fg: "#FFFFFF" },
  "New Content": { bg: "#1BA982", fg: "#FFFFFF" },
  Update: { bg: "#FEAE33", fg: "#1B2A44" },
};

export function TypeBadge({ type }: { type: StudioUpdate["type"] }) {
  const colors = TYPE_COLORS[type] ?? TYPE_COLORS.Update;
  return (
    <span style={{ padding: "4px 10px", borderRadius: "999px", background: colors.bg, color: colors.fg, fontSize: "12px", fontWeight: "700" }}>
      {type}
    </span>
  );
}

// Each product keeps the palette of its own page (see app/codeveda and app/foreverdays).
export const PRODUCT_STYLES: Record<UpdateProduct, { name: string; badgeBg: string; badgeFg: string; banner: CSSProperties; tile: CSSProperties }> = {
  codeveda: {
    name: "Codeveda",
    badgeBg: "#15123A",
    badgeFg: "#FFF7EA",
    banner: { backgroundColor: "#15123A", backgroundImage: "radial-gradient(rgba(255,247,234,0.09) 1.2px, transparent 1.6px)", backgroundSize: "20px 20px" },
    tile: { background: "#FFF7EA", border: "2px solid #0A0820", boxShadow: "6px 6px 0 #7B5CFF" },
  },
  foreverdays: {
    name: "ForeverDays",
    badgeBg: "#F7E4E6",
    badgeFg: "#8E2A40",
    banner: { backgroundColor: "#F5EFE8", backgroundImage: "radial-gradient(rgba(179,54,80,0.1) 1.2px, transparent 1.6px)", backgroundSize: "20px 20px" },
    tile: { background: "#FDFBF9", border: "1px solid #E3D8CD", boxShadow: "0 14px 30px rgba(179,54,80,0.18)" },
  },
};

export const productStyle = (update: Pick<StudioUpdate, "product">) => PRODUCT_STYLES[update.product ?? "codeveda"] ?? PRODUCT_STYLES.codeveda;

export function ProductBadge({ update }: { update: Pick<StudioUpdate, "product"> }) {
  const style = productStyle(update);
  return (
    <span style={{ padding: "4px 10px", borderRadius: "999px", background: style.badgeBg, color: style.badgeFg, fontSize: "12px", fontWeight: "700" }}>
      {style.name}
    </span>
  );
}

export default function UpdateCard({ update }: { update: StudioUpdate }) {
  const style = productStyle(update);
  return (
    <article className="kl-lift" style={{ flex: "1 1 320px", minWidth: "0", background: "#FFFFFF", border: "1px solid #E3ECE8", borderRadius: "26px", overflow: "hidden", display: "flex", flexDirection: "column" }}>
      <div aria-hidden="true" style={{ position: "relative", aspectRatio: "1200 / 560", display: "flex", alignItems: "center", justifyContent: "center", ...style.banner }}>
        <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "84px", height: "84px", borderRadius: "24px", ...style.tile, fontSize: "42px", lineHeight: "1", transform: "rotate(-4deg)" }}>
          {update.icon || "✨"}
        </span>
      </div>
      <div style={{ flex: "1", padding: "22px 24px 24px", display: "flex", flexDirection: "column", gap: "10px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px 10px" }}>
          <ProductBadge update={update} />
          <TypeBadge type={update.type} />
          <time dateTime={isoDate(update.date)} style={{ fontSize: "14px", fontWeight: "600", color: "#51607A" }}>
            {update.date}
          </time>
        </div>
        <h3 style={{ margin: "0", fontFamily: "var(--font-nunito), var(--font-nunito-sans), sans-serif", fontSize: "21px", fontWeight: "800", lineHeight: "1.3", letterSpacing: "-0.01em" }}>
          {update.title}
        </h3>
        <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "#51607A", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
          {update.description}
        </p>
        <Link href={`${ROUTES.updates}#${updateAnchor(update)}`} aria-label={`Read more: ${update.title}`} style={{ display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "44px", marginTop: "auto", color: "#0A7D6B", textDecoration: "none", fontWeight: "800", fontSize: "15px" }}>
          Read more
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </Link>
      </div>
    </article>
  );
}
