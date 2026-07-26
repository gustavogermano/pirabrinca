"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { brincadeiras } from "@/features/brincadeiras";
import { fadeUp, staggerContainer, revealOnView, fadeLeft } from "@/lib/motion";

export function BrincadeirasSection() {
  return (
    <section id="brincadeiras" className="bg-pink-50/50 py-24 sm:py-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1fr_1.3fr] lg:items-center">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={revealOnView}
            className="relative mx-auto w-full max-w-sm lg:sticky lg:top-28"
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-4xl bg-white shadow-soft">
              <Image
                src="/images/brincadeiras.jpg"
                alt="Lista ilustrada das brincadeiras Pirabrinca"
                fill
                sizes="(max-width: 1024px) 90vw, 420px"
                className="object-contain"
                loading="lazy"
              />
            </div>
          </motion.div>

          <div>
            <SectionHeading
              align="left"
              eyebrow="Repertório de brincadeiras"
              title="Clássicos que garantem risada na certa"
              description="Selecionamos as brincadeiras favoritas da criançada — sempre adaptadas para a idade e o clima de cada festa."
            />

            <motion.div
              variants={staggerContainer(0.06)}
              initial="hidden"
              whileInView="visible"
              viewport={revealOnView}
              className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3"
            >
              {brincadeiras.map((item) => (
                <motion.div
                  key={item.id}
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  className="group flex flex-col gap-3 rounded-3xl bg-white p-5 shadow-card transition-shadow hover:shadow-card-hover"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-pink-100 text-pink-600 transition-colors group-hover:bg-pink-500 group-hover:text-white">
                    <item.icon size={20} />
                  </span>
                  <div>
                    <p className="font-display text-sm font-bold text-ink-900">
                      {item.name}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-ink-600">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
