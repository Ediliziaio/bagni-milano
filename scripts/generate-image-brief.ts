/**
 * Genera docs/14-IMMAGINI-DA-PRODURRE.md dal registro src/data/images.ts,
 * così il brief per il fotografo non va mai fuori sincrono col sito.
 * Uso: npm run images
 */
import { writeFileSync } from "node:fs";
import { images } from "../src/data/images";

const byPriority = (p: number) => images.filter((i) => i.priority === p && !i.available);
const done = images.filter((i) => i.available);

const row = (i: (typeof images)[number]) =>
  `| \`${i.id}\` | ${i.where} | ${i.width}×${i.height} px | ${i.brief} |`;

const table = (list: typeof images) =>
  list.length
    ? `| File | Dove compare | Dimensioni minime | Cosa inquadrare |\n|---|---|---|---|\n${list.map(row).join("\n")}`
    : "_Nessuna._";

const pairs = [...new Set(images.filter((i) => i.group).map((i) => i.group!))];

const out = `# 14 — Immagini da produrre

> Generato automaticamente da \`src/data/images.ts\`. Non modificare a mano: \`npm run images\`.

**Stato: ${done.length} di ${images.length} disponibili.**
Finché una foto manca, il sito mostra un segnaposto che dichiara formato e soggetto — non un
box vuoto e non uno stock che non è di Bagni Milano.

---

## Come consegnare i file

1. Formato sorgente: JPEG o TIFF alla massima qualità, orientamento come indicato.
2. Nominare i file **esattamente** come la colonna \`File\` (es. \`hero-home.jpg\`).
3. Salvarli in \`public/img/\`.
4. Convertire in AVIF affiancando il JPEG: \`public/img/hero-home.avif\` + \`public/img/hero-home.jpg\`.
5. In \`src/data/images.ts\` portare \`available\` a \`true\` per quella voce.
6. \`npm run build\`.

Il testo alternativo è già scritto per ogni immagine nel registro: non va reinventato.

---

## Priorità 1 — servono per il lancio

${table(byPriority(1))}

## Priorità 2 — entro 30 giorni

${table(byPriority(2))}

## Priorità 3 — quando possibile

${table(byPriority(3))}

---

## Regola per le coppie prima / dopo

Sono ${pairs.length} coppie: ${pairs.map((p) => `\`${p}\``).join(", ")}.

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

L'immagine \`cantiere-impermeabilizzazione\` è la più importante delle tre: è la lavorazione che
distingue un bagno fatto bene da uno che perde fra due anni.
`;

writeFileSync("docs/14-IMMAGINI-DA-PRODURRE.md", out);
console.log(`docs/14-IMMAGINI-DA-PRODURRE.md — ${images.length - done.length} immagini da produrre, ${pairs.length} coppie prima/dopo`);
