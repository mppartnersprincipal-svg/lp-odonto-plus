import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import { site, SITE_URL } from "@/lib/site";
import { treatments, faqs } from "@/lib/content";
import { TrackingEvents } from "@/components/TrackingEvents";
import "./globals.css";

const GTM_ID = "GTM-MC4TM5W5";

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
    "Clínica odontológica no Garavelo, em Aparecida de Goiânia. Avaliação criteriosa com especialista, sem custo, orçamento fechado por escrito e tratamento feito para durar. Agende pelo telefone (62) 3699-9420.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: site.fullName,
    title: "Dentista no Garavelo | Odonto Plus em Aparecida de Goiânia",
    description:
      "Avaliação criteriosa com especialista, sem custo, orçamento fechado por escrito e tratamento feito para durar. Nova unidade no Garavelo.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Fachada da Odonto Plus Unidade Garavelo" }],
  },
  robots: { index: true, follow: true },
};

/* Structured data schema.org — apenas campos com dado REAL.
   Horários, avaliações e redes sociais entram quando forem preenchidos no site.ts.
   Dentist (negócio local) + FAQPage (perguntas reais da página) num único @graph. */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Dentist",
      "@id": `${SITE_URL}/#clinica`,
      name: site.fullName,
      url: SITE_URL,
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
      areaServed: [
        { "@type": "Place", name: "Garavelo" },
        { "@type": "City", name: "Aparecida de Goiânia" },
      ],
      availableService: treatments.map((t) => ({
        "@type": "MedicalProcedure",
        name: t.name,
      })),
      hasMap: site.maps.directionsUrl,
      image: `${SITE_URL}/og.jpg`,
      ...(site.social.instagram ? { sameAs: [site.social.instagram] } : {}),
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "08:00",
          closes: "18:00",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#duvidas`,
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${fontDisplay.variable} ${fontBody.variable}`}>
      <GoogleTagManager gtmId={GTM_ID} />
      <body>
        <a className="skip-link" href="#conteudo">
          Pular para o conteúdo
        </a>
        {children}
        <TrackingEvents />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
