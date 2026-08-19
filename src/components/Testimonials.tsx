import { testimonials } from "@/lib/content";
import { StarIcon } from "@/components/Icons";

/**
 * DEPOIMENTOS — estrutura pronta, lista vazia de propósito.
 * A seção NÃO renderiza em produção enquanto não houver depoimento REAL.
 * ➜ Para ativar: preencha o array `testimonials` em src/lib/content.ts
 *   com depoimentos reais e autorizados. Nada mais precisa mudar aqui.
 * NÃO INVENTAR DEPOIMENTOS (exigência ética/CRO).
 */
export function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section className="section section--tint" id="depoimentos">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="overline">Depoimentos</span>
          <h2>O que dizem os pacientes das nossas unidades em Aparecida</h2>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((t) => (
            <article className="testimonial-card" key={t.name} data-reveal>
              <span className="testimonial-stars" aria-label={`${t.stars} de 5 estrelas`}>
                {Array.from({ length: t.stars }).map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </span>
              <blockquote>“{t.quote}”</blockquote>
              <footer>
                <strong>{t.name}</strong>
                <span>{t.procedure}</span>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
