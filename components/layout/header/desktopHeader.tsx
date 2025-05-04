"use client";

import React from "react";
import Link from "next/link";
import { DesktopHeaderProps } from "./types";

export default function DesktopHeader({ navLinks }: DesktopHeaderProps) {
  return (
    <header className="flex items-center justify-between bg-teal-950 text-white px-6 py-4">
      <div className="logo">
        <Link href="/" className="text-xl font-bold">
          Chef Morgan
        </Link>
      </div>

      <div className="flex items-center">
        <nav className="flex space-x-8 mr-6">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="hover:text-yellow-300 transition-colors"
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
