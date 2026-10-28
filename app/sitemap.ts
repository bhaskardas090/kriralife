import type { MetadataRoute } from "next";
import { ROUTES, absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    {
      url: absoluteUrl(ROUTES.home),
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
      images: [absoluteUrl("/og-image.jpg")],
    },
    {
      url: absoluteUrl(ROUTES.codeveda),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: absoluteUrl(ROUTES.updates),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: absoluteUrl(ROUTES.foreverdays),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
      images: [
        absoluteUrl("/images/foreverdays-upcoming.webp"),
        absoluteUrl("/images/foreverdays-calendar.webp"),
        absoluteUrl("/images/foreverdays-new-date.webp"),
        absoluteUrl("/images/foreverdays-all-dates.webp"),
      ],
    },
    {
      url: absoluteUrl(ROUTES.foreverdaysPrivacy),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
