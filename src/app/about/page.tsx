"use client";

import Wrapper from "@/components/Wrapper";
import hero from "../../assets/imgs/new-kolawole.jpg";
import { services } from "../about/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type Service = {
  name: string;
  desc: string;
};

const about = () => {
  return (
    <div>
      <Wrapper>
        <div className="my-10 mx-10 md:mx-20 space-y-10 font-inter">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 1 }}
            className="text-4xl leading-none md:text-7xl font-bold"
          >
            WEB, ANIME <br />& NETWORKING
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-2xl md:text-4xl leading-none font-medium"
          >
            Enter my domain, where I embrace the realms of emerging web
            technologies. Discover my services, approach, and what captivates
            me.
            <br />
            ~ Building things that matter ~
          </motion.div>
        </div>

        {/* Hero */}
        <div className="mt-20 mb-10 mx-10 md:mx-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="w-full"
          >
            <Image
              className="object-cover h-[500px] rounded-xl w-full"
              src={hero}
              alt="hero"
            />
          </motion.div>
        </div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.6 }}
          className="my-40 mb-10 mx-10 md:mx-20 font-inter"
        >
          <div className="flex flex-col gap-5 md:flex-row justify-between items-center">
            <div className="text-4xl leading-none md:text-7xl font-bold">
              SERVICES
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
          <hr className="border mt-20" />
          <div className="mt-20">
            {services?.map((data: Service, index: number) => (
              <>
                <div
                  key={index}
                  className="grid grid-cols-1 md:grid-cols-3 font-inter"
                >
                  <div className="hidden md:block font-semibold text-xl">
                    0{index + 1}.
                  </div>
                  <div className="text-4xl font-inter font-semibold">
                    {data?.name}
                  </div>
                  <div className="text-[#868788] font-medium text-2xl">
                    {data?.desc}
                  </div>
                </div>
                <hr className="my-20" />
              </>
            ))}
          </div>
        </motion.div>
      </Wrapper>
    </div>
  );
};

export default about;
