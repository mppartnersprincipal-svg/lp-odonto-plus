"use client";

import { useEffect } from "react";

/**
 * Google Tag Manager carregado FORA do caminho crítico.
 *
 * Por quê: gtm.js + gtag.js somam ~500 KB de JS de terceiros e travavam a
 * thread principal por ~1,2 s em celulares medianos, empurrando o LCP para
 * além de 7 s. Pré-carregar no <head> (comportamento do @next/third-parties)
 * competia com CSS, fontes e a imagem do herói.
 *
 * Como funciona:
 * 1. window.dataLayer é criado imediatamente. Qualquer evento disparado antes
 *    do GTM chegar (clique no WhatsApp, telefone…) fica enfileirado e é
 *    processado assim que o container carrega — nenhuma conversão se perde.
 * 2. gtm.js só é injetado depois do evento `load` + 2 frames apresentados +
 *    3 s, OU na primeira interação do usuário (toque, rolagem, tecla), o que
 *    acontecer primeiro.
 */
const GTM_URL = "https://www.googletagmanager.com/gtm.js?id=";
const INTERACTION_EVENTS = ["pointerdown", "touchstart", "keydown", "scroll"] as const;

export function GtmLoader({ gtmId }: { gtmId: string }) {
  useEffect(() => {
    if (document.getElementById("gtm-script")) return;

    let loaded = false;
    const load = () => {
      if (loaded) return;
      loaded = true;
      cleanup();
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
      const s = document.createElement("script");
      s.id = "gtm-script";
      s.async = true;
      s.src = GTM_URL + encodeURIComponent(gtmId);
      document.head.appendChild(s);
    };

    /* Depois do load: espera 2 frames serem realmente apresentados (rAF duplo,
       garante que o LCP já foi pintado) e mais 3 s de folga antes de baixar o
       GTM. Assim o container nunca entra no caminho crítico do LCP nem em
       máquinas lentas, e page_view continua sendo enviado normalmente. */
    let timer = 0;
    const onIdle = () => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          timer = window.setTimeout(load, 3000);
        });
      });
    };

    const onLoad = () => onIdle();

    const cleanup = () => {
      INTERACTION_EVENTS.forEach((ev) => window.removeEventListener(ev, load));
      window.removeEventListener("load", onLoad);
      window.clearTimeout(timer);
    };

    INTERACTION_EVENTS.forEach((ev) => window.addEventListener(ev, load, { passive: true, once: true }));

    if (document.readyState === "complete") onIdle();
    else window.addEventListener("load", onLoad, { once: true });

    return cleanup;
  }, [gtmId]);

  return null;
}
