"use client";

import React, { useEffect, useRef } from "react";
import Wrapper from "@/components/Wrapper";
import { experiences } from "./constants";
import { motion } from "framer-motion";

const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      typeof window === "undefined" ||
      typeof CSS === "undefined" ||
      CSS.supports("animation-timeline", "scroll()")
    ) {
      return;
    }

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const updateFallbackProgress = () => {
      const el = progressRef.current;
      if (!el) return;
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const progressPercentage =
        scrollable > 0 ? Math.min(1, Math.max(0, scrolled / scrollable)) : 1;
      el.style.transform = `scaleY(${progressPercentage})`;
    };

    updateFallbackProgress();
    window.addEventListener("scroll", updateFallbackProgress, {
      passive: true,
    });
    window.addEventListener("resize", updateFallbackProgress);
    return () => {
      window.removeEventListener("scroll", updateFallbackProgress);
      window.removeEventListener("resize", updateFallbackProgress);
    };
  }, []);

  return (
    <Wrapper>
      <div className="w-full max-w-2xl mx-auto px-5 sm:px-8 pt-8 pb-32">
        <div ref={containerRef} className="relative">
          {/* Static background dashed spine connecting all jobs */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[76px] sm:left-[108px] top-[56px] bottom-12 border-l border-dashed"
            style={{ borderColor: "var(--app-border)" }}
          />

          {/* Scroll-driven animated progress line along the spine */}
          <div
            ref={progressRef}
            aria-hidden="true"
            className="timeline-scroll-progress pointer-events-none absolute left-[76px] sm:left-[108px] top-[56px] bottom-12 w-[2px] -translate-x-[0.5px] rounded-full origin-top"
            style={{
              background:
                "linear-gradient(to bottom, var(--app-text) 0%, #0357EE 60%, #10B981 100%)",
            }}
          />

          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.year}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="grid grid-cols-[76px_1fr] sm:grid-cols-[108px_1fr]"
            >
              {/* Left Column: Year & Date Range */}
              <div className="pr-4 sm:pr-6 pt-13 text-right select-none">
                <div
                  className="text-sm sm:text-[15px] font-medium leading-none"
                  style={{ color: "var(--app-text-secondary)" }}
                >
                  {exp.year}
                </div>
                <div
                  className="mt-1.5 text-[10px] sm:text-[11px] leading-tight"
                  style={{ color: "var(--app-text-muted)" }}
                >
                  {exp.period}
                </div>
              </div>

              {/* Right Column: Node Dot + Badge + Role + Highlights */}
              <div className="relative pl-5 sm:pl-7 pb-14">
                {/* Timeline Node Dot aligned with Role Title */}
                <motion.span
                  initial={{ scale: 0.6, opacity: 0.4 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: false, margin: "-20% 0px -20% 0px" }}
                  transition={{ duration: 0.3 }}
                  className="absolute -left-[4.5px] top-[56px] z-10 w-2.5 h-2.5 rounded-full ring-4"
                  style={{
                    backgroundColor: "var(--app-text)",
                    boxShadow: "0 0 0 4px var(--app-bg)",
                  }}
                />

                {/* Circular Company Logo Badge */}
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shadow-sm mb-3"
                  style={{
                    backgroundColor: "var(--app-card)",
                    border: "1px solid var(--app-border)",
                  }}
                >
                  <span
                    className="w-7 h-7 rounded-full text-white text-[10px] font-bold flex items-center justify-center tracking-tight"
                    style={{ background: exp.badgeBg }}
                  >
                    {exp.badgeText}
                  </span>
                </div>

                {/* Role Title & Company */}
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                  <h2 className="text-[16px] sm:text-[17px] font-semibold tracking-tight">
                    {exp.role}
                  </h2>
                  <span
                    className="text-xs sm:text-[13px] font-normal"
                    style={{ color: "var(--app-text-muted)" }}
                  >
                    {exp.company}
                  </span>
                </div>

                {/* Bullet Points */}
                <ul
                  className="mt-3.5 space-y-2.5 text-[13.5px] sm:text-[14px] leading-[1.7]"
                  style={{ color: "var(--app-text-secondary)" }}
                >
                  {exp.highlights.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span
                        className="mt-2.5 w-1 h-1 rounded-full shrink-0"
                        style={{ backgroundColor: "var(--app-text-muted)" }}
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default Experience;
