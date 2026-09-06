/**
 * Genera public/feed.xml dagli articoli pubblicati.
 * Un feed è un canale di scoperta che non dipende dalla frequenza di scansione:
 * aggregatori, lettori e alcuni crawler lo consumano direttamente.
 * Uso: npm run feed
 */
import { writeFileSync } from "node:fs";
import { articles } from "../src/data/articles";
import { blogCategories } from "../src/data/blog-categories";

const BASE = "https://www.bagnimilano.it";
const esc = (t: string) =>
  t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const sorted = [...articles].sort(
  (a, b) => +new Date(b.dateModified ?? b.datePublished) - +new Date(a.dateModified ?? a.datePublished)
);

const items = sorted
  .map((a) => {
    const cat = blogCategories.find((c) => c.slug === a.category)?.name ?? a.category;
    return `    <item>
      <title>${esc(a.title)}</title>
      <link>${BASE}/blog/${a.slug}</link>
      <guid isPermaLink="true">${BASE}/blog/${a.slug}</guid>
      <pubDate>${new Date(a.datePublished).toUTCString()}</pubDate>
      <category>${esc(cat)}</category>
      <description>${esc(a.answer)}</description>
    </item>`;
  })
  .join("\n");

writeFileSync(
  "public/feed.xml",
  `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Bagni Milano — Guide sulla ristrutturazione del bagno</title>
    <link>${BASE}/blog</link>
    <description>Guide pratiche su costi, progettazione, materiali, problemi e normative della ristrutturazione bagno.</description>
    <language>it-IT</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${BASE}/feed.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`
);
console.log(`feed.xml: ${articles.length} articoli`);
