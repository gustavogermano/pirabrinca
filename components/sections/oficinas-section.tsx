"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { oficinas, OFICINAS_PRICING_NOTE } from "@/features/oficinas";
import { fadeUp, staggerContainer, revealOnView } from "@/lib/motion";

export function OficinasSection() {
  return (
    <section className="bg-cream py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Oficinas recreativas"
          title="Experiências criativas para deixar a festa completa"
          description="Adicione uma ou mais oficinas ao seu evento e amplie o cardápio de diversão da criançada."
        />

        <motion.div
          variants={staggerContainer(0.07)}
          initial="hidden"
          whileInView="visible"
          viewport={revealOnView}
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {oficinas.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="flex items-start gap-4 rounded-3xl bg-white p-6 shadow-card transition-shadow hover:shadow-card-hover"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sun-100 text-sun-600">
                <item.icon size={22} />
              </span>
              <div>
                <p className="font-display text-base font-bold text-ink-900">
                  {item.name}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-600">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={revealOnView}
          className="mx-auto mt-10 max-w-md text-center text-sm font-medium text-ink-600"
        >
          💡 {OFICINAS_PRICING_NOTE}
        </motion.p>
      </Container>
    </section>
  );
}
