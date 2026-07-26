"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { StarRating } from "@/components/shared/star-rating";
import { depoimentos } from "@/features/depoimentos";
import { fadeUp, staggerContainer, revealOnView } from "@/lib/motion";

export function DepoimentosSection() {
  return (
    <section className="bg-cream py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Depoimentos"
          title="Quem já viveu a experiência Pirabrinca"
        />

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={revealOnView}
          className="mt-14 grid gap-5 sm:grid-cols-2"
        >
          {depoimentos.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeUp}
              className="relative rounded-3xl bg-white p-7 shadow-card"
            >
              <Quote className="absolute right-6 top-6 text-pink-100" size={36} />
              <StarRating rating={item.rating} />
              <p className="mt-4 text-sm leading-relaxed text-ink-700">
                “{item.quote}”
              </p>
              <div className="mt-6 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-pink-500 font-display text-sm font-bold text-white">
                  {item.initials}
                </span>
                <div>
                  <p className="text-sm font-bold text-ink-900">{item.name}</p>
                  <p className="text-xs text-ink-500">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
