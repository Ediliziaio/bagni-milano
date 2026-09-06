# 10 — Strategia backlink

## Premessa

Per un'impresa locale contano **pertinenza e località**, non il volume. Dieci link da testate
e associazioni lombarde valgono più di duecento link da directory generaliste internazionali.

Nessun acquisto di link, nessuno scambio sistematico, nessuna guest post farm: sono i pattern
che Google riconosce meglio, e il rischio non è proporzionato al beneficio per un'azienda che
deve costruire da zero.

## Fase 1 — Fondamenta (mesi 1-2)

Non sono backlink di ranking, sono **prove di esistenza dell'entità**. Servono a rendere
coerente il knowledge graph.

| Fonte | Tipo | Note |
|---|---|---|
| Google Business Profile | Citation | Priorità assoluta |
| Apple Business Connect, Bing Places | Citation | Gratuite, 30 minuti |
| Camera di Commercio Milano Monza Brianza Lodi | Istituzionale | Alta fiducia |
| PagineGialle, Virgilio, Cylex | Directory | Coerenza NAP |
| Facebook, Instagram, LinkedIn aziendali | Profili | Alimentano `sameAs` |

## Fase 2 — Settore (mesi 2-5)

| Fonte | Come ottenerlo |
|---|---|
| **Houzz Italia** | Profilo con portfolio fotografico. Alta pertinenza tematica |
| **Archiproducts / Archilovers** | Pubblicazione dei progetti come schede |
| **Habitissimo, Instapro** | Profilo verificato |
| **Fornitori e produttori** | Molti hanno una pagina "rivenditori" o "installatori qualificati". È il link più facile e più pertinente che esista: basta chiederlo |
| **Showroom di arredo bagno** | Pagina "imprese partner" reciproca |
| **Blog di interior design lombardi** | Contributo tecnico firmato, non pubbliredazionale |

> Sui marketplace di preventivi: sono utili come citation ma mettono l'azienda in competizione
> di prezzo con imprese non comparabili. Vanno usati come segnale, non come canale commerciale,
> perché contraddicono il posizionamento del sito.

## Fase 3 — Territorio e stampa (mesi 4-12)

| Target | Angolo giornalistico proponibile |
|---|---|
| Testate locali milanesi | Dati sul patrimonio edilizio: quanti bagni milanesi hanno ancora impianti in ferro zincato, e cosa comporta |
| Testate di Monza e Brianza | Il bagno nelle villette anni '80: la trasformazione vasca-doccia come fenomeno |
| Testate del Lodigiano | Recupero delle case di corte e bagni ricavati in edifici nati senza |
| Portali di edilizia | Guida tecnica all'impermeabilizzazione, firmata |
| Associazioni artigiane | Iscrizione + eventuale intervento in eventi formativi |
| Amministratori di condominio | Vademecum "lavori in bagno: cosa deve sapere l'amministratore", distribuito agli studi |

L'angolo "amministratori di condominio" è il più sottovalutato: sono intermediari che decidono
o influenzano molte ristrutturazioni, e nessun concorrente produce materiale pensato per loro.

## Fase 4 — Linkable assets (mesi 6-12)

Contenuti costruiti per essere citati, non per posizionarsi:

1. **Calcolatore di costo per il bagno** — input metratura, stato impianti, livello finiture →
   range indicativo. Gli strumenti attirano link naturali meglio di qualsiasi articolo.
2. **Checklist scaricabile "cosa deve contenere un preventivo"** — già scritta in
   `src/data/costs.ts`, va impaginata in PDF.
3. **Osservatorio annuale sui costi in Lombardia** — dati aggregati dai preventivi reali,
   anonimizzati. Diventa citabile da testate e, soprattutto, dagli LLM.
4. **Guida per amministratori di condominio** — PDF distribuibile agli studi.

Il punto 3 è quello con il ritorno più alto sul lungo periodo: dati primari originali sono
l'unica cosa che nessun concorrente può copiare e che i sistemi generativi citano volentieri.

## Da non fare

- Comprare link o pacchetti di "guest post garantite".
- Iscrivere il sito a directory generaliste non pertinenti in blocco.
- Scambi reciproci sistematici fra siti dello stesso circuito.
- Comunicati stampa distribuiti in massa su portali di scarsa qualità.

## Monitoraggio

Mensile, con Search Console (link in entrata) e uno strumento a scelta fra Ahrefs,
Semrush o Majestic:

- referring domains totali;
- referring domains **lombardi** (metrica più importante di quella totale);
- referring domains **di settore**;
- anchor text: nessuna anchor commerciale esatta deve superare il 5% del profilo.
