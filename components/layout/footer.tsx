import Image from "next/image";
import { Instagram, MessageCircle, MapPin } from "lucide-react";
import { Container } from "@/components/ui/container";
import { getWhatsAppLink, INSTAGRAM_URL, WHATSAPP_DISPLAY } from "@/lib/whatsapp";
import { CONTACT, NAV_LINKS } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-900 text-white">
      <Container className="grid gap-10 py-16 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="relative h-11 w-11 overflow-hidden rounded-2xl bg-pink-500">
              <Image
                src="/images/logo.jpg"
                alt="Logo Pirabrinca"
                fill
                sizes="44px"
                className="object-cover"
              />
            </div>
            <span className="font-display text-lg font-extrabold">
              Pira<span className="text-pink-400">brinca</span>
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
            Recreação infantil que transforma festas, aniversários, condomínios e
            eventos em experiências inesquecíveis para crianças de todas as idades.
          </p>
          <div className="mt-5 flex items-center gap-2 text-sm text-white/60">
            <MapPin size={16} />
            <span>Atendimento em {CONTACT.region}</span>
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white/50">
            Navegação
          </h3>
          <ul className="mt-4 space-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-white/75 transition-colors hover:text-pink-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white/50">
            Contato
          </h3>
          <ul className="mt-4 space-y-3">
            <li>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/75 transition-colors hover:text-pink-300"
              >
                <MessageCircle size={16} />
                {WHATSAPP_DISPLAY}
              </a>
            </li>
            <li>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/75 transition-colors hover:text-pink-300"
              >
                <Instagram size={16} />
                {CONTACT.instagramHandle}
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10 py-6">
        <Container className="flex flex-col items-center justify-between gap-2 text-xs text-white/40 sm:flex-row">
          <p>© {year} Pirabrinca Recreação Infantil. Todos os direitos reservados.</p>
          <p>Piracicaba, SP</p>
        </Container>
      </div>
    </footer>
  );
}
