/**
 * Ícones SVG inline da página — traço 2px, estilo coerente com a marca.
 * Todos decorativos por padrão (aria-hidden); o texto ao lado dá o contexto.
 */
import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function base({ size = 20, ...props }: IconProps): SVGProps<SVGSVGElement> {
  return {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
    focusable: false,
    ...props,
  };
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base({ size: 14, ...props })}>
      <path d="M4 12.5 9.5 18 20 6.5" />
    </svg>
  );
}

export function XMarkIcon(props: IconProps) {
  return (
    <svg {...base({ size: 14, ...props })}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.13.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.45c.9.34 1.84.57 2.8.7A2 2 0 0 1 22 16.9Z" />
    </svg>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...base({ size: 24, ...props })}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...base({ size: 24, ...props })}>
      <path d="M5 5l14 14M19 5L5 19" />
    </svg>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <svg {...base({ size: 16, fill: "currentColor", stroke: "none", ...props })}>
      <path d="M12 2.5l2.9 5.9 6.6 1-4.7 4.6 1.1 6.5L12 17.4l-5.9 3.1 1.1-6.5L2.5 9.4l6.6-1L12 2.5Z" />
    </svg>
  );
}

export function ToothIcon(props: IconProps) {
  return (
    <svg {...base({ size: 40, ...props })}>
      <path d="M12 5.5C10.6 4.3 8.9 3.5 7.2 3.5 4.5 3.5 2.5 5.7 2.5 8.6c0 4.6 2.2 8.3 3.6 11.2.5 1 1.9.8 2.2-.3l1-4.1c.4-1.5 2.9-1.5 3.3 0l1 4.1c.3 1.1 1.7 1.3 2.2.3 1.5-2.9 3.6-6.6 3.6-11.2 0-2.9-2-5.1-4.7-5.1-1.6 0-3.3.8-4.7 2Z" />
    </svg>
  );
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg {...base({ size: 28, fill: "currentColor", stroke: "none", ...props })}>
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4 0-.6.2-.8l.4-.5c.1-.2.1-.3 0-.5-.1-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.1s.9 2.4 1.1 2.6c.1.2 1.8 2.8 4.4 3.9.6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.2-.2-.4-.3Z" />
    </svg>
  );
}

export function BuildingIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M9 7h1.5M13.5 7H15M9 11h1.5M13.5 11H15M9 15h1.5M13.5 15H15M10 21v-3h4v3" />
    </svg>
  );
}

export function BadgeCheckIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 2.7 14.4 5l3.3-.4.5 3.2 2.9 1.6-1.5 2.9 1.5 2.9-2.9 1.6-.5 3.2-3.3-.4L12 22l-2.4-2.4-3.3.4-.5-3.2-2.9-1.6 1.5-2.9-1.5-2.9 2.9-1.6.5-3.2 3.3.4L12 2.7Z" />
      <path d="m8.7 12.3 2.2 2.2 4.4-4.6" />
    </svg>
  );
}

/* --- Ícones dos 6 diferenciais --- */

export function ContractIcon(props: IconProps) {
  return (
    <svg {...base({ size: 24, ...props })}>
      <path d="M14 2.5H7a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7.5l-5-5Z" />
      <path d="M14 2.5v5h5" />
      <path d="m8.8 14.6 2 2 4.4-4.5" />
    </svg>
  );
}

export function ShieldCheckIcon(props: IconProps) {
  return (
    <svg {...base({ size: 24, ...props })}>
      <path d="M12 2.5 4.5 5.4v6.1c0 4.6 3.2 8 7.5 9.9 4.3-1.9 7.5-5.3 7.5-9.9V5.4L12 2.5Z" />
      <path d="m8.7 12 2.2 2.2 4.4-4.5" />
    </svg>
  );
}

export function HeartHandIcon(props: IconProps) {
  return (
    <svg {...base({ size: 24, ...props })}>
      <path d="M12 20.5s-7.5-4.7-9.3-9.2C1.5 8.2 3.2 5.5 6 5.5c1.9 0 3.4 1 4.4 2.4L12 9.7l1.6-1.8c1-1.4 2.5-2.4 4.4-2.4 2.8 0 4.5 2.7 3.3 5.8-1.8 4.5-9.3 9.2-9.3 9.2Z" />
    </svg>
  );
}

export function LayersIcon(props: IconProps) {
  return (
    <svg {...base({ size: 24, ...props })}>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 12.5 9 5 9-5" />
      <path d="m3 17 9 5 9-5" />
    </svg>
  );
}

export function WalletIcon(props: IconProps) {
  return (
    <svg {...base({ size: 24, ...props })}>
      <path d="M20 7H5a2 2 0 0 1 0-4h13v4" />
      <path d="M3 5v13a3 3 0 0 0 3 3h14a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1" />
      <circle cx="16.5" cy="14" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function SparkleIcon(props: IconProps) {
  return (
    <svg {...base({ size: 24, ...props })}>
      <path d="M12 3v0c.6 3.9 2 6.6 3.5 8 1.5 1.4 3 2.1 5.5 2.5v0c-2.5.4-4 1.1-5.5 2.5-1.5 1.4-2.9 4.1-3.5 8v0c-.6-3.9-2-6.6-3.5-8C7 14.6 5.5 13.9 3 13.5v0c2.5-.4 4-1.1 5.5-2.5C10 9.6 11.4 6.9 12 3Z" />
    </svg>
  );
}

export function ArrowUpRightIcon(props: IconProps) {
  return (
    <svg {...base({ size: 18, ...props })}>
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}
