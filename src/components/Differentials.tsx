import { differentials, type Differential } from "@/lib/content";
import {
  ContractIcon,
  ShieldCheckIcon,
  HeartHandIcon,
  LayersIcon,
  WalletIcon,
  SparkleIcon,
} from "@/components/Icons";

const icons: Record<Differential["icon"], React.ComponentType<{ size?: number }>> = {
  contract: ContractIcon,
  shield: ShieldCheckIcon,
  heart: HeartHandIcon,
  layers: LayersIcon,
  wallet: WalletIcon,
  sparkle: SparkleIcon,
};

export function Differentials() {
  return (
    <section className="section" id="diferenciais">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="overline">Por que a Odonto Plus</span>
          <h2>O que muda quando o tratamento é bem feito desde o começo</h2>
          <p className="section-lead">
            Preço importa, e o nosso é competitivo. Mas o que faz o tratamento valer a pena não é
            o valor da primeira consulta: é não precisar fazer de novo.
          </p>
        </div>

        <div className="diff-grid">
          {differentials.map((d) => {
            const Icon = icons[d.icon];
            return (
              <article className="diff-card" key={d.title} data-reveal>
                <span className="diff-icon">
                  <Icon size={24} />
                </span>
                <h3>{d.title}</h3>
                <p>{d.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
