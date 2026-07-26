import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { BrincadeirasSection } from "@/components/sections/brincadeiras-section";
import { CacaAoTesouro } from "@/components/sections/caca-ao-tesouro";
import { OficinasSection } from "@/components/sections/oficinas-section";
import { GincanasSection } from "@/components/sections/gincanas-section";
import { PlanosSection } from "@/components/sections/planos-section";
import { DiferenciaisSection } from "@/components/sections/diferenciais-section";
import { GaleriaSection } from "@/components/sections/galeria-section";
import { DepoimentosSection } from "@/components/sections/depoimentos-section";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaFinal } from "@/components/sections/cta-final";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <BrincadeirasSection />
      <CacaAoTesouro />
      <OficinasSection />
      <GincanasSection />
      <PlanosSection />
      <DiferenciaisSection />
      <GaleriaSection />
      <DepoimentosSection />
      <FaqSection />
      <CtaFinal />
    </>
  );
}
