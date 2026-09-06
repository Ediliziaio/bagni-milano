# 09 — Ottimizzazione tecnica e performance

## Stack

Vite 5 · React 18 · TypeScript · Tailwind 3 · React Router 6 · Radix Accordion · Puppeteer (SSG)

Dipendenze runtime volutamente minime: **7 pacchetti**. Il repo di riferimento ne aveva 45,
inclusi `recharts`, `framer-motion`, `date-fns` e 28 primitive Radix mai usate in un sito
vetrina. Ogni dipendenza non necessaria è peso sul bundle e superficie di manutenzione.

## Checklist tecnica

| Voce | Stato | Note |
|---|:--:|---|
| HTTPS | ⚙️ | Automatico su Vercel |
| Canonical assoluti su ogni pagina | ✅ | `<Seo path>` → `abs(path)` |
| Trailing slash unico | ✅ | `trailingSlash: false` + 301 |
| `sitemap.xml` | ✅ | Generata da dati, 57 URL |
| `robots.txt` | ✅ | Include crawler AI e riferimento sitemap |
| `llms.txt` | ✅ | Generato a ogni build |
| Redirect 301 | ✅ | 8 regole in `vercel.json` per varianti e vecchi URL |
| Pagina 404 | ✅ | Con link di recupero verso pillar e geo |
| Soft 404 | ✅ | Rewrite catch-all → `/spa.html` (shell), non alla home |
| Pagine orphan | ✅ | Footer linka tutte le geo; hub per servizi, blog, progetti |
| Profondità di crawl | ✅ | Massimo 3 livelli |
| Rendering JavaScript | ✅ | **SSG: 59 pagine HTML statiche** |
| Responsive | ✅ | Mobile-first, breakpoint da 360px |
| Font | ✅ | 3 famiglie, 9 pesi totali (vs. 15 del prototipo), `display=swap`, preconnect |
| Immagini | ⬜ | Nessuna fotografia: vedi sotto. `og-image` e logo sono generati tipograficamente |
| Contrasto colore | ✅ | Token verificati contro WCAG AA: `brass-dark` 4.72:1 su travertine, pulsante primario 5.6:1 |
| Gate di qualità automatico | ✅ | `npm run check`: 11 regole su h1, title, canonical, schema, sitemap e asset |
| Caching | ✅ | `immutable` un anno su asset con hash; 1h su sitemap e llms |
| Header di sicurezza | ✅ | `X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options` |
| CDN | ⚙️ | Edge network Vercel |
| Code splitting | ✅ | Una chunk per pagina; home nel bundle iniziale |
| `noindex` sulle pagine legali | ✅ | E sulle schede progetto non pubblicate |

Legenda: ✅ fatto · ⚙️ fornito dall'hosting · ⬜ da fare

## Peso attuale

```
CSS                24,4 kB   →  gzip  5,4 kB
JS iniziale       116,4 kB   →  gzip 37,3 kB
react-vendor      163,7 kB   →  gzip 53,4 kB
─────────────────────────────────────────────
Totale iniziale             →  gzip ~96 kB
```

Ogni pagina secondaria aggiunge fra 1,2 e 9,2 kB. Il chunk `articles` (41,8 kB) è caricato
solo sulle pagine blog.

## Core Web Vitals — target e leve

| Metrica | Target | Leva principale già implementata | Da fare |
|---|---|---|---|
| **LCP** < 2,5 s | HTML statico prerenderizzato: il testo dell'hero è nel sorgente, non attende React | Quando si aggiungono immagini: `<link rel="preload">` **solo** sull'immagine LCP, formato AVIF/WebP, `width`/`height` espliciti |
| **INP** < 200 ms | Nessuna libreria di animazione, JS iniziale sotto i 100 kB gzip | Mantenere fuori dal bundle iniziale eventuali script di terze parti |
| **CLS** < 0,1 | `font-display: swap` con fallback metrico, nessun banner che sposta il layout | Aggiungere `width`/`height` a **ogni** immagine. È la causa numero uno di CLS |

### Errore del prototipo da non ripetere

Il prototipo Lovable preloadava **16 immagini**, di cui **14 su un dominio diverso**. Un
preload dice al browser "questa risorsa è critica": dichiararne 16 significa non dichiararne
nessuna, perché competono tutte per la stessa banda. Il risultato è un LCP peggiore di quello
che si otterrebbe senza alcun preload.

**Regola:** al massimo **una** risorsa in preload per pagina, quella che determina l'LCP.

## Immagini — da fare prima del go-live

Il sito non contiene ancora immagini: nel repository non c'erano asset fotografici di Bagni
Milano riutilizzabili senza attribuire al brand foto che non sono sue.

Quando arriveranno le foto di cantiere:

1. Formato **AVIF** con fallback **WebP**, mai JPEG come formato primario.
2. `srcset` con almeno 3 varianti (480 / 960 / 1440 px).
3. `width` e `height` **sempre** presenti (difesa CLS).
4. `loading="lazy"` su tutto tranne l'immagine LCP dell'hero.
5. `decoding="async"`.
6. `alt` descrittivo e specifico: "Bagno di 6 mq in zona Navigli dopo la ristrutturazione, doccia
   walk-in e rivestimento in gres effetto pietra" — non "bagno moderno".
7. Foto prima/dopo con la **stessa inquadratura**: è ciò che rende credibile il confronto.

## Comandi

```bash
npm run dev          # sviluppo
npm run build        # sitemap + llms + build + prerender (produzione completa)
npm run build:fast   # senza prerender, per iterare velocemente
npm run sitemap      # rigenera solo sitemap.xml
npm run llms         # rigenera solo llms.txt
npm run prerender    # solo SSG (richiede dist/ esistente)
npm run check        # gate di qualità sull'output di dist/
npm run assets       # rigenera og-image, logo e favicon
npx tsc --noEmit     # typecheck
```

## Verifiche da eseguire dopo il primo deploy su dominio reale

1. **Lighthouse mobile** su home, pillar, costi e una landing geo. Target: Performance ≥ 90.
2. **PageSpeed Insights** con dati di campo, dopo 28 giorni di traffico reale.
3. **Search Console**: invio sitemap, controllo copertura, controllo "Rendering come Google".
4. **Rich Results Test** su un URL per tipo di schema.
5. `curl -A "GPTBot" https://dominio/ristrutturazione-bagno | grep "<h1"` — verifica che i
   crawler AI ricevano HTML popolato.
6. Verifica 301: ogni redirect dichiarato in `vercel.json` deve restituire `301`, non `302`.

## Debito tecnico noto

| Voce | Impatto | Quando |
|---|---|---|
| Font serviti da Google Fonts anziché self-hosted | ~100-200 ms di connessione a terza parte sull'LCP | P2 — self-hosting dei 9 file `woff2` |
| Rewrite catch-all restituisce `200` su URL inesistenti | Soft 404 potenziale | P3 — middleware Vercel che risponda `404` per path non prerenderizzati |
| ~~Nessun test automatico~~ | ~~Regressioni non intercettate~~ | ✅ risolto: `npm run check` |
| Asset grafici tipografici, non fotografici | Anteprima social poco distintiva | P2 — sostituire con logo ufficiale e foto di cantiere |
| Nessuna gestione consensi cookie | Bloccante solo quando si aggiungono analytics | P1 **prima** di installare GA4 o pixel |
