import { Metadata } from "next";
import Projects from "@/components/views/Projects/Projects";
import { siteConfig } from "@/utils/site";

export const metadata: Metadata = {
  title: "Selected Work",
  description:
    "Explore selected engineering projects, web applications, and digital platforms built by Kolawole Ayoola across fintech, SaaS, and Web3.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: `Selected Work | ${siteConfig.name}`,
    description:
      "Explore selected engineering projects, web applications, and digital platforms built by Kolawole Ayoola across fintech, SaaS, and Web3.",
    url: `${siteConfig.url}/projects`,
  },
};

export default function project() {
  return <Projects />;
}
