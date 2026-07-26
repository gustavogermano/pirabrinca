"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { LinkButton } from "@/components/ui/link-button";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { BlobShape } from "@/components/shared/blob-shape";
import { useParallaxBlob } from "@/hooks/use-parallax-blob";
import { fadeLeft, fadeRight, staggerContainer, fadeUp } from "@/lib/motion";

export function Hero() {
  const { ref, springX, springY } = useParallaxBlob(24);

  return (
    <section
      id="home"
      ref={ref}
      className="relative overflow-hidden bg-cream pb-20 pt-32 sm:pb-28 sm:pt-40"
    >
      <div className="pointer-events-none absolute inset-0 bg-blob-gradient" />
      <BlobShape
        color="sun"
        size={340}
        className="-left-24 top-16 opacity-70 blur-2xl"
      />
      <BlobShape
        color="pink"
        size={420}
        delay={0.15}
        className="-right-32 top-40 opacity-60 blur-2xl"
      />

      <Container className="relative grid items-center gap-16 lg:grid-cols-2">
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-display font-semibold uppercase tracking-wider text-pink-600 shadow-card"
          >
            <Sparkles size={14} />
            Recreação infantil em Piracicaba
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="text-balance font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-ink-900 sm:text-5xl lg:text-[3.4rem]"
          >
            A diversão vai{" "}
            <span className="relative inline-block text-pink-500">
              até você!
              <svg
                aria-hidden
                viewBox="0 0 200 12"
                className="absolute -bottom-2 left-0 w-full text-sun-400"
              >
                <path
                  d="M2 9C40 2 160 2 198 9"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-lg text-balance text-lg leading-relaxed text-ink-600"
          >
            Levamos recreação infantil para festas, aniversários, condomínios,
            empresas e eventos, com brincadeiras, gincanas, oficinas e muita
            diversão para crianças de todas as idades.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <WhatsAppButton
              size="lg"
              label="Solicitar orçamento"
              variant="primary"
            />
            <LinkButton href="#planos" variant="outline" size="lg">
              Conhecer os planos
              <ArrowRight size={18} />
            </LinkButton>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex items-center gap-6 text-sm text-ink-600"
          >
            <div>
              <p className="font-display text-2xl font-extrabold text-ink-900">
                +200
              </p>
              <p>Festas animadas</p>
            </div>
            <div className="h-10 w-px bg-ink-900/10" />
            <div>
              <p className="font-display text-2xl font-extrabold text-ink-900">
                11+
              </p>
              <p>Brincadeiras no repertório</p>
            </div>
            <div className="h-10 w-px bg-ink-900/10" />
            <div>
              <p className="font-display text-2xl font-extrabold text-ink-900">
                100%
              </p>
              <p>Recreadores treinados</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeRight}
          initial="hidden"
          animate="visible"
          className="relative mx-auto flex w-full max-w-md items-center justify-center"
        >
          <motion.div
            style={{ x: springX, y: springY }}
            className="relative aspect-square w-full max-w-sm rounded-[3rem] bg-pink-500 p-3 shadow-soft"
          >
            <div className="relative h-full w-full overflow-hidden rounded-[2.4rem] bg-pink-500">
              <Image
                src="/images/logo.jpg"
                alt="Mascotes Pirabrinca dando risada, segurando baldinhos de água"
                fill
                sizes="(max-width: 768px) 90vw, 420px"
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -14, 0], rotate: [0, 4, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-6 top-4 flex h-20 w-20 items-center justify-center rounded-3xl bg-sun-400 text-3xl shadow-card sm:h-24 sm:w-24"
          >
            🎈
          </motion.div>
          <motion.div
            animate={{ y: [0, 14, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -right-4 bottom-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-2xl shadow-card sm:h-20 sm:w-20"
          >
            🎉
          </motion.div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-0 left-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-100 text-xl shadow-card"
          >
            ⭐
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
