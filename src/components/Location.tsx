import { site, scheduleHref, fullAddress } from "@/lib/site";
import { MapPinIcon, PhoneIcon, ClockIcon } from "@/components/Icons";

export function Location() {
  return (
    <section className="section" id="localizacao">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="overline">Onde estamos</span>
          <h2>No Garavelo, em Aparecida de Goiânia, com ponto de referência fácil</h2>
        </div>

        <div className="loc-grid">
          <div className="loc-info" data-reveal="left">
            <div className="loc-ref" style={{ marginBottom: "var(--space-5)" }}>
              <span className="pin">
                <MapPinIcon size={20} />
              </span>
              <p>
                <strong>Ponto de referência:</strong> exatamente em frente à Ótica Paris, no piso
                superior da Móveis Estrela.
              </p>
            </div>

            <div className="loc-blocks">
              <div className="loc-block">
                <span className="b-icon">
                  <MapPinIcon size={20} />
                </span>
                <div>
                  <strong>Endereço</strong>
                  <p>{fullAddress}</p>
                </div>
              </div>

              <div className="loc-block">
                <span className="b-icon">
                  <PhoneIcon size={20} />
                </span>
                <div>
                  <strong>Telefone</strong>
                  <p>
                    <a href={site.phone.href}>{site.phone.display}</a>
                  </p>
                </div>
              </div>

              <div className="loc-block">
                <span className="b-icon">
                  <ClockIcon size={20} />
                </span>
                <div>
                  <strong>Horário de atendimento</strong>
                  {/* ⚠️ Texto provisório — substituído automaticamente quando site.hours for preenchido */}
                  <p>{site.hours ?? "Consulte os horários disponíveis pelo telefone ou WhatsApp."}</p>
                </div>
              </div>
            </div>

            <div className="loc-ctas" style={{ marginTop: "var(--space-6)" }}>
              <a
                className="btn btn--primary"
                href={site.maps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Como chegar
              </a>
              <a className="btn btn--outline" href={scheduleHref}>
                Agendar agora
              </a>
            </div>
          </div>

          <div
            className="map-wrap"
            data-reveal="right"
            style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
          >
            <iframe
              src={site.maps.embedUrl}
              title="Mapa da Odonto Plus Unidade Garavelo no Google Maps"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
