import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="mt-10 mx-20 flex items-center text-xl justify-between font-semibold font-inter">
      <div className="font-bold text-2xl">
        <Link href="/">KJ®</Link>
      </div>
      <div className="font-medium">Available for bookings</div>
      <div className="flex font-medium items-center gap-3">
        <div className="font-medium cursor-pointer relative inline-block group">
          Projects
          <span className="absolute bottom-0 left-0 w-full h-[0.50px] bg-black transform origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></span>
        </div>
        <div className="font-medium cursor-pointer relative inline-block group">
          <Link href="/about">About</Link>
          <span className="absolute bottom-0 left-0 w-full h-[0.50px] bg-black transform origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></span>
        </div>
      </div>
      <div className="font-medium cursor-pointer relative inline-block group">
        kjosh344@gmail.com
        <span className="absolute bottom-0 left-0 w-full h-[0.50px] bg-black transform origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></span>
      </div>
    </div>
  );
};

export default Navbar;
