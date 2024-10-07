import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="mt-10 mx-10 md:mx-20 text-xl font-semibold font-inter">
      <div className="text-4xl text-center md:text-left leading-none md:text-7xl font-bold">
        KOLAWOLE JOSHUA <br />
        WEB DEVELOPER
      </div>
      <div className="grid grid-cold-1 text-center md:grid-cols-3 mt-10 mb-20 items-center gap-5">
        <div className="flex justify-center md:justify-normal gap-5">
          <div className="text-xl font-normal cursor-pointer relative inline-block group">
            <Link
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/kolawole-ayoola-264118186/"
            >
              Linkedin
            </Link>
            <span className="absolute bottom-0 left-0 w-full h-[0.50px] bg-black transform origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></span>
          </div>
          <div className="text-xl font-normal cursor-pointer relative inline-block group">
            <Link
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Kolajosh"
            >
              Github
            </Link>
            <span className="absolute bottom-0 left-0 w-full h-[0.50px] bg-black transform origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></span>
          </div>
          <div className="text-xl font-normal cursor-pointer relative inline-block group">
            <Link
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/josh_kolawole"
            >
              Twitter
            </Link>
            <span className="absolute bottom-0 left-0 w-full h-[0.50px] bg-black transform origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></span>
          </div>
        </div>

        <div>
          <div className="text-xl font-normal cursor-pointer relative inline-block group">
            <Link href="#navbar">Back to top ⬆</Link>
          </div>
        </div>

        <div className="md:text-right">
          <div className="text-xl font-medium cursor-pointer relative inline-block group">
            <div>KJ®</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
