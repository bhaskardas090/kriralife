"use client";

import { Fragment, useState } from "react";

const CHOICES = ["2", "3", "undefined", '["py", "js", "go"]'];
const RIGHT = 1;

export default function OutputQuiz() {
  const [picked, setPicked] = useState(-1);
  const answered = picked !== -1;
  const answers = CHOICES.map((label, i) => {
    const good = answered && i === RIGHT;
    const bad = answered && i === picked && i !== RIGHT;
    return { label, good, bad, idle: !good && !bad, pick: () => setPicked(i) };
  });
  const waiting = !answered;
  const gotIt = answered && picked === RIGHT;
  const missed = answered && picked !== RIGHT;
  const retry = () => setPicked(-1);

  return (
    <div style={{ position: "relative", padding: "26px", background: "#FFF7EA", color: "#15123A", border: "2px solid #0A0820", borderRadius: "24px", display: "flex", flexDirection: "column", gap: "16px" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ padding: "4px 10px", borderRadius: "10px", background: "#FFD23F", border: "2px solid #15123A", fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace", fontSize: "13px", fontWeight: "700" }}>
          Guess the output
        </span>
        <span style={{ fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace", fontSize: "13px", fontWeight: "600" }}>
          1 / 10
        </span>
      </div>
      <p style={{ margin: "0", fontSize: "21px", fontWeight: "700", letterSpacing: "-0.02em" }}>
        What does this log?
      </p>
      <pre className="kl-code" style={{ margin: "0", padding: "16px 18px", background: "#15123A", color: "#FFF7EA", borderRadius: "14px", fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace", fontSize: "14px", lineHeight: "1.8", overflowX: "auto" }}><code><span style={{ color: "#B9A6FF" }}>{"const"}</span>{" langs = ["}<span style={{ color: "#3DDC97" }}>{"\"py\""}</span>{", "}<span style={{ color: "#3DDC97" }}>{"\"js\""}</span>{"];\nlangs."}<span style={{ color: "#7CC4FF" }}>{"push"}</span>{"("}<span style={{ color: "#3DDC97" }}>{"\"go\""}</span>{");\nconsole."}<span style={{ color: "#7CC4FF" }}>{"log"}</span>{"(langs.length);"}</code></pre>
      <div role="group" aria-label="Answers" style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "10px" }}>
        {answers.map((a, i) => (
          <Fragment key={i}>
            {a.idle && (
              <button type="button" onClick={a.pick} style={{ minHeight: "52px", padding: "10px 14px", borderRadius: "14px", border: "2px solid #15123A", background: "#FFFFFF", color: "#15123A", boxShadow: "3px 3px 0 #15123A", fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace", fontSize: "14px", fontWeight: "600", textAlign: "left", overflowWrap: "anywhere", cursor: "pointer" }}>
                {a.label}
              </button>
            )}
            {a.good && (
              <button type="button" onClick={a.pick} style={{ minHeight: "52px", padding: "10px 14px", borderRadius: "14px", border: "2px solid #15123A", background: "#3DDC97", color: "#15123A", boxShadow: "3px 3px 0 #15123A", fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace", fontSize: "14px", fontWeight: "700", textAlign: "left", overflowWrap: "anywhere", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px" }}>
                {a.label}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#15123A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-label="correct" role="img">
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
              </button>
            )}
            {a.bad && (
              <button type="button" onClick={a.pick} style={{ minHeight: "52px", padding: "10px 14px", borderRadius: "14px", border: "2px solid #15123A", background: "#FF6B5B", color: "#15123A", boxShadow: "3px 3px 0 #15123A", fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace", fontSize: "14px", fontWeight: "700", textAlign: "left", overflowWrap: "anywhere", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px" }}>
                {a.label}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#15123A" strokeWidth="3" strokeLinecap="round" aria-label="wrong" role="img">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            )}
          </Fragment>
        ))}
      </div>
      <div role="status" style={{ minHeight: "52px", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px 14px" }}>
        {waiting && (
          <span style={{ fontFamily: "var(--font-caveat), cursive", fontSize: "26px", fontWeight: "700", color: "#5B3DF0" }}>
            pick one — no peeking
          </span>
        )}
        {gotIt && (
          <span style={{ fontSize: "16px", fontWeight: "600" }}>
            {"Correct! "}
            <span style={{ fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace" }}>
              push()
            </span>
            {" adds one item, so the array now holds 3."}
          </span>
        )}
        {missed && (
          <>
            <span style={{ flex: "1 1 220px", fontSize: "16px", fontWeight: "600" }}>
              {"Not quite — "}
              <span style={{ fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace" }}>
                push()
              </span>
              {" adds one item, so the length is 3."}
            </span>
            <button type="button" onClick={retry} style={{ minHeight: "44px", padding: "0 16px", borderRadius: "12px", border: "2px solid #15123A", background: "#FFF7EA", color: "#15123A", fontFamily: "inherit", fontSize: "15px", fontWeight: "700", cursor: "pointer" }}>
              Try again
            </button>
          </>
        )}
      </div>
    </div>
  );
}
