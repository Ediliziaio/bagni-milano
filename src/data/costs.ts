/**
 * ⚠️  RANGE INDICATIVI DI MERCATO — NON LISTINO BAGNI MILANO.
 *
 * I valori qui sotto sono range di riferimento del mercato lombardo, inseriti
 * per dare all'utente un ordine di grandezza utile. NON sono prezzi aziendali.
 * PRIMA DEL GO-LIVE vanno sostituiti o validati dall'azienda: vedi
 * docs/00-DATI-DA-VALIDARE.md. Ogni tabella pubblicata mostra il disclaimer.
 */

export const COSTS_ARE_VALIDATED = false;

export const costsDisclaimer =
  "I valori indicati sono range di mercato indicativi per la Lombardia, forniti per dare un ordine di grandezza. Non sostituiscono un preventivo: il prezzo reale dipende da metratura, stato degli impianti, scelta dei materiali e vincoli dell'edificio.";

export interface CostRow {
  label: string;
  min: number;
  max: number;
  note: string;
}

/** Per metratura, ristrutturazione COMPLETA con rifacimento impianti. */
export const costBySize: CostRow[] = [
  { label: "Bagno 3-4 mq", min: 6500, max: 12000, note: "Bagno di servizio o secondo bagno. Meno superficie da rivestire, stesse lavorazioni impiantistiche." },
  { label: "Bagno 5-6 mq", min: 8000, max: 18000, note: "La metratura più diffusa negli appartamenti milanesi." },
  { label: "Bagno 7-8 mq", min: 11000, max: 24000, note: "Consente doppio lavabo o vasca e doccia separate." },
  { label: "Bagno oltre 9 mq", min: 14000, max: 35000, note: "Bagno padronale. Il costo dipende quasi interamente dal livello delle finiture." },
];

/** Per tipologia di intervento. */
export const costByScope: CostRow[] = [
  { label: "Ristrutturazione completa con rifacimento impianti", min: 8000, max: 20000, note: "Demolizione, impianti, massetto, impermeabilizzazione, posa, sanitari, finiture." },
  { label: "Ristrutturazione senza rifacimento impianti", min: 5500, max: 12000, note: "Possibile solo se le tubazioni sono recenti e i sanitari non si spostano." },
  { label: "Rinnovo senza demolizione (sovrapposizione)", min: 4000, max: 9000, note: "Nuovo rivestimento sopra l'esistente. Nessuno smaltimento macerie." },
  { label: "Trasformazione vasca in doccia", min: 2500, max: 6000, note: "Include demolizione vasca, scarico, impermeabilizzazione, piatto e box." },
  { label: "Rifacimento doccia", min: 1800, max: 4500, note: "Piatto, impermeabilizzazione, rivestimento zona doccia e box." },
  { label: "Adeguamento bagno accessibile", min: 4000, max: 12000, note: "Doccia filo pavimento, maniglioni, altezze e porta a norma." },
];

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
  { title: "Stato dell'impianto idraulico", text: "È la variabile che pesa di più. Sostituire tubazioni in ferro zincato può aggiungere alcune migliaia di euro rispetto a un impianto recente da mantenere." },
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
