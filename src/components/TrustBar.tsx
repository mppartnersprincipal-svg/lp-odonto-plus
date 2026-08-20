import { site } from "@/lib/site";
import { BuildingIcon, BadgeCheckIcon, ClockIcon, StarIcon } from "@/components/Icons";

/**
 * Barra de confiança — renderiza APENAS itens com dado real.
 * Os itens de anos de atuação e nota no Google aparecem automaticamente
 * quando site.trust.* for preenchido.
 */
export function TrustBar() {
  const { yearsActive, googleRating, googleReviews } = site.trust;

  return (
    <aside className="trustbar" aria-label="Sobre a Odonto Plus">
      <div className="container trustbar-inner">
        <div className="trust-item" data-reveal>
          <span className="t-icon">
            <BuildingIcon size={20} />
          </span>
          <span>
            <strong>3 unidades</strong>
            <span>Centro, Cidade Livre e Garavelo</span>
          </span>
        </div>

        <div
          className="trust-item"
          data-reveal
          style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
        >
          <span className="t-icon">
            <BadgeCheckIcon size={20} />
          </span>
          <span>
            <strong>Equipe com CRO ativo</strong>
            <span>profissionais registrados</span>
          </span>
        </div>

        {yearsActive !== null && (
          <div className="trust-item">
            <span className="t-icon">
              <ClockIcon size={20} />
            </span>
            <span>
              <strong>{yearsActive} anos</strong>
              <span>atendendo em Aparecida</span>
            </span>
          </div>
        )}

        {googleRating !== null && googleReviews !== null && (
          <div className="trust-item">
            <span className="t-icon">
              <StarIcon size={18} />
            </span>
            <span>
              <strong>Nota {googleRating.toLocaleString("pt-BR")}</strong>
              <span>em {googleReviews} avaliações no Google</span>
            </span>
          </div>
        )}
      </div>
    </aside>
  );
}
