"use client";

import { useEffect } from "react";

/**
 * Eventos de conversão da LP → dataLayer (GTM).
 * Listener delegado único; nenhum componente precisa saber de analytics.
 *
 * Eventos enviados:
 *  - clique_whatsapp   { secao, texto } — qualquer link wa.me (CTAs, botão flutuante)
 *  - clique_telefone   { secao, texto } — links tel:
 *  - clique_como_chegar{ secao, texto } — links do Google Maps
 *  - clique_instagram  { secao, texto } — link do perfil
 *  - faq_abriu         { pergunta }     — abertura de item do FAQ
 * `secao` = id da <section> do clique (ou header/rodape/barra-fixa-mobile/botao-flutuante).
 */
function push(event: string, params: Record<string, unknown>) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}

export function TrackingEvents() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest?.("a");
      if (!a) return;
      const href = a.getAttribute("href") ?? "";

      const secao = a.closest(".wa-float")
        ? "botao-flutuante"
        : a.closest(".sticky-cta")
          ? "barra-fixa-mobile"
          : a.closest("footer")
            ? "rodape"
            : a.closest("header")
              ? "header"
              : (a.closest("section[id]")?.id ?? "pagina");
      const texto = a.textContent?.trim().slice(0, 80) ?? "";

      if (href.includes("wa.me")) push("clique_whatsapp", { secao, texto });
      else if (href.startsWith("tel:")) push("clique_telefone", { secao, texto });
      else if (href.includes("google.com/maps")) push("clique_como_chegar", { secao, texto });
      else if (href.includes("instagram.com")) push("clique_instagram", { secao, texto });
    };

    /* "toggle" não borbulha — captura na fase de capture */
    const onToggle = (e: Event) => {
      const d = e.target as HTMLElement;
      if (d instanceof HTMLDetailsElement && d.classList.contains("faq-item") && d.open) {
        push("faq_abriu", { pergunta: d.querySelector("summary")?.textContent?.trim() ?? "" });
      }
    };

    document.addEventListener("click", onClick);
    document.addEventListener("toggle", onToggle, true);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("toggle", onToggle, true);
    };
  }, []);

  return null;
}
