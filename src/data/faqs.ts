/**
 * Database FAQ centralizzato. Ogni FAQ ha un `topic` per essere riusata
 * nella pagina pertinente senza duplicare il contenuto altrove.
 * Le risposte sono scritte per essere estratte da un motore generativo:
 * prima frase autoconclusiva, poi eventuale dettaglio.
 */
export interface Faq {
  q: string;
  a: string;
  topic: "costi" | "tempi" | "processo" | "tecnico" | "normativa" | "area" | "garanzie";
}

export const faqs: Faq[] = [
  { topic: "costi", q: "Quanto costa rifare un bagno a Milano?", a: "Per un bagno completo di 5-6 mq a Milano i range di mercato indicativi vanno da circa 8.000 a 18.000 €, in funzione del rifacimento degli impianti e del livello delle finiture. Il prezzo reale si definisce dopo il sopralluogo, con un preventivo dettagliato voce per voce." },
  { topic: "costi", q: "Il preventivo può cambiare durante i lavori?", a: "Solo per varianti richieste dal cliente o per criticità strutturali non visibili in sopralluogo, e in entrambi i casi previa approvazione scritta. Le lavorazioni già previste restano al prezzo firmato." },
  { topic: "costi", q: "Sono incluse le piastrelle e i sanitari?", a: "Sì. Nella formula chiavi in mano fornitura e posa di pavimenti, rivestimenti, sanitari, mobile e rubinetteria sono comprese nel preventivo, dentro il budget concordato." },
  { topic: "costi", q: "È possibile rateizzare o finanziare i lavori?", a: "TODO_AZIENDA: confermare se Bagni Milano offre pagamento dilazionato o finanziamento tramite istituto convenzionato, e a quali condizioni. Nessuna informazione viene pubblicata finché non è verificata." },
  { topic: "costi", q: "Ci sono detrazioni fiscali per la ristrutturazione del bagno?", a: "La ristrutturazione del bagno rientra tipicamente fra gli interventi di manutenzione straordinaria agevolabili, e la sostituzione dei sanitari può rientrare fra gli acquisti agevolati in abbinamento a un intervento di recupero. TODO_AZIENDA: aliquote e massimali cambiano ogni anno con la legge di bilancio, questa risposta va aggiornata e validata dal commercialista prima della pubblicazione." },

  { topic: "tempi", q: "Quanto tempo serve per rifare un bagno?", a: "Una ristrutturazione completa richiede in media 10-15 giorni lavorativi di cantiere. A questi vanno aggiunte 2-4 settimane precedenti per sopralluogo, progetto, preventivo e consegna dei materiali." },
  { topic: "tempi", q: "Quanto dura la trasformazione della vasca in doccia?", a: "In media 2-4 giorni lavorativi, se l'intervento resta circoscritto alla zona vasca. Se occorre rifare anche pavimento e rivestimento dell'intero bagno, i tempi si allineano a una ristrutturazione completa." },
  { topic: "tempi", q: "Posso vivere in casa durante i lavori?", a: "Sì, nella maggior parte dei casi. Il cantiere viene confinato al bagno con protezioni sui percorsi, e le lavorazioni rumorose vengono concentrate nei primi giorni. Se il bagno è l'unico dell'abitazione, va messa in conto l'indisponibilità per l'intera durata del cantiere." },
  { topic: "tempi", q: "Cosa fa slittare i tempi più spesso?", a: "I tempi di consegna dei materiali. È il motivo per cui ordiniamo le finiture prima di aprire il cantiere, non durante." },

  { topic: "processo", q: "Fate il sopralluogo prima del preventivo?", a: "Sì, sempre. Un preventivo di ristrutturazione bagno fatto senza sopralluogo è una stima, non un preventivo: non può tenere conto dello stato degli impianti, delle quote reali e dei vincoli dell'edificio." },
  { topic: "processo", q: "Chi coordina idraulico, elettricista e muratore?", a: "Il referente unico di Bagni Milano. Il cliente ha un solo interlocutore per l'intera durata del progetto e non deve mettere d'accordo fornitori diversi." },
  { topic: "processo", q: "Offrite un servizio chiavi in mano?", a: "Sì. Progettazione, demolizione, smaltimento, impianti, massetto, impermeabilizzazione, posa, sanitari, finiture e pulizia finale sono gestiti da Bagni Milano con un unico contratto." },
  { topic: "processo", q: "Posso mandarvi le foto del mio bagno prima del sopralluogo?", a: "Sì, ed è consigliato. Le foto del bagno attuale e la metratura approssimativa ci permettono di dare un primo orientamento e di arrivare al sopralluogo già preparati." },
  { topic: "processo", q: "Chi si occupa dello smaltimento delle macerie?", a: "Bagni Milano. Il trasporto avviene in discarica autorizzata con formulario rifiuti, ed è compreso nel preventivo." },
  { topic: "processo", q: "Posso scegliere io i materiali?", a: "Sì. Proponiamo alternative su più fasce di prezzo dentro il budget approvato. Se il cliente arriva con materiali già scelti, ne verifichiamo la compatibilità tecnica prima dell'ordine." },

  { topic: "tecnico", q: "Posso cambiare la disposizione dei sanitari?", a: "Sì, entro l'appartamento e rispettando la pendenza minima dello scarico verso la colonna. Spostamenti importanti del wc possono richiedere un leggero rialzo del piano di calpestio per garantire la pendenza corretta." },
  { topic: "tecnico", q: "Come si evita la muffa in un bagno cieco?", a: "Con una ventilazione meccanica dimensionata e temporizzata, non con il solo rivestimento. Un aspiratore che continua a funzionare qualche minuto dopo l'uscita è il singolo intervento più efficace contro la muffa nei bagni senza finestra." },
  { topic: "tecnico", q: "Si possono posare le piastrelle nuove sopra le vecchie?", a: "Sì, se il rivestimento esistente è ben ancorato, planare e pulito, previa applicazione di un primer di aggancio. Va verificato in sopralluogo: un suono vuoto alla battitura indica distacco ed esclude la sovrapposizione." },
  { topic: "tecnico", q: "Perché la doccia perde acqua?", a: "Quasi sempre per impermeabilizzazione assente o degradata sotto il piatto, oppure per siliconature perimetrali a fine vita. Il box doccia è raramente la causa reale della perdita." },
  { topic: "tecnico", q: "Come capisco se devo rifare l'impianto idraulico?", a: "I segnali sono quattro: acqua colorata dopo qualche giorno di assenza, pressione calata progressivamente, perdite ripetute negli stessi punti, macchie di umidità sulle pareti confinanti. Tutti indicano tubazioni ossidate da sostituire." },

  { topic: "normativa", q: "Serve la CILA per rifare il bagno?", a: "Non serve se si tratta di manutenzione ordinaria, cioè sostituzione di sanitari, rivestimenti e finiture senza modifiche a murature e senza spostamento dei punti acqua principali. Serve invece quando si modificano tramezzi o si spostano gli impianti in modo significativo. La verifica va fatta caso per caso." },
  { topic: "normativa", q: "Devo avvisare l'amministratore di condominio?", a: "Sì. La comunicazione all'amministratore va inviata prima dell'inizio dei lavori, indicando natura dell'intervento, impresa esecutrice e durata prevista. Non serve invece l'autorizzazione dell'assemblea per lavori interni all'appartamento." },
  { topic: "normativa", q: "Posso intervenire sulla colonna di scarico condominiale?", a: "No. La colonna verticale è parte comune e non può essere spostata né ridotta di sezione. Si può intervenire solo sul tratto orizzontale privato, all'interno dell'appartamento." },

  { topic: "area", q: "In quali zone operate?", a: "Bagni Milano opera a Milano e nella Città metropolitana, a Monza e in Brianza, a Lodi e nel Lodigiano, e più in generale in Lombardia. Per le province lombarde più distanti la copertura viene confermata al primo contatto." },
  { topic: "area", q: "Operate anche a Monza?", a: "Sì, su Monza città e sui comuni della provincia di Monza e Brianza." },
  { topic: "area", q: "Operate anche a Lodi?", a: "Sì, su Lodi e sui comuni della provincia di Lodi. In quest'area i lavori vengono pianificati in blocchi continuativi per ridurre gli spostamenti." },

  { topic: "garanzie", q: "Che garanzia offrite sui lavori?", a: "TODO_AZIENDA: specificare durata e perimetro della garanzia su lavorazioni e su materiali, e le modalità di intervento in caso di problema. Nessuna durata viene pubblicata finché non è confermata per iscritto dall'azienda." },
  { topic: "garanzie", q: "Cosa succede se emerge un imprevisto durante i lavori?", a: "Gli imprevisti reali vengono comunicati subito, con la soluzione tecnica e l'eventuale impatto economico messi per iscritto prima di procedere. Non si eseguono lavorazioni extra senza approvazione." },
];

export const faqsByTopic = (topic: Faq["topic"]) => faqs.filter((f) => f.topic === topic);
export const faqTopics: { key: Faq["topic"]; label: string }[] = [
  { key: "costi", label: "Costi e preventivo" },
  { key: "tempi", label: "Tempi e cantiere" },
  { key: "processo", label: "Come lavoriamo" },
  { key: "tecnico", label: "Domande tecniche" },
  { key: "normativa", label: "Permessi e condominio" },
  { key: "area", label: "Zone servite" },
  { key: "garanzie", label: "Garanzie" },
];
