import { scheduleHref } from "@/lib/site";
import { comparison } from "@/lib/content";
import { CheckIcon, XMarkIcon } from "@/components/Icons";

/**
 * Seção mais importante da página: reposiciona preço como risco.
 * Não citar concorrente pelo nome. Não suavizar a copy.
 */
export function ObjectionBreak() {
  return (
    <section className="section section--tint" id="transparencia">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="overline">Transparência</span>
          <h2>Não somos os mais baratos do Garavelo. E explicamos o porquê</h2>
          <p className="section-lead">
            Existe clínica cobrando bem menos que a gente. O que quase ninguém conta é o que
            precisa ser cortado para chegar naquele preço, e a conta costuma chegar depois, na
            forma de retrabalho.
          </p>
        </div>

        <div className="compare-grid">
          <div className="compare-col compare-col--us" data-reveal>
            <h3>
              {comparison.us.title}
              <span className="mark">
                <CheckIcon />
              </span>
            </h3>
            <ul>
              {comparison.us.items.map((item) => (
                <li key={item}>
                  <span className="mark">
                    <CheckIcon />
                  </span>
                  <strong>{item}</strong>
                </li>
              ))}
            </ul>
          </div>

          <div className="compare-col compare-col--them" data-reveal>
            <h3>
              {comparison.them.title}
              <span className="mark">
                <XMarkIcon />
              </span>
            </h3>
            <ul>
              {comparison.them.items.map((item) => (
                <li key={item}>
                  <span className="mark">
                    <XMarkIcon />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="objection-cta" data-reveal>
          <a className="btn btn--primary btn--lg" href={scheduleHref}>
            Quero avaliar meu caso sem custo
          </a>
        </div>
      </div>
    </section>
  );
}
