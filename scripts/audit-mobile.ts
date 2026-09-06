/**
 * Audit mobile su tutte le pagine generate, a 375px.
 * Rileva i difetti che si vedono solo su schermo stretto:
 *  - scorrimento orizzontale (il difetto mobile più comune)
 *  - elementi che sforano il viewport, con il selettore del colpevole
 *  - testo sotto i 12px
 *  - aree toccabili sotto i 44px
 * Uso: npm run audit:mobile   (richiede dist/ già costruito)
 */
import puppeteer from "puppeteer";
import sirv from "sirv";
import http from "node:http";
import { readFileSync, readdirSync, existsSync } from "node:fs";
import path from "node:path";

const DIST = "dist";
const W = 375, H = 812;

const walk = (d: string): string[] =>
  readdirSync(d, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? walk(path.join(d, e.name)) : e.name === "index.html" ? [path.join(d, e.name)] : []
  );

async function freePort(start: number) {
  for (let p = start; p < start + 30; p++) {
    const ok = await new Promise<boolean>((r) => {
      const s = http.createServer();
      s.once("error", () => r(false));
      s.once("listening", () => { s.close(); r(true); });
      s.listen(p);
    });
    if (ok) return p;
  }
  throw new Error("nessuna porta libera");
}

async function main() {
  if (!existsSync(DIST)) { console.error("dist/ assente: esegui prima npm run build"); process.exit(1); }
  const routes = walk(DIST).map((f) => {
    const r = "/" + path.relative(DIST, path.dirname(f)).replace(/\\/g, "/");
    return r === "/." ? "/" : r;
  }).sort();

  const port = await freePort(5100);
  const serve = sirv(DIST, { single: true, dev: true });
  const server = http.createServer((req, res) => serve(req, res, () => { res.statusCode = 404; res.end(); }));
  await new Promise<void>((r) => server.listen(port, r));

  const browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox", "--disable-setuid-sandbox"] });
  const page = await browser.newPage();
  await page.setViewport({ width: W, height: H, isMobile: true, deviceScaleFactor: 2 });

  const problems: string[] = [];
  let clean = 0;

  for (const r of routes) {
    await page.goto(`http://localhost:${port}${r}`, { waitUntil: "networkidle0", timeout: 30000 });
    await new Promise((x) => setTimeout(x, 120));

    // Il codice viene passato come stringa: esbuild inietterebbe helper (__name)
    // che nel contesto della pagina non esistono.
    const res = (await page.evaluate(`(() => {
      const vw = ${W};
      const out = { overflow: document.documentElement.scrollWidth - vw, wide: [], small: [], taps: [] };
      const label = (el) => {
        const c = (el.className || "").toString().split(/\\s+/).filter(Boolean).slice(0, 3).join(".");
        const t = (el.textContent || "").trim().slice(0, 30);
        return el.tagName.toLowerCase() + (c ? "." + c : "") + (t ? " «" + t + "»" : "");
      };
      document.querySelectorAll("body *").forEach((el) => {
        const b = el.getBoundingClientRect();
        if (b.width === 0 || b.height === 0) return;
        const st = getComputedStyle(el);
        if (b.right > vw + 1 || b.left < -1) {
          let clipped = false, a = el;
          while (a && a !== document.body) {
            const cs = getComputedStyle(a);
            if (cs.overflowX === "hidden" || cs.overflowX === "auto" || cs.overflowX === "scroll" || cs.overflowX === "clip") { clipped = true; break; }
            a = a.parentElement;
          }
          const scroller = clipped ? a : null;
          if (!scroller && st.position !== "fixed") out.wide.push(label(el));
        }
        const fs = parseFloat(st.fontSize);
        if (el.children.length === 0 && (el.textContent || "").trim().length > 8 && fs < 12) out.small.push(label(el) + " " + fs + "px");
      });
      document.querySelectorAll("a, button, input, select, [role=button]").forEach((el) => {
        const b = el.getBoundingClientRect();
        if (b.width === 0 || b.height === 0) return;
        const sr = el.className && el.className.toString().includes("sr-only");
        if (b.height < 44 && !sr && !el.closest("nav[aria-label='Percorso']") && !el.closest(".prose-bm") && !el.closest("footer"))
          out.taps.push(label(el) + " " + Math.round(b.height) + "px");
      });
      return out;
    })()`)) as { overflow: number; wide: string[]; small: string[]; taps: string[] };

    const issues: string[] = [];
    if (res.overflow > 1) issues.push(`scorrimento orizzontale +${res.overflow}px`);
    if (res.wide.length) issues.push(`${res.wide.length} elementi fuori viewport: ${[...new Set(res.wide)].slice(0, 3).join(" | ")}`);
    if (res.small.length) issues.push(`${res.small.length} testi <12px: ${[...new Set(res.small)].slice(0, 2).join(" | ")}`);
    if (res.taps.length) issues.push(`${res.taps.length} tap target <44px: ${[...new Set(res.taps)].slice(0, 2).join(" | ")}`);

    if (issues.length) problems.push(`\n${r}\n  ${issues.join("\n  ")}`);
    else clean++;
  }

  await browser.close();
  server.close();

  console.log(`\nAudit mobile 375px — ${routes.length} pagine`);
  console.log(`  senza rilievi: ${clean}`);
  console.log(`  con rilievi:   ${routes.length - clean}`);
  if (problems.length) console.log(problems.join("\n"));
}

main().catch((e) => { console.error(e); process.exit(1); });
