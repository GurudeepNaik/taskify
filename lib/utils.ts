import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const headFont = localFont({
  src: "../public/fonts/font.woff2",
});

export const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
