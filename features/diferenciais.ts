import { Home, HeartHandshake, Sparkles, Baby, ClipboardCheck, MapPin } from "lucide-react";
import type { Diferencial } from "@/types";

export const diferenciais: Diferencial[] = [
  {
    id: "atendimento-domicilio",
    title: "Atendimento em domicílio",
    description: "Levamos toda a estrutura de recreação até o local do seu evento.",
    icon: Home,
  },
  {
    id: "recreadores-experientes",
    title: "Recreadores experientes",
    description: "Equipe treinada para conduzir atividades com segurança e energia boa.",
    icon: HeartHandshake,
  },
  {
    id: "diversao-personalizada",
    title: "Diversão personalizada",
    description: "Ajustamos brincadeiras e temas conforme o perfil da festa e das crianças.",
    icon: Sparkles,
  },
  {
    id: "atividades-faixa-etaria",
    title: "Atividades por faixa etária",
    description: "Programação pensada para crianças de todas as idades se divertirem juntas.",
    icon: Baby,
  },
  {
    id: "organizacao-completa",
    title: "Organização completa",
    description: "Planejamento do início ao fim, sem preocupação para os pais no dia do evento.",
    icon: ClipboardCheck,
  },
  {
    id: "atendimento-regiao",
    title: "Atendimento em Piracicaba e região",
    description: "Presença firme na cidade e municípios vizinhos, com agenda flexível.",
    icon: MapPin,
  },
];
