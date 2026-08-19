/**
 * TODA a copy repetível da página (listas, cards, FAQ) vive aqui.
 * Textos aprovados no briefing — não reescrever sem aprovação.
 */
import type { StaticImageData } from "next/image";

import imgImplantes from "@/images/tratamentos/implantes.webp";
import imgCanal from "@/images/tratamentos/canal.webp";
import imgFacetas from "@/images/tratamentos/facetas.webp";
import imgRestauracoes from "@/images/tratamentos/restauracoes.webp";
import imgCoroas from "@/images/tratamentos/coroas.webp";

/* ---------------------------------------------------------------- HERÓI */

export const heroBullets = [
  {
    strong: "Avaliação e raio-X gratuitos",
    text: "você entende seu caso antes de decidir qualquer coisa",
  },
  {
    strong: "Orçamento fechado na hora",
    text: "o valor combinado é o valor final, do começo ao fim",
  },
  {
    strong: "Condições facilitadas",
    text: "parcelamento definido junto com você",
  },
];

/* --------------------------------------------------------- DIFERENCIAIS */

export type Differential = {
  icon: "contract" | "shield" | "heart" | "layers" | "wallet" | "sparkle";
  title: string;
  text: string;
};

export const differentials: Differential[] = [
  {
    icon: "contract",
    title: "Orçamento fechado por escrito",
    text: "Você recebe o valor completo antes de qualquer procedimento começar. O que combinamos é o que você paga — sem custo que aparece no meio do caminho.",
  },
  {
    icon: "shield",
    title: "Feito para durar, não para refazer",
    text: "Materiais com procedência, tempo de cadeira adequado e profissionais com CRO ativo. O tratamento certo é o que você faz uma vez só.",
  },
  {
    icon: "heart",
    title: "Atendimento sem julgamento",
    text: "Se você tem medo de dentista ou está há anos sem ir, você não é exceção — é a maioria. Aqui o ritmo é o seu, e cada passo é explicado antes.",
  },
  {
    icon: "layers",
    title: "Tudo em um lugar só",
    text: "Da restauração ao implante, com a mesma equipe acompanhando o seu caso. Você não precisa rodar Aparecida atrás de especialista.",
  },
  {
    icon: "wallet",
    title: "Condições que cabem no mês",
    text: "Formas de pagamento facilitadas e parcelamento definido junto com você na avaliação, de acordo com o seu orçamento.",
  },
  {
    icon: "sparkle",
    title: "Estrutura nova no Garavelo",
    text: "Unidade recém-inaugurada, com equipamentos modernos e protocolo de biossegurança — no seu bairro, sem deslocamento até o centro.",
  },
];

/* ------------------------------------------------- QUEBRA DA OBJEÇÃO */

export const comparison = {
  us: {
    title: "Como trabalhamos",
    items: [
      "Orçamento fechado antes de começar",
      "Materiais com procedência e garantia",
      "Profissionais com CRO ativo",
      "Tempo de consulta adequado ao procedimento",
      "Plano de tratamento explicado e por escrito",
    ],
  },
  them: {
    title: "O que costuma vir junto do “bom demais”",
    items: [
      "Valor que muda no meio do tratamento",
      "Material sem rastreabilidade",
      "Quem estiver disponível no dia",
      "Atendimento cronometrado",
      "Combinado só de boca",
    ],
  },
};

/* ------------------------------------------------------- COMO FUNCIONA */

export const steps = [
  {
    title: "Você entra em contato",
    text: "Conta rapidamente o que está sentindo ou o que gostaria de resolver. Nossa recepção responde e já encaixa você em um horário disponível.",
  },
  {
    title: "Avaliação completa com raio-X",
    text: "O dentista examina, faz o raio-X e explica em linguagem simples o que existe, o que é urgente e o que pode esperar com segurança.",
  },
  {
    title: "Plano e valor na mesma consulta",
    text: "Você sai com o tratamento organizado por prioridade e o orçamento fechado em mãos. Decide com calma — e, se quiser, já começa.",
  },
];

/* --------------------------------------------------------- TRATAMENTOS */

export type Treatment = {
  name: string;
  text: string;
  /** Foto gerada/real; `null` renderiza o placeholder tratado com a marca */
  image: StaticImageData | null;
  imageAlt: string;
};

export const treatments: Treatment[] = [
  {
    name: "Implantes dentários",
    text: "O dente de volta no lugar: fixo, firme e com aparência natural. Você volta a mastigar e a sorrir sem precisar pensar nisso.",
    image: imgImplantes,
    imageAlt: "Modelo de implante dentário de titânio com coroa de cerâmica",
  },
  {
    name: "Próteses tradicionais e flex",
    text: "Feitas sob medida para o seu caso, com encaixe confortável e acabamento natural. Nada de prótese que machuca ou solta na hora errada.",
    image: null, // ⚠️ foto pendente de geração — placeholder da marca enquanto isso
    imageAlt: "Prótese dentária flexível sobre bandeja clínica",
  },
  {
    name: "Tratamento de canal",
    text: "Salva o dente que parecia perdido e resolve a dor. Feito com calma, anestesia bem aplicada e explicação de cada etapa.",
    image: imgCanal,
    imageAlt: "Modelo anatômico de dente em corte com instrumentos de canal",
  },
  {
    name: "Facetas",
    text: "Correção de forma, cor e alinhamento do sorriso, planejada caso a caso para um resultado harmônico e proporcional ao seu rosto.",
    image: imgFacetas,
    imageAlt: "Escala de cor de facetas sendo comparada ao sorriso de um paciente",
  },
  {
    name: "Clareamento dental",
    text: "Procedimento seguro, feito com acompanhamento profissional e atenção à sensibilidade — sem receita caseira e sem improviso.",
    image: null, // ⚠️ foto pendente de geração — placeholder da marca enquanto isso
    imageAlt: "Escala de clareamento ao lado de um sorriso branco",
  },
  {
    name: "Restaurações",
    text: "Resolve a cárie enquanto ela ainda é simples, antes de virar canal. Material com procedência e acabamento que não marca o dente.",
    image: imgRestauracoes,
    imageAlt: "Fotopolimerizador com luz azul durante restauração em resina",
  },
  {
    name: "Coroas e blocos",
    text: "Reconstrução do dente muito danificado, devolvendo resistência para mastigar normalmente e proteger o que restou da estrutura.",
    image: imgCoroas,
    imageAlt: "Coroa de cerâmica segurada com pinça odontológica",
  },
  {
    name: "Extrações",
    text: "Quando é realmente necessário, feita com técnica e cuidado — e sempre com orientação clara sobre o pós-operatório e a reposição.",
    image: null, // ⚠️ foto pendente de geração — placeholder da marca enquanto isso
    imageAlt: "Instrumentos cirúrgicos esterilizados organizados em bandeja",
  },
  {
    name: "Gengivoplastia",
    text: "Correção do contorno gengival para harmonizar o sorriso, indicada após avaliação individual de cada caso.",
    image: null, // ⚠️ foto pendente de geração — placeholder da marca enquanto isso
    imageAlt: "Sorriso saudável com contorno gengival harmônico",
  },
  {
    name: "Frenectomia",
    text: "Procedimento simples que corrige o freio labial ou lingual, com impacto direto na fala, na amamentação e no espaçamento dos dentes.",
    image: null, // ⚠️ foto pendente de geração — placeholder da marca enquanto isso
    imageAlt: "Exame do freio labial com espelho odontológico",
  },
];

/* ------------------------------------------------------------ A CLÍNICA */

export const clinicParagraphs = [
  "Começamos pequeno, em uma unidade só. Deu certo pelo motivo mais simples que existe em bairro: paciente satisfeito indica, e indicação puxa indicação.",
  "Viramos a Odonto Plus no Centro de Aparecida. Em 2025 abrimos a unidade da Cidade Livre. E agora estamos aqui, no Garavelo, porque é onde muitos dos nossos pacientes já moram — e ninguém deveria atravessar a cidade para cuidar dos dentes.",
  "A estrutura é nova. A equipe e o padrão de atendimento são os mesmos que já funcionam há anos nas outras unidades.",
];

/**
 * ⚠️ CONFIRMAR COM O CLIENTE cada item desta lista antes de publicar —
 * são afirmações factuais sobre a estrutura.
 */
export const clinicChecklist = [
  "Consultórios novos e equipamentos modernos",
  "Raio-X digital feito na própria clínica",
  "Protocolo de biossegurança e esterilização",
  "Equipe com registro ativo no CRO-GO",
];

/* ---------------------------------------------------------- DEPOIMENTOS */

export type Testimonial = {
  quote: string;
  name: string;
  procedure: string;
  /** 1 a 5 */
  stars: number;
};

/**
 * ⚠️ NÃO INVENTAR DEPOIMENTOS. A seção só renderiza quando esta lista
 * tiver depoimentos REAIS, autorizados pelos pacientes.
 * Preencha assim:
 * { quote: "Texto do depoimento…", name: "Nome do paciente", procedure: "Implante", stars: 5 },
 */
export const testimonials: Testimonial[] = [];

/* ------------------------------------------------------------------ FAQ */

export const faqs = [
  {
    q: "Quanto custa o tratamento que eu preciso?",
    a: "Depende do que o exame mostrar — e preferimos não estimar valor por telefone, porque estimativa vira frustração depois. O que garantimos é isto: na avaliação você recebe o valor exato, fechado e por escrito, antes de qualquer procedimento começar.",
  },
  {
    q: "A avaliação é gratuita mesmo?",
    a: "Sim: exame clínico, raio-X e orçamento, sem custo e sem compromisso. Se decidir não seguir com o tratamento, você leva o diagnóstico com você e não fica devendo nada.",
  },
  {
    q: "Vocês parcelam o tratamento?",
    a: "Sim. Trabalhamos com formas de pagamento facilitadas, e a parcela é definida junto com você durante a avaliação, de acordo com o seu orçamento.",
  },
  {
    q: "Tenho medo de dentista. Como funciona aí?",
    a: "Você não é exceção — a maioria dos nossos pacientes chega assim. Trabalhamos com anestesia bem aplicada, ritmo respeitado e explicação de cada passo antes de fazer. Você pode pedir uma pausa a qualquer momento, sem constrangimento.",
  },
  {
    q: "Estou com dor agora. Consigo atendimento hoje?",
    a: "Entre em contato e avise que está com dor. Priorizamos casos de dor na agenda do dia sempre que houver horário disponível.",
  },
  {
    q: "Qual é o horário de atendimento?",
    a: "De segunda a sábado, das 7h30 às 18h. Aos domingos a clínica não abre. Se preferir, chame no WhatsApp e a recepção já encaixa você no melhor horário disponível.",
  },
  {
    q: "Onde fica exatamente a clínica?",
    a: "Na Av. da Igualdade, Quadra 118, Lote 17, no Garavelo — exatamente em frente à Ótica Paris, no piso superior da Móveis Estrela. Na seção de localização há o mapa e o botão “Como chegar” com a rota pronta.",
  },
  // ⚠️ FALTAM 2 PERGUNTAS que dependem de confirmação do cliente:
  //   1. Convênios aceitos (quais? ou "não trabalhamos com convênios"?)
  //   2. Atendem crianças?
];

/* ------------------------------------------------------------ NAVEGAÇÃO */

export const navLinks = [
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Serviços", href: "#servicos" },
  { label: "A clínica", href: "#clinica" },
  { label: "Localização", href: "#localizacao" },
  { label: "Dúvidas", href: "#duvidas" },
];
