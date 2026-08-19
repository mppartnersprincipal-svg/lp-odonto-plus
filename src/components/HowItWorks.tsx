import { steps } from "@/lib/content";

export function HowItWorks() {
  return (
    <section className="section" id="como-funciona">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="overline">Como funciona</span>
          <h2>Do primeiro contato até o plano de tratamento, em 3 passos</h2>
          <p className="section-lead">
            Leva menos de uma hora, e você sai sabendo exatamente onde está pisando.
          </p>
        </div>

        <ol className="steps-grid">
          {steps.map((step, i) => (
            <li
              className="step-card"
              key={step.title}
              data-reveal
              style={{ "--reveal-delay": `${i * 130}ms` } as React.CSSProperties}
            >
              <span className="step-num" aria-hidden="true">
                {i + 1}
              </span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
