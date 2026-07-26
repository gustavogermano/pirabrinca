"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BlobShapeProps {
  color?: "pink" | "sun";
  className?: string;
  size?: number;
  delay?: number;
}

/**
 * The Pirabrinca signature: soft hand-drawn-feeling blobs echoing the
 * organic shapes from the brand identity (see planos/brincadeiras art).
 * Purely decorative — aria-hidden — and respects reduced-motion via the
 * `animate-blob` utility, which Tailwind disables globally when requested.
 */
export function BlobShape({
  color = "pink",
  className,
  size = 420,
  delay = 0,
}: BlobShapeProps) {
  return (
    <motion.div
      aria-hidden
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "pointer-events-none absolute animate-blob",
        color === "pink" ? "bg-pink-500/90" : "bg-sun-400/90",
        className
      )}
      style={{ width: size, height: size }}
    />
  );
}
