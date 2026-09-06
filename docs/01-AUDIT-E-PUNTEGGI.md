# 01 — Audit del sito attuale e punteggi

**Oggetto dell'audit:** `https://bagni-milan-app.lovable.app/` — l'unica presenza web
esistente di Bagni Milano al 6 settembre 2026.
**Metodo:** analisi dell'HTML servito, della struttura, dei metadati e della copertura
semantica. I numeri riportati sono misurati, non stimati.

---

## 1. Sintesi in una riga

Il prototipo è un'**ottima landing page di vendita** e un **non-sito dal punto di vista SEO**:
una pagina singola, senza H1, senza dati strutturati, con canonical relativo e `lang="en"`,
ospitata su un sottodominio di terze parti. Converte chi ci arriva; non può acquisire nessuno.

---

## 2. Rilievi misurati

| Elemento | Valore rilevato | Perché è un problema |
|---|---|---|
| Pagine indicizzabili | **1** | Nessuna copertura di query informative, di costo, di tempo o geografiche |
| Tag `<h1>` | **0** | Manca il segnale on-page più forte. 12 `<h2>` e 14 `<h3>` senza un H1 che li governi |
| Blocchi JSON-LD | **0** | Nessuna entità dichiarata: né Organization, né LocalBusiness, né FAQPage |
| `<html lang>` | `en` | Sito interamente in italiano dichiarato come inglese |
| `<link rel="canonical">` | `/` | Canonical relativo alla root: non identifica alcun URL assoluto |
| `og:url` | `/` | Stesso difetto sull'Open Graph |
| `twitter:card` | `summary` | Card piccola invece di `summary_large_image` su un sito visivo |
| Link interni | **3** | Nessuna architettura: la navigazione è ad ancore nella stessa pagina |
| `<link rel=preload as=image>` | **16**, di cui **14 cross-origin** | 16 immagini in preload competono per la banda; 14 puntano a un *altro* dominio Lovable. È il contrario di un'ottimizzazione LCP |
| Font caricati | 3 famiglie × 5 pesi = **15 combinazioni** | Cormorant Garamond, Playfair Display e Inter, tutte con 5 pesi. Costo di rete e di rendering elevato |
| Immagini con `alt` | 17/17 | ✅ unico elemento tecnico già corretto |
| Dominio | `*.lovable.app` | Nessuna authority accumulabile sul brand; non indicizzabile come asset aziendale |
| Sitemap / robots dedicati | assenti | — |
| Pagine costi / tempi / geo | assenti | Sono le query a più alto volume del settore |

## 3. Analisi dei contenuti

Il copy è costruito su una scala emotiva (pressioni lavorative, burnout, "santuario domestico",
"rimandare è la scelta più costosa"). Funziona in una landing a pagamento, dove il traffico è già
qualificato e interrotto.

Su traffico organico è inefficace, per due motivi:

1. **Non risponde a nessuna domanda.** Chi cerca su Google cerca "quanto costa rifare un bagno",
   non una riflessione sul benessere domestico. Zero copertura informativa = zero traffico.
2. **Non è citabile.** Un motore generativo estrae fatti, definizioni, numeri e procedure.
   Un testo persuasivo senza dati non contiene nulla che un LLM possa riportare.

Elementi di valore già presenti e da conservare: il metodo in 6 punti, la tabella comparativa
"noi vs gli altri", le 9 FAQ (che contengono il dato reale dei 10-15 giorni), la sezione prima/dopo.

## 4. Punteggi — stato attuale

Scala 0-100. Il punteggio misura la distanza dall'obiettivo dichiarato nel brief, non la qualità
grafica.

| Area | Punteggio | Motivazione sintetica |
|---|---:|---|
| SEO tecnica | **22** | `lang` errato, canonical relativo, nessuna sitemap, preload dannosi, dominio di terze parti |
| SEO on-page | **15** | Nessun H1, title unico, nessuna keyword commerciale presidiata |
| Local SEO | **10** | Solo la parola "Milano" nel testo. Nessuna pagina geografica, nessun dato NAP |
| Struttura del sito | **8** | Una pagina, tre link interni, navigazione ad ancore |
| Contenuti | **30** | Copy persuasivo di buona fattura, ma zero contenuto informativo |
| Topical authority | **5** | Nessun cluster, nessun articolo, nessuna profondità |
| GEO | **12** | Nessun dato strutturato, nessuna risposta diretta estraibile |
| AIO | **10** | Entità non dichiarata, `llms.txt` assente, crawler AI non gestiti |
| UX | **72** | Buona: gerarchia visiva chiara, comparatore prima/dopo, accordion FAQ |
| CRO | **58** | CTA presenti e ripetute, ma nessun form, nessun telefono cliccabile, nessuna barra sticky mobile |
| Performance | **35** | 16 preload immagine (14 cross-origin) e 15 varianti di font: profilo LCP pessimo |
| Autorevolezza | **20** | Nessuna prova verificabile, nessuna recensione, dominio non proprietario |
| **Media** | **✎ 24,8 / 100** | |

## 5. Punteggi — dopo l'intervento in questo repository

Punteggi raggiungibili con il codice consegnato, **una volta chiusi i TODO bloccanti**
di `00-DATI-DA-VALIDARE.md`. Le voci che restano basse dipendono da dati o attività
esterne al codice: onestamente non possono salire prima.

| Area | Prima | Dopo | Cosa lo determina |
|---|---:|---:|---|
| SEO tecnica | 22 | **88** | SSG su 59 URL, canonical assoluti, sitemap+robots+llms.txt generati, redirect 301, header di cache e sicurezza |
| SEO on-page | 15 | **90** | Un H1 per pagina, title e description unici, gerarchia H2/H3, una keyword primaria per URL |
| Local SEO | 10 | **72** | 22 pagine geografiche con contenuto differenziato. Il resto dipende dal GBP, che è fuori dal codice |
| Struttura del sito | 8 | **92** | Pillar + cluster + hub, profondità di crawl massima 3, breadcrumb su ogni pagina |
| Contenuti | 30 | **74** | 12 guide complete, 8 pagine servizio, pagine costi e tempi. Sale a 90 con il piano editoriale eseguito |
| Topical authority | 5 | **55** | Base costruita; l'authority è funzione del tempo e del volume pubblicato |
| GEO | 12 | **86** | Blocco risposta diretta su ogni pagina, FAQPage e HowTo, tabelle, liste, paragrafi brevi |
| AIO | 10 | **88** | Entità con `@id` stabili, `knowsAbout`, `llms.txt`, crawler AI esplicitamente ammessi |
| UX | 72 | **86** | Navigazione reale, breadcrumb, skip link, focus visibile, `prefers-reduced-motion` |
| CRO | 58 | **80** | Form strutturato, CTA sticky mobile, "cosa succede dopo", checklist preventivo. Sale a 90 con l'endpoint attivo |
| Performance | 35 | **85** | HTML statico, code splitting, font ridotti a 3+2+4 pesi, zero preload cross-origin. Da confermare con Lighthouse su dominio reale |
| Autorevolezza | 20 | **45** | Il codice non può crearla: dipende da recensioni, backlink e case study reali |
| **Media** | **24,8** | **✎ 78,4** | |

## 6. Le cinque cose che spostano di più, in ordine

1. **Dominio proprietario + migrazione.** Finché il sito vive su `lovable.app` nessun segnale si accumula.
2. **Chiusura dei TODO bloccanti.** Telefono, indirizzo ed endpoint del form: senza, il sito acquisisce e poi perde i lead.
3. **Google Business Profile.** Per query locali pesa più di qualsiasi ottimizzazione on-page.
4. **Pubblicazione dei 4 progetti reali con foto.** Trust, contenuto locale e materiale citabile in un colpo solo.
5. **Esecuzione del piano editoriale.** La topical authority non ha scorciatoie.
