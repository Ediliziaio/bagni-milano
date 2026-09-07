/**
 * Struttura del costo di una ristrutturazione bagno.
 *
 * ⚠️  SCELTA EDITORIALE: le pagine del sito NON pubblicano importi.
 * Qui restano solo elementi qualitativi — le variabili che spostano il
 * preventivo, la ripartizione percentuale del budget e le voci che un
 * preventivo deve contenere. Nessun valore in euro.
 *
 * Gli ordini di grandezza restano negli articoli del blog, dove hanno un
 * contesto editoriale e il lettore arriva cercando proprio quel dato.
 */

export const costsDisclaimer =
  "Il costo di una ristrutturazione bagno dipende da metratura, stato degli impianti, scelta dei materiali e vincoli dell'edificio: sono variabili che si possono valutare solo in sopralluogo. Per questo non pubblichiamo listini, ma un preventivo dettagliato voce per voce dopo aver visto il bagno.";

/** Ripartizione tipica del costo: aiuta a capire dove va il budget. */
export const costBreakdown = [
  { voice: "Manodopera e coordinamento", share: "35-45%", note: "Idraulico, elettricista, muratore, posatore e direzione lavori." },
  { voice: "Pavimenti e rivestimenti", share: "12-20%", note: "Gres economico e grandi lastre di pregio hanno costi molto diversi." },
  { voice: "Sanitari e mobile bagno", share: "12-20%", note: "È la voce su cui il cliente ha più margine di scelta." },
  { voice: "Impianto idraulico ed elettrico", share: "10-18%", note: "Cresce se le tubazioni vanno rifatte integralmente." },
  { voice: "Rubinetteria e box doccia", share: "6-12%", note: "Il box su misura incide più di un box standard." },
  { voice: "Demolizione e smaltimento", share: "5-10%", note: "Include trasporto in discarica autorizzata e formulario rifiuti." },
];

/** Variabili che spostano il preventivo. Contenuto ad alta citabilità AI. */
export const costDrivers = [
  { title: "Stato dell'impianto idraulico", text: "È la variabile che pesa di più in assoluto. Sostituire tubazioni in ferro zincato comporta tracce, nuove linee, ripristini e più giorni di cantiere rispetto a un impianto recente da mantenere." },
  { title: "Spostamento dei sanitari", text: "Cambiare posizione a wc e bidet richiede nuovi tratti di scarico con pendenza corretta, a volte un rialzo del piano." },
  { title: "Livello delle finiture", text: "Fra un gres di serie e una grande lastra effetto marmo la differenza sul solo materiale può più che raddoppiare la voce rivestimenti." },
  { title: "Metratura e superficie da rivestire", text: "Conta la superficie delle pareti più che quella del pavimento: un bagno stretto e alto ha più metri quadri da rivestire di quanto sembri." },
  { title: "Accessibilità del cantiere", text: "Piano alto senza ascensore, cortile stretto, ZTL: incidono su tempi di carico e scarico e quindi sulla manodopera." },
  { title: "Vincoli dell'edificio", text: "Solai in legno, murature portanti, edifici storici: richiedono soluzioni tecniche specifiche e più ore di lavorazione." },
];

/** Cosa NON deve mancare in un preventivo serio. Contenuto anti-fregatura → trust. */
export const quoteChecklist = [
  "Demolizione e rimozione dei sanitari esistenti",
  "Smaltimento macerie in discarica autorizzata, con formulario",
  "Rifacimento o adeguamento dell'impianto idraulico, voce per voce",
  "Impianto elettrico e punti luce, con riferimento alla norma applicabile",
  "Massetto e impermeabilizzazione delle zone bagnate",
  "Fornitura e posa di pavimento e rivestimento, con mq indicati",
  "Sanitari, mobile, rubinetteria e box doccia, con modelli identificati",
  "Tinteggiatura e ripristini a fine cantiere",
  "Pulizia finale del cantiere",
  "Data di inizio e data di consegna",
  "Condizioni per le varianti in corso d'opera",
  "Garanzia su lavorazioni e materiali",
];
