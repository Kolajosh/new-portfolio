import { Metadata } from "next";
import Home from "@/components/views/Home/Home";
import { siteConfig } from "@/utils/site";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
  },
};

export default function home() {
  return <Home />;
}
