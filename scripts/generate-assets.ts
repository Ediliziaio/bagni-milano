/**
 * Genera gli asset grafici del brand con Puppeteer (già dipendenza per il prerender):
 *  - public/og-image.png   1200x630, anteprima social
 *  - public/logo.png       512x512, referenziato da schema Organization
 *  - public/icon-192.png, icon-512.png, apple-touch-icon.png
 *
 * Sono asset tipografici, non fotografici: quando l'azienda fornirà il logo
 * ufficiale e le foto di cantiere, questi vanno sostituiti. Nel frattempo
 * evitano che meta e schema puntino a URL inesistenti.
 *
 * Uso: npm run assets
 */
import puppeteer from "puppeteer";
import { writeFileSync } from "node:fs";

const INK = "#1D1A16";
const ALABASTER = "#FAF8F5";
const BRASS = "#A3804D";
const BRASS_LIGHT = "#CEB48D";

const FONTS =
  '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>' +
  '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600&family=Inter:wght@400;500&display=swap">';

const og = `<!doctype html><meta charset="utf-8">${FONTS}<style>
  *{margin:0;box-sizing:border-box}
  body{width:1200px;height:630px;background:${INK};color:${ALABASTER};
       font-family:Inter,system-ui,sans-serif;display:flex;flex-direction:column;
       justify-content:space-between;padding:72px 80px;overflow:hidden;position:relative}
  .rule{position:absolute;left:0;right:0;top:0;height:6px;background:${BRASS}}
  .eyebrow{font-size:19px;letter-spacing:.22em;text-transform:uppercase;color:${BRASS_LIGHT};font-weight:500}
  h1{font-family:"Playfair Display",Georgia,serif;font-weight:600;font-size:82px;line-height:1.04;
     letter-spacing:-.02em;max-width:15ch}
  .sub{font-size:27px;color:#C9C3BA;max-width:34ch;line-height:1.45;margin-top:22px}
  footer{display:flex;justify-content:space-between;align-items:flex-end;font-size:21px;color:#8E877E}
  .brand{font-family:"Playfair Display",Georgia,serif;font-size:34px;color:${ALABASTER};font-weight:500}
  .brand span{color:${BRASS_LIGHT}}
</style>
<div class="rule"></div>
<div><p class="eyebrow">Milano · Monza · Lodi · Lombardia</p>
  <h1 style="margin-top:26px">Ristrutturazione bagno chiavi in mano</h1>
  <p class="sub">Un unico referente, preventivo chiuso, date scritte in contratto.</p></div>
<footer><p class="brand">Bagni <span>Milano</span></p><p>10–15 giorni lavorativi</p></footer>`;

const mark = (size: number, bg: string, fg: string) => `<!doctype html><meta charset="utf-8">${FONTS}<style>
  *{margin:0;box-sizing:border-box}
  body{width:${size}px;height:${size}px;background:${bg};display:flex;align-items:center;
       justify-content:center;overflow:hidden}
  b{font-family:"Playfair Display",Georgia,serif;font-weight:600;font-size:${size * 0.52}px;
    color:${fg};line-height:1;letter-spacing:-.03em;transform:translateY(-2%)}
</style><b>BM</b>`;

async function main() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
  });

  const shoot = async (html: string, w: number, h: number, out: string) => {
    const page = await browser.newPage();
    await page.setViewport({ width: w, height: h, deviceScaleFactor: 1 });
    await page.setContent(html, { waitUntil: "load", timeout: 20_000 });
    // Attende i webfont; se la rete non è disponibile prosegue col fallback serif.
    await page.evaluate(() => (document as any).fonts?.ready).catch(() => {});
    const buf = await page.screenshot({ type: "png" });
    writeFileSync(out, buf);
    await page.close();
    console.log(`  ${out}  ${w}x${h}`);
  };

  await shoot(og, 1200, 630, "public/og-image.png");
  await shoot(mark(512, INK, BRASS_LIGHT), 512, 512, "public/logo.png");
  await shoot(mark(512, INK, BRASS_LIGHT), 512, 512, "public/icon-512.png");
  await shoot(mark(192, INK, BRASS_LIGHT), 192, 192, "public/icon-192.png");
  await shoot(mark(180, INK, BRASS_LIGHT), 180, 180, "public/apple-touch-icon.png");

  await browser.close();
  console.log("Asset generati. Sostituire con il logo ufficiale quando disponibile.");
}

main().catch((e) => { console.error(e); process.exit(1); });
