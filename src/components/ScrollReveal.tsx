"use client";

import { useEffect } from "react";

/**
 * Scroll reveal com rede de segurança.
 *
 * Como funciona:
 * 1. Sem JS (ou com prefers-reduced-motion), NADA é escondido — a página é
 *    servida completa e estática.
 * 2. Ao hidratar, só recebem .reveal-pending os elementos [data-reveal] que
 *    estão ABAIXO da dobra (nunca escondemos o que já está na tela).
 * 3. IntersectionObserver revela ao entrar na viewport.
 * 4. REDE DE SEGURANÇA: um verificador por scroll/resize (via rAF) revela
 *    qualquer elemento que o observer tenha perdido em rolagem muito rápida
 *    — nenhum conteúdo fica preso invisível.
 */
export function ScrollReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const pending = new Set<HTMLElement>();
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");

    for (const el of els) {
      const rect = el.getBoundingClientRect();
      if (rect.top > window.innerHeight * 0.92) {
        el.classList.add("reveal-pending");
        pending.add(el);
      }
    }

    if (pending.size === 0) return;

    const reveal = (el: HTMLElement) => {
      el.classList.add("reveal-visible");
      pending.delete(el);
      io.unobserve(el);
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) reveal(entry.target as HTMLElement);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0 },
    );

    pending.forEach((el) => io.observe(el));

    let ticking = false;
    const safetyCheck = () => {
      ticking = false;
      for (const el of Array.from(pending)) {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) reveal(el);
      }
      if (pending.size === 0) removeListeners();
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(safetyCheck);
      }
    };

    const removeListeners = () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      io.disconnect();
      removeListeners();
      // Garantia extra: nada fica escondido se o componente desmontar
      pending.forEach((el) => el.classList.add("reveal-visible"));
    };
  }, []);

  return null;
}
