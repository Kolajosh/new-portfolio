import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center text-xl justify-between font-semibold font-inter">
      <div className="font-bold text-2xl">KJ®</div>
      <div className="font-medium">Available for bookings</div>
      <div className="flex font-medium items-center gap-5">
        <div>Projects</div>
        <div>About</div>
      </div>
      <div className="font-medium cursor-pointer relative inline-block group">
        kjosh344@gmail.com
        <span className="absolute bottom-0 left-0 w-full h-[0.50px] bg-black transform origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></span>
      </div>
    </div>
  );
};

export default Navbar;
