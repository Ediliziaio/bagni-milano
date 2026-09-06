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

const BASE = "https://www.bagnimilano.it";
const today = new Date().toISOString().split("T")[0];

interface Url { loc: string; lastmod: string; changefreq: string; priority: string }

const urls: Url[] = [
  { loc: "/", lastmod: today, changefreq: "weekly", priority: "1.0" },
  { loc: "/ristrutturazione-bagno", lastmod: today, changefreq: "weekly", priority: "0.95" },
  { loc: "/quanto-costa-ristrutturare-bagno", lastmod: today, changefreq: "monthly", priority: "0.9" },
  { loc: "/quanto-tempo-ristrutturare-bagno", lastmod: today, changefreq: "monthly", priority: "0.85" },
  { loc: "/metodo", lastmod: today, changefreq: "monthly", priority: "0.8" },
  { loc: "/chi-siamo", lastmod: today, changefreq: "monthly", priority: "0.8" },
  { loc: "/servizi", lastmod: today, changefreq: "monthly", priority: "0.8" },
  { loc: "/progetti", lastmod: today, changefreq: "monthly", priority: "0.7" },
  { loc: "/blog", lastmod: today, changefreq: "weekly", priority: "0.8" },
  { loc: "/faq", lastmod: today, changefreq: "monthly", priority: "0.75" },
  { loc: "/preventivo", lastmod: today, changefreq: "monthly", priority: "0.85" },
  { loc: "/contatti", lastmod: today, changefreq: "monthly", priority: "0.6" },

  ...cities.map((c) => ({ loc: `/ristrutturazione-bagno-${c.slug}`, lastmod: today, changefreq: "monthly", priority: "0.9" })),
  ...comuni.map((c) => ({ loc: `/ristrutturazione-bagno-${c.slug}`, lastmod: today, changefreq: "monthly", priority: "0.7" })),
  ...services.map((s) => ({ loc: `/servizi/${s.slug}`, lastmod: today, changefreq: "monthly", priority: "0.85" })),
  ...blogCategories.map((c) => ({ loc: `/blog/categoria/${c.slug}`, lastmod: today, changefreq: "weekly", priority: "0.6" })),
  ...articles.map((a) => ({ loc: `/blog/${a.slug}`, lastmod: a.dateModified ?? a.datePublished, changefreq: "monthly", priority: "0.7" })),
  ...projects.filter((p) => p.published).map((p) => ({ loc: `/progetti/${p.slug}`, lastmod: today, changefreq: "yearly", priority: "0.65" })),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${BASE}${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

writeFileSync("public/sitemap.xml", xml);
console.log(`sitemap.xml: ${urls.length} URL`);
console.log(`  geo: ${cities.length + comuni.length} · servizi: ${services.length} · articoli: ${articles.length} · progetti pubblicati: ${projects.filter((p) => p.published).length}`);
