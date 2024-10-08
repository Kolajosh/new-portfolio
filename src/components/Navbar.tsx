import Link from "next/link";
import React from "react";
import { HoverBorderGradient } from "./ui/HoverBorderGradient";
import Image from "next/image";
import Logo from "@/assets/imgs/logo.png";

const Navbar = () => {
  return (
    <div className="mt-10 mx-10 md:mx-20 flex items-center text-xl justify-between font-semibold font-inter">
      <div className="font-semibold  text-xl  ">
        <Link className="flex items-center gap-3" href="/">
          <Image src={Logo} width={50} alt="logo" />
          <span className="hidden md:block">Kolawole J</span>
        </Link>
      </div>
      <div className="">
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="bg-white text-xs font-medium text-black flex items-center space-x-2"
        >
          <span>Active for work</span>
        </HoverBorderGradient>
      </div>
      <div className="flex text-[16px] md:text-[20px] font-medium items-center gap-5">
        <div className="font-medium cursor-pointer relative inline-block group">
          <Link href="/projects">Projects</Link>
          <span className="absolute bottom-0 left-0 w-full h-[0.50px] bg-black transform origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></span>
        </div>
        <div className="font-medium cursor-pointer relative inline-block group">
          <Link href="/about">About</Link>
          <span className="absolute bottom-0 left-0 w-full h-[0.50px] bg-black transform origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></span>
        </div>
      </div>
      <div className="font-medium hidden cursor-pointer relative md:inline-block group">
        kjosh344@gmail.com
        <span className="absolute bottom-0 left-0 w-full h-[0.50px] bg-black transform origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></span>
      </div>
    </div>
  );
};

export default Navbar;
