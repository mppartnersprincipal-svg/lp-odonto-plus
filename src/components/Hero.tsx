import Image from "next/image";
import { site, scheduleHref } from "@/lib/site";
import { heroBullets } from "@/lib/content";
import { CheckIcon, PhoneIcon, MapPinIcon } from "@/components/Icons";
import fachada from "@/images/fachada.webp";

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="hero-badge">
            <span className="overline overline--primary">Nova unidade • Garavelo</span>
          </div>

          <h1>
            Tratamento odontológico no Garavelo que você{" "}
            <span className="hero-highlight">não vai precisar refazer</span> daqui a um ano.
          </h1>

          <p className="hero-sub">
            A Odonto Plus acaba de abrir sua nova unidade no bairro. Comece com uma{" "}
            <strong>avaliação completa + raio-X, sem custo</strong>, e saia da consulta sabendo
            exatamente o que precisa ser feito e quanto custa.
          </p>

          <ul className="hero-bullets">
            {heroBullets.map((b) => (
              <li key={b.strong}>
                <span className="check">
                  <CheckIcon />
                </span>
                <span>
                  <strong>{b.strong}</strong> — {b.text}
                </span>
              </li>
            ))}
          </ul>

          <div className="hero-ctas">
            <a className="btn btn--primary btn--lg" href={scheduleHref}>
              Agendar avaliação gratuita
            </a>
            <a className="btn btn--outline btn--lg" href={site.phone.href}>
              <PhoneIcon size={18} />
              {site.phone.display}
            </a>
          </div>

          <p className="hero-note">Sem compromisso de fechar tratamento. Você avalia, entende e decide.</p>
        </div>

        <div className="hero-media">
          <Image
            src={fachada}
            alt="Fachada da Odonto Plus Unidade Garavelo, no piso superior da Móveis Estrela"
            priority
            sizes="(min-width: 900px) 45vw, 100vw"
          />
          <div className="hero-tag">
            <span className="pin">
              <MapPinIcon size={18} />
            </span>
            <span>
              <strong>Em frente à Ótica Paris</strong>
              <span>Piso superior da Móveis Estrela — Garavelo</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
