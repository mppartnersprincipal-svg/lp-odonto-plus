/**
 * ÚNICA FONTE DE VERDADE dos dados da clínica.
 * Nenhum componente pode ter telefone, endereço ou link escrito direto no JSX.
 *
 * ⚠️ Campos `null` = dado ainda não confirmado pelo cliente. Preencha aqui e
 * os componentes correspondentes passam a renderizar automaticamente.
 */

export const site = {
  name: "Odonto Plus",
  unit: "Unidade Garavelo",
  fullName: "Odonto Plus Unidade Garavelo",
  description:
    "Clínica odontológica no Garavelo, em Aparecida de Goiânia. Avaliação criteriosa com especialista, sem custo, orçamento fechado por escrito e tratamento feito para durar.",

  /** ⚠️ PREENCHER: domínio final do site (ex.: "https://odontoplusgaravelo.com.br"). Sem ele, canonical/OG absolutos e sitemap usam placeholder. */
  url: null as string | null,

  phone: {
    display: "(62) 3699-9420",
    /** Abre o discador no celular */
    href: "tel:+556236999420",
  },

  /**
   * WhatsApp confirmado pelo cliente: (62) 3699-9420.
   * Formato internacional sem símbolos — botão flutuante e CTAs de
   * agendamento usam WhatsApp automaticamente.
   */
  whatsapp: {
    number: "556236999420" as string | null,
    message:
      "Olá! Vim pelo site e quero agendar uma avaliação gratuita na Odonto Plus Garavelo.",
  },

  address: {
    reference: "Exatamente em frente à Ótica Paris, piso superior da Móveis Estrela",
    street: "Av. da Igualdade, S/N",
    complement: "Quadra 118, Lote 17",
    neighborhood: "Garavelo",
    city: "Aparecida de Goiânia",
    state: "GO",
    zip: "74930-530",
  },

  maps: {
    /** Botão "Como chegar" — abre em nova aba */
    directionsUrl:
      "https://www.google.com/maps?vet=10CAAQoqAOahcKEwig74WXiq2WAxUAAAAAHQAAAAAQBQ..i&rlz=1C1VDKB_pt-PTBR1159BR1160&pvq=Cg0vZy8xMW52Mmh2Z2I2IhEKC09ET05UTyBQTFVTEAIYAw&lqi=CgtPRE9OVE8gUExVU0jG8vSn6LSAgAhaFRAAEAEYABgBIgtvZG9udG8gcGx1c5IBDWRlbnRhbF9jbGluaWM&fvr=1&cs=1&um=1&ie=UTF-8&fb=1&gl=br&sa=X&geocode=KQ-u7tR3916TMZ27boR8ZfyC&daddr=Exatamente+em+frente+a+%C3%93tica+Paris+Piso+Superior+da+M%C3%B3veis+Estrela+-+Av.+da+Igualdade,+S/N+-+Quadra+118,+Lote+17+-+Garavelo,+Aparecida+de+Goi%C3%A2nia+-+GO,+74930-530",
    /** Iframe do mapa (sempre com loading="lazy") */
    embedUrl:
      "https://www.google.com/maps?q=Odonto+Plus,+Av.+da+Igualdade,+Quadra+118,+Lote+17,+Garavelo,+Aparecida+de+Goi%C3%A2nia+-+GO,+74930-530&output=embed",
  },

  /**
   * Responsável técnico: cliente optou por NÃO exibir (decisão de 2026-08-19).
   * A linha no rodapé só renderiza se estes campos forem preenchidos.
   * Nota registrada: o Código de Ética Odontológica costuma exigir nome + CRO
   * do RT em publicidade — recomendável revisar antes de rodar anúncios.
   */
  technicalManager: {
    name: null as string | null,
    cro: null as string | null,
  },

  /** Horário confirmado pelo cliente */
  hours: "Segunda a sábado, das 7h30 às 18h · Domingo fechado" as string | null,

  /** ⚠️ Números de prova social — só renderizam quando preenchidos com dado real */
  trust: {
    yearsActive: null as number | null,
    googleRating: null as number | null,
    googleReviews: null as number | null,
  },

  /** Perfis oficiais (⚠️ Facebook pendente) */
  social: {
    instagram: "https://www.instagram.com/odontoplusgaravelo/" as string | null,
    facebook: null as string | null,
  },
} as const;

/**
 * Link de agendamento: usa WhatsApp quando o número existir; enquanto isso,
 * cai no telefone (abre o discador).
 */
export const scheduleHref: string = site.whatsapp.number
  ? `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(site.whatsapp.message)}`
  : site.phone.href;

/** Endereço em linha única, para rodapé e blocos de contato */
export const fullAddress = `${site.address.street}, ${site.address.complement}, ${site.address.neighborhood}, ${site.address.city}/${site.address.state}, CEP ${site.address.zip}`;

/** ⚠️ Enquanto site.url for null, canonical/OG/sitemap usam este placeholder */
export const SITE_URL: string = site.url ?? "https://odontoplus-garavelo.com.br";
