"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Users2, Baby, PartyPopper } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { fadeUp, staggerContainer, revealOnView } from "@/lib/motion";

const highlights = [
  { label: "Recreadores treinados", icon: Users2 },
  { label: "Atividades para todas as idades", icon: Baby },
  { label: "Segurança", icon: ShieldCheck },
  { label: "Diversão garantida", icon: PartyPopper },
];

export function About() {
  return (
    <section id="sobre" className="bg-cream py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Sobre a Pirabrinca"
          title="Muito mais que recreação"
          description="A Pirabrinca transforma festas em experiências inesquecíveis através de recreadores preparados, atividades lúdicas e muita interação — sempre com a segurança que os pais esperam."
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={revealOnView}
          className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {highlights.map(({ label, icon: Icon }) => (
            <motion.div
              key={label}
              variants={fadeUp}
              className="flex flex-col items-center gap-3 rounded-3xl bg-white p-6 text-center shadow-card"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-50 text-pink-500">
                <Icon size={24} />
              </span>
              <p className="text-sm font-semibold text-ink-800">{label}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
