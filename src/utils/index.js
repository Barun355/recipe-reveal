import { clsx} from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function isMobile() {
  if (typeof window !== "undefined") {
    return window.innerWidth <= 768;
  }
  return false;
}

export function scrollToTop() {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
}

export function currentPage() {
  if (typeof window !== "undefined") {
    const currentUrl = window.location.pathname.split("/");
    return currentUrl[currentUrl.length - 1] || "home";
  }
  return null;
}