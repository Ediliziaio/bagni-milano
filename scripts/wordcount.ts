/** Lunghezza dei contenuti pubblicati. Serve a verificare che nessun articolo sia troppo corto. */
import { articles } from "../src/data/articles";
let tot = 0;
const rows = articles
  .map((a) => {
    const w = a.body.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
    tot += w;
    return { slug: a.slug, w };
  })
  .sort((x, y) => y.w - x.w);
rows.forEach((r) => console.log(`  ${r.w.toString().padStart(5)}  ${r.slug}${r.w < 900 ? "   ← sotto soglia" : ""}`));
console.log(`\nTotale ${tot} parole su ${articles.length} articoli — media ${Math.round(tot / articles.length)}`);
