/**
 * Pipeline de imagens: converte/redimensiona as fotos da marca para o tamanho
 * real de exibição (WebP), gera OG image e favicon.
 * Rodar da raiz do projeto: `node scripts/prepare-images.mjs`
 */
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const BRAND = path.resolve(ROOT, "..");
const OUT = path.join(ROOT, "src", "images");
const TREAT = path.join(OUT, "tratamentos");
const PUB = path.join(ROOT, "public");

await mkdir(TREAT, { recursive: true });
await mkdir(path.join(ROOT, "src", "app"), { recursive: true });

const jobs = [];

function resizeWebp(src, dest, width, quality = 80) {
  jobs.push(
    sharp(src)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality })
      .toFile(dest)
      .then((i) => console.log(`ok ${path.basename(dest)} ${i.width}x${i.height} ${(i.size / 1024).toFixed(0)}KB`)),
  );
}

// Fotos reais da clínica
resizeWebp(path.join(BRAND, "Fotos", "Fachada.webp"), path.join(OUT, "fachada.webp"), 1600);
resizeWebp(path.join(BRAND, "Fotos", "Recepção.webp"), path.join(OUT, "recepcao.webp"), 900);
resizeWebp(path.join(BRAND, "Fotos", "Consultório.webp"), path.join(OUT, "consultorio.webp"), 900);

// Logo (versão 280px do Design System, já otimizada para header/footer)
jobs.push(
  sharp(path.join(BRAND, "Design system Odonto Plus", "assets", "logo-sm.png"))
    .png()
    .toFile(path.join(OUT, "logo.png"))
    .then((i) => console.log(`ok logo.png ${i.width}x${i.height}`)),
);

// OG image 1200x630 a partir da fachada
jobs.push(
  sharp(path.join(BRAND, "Fotos", "Fachada.webp"))
    .resize(1200, 630, { fit: "cover" })
    .jpeg({ quality: 80 })
    .toFile(path.join(PUB, "og.jpg"))
    .then(() => console.log("ok og.jpg 1200x630")),
);

// Favicon a partir da logo original
jobs.push(
  sharp(path.join(BRAND, "Logo", "Logo.png"))
    .trim()
    .resize(512, 512, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(ROOT, "src", "app", "icon.png"))
    .then(() => console.log("ok icon.png 512x512")),
);

// Fotos de tratamento geradas (Higgsfield, kling_omni_image) — baixa e
// converte para WebP 800px. Todas as 10 geradas.
const generated = {
  "proteses.webp":
    "https://d8j0ntlcm91z4.cloudfront.net/user_3DH330Cmq84IorPlYzhryke2j9L/hf_20260820_142042_0207cb9e-923a-430e-b99c-92aab573403b.png",
  "clareamento.webp":
    "https://d8j0ntlcm91z4.cloudfront.net/user_3DH330Cmq84IorPlYzhryke2j9L/hf_20260820_142042_cff5d67f-ec45-4b5f-9eb0-852fc2d7014c.png",
  "extracoes.webp":
    "https://d8j0ntlcm91z4.cloudfront.net/user_3DH330Cmq84IorPlYzhryke2j9L/hf_20260820_142042_4a49aade-91f6-494c-9774-a316850c6ab5.png",
  "gengivoplastia.webp":
    "https://d8j0ntlcm91z4.cloudfront.net/user_3DH330Cmq84IorPlYzhryke2j9L/hf_20260820_142042_c01ce7fd-c150-4cd0-a21c-eee47d92de59.png",
  "frenectomia.webp":
    "https://d8j0ntlcm91z4.cloudfront.net/user_3DH330Cmq84IorPlYzhryke2j9L/hf_20260820_142042_e99668eb-3580-4177-82a2-686021d845d1.png",
  "implantes.webp":
    "https://d8j0ntlcm91z4.cloudfront.net/user_3DH330Cmq84IorPlYzhryke2j9L/hf_20260819_180547_b14a4990-8d4c-479e-a472-cace24badaf7.png",
  "canal.webp":
    "https://d8j0ntlcm91z4.cloudfront.net/user_3DH330Cmq84IorPlYzhryke2j9L/hf_20260819_180547_58495f3c-4c2a-4a7d-b1f2-5f517b5783bd.png",
  "facetas.webp":
    "https://d8j0ntlcm91z4.cloudfront.net/user_3DH330Cmq84IorPlYzhryke2j9L/hf_20260819_180547_5a913861-6148-4a2c-9f8c-8a9844bd4bfa.png",
  "restauracoes.webp":
    "https://d8j0ntlcm91z4.cloudfront.net/user_3DH330Cmq84IorPlYzhryke2j9L/hf_20260819_180547_2c332b35-f43a-4a38-b733-00a2703cbe71.png",
  "coroas.webp":
    "https://d8j0ntlcm91z4.cloudfront.net/user_3DH330Cmq84IorPlYzhryke2j9L/hf_20260819_180547_24acfb9e-212c-4b1d-b65a-c8af259d5f6d.png",
};

for (const [name, url] of Object.entries(generated)) {
  jobs.push(
    fetch(url)
      .then((r) => {
        if (!r.ok) throw new Error(`${name}: HTTP ${r.status}`);
        return r.arrayBuffer();
      })
      .then((buf) =>
        sharp(Buffer.from(buf))
          .resize({ width: 800, withoutEnlargement: true })
          .webp({ quality: 80 })
          .toFile(path.join(TREAT, name)),
      )
      .then((i) => console.log(`ok tratamentos/${name} ${i.width}x${i.height} ${(i.size / 1024).toFixed(0)}KB`)),
  );
}

await Promise.all(jobs);
console.log("Imagens prontas.");
