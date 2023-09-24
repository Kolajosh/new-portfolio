"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Wrapper from "@/components/Wrapper";
import { works } from "../app/projects/constants";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [randomItem, setRandomItem] = useState<{
    name: String;
    desc: String;
    url: any;
    img: any;
  }>({
    name: "",
    desc: "",
    url: "",
    img: "",
  });

  useEffect(() => {
    // Generate a random index between 0 and 3 (assuming you have 4 items)
    const randomIndex = Math.floor(Math.random() * works?.length);

    // Set the random item to display
    setRandomItem(works[randomIndex]);
  }, [works]);

  return (
    <>
      <Wrapper>
        <div className="my-10 mx-10 md:mx-20 space-y-10 font-inter">
          <motion.div
            className="text-4xl leading-none md:text-9xl font-bold"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 1 }}
          >
            KOLAWOLE AYOOLA <br />
            WEB ENGINEER
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-2xl md:text-5xl leading-none font-medium"
          >
            Crafting User Interfaces & Transforming Web Landscapes. I help
            companies around the world bring their vision to life with
            captivating visuals.
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <button className="relative font-medium py-5 px-10 border-black border rounded-full text-xl overflow-hidden group">
              kjosh344@gmail.com
              <span className="absolute bottom-0 left-0 w-full flex flex-col justify-center h-full bg-black text-white text-center transition-all duration-500 transform translate-y-full opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                <Link
                  target="_blank"
                  rel="noreferrer"
                  href="mailto:kjosh344@gmail.com"
                >
                  Let's Connect
                </Link>
              </span>
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-20 mt-20 mx-10 md:mx-20"
        >
          <div className="text-xl my-10 leading-none font-medium">
            (SELECTED WORK)
          </div>
          {/* works */}
          <div className="mb-20">
            <div className="w-full relative">
              <Image
                className="object-cover h-[500px] rounded-xl w-full"
                src={randomItem?.img}
                alt="hero"
              />
              <div className="absolute inset-0 flex flex-col gap-5 items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-60 text-white rounded-xl">
                <div className="text-2xl px-5 md:text-6xl font-bold">
                  {randomItem?.name}
                </div>
                <div className="text-lg px-5 md:text-xl font-normal">
                  {randomItem?.desc}
                </div>
                <div className="px-5 py-3 rounded-full border border-white">
                  <Link target="_blank" rel="noreferrer" href={randomItem?.url}>
                    Visit
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mb-20 mt-20 mx-10 md:mx-20">
          <div className="items-center font-inter space-y-10">
            <div className="text-[#000000] font-medium text-2xl md:text-4xl">
              Ready to enhance your business with exceptional digital design?
              Feel free to reach out and initiate a discussion about your
              digital design requirements
            </div>
            <div>
              <button className="relative font-medium py-5 px-10 border-black border rounded-full text-xl overflow-hidden group">
                kjosh344@gmail.com
                <span className="absolute bottom-0 left-0 w-full flex flex-col justify-center h-full bg-black text-white text-center transition-all duration-500 transform translate-y-full opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                  <Link
                    target="_blank"
                    rel="noreferrer"
                    href="mailto:kjosh344@gmail.com"
                  >
                    Let's Connect
                  </Link>
                </span>
              </button>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}
