// Single source of truth for URLs and copy used in metadata, JSON-LD and the sitemap.
// Set NEXT_PUBLIC_SITE_URL at build time if the production domain differs.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://kriralife.com").replace(/\/$/, "");

export const SITE_NAME = "Kriralife";
export const SITE_TAGLINE = "Thoughtful software for everyday life";
export const SITE_DESCRIPTION =
  "Kriralife is an independent product studio building small, focused apps — Codeveda for learning to code and ForeverDays for remembering the days that matter.";
export const CONTACT_EMAIL = "bhaskardaswork@gmail.com";
export const OG_IMAGE = { url: "/og-image.jpg", width: 1200, height: 630, alt: "Kriralife — Software for a better everyday" };

export const ROUTES = {
  home: "/",
  codeveda: "/codeveda/",
  foreverdays: "/foreverdays/",
  updates: "/updates/",
  foreverdaysPrivacy: "/foreverdays/privacy/",
} as const;

export const CODEVEDA_URL = "https://www.codeveda.dev";

// Kriralife has no accounts of its own yet; the studio posts through Codeveda's.
export const SOCIAL_LINKS = [
  { name: "YouTube", href: "https://www.youtube.com/@codeveda-dev" },
  { name: "Instagram", href: "https://www.instagram.com/codeveda.dev" },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/codeveda-dev" },
  { name: "GitHub", href: "https://github.com/codevedadev" },
  { name: "Facebook", href: "https://www.facebook.com/profile.php?id=61577039070689" },
] as const;

export const socialLink = (name: (typeof SOCIAL_LINKS)[number]["name"]) =>
  SOCIAL_LINKS.find((link) => link.name === name)!.href;

export const absoluteUrl = (path: string) => `${SITE_URL}${path}`;

// Structured-data references that stay meaningful when a crawler reads one page in isolation.
export const ORG_REF = { "@type": "Organization", "@id": `${SITE_URL}/#organization`, name: SITE_NAME, url: `${SITE_URL}/` };
export const WEBSITE_REF = { "@type": "WebSite", "@id": `${SITE_URL}/#website`, name: SITE_NAME, url: `${SITE_URL}/` };
