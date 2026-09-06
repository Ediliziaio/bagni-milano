# 14 — Immagini da produrre

> Generato da `src/data/images.ts` e `src/data/image-prompts.ts`. Non modificare a mano: `npm run images`.

**Stato: 3 definitive · 23 da sostituire · 27 da creare.**
Totale libreria: 53 immagini.

---

## Come si consegna un'immagine

1. Genera o scatta l'immagine nel formato indicato.
2. Rinominala **esattamente** come il campo *Nome file* (es. `geo-milano.jpg`). Tutto minuscolo, niente spazi.
3. Salvala in `public/img/`.
4. In `src/data/images.ts` porta `available` a `true` per quella voce.
5. `npm run build`.

Il testo alternativo è già scritto per ogni immagine: non va reinventato.
Formato di consegna: **JPEG**, lato lungo almeno quanto indicato, qualità alta.

---

## Stile comune a tutta la libreria

Queste tre formule sono già incorporate nei prompt qui sotto. Servono a far sembrare
le immagini una sola campagna e non venti scatti scollegati.

**Base fotografica**
```
fotografia di interni realistica, luce naturale morbida da finestra laterale, prospettiva a un punto con verticali perfettamente diritte, obiettivo grandangolare 24mm, nessuna persona, nessun testo o logo visibile, nessun riflesso del fotografo negli specchi, ambiente italiano residenziale, colori fedeli, nessuna saturazione eccessiva
```

**Per gli scatti "dopo" e i bagni finiti**
```
finiture contemporanee: grande formato effetto marmo scuro o pietra chiara, rubinetteria in ottone spazzolato, mobile sospeso in legno chiaro, specchio retroilluminato, sanitari sospesi bianchi, doccia walk-in con vetro trasparente
```

**Per gli scatti "prima"**
```
bagno italiano non ristrutturato degli anni Settanta-Novanta: piastrelle beige o rosa con fascia decorativa, sanitari a terra in ceramica bianca ingiallita, mobile in legno scuro, radiatore tubolare bianco, pavimento in gres a motivi, ambiente pulito ma chiaramente datato
```

---

## ⚠️ Regola vincolante per le coppie prima / dopo

Le due immagini di una coppia devono mostrare **la stessa stanza dalla stessa posizione**:
stessa finestra, stessa porta, stessa prospettiva. Cambia solo ciò che è stato rifatto.

Il modo pratico per ottenerlo con un generatore di immagini: **genera prima lo scatto "prima"**,
poi allega quell'immagine e chiedi la versione "dopo" specificando *"stessa identica inquadratura,
stessa stanza, stessa finestra"*. Generarle separatamente produce due bagni diversi, e il confronto
perde qualsiasi valore.

Con fotografie reali vale lo stesso: treppiede, altezza annotata, posizione segnata sul pavimento.

---

## Priorità 1 — servono per il lancio

### `cantiere-demolizione.jpg`

| | |
|---|---|
| **Nome file** | `cantiere-demolizione.jpg` |
| **Dimensioni minime** | 1600 × 1067 px |
| **Proporzione** | 3:2 orizzontale |
| **Dove compare** | Metodo e processo — fase 8 |
| **Testo alternativo** | Cantiere Bagni Milano durante la demolizione, con protezioni sui percorsi |

**Prompt da usare:**

```
fotografia di interni realistica, luce naturale morbida da finestra laterale, prospettiva a un punto con verticali perfettamente diritte, obiettivo grandangolare 24mm, nessuna persona, nessun testo o logo visibile, nessun riflesso del fotografo negli specchi, ambiente italiano residenziale, colori fedeli, nessuna saturazione eccessiva. Cantiere reale di ristrutturazione bagno durante la demolizione: teli di protezione sul pavimento del corridoio, sacchi big bag per le macerie allineati, vecchie piastrelle rimosse impilate ordinatamente, attrezzi appoggiati in ordine, aspiratore per polveri. L'ambiente deve trasmettere ORDINE e organizzazione, non disordine.
```

---

### `cantiere-impianti.jpg`

| | |
|---|---|
| **Nome file** | `cantiere-impianti.jpg` |
| **Dimensioni minime** | 1600 × 1067 px |
| **Proporzione** | 3:2 orizzontale |
| **Dove compare** | Metodo e processo — fase 9 |
| **Testo alternativo** | Nuovo impianto idraulico ed elettrico in traccia durante una ristrutturazione bagno |

**Prompt da usare:**

```
fotografia di interni realistica, luce naturale morbida da finestra laterale, prospettiva a un punto con verticali perfettamente diritte, obiettivo grandangolare 24mm, nessuna persona, nessun testo o logo visibile, nessun riflesso del fotografo negli specchi, ambiente italiano residenziale, colori fedeli, nessuna saturazione eccessiva. Dettaglio tecnico di un bagno in ristrutturazione: pareti con tracce aperte e nuove tubazioni multistrato rosse e blu in vista, collettore idraulico, scatole elettriche incassate con cavi, prima della chiusura delle tracce. Illuminazione da lampada da cantiere. Il dettaglio tecnico deve essere leggibile e credibile.
```

---

### `cantiere-impermeabilizzazione.jpg`

| | |
|---|---|
| **Nome file** | `cantiere-impermeabilizzazione.jpg` |
| **Dimensioni minime** | 1600 × 1067 px |
| **Proporzione** | 3:2 orizzontale |
| **Dove compare** | Metodo, processo e articolo sulle infiltrazioni |
| **Testo alternativo** | Impermeabilizzazione con guaina liquida della zona doccia prima della posa |

**Prompt da usare:**

```
fotografia di interni realistica, luce naturale morbida da finestra laterale, prospettiva a un punto con verticali perfettamente diritte, obiettivo grandangolare 24mm, nessuna persona, nessun testo o logo visibile, nessun riflesso del fotografo negli specchi, ambiente italiano residenziale, colori fedeli, nessuna saturazione eccessiva. Dettaglio ravvicinato della zona doccia di un bagno in costruzione, con guaina liquida impermeabilizzante di colore azzurro o grigio stesa uniformemente sul fondo e sulle pareti, nastro di rinforzo bianco visibile su tutti gli angoli e attorno alla piletta di scarico. Rullo e secchio del prodotto appoggiati a terra. Prima della posa delle piastrelle.
```

---

### `referente.jpg`

| | |
|---|---|
| **Nome file** | `referente.jpg` |
| **Dimensioni minime** | 1200 × 1500 px |
| **Proporzione** | 4:5 verticale |
| **Dove compare** | Chi siamo — E-E-A-T |
| **Testo alternativo** | Il referente unico di Bagni Milano in cantiere |

**Prompt da usare:**

```
Ritratto fotografico professionale in formato verticale di un uomo italiano sui 40 anni, responsabile di cantiere, camicia scura o polo tecnica, sguardo diretto in camera, espressione seria e affidabile, in piedi in un bagno appena ristrutturato leggermente sfocato sullo sfondo. Luce naturale morbida. Nessun logo visibile. Fotografia realistica, non ritratto in studio.
```


---

## Priorità 2 — entro 30 giorni

### `materiali.jpg`

| | |
|---|---|
| **Nome file** | `materiali.jpg` |
| **Dimensioni minime** | 1600 × 1600 px |
| **Proporzione** | 1:1 quadrato |
| **Dove compare** | Home e metodo — selezione materiali |
| **Testo alternativo** | Campioni di gres, fughe e finiture di rubinetteria selezionati per un progetto |

**Prompt da usare:**

```
Composizione fotografica dall'alto (flat lay) su fondo neutro chiaro: campioni di gres porcellanato effetto marmo scuro e pietra chiara, campioncini di fuga in diverse tonalità, un miscelatore in ottone spazzolato, una piastrella di grande formato appoggiata di taglio, un metro a nastro. Luce naturale diffusa, ombre morbide. Nessun marchio leggibile. Formato quadrato.
```

---

### `geo-milano.jpg`

| | |
|---|---|
| **Nome file** | `geo-milano.jpg` |
| **Dimensioni minime** | 1600 × 900 px |
| **Proporzione** | 16:9 orizzontale |
| **Dove compare** | Landing Milano — apertura |
| **Testo alternativo** | Edilizia residenziale tipica di Milano, area servita da Bagni Milano |

**Prompt da usare:**

```
fotografia di interni realistica, luce naturale morbida da finestra laterale, prospettiva a un punto con verticali perfettamente diritte, obiettivo grandangolare 24mm, nessuna persona, nessun testo o logo visibile, nessun riflesso del fotografo negli specchi, ambiente italiano residenziale, colori fedeli, nessuna saturazione eccessiva. Facciata di un condominio milanese anni Cinquanta-Settanta vista dal cortile interno, ringhiere in ferro, finestre allineate, atmosfera urbana. Nessuna persona, nessuna targa o insegna leggibile. Formato orizzontale.
```

---

### `geo-monza.jpg`

| | |
|---|---|
| **Nome file** | `geo-monza.jpg` |
| **Dimensioni minime** | 1600 × 900 px |
| **Proporzione** | 16:9 orizzontale |
| **Dove compare** | Landing Monza — apertura |
| **Testo alternativo** | Edilizia residenziale tipica di Monza, area servita da Bagni Milano |

**Prompt da usare:**

```
fotografia di interni realistica, luce naturale morbida da finestra laterale, prospettiva a un punto con verticali perfettamente diritte, obiettivo grandangolare 24mm, nessuna persona, nessun testo o logo visibile, nessun riflesso del fotografo negli specchi, ambiente italiano residenziale, colori fedeli, nessuna saturazione eccessiva. Villetta bifamiliare brianzola degli anni Ottanta vista dal giardino, mattoni a vista e intonaco chiaro, siepe curata. Nessuna persona, nessuna targa o insegna leggibile. Formato orizzontale.
```

---

### `geo-lodi.jpg`

| | |
|---|---|
| **Nome file** | `geo-lodi.jpg` |
| **Dimensioni minime** | 1600 × 900 px |
| **Proporzione** | 16:9 orizzontale |
| **Dove compare** | Landing Lodi — apertura |
| **Testo alternativo** | Edilizia residenziale tipica di Lodi, area servita da Bagni Milano |

**Prompt da usare:**

```
fotografia di interni realistica, luce naturale morbida da finestra laterale, prospettiva a un punto con verticali perfettamente diritte, obiettivo grandangolare 24mm, nessuna persona, nessun testo o logo visibile, nessun riflesso del fotografo negli specchi, ambiente italiano residenziale, colori fedeli, nessuna saturazione eccessiva. Cascina lodigiana recuperata a uso residenziale, corte interna in mattoni, portico con travi in legno. Nessuna persona, nessuna targa o insegna leggibile. Formato orizzontale.
```

---

### `geo-bergamo.jpg`

| | |
|---|---|
| **Nome file** | `geo-bergamo.jpg` |
| **Dimensioni minime** | 1600 × 900 px |
| **Proporzione** | 16:9 orizzontale |
| **Dove compare** | Landing Bergamo — apertura |
| **Testo alternativo** | Edilizia residenziale tipica di Bergamo, area servita da Bagni Milano |

**Prompt da usare:**

```
fotografia di interni realistica, luce naturale morbida da finestra laterale, prospettiva a un punto con verticali perfettamente diritte, obiettivo grandangolare 24mm, nessuna persona, nessun testo o logo visibile, nessun riflesso del fotografo negli specchi, ambiente italiano residenziale, colori fedeli, nessuna saturazione eccessiva. Scorcio di Bergamo Città Alta, edifici in pietra e portoni antichi lungo una via stretta in salita. Nessuna persona, nessuna targa o insegna leggibile. Formato orizzontale.
```

---

### `geo-varese.jpg`

| | |
|---|---|
| **Nome file** | `geo-varese.jpg` |
| **Dimensioni minime** | 1600 × 900 px |
| **Proporzione** | 16:9 orizzontale |
| **Dove compare** | Landing Varese — apertura |
| **Testo alternativo** | Edilizia residenziale tipica di Varese, area servita da Bagni Milano |

**Prompt da usare:**

```
fotografia di interni realistica, luce naturale morbida da finestra laterale, prospettiva a un punto con verticali perfettamente diritte, obiettivo grandangolare 24mm, nessuna persona, nessun testo o logo visibile, nessun riflesso del fotografo negli specchi, ambiente italiano residenziale, colori fedeli, nessuna saturazione eccessiva. Villa varesina di inizio Novecento immersa nel verde, facciata chiara con persiane, vialetto di ghiaia. Nessuna persona, nessuna targa o insegna leggibile. Formato orizzontale.
```

---

### `geo-como.jpg`

| | |
|---|---|
| **Nome file** | `geo-como.jpg` |
| **Dimensioni minime** | 1600 × 900 px |
| **Proporzione** | 16:9 orizzontale |
| **Dove compare** | Landing Como — apertura |
| **Testo alternativo** | Edilizia residenziale tipica di Como, area servita da Bagni Milano |

**Prompt da usare:**

```
fotografia di interni realistica, luce naturale morbida da finestra laterale, prospettiva a un punto con verticali perfettamente diritte, obiettivo grandangolare 24mm, nessuna persona, nessun testo o logo visibile, nessun riflesso del fotografo negli specchi, ambiente italiano residenziale, colori fedeli, nessuna saturazione eccessiva. Abitazione affacciata sul lago di Como costruita in pendio, terrazzo con ringhiera, acqua e montagne sullo sfondo. Nessuna persona, nessuna targa o insegna leggibile. Formato orizzontale.
```

---

### `geo-lombardia.jpg`

| | |
|---|---|
| **Nome file** | `geo-lombardia.jpg` |
| **Dimensioni minime** | 1600 × 900 px |
| **Proporzione** | 16:9 orizzontale |
| **Dove compare** | Landing Lombardia — apertura |
| **Testo alternativo** | Edilizia residenziale tipica di Lombardia, area servita da Bagni Milano |

**Prompt da usare:**

```
fotografia di interni realistica, luce naturale morbida da finestra laterale, prospettiva a un punto con verticali perfettamente diritte, obiettivo grandangolare 24mm, nessuna persona, nessun testo o logo visibile, nessun riflesso del fotografo negli specchi, ambiente italiano residenziale, colori fedeli, nessuna saturazione eccessiva. Paesaggio urbano lombardo con edifici residenziali di epoche diverse affiancati, cielo velato di pianura. Nessuna persona, nessuna targa o insegna leggibile. Formato orizzontale.
```

---

### `srv-bagno-chiavi-in-mano.jpg`

| | |
|---|---|
| **Nome file** | `srv-bagno-chiavi-in-mano.jpg` |
| **Dimensioni minime** | 1600 × 900 px |
| **Proporzione** | 16:9 orizzontale |
| **Dove compare** | Pagina servizio /servizi/bagno-chiavi-in-mano |
| **Testo alternativo** | Intervento di Bagni Milano: bagno chiavi in mano |

**Prompt da usare:**

```
fotografia di interni realistica, luce naturale morbida da finestra laterale, prospettiva a un punto con verticali perfettamente diritte, obiettivo grandangolare 24mm, nessuna persona, nessun testo o logo visibile, nessun riflesso del fotografo negli specchi, ambiente italiano residenziale, colori fedeli, nessuna saturazione eccessiva. Bagno completamente finito e pronto all'uso, vista d'insieme dall'ingresso. finiture contemporanee: grande formato effetto marmo scuro o pietra chiara, rubinetteria in ottone spazzolato, mobile sospeso in legno chiaro, specchio retroilluminato, sanitari sospesi bianchi, doccia walk-in con vetro trasparente. Formato orizzontale.
```

---

### `srv-trasformazione-vasca-in-doccia.jpg`

| | |
|---|---|
| **Nome file** | `srv-trasformazione-vasca-in-doccia.jpg` |
| **Dimensioni minime** | 1600 × 900 px |
| **Proporzione** | 16:9 orizzontale |
| **Dove compare** | Pagina servizio /servizi/trasformazione-vasca-in-doccia |
| **Testo alternativo** | Intervento di Bagni Milano: trasformazione vasca in doccia |

**Prompt da usare:**

```
fotografia di interni realistica, luce naturale morbida da finestra laterale, prospettiva a un punto con verticali perfettamente diritte, obiettivo grandangolare 24mm, nessuna persona, nessun testo o logo visibile, nessun riflesso del fotografo negli specchi, ambiente italiano residenziale, colori fedeli, nessuna saturazione eccessiva. Doccia walk-in a filo pavimento installata dove prima c'era una vasca, vetro fisso trasparente. finiture contemporanee: grande formato effetto marmo scuro o pietra chiara, rubinetteria in ottone spazzolato, mobile sospeso in legno chiaro, specchio retroilluminato, sanitari sospesi bianchi, doccia walk-in con vetro trasparente. Formato orizzontale.
```

---

### `srv-bagno-piccolo.jpg`

| | |
|---|---|
| **Nome file** | `srv-bagno-piccolo.jpg` |
| **Dimensioni minime** | 1600 × 900 px |
| **Proporzione** | 16:9 orizzontale |
| **Dove compare** | Pagina servizio /servizi/bagno-piccolo |
| **Testo alternativo** | Intervento di Bagni Milano: bagno piccolo |

**Prompt da usare:**

```
fotografia di interni realistica, luce naturale morbida da finestra laterale, prospettiva a un punto con verticali perfettamente diritte, obiettivo grandangolare 24mm, nessuna persona, nessun testo o logo visibile, nessun riflesso del fotografo negli specchi, ambiente italiano residenziale, colori fedeli, nessuna saturazione eccessiva. Bagno di 4 mq ottimizzato, sanitari sospesi, doccia rettangolare stretta e porta scorrevole. finiture contemporanee: grande formato effetto marmo scuro o pietra chiara, rubinetteria in ottone spazzolato, mobile sospeso in legno chiaro, specchio retroilluminato, sanitari sospesi bianchi, doccia walk-in con vetro trasparente. Formato orizzontale.
```

---

### `srv-ristrutturazione-bagno-condominio.jpg`

| | |
|---|---|
| **Nome file** | `srv-ristrutturazione-bagno-condominio.jpg` |
| **Dimensioni minime** | 1600 × 900 px |
| **Proporzione** | 16:9 orizzontale |
| **Dove compare** | Pagina servizio /servizi/ristrutturazione-bagno-condominio |
| **Testo alternativo** | Intervento di Bagni Milano: ristrutturazione bagno condominio |

**Prompt da usare:**

```
fotografia di interni realistica, luce naturale morbida da finestra laterale, prospettiva a un punto con verticali perfettamente diritte, obiettivo grandangolare 24mm, nessuna persona, nessun testo o logo visibile, nessun riflesso del fotografo negli specchi, ambiente italiano residenziale, colori fedeli, nessuna saturazione eccessiva. Bagno di appartamento in condominio appena rifatto, con porta d'ingresso e corridoio protetto da teli sullo sfondo. finiture contemporanee: grande formato effetto marmo scuro o pietra chiara, rubinetteria in ottone spazzolato, mobile sospeso in legno chiaro, specchio retroilluminato, sanitari sospesi bianchi, doccia walk-in con vetro trasparente. Formato orizzontale.
```

---

### `srv-bagno-senza-demolizione.jpg`

| | |
|---|---|
| **Nome file** | `srv-bagno-senza-demolizione.jpg` |
| **Dimensioni minime** | 1600 × 900 px |
| **Proporzione** | 16:9 orizzontale |
| **Dove compare** | Pagina servizio /servizi/bagno-senza-demolizione |
| **Testo alternativo** | Intervento di Bagni Milano: bagno senza demolizione |

**Prompt da usare:**

```
fotografia di interni realistica, luce naturale morbida da finestra laterale, prospettiva a un punto con verticali perfettamente diritte, obiettivo grandangolare 24mm, nessuna persona, nessun testo o logo visibile, nessun riflesso del fotografo negli specchi, ambiente italiano residenziale, colori fedeli, nessuna saturazione eccessiva. Posa di nuovo rivestimento sopra piastrelle esistenti, dettaglio del bordo fra vecchio e nuovo. finiture contemporanee: grande formato effetto marmo scuro o pietra chiara, rubinetteria in ottone spazzolato, mobile sospeso in legno chiaro, specchio retroilluminato, sanitari sospesi bianchi, doccia walk-in con vetro trasparente. Formato orizzontale.
```

---

### `srv-ristrutturazione-bagno-disabili.jpg`

| | |
|---|---|
| **Nome file** | `srv-ristrutturazione-bagno-disabili.jpg` |
| **Dimensioni minime** | 1600 × 900 px |
| **Proporzione** | 16:9 orizzontale |
| **Dove compare** | Pagina servizio /servizi/ristrutturazione-bagno-disabili |
| **Testo alternativo** | Intervento di Bagni Milano: ristrutturazione bagno disabili |

**Prompt da usare:**

```
fotografia di interni realistica, luce naturale morbida da finestra laterale, prospettiva a un punto con verticali perfettamente diritte, obiettivo grandangolare 24mm, nessuna persona, nessun testo o logo visibile, nessun riflesso del fotografo negli specchi, ambiente italiano residenziale, colori fedeli, nessuna saturazione eccessiva. Bagno accessibile con doccia a filo pavimento, seduta ribaltabile a parete e maniglioni di appoggio, estetica contemporanea non ospedaliera. finiture contemporanee: grande formato effetto marmo scuro o pietra chiara, rubinetteria in ottone spazzolato, mobile sospeso in legno chiaro, specchio retroilluminato, sanitari sospesi bianchi, doccia walk-in con vetro trasparente. Formato orizzontale.
```

---

### `srv-rifacimento-impianto-idraulico-bagno.jpg`

| | |
|---|---|
| **Nome file** | `srv-rifacimento-impianto-idraulico-bagno.jpg` |
| **Dimensioni minime** | 1600 × 900 px |
| **Proporzione** | 16:9 orizzontale |
| **Dove compare** | Pagina servizio /servizi/rifacimento-impianto-idraulico-bagno |
| **Testo alternativo** | Intervento di Bagni Milano: rifacimento impianto idraulico bagno |

**Prompt da usare:**

```
fotografia di interni realistica, luce naturale morbida da finestra laterale, prospettiva a un punto con verticali perfettamente diritte, obiettivo grandangolare 24mm, nessuna persona, nessun testo o logo visibile, nessun riflesso del fotografo negli specchi, ambiente italiano residenziale, colori fedeli, nessuna saturazione eccessiva. Parete di bagno con tracce aperte e nuove tubazioni multistrato rosse e blu collegate a un collettore. finiture contemporanee: grande formato effetto marmo scuro o pietra chiara, rubinetteria in ottone spazzolato, mobile sospeso in legno chiaro, specchio retroilluminato, sanitari sospesi bianchi, doccia walk-in con vetro trasparente. Formato orizzontale.
```

---

### `srv-rifacimento-doccia.jpg`

| | |
|---|---|
| **Nome file** | `srv-rifacimento-doccia.jpg` |
| **Dimensioni minime** | 1600 × 900 px |
| **Proporzione** | 16:9 orizzontale |
| **Dove compare** | Pagina servizio /servizi/rifacimento-doccia |
| **Testo alternativo** | Intervento di Bagni Milano: rifacimento doccia |

**Prompt da usare:**

```
fotografia di interni realistica, luce naturale morbida da finestra laterale, prospettiva a un punto con verticali perfettamente diritte, obiettivo grandangolare 24mm, nessuna persona, nessun testo o logo visibile, nessun riflesso del fotografo negli specchi, ambiente italiano residenziale, colori fedeli, nessuna saturazione eccessiva. Piatto doccia a filo pavimento appena posato con piletta lineare e rivestimento in grande formato. finiture contemporanee: grande formato effetto marmo scuro o pietra chiara, rubinetteria in ottone spazzolato, mobile sospeso in legno chiaro, specchio retroilluminato, sanitari sospesi bianchi, doccia walk-in con vetro trasparente. Formato orizzontale.
```

---

### `pag-costi.jpg`

| | |
|---|---|
| **Nome file** | `pag-costi.jpg` |
| **Dimensioni minime** | 1600 × 900 px |
| **Proporzione** | 16:9 orizzontale |
| **Dove compare** | Money page /costi |
| **Testo alternativo** | Bagni Milano — costi |

**Prompt da usare:**

```
fotografia di interni realistica, luce naturale morbida da finestra laterale, prospettiva a un punto con verticali perfettamente diritte, obiettivo grandangolare 24mm, nessuna persona, nessun testo o logo visibile, nessun riflesso del fotografo negli specchi, ambiente italiano residenziale, colori fedeli, nessuna saturazione eccessiva. Tavolo con preventivo dettagliato, campioni di gres di tre fasce diverse allineati e calcolatrice, ripresa dall'alto a 45 gradi. Formato orizzontale.
```

---

### `pag-tempi.jpg`

| | |
|---|---|
| **Nome file** | `pag-tempi.jpg` |
| **Dimensioni minime** | 1600 × 900 px |
| **Proporzione** | 16:9 orizzontale |
| **Dove compare** | Money page /tempi |
| **Testo alternativo** | Bagni Milano — tempi |

**Prompt da usare:**

```
fotografia di interni realistica, luce naturale morbida da finestra laterale, prospettiva a un punto con verticali perfettamente diritte, obiettivo grandangolare 24mm, nessuna persona, nessun testo o logo visibile, nessun riflesso del fotografo negli specchi, ambiente italiano residenziale, colori fedeli, nessuna saturazione eccessiva. Calendario da cantiere appeso a parete accanto a un bagno in lavorazione, con le giornate segnate a pennarello, nessun testo leggibile. Formato orizzontale.
```

---

### `pag-preventivo.jpg`

| | |
|---|---|
| **Nome file** | `pag-preventivo.jpg` |
| **Dimensioni minime** | 1600 × 900 px |
| **Proporzione** | 16:9 orizzontale |
| **Dove compare** | Money page /preventivo |
| **Testo alternativo** | Bagni Milano — preventivo |

**Prompt da usare:**

```
fotografia di interni realistica, luce naturale morbida da finestra laterale, prospettiva a un punto con verticali perfettamente diritte, obiettivo grandangolare 24mm, nessuna persona, nessun testo o logo visibile, nessun riflesso del fotografo negli specchi, ambiente italiano residenziale, colori fedeli, nessuna saturazione eccessiva. Tecnico che prende le misure di un bagno con metro laser, inquadratura sulle mani e sullo strumento, volto non visibile. Formato orizzontale.
```

---

### `pag-faq.jpg`

| | |
|---|---|
| **Nome file** | `pag-faq.jpg` |
| **Dimensioni minime** | 1600 × 900 px |
| **Proporzione** | 16:9 orizzontale |
| **Dove compare** | Money page /faq |
| **Testo alternativo** | Bagni Milano — faq |

**Prompt da usare:**

```
fotografia di interni realistica, luce naturale morbida da finestra laterale, prospettiva a un punto con verticali perfettamente diritte, obiettivo grandangolare 24mm, nessuna persona, nessun testo o logo visibile, nessun riflesso del fotografo negli specchi, ambiente italiano residenziale, colori fedeli, nessuna saturazione eccessiva. Dettaglio ordinato di un bagno finito, angolo lavabo con specchio retroilluminato. Formato orizzontale.
```

---

### `pag-chi-siamo.jpg`

| | |
|---|---|
| **Nome file** | `pag-chi-siamo.jpg` |
| **Dimensioni minime** | 1600 × 900 px |
| **Proporzione** | 16:9 orizzontale |
| **Dove compare** | Money page /chi-siamo |
| **Testo alternativo** | Bagni Milano — chi siamo |

**Prompt da usare:**

```
fotografia di interni realistica, luce naturale morbida da finestra laterale, prospettiva a un punto con verticali perfettamente diritte, obiettivo grandangolare 24mm, nessuna persona, nessun testo o logo visibile, nessun riflesso del fotografo negli specchi, ambiente italiano residenziale, colori fedeli, nessuna saturazione eccessiva. Squadra di cantiere di tre persone vista di spalle mentre lavora in un bagno in ristrutturazione, volti non riconoscibili. Formato orizzontale.
```

---

### `og-social.jpg`

| | |
|---|---|
| **Nome file** | `og-social.jpg` |
| **Dimensioni minime** | 1200 × 630 px |
| **Proporzione** | orizzontale |
| **Dove compare** | Anteprima social (Open Graph) |
| **Testo alternativo** | Bagni Milano — ristrutturazione bagno chiavi in mano |

**Prompt da usare:**

```
fotografia di interni realistica, luce naturale morbida da finestra laterale, prospettiva a un punto con verticali perfettamente diritte, obiettivo grandangolare 24mm, nessuna persona, nessun testo o logo visibile, nessun riflesso del fotografo negli specchi, ambiente italiano residenziale, colori fedeli, nessuna saturazione eccessiva. Bagno finito, inquadratura orizzontale molto larga (proporzione 1200×630). finiture contemporanee: grande formato effetto marmo scuro o pietra chiara, rubinetteria in ottone spazzolato, mobile sospeso in legno chiaro, specchio retroilluminato, sanitari sospesi bianchi, doccia walk-in con vetro trasparente. La metà sinistra deve essere volutamente semplice e poco dettagliata perché ospiterà del testo. Toni scuri e caldi.
```


---

## Priorità 3 — quando possibile

### `showroom.jpg`

| | |
|---|---|
| **Nome file** | `showroom.jpg` |
| **Dimensioni minime** | 1600 × 1067 px |
| **Proporzione** | 3:2 orizzontale |
| **Dove compare** | Home e contatti |
| **Testo alternativo** | Area di consulenza di Bagni Milano con i campioni dei materiali |

**Prompt da usare:**

```
fotografia di interni realistica, luce naturale morbida da finestra laterale, prospettiva a un punto con verticali perfettamente diritte, obiettivo grandangolare 24mm, nessuna persona, nessun testo o logo visibile, nessun riflesso del fotografo negli specchi, ambiente italiano residenziale, colori fedeli, nessuna saturazione eccessiva. Area di consulenza di un'impresa di ristrutturazioni: tavolo in legno con campionari di piastrelle esposti a parete su espositori verticali, planimetria stampata sul tavolo, sedie. Ambiente ordinato e professionale, toni caldi. Nessun logo o testo leggibile.
```


---

## Immagini già a sistema da sostituire

Sono attive sul sito ma marcate `source: "riferimento"`: coppie prima/dopo generate con AI e
immagini generiche di provenienza esterna. Funzionano come segnaposto di qualità, ma non
documentano lavori di Bagni Milano e per alcune la licenza non è verificata.

Per sostituirle basta sovrascrivere il file in `public/img/` **mantenendo lo stesso nome** e
portare `source` a `"propria"`: nessuna modifica al codice.

- `hero-home.jpg` — Homepage — sfondo dell'hero, desktop
- `hero-home-mobile.jpg` — Homepage — sfondo dell'hero, smartphone
- `home-banda.jpg` — Homepage — fascia immagine a tutta larghezza
- `ba-milano-centro-prima.jpg` — Comparatore prima/dopo
- `ba-milano-centro-dopo.jpg` — Comparatore prima/dopo
- `ba-porta-nuova-prima.jpg` — Comparatore prima/dopo
- `ba-porta-nuova-dopo.jpg` — Comparatore prima/dopo
- `ba-brera-prima.jpg` — Comparatore prima/dopo
- `ba-brera-dopo.jpg` — Comparatore prima/dopo
- `ba-navigli-prima.jpg` — Comparatore prima/dopo
- `ba-navigli-dopo.jpg` — Comparatore prima/dopo
- `ba-padronale-prima.jpg` — Comparatore prima/dopo
- `ba-padronale-dopo.jpg` — Comparatore prima/dopo
- `ba-famiglia-prima.jpg` — Comparatore prima/dopo
- `ba-famiglia-dopo.jpg` — Comparatore prima/dopo
- `ba-ospiti-prima.jpg` — Comparatore prima/dopo
- `ba-ospiti-dopo.jpg` — Comparatore prima/dopo
- `ba-walkin-prima.jpg` — Comparatore prima/dopo
- `ba-walkin-dopo.jpg` — Comparatore prima/dopo
- `art-costi.jpg` — Articoli del cluster Costi
- `art-progettazione.jpg` — Articoli del cluster Progettazione
- `art-idee.jpg` — Articoli dei cluster Idee e Materiali
- `art-lombardia.jpg` — Articoli del cluster Lombardia

---

## Le tre immagini che valgono più delle altre

`cantiere-demolizione`, `cantiere-impianti` e `cantiere-impermeabilizzazione` non sono
riempitivo: sono la prova visiva del metodo. Mostrano le lavorazioni che il cliente non vedrà
mai perché finiscono sotto il rivestimento, ed è esattamente su quelle che si costruisce la
differenza rispetto a un preventivo più economico.

**Per queste tre conviene una fotografia reale invece di un'immagine generata.** Un cantiere
vero ha dettagli che un generatore non riproduce in modo credibile — e sono anche le uniche
tre immagini che un cliente potrebbe voler verificare.
