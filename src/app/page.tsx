import { Metadata } from "next";
import Home from "@/components/views/Home/Home";

export const metadata: Metadata = {
  title: "Kolawole Joshua - Web Developer",
  description:
    "Building things that matter, I help brands worldwide elevate their digital presence.",
};

export default function home() {
  return <Home />;
}
