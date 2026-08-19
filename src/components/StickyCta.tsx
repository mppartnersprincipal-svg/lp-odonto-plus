"use client";

import { useEffect, useState } from "react";
import { site, scheduleHref } from "@/lib/site";
import { PhoneIcon } from "@/components/Icons";

/**
 * Barra fixa de CTA — só no mobile (CSS). Fica escondida enquanto o herói
 * estiver visível (ele já tem CTA próprio) e desliza para cima depois.
 */
export function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("inicio");
    if (!hero) {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { rootMargin: "-64px 0px 0px 0px" },
    );
    io.observe(hero);
    return () => io.disconnect();
  }, []);

  return (
    <div className={`sticky-cta${visible ? " is-visible" : ""}`} aria-hidden={!visible}>
      <a className="btn btn--outline" href={site.phone.href} tabIndex={visible ? 0 : -1}>
        <PhoneIcon size={18} />
        Ligar
      </a>
      <a className="btn btn--primary" href={scheduleHref} tabIndex={visible ? 0 : -1}>
        Agendar avaliação
      </a>
    </div>
  );
}
