"use client";

import React from "react";
import Link from "next/link";
import { DesktopHeaderProps } from "./types";
import { useTheme } from "@/components/ThemeProvider";

export default function DesktopHeader({ navLinks }: DesktopHeaderProps) {
  const { navTheme } = useTheme();
  const isDarkNav = navTheme === "dark";

  return (
    <header
      className={`fixed w-full flex items-center justify-between px-6 py-4 gap-6 z-40 transition-colors ${
        isDarkNav
          ? "bg-black/90 backdrop-blur-sm"
          : "bg-white/90 backdrop-blur-sm shadow-md"
      }`}
    >
      <div className="logo">
        <Link
          href="/"
          className={`text-xl font-bold ${
            isDarkNav ? "text-yellow-400" : "text-stone-800"
          }`}
        >
          Chef Morgan
        </Link>
      </div>

      <div className="flex items-center">
        <nav className="flex space-x-8 mr-6">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className={`transition-colors ${
                isDarkNav
                  ? "text-white hover:text-yellow-300"
                  : "text-stone-700 hover:text-yellow-600"
              }`}
            >
              {link.title}
            </Link>
          ))}
        </nav>

        <div>
          <Link
            href="/book-demo"
            className={`block w-full py-2 px-4 text-center font-semibold transition-colors ${
              isDarkNav
                ? "bg-stone-950 text-yellow-300 hover:bg-stone-700"
                : "bg-yellow-400 text-stone-900 hover:bg-yellow-500"
            }`}
          >
            Logg inn
          </Link>
        </div>
      </div>
    </header>
  );
}
