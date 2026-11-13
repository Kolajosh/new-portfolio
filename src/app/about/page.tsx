import { Metadata } from "next";
import About from "@/components/views/About/About";
import { siteConfig } from "@/utils/site";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Personal story, engineering journey, and favorite books, anime, and cinema collections of Kolawole Ayoola.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: `About Me | ${siteConfig.name}`,
    description:
      "Personal story, engineering journey, and favorite books, anime, and cinema collections of Kolawole Ayoola.",
    url: `${siteConfig.url}/about`,
  },
};

export default function about() {
  return <About />;
}
