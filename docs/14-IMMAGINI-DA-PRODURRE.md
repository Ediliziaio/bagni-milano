# 14 — Immagini da produrre

> Generato da `src/data/images.ts` e `src/data/image-prompts.ts`. Non modificare a mano: `npm run images`.

**Stato: 3 definitive · 49 da sostituire · 2 da creare.**
Totale libreria: 54 immagini.

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


---

## Priorità 2 — entro 30 giorni

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
