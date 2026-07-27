"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { fadeUp, staggerContainer, revealOnView } from "@/lib/motion";
import { assetPath } from "@/lib/utils";

const tias = [
  { src: assetPath("/images/tia na.jpeg"), alt: "Tia Na", name: "Tia Na" },
  { src: assetPath("/images/tia ana.jpeg"), alt: "Tia Ana", name: "Tia Ana" },
];

export function GaleriaSection() {
  return (
    <section id="galeria" className="bg-pink-50/50 py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Galeria"
          title="Conheçam as Tias do Pirabrinca"
        />

        <motion.div
          variants={staggerContainer(0.07)}
          initial="hidden"
          whileInView="visible"
          viewport={revealOnView}
          className="mt-10 grid gap-6 md:grid-cols-2"
        >
          {tias.map((tia) => (
            <motion.div
              key={tia.name}
              variants={fadeUp}
              className="overflow-hidden rounded-[2rem] bg-white p-3 shadow-card"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                <Image
                  src={tia.src}
                  alt={tia.alt}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-4 text-center text-lg font-semibold text-pink-700">
                {tia.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
