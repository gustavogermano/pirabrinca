"use client";

import { motion } from "framer-motion";
import { Camera } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { fadeUp, staggerContainer, revealOnView } from "@/lib/motion";
import { cn } from "@/lib/utils";

const placeholders = [
  { height: "h-64", gradient: "from-pink-200 via-pink-100 to-sun-100" },
  { height: "h-80", gradient: "from-sun-200 via-sun-100 to-pink-50" },
  { height: "h-56", gradient: "from-pink-300 via-pink-100 to-white" },
  { height: "h-72", gradient: "from-sun-100 via-pink-50 to-pink-100" },
  { height: "h-60", gradient: "from-pink-100 via-sun-100 to-sun-50" },
  { height: "h-80", gradient: "from-pink-200 via-white to-sun-100" },
];

export function GaleriaSection() {
  return (
    <section id="galeria" className="bg-pink-50/50 py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Galeria"
          title="Momentos que viram lembrança"
          description="Em breve, fotos reais das nossas festas por aqui. Por enquanto, prepare-se para o tanto de diversão que vem por vir."
        />

        <motion.div
          variants={staggerContainer(0.07)}
          initial="hidden"
          whileInView="visible"
          viewport={revealOnView}
          className="mt-14 columns-2 gap-4 sm:columns-3 [&>div]:mb-4"
        >
          {placeholders.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className={cn(
                "relative overflow-hidden rounded-3xl bg-gradient-to-br shadow-card",
                item.height,
                item.gradient
              )}
            >
              <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/40 to-transparent bg-[length:200%_100%]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Camera className="text-white/70" size={28} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
