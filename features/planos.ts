import type { Plano } from "@/types";

export const planos: Plano[] = [
  {
    id: "rio-piracicaba",
    name: "Plano Rio Piracicaba",
    duration: "2 horas de recreação",
    staff: "2 recreadores",
    capacity: "Até 15 crianças",
    includes: ["Brincadeiras dirigidas", "Gincana divertida", "Caça ao tesouro"],
  },
  {
    id: "rua-do-porto",
    name: "Plano Rua do Porto",
    duration: "3 horas de recreação",
    staff: "2 recreadores",
    capacity: "Até 15 crianças",
    includes: ["Brincadeiras dirigidas", "Gincana divertida", "Caça ao tesouro"],
    highlighted: true,
  },
  {
    id: "mirante",
    name: "Plano Mirante",
    duration: "4 horas de recreação",
    staff: "2 recreadores",
    capacity: "Até 15 crianças",
    includes: ["Brincadeiras dirigidas", "Gincana divertida", "Caça ao tesouro"],
  },
];
