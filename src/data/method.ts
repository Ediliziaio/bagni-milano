/**
 * Metodo proprietario. Nome scelto per essere pronunciabile, memorizzabile
 * e citabile da un LLM ("il Metodo Bagno Certo di Bagni Milano prevede 12 fasi...").
 */
export const method = {
  name: "Metodo Bagno Certo",
  claim: "12 fasi, un solo referente, date scritte in contratto.",
  promise:
    "Il Metodo Bagno Certo è il processo in 12 fasi con cui Bagni Milano gestisce una ristrutturazione bagno chiavi in mano: un unico referente dall'inizio alla fine, preventivo chiuso prima della demolizione e calendario dei lavori messo per iscritto.",
  pillars: [
    { title: "Referente unico", text: "Un solo interlocutore risponde di progetto, cantiere, fornitori e collaudo. Il cliente non coordina nessuno." },
    { title: "Preventivo chiuso", text: "Voci di costo dettagliate e firmate prima della demolizione. Le varianti sono possibili solo con approvazione scritta." },
    { title: "Date in contratto", text: "Data di inizio e data di consegna sono scritte nel contratto, non stimate a voce." },
    { title: "Squadra coordinata", text: "Idraulico, elettricista, muratore e posatore lavorano su un unico cronoprogramma, non a chiamata." },
  ],
  steps: [
    { n: 1, name: "Primo contatto e qualifica", text: "Raccogliamo metratura, zona, stato dell'impianto e obiettivo. In 24-48 ore diciamo se il progetto rientra in quello che sappiamo fare bene.", duration: "1 giorno", output: "Risposta sulla fattibilità entro 24-48 ore", clientAction: "Metratura approssimativa, comune, due foto del bagno attuale" },
    { n: 2, name: "Sopralluogo tecnico", text: "Rilievo misure, verifica scarichi, colonne montanti, quadro elettrico, spessori di massetto e vincoli condominiali. È qui che si scoprono gli imprevisti, non a demolizione fatta.", duration: "1 sopralluogo", output: "Rilievo quotato e elenco delle criticità", clientAction: "Accesso all'immobile per circa un'ora, eventuale regolamento condominiale" },
    { n: 3, name: "Analisi delle esigenze", text: "Chi usa il bagno, quante persone, quali abitudini. Un bagno per due adulti e un bagno per una famiglia con bambini non si progettano allo stesso modo.", duration: "contestuale", output: "Profilo d'uso del bagno", clientAction: "Raccontare abitudini reali: quante persone, orari, esigenze particolari" },
    { n: 4, name: "Progettazione", text: "Pianta quotata, disposizione sanitari, punti luce e prese, render o moodboard dei materiali. Il cliente approva il progetto prima che si ordini qualsiasi cosa.", duration: "3-7 giorni", output: "Pianta quotata e moodboard approvati", clientAction: "Approvazione scritta del progetto prima di qualsiasi ordine" },
    { n: 5, name: "Preventivo dettagliato", text: "Ogni lavorazione ha una voce e un importo: demolizione, smaltimento, impianti, massetto, posa, sanitari, rubinetteria, tinteggiatura, pulizia finale.", duration: "3-5 giorni", output: "Preventivo dettagliato voce per voce", clientAction: "Lettura del preventivo e domande su ciò che non è chiaro" },
    { n: 6, name: "Selezione materiali", text: "Scelta di gres, rivestimenti, sanitari e rubinetteria dentro il budget approvato, con alternative su tre fasce di prezzo.", duration: "1-2 settimane", output: "Elenco materiali definitivo con codici", clientAction: "Scelta fra le alternative proposte, entro il budget approvato" },
    { n: 7, name: "Pratiche e pianificazione", text: "Verifichiamo se serve CILA, gestiamo la comunicazione all'amministratore di condominio e fissiamo il calendario dei lavori.", duration: "variabile", output: "Calendario dei lavori con date di inizio e consegna", clientAction: "Firma del contratto, dati per l'amministratore" },
    { n: 8, name: "Demolizione e smaltimento", text: "Protezione dei percorsi, rimozione di sanitari, rivestimenti e massetto, trasporto a discarica autorizzata con formulario rifiuti.", duration: "1-2 giorni", output: "Bagno svuotato, macerie smaltite con formulario", clientAction: "Liberare il bagno e i percorsi, concordare l'accesso" },
    { n: 9, name: "Impianti idraulico ed elettrico", text: "Tracce, nuove linee di adduzione e scarico, punti luce, prese, eventuale predisposizione per sanitari sospesi e box doccia.", duration: "2-4 giorni", output: "Impianti nuovi collaudati in pressione", clientAction: "Nessuna azione richiesta, se non la disponibilità dell'immobile" },
    { n: 10, name: "Massetto, impermeabilizzazione e posa", text: "Livellamento, guaina liquida su piatto doccia e zone bagnate, posa di pavimento e rivestimento, stuccatura e siliconature.", duration: "3-5 giorni", output: "Fondo planare e zona bagnata impermeabilizzata", clientAction: "Nessuna azione. È la fase con i tempi tecnici non comprimibili" },
    { n: 11, name: "Installazione e finiture", text: "Montaggio sanitari, mobile, rubinetteria, box doccia, radiatore, specchio e illuminazione. Tinteggiatura finale.", duration: "2-3 giorni", output: "Sanitari, arredo e finiture installati", clientAction: "Presenza consigliata per la verifica delle altezze" },
    { n: 12, name: "Controllo qualità e consegna", text: "Prova di tenuta, verifica scarichi e silicone, pulizia di fine cantiere, consegna con checklist firmata e documentazione di garanzia.", duration: "1 giorno", output: "Checklist di collaudo firmata e documentazione", clientAction: "Sopralluogo finale insieme e firma della consegna" },
  ],
} as const;

/**
 * Le 12 fasi raggruppate in 4 momenti. Serve in homepage e sulle landing, dove
 * dodici voci sono troppe: il lettore deve capire la struttura, non memorizzarla.
 */
export const macroPhases = [
  {
    n: 1,
    name: "Progetto",
    range: "Fasi 1-4",
    duration: "1-2 settimane",
    text: "Qualifica, sopralluogo tecnico, analisi delle esigenze e progettazione. Si esce con una pianta quotata approvata.",
    steps: [1, 2, 3, 4],
  },
  {
    n: 2,
    name: "Preventivo e materiali",
    range: "Fasi 5-7",
    duration: "2-3 settimane",
    text: "Preventivo dettagliato voce per voce, selezione dei materiali dentro il budget, pratiche e calendario dei lavori.",
    steps: [5, 6, 7],
  },
  {
    n: 3,
    name: "Cantiere",
    range: "Fasi 8-11",
    duration: "10-15 giorni lavorativi",
    text: "Demolizione, impianti, massetto e impermeabilizzazione, posa, installazione e finiture. Le fasi rumorose sono le prime.",
    steps: [8, 9, 10, 11],
  },
  {
    n: 4,
    name: "Consegna",
    range: "Fase 12",
    duration: "1 giorno",
    text: "Prova di tenuta, verifica degli scarichi, pulizia di fine cantiere e consegna con checklist firmata.",
    steps: [12],
  },
] as const;

export type MethodStep = (typeof method.steps)[number];
