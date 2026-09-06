# 04 — Strategia Local SEO

Per un'impresa di ristrutturazione il Local SEO non è un canale fra tanti: è **il** canale.
La maggioranza delle query commerciali del settore è locale, e su quelle il fattore di
ranking dominante non è il sito ma il **Google Business Profile** più la prossimità.

Il sito serve a due cose: sostenere il GBP con contenuto coerente, e intercettare le query
che il GBP non copre (informative, di costo, di procedura).

## 1. Google Business Profile — priorità assoluta

| Voce | Impostazione raccomandata |
|---|---|
| Nome | Esattamente la forma scelta in `00-DATI-DA-VALIDARE.md`. Nessuna keyword aggiunta al nome: è una violazione delle linee guida e comporta sospensione |
| Categoria primaria | **Impresa di ristrutturazioni** (o "Bathroom remodeler" se disponibile nella lingua del profilo) |
| Categorie secondarie | Idraulico, Piastrellista, Impresa edile — solo quelle realmente esercitate |
| Area di servizio | Milano, Città metropolitana, Monza e Brianza, Lodi. Impostare come *service area business* se non c'è showroom con accesso al pubblico |
| Descrizione | 750 caratteri che ripetono l'entità: cosa fa, dove, con quale metodo. Riusare la formulazione di `llms.txt` per coerenza |
| Servizi | Voci separate per ciascuna pagina servizio del sito, con link diretto alla pagina corrispondente |
| Prodotti | Le tipologie di intervento con range di prezzo, una volta validati |
| Foto | Minimo 20 al lancio, poi 4-8 al mese. **Foto di cantiere reali**, non stock: sono anche il materiale delle schede progetto |
| Post | 1 a settimana, alternando progetti conclusi e guide del blog |
| Q&A | Precaricare 8-10 domande dalle FAQ del sito e rispondere dall'account aziendale |
| Messaggi | Attivare solo se qualcuno risponde entro un'ora. Un tempo di risposta alto peggiora il profilo |

### Recensioni

È la leva singola con il ROI più alto, e oggi il punto più debole.

- Richiesta sistematica **alla consegna**, con la checklist di collaudo in mano: è il momento
  di massima soddisfazione del cliente.
- Link diretto alla scheda in un QR code sul documento di consegna.
- Rispondere a **tutte** le recensioni entro 48 ore, citando l'intervento
  ("bagno di 6 mq in zona Porta Romana"): la risposta è contenuto locale indicizzabile.
- **Vietato:** recensioni sollecitate con incentivi o pubblicate da chi non è cliente.
  Oltre a essere contro le policy, è il tipo di segnale che Google individua e sanziona.
- Solo quando esistono recensioni reali e verificabili si potrà attivare `aggregateRating`
  nello schema (oggi volutamente assente: `HAS_VERIFIED_REVIEWS = false`).

## 2. Coerenza NAP

Nome, Indirizzo e Telefono devono essere **identici, carattere per carattere**, su:

sito · Google Business Profile · Apple Maps · Bing Places · PagineGialle · Facebook ·
Instagram · directory di settore · fatture e preventivi.

Variazioni come "Via Roma 5" / "via Roma, 5" / "V. Roma 5" spezzano l'entità. Si decide
**una** forma canonica e la si usa ovunque.

## 3. Citation building — sequenza consigliata

**Fase 1 — fondamentali (settimana 1-2)**
Google Business Profile · Apple Business Connect · Bing Places · PagineGialle · Virgilio ·
Cylex · Yelp Italia

**Fase 2 — settore (settimana 3-6)**
Habitissimo · Instapro (ex ProntoPro) · Houzz Italia · Edilnet · Archilovers ·
portali di preventivi edilizi

> Attenzione ai marketplace di preventivi: portano lead ma mettono l'azienda in
> competizione di prezzo con imprese non comparabili. Utili come citation, da valutare
> con freddezza come canale commerciale — sono l'opposto del posizionamento "non il più
> economico, il più prevedibile".

**Fase 3 — territorio (mese 2-4)**
Camera di Commercio · associazioni artigiane locali · consorzi edili ·
albo fornitori di amministratori di condominio · registro imprese

## 4. Presidio dei tre poli

| Polo | Leva prevalente | Azione specifica |
|---|---|---|
| **Milano** | Volume e competizione alta | Landing città + quartieri (solo con progetti reali) + recensioni concentrate + post GBP settimanali |
| **Monza e Brianza** | Competizione minore, ticket più alto | Landing Monza + 4 comuni. Partnership con showroom di arredo bagno brianzoli: è un territorio con filiera dell'arredo densa |
| **Lodi** | Competizione bassa, distanza maggiore | Landing Lodi + 2 comuni. Posizionamento su "case di corte" e "bagni ricavati", nicchia poco presidiata |

## 5. Segnali locali sul sito già implementati

- 22 pagine geografiche con patrimonio edilizio, criticità e zone specifiche
- `areaServed` nello schema `Organization` e `HomeAndConstructionBusiness`
- `Service` con `areaServed` puntuale su ogni landing geografica
- Meta `geo.region` / `geo.placename`
- Footer con link a tutte le zone servite (crawlabilità e rilevanza)
- FAQ dedicate "Operate anche a Monza / a Lodi?"

## 6. Da non fare

- Creare pagine per comuni dove non si interviene realmente.
- Inserire indirizzi di comodo o sedi virtuali per moltiplicare le schede GBP: è la
  violazione più sanzionata del Local SEO.
- Nascondere elenchi di comuni in fondo alla pagina a soli fini di keyword: è keyword stuffing.
