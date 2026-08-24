/* window.dataLayer (GTM) — antes vinha das tipagens do @next/third-parties */
interface Window {
  dataLayer: Record<string, unknown>[];
}
