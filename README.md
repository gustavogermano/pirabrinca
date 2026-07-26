# Pirabrinca Recreação Infantil — Site Institucional

Site institucional construído com Next.js 14 (App Router), TypeScript, Tailwind
CSS e Framer Motion, seguindo a arquitetura padrão da agência (mesmo padrão
usado em Garagem Zero e Apex Neon).

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS (tokens de marca em `tailwind.config.ts`)
- Framer Motion (variantes centralizadas em `lib/motion.ts`)
- React Hook Form + Zod (pronto para formulários futuros)
- lucide-react (ícones)
- class-variance-authority (variantes de componentes)

## Como rodar

```bash
npm install
npm run dev
```

Build de produção:

```bash
npm run build
npm run start
```

Validação antes do handoff:

```bash
npm run typecheck   # tsc --noEmit
npm run lint        # next lint
```

> Observação: o build depende de baixar as fontes Sora e Inter via Google
> Fonts (`next/font/google`). Em ambientes sem acesso à internet o build pode
> falhar apenas por esse motivo — não há erro de código.

## Estrutura de pastas

```
app/                     rotas, layout, SEO (sitemap, robots), metadata
components/
  ui/                    Button, LinkButton, Container, SectionHeading
  layout/                Header, Footer, WhatsAppButton, FloatingWhatsApp
  sections/               11 seções da landing page (Hero → CTA final)
  shared/                BlobShape (elemento de assinatura visual), StarRating,
                          LocalBusinessSchema (JSON-LD)
features/                dados tipados: brincadeiras, oficinas, gincanas,
                          planos, diferenciais, depoimentos, faq
hooks/                   use-scroll-progress, use-parallax-blob
lib/                     utils (cn), motion (variantes Framer Motion),
                          whatsapp (link central), constants
types/                   tipos compartilhados (index.ts)
public/images/           imagens fornecidas pelo cliente
```

## Checklist de imagens antes do deploy

As imagens fornecidas pelo cliente já estão em `public/images/` e em uso:

- `logo.jpg` → logo (header, footer, hero, favicon, Open Graph)
- `brincadeiras.jpg` → seção de Brincadeiras
- `caca-ao-tesouro.jpg` → seção Caça ao Tesouro
- `planos.jpg` → seção de Planos
- `oficina-*.jpg` → material de referência para o catálogo de oficinas
  (conteúdo já extraído para `features/oficinas.ts`; as imagens em si não
  são exibidas na seção para manter a linguagem visual minimalista do site)

A seção Galeria usa placeholders animados até que fotos reais dos eventos
sejam enviadas — basta substituir o array `placeholders` em
`components/sections/galeria-section.tsx` por imagens reais com `next/image`.

## Identidade visual

- Rosa vibrante `#EC1E88` (`pink-500`) — cor principal
- Amarelo `#FFC627` (`sun-400`) — cor secundária
- Fundo branco/creme `#FFFDFB`
- Tipografia: **Sora** (display) + **Inter** (texto)
- Elemento de assinatura: blobs orgânicos animados (`BlobShape`), ecoando as
  formas orgânicas já usadas na identidade visual da Pirabrinca

## Contato

- WhatsApp: `lib/whatsapp.ts` centraliza o número e a geração de links —
  todo CTA do site passa pelo componente `WhatsAppButton`.
- Instagram: `@pirabrinca`
