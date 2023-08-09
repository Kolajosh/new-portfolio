import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="my-10 mx-20 space-y-16 font-inter">
        <Navbar />
        <div className="text-9xl font-bold">
          KOLAWOLE AYOOLA <br />
          WEB ENGINEER
        </div>
        <div className="text-5xl font-medium">
          Crafting User Interfaces & Transforming Web Landscapes.
          <br />
          I help companies around the world bring their vision to
          <br />
          life with captivating visuals.
        </div>
        <button className="relative font-medium py-5 px-10 border-black border rounded-full text-xl overflow-hidden group">
          kjosh344@gmail.com
          <span className="absolute bottom-0 left-0 w-full flex flex-col justify-center h-full bg-black text-white text-center transition-all duration-500 transform translate-y-full opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
            Let's Connect
          </span>
        </button>
      </div>
    </>
  );
}
