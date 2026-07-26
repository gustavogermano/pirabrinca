import {
  Armchair,
  Ghost,
  Rabbit,
  Skull,
  Flame,
  CircleDot,
  PhoneCall,
  Crown,
  UsersRound,
  EyeOff,
  PartyPopper,
  Sparkles,
} from "lucide-react";
import type { Brincadeira } from "@/types";

export const brincadeiras: Brincadeira[] = [
  {
    id: "danca-da-cadeira",
    name: "Dança da Cadeira",
    description: "O clássico que nunca sai de moda: música, cadeiras e muita disputa animada.",
    icon: Armchair,
  },
  {
    id: "vampiro-vampirao",
    name: "Vampiro Vampirão",
    description: "Suspense e risadas em círculo, adivinhando quem é o vampiro da rodada.",
    icon: Ghost,
  },
  {
    id: "coelho-sai-da-toca",
    name: "Coelho Sai da Toca",
    description: "Agilidade e trabalho em grupo para não ficar sem toca quando a música parar.",
    icon: Rabbit,
  },
  {
    id: "vivo-ou-morto",
    name: "Vivo ou Morto",
    description: "Comandos rápidos testam atenção e reflexo em um vai e vem contagiante.",
    icon: Skull,
  },
  {
    id: "batata-quente",
    name: "Batata Quente",
    description: "A batata passa de mão em mão até a música parar — e a torcida aumenta.",
    icon: Flame,
  },
  {
    id: "passa-anel",
    name: "Passa Anel",
    description: "Concentração e mistério em uma brincadeira de mãos ágeis e olhos atentos.",
    icon: CircleDot,
  },
  {
    id: "telefone-sem-fio",
    name: "Telefone Sem Fio",
    description: "Uma frase, muitos sussurros e um final sempre engraçado no fim da fila.",
    icon: PhoneCall,
  },
  {
    id: "mestre-mandou",
    name: "Mestre Mandou",
    description: "Só vale fazer o que o mestre mandar — quem erra, dá risada e recomeça.",
    icon: Crown,
  },
  {
    id: "pega-pega",
    name: "Pega-Pega",
    description: "Correria, fôlego e gargalhadas em uma perseguição sem fim pelo espaço.",
    icon: UsersRound,
  },
  {
    id: "esconde-esconde",
    name: "Esconde-Esconde",
    description: "Cantos secretos e contagem regressiva para uma busca cheia de suspense.",
    icon: EyeOff,
  },
  {
    id: "estoura-balao",
    name: "Estoura Balão",
    description: "Ritmo, equilíbrio e muitos estouros para uma festa animada até o fim.",
    icon: PartyPopper,
  },
  {
    id: "e-muito-mais",
    name: "E muito mais!",
    description: "Nosso repertório é grande — combinamos as brincadeiras ideais para cada festa.",
    icon: Sparkles,
  },
];
