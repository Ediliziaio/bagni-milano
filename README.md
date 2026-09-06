# Bagni Milano

Sito web di **Bagni Milano**, impresa specializzata nella ristrutturazione bagno chiavi in mano
a Milano, Monza, Lodi e in Lombardia.

Progettato come asset SEO / Local SEO / GEO / AIO, non come vetrina: **59 pagine HTML statiche**
prerenderizzate, grafo di entità JSON-LD coerente, architettura pillar-cluster e strategia
documentata in `docs/`.

---

## ⚠️ Prima di andare online

Il sito contiene **placeholder espliciti** (`TODO_AZIENDA`) al posto dei dati aziendali non
verificati: telefono, indirizzo, partita IVA, garanzie, anni di esperienza, prezzi di listino.

Non è una svista: pubblicare dati inventati è un rischio reputazionale e di penalizzazione.

👉 **La checklist bloccante è in [`docs/00-DATI-DA-VALIDARE.md`](docs/00-DATI-DA-VALIDARE.md).**

```bash
grep -rn "TODO_AZIENDA" src/ | wc -l   # quanti placeholder restano aperti
```

---

## Stack

Vite 5 · React 18 · TypeScript · Tailwind 3 · React Router 6 · Radix Accordion · Puppeteer (SSG)

7 dipendenze runtime. Bundle iniziale ~96 kB gzip.

## Comandi

```bash
npm install
npm run dev          # sviluppo su :8080
npm run build        # sitemap + llms.txt + build + prerender (produzione)
npm run build:fast   # senza prerender, per iterare
npm run sitemap      # rigenera public/sitemap.xml
npm run llms         # rigenera public/llms.txt
npm run prerender    # solo SSG
npm run check        # gate di qualità sull'output (fallisce su regressioni SEO)
npm run assets       # rigenera og-image, logo e favicon
npx tsc --noEmit     # typecheck
```

## Struttura

```
src/
├── data/           ← la strategia vive qui, non nei componenti
│   ├── site.ts         entità aziendale, aree servite, placeholder
│   ├── cities.ts       4 landing primarie + 14 comuni, contenuto differenziato
│   ├── services.ts     8 pagine servizio con decisioni anti-cannibalizzazione
│   ├── articles.ts     12 guide complete
│   ├── blog-categories.ts  7 cluster, ognuno dichiara la money page che sostiene
│   ├── costs.ts        range indicativi di mercato (NON listino aziendale)
│   ├── timeline.ts     cronoprogramma di cantiere
│   ├── faqs.ts         29 FAQ centralizzate, riusate per topic
│   ├── method.ts       Metodo Bagno Certo, 12 fasi
│   └── projects.ts     case study (published: false finché mancano dati reali)
├── lib/schema.ts   ← factory JSON-LD, grafo con @id stabili
├── components/     ← Seo, Layout, Header, Footer, MobileCtaBar, Ui
└── pages/          ← 18 componenti pagina

scripts/
├── generate-sitemap.ts   sitemap.xml dai dati
├── generate-llms.ts      llms.txt dai dati
├── generate-assets.ts    og-image, logo e favicon via Puppeteer
├── prerender.ts          SSG con Puppeteer
└── check.ts              gate di qualità: h1, title, canonical, schema, sitemap

docs/                ← 14 documenti di strategia
```

**Regola di progetto:** per aggiungere un comune, un servizio o un articolo si modifica un file
in `src/data/`. Rotte, sitemap, `llms.txt`, footer e link interni si aggiornano da soli.

## Documentazione

| Doc | Contenuto |
|---|---|
| [00 — Dati da validare](docs/00-DATI-DA-VALIDARE.md) | **Checklist bloccante pre go-live** |
| [01 — Audit e punteggi](docs/01-AUDIT-E-PUNTEGGI.md) | Audit misurato del prototipo, punteggi prima/dopo |
| [02 — Architettura e sitemap](docs/02-ARCHITETTURA-E-SITEMAP.md) | Albero URL, regola anti-doorway |
| [03 — Keyword map](docs/03-KEYWORD-MAP.md) | Una keyword primaria per URL, anti-cannibalizzazione |
| [04 — Local SEO](docs/04-LOCAL-SEO.md) | GBP, NAP, citation, presidio dei tre poli |
| [05 — GEO e AIO](docs/05-GEO-AIO.md) | Contenuto estraibile, grafo di entità, `llms.txt`, crawler AI |
| [06 — Piano editoriale](docs/06-PIANO-EDITORIALE.md) | 100 contenuti su 7 cluster, con priorità |
| [07 — Internal linking](docs/07-INTERNAL-LINKING.md) | Mappa dei flussi, regole per tipo di pagina |
| [08 — Schema markup](docs/08-SCHEMA-MARKUP.md) | JSON-LD, e perché `aggregateRating` è assente |
| [09 — Tecnico e performance](docs/09-TECNICO-E-PERFORMANCE.md) | CWV, checklist tecnica, debito noto |
| [10 — Backlink](docs/10-BACKLINK.md) | Strategia in 4 fasi, linkable assets |
| [11 — CRO](docs/11-CRO.md) | Elementi implementati, test in ordine di impatto |
| [12 — Roadmap](docs/12-ROADMAP.md) | P1 / 30 / 60 / 90 / 180-365 giorni con effort |
| [13 — KPI](docs/13-KPI.md) | Cruscotto e protocollo di misurazione della visibilità AI |

## Scelte non negoziabili

Il brief vietava di inventare dati. Queste sono le conseguenze concrete:

- **Nessun `aggregateRating`.** Il repo di partenza ne conteneva uno (4,9 su 127 recensioni)
  non verificato: non è stato replicato.
- **Nessun prezzo di listino.** I range sono dichiarati come indicativi di mercato e mostrano
  un disclaimer.
- **Nessuna garanzia dichiarata** finché l'azienda non la mette per iscritto.
- **Nessun case study pubblicato** senza dati reali di cantiere: le 4 schede sono `noindex` e
  fuori dalla sitemap.
- **Nessun testo legale generato.** Le pagine legali esistono, sono `noindex` ed elencano cosa
  serve per redigerle.
- **Il form non finge di inviare.** Senza `VITE_LEAD_ENDPOINT` mostra un messaggio esplicito.
- **Nessuna percentuale sulle detrazioni fiscali**, perché cambiano ogni anno.

## Deploy

Configurato per **Vercel** (`vercel.json`): rewrite verso la shell SPA, redirect 301, header di
cache e sicurezza, `trailingSlash: false`.

Variabile d'ambiente richiesta:

```
VITE_LEAD_ENDPOINT=<url a cui inviare i lead del form>
```

## Origine

Scaffold tecnico derivato da [`Ediliziaio/bagno-luxe-method`](https://github.com/Ediliziaio/bagno-luxe-method)
(prerender SSG, pattern SEOHead, generazione sitemap da dati).
Identità tipografica — Playfair Display, Cormorant Garamond, Inter — ripresa dal prototipo
`bagni-milan-app.lovable.app`, con il set di pesi ridotto da 15 a 9 combinazioni.
