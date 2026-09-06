/**
 * Genera docs/14-IMMAGINI-DA-PRODURRE.md da src/data/images.ts e
 * src/data/image-prompts.ts, così il brief resta sempre in sincrono col sito.
 * Uso: npm run images
 */
import { writeFileSync } from "node:fs";
import { images, type ImageSpec } from "../src/data/images";
import { prompts, STYLE_BASE, STYLE_DOPO, STYLE_PRIMA } from "../src/data/image-prompts";

const todo = images.filter((i) => !i.available);
const ref = images.filter((i) => i.available && i.source === "riferimento");
const own = images.filter((i) => i.available && i.source === "propria");

const ratio = (i: ImageSpec) => {
  const r = i.width / i.height;
  if (Math.abs(r - 16 / 9) < 0.08) return "16:9 orizzontale";
  if (Math.abs(r - 4 / 3) < 0.08) return "4:3 orizzontale";
  if (Math.abs(r - 3 / 2) < 0.08) return "3:2 orizzontale";
  if (Math.abs(r - 1) < 0.05) return "1:1 quadrato";
  if (Math.abs(r - 4 / 5) < 0.08) return "4:5 verticale";
  if (Math.abs(r - 3 / 4) < 0.08) return "3:4 verticale";
  return r > 1 ? "orizzontale" : "verticale";
};

function block(i: ImageSpec): string {
  const prompt = prompts[i.id];
  return `### \`${i.id}.jpg\`

| | |
|---|---|
| **Nome file** | \`${i.id}.jpg\` |
| **Dimensioni minime** | ${i.width} × ${i.height} px |
| **Proporzione** | ${ratio(i)} |
| **Dove compare** | ${i.where} |
| **Testo alternativo** | ${i.alt} |
${i.group ? `| **Coppia** | \`${i.group}\` — scatto **${i.phase}** |\n` : ""}
${prompt ? `**Prompt da usare:**\n\n\`\`\`\n${prompt.replace(/\s+/g, " ").trim()}\n\`\`\`\n` : `_Prompt non definito: ${i.brief}_\n`}`;
}

const group = (list: ImageSpec[], p: 1 | 2 | 3) => list.filter((i) => i.priority === p);

const section = (title: string, list: ImageSpec[]) =>
  list.length ? `## ${title}\n\n${list.map(block).join("\n---\n\n")}\n` : "";

const out = `# 14 — Immagini da produrre

> Generato da \`src/data/images.ts\` e \`src/data/image-prompts.ts\`. Non modificare a mano: \`npm run images\`.

**Stato: ${own.length} definitive · ${ref.length} da sostituire · ${todo.length} da creare.**
Totale libreria: ${images.length} immagini.

---

## Come si consegna un'immagine

1. Genera o scatta l'immagine nel formato indicato.
2. Rinominala **esattamente** come il campo *Nome file* (es. \`geo-milano.jpg\`). Tutto minuscolo, niente spazi.
3. Salvala in \`public/img/\`.
4. In \`src/data/images.ts\` porta \`available\` a \`true\` per quella voce.
5. \`npm run build\`.

Il testo alternativo è già scritto per ogni immagine: non va reinventato.
Formato di consegna: **JPEG**, lato lungo almeno quanto indicato, qualità alta.

---

## Stile comune a tutta la libreria

Queste tre formule sono già incorporate nei prompt qui sotto. Servono a far sembrare
le immagini una sola campagna e non venti scatti scollegati.

**Base fotografica**
\`\`\`
${STYLE_BASE}
\`\`\`

**Per gli scatti "dopo" e i bagni finiti**
\`\`\`
${STYLE_DOPO}
\`\`\`

**Per gli scatti "prima"**
\`\`\`
${STYLE_PRIMA}
\`\`\`

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

${section("Priorità 1 — servono per il lancio", group(todo, 1))}
---

${section("Priorità 2 — entro 30 giorni", group(todo, 2))}
---

${section("Priorità 3 — quando possibile", group(todo, 3))}
---

## Immagini già a sistema da sostituire

Sono attive sul sito ma marcate \`source: "riferimento"\`: coppie prima/dopo generate con AI e
immagini generiche di provenienza esterna. Funzionano come segnaposto di qualità, ma non
documentano lavori di Bagni Milano e per alcune la licenza non è verificata.

Per sostituirle basta sovrascrivere il file in \`public/img/\` **mantenendo lo stesso nome** e
portare \`source\` a \`"propria"\`: nessuna modifica al codice.

${ref.map((i) => `- \`${i.id}.jpg\` — ${i.where}`).join("\n")}

---

## Le tre immagini che valgono più delle altre

\`cantiere-demolizione\`, \`cantiere-impianti\` e \`cantiere-impermeabilizzazione\` non sono
riempitivo: sono la prova visiva del metodo. Mostrano le lavorazioni che il cliente non vedrà
mai perché finiscono sotto il rivestimento, ed è esattamente su quelle che si costruisce la
differenza rispetto a un preventivo più economico.

**Per queste tre conviene una fotografia reale invece di un'immagine generata.** Un cantiere
vero ha dettagli che un generatore non riproduce in modo credibile — e sono anche le uniche
tre immagini che un cliente potrebbe voler verificare.
`;

writeFileSync("docs/14-IMMAGINI-DA-PRODURRE.md", out);
console.log(`docs/14-IMMAGINI-DA-PRODURRE.md`);
console.log(`  ${own.length} definitive · ${ref.length} da sostituire · ${todo.length} da creare`);
console.log(`  prompt disponibili: ${images.filter((i) => prompts[i.id]).length}/${images.length}`);
