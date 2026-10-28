"use client";

import { useState } from "react";

export default function FestivalCard() {
  const [added, setAdded] = useState(false);
  const notAdded = !added;
  const addFestival = () => setAdded((a) => !a);

  return (
    <div className="kl-reveal" style={{ marginTop: "28px", maxWidth: "460px", padding: "16px 18px", borderRadius: "24px", background: "#FDFBF9", boxShadow: "0 14px 34px rgba(80,40,40,0.08)", display: "flex", alignItems: "center", gap: "14px" }}>
      <span aria-hidden="true" style={{ width: "48px", height: "48px", flex: "none", borderRadius: "999px", background: "#DDEEE6", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2D6C54" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5z" />
        </svg>
      </span>
      <span style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "2px" }}>
        <span style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.06em", textTransform: "uppercase", color: "#6E6660" }}>
          Thursday, 29 October
        </span>
        <span style={{ fontSize: "17px", fontWeight: "600" }}>
          Karwa Chauth
        </span>
        <span style={{ fontSize: "14px", color: "#6E6660" }}>
          Observance
        </span>
      </span>
      {notAdded && (
        <button type="button" onClick={addFestival} style={{ flex: "none", minHeight: "44px", padding: "0 18px", borderRadius: "999px", border: "0", background: "#F7E4E6", color: "#8E2A40", fontFamily: "inherit", fontSize: "15px", fontWeight: "600", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "6px" }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
            <path d="M12 5v14M5 12h14" />
          </svg>
          Add
        </button>
      )}
      {added && (
        <button type="button" onClick={addFestival} style={{ flex: "none", minHeight: "44px", padding: "0 18px", borderRadius: "999px", border: "0", background: "#2D6C54", color: "#FFFFFF", fontFamily: "inherit", fontSize: "15px", fontWeight: "600", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "6px" }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12.5l4.5 4.5L19 7.5" />
          </svg>
          Added
        </button>
      )}
    </div>
  );
}
