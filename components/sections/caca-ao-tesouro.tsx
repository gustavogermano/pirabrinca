"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Brain, Compass, HeartHandshake, Users } from "lucide-react";
import { Container } from "@/components/ui/container";
import { fadeLeft, fadeRight, fadeUp, revealOnView, staggerContainer } from "@/lib/motion";

const skills = [
  { label: "Criatividade", icon: Compass },
  { label: "Cooperação", icon: HeartHandshake },
  { label: "Raciocínio", icon: Brain },
  { label: "Trabalho em equipe", icon: Users },
];

export function CacaAoTesouro() {
  return (
    <section className="relative overflow-hidden bg-ink-900 py-24 text-white sm:py-28">
      <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-pink-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-sun-400/15 blur-3xl" />

      <Container className="relative grid gap-14 lg:grid-cols-2 lg:items-center">
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={revealOnView}
        >
          <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-display font-semibold uppercase tracking-wider text-sun-300">
            Atividade especial
          </span>
          <h2 className="text-balance font-display text-3xl font-bold leading-tight sm:text-4xl text-sun-300">
            Caça ao Tesouro
          </h2>
          <p className="mt-5 text-balance text-lg leading-relaxed text-white/80">
            Uma aventura cheia de mistério, desafios e diversão! As crianças
            embarcam em uma missão especial seguindo pistas, solucionando
            enigmas e cumprindo desafios até encontrar o tão esperado tesouro.
          </p>

          <motion.div
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={revealOnView}
            className="mt-8 grid grid-cols-2 gap-3 sm:w-fit sm:grid-cols-4"
          >
            {skills.map(({ label, icon: Icon }) => (
              <motion.div
                key={label}
                variants={fadeUp}
                className="flex flex-col items-center gap-2 rounded-2xl bg-white/5 px-4 py-4 text-center"
              >
                <Icon size={20} className="text-sun-300" />
                <span className="text-xs font-medium text-white/80">{label}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={revealOnView}
            className="mt-8 rounded-2xl border border-sun-400/30 bg-sun-400/10 px-5 py-4 text-sm font-medium text-sun-200"
          >
            🏆 O tesouro é um baú com moedas de chocolate para dividir
            igualmente entre todos os pequenos aventureiros.
          </motion.p>
        </motion.div>

        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={revealOnView}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-4xl shadow-soft">
            <Image
              src="/images/caca-ao-tesouro.jpg"
              alt="Ilustração da Caça ao Tesouro Pirabrinca com baú de tesouro"
              fill
              sizes="(max-width: 1024px) 90vw, 420px"
              className="object-contain"
              loading="lazy"
            />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
