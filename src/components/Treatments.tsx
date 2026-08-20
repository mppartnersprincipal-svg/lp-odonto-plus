import Image from "next/image";
import { scheduleHref } from "@/lib/site";
import { treatments } from "@/lib/content";
import { ToothIcon } from "@/components/Icons";

export function Treatments() {
  return (
    <section className="section section--tint" id="servicos">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="overline">Tratamentos</span>
          <h2>Tratamentos odontológicos em um lugar só, com a mesma equipe do início ao fim</h2>
          <p className="section-lead">
            Da restauração simples ao implante dentário, aqui no Garavelo. Não sabe qual você
            precisa? É exatamente para isso que a avaliação é gratuita.
          </p>
        </div>

        <div className="treat-grid">
          {treatments.map((t, i) => (
            <article
              className="treat-card"
              key={t.name}
              data-reveal
              style={{ "--reveal-delay": `${(i % 5) * 80}ms` } as React.CSSProperties}
            >
              <div className="treat-media">
                {t.image ? (
                  <Image
                    src={t.image}
                    alt={t.imageAlt}
                    loading="lazy"
                    sizes="(min-width: 1200px) 20vw, (min-width: 900px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                ) : (
                  /* Placeholder tratado com a marca — trocado automaticamente
                     quando a foto for adicionada em content.ts */
                  <div className="treat-placeholder" aria-hidden="true">
                    <ToothIcon size={44} />
                    <span>{t.name}</span>
                  </div>
                )}
              </div>
              <div className="treat-body">
                <h3>{t.name}</h3>
                <p>{t.text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="treat-cta" data-reveal>
          <a className="btn btn--primary btn--lg" href={scheduleHref}>
            Falar com nossa equipe
          </a>
        </div>
      </div>
    </section>
  );
}
