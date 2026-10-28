"use client";

import { Fragment, useState } from "react";

const TASKS = [
  { key: "table", label: "Book the restaurant" },
  { key: "flowers", label: "Order flowers" },
];

export default function PrepChecklist() {
  const [checks, setChecks] = useState<Record<string, boolean>>({});
  const tasks = TASKS.map((t) => ({
    label: t.label,
    on: !!checks[t.key],
    off: !checks[t.key],
    toggle: () => setChecks((prev) => ({ ...prev, [t.key]: !prev[t.key] })),
  }));
  const doneCount = tasks.filter((t) => t.on).length;
  const done = String(doneCount);
  const pct = Math.round((doneCount / TASKS.length) * 100) + "%";
  const allDone = doneCount === TASKS.length;

  return (
    <div className="kl-reveal" style={{ width: "100%", maxWidth: "480px", padding: "clamp(20px, 3vw, 30px)", borderRadius: "34px", background: "#FFFFFF", boxShadow: "0 1px 2px rgba(80,40,40,0.05), 0 30px 70px rgba(120,60,60,0.12)", display: "flex", flexDirection: "column", gap: "18px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", gap: "16px" }}>
        <div style={{ minWidth: "0" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "10px", fontSize: "15px", fontWeight: "600", color: "#5B3FA0" }}>
            <span aria-hidden="true" style={{ width: "36px", height: "36px", borderRadius: "999px", background: "#ECE5F5", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5B3FA0" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 12c-2-2.7-3.8-4-5.5-4a4 4 0 0 0 0 8c1.7 0 3.5-1.3 5.5-4zm0 0c2 2.7 3.8 4 5.5 4a4 4 0 0 0 0-8c-1.7 0-3.5 1.3-5.5 4z" />
              </svg>
            </span>
            Anniversary · Priya
          </span>
          <p style={{ margin: "14px 0 0", fontFamily: "var(--font-instrument-serif), Georgia, serif", fontSize: "clamp(34px, 3.4vw, 44px)", lineHeight: "1.02" }}>
            Wedding Anniversary
          </p>
          <p style={{ margin: "10px 0 0", fontSize: "15px", color: "#6E6660" }}>
            Wednesday, 18 November · 8 years
          </p>
        </div>
        <div style={{ flex: "none", textAlign: "center" }}>
          <span style={{ display: "block", fontFamily: "var(--font-instrument-serif), Georgia, serif", fontSize: "clamp(72px, 7vw, 96px)", lineHeight: "0.9", color: "#B33650" }}>
            23
          </span>
          <span style={{ fontSize: "14px", color: "#6E6660" }}>
            days to go
          </span>
        </div>
      </div>
      <div style={{ padding: "14px 16px", borderRadius: "18px", background: "#F7E4E6", display: "flex", gap: "12px" }}>
        <svg className="kl-ring" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#B33650" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none", marginTop: "1px" }}>
          <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
          <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
        </svg>
        <span style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
          <span style={{ fontSize: "14px", fontWeight: "600", color: "#8E2A40" }}>
            Next reminder · Wed, 11 Nov, 8:00 PM
          </span>
          <span style={{ fontSize: "15px", lineHeight: "1.45" }}>
            Wedding Anniversary is in 7 days. Start planning!
          </span>
        </span>
      </div>
      <div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "15px", color: "#6E6660" }}>
          <span>
            Preparation
          </span>
          <span>
            {done}{" of 2 done"}
          </span>
        </div>
        <span aria-hidden="true" style={{ display: "block", marginTop: "10px", height: "8px", borderRadius: "999px", background: "#EFE6DC", overflow: "hidden" }}>
          <span style={{ display: "block", height: "100%", width: pct, borderRadius: "999px", background: "#B33650", transition: "width .5s cubic-bezier(.2,.7,.2,1)" }} />
        </span>
        <div style={{ marginTop: "14px", display: "flex", flexDirection: "column", gap: "8px" }}>
          {tasks.map((t, i) => (
            <Fragment key={i}>
              {t.on && (
                <button type="button" aria-pressed="true" onClick={t.toggle} style={{ minHeight: "48px", padding: "0 14px", borderRadius: "14px", border: "1px solid #F0D3D8", background: "#FBF0F1", color: "#6E6660", fontFamily: "inherit", fontSize: "15px", textAlign: "left", textDecoration: "line-through", cursor: "pointer", display: "flex", alignItems: "center", gap: "12px" }}>
                  <span aria-hidden="true" style={{ width: "22px", height: "22px", flex: "none", borderRadius: "999px", background: "#B33650", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                  </span>
                  {t.label}
                </button>
              )}
              {t.off && (
                <button type="button" aria-pressed="false" onClick={t.toggle} style={{ minHeight: "48px", padding: "0 14px", borderRadius: "14px", border: "1px solid #EFE6DC", background: "#FFFFFF", color: "#1E1A1A", fontFamily: "inherit", fontSize: "15px", textAlign: "left", cursor: "pointer", display: "flex", alignItems: "center", gap: "12px" }}>
                  <span aria-hidden="true" style={{ width: "22px", height: "22px", flex: "none", borderRadius: "999px", border: "2px solid #D9CCC0" }} />
                  {t.label}
                </button>
              )}
            </Fragment>
          ))}
        </div>
        {allDone && (
          <p role="status" style={{ margin: "14px 0 0", fontFamily: "var(--font-instrument-serif), Georgia, serif", fontStyle: "italic", fontSize: "24px", color: "#B33650" }}>
            All set for the big day.
          </p>
        )}
      </div>
    </div>
  );
}
