"use client";

import React, { useState } from "react";
import Wrapper from "@/components/Wrapper";
import { mediaCollections } from "./constants";
import { motion } from "framer-motion";
import Image from "next/image";

const cardTransforms = [
  "-rotate-8 translate-y-3 -mr-3 sm:-mr-5 group-hover:-rotate-12 group-hover:-translate-x-2 group-hover:translate-y-1",
  "rotate-0 z-10 -translate-y-1 group-hover:-translate-y-3 scale-[1.03]",
  "rotate-8 translate-y-3 -ml-3 sm:-ml-5 group-hover:rotate-12 group-hover:translate-x-2 group-hover:translate-y-1",
];

const About = () => {
  const [startIndexByCollection, setStartIndexByCollection] = useState<
    Record<string, number>
  >({});

  const getFeaturedTrio = (
    collectionId: string,
    items: (typeof mediaCollections)[number]["items"]
  ) => {
    const start = startIndexByCollection[collectionId] ?? 0;
    const len = items.length;
    return [
      items[start % len],
      items[(start + 1) % len],
      items[(start + 2) % len],
    ];
  };

  return (
    <Wrapper>
      <div className="w-full max-w-[560px] mx-auto px-6 pt-8 pb-24">
        {/* Top Narrative Copy matching Screenshot 4 */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="space-y-5 text-[14px] sm:text-[15px] leading-[1.75]"
          style={{ color: "var(--app-text-secondary)" }}
        >
          <p>
            I’m a software engineer focused on crafting fast, intuitive frontend
            experiences. Curiosity brought me into web development, and learning
            by building real-world products across fintech, SaaS, and Web3 has
            kept me here. I enjoy understanding how people think and turning
            that understanding into useful, thoughtful digital experiences.
          </p>
          <p>
            Outside of work, I love reading, watching anime, and exploring great
            films and series. Stories are a way for me to slow down, question
            what I know, and see life through someone else’s eyes. This is a
            little collection of the books, anime, and movies I love.
          </p>
        </motion.div>

        {/* Fanned 3-Cover Media Collection Shelves matching Screenshot 4 */}
        <div className="mt-10 space-y-8">
          {mediaCollections.map((collection, idx) => {
            const trio = getFeaturedTrio(collection.id, collection.items);
            const activeStart = startIndexByCollection[collection.id] ?? 0;

            return (
              <motion.section
                key={collection.id}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.1 + idx * 0.08 }}
                className="group rounded-[26px] pt-7 px-5 sm:px-7 pb-6 text-center overflow-hidden transition-colors"
                style={{
                  backgroundColor: "var(--app-surface)",
                  border: "1px solid var(--app-border)",
                }}
              >
                <h2 className="text-[16px] sm:text-[17px] font-semibold tracking-tight">
                  {collection.title}
                </h2>
                <p
                  className="mt-1 text-xs sm:text-[13px]"
                  style={{ color: "var(--app-text-muted)" }}
                >
                  {collection.subtitle}
                </p>

                {/* 3 Fanned Covers */}
                <div className="mt-7 pt-2 pb-4 flex items-center justify-center">
                  {trio.map((item, slotIdx) => (
                    <div
                      key={`${collection.id}-${item.id}-${slotIdx}`}
                      className={`relative w-28 h-42 sm:w-36 sm:h-52 rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-out select-none ${cardTransforms[slotIdx]}`}
                      style={{
                        background: item.palette,
                        border: "1px solid rgba(255, 255, 255, 0.16)",
                      }}
                    >
                      {item.image ? (
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="144px"
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full p-3 sm:p-3.5 flex flex-col justify-between text-left text-white relative">
                          {/* Subtle book spine & foil sheen */}
                          <div className="pointer-events-none absolute inset-y-0 left-0 w-2 bg-gradient-to-r from-black/35 to-transparent" />
                          <div className="pointer-events-none absolute -top-10 -right-10 w-24 h-24 rounded-full bg-white/10 blur-xl" />

                          {/* Top Metadata */}
                          <div className="flex items-center justify-between gap-1 text-[8.5px] sm:text-[9px] uppercase tracking-wider font-medium opacity-80">
                            <span className="truncate">{item.tag}</span>
                            <span>{item.year}</span>
                          </div>

                          {/* Center Editorial Emblem */}
                          <div className="my-auto flex flex-col items-start gap-1.5">
                            <span
                              className="w-5 h-0.5 rounded-full"
                              style={{ backgroundColor: item.accent }}
                            />
                            <h3 className="text-xs sm:text-[14px] font-bold leading-snug tracking-tight line-clamp-3">
                              {item.title}
                            </h3>
                          </div>

                          {/* Bottom Author / Creator */}
                          <div className="pt-1.5 border-t border-white/15 text-[9.5px] sm:text-[10px] text-white/80 truncate font-medium">
                            {item.creator}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Interactive Shelf Pills to browse all titles in the collection */}
                <div className="mt-3 flex flex-wrap items-center justify-center gap-1.5">
                  {collection.items.map((item, itemIdx) => {
                    const isCenterFeatured =
                      (activeStart + 1) % collection.items.length === itemIdx;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() =>
                          setStartIndexByCollection((prev) => ({
                            ...prev,
                            [collection.id]:
                              (itemIdx - 1 + collection.items.length) %
                              collection.items.length,
                          }))
                        }
                        className={`px-2.5 py-1 rounded-full text-[11px] font-medium transition-all cursor-pointer ${
                          isCenterFeatured
                            ? "shadow-xs scale-[1.02]"
                            : "opacity-70 hover:opacity-100"
                        }`}
                        style={{
                          backgroundColor: isCenterFeatured
                            ? "var(--app-text)"
                            : "var(--app-card)",
                          color: isCenterFeatured
                            ? "var(--app-bg)"
                            : "var(--app-text-secondary)",
                          border: "1px solid var(--app-border)",
                        }}
                      >
                        {item.title}
                      </button>
                    );
                  })}
                </div>
              </motion.section>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default About;
