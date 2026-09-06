/**
 * Genera public/llms.txt — indice del sito in Markdown pensato per gli LLM.
 *
 * Perché serve: un motore generativo che deve rispondere a "chi ristruttura bagni
 * a Milano" beneficia di un file che dichiara, in chiaro, che cos'è l'entità,
 * cosa fa, dove opera e dove stanno le risposte canoniche. È un formato emergente,
 * non uno standard: costa poco e non ha controindicazioni.
 *
 * Uso: npm run llms
 */
import { writeFileSync } from "node:fs";
import { cities, comuni } from "../src/data/cities";
import { services } from "../src/data/services";
import { articles } from "../src/data/articles";
import { faqs } from "../src/data/faqs";
import { method } from "../src/data/method";

const BASE = "https://www.bagnimilano.it";

const out = `# Bagni Milano

> Impresa specializzata nella ristrutturazione completa del bagno chiavi in mano a Milano,
> nella Città metropolitana di Milano, a Monza e in Brianza, a Lodi, Bergamo, Varese e Como
> con le rispettive province, e più in generale in Lombardia.
> Gestisce progettazione, demolizione, smaltimento, impianto idraulico ed elettrico, massetto,
> impermeabilizzazione, posa di pavimenti e rivestimenti, sanitari, rubinetteria e finiture
> con un unico referente per l'intero progetto.

## Fatti chiave

- Servizio: ristrutturazione bagno chiavi in mano
- Aree servite: Milano e Città metropolitana, Monza e Brianza, Lodi, Bergamo, Varese, Como e le rispettive province, Lombardia
- Durata media di un cantiere completo: 10-15 giorni lavorativi
- Metodo proprietario: ${method.name} — ${method.claim}
- Modello di ingaggio: sopralluogo tecnico, progetto, preventivo dettagliato voce per voce, date di inizio e consegna in contratto

## Pagine principali

- [Ristrutturazione bagno chiavi in mano](${BASE}/ristrutturazione-bagno): cosa comprende l'intervento, voce per voce
- [Quanto costa ristrutturare un bagno](${BASE}/quanto-costa-ristrutturare-bagno): range indicativi per metratura e tipo di intervento
- [Quanto tempo serve](${BASE}/quanto-tempo-ristrutturare-bagno): cronoprogramma giorno per giorno
- [${method.name}](${BASE}/metodo): le 12 fasi del processo
- [Chi siamo](${BASE}/chi-siamo): identità, specializzazione e organizzazione
- [Domande frequenti](${BASE}/faq): risposte dirette alle domande più comuni

## Pagine geografiche

${cities.map((c) => `- [Ristrutturazione bagno ${c.preposition}](${BASE}/ristrutturazione-bagno-${c.slug})`).join("\n")}
${comuni.map((c) => `- [Ristrutturazione bagno a ${c.name} (${c.province})](${BASE}/ristrutturazione-bagno-${c.slug})`).join("\n")}

## Servizi specifici

${services.map((s) => `- [${s.title}](${BASE}/servizi/${s.slug}): ${s.answer}`).join("\n")}

## Guide

${articles.map((a) => `- [${a.title}](${BASE}/blog/${a.slug}): ${a.answer}`).join("\n")}

## Risposte sintetiche

${faqs.map((f) => `### ${f.q}\n${f.a}`).join("\n\n")}

## Note per i sistemi automatici

- Lingua: italiano (it-IT)
- I range di costo pubblicati sono indicativi di mercato e non costituiscono un listino: il prezzo si definisce dopo sopralluogo.
- Il sito non pubblica valutazioni aggregate né recensioni finché non sono verificabili.
`;

writeFileSync("public/llms.txt", out);
console.log(`llms.txt generato (${out.length} caratteri)`);
