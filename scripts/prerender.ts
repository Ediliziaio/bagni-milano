/**
 * Prerendering statico post-build (SSG).
 *
 * Perché: <Seo /> imposta title, meta, canonical e JSON-LD lato client. Senza
 * prerender, chi legge l'HTML grezzo — inclusi diversi crawler generativi, che
 * non eseguono JavaScript — vede una pagina vuota.
 *
 * Cosa fa:
 *  1. copia la shell SPA in dist/spa.html (destinazione del rewrite catch-all,
 *     così un URL inesistente non serve l'HTML della homepage → niente soft 404)
 *  2. apre ogni URL della sitemap in Chromium headless
 *  3. salva l'HTML renderizzato in dist/<route>/index.html
 *
 * Uso: npm run prerender (eseguito automaticamente da postbuild)
 */
import puppeteer, { Browser } from "puppeteer";
import sirv from "sirv";
import http from "node:http";
import { readFileSync, writeFileSync, mkdirSync, copyFileSync } from "node:fs";
import path from "node:path";

const DIST = path.resolve("dist");
const CONCURRENCY = 3;
const PAGE_TIMEOUT = 30_000;

/** Rotte indicizzabili (sitemap) + rotte noindex che devono comunque esistere come file. */
function routes(): string[] {
  const sitemap = readFileSync("public/sitemap.xml", "utf-8");
  const fromSitemap = [...sitemap.matchAll(/<loc>https:\/\/www\.bagnimilano\.it([^<]*)<\/loc>/g)]
    .map((m) => m[1] || "/");
  return Array.from(new Set([...fromSitemap, "/privacy-policy", "/cookie-policy"]));
}

async function findFreePort(start: number): Promise<number> {
  for (let port = start; port < start + 30; port++) {
    const free = await new Promise<boolean>((resolve) => {
      const srv = http.createServer();
      srv.once("error", () => resolve(false));
      srv.once("listening", () => { srv.close(); resolve(true); });
      srv.listen(port);
    });
    if (free) return port;
  }
  throw new Error("Nessuna porta libera disponibile");
}

async function render(browser: Browser, url: string, port: number) {
  const page = await browser.newPage();
  try {
    await page.setViewport({ width: 1280, height: 900 });
    // I font esterni non cambiano l'HTML prodotto e possono bloccare il render.
    await page.setRequestInterception(true);
    page.on("request", (req) => {
      const u = req.url();
      if (u.startsWith("http://localhost:")) req.continue();
      else req.abort().catch(() => {});
    });
    await page.goto(`http://localhost:${port}${url}`, { waitUntil: "domcontentloaded", timeout: PAGE_TIMEOUT });
    await page.waitForFunction(
      () => {
        const root = document.getElementById("root");
        return !!root && root.innerHTML.length > 800 && !!document.querySelector("h1");
      },
      { timeout: 20_000, polling: 250 }
    );
    // Lascia a <Seo /> il tempo di scrivere title/meta/JSON-LD.
    await new Promise((r) => setTimeout(r, 250));

    // Rimuove lo stato iniziale delle animazioni: l'HTML statico non deve mai
    // contenere contenuto a opacity 0, né per i crawler né per chi ha JS disattivato.
    await page.evaluate(() => {
      document.documentElement.classList.remove("js-reveal");
      document.querySelectorAll("[data-reveal]").forEach((el) => el.classList.add("is-in"));
    });

    let html = await page.content();
    html = html.replace(/https?:\/\/localhost:\d+\//g, "/");
    // Non si scrive su disco adesso: sovrascrivere dist/index.html mentre il
    // server statico lo sta servendo (con Content-Length in cache) corrompe
    // le risposte per tutte le rotte successive. Si scrive tutto alla fine.
    return { ok: true as const, url, html };
  } catch (err) {
    return { ok: false as const, url, error: err instanceof Error ? err.message : String(err) };
  } finally {
    await page.close().catch(() => {});
  }
}

async function pool<T, R>(items: T[], n: number, fn: (i: T) => Promise<R>): Promise<R[]> {
  const res: R[] = [];
  let i = 0;
  await Promise.all(
    Array.from({ length: n }, async () => {
      while (i < items.length) {
        const idx = i++;
        res[idx] = await fn(items[idx]);
      }
    })
  );
  return res;
}

async function main() {
  // 1. shell SPA intatta, prima che la home sovrascriva dist/index.html
  copyFileSync(path.join(DIST, "index.html"), path.join(DIST, "spa.html"));

  const urls = routes();
  const port = await findFreePort(4999);
  const serve = sirv(DIST, { single: true, dev: false });
  const server = http.createServer((req, res) => serve(req, res, () => { res.statusCode = 404; res.end(); }));
  await new Promise<void>((r) => server.listen(port, r));

  // Su Vercel il Chromium scaricato da puppeteer non trova le shared library del
  // container (libnspr4 e altre): si usa @sparticuz/chromium, che le include.
  let executablePath: string | undefined;
  let args = ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"];
  if (process.env.VERCEL === "1") {
    const { default: chromium } = await import("@sparticuz/chromium");
    executablePath = await chromium.executablePath();
    args = [...chromium.args, "--disable-dev-shm-usage"];
    console.log(`Chromium serverless: ${executablePath}`);
  }

  const browser = await puppeteer.launch({ headless: true, executablePath, args });

  console.log(`Prerender di ${urls.length} URL (concorrenza ${CONCURRENCY})...`);
  const start = Date.now();
  let results = await pool(urls, CONCURRENCY, (u) => render(browser, u, port));

  // Un timeout isolato non deve far mancare una pagina dalla build: si riprova
  // una volta, in serie, prima di considerarla persa.
  const retry = results.filter((r) => !r.ok).map((r) => r.url);
  if (retry.length) {
    console.log(`Riprovo ${retry.length} URL falliti...`);
    const second = await pool(retry, 1, (u) => render(browser, u, port));
    results = results.map((r) => (r.ok ? r : second.find((x) => x.url === r.url) ?? r));
  }

  await browser.close();
  server.close();

  for (const r of results) {
    if (!r.ok || !("html" in r)) continue;
    const out = r.url === "/" ? "index.html" : path.join(r.url.replace(/^\//, ""), "index.html");
    const outPath = path.join(DIST, out);
    mkdirSync(path.dirname(outPath), { recursive: true });
    writeFileSync(outPath, r.html, "utf-8");
  }

  const failed = results.filter((r) => !r.ok);
  failed.forEach((f) => console.error(`  ✗ ${f.url} — ${"error" in f ? f.error : ""}`));
  console.log(`Prerender: ${results.length - failed.length}/${urls.length} OK in ${Math.round((Date.now() - start) / 1000)}s`);

  if (failed.length > 0) {
    console.error(`${failed.length} URL non prerenderizzati: il rewrite catch-all li servirà comunque come SPA.`);
    if (failed.length > urls.length * 0.1) process.exit(1);
  }
}

main().catch((e) => { console.error(e); process.exit(1); });
