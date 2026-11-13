"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import avatarImg from "@/assets/imgs/me-icon.png";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [lagosTime, setLagosTime] = useState<string>("--:--:--");
  const [renderedScheme, setRenderedScheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Africa/Lagos",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });

    const updateClock = () => {
      setLagosTime(formatter.format(new Date()));
    };

    updateClock();
    const timer = setInterval(updateClock, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const mql = window.matchMedia("(prefers-color-scheme: dark)");

    const syncRenderedScheme = () => {
      let stored: string | null = null;
      try {
        stored = localStorage.getItem("color-scheme");
      } catch {}

      const meta = document.querySelector('meta[name="color-scheme"]');
      if (meta) {
        meta.setAttribute("content", stored ?? "light dark");
      }

      if (stored === "dark" || stored === "light") {
        setRenderedScheme(stored);
      } else {
        setRenderedScheme(mql.matches ? "dark" : "light");
      }
    };

    syncRenderedScheme();
    mql.addEventListener("change", syncRenderedScheme);
    window.addEventListener("storage", syncRenderedScheme);
    return () => {
      mql.removeEventListener("change", syncRenderedScheme);
      window.removeEventListener("storage", syncRenderedScheme);
    };
  }, []);

  const toggleColorScheme = (event: React.MouseEvent<HTMLButtonElement>) => {
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const systemScheme: "light" | "dark" = mql.matches ? "dark" : "light";

    let stored: string | null = null;
    try {
      stored = localStorage.getItem("color-scheme");
    } catch {}

    const currentRendered: "light" | "dark" =
      stored === "dark" || stored === "light" ? stored : systemScheme;
    const target: "light" | "dark" =
      currentRendered === "dark" ? "light" : "dark";

    const applyThemeUpdate = () => {
      try {
        if (target === systemScheme) {
          localStorage.removeItem("color-scheme");
        } else {
          localStorage.setItem("color-scheme", target);
        }
      } catch {}

      const nextMetaContent = target === systemScheme ? "light dark" : target;
      const meta = document.querySelector('meta[name="color-scheme"]');
      if (meta) {
        meta.setAttribute("content", nextMetaContent);
      }
      setRenderedScheme(target);
    };

    const rect = event.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const maxRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const root = document.documentElement;
    root.style.setProperty("--theme-toggle-x", `${x}px`);
    root.style.setProperty("--theme-toggle-y", `${y}px`);
    root.style.setProperty("--theme-toggle-r", `${maxRadius}px`);

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const docWithVT = document as Document & {
      startViewTransition?: (cb: () => void) => { finished: Promise<void> };
    };

    if (!docWithVT.startViewTransition || prefersReducedMotion) {
      applyThemeUpdate();
      return;
    }

    docWithVT.startViewTransition(() => {
      applyThemeUpdate();
    });
  };

  return (
    <header className="w-full max-w-6xl mx-auto px-6 sm:px-10 pt-7 pb-4 flex items-center justify-between text-sm">
      <div className="flex items-center gap-3">
        <Link
          href="/"
          aria-label="Home"
          className="relative w-9 h-9 rounded-full shrink-0 drop-shadow-sm transition-transform duration-200 hover:scale-105"
        >
          <Image
            src={avatarImg}
            alt="Kolawole Ayoola"
            fill
            sizes="36px"
            className="object-contain"
            priority
          />
        </Link>

        <span
          className="select-none"
          style={{ color: "var(--app-text-muted)" }}
        >
          /
        </span>

        {isHome ? (
          <div
            className="font-mono text-xs sm:text-[13px] tracking-tight tabular-nums flex items-center gap-1.5"
            style={{ color: "var(--app-text-secondary)" }}
          >
            <span>Lagos, Nigeria</span>
            <span>·</span>
            <span>{lagosTime}</span>
          </div>
        ) : (
          <Link
            href="/"
            className="text-[13px] font-medium underline underline-offset-4 decoration-current/40 hover:decoration-current transition-colors"
            style={{ color: "var(--app-text)" }}
          >
            Back
          </Link>
        )}
      </div>

      <div className="flex items-center gap-2.5">
        <button
          type="button"
          onClick={toggleColorScheme}
          aria-label={
            renderedScheme === "dark"
              ? "Switch to light theme"
              : "Switch to dark theme"
          }
          className="relative w-8 h-8 rounded-full flex items-center justify-center overflow-hidden transition-transform duration-200 hover:scale-105 active:scale-95 cursor-pointer shadow-xs"
          style={{
            backgroundColor: "var(--app-card)",
            border: "1px solid var(--app-border)",
            color: "var(--app-text)",
          }}
        >
          <AnimatePresence mode="wait" initial={false}>
            {renderedScheme === "dark" ? (
              <motion.svg
                key="sun"
                initial={{ rotate: -90, scale: 0.5, opacity: 0 }}
                animate={{ rotate: 0, scale: 1, opacity: 1 }}
                exit={{ rotate: 90, scale: 0.5, opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2" />
                <path d="M12 20v2" />
                <path d="m4.93 4.93 1.41 1.41" />
                <path d="m17.66 17.66 1.41 1.41" />
                <path d="M2 12h2" />
                <path d="M20 12h2" />
                <path d="m6.34 17.66-1.41 1.41" />
                <path d="m19.07 4.93-1.41 1.41" />
              </motion.svg>
            ) : (
              <motion.svg
                key="moon"
                initial={{ rotate: 90, scale: 0.5, opacity: 0 }}
                animate={{ rotate: 0, scale: 1, opacity: 1 }}
                exit={{ rotate: -90, scale: 0.5, opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </motion.svg>
            )}
          </AnimatePresence>
        </button>
      </div>
    </header>
  );
}
