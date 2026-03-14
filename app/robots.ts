import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {

  const baseUrl = "https://trip-planner-ai-eta.vercel.app/";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      }
    ],

    sitemap: `${baseUrl}/sitemap.xml`,
  };

}