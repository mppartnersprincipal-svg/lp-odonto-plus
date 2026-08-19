import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Differentials } from "@/components/Differentials";
import { ObjectionBreak } from "@/components/ObjectionBreak";
import { HowItWorks } from "@/components/HowItWorks";
import { Treatments } from "@/components/Treatments";
import { Clinic } from "@/components/Clinic";
import { Testimonials } from "@/components/Testimonials";
import { Location } from "@/components/Location";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { StickyCta } from "@/components/StickyCta";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Header />
      <main id="conteudo">
        <Hero />
        <TrustBar />
        <Differentials />
        <ObjectionBreak />
        <HowItWorks />
        <Treatments />
        <Clinic />
        {/* Depoimentos: oculta sozinha enquanto não houver depoimento real (ver content.ts) */}
        <Testimonials />
        <Location />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <StickyCta />
      <WhatsAppFloat />
      <ScrollReveal />
    </>
  );
}
