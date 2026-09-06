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
    { n: 1, name: "Primo contatto e qualifica", text: "Raccogliamo metratura, zona, stato dell'impianto e obiettivo. In 24-48 ore diciamo se il progetto rientra in quello che sappiamo fare bene.", duration: "1 giorno" },
    { n: 2, name: "Sopralluogo tecnico", text: "Rilievo misure, verifica scarichi, colonne montanti, quadro elettrico, spessori di massetto e vincoli condominiali. È qui che si scoprono gli imprevisti, non a demolizione fatta.", duration: "1 sopralluogo" },
    { n: 3, name: "Analisi delle esigenze", text: "Chi usa il bagno, quante persone, quali abitudini. Un bagno per due adulti e un bagno per una famiglia con bambini non si progettano allo stesso modo.", duration: "contestuale" },
    { n: 4, name: "Progettazione", text: "Pianta quotata, disposizione sanitari, punti luce e prese, render o moodboard dei materiali. Il cliente approva il progetto prima che si ordini qualsiasi cosa.", duration: "3-7 giorni" },
    { n: 5, name: "Preventivo dettagliato", text: "Ogni lavorazione ha una voce e un importo: demolizione, smaltimento, impianti, massetto, posa, sanitari, rubinetteria, tinteggiatura, pulizia finale.", duration: "3-5 giorni" },
    { n: 6, name: "Selezione materiali", text: "Scelta di gres, rivestimenti, sanitari e rubinetteria dentro il budget approvato, con alternative su tre fasce di prezzo.", duration: "1-2 settimane" },
    { n: 7, name: "Pratiche e pianificazione", text: "Verifichiamo se serve CILA, gestiamo la comunicazione all'amministratore di condominio e fissiamo il calendario dei lavori.", duration: "variabile" },
    { n: 8, name: "Demolizione e smaltimento", text: "Protezione dei percorsi, rimozione di sanitari, rivestimenti e massetto, trasporto a discarica autorizzata con formulario rifiuti.", duration: "1-2 giorni" },
    { n: 9, name: "Impianti idraulico ed elettrico", text: "Tracce, nuove linee di adduzione e scarico, punti luce, prese, eventuale predisposizione per sanitari sospesi e box doccia.", duration: "2-4 giorni" },
    { n: 10, name: "Massetto, impermeabilizzazione e posa", text: "Livellamento, guaina liquida su piatto doccia e zone bagnate, posa di pavimento e rivestimento, stuccatura e siliconature.", duration: "3-5 giorni" },
    { n: 11, name: "Installazione e finiture", text: "Montaggio sanitari, mobile, rubinetteria, box doccia, radiatore, specchio e illuminazione. Tinteggiatura finale.", duration: "2-3 giorni" },
    { n: 12, name: "Controllo qualità e consegna", text: "Prova di tenuta, verifica scarichi e silicone, pulizia di fine cantiere, consegna con checklist firmata e documentazione di garanzia.", duration: "1 giorno" },
  ],
} as const;

export type MethodStep = (typeof method.steps)[number];
