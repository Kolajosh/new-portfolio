"use client";

import Wrapper from "@/components/Wrapper";
import { works } from "../projects/constants";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projects = () => {
  return (
    <div>
      <Wrapper>
        <div className="my-10 pb-20 mx-10 md:mx-20 space-y-10 font-inter">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 1 }}
            className="text-4xl leading-none md:text-7xl font-bold"
          >
            SELECTED WORK <br />
            (2021 - 2024)
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-4xl leading-none font-medium"
          >
            Preview some of the Web2.0
            <br />
            and Web3.0 projects i have
            <br />
            worked on.
          </motion.div>
        </div>

        {/* works */}
        {works?.map((item, index) => (
          <div className="mb-20 mx-10 md:mx-20">
            <div className="w-full relative">
              <Image
                className="object-cover h-[500px] rounded-xl w-full"
                src={item?.img}
                alt="hero"
              />
              <div className="absolute inset-0 flex flex-col gap-5 items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-60 text-white rounded-xl">
                <div className="text-2xl px-5 md:text-6xl font-bold">
                  {item?.name}
                </div>
                <div className="text-lg px-5 md:text-xl font-normal">
                  {item?.desc}
                </div>
                <div className="px-5 py-3 rounded-full border border-white">
                  <Link target="_blank" rel="noreferrer" href={item?.url}>
                    Visit
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Wrapper>
    </div>
  );
};

export default projects;
