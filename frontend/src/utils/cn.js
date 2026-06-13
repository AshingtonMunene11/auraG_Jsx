// src/utils/cn.js
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * cn - merge Tailwind + conditional classNames
 * @param  {...any} inputs
 * @returns {string} merged className string
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
