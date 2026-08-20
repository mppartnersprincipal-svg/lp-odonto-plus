import { faqs } from "@/lib/content";

/**
 * FAQ com <details>/<summary> nativos — acessível por padrão, zero JavaScript.
 * ⚠️ Faltam 3 perguntas que dependem de confirmação do cliente (ver content.ts):
 *    convênios aceitos · horário de atendimento · atendem crianças?
 */
export function Faq() {
  return (
    <section className="section section--tint" id="duvidas">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="overline">Dúvidas frequentes</span>
          <h2>O que a gente mais ouve antes da primeira consulta no dentista</h2>
        </div>

        <div className="faq-list">
          {faqs.map((f, i) => (
            <details
              className="faq-item"
              key={f.q}
              data-reveal
              style={{ "--reveal-delay": `${Math.min(i * 70, 350)}ms` } as React.CSSProperties}
            >
              <summary>{f.q}</summary>
              <p className="faq-answer">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
