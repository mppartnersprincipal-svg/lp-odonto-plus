import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Evita que um lockfile solto fora do projeto confunda o file tracing
  outputFileTracingRoot: path.join(__dirname),
  images: {
    formats: ["image/avif", "image/webp"],
    /* Menos larguras => srcset ~40% menor em cada <img> (9 imagens => ~6 KB de HTML a menos) */
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [96, 128, 256, 384],
  },
  experimental: {
    /* CSS crítico inline no HTML: elimina a requisição render-blocking do .css
       (no 4G ela custava ~350 ms disputando banda com fontes e imagens) */
    inlineCss: true,
  },
};

export default nextConfig;
