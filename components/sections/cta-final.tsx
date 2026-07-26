"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { BlobShape } from "@/components/shared/blob-shape";
import { fadeUp, revealOnView } from "@/lib/motion";

export function CtaFinal() {
  return (
    <section className="relative overflow-hidden bg-pink-500 py-24 text-white sm:py-28">
      <BlobShape color="sun" size={320} className="-left-20 -top-20 opacity-30 blur-2xl" />
      <BlobShape color="sun" size={280} delay={0.2} className="-bottom-24 -right-16 opacity-25 blur-2xl" />

      <Container className="relative text-center">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={revealOnView}
          className="mx-auto max-w-2xl text-balance font-display text-3xl font-bold leading-tight sm:text-4xl md:text-[2.75rem]"
        >
          Pronto para transformar sua festa em um momento inesquecível?
        </motion.h2>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={revealOnView}
          transition={{ delay: 0.1 }}
          className="mt-9 flex justify-center"
        >
          <WhatsAppButton
            size="lg"
            variant="secondary"
            label="Solicitar orçamento no WhatsApp"
          />
        </motion.div>
      </Container>
    </section>
  );
}
