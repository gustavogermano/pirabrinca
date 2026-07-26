"use client";

import { useEffect, useRef } from "react";
import { useMotionValue, useSpring } from "framer-motion";

/**
 * Drives Pirabrinca's signature blob motif: soft organic shapes that
 * lean gently toward the cursor (desktop) with spring-smoothed motion,
 * echoing the hand-drawn blobs from the brand identity.
 * Isolated here so presentational components stay declarative.
 */
export function useParallaxBlob(strength = 18) {
  const ref = useRef<HTMLDivElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 60, damping: 16, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 60, damping: 16, mass: 0.6 });

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const handleMove = (event: MouseEvent) => {
      const rect = node.getBoundingClientRect();
      const relX = (event.clientX - rect.left) / rect.width - 0.5;
      const relY = (event.clientY - rect.top) / rect.height - 0.5;
      x.set(relX * strength);
      y.set(relY * strength);
    };

    const handleLeave = () => {
      x.set(0);
      y.set(0);
    };

    window.addEventListener("mousemove", handleMove);
    node.addEventListener("mouseleave", handleLeave);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      node.removeEventListener("mouseleave", handleLeave);
    };
  }, [strength, x, y]);

  return { ref, springX, springY };
}
