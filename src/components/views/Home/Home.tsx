"use client";

import React from "react";
import { motion } from "framer-motion";
import Wrapper from "@/components/Wrapper";
import FolderCard from "@/components/ui/FolderCard";
import Image from "next/image";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/react";

import portraitImg from "@/assets/imgs/me-cutout-color.png";
import coverjobsImg from "@/assets/imgs/coverjobs-new.jpeg";
import lendsqrImg from "@/assets/imgs/lendsqr.jpeg";
import animeImg from "@/assets/imgs/anime-log-new.jpeg";

const Home = () => {
  return (
    <>
      <Analytics />
      <Wrapper>
        <div className="flex-1 flex flex-col items-center justify-between px-6 pt-6 sm:pt-10 pb-6">
          {/* Bio & Contact Section */}
          <motion.section
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="max-w-[740px] mx-auto text-center"
          >
            <h1 className="text-[18px] sm:text-[20px] font-semibold tracking-tight mb-3.5">
              Hi, I’m Kolawole{" "}
              <span className="inline-block origin-bottom-right hover:rotate-12 transition-transform">
                👋🏼
              </span>
            </h1>

            <p
              className="text-[14px] sm:text-[15px] leading-[1.75] font-normal"
              style={{ color: "var(--app-text-secondary)" }}
            >
              Senior Frontend Software Engineer with over 5 years of end-to-end
              experience in digital products, spanning SaaS, fintech, and Web3
              applications. Previously, I was a Frontend Engineer at{" "}
              <Link
                href="/experience"
                className="underline underline-offset-4 decoration-current/40 hover:decoration-current transition-colors"
                style={{ color: "var(--app-text)" }}
              >
                Moniepoint MFB
              </Link>{" "}
              and worked at{" "}
              <Link
                href="/experience"
                className="underline underline-offset-4 decoration-current/40 hover:decoration-current transition-colors"
                style={{ color: "var(--app-text)" }}
              >
                ALAT (Wema Bank)
              </Link>{" "}
              and{" "}
              <Link
                href="/experience"
                className="underline underline-offset-4 decoration-current/40 hover:decoration-current transition-colors"
                style={{ color: "var(--app-text)" }}
              >
                Andela
              </Link>
              .
            </p>

            <p
              className="mt-6 text-[14px] sm:text-[15px]"
              style={{ color: "var(--app-text-secondary)" }}
            >
              Feel free to reach out to me through any of the channels below.
            </p>

            <div className="mt-2.5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[14px] font-medium">
              <a
                href="mailto:kjosh344@gmail.com"
                className="underline underline-offset-4 decoration-current/50 hover:decoration-current transition-opacity hover:opacity-80"
              >
                Email
              </a>
              <a
                href="https://www.linkedin.com/in/kolawole-ayoola-264118186/"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 decoration-current/50 hover:decoration-current transition-opacity hover:opacity-80"
              >
                LinkedIn
              </a>
              <a
                href="https://twitter.com/josh_kolawole"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 decoration-current/50 hover:decoration-current transition-opacity hover:opacity-80"
              >
                X (Twitter)
              </a>
              <a
                href="https://github.com/Kolajosh"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 decoration-current/50 hover:decoration-current transition-opacity hover:opacity-80"
              >
                GitHub
              </a>
              <a
                href="https://medium.com/@kjosh344"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 decoration-current/50 hover:decoration-current transition-opacity hover:opacity-80"
              >
                Medium
              </a>
            </div>
          </motion.section>

          {/* 3 Interactive Folders (Case Studies removed) */}
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            aria-label="Portfolio sections"
            className="mt-9 sm:mt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-7"
          >
            {/* 1. Selected Work Folder */}
            <FolderCard href="/projects" label="Selected Work">
              <div className="relative w-18 h-12">
                <div className="absolute left-0.5 bottom-1.5 w-8 h-6.5 rounded-sm overflow-hidden bg-white p-0.5 shadow-xs -rotate-12 transition-transform duration-300 group-hover:-translate-y-2 group-hover:-rotate-16">
                  <Image
                    src={lendsqrImg}
                    alt=""
                    fill
                    sizes="36px"
                    className="object-cover rounded-[2px]"
                  />
                </div>
                <div className="absolute left-5 bottom-2 w-8 h-7.5 rounded-sm overflow-hidden bg-white p-0.5 shadow-sm z-10 transition-transform duration-300 group-hover:-translate-y-2.5">
                  <Image
                    src={coverjobsImg}
                    alt=""
                    fill
                    sizes="36px"
                    className="object-cover rounded-[2px]"
                  />
                </div>
                <div className="absolute right-0.5 bottom-1.5 w-8 h-6.5 rounded-sm overflow-hidden bg-white p-0.5 shadow-xs rotate-12 transition-transform duration-300 group-hover:-translate-y-2 group-hover:rotate-16">
                  <Image
                    src={animeImg}
                    alt=""
                    fill
                    sizes="36px"
                    className="object-cover rounded-[2px]"
                  />
                </div>
              </div>
            </FolderCard>

            {/* 2. Experience Folder */}
            <FolderCard href="/experience" label="Experience">
              <div className="relative w-18 h-12">
                <div className="absolute left-1 bottom-1.5 w-6.5 h-6.5 rounded-full bg-white shadow-xs flex items-center justify-center -rotate-12 transition-transform duration-300 group-hover:-translate-y-2 group-hover:-rotate-16 border border-black/5">
                  <span className="w-5 h-5 rounded-full bg-[#0357EE] text-white text-[8px] font-bold flex items-center justify-center">
                    M
                  </span>
                </div>
                <div className="absolute left-5.5 bottom-2 w-7 h-7 rounded-full bg-white shadow-sm z-10 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-2.5 border border-black/5">
                  <span className="w-5.5 h-5.5 rounded-full bg-gradient-to-br from-[#AE1B73] to-[#E1261C] text-white text-[8px] font-bold flex items-center justify-center">
                    AL
                  </span>
                </div>
                <div className="absolute right-1 bottom-1.5 w-6.5 h-6.5 rounded-full bg-white shadow-xs flex items-center justify-center rotate-12 transition-transform duration-300 group-hover:-translate-y-2 group-hover:rotate-16 border border-black/5">
                  <span className="w-5 h-5 rounded-full bg-[#10B981] text-white text-[8px] font-bold flex items-center justify-center">
                    A
                  </span>
                </div>
              </div>
            </FolderCard>

            {/* 3. About Me Folder */}
            <FolderCard href="/about" label="About Me">
              <div className="relative w-18 h-12">
                <div className="absolute left-1 bottom-1.5 w-7 h-8.5 rounded-sm overflow-hidden bg-white shadow-xs p-0.5 -rotate-10 transition-transform duration-300 group-hover:-translate-y-2 group-hover:-rotate-14 border border-black/5">
                  <Image
                    src="/covers/the-golden-compass.jpg"
                    alt=""
                    fill
                    sizes="32px"
                    className="object-cover rounded-[2px]"
                  />
                </div>
                <div className="absolute left-5.5 bottom-2 w-7 h-9 rounded-sm overflow-hidden bg-white shadow-sm z-10 p-0.5 transition-transform duration-300 group-hover:-translate-y-2.5 border border-black/5">
                  <Image
                    src="/covers/vinland-saga.jpg"
                    alt=""
                    fill
                    sizes="32px"
                    className="object-cover rounded-[2px]"
                  />
                </div>
                <div className="absolute right-1 bottom-1.5 w-7 h-8.5 rounded-sm overflow-hidden bg-white shadow-xs p-0.5 rotate-10 transition-transform duration-300 group-hover:-translate-y-2 group-hover:rotate-14 border border-black/5">
                  <Image
                    src="/covers/severance.jpg"
                    alt=""
                    fill
                    sizes="32px"
                    className="object-cover rounded-[2px]"
                  />
                </div>
              </div>
            </FolderCard>
          </motion.section>

          {/* Bottom Monochrome Portrait with Soft Fade */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="mt-10 sm:mt-12 flex justify-center w-full"
          >
            <div className="relative w-72 sm:w-[380px] aspect-[1024/800] overflow-hidden portrait-fade select-none pointer-events-none">
              <Image
                src={portraitImg}
                alt="Kolawole Ayoola"
                fill
                sizes="(max-width: 640px) 288px, 380px"
                className="object-cover object-bottom"
                priority
              />
            </div>
          </motion.div>
        </div>
      </Wrapper>
    </>
  );
};

export default Home;
