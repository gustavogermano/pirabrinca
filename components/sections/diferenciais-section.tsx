"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { diferenciais } from "@/features/diferenciais";
import { fadeUp, staggerContainer, revealOnView } from "@/lib/motion";

export function DiferenciaisSection() {
  return (
    <section className="bg-cream py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Diferenciais"
          title="Por que famílias e empresas confiam na Pirabrinca"
        />

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={revealOnView}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {diferenciais.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeUp}
              className="rounded-3xl border border-ink-900/5 bg-white p-7 shadow-card"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-500 text-white">
                <item.icon size={22} />
              </span>
              <h3 className="mt-5 font-display text-base font-bold text-ink-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
