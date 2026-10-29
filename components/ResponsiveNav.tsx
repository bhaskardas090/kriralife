"use client";

import { useEffect, useId, useRef, useState, type CSSProperties, type MouseEvent, type ReactNode } from "react";

// Collapses a header's links into a dropdown at ≤900px (see .kl-nav in globals.css).
// Links stay server-rendered — they're passed in as children — so this only adds the toggle.
// The CTA sits in the bar on most phones and moves into the panel on very narrow screens.

export type NavTheme = {
  /** Toggle icon and border colour. */
  ink: string;
  border: string;
  /** Background of the dropdown panel. */
  panelBg: string;
};

const DESKTOP_QUERY = "(min-width: 901px)";

export default function ResponsiveNav({ children, cta, theme }: { children: ReactNode; cta: ReactNode; theme: NavTheme }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onPointer = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    // Widening to desktop shows the links inline, so a stale "open" would only confuse the toggle.
    const desktop = window.matchMedia(DESKTOP_QUERY);
    const onWide = () => desktop.matches && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    desktop.addEventListener("change", onWide);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
      desktop.removeEventListener("change", onWide);
    };
  }, [open]);

  // Any tapped link (including same-page anchors) closes the panel.
  const closeOnLink = (e: MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).closest("a")) setOpen(false);
  };

  const vars = { "--nav-ink": theme.ink, "--nav-border": theme.border, "--nav-panel-bg": theme.panelBg } as CSSProperties;

  return (
    <div ref={rootRef} className="kl-nav" data-open={open} style={vars}>
      <div id={panelId} className="kl-nav-links" onClick={closeOnLink}>
        {children}
        <div className="kl-nav-cta kl-nav-cta--panel">{cta}</div>
      </div>
      <div className="kl-nav-cta kl-nav-cta--bar">{cta}</div>
      <button
        ref={toggleRef}
        type="button"
        className="kl-nav-toggle"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((o) => !o)}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
          {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
        </svg>
      </button>
    </div>
  );
}
