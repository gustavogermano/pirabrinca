"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { gincanas } from "@/features/gincanas";
import { fadeUp, staggerContainer, revealOnView } from "@/lib/motion";

export function GincanasSection() {
  return (
    <section className="bg-pink-50/50 py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Gincanas"
          title="Times, desafios e muita energia boa"
          description="Dinâmicas em grupo que unem competição saudável e cooperação, ideais para animar qualquer evento."
        />

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={revealOnView}
          className="mt-14 grid grid-cols-2 gap-5 lg:grid-cols-4"
        >
          {gincanas.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeUp}
              whileHover={{ scale: 1.03 }}
              className="flex flex-col items-center gap-4 rounded-4xl bg-white p-8 text-center shadow-card transition-shadow hover:shadow-card-hover"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-3xl bg-pink-500 text-white">
                <item.icon size={26} />
              </span>
              <p className="font-display text-base font-bold text-ink-900">
                {item.name}
              </p>
              <p className="text-sm leading-relaxed text-ink-600">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
