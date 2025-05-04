"use client";

import React, { useState, useEffect } from "react";
import DesktopHeader from "./desktopHeader";
import MobileHeader from "./mobileHeader";
import { navLinks } from "./nav-links";

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return isMobile ? (
    <MobileHeader navLinks={navLinks} />
  ) : (
    <DesktopHeader navLinks={navLinks} />
  );
}
