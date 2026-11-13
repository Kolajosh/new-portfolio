import { MetadataRoute } from "next";
import { siteConfig } from "@/utils/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    {
      path: "",
      priority: 1.0,
      changeFrequency: "weekly" as const,
    },
    {
      path: "/projects",
      priority: 0.9,
      changeFrequency: "weekly" as const,
    },
    {
      path: "/experience",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/about",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}

