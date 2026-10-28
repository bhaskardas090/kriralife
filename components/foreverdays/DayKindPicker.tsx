"use client";

import { Fragment, useState } from "react";

const CATS = [
  { key: "birthday", fg: "#B33650", tint: "#F8E3E6", title: "Dad's Birthday", meta: "Mon, 30 Nov · Dad", days: 35, ideas: ["Order the cake", "Plan a surprise call"] },
  { key: "anniversary", fg: "#5B3FA0", tint: "#ECE5F5", title: "Wedding Anniversary", meta: "Wed, 18 Nov · Priya · 8 years", days: 23, ideas: ["Book the restaurant", "Pick a gift"] },
  { key: "relationship", fg: "#B33650", tint: "#F8E3E6", title: "Since we met", meta: "Sat, 6 Mar · 4 years", days: 131, ideas: ["Write a note", "Plan a date night"] },
  { key: "family", fg: "#2E5C8A", tint: "#E1EAF3", title: "Family reunion", meta: "Sun, 27 Dec", days: 62, ideas: ["Book tickets", "Plan the menu"] },
  { key: "achievement", fg: "#85551D", tint: "#FCEBD3", title: "Riya's graduation", meta: "Fri, 4 Jun · Riya", days: 221, ideas: ["Send congratulations", "Get a card"] },
  { key: "milestone", fg: "#85551D", tint: "#FCEBD3", title: "1 year at the new job", meta: "Tue, 29 Dec", days: 64, ideas: ["Treat yourself", "Look back on the year"] },
  { key: "celebration", fg: "#2D6C54", tint: "#DDEEE6", title: "Housewarming", meta: "Sat, 21 Nov", days: 26, ideas: ["Send invites", "Order snacks"] },
  { key: "memorial", fg: "#5F5A55", tint: "#ECE7E2", title: "Remembering Nani", meta: "Thu, 7 Jan", days: 73, ideas: ["Light a lamp", "Call the family"] },
  { key: "custom", fg: "#2D6C54", tint: "#DDEEE6", title: "Our first trip", meta: "Wed, 14 Jul", days: 261, ideas: ["Add your own steps", "Set a reminder"] },
] as const;
type CatKey = (typeof CATS)[number]["key"];

export default function DayKindPicker() {
  const [cur, setCur] = useState<CatKey>("birthday");
  const tiles = Object.fromEntries(
    CATS.map((c) => {
      const on = c.key === cur;
      return [c.key, { bg: on ? "#B33650" : "#FDFBF9", text: on ? "#FFFFFF" : "#1E1A1A", icon: on ? "#FFFFFF" : c.fg, pressed: on, pick: () => setCur(c.key) }];
    }),
  ) as Record<CatKey, { bg: string; text: string; icon: string; pressed: boolean; pick: () => void }>;
  const c = CATS.find((x) => x.key === cur) ?? CATS[0];
  const pv = {
    fg: c.fg,
    tint: c.tint,
    initial: c.title.charAt(0),
    title: c.title,
    meta: c.meta,
    days: String(c.days),
    ideas: c.ideas.map((label) => ({ label })),
  };

  return (
    <div className="kl-reveal" style={{ flex: "1 1 520px", minWidth: "0", padding: "clamp(16px, 2.4vw, 28px)", borderRadius: "32px", background: "#EFE6DC" }}>
      <div role="group" aria-label="Kind of day" style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "10px" }}>
        <button className="kl-tile" type="button" aria-pressed={tiles.birthday.pressed} onClick={tiles.birthday.pick} style={{ minHeight: "96px", padding: "14px 8px", borderRadius: "20px", border: "0", background: tiles.birthday.bg, color: tiles.birthday.text, fontFamily: "inherit", fontSize: "15px", fontWeight: "600", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "8px" }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={tiles.birthday.icon} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M4 21h16M5 21v-7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v7" />
            <path d="M5 16c1.5 1 3 1 4.5 0s3-1 4.5 0 3 1 4.5 0" />
            <path d="M12 12V8" />
            <path d="M12 5.5c.8-.8.8-2 0-3-.8 1-.8 2.2 0 3z" />
          </svg>
          Birthday
        </button>
        <button className="kl-tile" type="button" aria-pressed={tiles.anniversary.pressed} onClick={tiles.anniversary.pick} style={{ minHeight: "96px", padding: "14px 8px", borderRadius: "20px", border: "0", background: tiles.anniversary.bg, color: tiles.anniversary.text, fontFamily: "inherit", fontSize: "15px", fontWeight: "600", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "8px" }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={tiles.anniversary.icon} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 12c-2-2.7-3.8-4-5.5-4a4 4 0 0 0 0 8c1.7 0 3.5-1.3 5.5-4zm0 0c2 2.7 3.8 4 5.5 4a4 4 0 0 0 0-8c-1.7 0-3.5 1.3-5.5 4z" />
          </svg>
          Anniversary
        </button>
        <button className="kl-tile" type="button" aria-pressed={tiles.relationship.pressed} onClick={tiles.relationship.pick} style={{ minHeight: "96px", padding: "14px 8px", borderRadius: "20px", border: "0", background: tiles.relationship.bg, color: tiles.relationship.text, fontFamily: "inherit", fontSize: "15px", fontWeight: "600", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "8px" }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={tiles.relationship.icon} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7z" />
          </svg>
          Relationship
        </button>
        <button className="kl-tile" type="button" aria-pressed={tiles.family.pressed} onClick={tiles.family.pick} style={{ minHeight: "96px", padding: "14px 8px", borderRadius: "20px", border: "0", background: tiles.family.bg, color: tiles.family.text, fontFamily: "inherit", fontSize: "15px", fontWeight: "600", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "8px" }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={tiles.family.icon} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="6.5" cy="5" r="2" />
            <circle cx="17.5" cy="5" r="2" />
            <circle cx="12" cy="10.5" r="1.6" />
            <path d="M4 21v-6l-1-1 1.5-5h4l1.5 5-1 1v6M14 21v-6l-1-1 1.5-5h4l1.5 5-1 1v6M10.5 21v-5h3v5" />
          </svg>
          Family
        </button>
        <button className="kl-tile" type="button" aria-pressed={tiles.achievement.pressed} onClick={tiles.achievement.pick} style={{ minHeight: "96px", padding: "14px 8px", borderRadius: "20px", border: "0", background: tiles.achievement.bg, color: tiles.achievement.text, fontFamily: "inherit", fontSize: "15px", fontWeight: "600", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "8px" }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={tiles.achievement.icon} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M22 9L12 4 2 9l10 5 10-5z" />
            <path d="M6 11v5c3 2.5 9 2.5 12 0v-5M22 9v6" />
          </svg>
          Achievement
        </button>
        <button className="kl-tile" type="button" aria-pressed={tiles.milestone.pressed} onClick={tiles.milestone.pick} style={{ minHeight: "96px", padding: "14px 8px", borderRadius: "20px", border: "0", background: tiles.milestone.bg, color: tiles.milestone.text, fontFamily: "inherit", fontSize: "15px", fontWeight: "600", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "8px" }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={tiles.milestone.icon} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 21V4M5 4h12l-2.5 4.5L17 13H5" />
          </svg>
          Milestone
        </button>
        <button className="kl-tile" type="button" aria-pressed={tiles.celebration.pressed} onClick={tiles.celebration.pick} style={{ minHeight: "96px", padding: "14px 8px", borderRadius: "20px", border: "0", background: tiles.celebration.bg, color: tiles.celebration.text, fontFamily: "inherit", fontSize: "15px", fontWeight: "600", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "8px" }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={tiles.celebration.icon} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5.8 11.3L2 22l10.7-3.8" />
            <path d="M4 3h.01M22 8h.01M15 2h.01M22 20h.01M22 2l-2.2.8a2.9 2.9 0 0 0-1.9 3.2c.1.9-.6 1.6-1.4 1.6h-.4c-.9 0-1.6.7-1.8 1.5L14 10" />
            <path d="M11 13c1.9 1.9 2.8 4.1 2 4.9-.8.8-3-.1-4.9-2-1.9-1.9-2.8-4.1-2-4.9.8-.8 3 .1 4.9 2z" />
          </svg>
          Celebration
        </button>
        <button className="kl-tile" type="button" aria-pressed={tiles.memorial.pressed} onClick={tiles.memorial.pick} style={{ minHeight: "96px", padding: "14px 8px", borderRadius: "20px", border: "0", background: tiles.memorial.bg, color: tiles.memorial.text, fontFamily: "inherit", fontSize: "15px", fontWeight: "600", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "8px" }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={tiles.memorial.icon} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10z" />
            <path d="M2 21c0-3 1.9-5.4 5.1-6" />
          </svg>
          Memorial
        </button>
        <button className="kl-tile" type="button" aria-pressed={tiles.custom.pressed} onClick={tiles.custom.pick} style={{ minHeight: "96px", padding: "14px 8px", borderRadius: "20px", border: "0", background: tiles.custom.bg, color: tiles.custom.text, fontFamily: "inherit", fontSize: "15px", fontWeight: "600", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "8px" }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={tiles.custom.icon} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 2.5l2.9 6 6.6.8-4.9 4.5 1.3 6.5L12 17l-5.9 3.3 1.3-6.5-4.9-4.5 6.6-.8z" />
          </svg>
          Custom
        </button>
      </div>
      <div style={{ marginTop: "14px", padding: "18px 20px", borderRadius: "22px", background: "#FDFBF9", display: "flex", flexDirection: "column", gap: "14px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <span aria-hidden="true" style={{ width: "48px", height: "48px", flex: "none", borderRadius: "999px", background: pv.tint, color: pv.fg, fontFamily: "var(--font-instrument-serif), Georgia, serif", fontSize: "22px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            {pv.initial}
          </span>
          <span style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "2px" }}>
            <span style={{ fontSize: "18px", fontWeight: "600" }}>
              {pv.title}
            </span>
            <span style={{ fontSize: "15px", color: "#6E6660" }}>
              {pv.meta}
            </span>
          </span>
          <span style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
            <span style={{ fontFamily: "var(--font-instrument-serif), Georgia, serif", fontSize: "40px", lineHeight: "1" }}>
              {pv.days}
            </span>
            <span style={{ fontSize: "13px", color: "#6E6660" }}>
              days
            </span>
          </span>
        </div>
        <div style={{ paddingTop: "12px", borderTop: "1px solid #EFE6DC", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px" }}>
          <span style={{ fontSize: "13px", fontWeight: "600", color: "#6E6660", marginRight: "4px" }}>
            Checklist ideas
          </span>
          {pv.ideas.map((idea, i) => (
            <Fragment key={i}>
              <span style={{ padding: "6px 12px", borderRadius: "999px", background: pv.tint, color: "#1E1A1A", fontSize: "14px" }}>
                {idea.label}
              </span>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
