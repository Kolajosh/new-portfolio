"use client";

import React, { useState } from "react";
import Wrapper from "@/components/Wrapper";
import { works } from "./constants";
import { motion } from "framer-motion";
import Image from "next/image";

const Projects = () => {
  const [activeTabByIndex, setActiveTabByIndex] = useState<
    Record<number, "preview" | "details">
  >({});

  const getTab = (index: number) => activeTabByIndex[index] ?? "preview";

  return (
    <Wrapper>
      <div className="w-full max-w-4xl mx-auto px-5 sm:px-8 pt-6 pb-24 space-y-16">
        {works?.map((item, index) => {
          const activeTab = getTab(index);
          return (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="relative rounded-[32px] p-3.5 sm:p-6 transition-shadow"
              style={{
                backgroundColor: "var(--app-surface)",
                border: "1px solid var(--app-border)",
              }}
            >
              {/* Inner showcase canvas */}
              <div
                className="relative rounded-[22px] overflow-hidden"
                style={{
                  backgroundColor: "var(--app-card)",
                  border: "1px solid var(--app-border)",
                }}
              >
                {/* Browser-style header bar inside the showcase */}
                <div
                  className="px-4 sm:px-6 py-3.5 flex items-center justify-between text-xs border-b"
                  style={{ borderColor: "var(--app-border)" }}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="font-semibold text-[13px] sm:text-sm tracking-tight">
                      {item.name}
                    </span>
                    <span
                      className="hidden sm:inline-block text-xs truncate max-w-md"
                      style={{ color: "var(--app-text-muted)" }}
                    >
                      — {item.desc}
                    </span>
                  </div>

                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1 rounded-full text-[11px] font-medium bg-[#007AFF] text-white hover:opacity-90 transition-opacity shrink-0"
                  >
                    Visit site ↗
                  </a>
                </div>

                {/* Main preview / details area */}
                <div className="relative h-[340px] sm:h-[460px] w-full overflow-hidden">
                  {activeTab === "preview" ? (
                    item.img ? (
                      <Image
                        src={item.img}
                        alt={item.name}
                        fill
                        sizes="(max-width: 896px) 100vw, 896px"
                        className="object-cover object-top transition-transform duration-500 hover:scale-[1.01]"
                      />
                    ) : (
                      <div
                        className="h-full w-full flex items-center justify-center"
                        style={{ background: item.placeholder }}
                      >
                        <span className="text-white text-3xl sm:text-5xl font-bold tracking-tight">
                          {item.name}
                        </span>
                      </div>
                    )
                  ) : (
                    <div className="h-full w-full flex flex-col items-center justify-center p-8 text-center max-w-lg mx-auto">
                      <span
                        className="text-xs uppercase tracking-widest mb-2"
                        style={{ color: "var(--app-text-muted)" }}
                      >
                        Project Overview
                      </span>
                      <h2 className="text-xl sm:text-2xl font-semibold mb-3">
                        {item.name}
                      </h2>
                      <p
                        className="text-sm sm:text-[15px] leading-relaxed mb-6"
                        style={{ color: "var(--app-text-secondary)" }}
                      >
                        {item.desc}
                      </p>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2 rounded-full text-xs font-medium underline underline-offset-4"
                      >
                        Open {item.url} ↗
                      </a>
                    </div>
                  )}

                  {/* Bottom soft gradient fade matching Screenshot 2 */}
                  <div
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-24"
                    style={{
                      background:
                        "linear-gradient(to top, var(--app-surface) 5%, transparent 100%)",
                    }}
                  />
                </div>
              </div>

              {/* Floating bottom segmented pill bar matching Screenshot 2 */}
              <div className="mt-3 flex justify-center">
                <div className="inline-flex items-center gap-1 p-1 rounded-full bg-[#1c1c1e] text-white shadow-lg border border-white/10 text-[11px] font-medium">
                  <button
                    type="button"
                    onClick={() =>
                      setActiveTabByIndex((prev) => ({
                        ...prev,
                        [index]: "preview",
                      }))
                    }
                    className={`px-3 py-1 rounded-full transition-colors cursor-pointer ${
                      activeTab === "preview"
                        ? "bg-white text-black font-semibold shadow-xs"
                        : "text-neutral-300 hover:text-white"
                    }`}
                  >
                    Overview
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setActiveTabByIndex((prev) => ({
                        ...prev,
                        [index]: "details",
                      }))
                    }
                    className={`px-3 py-1 rounded-full transition-colors cursor-pointer ${
                      activeTab === "details"
                        ? "bg-white text-black font-semibold shadow-xs"
                        : "text-neutral-300 hover:text-white"
                    }`}
                  >
                    Details
                  </button>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1 rounded-full text-neutral-300 hover:text-white transition-colors"
                  >
                    Live ↗
                  </a>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default Projects;
