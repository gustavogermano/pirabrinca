"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check, Clock, Users, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { planos } from "@/features/planos";
import { fadeUp, staggerContainer, revealOnView } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function PlanosSection() {
  return (
    <section id="planos" className="bg-cream py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Planos"
          title="Escolha o plano ideal para o seu evento"
          description="Todos os planos incluem recreadores, brincadeiras dirigidas, gincana e caça ao tesouro."
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={revealOnView}
          className="relative mx-auto mt-14 hidden max-w-4xl overflow-hidden rounded-4xl shadow-card md:block"
        >
          <div className="relative aspect-[16/7] w-full">
            <Image
              src="/images/planos.jpg"
              alt="Resumo visual dos planos Pirabrinca: Rio Piracicaba, Rua do Porto e Mirante"
              fill
              sizes="(max-width: 1024px) 90vw, 900px"
              className="object-cover object-top"
              loading="lazy"
            />
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={revealOnView}
          className="mx-auto mt-8 grid max-w-5xl gap-6 md:grid-cols-3"
        >
          {planos.map((plano) => (
            <motion.div
              key={plano.id}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className={cn(
                "relative flex flex-col rounded-4xl p-8 shadow-card transition-shadow hover:shadow-card-hover",
                plano.highlighted
                  ? "bg-pink-500 text-white"
                  : "bg-white text-ink-900"
              )}
            >
              {plano.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-sun-400 px-4 py-1 text-xs font-display font-bold uppercase tracking-wide text-ink-900">
                  Mais escolhido
                </span>
              )}

              <h3 className="font-display text-xl font-bold">{plano.name}</h3>

              <div className="mt-5 space-y-2.5 text-sm">
                <div
                  className={cn(
                    "flex items-center gap-2",
                    plano.highlighted ? "text-white/90" : "text-ink-600"
                  )}
                >
                  <Clock size={16} />
                  {plano.duration}
                </div>
                <div
                  className={cn(
                    "flex items-center gap-2",
                    plano.highlighted ? "text-white/90" : "text-ink-600"
                  )}
                >
                  <Sparkles size={16} />
                  {plano.staff}
                </div>
                <div
                  className={cn(
                    "flex items-center gap-2",
                    plano.highlighted ? "text-white/90" : "text-ink-600"
                  )}
                >
                  <Users size={16} />
                  {plano.capacity}
                </div>
              </div>

              <div
                className={cn(
                  "my-6 h-px w-full",
                  plano.highlighted ? "bg-white/20" : "bg-ink-900/10"
                )}
              />

              <ul className="flex-1 space-y-3">
                {plano.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm">
                    <Check
                      size={18}
                      className={cn(
                        "mt-0.5 shrink-0",
                        plano.highlighted ? "text-sun-300" : "text-pink-500"
                      )}
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <WhatsAppButton
                message={`Olá! Tenho interesse no ${plano.name} da Pirabrinca e gostaria de solicitar um orçamento. 🎉`}
                label="Solicitar orçamento"
                className="mt-8 w-full"
                variant={plano.highlighted ? "secondary" : "primary"}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={revealOnView}
          className="mx-auto mt-10 max-w-lg text-center text-sm font-medium text-ink-600"
        >
          ⏰ Eventos acima de 4 horas possuem orçamento personalizado. Fale
          com a gente para montar a proposta ideal.
        </motion.p>
      </Container>
    </section>
  );
}
