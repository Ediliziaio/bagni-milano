/** Cronoprogramma tipo. Base per la pagina /quanto-tempo-ristrutturare-bagno e per HowTo schema. */
export const timelineAnswer =
  "Una ristrutturazione completa del bagno richiede in media 7-12 giorni lavorativi di cantiere, pari a circa 2-3 settimane di calendario. Prima del cantiere servono 2-4 settimane per sopralluogo, progetto, preventivo e ordine dei materiali.";

export const preWork = [
  { phase: "Sopralluogo tecnico", duration: "1 appuntamento", note: "Rilievo, verifica impianti, scarichi e vincoli." },
  { phase: "Progetto e preventivo", duration: "5-10 giorni", note: "Pianta quotata, moodboard materiali, preventivo dettagliato." },
  { phase: "Scelta materiali e ordine", duration: "1-3 settimane", note: "È la fase che allunga di più i tempi: alcune finiture hanno consegne lunghe." },
  { phase: "Pratiche e calendario", duration: "variabile", note: "Eventuale CILA, comunicazione all'amministratore, fissazione date." },
];

export const workDays = [
  { day: "Giorni 1-2", phase: "Demolizione e smaltimento", detail: "Protezione dei percorsi, rimozione di sanitari, rivestimenti e massetto. Sono i giorni più rumorosi.", noisy: true },
  { day: "Giorni 2-3", phase: "Impianti idraulico ed elettrico", detail: "Tracce, nuove linee di adduzione e scarico, punti luce e prese. Prova di tenuta in pressione prima di richiudere.", noisy: true },
  { day: "Giorni 3-5", phase: "Massetto e impermeabilizzazione", detail: "Chiusura tracce, livellamento e guaina liquida sulle zone bagnate. Servono tempi tecnici di asciugatura.", noisy: false },
  { day: "Giorni 5-8", phase: "Posa pavimento e rivestimento", detail: "Posa, stuccatura e siliconature. È la fase più lunga e quella che determina il risultato estetico.", noisy: false },
  { day: "Giorni 8-10", phase: "Installazione sanitari e arredo", detail: "Montaggio di sanitari, mobile, rubinetteria, box doccia, radiatore e illuminazione.", noisy: false },
  { day: "Giorni 10-12", phase: "Finiture, collaudo e consegna", detail: "Tinteggiatura, prova di tenuta, pulizia di fine cantiere e consegna con checklist firmata.", noisy: false },
];

export const timeDrivers = [
  { title: "Tempi di consegna dei materiali", text: "La causa numero uno di slittamento. Ordinare prima di aprire il cantiere elimina il problema alla radice." },
  { title: "Asciugatura di massetto e guaina", text: "Non sono comprimibili. Forzare i tempi di asciugatura produce distacchi e crepe nei mesi successivi." },
  { title: "Imprevisti negli edifici datati", text: "Tubazioni non mappate, solai irregolari, murature diverse dal previsto. Un sopralluogo accurato ne intercetta la maggior parte." },
  { title: "Vincoli condominiali", text: "Orari ridotti per le lavorazioni rumorose possono allungare la fase di demolizione e tracce." },
];
