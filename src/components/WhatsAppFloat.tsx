import { site, scheduleHref } from "@/lib/site";
import { WhatsAppIcon } from "@/components/Icons";

/**
 * Botão flutuante de WhatsApp — SÓ renderiza quando site.whatsapp.number
 * existir em src/lib/site.ts. Nenhuma outra mudança é necessária.
 */
export function WhatsAppFloat() {
  if (!site.whatsapp.number) return null;

  return (
    <a
      className="wa-float"
      href={scheduleHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar pelo WhatsApp"
    >
      <WhatsAppIcon />
    </a>
  );
}
