import { MetadataRoute } from "next";
import { getBlogSlugs } from "@/lib/getBlogSlugs";
import { destinations } from "@/lib/destinations";
import { routes } from "@/lib/routes";

export default function sitemap(): MetadataRoute.Sitemap {

  const baseUrl = "https://yourdomain.com";

  const blogSlugs = getBlogSlugs();

  const blogPages = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
  }));

  const destinationPages = destinations.map((d) => ({
    url: `${baseUrl}/destinations/${d.slug}`,
    lastModified: new Date(),
  }));

  const routePages = routes.map((r) => ({
    url: `${baseUrl}/trips/${r.from}-to-${r.to}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/destinations`,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/trips`,
      lastModified: new Date(),
    },

    ...blogPages,
    ...destinationPages,
    ...routePages,
  ];
}