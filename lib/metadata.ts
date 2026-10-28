import type { Metadata } from "next";
import { OG_IMAGE, SITE_NAME } from "./site";

// Next merges openGraph/twitter shallowly, so every page must send the full objects
// or it loses og:type, og:site_name and the large Twitter card.
export function pageMetadata({
  path,
  title,
  socialTitle = title,
  description,
  keywords,
  absoluteTitle = false,
}: {
  path: string;
  title: string;
  socialTitle?: string;
  description: string;
  keywords?: string[];
  absoluteTitle?: boolean;
}): Metadata {
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: "en_US",
      url: path,
      title: socialTitle,
      description,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [OG_IMAGE.url],
    },
  };
}
