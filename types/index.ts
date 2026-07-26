import type { LucideIcon } from "lucide-react";

export interface Brincadeira {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
}

export interface Oficina {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
}

export interface Gincana {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
}

export interface Plano {
  id: string;
  name: string;
  duration: string;
  staff: string;
  capacity: string;
  includes: string[];
  highlighted?: boolean;
}

export interface Diferencial {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Depoimento {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
  initials: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface ContactFormValues {
  name: string;
  phone: string;
  eventType: string;
  message: string;
}
