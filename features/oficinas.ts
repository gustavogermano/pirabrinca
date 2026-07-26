import {
  ShoppingBag,
  Gem,
  Cookie,
  Droplets,
  Trophy,
  Scissors,
  Smile,
  Shapes,
  Palette,
} from "lucide-react";
import type { Oficina } from "@/types";

export const oficinas: Oficina[] = [
  {
    id: "ecobag",
    name: "Customização de Ecobag",
    description:
      "Cada criança personaliza sua própria ecobag, soltando a imaginação e levando para casa uma criação única.",
    icon: ShoppingBag,
  },
  {
    id: "pulseiras-colares",
    name: "Pulseiras e Colares",
    description:
      "Confecção de acessórios combinando cores, contas e formas para criações cheias de personalidade.",
    icon: Gem,
  },
  {
    id: "cupcake",
    name: "Confeitaria de Cupcake",
    description:
      "As crianças decoram seus próprios cupcakes com confeitos e muita imaginação, criando uma gostosura única.",
    icon: Cookie,
  },
  {
    id: "slime",
    name: "Slime",
    description:
      "Experiência sensorial e colorida em que as crianças criam e personalizam seu próprio slime.",
    icon: Droplets,
  },
  {
    id: "campeonato-futebol",
    name: "Campeonato de Futebol",
    description:
      "Competição cheia de energia com times, desafios e torcida, estimulando espírito de equipe.",
    icon: Trophy,
  },
  {
    id: "spa-cabelos-unhas",
    name: "Spa Cabelos e Unhas",
    description:
      "Momento de cuidado e diversão, com atividades de beleza para as crianças soltarem a criatividade.",
    icon: Scissors,
  },
  {
    id: "pintura-facial",
    name: "Pintura Facial",
    description:
      "As crianças escolhem seus desenhos favoritos e ganham uma pintura facial especial para a festa.",
    icon: Smile,
  },
  {
    id: "modelagem-argila",
    name: "Modelagem de Argila",
    description:
      "Experiência criativa e sensorial: as crianças exploram a argila e dão vida às suas próprias formas.",
    icon: Shapes,
  },
  {
    id: "pintura-tela",
    name: "Pintura em Tela",
    description:
      "Com pincéis e tintas, cada criança cria sua própria obra de arte para levar como lembrança da festa.",
    icon: Palette,
  },
];

export const OFICINAS_PRICING_NOTE =
  "Cada oficina tem valor fixo e adicional por criança.";
