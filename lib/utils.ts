import { ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import siteConfig from "@/config/siteConfig.json"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(input: string | number): string {
  const date = new Date(input)
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

export function getSiteName(): string {
  return siteConfig?.name
}
