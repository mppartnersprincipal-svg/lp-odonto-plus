import Image from "next/image";
import { clinicParagraphs, clinicChecklist } from "@/lib/content";
import { CheckIcon } from "@/components/Icons";
import recepcao from "@/images/recepcao.webp";
import consultorio from "@/images/consultorio.webp";

export function Clinic() {
  return (
    <section className="section" id="clinica">
      <div className="container clinic-grid">
        <div className="clinic-copy" data-reveal="left">
          <span className="overline">A clínica</span>
          <h2>A Odonto Plus não chegou agora. Só chegou agora no Garavelo.</h2>

          {clinicParagraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}

          {/* ⚠️ Itens factuais — confirmar cada um com o cliente antes de publicar (ver content.ts) */}
          <ul className="clinic-check">
            {clinicChecklist.map((item) => (
              <li key={item}>
                <span className="check">
                  <CheckIcon />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div
          className="clinic-photos"
          data-reveal="right"
          style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
        >
          <figure>
            <Image
              src={recepcao}
              alt="Recepção da Odonto Plus com cadeiras vermelhas e ambiente novo"
              loading="lazy"
              sizes="(min-width: 900px) 22vw, 45vw"
            />
          </figure>
          <figure>
            <Image
              src={consultorio}
              alt="Consultório odontológico novo da Odonto Plus Garavelo, com cadeira e equipamentos modernos"
              loading="lazy"
              sizes="(min-width: 900px) 22vw, 45vw"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
