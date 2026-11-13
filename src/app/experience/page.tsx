import { Metadata } from "next";
import Experience from "@/components/views/Experience/Experience";
import { siteConfig } from "@/utils/site";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Engineering career highlights and professional work history of Kolawole Ayoola across Moniepoint MFB, ALAT (Wema Bank), and Andela.",
  alternates: {
    canonical: "/experience",
  },
  openGraph: {
    title: `Experience | ${siteConfig.name}`,
    description:
      "Engineering career highlights and professional work history of Kolawole Ayoola across Moniepoint MFB, ALAT (Wema Bank), and Andela.",
    url: `${siteConfig.url}/experience`,
  },
};

export default function ExperiencePage() {
  return <Experience />;
}
