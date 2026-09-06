/**
 * Gate di qualità sull'output generato. Va eseguito DOPO `npm run build`.
 * Fallisce con exit code 1 se una regola SEO strutturale è violata:
 * è la rete di sicurezza contro le regressioni silenziose.
 *
 * Uso: npm run check
 */
import { readFileSync, readdirSync, existsSync } from "node:fs";
import path from "node:path";

const DIST = "dist";
const BASE = "https://www.bagnimilano.it";

const errors: string[] = [];
const warnings: string[] = [];
/** Pagine con placeholder visibili: aggregate in una riga sola, non una per pagina. */
const placeholderPages: string[] = [];

const walk = (dir: string): string[] =>
  readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? walk(path.join(dir, e.name)) : e.name === "index.html" ? [path.join(dir, e.name)] : []
  );

if (!existsSync(DIST)) {
  console.error("dist/ non esiste. Esegui prima: npm run build");
  process.exit(1);
}

const pages = walk(DIST);
const titles = new Map<string, string[]>();
const descriptions = new Map<string, string[]>();

for (const file of pages) {
  const html = readFileSync(file, "utf-8");
  const route = "/" + path.relative(DIST, path.dirname(file)).replace(/\\/g, "/");
  const at = (msg: string) => `${route === "/." ? "/" : route}: ${msg}`;

  // 1. Un solo H1 per pagina.
  const h1 = (html.match(/<h1[\s>]/g) || []).length;
  if (h1 === 0) errors.push(at("nessun <h1>"));
  if (h1 > 1) errors.push(at(`${h1} tag <h1> (deve essere uno)`));

  // 2. Title presente, unico e di lunghezza ragionevole.
  const title = (html.match(/<title>([^<]*)<\/title>/) || [])[1];
  if (!title) errors.push(at("nessun <title>"));
  else {
    titles.set(title, [...(titles.get(title) || []), route]);
    if (title.length > 65) warnings.push(at(`title di ${title.length} caratteri (verrà troncato in SERP)`));
  }

  // 3. Meta description presente e unica.
  const desc = (html.match(/<meta name="description" content="([^"]*)"/) || [])[1];
  if (!desc) errors.push(at("nessuna meta description"));
  else {
    descriptions.set(desc, [...(descriptions.get(desc) || []), route]);
    if (desc.length > 160) warnings.push(at(`description di ${desc.length} caratteri`));
  }

  // 4. Canonical assoluto e coerente con il percorso del file.
  const canonical = (html.match(/<link rel="canonical" href="([^"]*)"/) || [])[1];
  if (!canonical) errors.push(at("nessun canonical"));
  else if (!canonical.startsWith(BASE)) errors.push(at(`canonical non assoluto: ${canonical}`));
  else {
    const expected = route === "/." ? BASE + "/" : BASE + route;
    if (canonical !== expected && canonical !== expected.replace(/\/$/, ""))
      errors.push(at(`canonical incoerente: atteso ${expected}, trovato ${canonical}`));
  }

  // 5. Esattamente un blocco JSON-LD, valido, con @graph.
  const blocks = [...html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)];
  if (blocks.length === 0) errors.push(at("nessun JSON-LD"));
  else if (blocks.length > 1) errors.push(at(`${blocks.length} blocchi JSON-LD (grafi sovrapposti)`));
  else {
    try {
      const parsed = JSON.parse(blocks[0][1]);
      if (!parsed["@graph"]) errors.push(at("JSON-LD senza @graph"));
      // Nessun rating aggregato finché non esistono recensioni verificate.
      if (JSON.stringify(parsed).includes("aggregateRating"))
        errors.push(at("aggregateRating presente senza recensioni verificate"));
    } catch (e) {
      errors.push(at(`JSON-LD non parsabile: ${(e as Error).message}`));
    }
  }

  // 6. lang italiano.
  if (!/<html[^>]*\slang="it"/.test(html)) errors.push(at('attributo lang="it" mancante'));

  // 7. Nessun placeholder interno finito nel testo visibile della pagina.
  const body = (html.match(/<body[\s\S]*<\/body>/) || [""])[0];
  if (body.includes("TODO_AZIENDA")) placeholderPages.push(route);
}

// 8. Title e description devono essere unici sull'intero sito.
for (const [t, routes] of titles) if (routes.length > 1) errors.push(`title duplicato "${t}" su: ${routes.join(", ")}`);
for (const [d, routes] of descriptions) if (routes.length > 1) errors.push(`description duplicata su: ${routes.join(", ")}`);

// 8b. Nessun articolo sotto le 900 parole: sotto quella soglia il contenuto non è esaustivo.
import("../src/data/articles").then(({ articles }) => {
  articles.forEach((a) => {
    const w = a.body.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
    if (w < 900) warnings.push(`articolo troppo corto: ${a.slug} (${w} parole)`);
  });
}).catch(() => {});

// 9. Ogni asset referenziato da meta o schema deve esistere.
for (const asset of ["og-image.png", "logo.png", "icon-192.png", "icon-512.png", "apple-touch-icon.png", "favicon.svg", "robots.txt", "sitemap.xml", "llms.txt", "site.webmanifest", "feed.xml"])
  if (!existsSync(path.join(DIST, asset))) errors.push(`asset mancante in dist/: ${asset}`);

// 10. Ogni URL della sitemap deve avere una pagina prerenderizzata.
const sitemap = readFileSync("public/sitemap.xml", "utf-8");
const locs = [...sitemap.matchAll(/<loc>([^<]*)<\/loc>/g)].map((m) => m[1].replace(BASE, "") || "/");
for (const loc of locs) {
  const f = loc === "/" ? path.join(DIST, "index.html") : path.join(DIST, loc.slice(1), "index.html");
  if (!existsSync(f)) errors.push(`URL in sitemap senza pagina prerenderizzata: ${loc}`);
}

// 11. La shell SPA per il rewrite catch-all non deve contenere la homepage.
const shell = path.join(DIST, "spa.html");
if (!existsSync(shell)) errors.push("dist/spa.html mancante: il rewrite catch-all servirebbe la home (soft 404)");
else if (readFileSync(shell, "utf-8").includes("Ristrutturazione bagno a Milano, chiavi in mano"))
  errors.push("dist/spa.html contiene la homepage: gli URL inesistenti restituirebbero un soft 404");

console.log(`\nPagine controllate: ${pages.length}   URL in sitemap: ${locs.length}`);

if (placeholderPages.length) {
  console.log(
    `\nPlaceholder TODO_AZIENDA visibili su ${placeholderPages.length}/${pages.length} pagine ` +
    `— atteso finché i dati non sono validati (vedi docs/00-DATI-DA-VALIDARE.md).`
  );
}
if (warnings.length) {
  console.log(`\nAvvisi (${warnings.length}):`);
  warnings.slice(0, 15).forEach((w) => console.log(`  · ${w}`));
  if (warnings.length > 15) console.log(`  · … e altri ${warnings.length - 15}`);
}
if (errors.length) {
  console.error(`\nErrori (${errors.length}):`);
  errors.forEach((e) => console.error(`  ✗ ${e}`));
  process.exit(1);
}
console.log("\n✓ Tutti i controlli superati\n");
