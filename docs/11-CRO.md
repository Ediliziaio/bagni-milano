# 11 — Piano CRO

## Principio

SEO e conversione non sono in conflitto: sono in conflitto *contenuto lungo* e *pagina che
converte male*. La soluzione non è accorciare il contenuto, è mettere la richiesta di contatto
lungo tutto il percorso di lettura.

## Elementi implementati

| Elemento | Dove | Perché |
|---|---|---|
| **Barra CTA sticky mobile** | Tutte le pagine, sotto i 768px | Chiama / Preventivo sempre raggiungibili. Su mobile è la leva singola con l'impatto maggiore |
| **CTA in header desktop** | Tutte le pagine | "Richiedi preventivo" sempre visibile |
| **`<CtaSection>` a fine pagina** | Tutte le pagine, con testo contestuale | La CTA finale è quella che converte chi ha letto tutto |
| **Blocco risposta diretta** | In alto su ogni pagina | Dà valore prima di chiedere: riduce la frizione della richiesta successiva |
| **Form strutturato** | `/preventivo` | 7 campi, di cui 4 obbligatori. Con qualificazione (comune, metratura, tipo intervento) |
| **"Cosa succede dopo"** | Sidebar del form | Rimuove l'incertezza sul cosa accade dopo l'invio: obiezione silenziosa più comune |
| **"Cosa ci aiuta"** | Sidebar del form | Chiede foto e metratura: alza la qualità del lead |
| **Checklist preventivo** | Pillar + pagina costi | Contenuto anti-fregatura: costruisce fiducia mentre educa |
| **Trasparenza sui limiti** | Ovunque | "Non abbiamo ancora questo dato" costruisce più credibilità di un'affermazione generica |
| **`data-cta` sui pulsanti** | Tutti | Ogni CTA è tracciabile senza modificare il codice |

## Il form: perché 7 campi e non 3

Un form da 3 campi genera più invii e meno appuntamenti. Per un'impresa che deve fare un
sopralluogo fisico, il costo di un lead non qualificato è alto: un'ora di viaggio più un'ora
sul posto.

I campi di qualificazione — comune, metratura, tipo di intervento — permettono di:

- capire subito se l'intervento rientra nell'area servita;
- dare un primo orientamento di costo già alla prima telefonata;
- arrivare al sopralluogo preparati.

**Da misurare, non da assumere.** Se il tasso di completamento risulta sotto il 25%, si testa
una versione a 4 campi con la qualificazione spostata nella telefonata di richiamo.

## ⚠️ Il form oggi non invia nulla

`VITE_LEAD_ENDPOINT` non è configurato. In questa condizione il form **non finge** di inviare:
mostra un messaggio esplicito che la richiesta non è partita e indica i contatti diretti.

Un form che mostra "grazie, ti ricontatteremo" senza inviare nulla è il singolo bug più costoso
che un sito aziendale possa avere, e per definizione nessuno se ne accorge.

**Azione P1:** configurare l'endpoint (CRM, funzione serverless, Formspree o equivalente) e
verificare l'arrivo di un lead di test **prima** di qualsiasi investimento in traffico.

## Test consigliati, in ordine di impatto atteso

| # | Test | Ipotesi | Come si misura |
|---|---|---|---|
| 1 | WhatsApp accanto a "Chiama" nella barra mobile | Nel settore edile molti preferiscono scrivere: possono mandare foto subito | Click sul pulsante, lead ricevuti |
| 2 | Upload foto nel form | Foto in ingresso = sopralluogo più efficace e lead più caldo | Tasso di completamento, qualità dei lead |
| 3 | CTA intermedia a metà delle pagine lunghe | Le pagine costi e pillar sono lunghe: chi decide a metà oggi deve scorrere fino in fondo | Click per posizione |
| 4 | Prova sociale sopra il form | Recensioni vicino al punto di conversione riducono l'esitazione | Tasso di completamento — **richiede recensioni reali** |
| 5 | Calcolatore di costo come lead magnet | Micro-conversione a bassa frizione prima della richiesta di preventivo | Utilizzi, tasso di passaggio a lead |

## Tracciamento da implementare

**Prerequisito:** banner di consenso conforme, prima di qualsiasi analytics o pixel.
Vedi `09-TECNICO-E-PERFORMANCE.md`, sezione debito tecnico.

Eventi da configurare:

| Evento | Trigger |
|---|---|
| `cta_click` | Click su qualsiasi `[data-cta]`, con il valore dell'attributo |
| `form_start` | Primo focus su un campo del form |
| `form_submit` | Invio riuscito |
| `phone_click` | Click su `tel:` |
| `whatsapp_click` | Click su WhatsApp, quando attivo |
| `scroll_75` | 75% di scroll sulle pagine money |

## Micro-copy: perché è scritto così

- **"Raccontaci com'è il tuo bagno oggi"** invece di "Contattaci" — chiede una descrizione,
  non un impegno.
- **"Richiedi un sopralluogo"** invece di "Richiedi informazioni" — nomina un'azione concreta
  e definita.
- **"Nessun impegno"** compare una sola volta, non a ogni CTA: ripetuto perde credibilità.
- **"Ti diciamo se e come possiamo aiutarti"** — ammette la possibilità di un no, e questo
  paradossalmente aumenta la fiducia.
