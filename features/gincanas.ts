import { Trophy, Users, Flag, Laugh } from "lucide-react";
import type { Gincana } from "@/types";

export const gincanas: Gincana[] = [
  {
    id: "desafios",
    name: "Desafios",
    description: "Provas divertidas que testam agilidade, equilíbrio e raciocínio rápido.",
    icon: Flag,
  },
  {
    id: "trabalho-em-equipe",
    name: "Trabalho em Equipe",
    description: "Times formados na hora para vencer juntos, um desafio de cada vez.",
    icon: Users,
  },
  {
    id: "competicao-saudavel",
    name: "Competição Saudável",
    description: "Espírito esportivo em primeiro lugar, com todo mundo torcendo junto.",
    icon: Trophy,
  },
  {
    id: "diversao",
    name: "Diversão",
    description: "Muita risada garantida do início ao fim, com direito a premiação simbólica.",
    icon: Laugh,
  },
];
