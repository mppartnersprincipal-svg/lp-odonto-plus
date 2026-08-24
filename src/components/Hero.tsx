import { site, scheduleHref } from "@/lib/site";
import { heroBullets } from "@/lib/content";
import { CheckIcon, PhoneIcon, MapPinIcon } from "@/components/Icons";
import fachada from "@/images/fachada.webp";

/* srcset da fachada otimizada pelo Next (mesmas larguras de next.config deviceSizes) */
const HERO_DESKTOP_SRCSET = [640, 750, 828, 1080, 1200, 1920]
  .map((w) => `/_next/image?url=${encodeURIComponent(fachada.src)}&w=${w}&q=75 ${w}w`)
  .join(", ");

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
            <strong>avaliação criteriosa, feita por especialista e sem custo</strong>, e saia da
            consulta sabendo exatamente o que precisa ser feito e quanto custa.
          </p>

          <ul className="hero-bullets">
            {heroBullets.map((b) => (
              <li key={b.strong}>
                <span className="check">
                  <CheckIcon />
                </span>
                <span>
                  <strong>{b.strong}</strong>: {b.text}
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
          {/* No desktop a fachada é o LCP: preload só lá (media query). No mobile ela
              fica abaixo da dobra (o LCP é o h1) e um preload incondicional roubava
              banda do CSS/fontes antes da primeira pintura. */}
          <link
            rel="preload"
            as="image"
            media="(min-width: 900px)"
            imageSrcSet={HERO_DESKTOP_SRCSET}
            imageSizes="45vw"
            fetchPriority="high"
          />
          {/* <img> puro em vez de next/image: com priority/eager o next/image injeta um
              <link rel=preload> incondicional, que no mobile disputava banda com o CSS. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`/_next/image?url=${encodeURIComponent(fachada.src)}&w=1200&q=75`}
            srcSet={HERO_DESKTOP_SRCSET}
            sizes="(min-width: 900px) 45vw, 100vw"
            width={fachada.width}
            height={fachada.height}
            alt="Fachada da Odonto Plus Unidade Garavelo, no piso superior da Móveis Estrela"
            decoding="async"
          />
          <div className="hero-tag">
            <span className="pin">
              <MapPinIcon size={18} />
            </span>
            <span>
              <strong>Em frente à Ótica Paris</strong>
              <span>Piso superior da Móveis Estrela, Garavelo</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
