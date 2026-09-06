# 05 — Strategia GEO (Generative Engine Optimization) e AIO

## Il problema in una riga

Un motore di ricerca classifica **pagine**. Un motore generativo estrae **affermazioni**.
Ottimizzare per il secondo significa scrivere in modo che una singola frase, tolta dal suo
contesto, resti vera, completa e attribuibile.

---

## Parte 1 — GEO: rendere il contenuto estraibile

### 1.1 Il pattern "risposta diretta"

Ogni pagina rilevante apre con un blocco `.answer-block` (componente `<AnswerBlock>`) che
contiene una risposta autoconclusiva **entro 60 parole**, subito dopo l'H1 e prima di
qualsiasi approfondimento.

Esempio implementato su `/quanto-costa-ristrutturare-bagno`:

> Un bagno completo di 5-6 mq costa indicativamente fra 8.000 e 18.000 € in Lombardia, con
> rifacimento degli impianti incluso. […] La variabile che pesa di più non è la metratura ma
> lo stato dell'impianto idraulico esistente.

Caratteristiche che la rendono citabile: contiene un numero, un'unità, un ambito geografico e
una condizione. Un LLM può riportarla senza dover leggere il resto della pagina.

Lo stesso testo alimenta l'attributo `answer` del componente `<Seo>`, così la risposta è
presente sia nel corpo che nei metadati.

### 1.2 Formati privilegiati

| Formato | Dove è usato |
|---|---|
| Risposta diretta ≤60 parole | Ogni pagina money, servizio, geo e articolo |
| Tabelle con intestazioni semantiche (`<th scope>`) | Costi per metratura e per intervento, ripartizione budget, distanze di progetto, confronto gres/ceramica |
| Elenchi numerati con passaggi | 12 fasi del metodo, cronoprogramma giorno per giorno, procedura di ricerca infiltrazioni |
| FAQ in `<details>`/accordion + `FAQPage` | Ogni pagina rilevante + hub `/faq` con 29 domande |
| Paragrafi brevi (2-4 frasi) | Regola redazionale su tutto il sito |
| Confronti espliciti "A vs B" | Gres/ceramica, piatto appoggiato/filo pavimento, condensa/infiltrazione |

### 1.3 Prerendering: il prerequisito

Diversi crawler generativi non eseguono JavaScript. Una SPA React senza prerender espone loro
un `<div id="root">` vuoto: nessun titolo, nessun testo, nessuno schema.

Il sito genera **59 pagine HTML statiche** (`npm run prerender`), ognuna con title, meta,
canonical e grafo JSON-LD già nel sorgente. È la differenza fra essere leggibili e non esistere.

### 1.4 Trasparenza come vantaggio competitivo

I range di costo sono dichiarati esplicitamente come **indicativi di mercato**, non come listino.
Le informazioni non verificate sono marcate come da validare. Le detrazioni fiscali non riportano
percentuali, perché cambiano ogni anno.

Questo non indebolisce il contenuto: lo rende più affidabile per un sistema che deve decidere
di cosa fidarsi. Un sito che dichiara i limiti di ciò che afferma è una fonte migliore di uno
che afferma tutto con la stessa sicurezza.

---

## Parte 2 — AIO: rendere l'entità comprensibile

### 2.1 L'associazione da consolidare

```
Bagni Milano → impresa → ristrutturazione bagni → chiavi in mano
             → Milano · Monza · Lodi · Lombardia
             → Metodo Bagni Milano (12 fasi, referente unico, date in contratto)
```

Questa catena è ripetuta, con le stesse parole, in: `llms.txt`, `description` dello schema
`Organization`, pagina Chi siamo, footer, e descrizione consigliata per il Google Business Profile.
La coerenza letterale conta: variare la formulazione a ogni occorrenza indebolisce l'associazione.

### 2.2 Grafo di entità con `@id` stabili

Tutte le pagine emettono un unico `@graph` con nodi identificati da URI canonici:

- `https://www.bagnimilano.it/#organization`
- `https://www.bagnimilano.it/#website`
- `https://www.bagnimilano.it/#localbusiness`

I nodi di pagina (`WebPage`, `Service`, `FAQPage`, `BlogPosting`) **referenziano** questi `@id`
invece di ridichiarare l'organizzazione. Il risultato è un grafo unico e coerente su tutto il
sito, non 59 entità scollegate.

### 2.3 `knowsAbout`

Lo schema `Organization` dichiara esplicitamente le competenze dell'entità: ristrutturazione
bagno, rifacimento bagno, impianto idraulico bagno, trasformazione vasca in doccia, posa
pavimenti e rivestimenti, ristrutturazione bagno in condominio. È il modo diretto per dire
a un sistema automatico *su cosa* questa entità è una fonte.

### 2.4 `llms.txt`

Generato da `scripts/generate-llms.ts` a ogni build. Contiene: definizione dell'entità, fatti
chiave, indice ragionato di tutte le pagine con la loro risposta sintetica, e le 29 FAQ complete.

Non è uno standard riconosciuto. È un file di 19 KB che costa una riga di build e che, se
utilizzato, fornisce un riassunto autorevole del sito scritto dall'azienda invece che dedotto.

### 2.5 Crawler AI: accesso esplicito

`public/robots.txt` ammette esplicitamente GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot,
Claude-User, anthropic-ai, PerplexityBot, Perplexity-User, Google-Extended, Applebot-Extended,
Amazonbot e meta-externalagent.

È una decisione di business, non tecnica: **si rinuncia al controllo sull'uso del contenuto in
cambio della possibilità di essere citati.** Per un'impresa che deve costruire visibilità da
zero, lo scambio conviene. Se in futuro la posizione cambia, si modifica una riga.

### 2.6 Come si misura

La visibilità generativa non ha una Search Console. Il metodo praticabile:

1. Definire 20 prompt di riferimento ("chi ristruttura bagni chiavi in mano a Milano?",
   "quanto costa rifare un bagno a Monza?", "come si trasforma una vasca in doccia?").
2. Eseguirli mensilmente su ChatGPT, Gemini, Perplexity e Google AI Overviews.
3. Registrare: citazione sì/no, posizione nella risposta, accuratezza di ciò che viene detto.
4. Quando una risposta è imprecisa, correggere la pagina che l'ha originata.

Il punto 4 è la parte che quasi nessuno fa ed è quella che produce il vantaggio: se un modello
dice qualcosa di sbagliato sull'azienda, la causa è quasi sempre una pagina ambigua.
