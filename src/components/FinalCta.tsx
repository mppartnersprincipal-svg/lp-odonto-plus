import { site, scheduleHref } from "@/lib/site";

export function FinalCta() {
  return (
    <section className="section final-cta" id="agendar">
      <div className="container" data-reveal="zoom">
        <h2>Aquele dente não vai melhorar sozinho.</h2>
        <p>
          Cada mês de adiamento costuma transformar uma restauração simples em canal, e um canal em
          extração. O diagnóstico é gratuito: o que custa caro é seguir sem ele.
        </p>
        <div className="ctas">
          <a className="btn btn--inverse btn--lg" href={scheduleHref}>
            Quero agendar minha avaliação
          </a>
          <a
            className="btn btn--ghost-light btn--lg"
            href={site.maps.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver como chegar
          </a>
        </div>
      </div>
    </section>
  );
}
