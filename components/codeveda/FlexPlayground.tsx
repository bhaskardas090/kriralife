"use client";

import { Fragment, useState } from "react";

const OPTS = ["flex-start", "center", "flex-end"] as const;
type Opt = (typeof OPTS)[number];

export default function FlexPlayground() {
  const [jc, setJc] = useState<Opt>("flex-start");
  const [ai, setAi] = useState<Opt>("flex-start");
  const mk = (cur: Opt, set: (o: Opt) => void) =>
    OPTS.map((o) => ({ label: o, on: o === cur, off: o !== cur, pick: () => set(o) }));
  const jcOpts = mk(jc, setJc);
  const aiOpts = mk(ai, setAi);
  const solved = jc === "center" && ai === "center";
  const unsolved = !solved;
  const reset = () => {
    setJc("flex-start");
    setAi("flex-start");
  };

  return (
    <div className="kl-reveal" style={{ marginTop: "48px", display: "flex", flexWrap: "wrap", background: "#FFF7EA", color: "#15123A", border: "2px solid #0A0820", borderRadius: "26px", boxShadow: "10px 10px 0 #7B5CFF", overflow: "hidden" }}>
      <div style={{ flex: "1 1 340px", minWidth: "0", padding: "28px", borderRight: "2px solid #15123A", display: "flex", flexDirection: "column", gap: "24px" }}>
        <div>
          <span style={{ display: "block", marginBottom: "10px", fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace", fontSize: "14px", fontWeight: "700" }}>
            justify-content
          </span>
          <div role="group" aria-label="justify-content" style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {jcOpts.map((o, i) => (
              <Fragment key={i}>
                {o.on && (
                  <button type="button" aria-pressed="true" onClick={o.pick} style={{ minHeight: "44px", padding: "0 16px", borderRadius: "12px", border: "2px solid #15123A", background: "#6B4CF6", color: "#FFFFFF", boxShadow: "3px 3px 0 #15123A", fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace", fontSize: "14px", fontWeight: "600", cursor: "pointer" }}>
                    {o.label}
                  </button>
                )}
                {o.off && (
                  <button type="button" aria-pressed="false" onClick={o.pick} style={{ minHeight: "44px", padding: "0 16px", borderRadius: "12px", border: "2px solid #15123A", background: "#FFFFFF", color: "#15123A", boxShadow: "3px 3px 0 #15123A", fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace", fontSize: "14px", fontWeight: "600", cursor: "pointer" }}>
                    {o.label}
                  </button>
                )}
              </Fragment>
            ))}
          </div>
        </div>
        <div>
          <span style={{ display: "block", marginBottom: "10px", fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace", fontSize: "14px", fontWeight: "700" }}>
            align-items
          </span>
          <div role="group" aria-label="align-items" style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {aiOpts.map((o, i) => (
              <Fragment key={i}>
                {o.on && (
                  <button type="button" aria-pressed="true" onClick={o.pick} style={{ minHeight: "44px", padding: "0 16px", borderRadius: "12px", border: "2px solid #15123A", background: "#6B4CF6", color: "#FFFFFF", boxShadow: "3px 3px 0 #15123A", fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace", fontSize: "14px", fontWeight: "600", cursor: "pointer" }}>
                    {o.label}
                  </button>
                )}
                {o.off && (
                  <button type="button" aria-pressed="false" onClick={o.pick} style={{ minHeight: "44px", padding: "0 16px", borderRadius: "12px", border: "2px solid #15123A", background: "#FFFFFF", color: "#15123A", boxShadow: "3px 3px 0 #15123A", fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace", fontSize: "14px", fontWeight: "600", cursor: "pointer" }}>
                    {o.label}
                  </button>
                )}
              </Fragment>
            ))}
          </div>
        </div>
        <div style={{ padding: "14px 16px", border: "2px dashed #15123A", borderRadius: "16px", background: "#FBEFD9", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "6px 14px" }}>
          <span style={{ fontFamily: "var(--font-caveat), cursive", fontSize: "28px", fontWeight: "700", color: "#5B3DF0" }}>
            mission:
          </span>
          <span style={{ flex: "1 1 180px", fontSize: "16px", fontWeight: "600" }}>
            Put the box in the dead centre.
          </span>
          {solved && (
            <span role="status" style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "6px 12px", borderRadius: "999px", background: "#3DDC97", border: "2px solid #15123A", fontSize: "14px", fontWeight: "700" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#15123A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12.5l4.5 4.5L19 7.5" />
              </svg>
              Nailed it
            </span>
          )}
          {unsolved && (
            <span style={{ fontSize: "14px", color: "#55526E" }}>
              not there yet…
            </span>
          )}
        </div>
        <button type="button" onClick={reset} style={{ alignSelf: "flex-start", minHeight: "44px", padding: "0 18px", borderRadius: "12px", border: "2px solid #15123A", background: "#FFF7EA", color: "#15123A", fontFamily: "inherit", fontSize: "15px", fontWeight: "700", cursor: "pointer" }}>
          Reset
        </button>
      </div>
      <div style={{ flex: "2 1 420px", minWidth: "0", padding: "28px", display: "flex", flexDirection: "column", gap: "18px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace", fontSize: "13px", fontWeight: "600" }}>
          <span>
            .container
          </span>
          <span style={{ color: "#55526E" }}>
            live preview
          </span>
        </div>
        <div style={{ height: "260px", padding: "16px", border: "2px dashed #7B5CFF", borderRadius: "18px", backgroundColor: "#FFFFFF", backgroundImage: "linear-gradient(rgba(21,18,58,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(21,18,58,0.06) 1px, transparent 1px)", backgroundSize: "24px 24px", display: "flex", justifyContent: jc, alignItems: ai }}>
          <div style={{ width: "84px", height: "84px", borderRadius: "16px", background: "#FFD23F", border: "2px solid #15123A", boxShadow: "4px 4px 0 #15123A", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace", fontSize: "24px", fontWeight: "700" }}>
            A
          </div>
        </div>
        <pre style={{ margin: "0", padding: "18px 20px", background: "#15123A", color: "#FFF7EA", borderRadius: "16px", fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace", fontSize: "14px", lineHeight: "1.8", overflowX: "auto" }}><code>{".container {\n  display: "}<span style={{ color: "#7CC4FF" }}>{"flex"}</span>{";\n  justify-content: "}<span style={{ color: "#FFD23F" }}>{jc}</span>{";\n  align-items: "}<span style={{ color: "#3DDC97" }}>{ai}</span>{";\n}"}</code></pre>
      </div>
    </div>
  );
}
