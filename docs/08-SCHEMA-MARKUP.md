# 08 — Schema markup (JSON-LD)

Implementazione in `src/lib/schema.ts`, iniezione in `src/components/Seo.tsx`.
Un solo `<script type="application/ld+json">` per pagina, contenente un `@graph`.

## Perché un grafo unico e non blocchi separati

Blocchi separati producono entità scollegate: Google e gli LLM devono indovinare che
l'`Organization` della home e quella della pagina Milano sono la stessa cosa.

Con `@graph` e `@id` canonici il collegamento è dichiarato:

```json
{
  "@context": "https://schema.org",
  "@graph": [
    { "@type": ["Organization","HomeAndConstructionBusiness"],
      "@id": "https://www.bagnimilano.it/#organization", "...": "..." },
    { "@type": "HomeAndConstructionBusiness",
      "@id": "https://www.bagnimilano.it/#localbusiness",
      "parentOrganization": { "@id": "https://www.bagnimilano.it/#organization" } },
    { "@type": "WebSite", "@id": "https://www.bagnimilano.it/#website",
      "publisher": { "@id": "https://www.bagnimilano.it/#organization" } },
    { "@type": "Service", "provider": { "@id": "https://www.bagnimilano.it/#organization" } }
  ]
}
```

I nodi di pagina **referenziano** gli `@id` invece di ridichiarare l'entità.

## Copertura per tipo di pagina

| Pagina | Tipi emessi |
|---|---|
| Home | Organization+HomeAndConstructionBusiness, LocalBusiness, WebSite, WebPage, Service, FAQPage |
| `/ristrutturazione-bagno` | + Service, **HowTo** (12 fasi), FAQPage, BreadcrumbList |
| `/metodo` | + HowTo, BreadcrumbList |
| `/chi-siamo` | + **AboutPage**, BreadcrumbList |
| `/quanto-costa-*` | + WebPage, FAQPage, BreadcrumbList |
| `/quanto-tempo-*` | + HowTo (cronoprogramma), FAQPage, BreadcrumbList |
| Geo (22) | + Service con `areaServed` puntuale, FAQPage, BreadcrumbList |
| Servizi (8) | + Service, FAQPage, BreadcrumbList |
| `/blog` | + **Blog** con `blogPost[]`, CollectionPage |
| Categoria blog | + CollectionPage, BreadcrumbList |
| Articolo | + **BlogPosting**, FAQPage (se presenti), BreadcrumbList |
| `/progetti/<slug>` | + **CreativeWork** con `locationCreated` |
| `/faq` | + FAQPage con tutte le 29 domande |
| `/preventivo`, `/contatti` | + **ContactPage** |

## Scelte deliberate

### `HomeAndConstructionBusiness` invece di `LocalBusiness` generico

È il sottotipo corretto per un'impresa di ristrutturazione. Un tipo più specifico dice di più.

### `knowsAbout`

Dichiara esplicitamente le competenze dell'entità. È uno dei pochi campi pensati per far
capire *su cosa* un soggetto è una fonte, ed è particolarmente utile ai sistemi generativi.

### `aggregateRating` — assente

**Non implementato di proposito.** Un rating aggregato richiede recensioni reali e
verificabili. Pubblicarlo senza è:

- una violazione delle linee guida sui dati strutturati, sanzionabile con azione manuale;
- un'affermazione falsa verso gli utenti.

Il repo di riferimento da cui deriva lo scaffold conteneva un `aggregateRating` di
`4.9 / 127 recensioni` non verificato: **non è stato replicato**.
Il flag `HAS_VERIFIED_REVIEWS` in `src/data/site.ts` è la sede della decisione. Quando
esisteranno recensioni reali, si porta a `true` e si aggiunge il nodo con i valori effettivi.

### `Offer` con prezzi — assente

I range pubblicati sono **indicativi di mercato**, non un listino aziendale. Marcarli come
`Offer` significherebbe dichiararli come prezzi praticati. Da attivare solo su range validati
dall'azienda.

### `Review` — assente

Nessuna recensione inventata, quindi nessun markup `Review`.

## Validazione

```bash
npm run build:fast && npx tsx scripts/prerender.ts

# Estrae e valida il JSON-LD di tutte le pagine generate
node -e '
const fs=require("fs"),path=require("path");
const walk=d=>fs.readdirSync(d,{withFileTypes:true}).flatMap(e=>
  e.isDirectory()?walk(path.join(d,e.name)):e.name==="index.html"?[path.join(d,e.name)]:[]);
let ok=0,bad=0;
for(const f of walk("dist")){
  const h=fs.readFileSync(f,"utf8");
  const m=[...h.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)];
  if(!m.length){console.log("NO SCHEMA:",f);bad++;continue}
  try{m.forEach(x=>JSON.parse(x[1]));ok++}catch(e){console.log("INVALID:",f,e.message);bad++}
}
console.log(`JSON-LD valido: ${ok} pagine, problemi: ${bad}`);'
```

Prima del go-live, validare anche con:
- **Rich Results Test** di Google (verifica idoneità ai rich snippet)
- **Schema Markup Validator** di schema.org (verifica conformità al vocabolario)
