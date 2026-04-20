import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://reservkit.com/sitemap.xml",
    host: "https://reservkit.com",
  };
}
