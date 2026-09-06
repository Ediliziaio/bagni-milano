# 14 — Immagini da produrre

> Generato da `src/data/images.ts` e `src/data/image-prompts.ts`. Non modificare a mano: `npm run images`.

**Stato: 3 definitive · 49 da sostituire · 30 da creare.**
Totale libreria: 82 immagini.

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

### `pag-ristrutturazione-bagno.jpg`

| | |
|---|---|
| **Nome file** | `pag-ristrutturazione-bagno.jpg` |
| **Dimensioni minime** | 1600 × 900 px |
| **Proporzione** | 16:9 orizzontale |
| **Dove compare** | Pillar /ristrutturazione-bagno — apertura |
| **Testo alternativo** | Bagno ristrutturato chiavi in mano da Bagni Milano, vista d'insieme |

**Prompt da usare:**

```
fotografia di interni realistica, luce naturale morbida da finestra laterale, prospettiva a un punto con verticali perfettamente diritte, obiettivo grandangolare 24mm, nessuna persona, nessun testo o logo visibile, nessun riflesso del fotografo negli specchi, ambiente italiano residenziale, colori fedeli, nessuna saturazione eccessiva. Bagno completo appena consegnato, vista d'insieme dall'ingresso, ambiente sgombro e pulito. Finiture contemporanee, luce naturale. Formato orizzontale.
```

---

### `pag-metodo.jpg`

| | |
|---|---|
| **Nome file** | `pag-metodo.jpg` |
| **Dimensioni minime** | 1600 × 900 px |
| **Proporzione** | 16:9 orizzontale |
| **Dove compare** | Pagina /metodo — apertura |
| **Testo alternativo** | Tavolo di progetto con planimetria, campioni e cronoprogramma |

**Prompt da usare:**

```
fotografia di interni realistica, luce naturale morbida da finestra laterale, prospettiva a un punto con verticali perfettamente diritte, obiettivo grandangolare 24mm, nessuna persona, nessun testo o logo visibile, nessun riflesso del fotografo negli specchi, ambiente italiano residenziale, colori fedeli, nessuna saturazione eccessiva. Tavolo da lavoro con planimetria quotata, campioni di gres, metro e cronoprogramma stampato: la fase di progetto prima dell'apertura del cantiere. Ripresa dall'alto a 45 gradi, nessun testo leggibile. Formato orizzontale.
```

---

### `pag-servizi.jpg`

| | |
|---|---|
| **Nome file** | `pag-servizi.jpg` |
| **Dimensioni minime** | 1600 × 900 px |
| **Proporzione** | 16:9 orizzontale |
| **Dove compare** | Pagina /servizi — apertura |
| **Testo alternativo** | I servizi di ristrutturazione bagno di Bagni Milano |

**Prompt da usare:**

```
fotografia di interni realistica, luce naturale morbida da finestra laterale, prospettiva a un punto con verticali perfettamente diritte, obiettivo grandangolare 24mm, nessuna persona, nessun testo o logo visibile, nessun riflesso del fotografo negli specchi, ambiente italiano residenziale, colori fedeli, nessuna saturazione eccessiva. Composizione orizzontale di un bagno finito con doccia walk-in, mobile sospeso e sanitari sospesi. Inquadratura ampia e ordinata. Formato orizzontale.
```

---

### `lav-massetto.jpg`

| | |
|---|---|
| **Nome file** | `lav-massetto.jpg` |
| **Dimensioni minime** | 1600 × 1067 px |
| **Proporzione** | 3:2 orizzontale |
| **Dove compare** | Pillar — fascia lavorazioni |
| **Testo alternativo** | Massetto autolivellante steso sul pavimento di un bagno in ristrutturazione |

**Prompt da usare:**

```
fotografia di interni realistica, luce naturale morbida da finestra laterale, prospettiva a un punto con verticali perfettamente diritte, obiettivo grandangolare 24mm, nessuna persona, nessun testo o logo visibile, nessun riflesso del fotografo negli specchi, ambiente italiano residenziale, colori fedeli, nessuna saturazione eccessiva. Massetto autolivellante appena steso sul pavimento di un bagno in ristrutturazione, superficie umida e uniforme, staggia appoggiata a parete. Prima della posa. Formato orizzontale.
```

---

### `lav-posa.jpg`

| | |
|---|---|
| **Nome file** | `lav-posa.jpg` |
| **Dimensioni minime** | 1600 × 1067 px |
| **Proporzione** | 3:2 orizzontale |
| **Dove compare** | Pillar — fascia lavorazioni |
| **Testo alternativo** | Posa del pavimento in gres di grande formato in un bagno |

**Prompt da usare:**

```
fotografia di interni realistica, luce naturale morbida da finestra laterale, prospettiva a un punto con verticali perfettamente diritte, obiettivo grandangolare 24mm, nessuna persona, nessun testo o logo visibile, nessun riflesso del fotografo negli specchi, ambiente italiano residenziale, colori fedeli, nessuna saturazione eccessiva. Posa in corso del pavimento in gres di grande formato in un bagno: alcune lastre posate, crociere distanziatrici, livella e ventose appoggiate accanto. Nessuna persona. Formato orizzontale.
```

---

### `fase-progetto.jpg`

| | |
|---|---|
| **Nome file** | `fase-progetto.jpg` |
| **Dimensioni minime** | 1600 × 1067 px |
| **Proporzione** | 3:2 orizzontale |
| **Dove compare** | Metodo — macro-fase Progetto |
| **Testo alternativo** | Sopralluogo tecnico in un bagno da ristrutturare |

**Prompt da usare:**

```
fotografia di interni realistica, luce naturale morbida da finestra laterale, prospettiva a un punto con verticali perfettamente diritte, obiettivo grandangolare 24mm, nessuna persona, nessun testo o logo visibile, nessun riflesso del fotografo negli specchi, ambiente italiano residenziale, colori fedeli, nessuna saturazione eccessiva. Sopralluogo tecnico in un bagno da ristrutturare: metro laser su treppiede, blocco per appunti e torcia appoggiati, ambiente ancora con finiture datate. Nessuna persona. Formato orizzontale.
```

---

### `fase-materiali.jpg`

| | |
|---|---|
| **Nome file** | `fase-materiali.jpg` |
| **Dimensioni minime** | 1600 × 1067 px |
| **Proporzione** | 3:2 orizzontale |
| **Dove compare** | Metodo — macro-fase Preventivo e materiali |
| **Testo alternativo** | Campioni di materiali selezionati per un progetto di ristrutturazione bagno |

**Prompt da usare:**

```
fotografia di interni realistica, luce naturale morbida da finestra laterale, prospettiva a un punto con verticali perfettamente diritte, obiettivo grandangolare 24mm, nessuna persona, nessun testo o logo visibile, nessun riflesso del fotografo negli specchi, ambiente italiano residenziale, colori fedeli, nessuna saturazione eccessiva. Composizione dall'alto di campioni selezionati per un progetto: due lastre di gres, campioncini di fuga, un miscelatore in ottone spazzolato e una maniglia, disposti in ordine su fondo neutro. Formato orizzontale.
```

---

### `fase-consegna.jpg`

| | |
|---|---|
| **Nome file** | `fase-consegna.jpg` |
| **Dimensioni minime** | 1600 × 1067 px |
| **Proporzione** | 3:2 orizzontale |
| **Dove compare** | Metodo — macro-fase Consegna |
| **Testo alternativo** | Bagno finito il giorno della consegna, con la documentazione sul mobile |

**Prompt da usare:**

```
fotografia di interni realistica, luce naturale morbida da finestra laterale, prospettiva a un punto con verticali perfettamente diritte, obiettivo grandangolare 24mm, nessuna persona, nessun testo o logo visibile, nessun riflesso del fotografo negli specchi, ambiente italiano residenziale, colori fedeli, nessuna saturazione eccessiva. Bagno finito e pulito il giorno della consegna, con una cartellina di documenti e una checklist appoggiate sul mobile lavabo. Ambiente ordinato, luce naturale, nessuna persona. Formato orizzontale.
```


---

## Priorità 2 — entro 30 giorni

### `art-quanto-costa-rifare-un-bagno.jpg`

| | |
|---|---|
| **Nome file** | `art-quanto-costa-rifare-un-bagno.jpg` |
| **Dimensioni minime** | 1600 × 900 px |
| **Proporzione** | 16:9 orizzontale |
| **Dove compare** | Articolo /blog/quanto-costa-rifare-un-bagno |
| **Testo alternativo** | Preventivo di ristrutturazione bagno con campioni di gres e calcolatrice |

**Prompt da usare:**

```
fotografia di interni realistica, luce naturale morbida da finestra laterale, prospettiva a un punto con verticali perfettamente diritte, obiettivo grandangolare 24mm, nessuna persona, nessun testo o logo visibile, nessun riflesso del fotografo negli specchi, ambiente italiano residenziale, colori fedeli, nessuna saturazione eccessiva. Preventivo di ristrutturazione stampato su un tavolo in legno con calcolatrice, metro a nastro arrotolato e due campioni di gres appoggiati. Ripresa dall'alto a 45 gradi. Nessun testo o cifra leggibile. Formato orizzontale.
```

---

### `art-costo-piastrelle-bagno.jpg`

| | |
|---|---|
| **Nome file** | `art-costo-piastrelle-bagno.jpg` |
| **Dimensioni minime** | 1600 × 900 px |
| **Proporzione** | 16:9 orizzontale |
| **Dove compare** | Articolo /blog/costo-piastrelle-bagno |
| **Testo alternativo** | Campioni di gres porcellanato di formati diversi per il rivestimento del bagno |

**Prompt da usare:**

```
fotografia di interni realistica, luce naturale morbida da finestra laterale, prospettiva a un punto con verticali perfettamente diritte, obiettivo grandangolare 24mm, nessuna persona, nessun testo o logo visibile, nessun riflesso del fotografo negli specchi, ambiente italiano residenziale, colori fedeli, nessuna saturazione eccessiva. Campioni di gres porcellanato di formati diversi appoggiati in verticale contro una parete chiara, dal 30x60 alla grande lastra, con un metro a nastro appoggiato accanto. Luce naturale laterale. Formato orizzontale.
```

---

### `art-quanto-costa-trasformare-vasca-in-doccia.jpg`

| | |
|---|---|
| **Nome file** | `art-quanto-costa-trasformare-vasca-in-doccia.jpg` |
| **Dimensioni minime** | 1600 × 900 px |
| **Proporzione** | 16:9 orizzontale |
| **Dove compare** | Articolo /blog/quanto-costa-trasformare-vasca-in-doccia |
| **Testo alternativo** | Vasca rimossa in cantiere con lo scarico in vista prima della trasformazione in doccia |

**Prompt da usare:**

```
fotografia di interni realistica, luce naturale morbida da finestra laterale, prospettiva a un punto con verticali perfettamente diritte, obiettivo grandangolare 24mm, nessuna persona, nessun testo o logo visibile, nessun riflesso del fotografo negli specchi, ambiente italiano residenziale, colori fedeli, nessuna saturazione eccessiva. Vasca da bagno appena rimossa in un cantiere: il muretto perimetrale demolito, lo scarico in PVC in vista sul massetto, vecchie piastrelle asportate sulla parete. Ambiente pulito e ordinato. Formato orizzontale.
```

---

### `art-costo-bagno-6-mq.jpg`

| | |
|---|---|
| **Nome file** | `art-costo-bagno-6-mq.jpg` |
| **Dimensioni minime** | 1600 × 900 px |
| **Proporzione** | 16:9 orizzontale |
| **Dove compare** | Articolo /blog/costo-bagno-6-mq |
| **Testo alternativo** | Bagno di 6 mq ristrutturato, vista d'insieme dall'ingresso |

**Prompt da usare:**

```
fotografia di interni realistica, luce naturale morbida da finestra laterale, prospettiva a un punto con verticali perfettamente diritte, obiettivo grandangolare 24mm, nessuna persona, nessun testo o logo visibile, nessun riflesso del fotografo negli specchi, ambiente italiano residenziale, colori fedeli, nessuna saturazione eccessiva. Bagno finito di circa 6 mq visto dall'ingresso, con mobile sospeso, sanitari sospesi e doccia in nicchia. Un metro a nastro esteso appoggiato sul pavimento in primo piano. Formato orizzontale.
```

---

### `art-costo-manodopera-ristrutturazione-bagno.jpg`

| | |
|---|---|
| **Nome file** | `art-costo-manodopera-ristrutturazione-bagno.jpg` |
| **Dimensioni minime** | 1600 × 900 px |
| **Proporzione** | 16:9 orizzontale |
| **Dove compare** | Articolo /blog/costo-manodopera-ristrutturazione-bagno |
| **Testo alternativo** | Posatore al lavoro sul rivestimento di un bagno in ristrutturazione |

**Prompt da usare:**

```
fotografia di interni realistica, luce naturale morbida da finestra laterale, prospettiva a un punto con verticali perfettamente diritte, obiettivo grandangolare 24mm, nessuna persona, nessun testo o logo visibile, nessun riflesso del fotografo negli specchi, ambiente italiano residenziale, colori fedeli, nessuna saturazione eccessiva. Mani di un posatore che stende collante con la spatola dentata su una parete di bagno, con crociere distanziatrici e livella appoggiate accanto. Volto non visibile, dettaglio ravvicinato. Formato orizzontale.
```

---

### `art-leggere-preventivo-ristrutturazione-bagno.jpg`

| | |
|---|---|
| **Nome file** | `art-leggere-preventivo-ristrutturazione-bagno.jpg` |
| **Dimensioni minime** | 1600 × 900 px |
| **Proporzione** | 16:9 orizzontale |
| **Dove compare** | Articolo /blog/leggere-preventivo-ristrutturazione-bagno |
| **Testo alternativo** | Preventivo dettagliato di ristrutturazione bagno aperto su una scrivania |

**Prompt da usare:**

```
fotografia di interni realistica, luce naturale morbida da finestra laterale, prospettiva a un punto con verticali perfettamente diritte, obiettivo grandangolare 24mm, nessuna persona, nessun testo o logo visibile, nessun riflesso del fotografo negli specchi, ambiente italiano residenziale, colori fedeli, nessuna saturazione eccessiva. Preventivo dettagliato a piu' pagine aperto su una scrivania, con penna appoggiata e una riga evidenziata a matita. Righe e tabelle visibili ma nessun testo o importo leggibile. Ripresa dall'alto. Formato orizzontale.
```

---

### `art-come-progettare-un-bagno.jpg`

| | |
|---|---|
| **Nome file** | `art-come-progettare-un-bagno.jpg` |
| **Dimensioni minime** | 1600 × 900 px |
| **Proporzione** | 16:9 orizzontale |
| **Dove compare** | Articolo /blog/come-progettare-un-bagno |
| **Testo alternativo** | Pianta quotata di un bagno con la disposizione dei sanitari |

**Prompt da usare:**

```
fotografia di interni realistica, luce naturale morbida da finestra laterale, prospettiva a un punto con verticali perfettamente diritte, obiettivo grandangolare 24mm, nessuna persona, nessun testo o logo visibile, nessun riflesso del fotografo negli specchi, ambiente italiano residenziale, colori fedeli, nessuna saturazione eccessiva. Pianta quotata di un bagno stampata su carta bianca con matita, scalimetro e gomma appoggiati sopra. Il disegno deve sembrare un elaborato tecnico reale con quote e simboli dei sanitari, ma senza testo leggibile. Formato orizzontale.
```

---

### `art-dimensioni-minime-bagno.jpg`

| | |
|---|---|
| **Nome file** | `art-dimensioni-minime-bagno.jpg` |
| **Dimensioni minime** | 1600 × 900 px |
| **Proporzione** | 16:9 orizzontale |
| **Dove compare** | Articolo /blog/dimensioni-minime-bagno |
| **Testo alternativo** | Rilievo delle misure di un bagno piccolo con metro laser |

**Prompt da usare:**

```
fotografia di interni realistica, luce naturale morbida da finestra laterale, prospettiva a un punto con verticali perfettamente diritte, obiettivo grandangolare 24mm, nessuna persona, nessun testo o logo visibile, nessun riflesso del fotografo negli specchi, ambiente italiano residenziale, colori fedeli, nessuna saturazione eccessiva. Metro laser appoggiato sul pavimento di un piccolo bagno vuoto in fase di rilievo, con il raggio che raggiunge la parete opposta. Ambiente spoglio, pareti neutre. Formato orizzontale.
```

---

### `art-errori-da-evitare-ristrutturazione-bagno.jpg`

| | |
|---|---|
| **Nome file** | `art-errori-da-evitare-ristrutturazione-bagno.jpg` |
| **Dimensioni minime** | 1600 × 900 px |
| **Proporzione** | 16:9 orizzontale |
| **Dove compare** | Articolo /blog/errori-da-evitare-ristrutturazione-bagno |
| **Testo alternativo** | Difetti di posa in un bagno: fughe irregolari e siliconatura mal eseguita |

**Prompt da usare:**

```
fotografia di interni realistica, luce naturale morbida da finestra laterale, prospettiva a un punto con verticali perfettamente diritte, obiettivo grandangolare 24mm, nessuna persona, nessun testo o logo visibile, nessun riflesso del fotografo negli specchi, ambiente italiano residenziale, colori fedeli, nessuna saturazione eccessiva. Dettaglio ravvicinato di una posa mal eseguita: fughe di larghezza irregolare, un angolo con silicone applicato male, una piastrella leggermente fuori piano. Luce radente che evidenzia il difetto. Formato orizzontale.
```

---

### `art-gres-o-ceramica-per-il-bagno.jpg`

| | |
|---|---|
| **Nome file** | `art-gres-o-ceramica-per-il-bagno.jpg` |
| **Dimensioni minime** | 1600 × 900 px |
| **Proporzione** | 16:9 orizzontale |
| **Dove compare** | Articolo /blog/gres-o-ceramica-per-il-bagno |
| **Testo alternativo** | Confronto fra un campione di gres porcellanato e uno di ceramica smaltata |

**Prompt da usare:**

```
fotografia di interni realistica, luce naturale morbida da finestra laterale, prospettiva a un punto con verticali perfettamente diritte, obiettivo grandangolare 24mm, nessuna persona, nessun testo o logo visibile, nessun riflesso del fotografo negli specchi, ambiente italiano residenziale, colori fedeli, nessuna saturazione eccessiva. Due campioni affiancati su fondo neutro: una lastra di gres porcellanato effetto marmo scuro e una piastrella in ceramica smaltata chiara, riprese di taglio per mostrarne lo spessore diverso. Luce naturale diffusa. Formato orizzontale.
```

---

### `art-impermeabilizzazione-bagno.jpg`

| | |
|---|---|
| **Nome file** | `art-impermeabilizzazione-bagno.jpg` |
| **Dimensioni minime** | 1600 × 900 px |
| **Proporzione** | 16:9 orizzontale |
| **Dove compare** | Articolo /blog/impermeabilizzazione-bagno |
| **Testo alternativo** | Impermeabilizzazione con guaina liquida della zona doccia prima della posa |

**Prompt da usare:**

```
fotografia di interni realistica, luce naturale morbida da finestra laterale, prospettiva a un punto con verticali perfettamente diritte, obiettivo grandangolare 24mm, nessuna persona, nessun testo o logo visibile, nessun riflesso del fotografo negli specchi, ambiente italiano residenziale, colori fedeli, nessuna saturazione eccessiva. Zona doccia di un bagno in costruzione con guaina liquida impermeabilizzante grigio-azzurra stesa uniformemente su fondo e pareti, nastro di rinforzo bianco visibile sugli angoli e attorno alla piletta. Rullo e secchio appoggiati a terra. Formato orizzontale.
```

---

### `art-sanitari-sospesi.jpg`

| | |
|---|---|
| **Nome file** | `art-sanitari-sospesi.jpg` |
| **Dimensioni minime** | 1600 × 900 px |
| **Proporzione** | 16:9 orizzontale |
| **Dove compare** | Articolo /blog/sanitari-sospesi |
| **Testo alternativo** | Telaio per sanitari sospesi installato prima della controparete |

**Prompt da usare:**

```
fotografia di interni realistica, luce naturale morbida da finestra laterale, prospettiva a un punto con verticali perfettamente diritte, obiettivo grandangolare 24mm, nessuna persona, nessun testo o logo visibile, nessun riflesso del fotografo negli specchi, ambiente italiano residenziale, colori fedeli, nessuna saturazione eccessiva. Telaio metallico per sanitari sospesi montato e fissato a pavimento e parete, con cassetta di risciacquo integrata e tubazioni collegate, prima della chiusura in cartongesso. Dettaglio tecnico leggibile. Formato orizzontale.
```

---

### `art-muffa-in-bagno-cause-e-soluzioni.jpg`

| | |
|---|---|
| **Nome file** | `art-muffa-in-bagno-cause-e-soluzioni.jpg` |
| **Dimensioni minime** | 1600 × 900 px |
| **Proporzione** | 16:9 orizzontale |
| **Dove compare** | Articolo /blog/muffa-in-bagno-cause-e-soluzioni |
| **Testo alternativo** | Muffa nera nell'angolo alto di un bagno, sulla fuga e sull'intonaco |

**Prompt da usare:**

```
fotografia di interni realistica, luce naturale morbida da finestra laterale, prospettiva a un punto con verticali perfettamente diritte, obiettivo grandangolare 24mm, nessuna persona, nessun testo o logo visibile, nessun riflesso del fotografo negli specchi, ambiente italiano residenziale, colori fedeli, nessuna saturazione eccessiva. Dettaglio ravvicinato dell'angolo alto di un bagno con muffa nera puntinata sulla fuga e sull'intonaco. Illuminazione naturale cruda, realistico e non drammatizzato. Formato orizzontale.
```

---

### `art-infiltrazioni-dal-bagno.jpg`

| | |
|---|---|
| **Nome file** | `art-infiltrazioni-dal-bagno.jpg` |
| **Dimensioni minime** | 1600 × 900 px |
| **Proporzione** | 16:9 orizzontale |
| **Dove compare** | Articolo /blog/infiltrazioni-dal-bagno |
| **Testo alternativo** | Macchia di infiltrazione sul soffitto dell'appartamento sottostante un bagno |

**Prompt da usare:**

```
fotografia di interni realistica, luce naturale morbida da finestra laterale, prospettiva a un punto con verticali perfettamente diritte, obiettivo grandangolare 24mm, nessuna persona, nessun testo o logo visibile, nessun riflesso del fotografo negli specchi, ambiente italiano residenziale, colori fedeli, nessuna saturazione eccessiva. Macchia di umidita' con alone giallastro e intonaco che si sfoglia sul soffitto di una stanza, sotto un bagno. Luce naturale da finestra, ambiente residenziale ordinato. Formato orizzontale.
```

---

### `art-cattivi-odori-in-bagno.jpg`

| | |
|---|---|
| **Nome file** | `art-cattivi-odori-in-bagno.jpg` |
| **Dimensioni minime** | 1600 × 900 px |
| **Proporzione** | 16:9 orizzontale |
| **Dove compare** | Articolo /blog/cattivi-odori-in-bagno |
| **Testo alternativo** | Sifone del lavabo smontato per la pulizia sotto il mobile del bagno |

**Prompt da usare:**

```
fotografia di interni realistica, luce naturale morbida da finestra laterale, prospettiva a un punto con verticali perfettamente diritte, obiettivo grandangolare 24mm, nessuna persona, nessun testo o logo visibile, nessun riflesso del fotografo negli specchi, ambiente italiano residenziale, colori fedeli, nessuna saturazione eccessiva. Sifone a bottiglia smontato sotto il lavabo di un bagno, con la parte inferiore staccata e appoggiata, tubi in vista dentro il mobile aperto. Dettaglio ravvicinato. Formato orizzontale.
```

---

### `art-scarico-bagno-lento.jpg`

| | |
|---|---|
| **Nome file** | `art-scarico-bagno-lento.jpg` |
| **Dimensioni minime** | 1600 × 900 px |
| **Proporzione** | 16:9 orizzontale |
| **Dove compare** | Articolo /blog/scarico-bagno-lento |
| **Testo alternativo** | Acqua che ristagna sul piatto doccia per scarico lento |

**Prompt da usare:**

```
fotografia di interni realistica, luce naturale morbida da finestra laterale, prospettiva a un punto con verticali perfettamente diritte, obiettivo grandangolare 24mm, nessuna persona, nessun testo o logo visibile, nessun riflesso del fotografo negli specchi, ambiente italiano residenziale, colori fedeli, nessuna saturazione eccessiva. Piatto doccia con acqua che ristagna attorno alla piletta invece di defluire, griglia di scarico visibile. Ripresa dall'alto ravvicinata, luce naturale. Formato orizzontale.
```

---

### `art-poca-pressione-acqua-bagno.jpg`

| | |
|---|---|
| **Nome file** | `art-poca-pressione-acqua-bagno.jpg` |
| **Dimensioni minime** | 1600 × 900 px |
| **Proporzione** | 16:9 orizzontale |
| **Dove compare** | Articolo /blog/poca-pressione-acqua-bagno |
| **Testo alternativo** | Soffione doccia con getto debole per ugelli otturati dal calcare |

**Prompt da usare:**

```
fotografia di interni realistica, luce naturale morbida da finestra laterale, prospettiva a un punto con verticali perfettamente diritte, obiettivo grandangolare 24mm, nessuna persona, nessun testo o logo visibile, nessun riflesso del fotografo negli specchi, ambiente italiano residenziale, colori fedeli, nessuna saturazione eccessiva. Soffione doccia acceso con getto debole e disomogeneo, alcuni ugelli otturati dal calcare. Dettaglio ravvicinato su fondo di rivestimento scuro. Formato orizzontale.
```

---

### `art-serve-la-cila-per-rifare-il-bagno.jpg`

| | |
|---|---|
| **Nome file** | `art-serve-la-cila-per-rifare-il-bagno.jpg` |
| **Dimensioni minime** | 1600 × 900 px |
| **Proporzione** | 16:9 orizzontale |
| **Dove compare** | Articolo /blog/serve-la-cila-per-rifare-il-bagno |
| **Testo alternativo** | Planimetria e modulistica per la comunicazione dei lavori |

**Prompt da usare:**

```
fotografia di interni realistica, luce naturale morbida da finestra laterale, prospettiva a un punto con verticali perfettamente diritte, obiettivo grandangolare 24mm, nessuna persona, nessun testo o logo visibile, nessun riflesso del fotografo negli specchi, ambiente italiano residenziale, colori fedeli, nessuna saturazione eccessiva. Planimetria di un appartamento piegata su una scrivania accanto a un modulo amministrativo e una penna. Nessun testo leggibile, nessun dato personale, nessuno stemma istituzionale. Ripresa dall'alto. Formato orizzontale.
```

---

### `art-detrazioni-ristrutturazione-bagno.jpg`

| | |
|---|---|
| **Nome file** | `art-detrazioni-ristrutturazione-bagno.jpg` |
| **Dimensioni minime** | 1600 × 900 px |
| **Proporzione** | 16:9 orizzontale |
| **Dove compare** | Articolo /blog/detrazioni-ristrutturazione-bagno |
| **Testo alternativo** | Documenti fiscali e ricevute per la detrazione dei lavori di ristrutturazione |

**Prompt da usare:**

```
fotografia di interni realistica, luce naturale morbida da finestra laterale, prospettiva a un punto con verticali perfettamente diritte, obiettivo grandangolare 24mm, nessuna persona, nessun testo o logo visibile, nessun riflesso del fotografo negli specchi, ambiente italiano residenziale, colori fedeli, nessuna saturazione eccessiva. Documenti fiscali e ricevute impilati su una scrivania accanto a una calcolatrice e una penna. Nessun importo o testo leggibile. Ripresa dall'alto a 45 gradi, luce naturale. Formato orizzontale.
```

---

### `art-ristrutturare-bagno-a-milano.jpg`

| | |
|---|---|
| **Nome file** | `art-ristrutturare-bagno-a-milano.jpg` |
| **Dimensioni minime** | 1600 × 900 px |
| **Proporzione** | 16:9 orizzontale |
| **Dove compare** | Articolo /blog/ristrutturare-bagno-a-milano |
| **Testo alternativo** | Cortile interno di un condominio milanese degli anni Sessanta |

**Prompt da usare:**

```
fotografia di interni realistica, luce naturale morbida da finestra laterale, prospettiva a un punto con verticali perfettamente diritte, obiettivo grandangolare 24mm, nessuna persona, nessun testo o logo visibile, nessun riflesso del fotografo negli specchi, ambiente italiano residenziale, colori fedeli, nessuna saturazione eccessiva. Cortile interno di un condominio milanese degli anni Sessanta: facciata intonacata chiara, ringhiere in ferro sui ballatoi, finestre allineate, qualche pianta. Luce di giornata nuvolosa, atmosfera urbana italiana. Formato orizzontale.
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
- `cantiere-demolizione.jpg` — Metodo e processo — fase 8
- `cantiere-impianti.jpg` — Metodo e processo — fase 9
- `cantiere-impermeabilizzazione.jpg` — Metodo, processo e articolo sulle infiltrazioni
- `referente.jpg` — Chi siamo — E-E-A-T
- `materiali.jpg` — Home e metodo — selezione materiali
- `team.jpg` — Chi siamo — fascia squadra
- `art-costi.jpg` — Articoli del cluster Costi
- `art-progettazione.jpg` — Articoli del cluster Progettazione
- `art-idee.jpg` — Articoli dei cluster Idee e Materiali
- `art-lombardia.jpg` — Articoli del cluster Lombardia
- `geo-milano.jpg` — Landing Milano — apertura
- `geo-monza.jpg` — Landing Monza — apertura
- `geo-lodi.jpg` — Landing Lodi — apertura
- `geo-bergamo.jpg` — Landing Bergamo — apertura
- `geo-varese.jpg` — Landing Varese — apertura
- `geo-como.jpg` — Landing Como — apertura
- `geo-lombardia.jpg` — Landing Lombardia — apertura
- `srv-bagno-chiavi-in-mano.jpg` — Pagina servizio /servizi/bagno-chiavi-in-mano
- `srv-trasformazione-vasca-in-doccia.jpg` — Pagina servizio /servizi/trasformazione-vasca-in-doccia
- `srv-bagno-piccolo.jpg` — Pagina servizio /servizi/bagno-piccolo
- `srv-ristrutturazione-bagno-condominio.jpg` — Pagina servizio /servizi/ristrutturazione-bagno-condominio
- `srv-bagno-senza-demolizione.jpg` — Pagina servizio /servizi/bagno-senza-demolizione
- `srv-ristrutturazione-bagno-disabili.jpg` — Pagina servizio /servizi/ristrutturazione-bagno-disabili
- `srv-rifacimento-impianto-idraulico-bagno.jpg` — Pagina servizio /servizi/rifacimento-impianto-idraulico-bagno
- `srv-rifacimento-doccia.jpg` — Pagina servizio /servizi/rifacimento-doccia
- `pag-costi.jpg` — Money page /costi
- `pag-tempi.jpg` — Money page /tempi
- `pag-preventivo.jpg` — Money page /preventivo
- `pag-faq.jpg` — Money page /faq
- `pag-chi-siamo.jpg` — Money page /chi-siamo

---

## Le tre immagini che valgono più delle altre

`cantiere-demolizione`, `cantiere-impianti` e `cantiere-impermeabilizzazione` non sono
riempitivo: sono la prova visiva del metodo. Mostrano le lavorazioni che il cliente non vedrà
mai perché finiscono sotto il rivestimento, ed è esattamente su quelle che si costruisce la
differenza rispetto a un preventivo più economico.

**Per queste tre conviene una fotografia reale invece di un'immagine generata.** Un cantiere
vero ha dettagli che un generatore non riproduce in modo credibile — e sono anche le uniche
tre immagini che un cliente potrebbe voler verificare.
