"use client";

import React from "react";
import Link from "next/link";

interface FolderCardProps {
  href: string;
  label: string;
  children: React.ReactNode;
}

export default function FolderCard({ href, label, children }: FolderCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col items-center gap-2 focus:outline-none"
    >
      <div className="relative w-21 h-16 sm:w-23 sm:h-17.5 flex items-end justify-center pt-2">
        {/* Folder backplate + top tab */}
        <div className="absolute inset-x-1 bottom-0 h-13 sm:h-14 rounded-xl bg-gradient-to-b from-[#cfd2d8] to-[#b4b8c0] shadow-inner border border-black/5">
          <div className="absolute -top-1.5 left-2 w-7 h-2.5 rounded-t-md bg-[#cfd2d8] border-t border-x border-black/5" />
        </div>

        {/* Inner preview items (fan out & lift on hover) */}
        <div className="relative z-10 w-full h-full flex items-center justify-center pointer-events-none">
          {children}
        </div>

        {/* Folder front metallic pocket */}
        <div
          className="absolute inset-x-0 bottom-0 z-20 h-10.5 sm:h-11.5 rounded-xl transition-transform duration-300 ease-out group-hover:translate-y-0.5 group-hover:scale-[1.02]"
          style={{
            background:
              "linear-gradient(180deg, rgba(233,235,240,0.96) 0%, rgba(209,213,221,0.97) 55%, rgba(190,195,204,0.98) 100%)",
            boxShadow:
              "0 6px 14px -5px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.85)",
            border: "1px solid rgba(0, 0, 0, 0.06)",
          }}
        />
      </div>

      <span
        className="text-[11px] font-medium tracking-tight transition-colors group-hover:opacity-100 opacity-85"
        style={{ color: "var(--app-text-secondary)" }}
      >
        {label}
      </span>
    </Link>
  );
}
