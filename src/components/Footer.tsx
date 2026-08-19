import Image from "next/image";
import { site, fullAddress } from "@/lib/site";
import { navLinks, treatments } from "@/lib/content";
import logo from "@/images/logo.png";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            {/* Logo sobre fundo escuro: mascote branco/vermelho mantém leitura.
               ⚠️ Se o cliente fornecer versão clara oficial, trocar aqui. */}
            <Image src={logo} alt={`Logotipo ${site.name}`} loading="lazy" sizes="140px" />
            <p>
              Unidade Garavelo — odontologia geral e especializada em Aparecida de Goiânia.
              Avaliação, diagnóstico e plano de tratamento com orçamento fechado.
            </p>
          </div>

          <nav className="footer-col" aria-label="Navegação do rodapé">
            <h3>Navegação</h3>
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer-col">
            <h3>Tratamentos</h3>
            <ul>
              {treatments.slice(0, 6).map((t) => (
                <li key={t.name}>
                  <a href="#servicos">{t.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h3>Contato</h3>
            <ul>
              <li>
                <a href={site.phone.href}>{site.phone.display}</a>
              </li>
              <li>
                <span>{fullAddress}</span>
              </li>
              <li>
                <a href={site.maps.directionsUrl} target="_blank" rel="noopener noreferrer">
                  Como chegar
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-legal">
          {/*
            Responsável técnico: cliente optou por não exibir. A linha renderiza
            automaticamente se technicalManager for preenchido em src/lib/site.ts.
            (O Código de Ética Odontológica costuma exigir; recomendável revisar
            antes de veicular anúncios.)
          */}
          {site.technicalManager.name && site.technicalManager.cro && (
            <p className="footer-rt">
              Responsável Técnico: {site.technicalManager.name} — {site.technicalManager.cro}
            </p>
          )}
          <p>
            As informações desta página têm caráter informativo e não substituem a avaliação
            profissional presencial. Resultados variam conforme cada caso.
          </p>
          <p>
            © {new Date().getFullYear()} {site.fullName} — {site.address.city}/{site.address.state}
          </p>
        </div>
      </div>
    </footer>
  );
}
