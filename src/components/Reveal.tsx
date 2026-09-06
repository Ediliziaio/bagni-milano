import { ReactNode, useEffect } from "react";
import { cn } from "@/lib/utils";

/**
 * Rivelazione allo scroll.
 *
 * Il contenuto NON parte da opacity 0 nel markup: lo stato iniziale esiste solo
 * quando questo hook aggiunge `.js-reveal` a <html>. Senza JavaScript, e
 * nell'HTML prerenderizzato (dove lo script di prerender rimuove la classe
 * prima di catturare), tutto è visibile a riposo.
 */
export const useRevealSetup = () => {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const root = document.documentElement;
    root.classList.add("js-reveal");

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 }
    );

    const scan = () => document.querySelectorAll("[data-reveal]:not(.is-in)").forEach((el) => io.observe(el));
    scan();
    // Le pagine caricate in lazy montano dopo: si riscansiona a ogni cambio di rotta.
    const t = window.setTimeout(scan, 300);

    return () => {
      window.clearTimeout(t);
      io.disconnect();
      root.classList.remove("js-reveal");
    };
  }, []);
};

/** Wrapper dichiarativo. `delay` scala l'ingresso di elementi in sequenza. */
export const Reveal = ({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "section" | "figure";
}) => (
  <Tag className={cn(className)} data-reveal="" style={{ ["--reveal-delay" as string]: `${delay}ms` }}>
    {children}
  </Tag>
);
