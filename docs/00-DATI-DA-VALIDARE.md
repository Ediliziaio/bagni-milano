# 00 — Dati aziendali da validare prima del go-live

Questo file è la **checklist bloccante**. Finché una riga è aperta, il dato corrispondente
sul sito è un placeholder `TODO_AZIENDA` visibile. Non è un difetto: è una scelta.
Pubblicare un dato inventato — un anno di fondazione, una garanzia, una recensione — è
esattamente ciò che il brief vieta, e comporta rischio reputazionale e di penalizzazione.

## Bloccanti (il sito non va online senza)

| # | Dato | Dove impatta | Stato |
|---|------|--------------|-------|
| 1 | Dominio definitivo | `src/data/site.ts`, `scripts/*`, `index.html`, `robots.txt`, `vercel.json` | ⬜ |
| 2 | Ragione sociale completa | Footer, schema Organization, informativa privacy | ⬜ |
| 3 | Partita IVA | Footer, schema, fatturazione | ⬜ |
| 4 | Telefono principale (formato `+39...`) | Header, barra CTA mobile, schema, GBP | ⬜ |
| 5 | Email commerciale | Contatti, schema, form | ⬜ |
| 6 | Indirizzo sede/showroom + CAP | Schema LocalBusiness, GBP, NAP | ⬜ |
| 7 | Coordinate GPS della sede | Schema `geo`, coerenza con GBP | ⬜ |
| 8 | Endpoint destinazione lead (`VITE_LEAD_ENDPOINT`) | Form preventivo — **oggi il form non invia nulla** | ⬜ |
| 9 | Testo informativa privacy e cookie policy | Pagine legali (oggi `noindex` e vuote) | ⬜ |
| 10 | **Rimuovere `X-Robots-Tag: noindex` da `vercel.json`** | Finché è attivo il sito NON viene indicizzato. È corretto in staging, è fatale al go-live | ⬜ |

## Importanti (bloccano singole sezioni)

| # | Dato | Dove impatta | Stato |
|---|------|--------------|-------|
| 10 | Durata e perimetro della garanzia | Pagina pillar, FAQ, pagina metodo | ⬜ |
| 11 | Anno di fondazione / anni di attività | Chi siamo, schema `foundingDate` | ⬜ |
| 12 | Composizione della squadra (interni vs. collaboratori) | Chi siamo, E-E-A-T | ⬜ |
| 13 | Natura del rapporto con **Gruppo BEA** | Chi siamo, schema, trust | ⬜ |
| 14 | Esiste pagamento dilazionato / finanziamento? | FAQ costi, CRO | ⬜ |
| 15 | URL Google Business Profile + Place ID | Local SEO, `sameAs` | ⬜ |
| 16 | Profili social ufficiali | `sameAs` nello schema | ⬜ |
| 17 | Range di prezzo reali dell'azienda | `src/data/costs.ts` — oggi sono range **di mercato**, non aziendali | ⬜ |
| 18 | Dati reali dei 4 progetti + foto prima/dopo | `src/data/projects.ts` — oggi `published: false` | ⬜ |
| 19 | Recensioni verificabili (Google/Trustpilot) | Nessun `aggregateRating` finché non esistono | ⬜ |
| 20 | Aliquote e massimali detrazioni in vigore | Articolo detrazioni, servizio bagno accessibile | ⬜ |

## Decisione di naming da prendere

Il prototipo Lovable usa **"I Bagni Milano"**. Il brief usa **"Bagni Milano"**.
Il codice usa `Bagni Milano` come `brand` e `I Bagni Milano` come `alternateName`.

Questa ambiguità va chiusa prima di aprire il Google Business Profile e prima di qualsiasi
citation building: la coerenza NAP è il fondamento del Local SEO, e un nome che oscilla fra
due varianti spacca l'entità in due agli occhi di Google e degli LLM.

**Raccomandazione:** scegliere la forma che comparirà su visura e insegna, e usare
esattamente quella ovunque. L'altra resta solo come `alternateName`.

## Come si chiude un TODO

1. Aggiornare il valore in `src/data/site.ts` (o nel file dati indicato).
2. Rimuovere il wrapper `TODO(...)`.
3. Rieseguire `npm run build` — sitemap e `llms.txt` si rigenerano da soli.
4. Spuntare la riga qui sopra.

Per verificare cosa è ancora aperto:

```bash
grep -rn "TODO_AZIENDA" src/ | wc -l
```
