import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function assetPath(path: string) {
  if (!path.startsWith("/")) return path;

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  if (!basePath) return path;
  if (path.startsWith(`${basePath}/`)) return path;

  return `${basePath}${path}`;
}
