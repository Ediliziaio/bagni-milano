/**
 * Genera public/sitemap.xml dai dati del sito.
 * Regole:
 *  - solo pagine indicizzabili (le legal sono noindex → escluse)
 *  - le schede progetto entrano solo se published: true
 *  - priorità coerente con il valore commerciale della pagina
 * Uso: npm run sitemap
 */
import { writeFileSync } from "node:fs";
import { cities, comuni } from "../src/data/cities";
import { services } from "../src/data/services";
import { articles } from "../src/data/articles";
import { blogCategories } from "../src/data/blog-categories";
import { projects } from "../src/data/projects";
import { getImage, imageForArticle, geoImage } from "../src/data/images";

const BASE = "https://www.bagnimilano.it";
const today = new Date().toISOString().split("T")[0];

interface Url { loc: string; lastmod: string; changefreq: string; priority: string; img?: string }

/** Restituisce l'immagine della pagina solo se il file esiste davvero. */
const img = (id: string) => {
  const spec = getImage(id);
  return spec?.available ? spec : undefined;
};

const urls: Url[] = [
  { loc: "/", lastmod: today, changefreq: "weekly", priority: "1.0" },
  { loc: "/ristrutturazione-bagno", lastmod: today, changefreq: "weekly", priority: "0.95" },
  { loc: "/quanto-costa-ristrutturare-bagno", lastmod: today, changefreq: "monthly", priority: "0.9" },
  { loc: "/calcolatore-costo-bagno", lastmod: today, changefreq: "monthly", priority: "0.85" },
  { loc: "/quanto-tempo-ristrutturare-bagno", lastmod: today, changefreq: "monthly", priority: "0.85" },
  { loc: "/metodo", lastmod: today, changefreq: "monthly", priority: "0.85" },
  { loc: "/chi-siamo", lastmod: today, changefreq: "monthly", priority: "0.8" },
  { loc: "/servizi", lastmod: today, changefreq: "monthly", priority: "0.8" },
  { loc: "/progetti", lastmod: today, changefreq: "monthly", priority: "0.7" },
  { loc: "/blog", lastmod: today, changefreq: "weekly", priority: "0.8" },
  { loc: "/faq", lastmod: today, changefreq: "monthly", priority: "0.75" },
  { loc: "/preventivo", lastmod: today, changefreq: "monthly", priority: "0.85" },
  { loc: "/contatti", lastmod: today, changefreq: "monthly", priority: "0.6" },

  ...cities.map((c) => ({ loc: `/ristrutturazione-bagno-${c.slug}`, lastmod: today, changefreq: "monthly", priority: "0.9", img: geoImage(c.slug, c.province) })),
  ...comuni.map((c) => ({ loc: `/ristrutturazione-bagno-${c.slug}`, lastmod: today, changefreq: "monthly", priority: "0.7", img: geoImage(c.slug, c.province) })),
  ...services.map((s) => ({ loc: `/servizi/${s.slug}`, lastmod: today, changefreq: "monthly", priority: "0.85", img: `srv-${s.slug}` })),
  ...blogCategories.map((c) => ({ loc: `/blog/categoria/${c.slug}`, lastmod: today, changefreq: "weekly", priority: "0.6" })),
  ...articles.map((a) => ({ loc: `/blog/${a.slug}`, lastmod: a.dateModified ?? a.datePublished, changefreq: "monthly", priority: "0.7", img: imageForArticle(a.slug, a.category) })),
  ...projects.filter((p) => p.published).map((p) => ({ loc: `/progetti/${p.slug}`, lastmod: today, changefreq: "yearly", priority: "0.65" })),
];

const esc = (t: string) => t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

let withImage = 0;
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls
  .map((u) => {
    const spec = u.img ? img(u.img) : undefined;
    if (spec) withImage++;
    return `  <url>
    <loc>${BASE}${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>${
      spec
        ? `
    <image:image>
      <image:loc>${BASE}/img/${spec.id}.jpg</image:loc>
      <image:title>${esc(spec.alt)}</image:title>
    </image:image>`
        : ""
    }
  </url>`;
  })
  .join("\n")}
</urlset>
`;

writeFileSync("public/sitemap.xml", xml);
console.log(`sitemap.xml: ${urls.length} URL`);
console.log(`  con immagine dichiarata: ${withImage}`);
console.log(`  geo: ${cities.length + comuni.length} · servizi: ${services.length} · articoli: ${articles.length} · progetti pubblicati: ${projects.filter((p) => p.published).length}`);
