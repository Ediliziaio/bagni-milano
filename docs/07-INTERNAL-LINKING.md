# 07 — Architettura di internal linking

## Principio

I link interni distribuiscono autorevolezza e dichiarano gerarchia. La regola operativa è
una sola: **il contenuto informativo sostiene le pagine commerciali, mai il contrario.**

Un articolo sui costi delle piastrelle esiste per portare traffico e passarlo a
`/quanto-costa-ristrutturare-bagno` e a `/ristrutturazione-bagno`. Non è un fine in sé.

## Mappa dei flussi

```
                              ┌──────────────┐
                              │      /       │  Home
                              └──────┬───────┘
                                     │
        ┌──────────────┬─────────────┼──────────────┬───────────────┐
        ▼              ▼             ▼              ▼               ▼
  /ristrutturazione  /metodo   /quanto-costa   /quanto-tempo   /chi-siamo
      -bagno            │            ▲               ▲
    (PILLAR)            │            │               │
        │               │            │               │
        ├───► /servizi/* (8 pagine servizio)         │
        │            ▲       │                       │
        │            │       └──────────────────────►│
        │            │
        ├───► /ristrutturazione-bagno-<geo> (22 pagine)
        │            │
        │            └──► /servizi/* + /quanto-costa + /metodo
        │
        └───◄─── /blog/* (12 articoli, in crescita a 100)
                     │
                     └──► SEMPRE almeno 2 link verso pagine money
```

## Regole per tipo di pagina

| Tipo | Deve linkare a | Non deve linkare a |
|---|---|---|
| **Home** | Pillar, metodo, costi, tempi, 4 geo primarie, 5-6 servizi, blog | Articoli singoli (li raggiunge il blog hub) |
| **Pillar** `/ristrutturazione-bagno` | Metodo, costi, tempi, tutti gli 8 servizi, tutte le geo primarie, preventivo | — |
| **Geo primaria** | Pillar, metodo, 5-6 servizi, altre geo, preventivo | Articoli non pertinenti al territorio |
| **Geo comune** | Pillar, geo primaria della provincia, servizi | Altre geo comune non limitrofe |
| **Servizio** | Pillar, costi, tempi, 2 servizi correlati, geo primarie, preventivo | Altri 6 servizi (diluisce il segnale) |
| **Costi** | Pillar, tempi, 4-5 articoli del cluster costi, preventivo | — |
| **Tempi** | Pillar, costi, servizio condominio, preventivo | — |
| **Articolo blog** | **Minimo 2 pagine money** + 2 articoli correlati + categoria | Più di 4 link money: diventa spam |
| **Categoria blog** | La sua pagina di riferimento (`supports`), gli articoli, le altre categorie | — |

## Il campo `supports`

Ogni categoria del blog dichiara in `src/data/blog-categories.ts` quale pagina money deve
sostenere:

| Categoria | Sostiene |
|---|---|
| Costi | `/quanto-costa-ristrutturare-bagno` |
| Progettazione | `/ristrutturazione-bagno` |
| Materiali | `/ristrutturazione-bagno` |
| Idee e design | `/progetti` |
| Problemi | `/servizi` |
| Normative | `/servizi/ristrutturazione-bagno-condominio` |
| Lombardia | `/ristrutturazione-bagno-milano` |

Il link è renderizzato automaticamente in cima alla pagina categoria: nessuna dipendenza
dalla disciplina di chi scrive.

## Il campo `internalLinks`

Ogni articolo dichiara i propri link money in `src/data/articles.ts`. Il componente
`<RelatedLinks>` li rende in un blocco dedicato a fine testo, oltre ai link contestuali
già presenti nel corpo.

Il vantaggio: i link non dipendono da chi scrive l'HTML, e si possono verificare da riga
di comando.

```bash
# Articoli con meno di 2 link money — non devono essercene
node -e '
const {articles}=require("./src/data/articles.ts");
articles.filter(a=>a.internalLinks.length<2).forEach(a=>console.log("SOTTO SOGLIA:",a.slug));'
```

## Anchor text

- **Descrittivo, mai generico.** "Guida completa ai costi di ristrutturazione bagno", non
  "clicca qui" né "leggi di più".
- **Variato.** Ripetere sempre lo stesso anchor esatto verso lo stesso URL è un pattern
  innaturale. Alternare "quanto costa ristrutturare un bagno", "guida ai costi",
  "range di prezzo per metratura".
- **Coerente con il target.** L'anchor deve descrivere la pagina di destinazione, non la
  pagina di partenza.

## Profondità di crawl

Nessuna pagina è a più di **3 click** dalla home:

| Livello | Pagine |
|---|---|
| 1 | Home |
| 2 | Pillar, metodo, chi siamo, costi, tempi, servizi hub, geo primarie, blog hub, faq, progetti, preventivo, contatti |
| 3 | Servizi di dettaglio, geo comuni, categorie blog, articoli, schede progetto |

Il footer contiene link a tutte le 22 pagine geografiche (i comuni secondari in un
`<details>` per non appesantire visivamente): questo garantisce che anche le pagine
di livello 3 abbiano link da ogni pagina del sito.

## Manutenzione

Alla pubblicazione di ogni nuovo articolo:

1. Aggiungere `internalLinks` verso almeno 2 pagine money.
2. Aggiungere l'articolo fra i `related` di 2 articoli esistenti dello stesso cluster.
3. Verificare che la sua keyword primaria non sia già assegnata.
4. `npm run build` — sitemap e `llms.txt` si aggiornano da soli.
