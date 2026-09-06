# 14 — Immagini da produrre

> Generato automaticamente da `src/data/images.ts`. Non modificare a mano: `npm run images`.

**Stato: 26 di 33 disponibili.**
Finché una foto manca, il sito mostra un segnaposto che dichiara formato e soggetto — non un
box vuoto e non uno stock che non è di Bagni Milano.

---

## Come consegnare i file

1. Formato sorgente: JPEG o TIFF alla massima qualità, orientamento come indicato.
2. Nominare i file **esattamente** come la colonna `File` (es. `hero-home.jpg`).
3. Salvarli in `public/img/`.
4. Convertire in AVIF affiancando il JPEG: `public/img/hero-home.avif` + `public/img/hero-home.jpg`.
5. In `src/data/images.ts` portare `available` a `true` per quella voce.
6. `npm run build`.

Il testo alternativo è già scritto per ogni immagine nel registro: non va reinventato.

---

## Priorità 1 — servono per il lancio

| File | Dove compare | Dimensioni minime | Cosa inquadrare |
|---|---|---|---|
| `cantiere-demolizione` | Metodo e processo — fase 8 | 1600×1067 px | Cantiere durante la demolizione: protezioni sui pavimenti, teli, sacchi per le macerie. Deve mostrare ORDINE, non caos. |
| `cantiere-impianti` | Metodo e processo — fase 9 | 1600×1067 px | Tracce a muro con le nuove linee idrauliche ed elettriche in vista, prima della chiusura. |
| `cantiere-impermeabilizzazione` | Metodo, processo e articolo sulle infiltrazioni | 1600×1067 px | Guaina liquida stesa sul piatto doccia e sulle pareti, con nastro di rinforzo sugli angoli. È la lavorazione che nessuno vede: mostrarla è un argomento di vendita. |
| `referente` | Chi siamo — E-E-A-T | 1200×1500 px | Ritratto del referente unico, in cantiere o in showroom, luce naturale, sguardo in camera. |

## Priorità 2 — entro 30 giorni

| File | Dove compare | Dimensioni minime | Cosa inquadrare |
|---|---|---|---|
| `materiali` | Home e metodo — selezione materiali | 1600×1600 px | Composizione dall'alto dei campioni: lastre di gres, campioni di fuga, finiture di rubinetteria. |
| `og-social` | Anteprima social (Open Graph) | 1200×630 px | Una delle foto migliori, ritagliata 1200×630 con spazio per il testo. |

## Priorità 3 — quando possibile

| File | Dove compare | Dimensioni minime | Cosa inquadrare |
|---|---|---|---|
| `showroom` | Home e contatti | 1600×1067 px | Showroom o area di consulenza con i campioni esposti. |

---

## Regola per le coppie prima / dopo

Sono 8 coppie: `milano-centro`, `porta-nuova`, `brera`, `navigli`, `padronale`, `famiglia`, `ospiti`, `walkin`.

**La stessa inquadratura è vincolante.** Un confronto prima/dopo scattato da due punti diversi
non dimostra nulla e si nota subito: è la differenza fra una prova e una fotografia.

In pratica:

- Treppiede, altezza annotata, posizione segnata sul pavimento con nastro adesivo.
- Stessa focale e stessa distanza. Annotare entrambe.
- Stessa direzione di luce: se il "prima" è di mattina, anche il "dopo" va scattato di mattina.
- Scattare il "prima" **sempre**, anche quando sembra un cantiere banale: senza quello scatto
  il "dopo" perde metà del suo valore commerciale.
- Ambiente sgombro in entrambi gli scatti: niente attrezzi nel "dopo", niente effetti personali
  del cliente in nessuno dei due.

## Regole comuni a tutti gli scatti

- **Verticali diritte.** Le fughe e gli stipiti devono essere paralleli ai bordi dell'inquadratura.
  In un bagno una linea storta si vede immediatamente.
- **Niente riflessi del fotografo** negli specchi e nei box doccia. È l'errore più frequente.
- **Niente persone**, salvo il ritratto del referente.
- **Nessuna foto stock.** Il valore di queste immagini sta nell'essere lavori reali di Bagni Milano:
  una foto d'archivio annulla il vantaggio e, se riconosciuta, danneggia la credibilità.
- **Liberatoria del cliente** prima di pubblicare fotografie di un'abitazione privata.

## Perché le foto di cantiere contano quanto quelle finite

Le tre immagini di cantiere — demolizione, impianti, impermeabilizzazione — non sono di
riempimento. Sono la prova visiva del metodo: mostrano le lavorazioni che il cliente non vedrà
mai perché finiscono sotto il rivestimento, ed è esattamente su quelle che si costruisce la
differenza rispetto a un preventivo più economico.

L'immagine `cantiere-impermeabilizzazione` è la più importante delle tre: è la lavorazione che
distingue un bagno fatto bene da uno che perde fra due anni.
