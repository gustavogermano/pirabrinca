"use client";

import { useEffect, useState } from "react";

/**
 * Tracks whether the page has been scrolled past a threshold.
 * Used to switch the header between transparent and solid states.
 */
export function useScrollProgress(threshold = 24) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > threshold);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return scrolled;
}
