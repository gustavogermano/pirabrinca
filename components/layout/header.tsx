"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { useScrollProgress } from "@/hooks/use-scroll-progress";
import { NAV_LINKS } from "@/lib/constants";
import { assetPath, cn } from "@/lib/utils";

export function Header() {
  const scrolled = useScrollProgress();
  const [open, setOpen] = useState(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "bg-cream/90 shadow-card backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <Container className="flex h-20 items-center justify-between">
        <Link href="#home" className="flex items-center gap-2">
          <div className="relative h-11 w-11 overflow-hidden rounded-2xl bg-pink-500 shadow-card">
            <Image
              src={assetPath("/images/logo.jpg")}
              alt="Logo Pirabrinca Recreação Infantil"
              fill
              sizes="44px"
              className="object-cover"
              priority
            />
          </div>
          <span className="font-display text-lg font-extrabold tracking-tight text-ink-900">
            Pira<span className="text-pink-500">brinca</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-ink-600 transition-colors hover:text-pink-600"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <WhatsAppButton size="sm" label="Solicitar orçamento" />
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full text-ink-900 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-ink-900/5 bg-cream md:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 text-base font-semibold text-ink-800 hover:bg-pink-50 hover:text-pink-600"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-2">
                <WhatsAppButton className="w-full" label="Solicitar orçamento" />
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
