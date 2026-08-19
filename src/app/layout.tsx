import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import { site, SITE_URL } from "@/lib/site";
import "./globals.css";

/* Fontes do Design System, self-hosted no build via next/font */
const fontDisplay = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

const fontBody = Instrument_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Dentista no Garavelo | Odonto Plus em Aparecida de Goiânia",
  description:
    "Clínica odontológica no Garavelo, em Aparecida de Goiânia. Avaliação completa com raio-X sem custo, orçamento fechado por escrito e tratamento feito para durar. Agende pelo telefone (62) 3699-9420.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: site.fullName,
    title: "Dentista no Garavelo | Odonto Plus em Aparecida de Goiânia",
    description:
      "Avaliação completa com raio-X sem custo, orçamento fechado por escrito e tratamento feito para durar. Nova unidade no Garavelo.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Fachada da Odonto Plus Unidade Garavelo" }],
  },
  robots: { index: true, follow: true },
};

/* Structured data schema.org/Dentist — apenas campos com dado REAL.
   Horários, avaliações e redes sociais entram quando forem preenchidos no site.ts. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: site.fullName,
  description: site.description,
  telephone: site.phone.href.replace("tel:", ""),
  address: {
    "@type": "PostalAddress",
    streetAddress: `${site.address.street}, ${site.address.complement}`,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    postalCode: site.address.zip,
    addressCountry: "BR",
  },
  hasMap: site.maps.directionsUrl,
  image: `${SITE_URL}/og.jpg`,
  ...(site.social.instagram ? { sameAs: [site.social.instagram] } : {}),
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "07:30",
      closes: "18:00",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${fontDisplay.variable} ${fontBody.variable}`}>
      <body>
        <a className="skip-link" href="#conteudo">
          Pular para o conteúdo
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
