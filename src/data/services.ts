/**
 * SPOKE di servizio. Ogni voce = una pagina /servizi/:slug.
 *
 * DECISIONI ANTI-CANNIBALIZZAZIONE (vedi docs/03-KEYWORD-MAP.md):
 * - "ristrutturazione bagno completo", "rifacimento bagno", "rifare il bagno"
 *   sono sinonimi della pillar /ristrutturazione-bagno → NESSUNA pagina dedicata.
 * - "ristrutturazione bagno appartamento" è assorbita da /servizi/ristrutturazione-bagno-condominio.
 * - "bagno moderno", "colori bagno", "idee bagno" sono intent informazionali/ispirazionali
 *   → vivono nel blog, non in una landing commerciale.
 */

export interface ServiceSection {
  h2: string;
  body: string[];
  list?: { title: string; text: string }[];
}

export interface Service {
  slug: string;
  /** Keyword primaria — una sola per pagina. */
  primaryKeyword: string;
  secondaryKeywords: string[];
  intent: "transactional" | "commercial" | "informational";
  title: string;      // H1
  metaTitle: string;
  metaDescription: string;
  /** Risposta diretta ≤60 parole: primo blocco della pagina, ottimizzato per estrazione AI. */
  answer: string;
  intro: string;
  sections: ServiceSection[];
  faqs: { q: string; a: string }[];
  relatedServices: string[];
  cta: string;
}

export const services: Service[] = [
  {
    slug: "bagno-chiavi-in-mano",
    primaryKeyword: "bagno chiavi in mano Milano",
    secondaryKeywords: ["ristrutturazione bagno chiavi in mano", "impresa unica ristrutturazione bagno", "referente unico bagno"],
    intent: "transactional",
    title: "Bagno chiavi in mano a Milano",
    metaTitle: "Bagno Chiavi in Mano a Milano | Un Solo Referente | Bagni Milano",
    metaDescription: "Ristrutturazione bagno chiavi in mano a Milano: progetto, impianti, posa e finiture gestiti da un unico referente. Preventivo chiuso e date in contratto.",
    answer:
      "Un bagno chiavi in mano significa che una sola impresa si occupa di progetto, demolizione, impianti, posa, finiture e pulizia finale, consegnando il bagno pronto all'uso. Il cliente firma un preventivo unico e non coordina idraulico, elettricista, muratore e fornitori.",
    intro:
      "La formula chiavi in mano esiste per risolvere un problema molto concreto: quando la ristrutturazione è divisa fra più artigiani, ogni ritardo diventa colpa di qualcun altro e il cliente si ritrova a fare il capocantiere di un lavoro che non conosce.",
    sections: [
      {
        h2: "Cosa comprende davvero un bagno chiavi in mano",
        body: ["La formula ha senso solo se il perimetro è scritto. Queste sono le voci che Bagni Milano include nel contratto:"],
        list: [
          { title: "Progettazione", text: "Pianta quotata, disposizione sanitari, punti luce e prese, moodboard materiali." },
          { title: "Demolizione e smaltimento", text: "Rimozione di sanitari, rivestimenti e massetto, con trasporto in discarica autorizzata e formulario." },
          { title: "Impianto idraulico", text: "Nuove linee di adduzione e scarico, allacci, eventuale spostamento dei punti acqua." },
          { title: "Impianto elettrico", text: "Punti luce, prese, linea per lavatrice e specchio, adeguamento alla normativa CEI per i volumi del bagno." },
          { title: "Massetto e impermeabilizzazione", text: "Livellamento e guaina sulle zone bagnate: è la lavorazione che evita infiltrazioni ai piani sottostanti." },
          { title: "Pavimenti e rivestimenti", text: "Posa di gres, ceramica o grandi lastre, stuccatura e siliconature." },
          { title: "Sanitari, mobile e rubinetteria", text: "Fornitura e installazione, incluso box doccia o piatto doccia filo pavimento." },
          { title: "Tinteggiatura e consegna", text: "Finiture, pulizia di fine cantiere e collaudo con checklist firmata." },
        ],
      },
      {
        h2: "Cosa cambia rispetto a gestire i lavori da soli",
        body: [
          "Con più fornitori il cliente compra tempo e rischio: deve chiamare l'idraulico quando il muratore ha finito, verificare che il gres arrivi prima della posa e discutere di chi è la responsabilità se il piatto doccia non entra nella nicchia.",
          "Con la formula chiavi in mano quel coordinamento è dentro il prezzo. Se una fase slitta, slitta a carico dell'impresa, non del calendario del cliente.",
        ],
      },
    ],
    faqs: [
      { q: "Il preventivo chiavi in mano può aumentare durante i lavori?", a: "Solo per varianti richieste dal cliente o per criticità strutturali non visibili al sopralluogo, e comunque previa approvazione scritta. Le lavorazioni previste in contratto restano al prezzo firmato." },
      { q: "Chi coordina idraulico, elettricista e muratore?", a: "Il referente unico di Bagni Milano. Il cliente ha un solo numero da chiamare per l'intera durata del cantiere." },
      { q: "Sono incluse le piastrelle e i sanitari?", a: "Sì, fornitura e posa sono nel preventivo. La selezione avviene dentro il budget approvato, con alternative su più fasce di prezzo." },
    ],
    relatedServices: ["ristrutturazione-bagno-condominio", "trasformazione-vasca-in-doccia"],
    cta: "Richiedi un preventivo chiavi in mano",
  },
  {
    slug: "trasformazione-vasca-in-doccia",
    primaryKeyword: "trasformazione vasca in doccia Milano",
    secondaryKeywords: ["sostituzione vasca con doccia", "da vasca a doccia", "quanto costa trasformare vasca in doccia"],
    intent: "transactional",
    title: "Trasformazione vasca in doccia a Milano",
    metaTitle: "Trasformazione Vasca in Doccia a Milano | Bagni Milano",
    metaDescription: "Sostituire la vasca con una doccia a Milano: cosa comporta davvero, tempi reali, quando basta un intervento mirato e quando conviene rifare tutto il bagno.",
    answer:
      "Trasformare una vasca in doccia richiede in media 2-4 giorni lavorativi e comprende demolizione della vasca, adeguamento dello scarico, impermeabilizzazione, rivestimento della nuova nicchia e installazione di piatto e box doccia. Il rivestimento va quasi sempre rifatto almeno nella zona interessata.",
    intro:
      "È l'intervento più richiesto da chi ha un bagno degli anni '70-'90 e non usa più la vasca. Sembra un lavoro piccolo, ma tocca scarico, impermeabilizzazione e rivestimento: farlo male significa infiltrazioni al piano di sotto.",
    sections: [
      {
        h2: "Cosa succede concretamente",
        body: ["Le fasi sono sempre queste, anche quando l'intervento è circoscritto:"],
        list: [
          { title: "1. Demolizione della vasca", text: "Rimozione della vasca e del muretto perimetrale, con smaltimento del materiale." },
          { title: "2. Verifica e adeguamento dello scarico", text: "Lo scarico della vasca è spesso più alto e in posizione diversa: va riportato alla quota del piatto doccia con la giusta pendenza." },
          { title: "3. Impermeabilizzazione", text: "Guaina liquida sul fondo e sulle pareti fino ad almeno 200 cm. È la fase che nessuno vede e che determina se ci saranno infiltrazioni." },
          { title: "4. Rivestimento della nicchia", text: "La zona vasca era rivestita solo in parte: serve nuovo rivestimento, e trovare piastrelle identiche a quelle esistenti è raro." },
          { title: "5. Piatto e box doccia", text: "Installazione del piatto (filo pavimento o appoggiato) e del box su misura." },
        ],
      },
      {
        h2: "Quando conviene invece rifare tutto il bagno",
        body: [
          "Se il rivestimento esistente è fuori produzione, se l'impianto idraulico è in ferro zincato o se il bagno ha più di 25 anni, l'intervento mirato risolve un problema e ne lascia aperti altri tre.",
          "In quel caso il costo di una ristrutturazione completa non è il doppio: molte lavorazioni (ponteggio interno, protezioni, smaltimento, manodopera in cantiere) si pagano una volta sola.",
        ],
      },
    ],
    faqs: [
      { q: "Quanto tempo serve per trasformare la vasca in doccia?", a: "In media 2-4 giorni lavorativi se l'intervento resta circoscritto alla zona vasca. Se occorre rifare pavimento e rivestimento dell'intero bagno, i tempi si allineano a una ristrutturazione completa." },
      { q: "Si può fare senza rifare tutto il bagno?", a: "Sì, quando lo scarico è raggiungibile e il rivestimento esistente è ancora reperibile o l'accostamento è accettabile. Lo verifichiamo in sopralluogo prima di preventivare." },
      { q: "Serve un permesso?", a: "Di norma no: è manutenzione ordinaria se non si spostano i punti acqua principali né si modificano murature portanti. In condominio va comunque comunicato all'amministratore." },
    ],
    relatedServices: ["rifacimento-doccia", "bagno-piccolo"],
    cta: "Chiedi un sopralluogo per la tua vasca",
  },
  {
    slug: "bagno-piccolo",
    primaryKeyword: "ristrutturazione bagno piccolo Milano",
    secondaryKeywords: ["bagno 3 mq", "bagno 4 mq", "arredare bagno piccolo", "bagno stretto e lungo"],
    intent: "commercial",
    title: "Ristrutturazione bagno piccolo a Milano",
    metaTitle: "Ristrutturazione Bagno Piccolo a Milano | 3-5 mq | Bagni Milano",
    metaDescription: "Bagni da 3 a 5 mq a Milano: come guadagnare spazio con sanitari sospesi, doccia filo pavimento e porte scorrevoli. Errori da evitare.",
    answer:
      "In un bagno da 3-5 mq lo spazio si guadagna con tre scelte: sanitari sospesi e a profondità ridotta, doccia filo pavimento al posto della vasca, e porta scorrevole o a battente esterno. La disposizione dei punti acqua conta più della metratura.",
    intro:
      "A Milano il bagno piccolo non è l'eccezione: negli appartamenti anni '50-'70 del semicentro e nei bilocali ristrutturati il secondo bagno sta spesso sotto i 4 mq. La differenza fra un bagno piccolo vivibile e uno scomodo si decide in progettazione, non in fase di acquisto dei sanitari.",
    sections: [
      {
        h2: "Le cinque leve che funzionano davvero",
        body: [],
        list: [
          { title: "Sanitari sospesi con cassetta a incasso", text: "Liberano il pavimento, semplificano la pulizia e permettono di recuperare fino a 15 cm di profondità con i modelli compatti." },
          { title: "Doccia filo pavimento", text: "Elimina il gradino e la percezione di ingombro. In un bagno stretto una doccia da 70x120 rende più di una da 80x80." },
          { title: "Porta scorrevole esterna o a battente rovesciato", text: "Una porta che si apre verso l'interno può consumare un intero metro quadro utile." },
          { title: "Lavabo a profondità ridotta", text: "I lavabi da 35-40 cm di profondità liberano il passaggio senza penalizzare l'uso quotidiano." },
          { title: "Continuità del pavimento", text: "Stesso formato e stessa posa su pavimento e zona doccia: meno interruzioni visive, ambiente percepito più grande." },
        ],
      },
      {
        h2: "Gli errori che vediamo più spesso",
        body: [
          "Il primo è scegliere i sanitari prima di avere la pianta quotata: capita di comprare un mobile da 100 cm per una parete che, tolti gli spessori del rivestimento, ne offre 96.",
          "Il secondo è rinunciare alla ventilazione. In un bagno cieco piccolo, senza un aspiratore dimensionato correttamente, l'umidità torna sotto forma di muffa entro due inverni.",
        ],
      },
    ],
    faqs: [
      { q: "Qual è la metratura minima per un bagno completo?", a: "Con lavabo, wc, bidet e doccia si lavora bene a partire da circa 3,5-4 mq, purché la forma sia regolare. Sotto i 3 mq si rinuncia di norma al bidet o si sceglie un wc con funzione integrata." },
      { q: "In un bagno piccolo conviene la doccia o la vasca?", a: "Quasi sempre la doccia: a parità di ingombro offre più spazio di manovra e permette un piatto su misura che segue le dimensioni reali della nicchia." },
      { q: "Si possono usare piastrelle grandi in un bagno piccolo?", a: "Sì, e spesso conviene: meno fughe significa meno linee che interrompono lo sguardo. Serve però un fondo perfettamente planare, quindi un massetto ben eseguito." },
    ],
    relatedServices: ["trasformazione-vasca-in-doccia", "bagno-chiavi-in-mano"],
    cta: "Facci vedere il tuo bagno piccolo",
  },
  {
    slug: "ristrutturazione-bagno-condominio",
    primaryKeyword: "ristrutturazione bagno condominio Milano",
    secondaryKeywords: ["rifare bagno in condominio", "orari lavori condominio Milano", "colonna di scarico condominiale", "ristrutturazione bagno appartamento"],
    intent: "commercial",
    title: "Ristrutturazione bagno in condominio a Milano",
    metaTitle: "Ristrutturazione Bagno in Condominio a Milano | Regole e Tempi",
    metaDescription: "Rifare il bagno in condominio a Milano: comunicazione all'amministratore, orari dei lavori, colonne di scarico, rumore e rapporti con i vicini. Guida operativa.",
    answer:
      "Per rifare il bagno in un condominio a Milano occorre comunicare i lavori all'amministratore, rispettare gli orari previsti dal regolamento condominiale, e non modificare le parti comuni come le colonne di scarico. Le lavorazioni rumorose vanno concentrate in fasce orarie definite.",
    intro:
      "A Milano la stragrande maggioranza delle ristrutturazioni bagno avviene in condominio. Le regole non sono un dettaglio burocratico: sono la differenza fra un cantiere che fila e uno bloccato da una diffida.",
    sections: [
      {
        h2: "Cosa va fatto prima di iniziare",
        body: [],
        list: [
          { title: "Comunicazione all'amministratore", text: "Va inviata con anticipo, indicando natura dei lavori, impresa esecutrice e durata prevista." },
          { title: "Lettura del regolamento condominiale", text: "Definisce orari, giorni consentiti e talvolta limiti su ascensore e cortile per carico e scarico." },
          { title: "Verifica CILA", text: "Serve se si modificano tramezzi o la posizione dei punti acqua principali. La semplice sostituzione di sanitari e rivestimenti è manutenzione ordinaria." },
          { title: "Avviso ai vicini di pianerottolo", text: "Non è obbligatorio, ma riduce drasticamente le lamentele. Lo gestiamo noi con un avviso affisso in bacheca." },
        ],
      },
      {
        h2: "Colonne di scarico e parti comuni",
        body: [
          "La colonna di scarico verticale è parte comune: non può essere spostata né ridotta di sezione. Si può però intervenire sul tratto orizzontale privato, entro l'appartamento, per riposizionare wc e bidet.",
          "Quando il wc deve spostarsi di oltre un metro dalla braga esistente, la soluzione corretta è rialzare leggermente il piano con un massetto dedicato per garantire la pendenza minima, non forzare una pendenza insufficiente.",
        ],
      },
      {
        h2: "Rumore, polvere e convivenza",
        body: [
          "Le fasi rumorose sono due: demolizione e tracce per gli impianti. Insieme occupano di norma 3-4 giorni sui 7-12 totali.",
          "Il resto del cantiere è silenzioso. Concentrare le demolizioni in giornate contigue, invece di spalmarle, dimezza il disagio percepito dai vicini.",
        ],
      },
    ],
    faqs: [
      { q: "Devo chiedere il permesso all'assemblea condominiale?", a: "No, per lavori interni all'appartamento non serve l'autorizzazione dell'assemblea. È però necessaria la comunicazione all'amministratore e il rispetto del regolamento." },
      { q: "Quali sono gli orari consentiti per i lavori a Milano?", a: "Dipendono dal regolamento condominiale e dal regolamento comunale di polizia urbana. La fascia più comune è 8:00-13:00 e 14:00-18:00 nei giorni feriali. Verifichiamo sempre il regolamento specifico prima di iniziare." },
      { q: "Posso spostare il wc?", a: "Sì, entro l'appartamento e rispettando la pendenza dello scarico. Non si può invece intervenire sulla colonna verticale comune." },
    ],
    relatedServices: ["bagno-chiavi-in-mano", "rifacimento-impianto-idraulico-bagno"],
    cta: "Parlaci del tuo condominio",
  },
  {
    slug: "bagno-senza-demolizione",
    primaryKeyword: "ristrutturazione bagno senza demolizione",
    secondaryKeywords: ["sovrapposizione piastrelle bagno", "rifare bagno senza togliere piastrelle", "bagno rinnovato in pochi giorni"],
    intent: "commercial",
    title: "Ristrutturazione bagno senza demolizione",
    metaTitle: "Bagno Senza Demolizione: Quando Funziona Davvero | Bagni Milano",
    metaDescription: "Rifare il bagno senza demolire: quando la sovrapposizione delle piastrelle è una scelta tecnica corretta e quando invece nasconde un problema che tornerà.",
    answer:
      "La ristrutturazione senza demolizione consiste nel posare il nuovo rivestimento sopra quello esistente, riducendo i tempi a 4-6 giorni e azzerando lo smaltimento delle macerie. È possibile solo se il vecchio rivestimento è ben ancorato, planare e l'impianto idraulico non va rifatto.",
    intro:
      "È una tecnica legittima e spesso ottima, ma viene venduta come soluzione universale. Non lo è: ci sono condizioni precise in cui funziona e condizioni in cui rimanda un problema di due anni.",
    sections: [
      {
        h2: "Quando funziona",
        body: [],
        list: [
          { title: "Rivestimento esistente ben ancorato", text: "Si verifica battendo la superficie: un suono vuoto indica distacco, e in quel caso la sovrapposizione è da escludere." },
          { title: "Impianti in buono stato", text: "Se le tubazioni sono in multistrato o rame recenti e la disposizione dei sanitari non cambia." },
          { title: "Quote compatibili", text: "Ogni strato aggiunge 8-12 mm. Vanno verificati soglie, altezza porta e attacco dei sanitari." },
          { title: "Obiettivo estetico", text: "Quando il problema è come appare il bagno, non come funziona." },
        ],
      },
      {
        h2: "Quando è la scelta sbagliata",
        body: [
          "Se l'impianto idraulico è in ferro zincato — frequente negli edifici milanesi anteriori al 1975 — lasciarlo sotto un rivestimento nuovo significa scommettere che non ceda.",
          "Se c'è muffa ricorrente o una macchia di umidità, la sovrapposizione la nasconde senza risolverla: l'origine è quasi sempre impermeabilizzazione o ventilazione, e nessuna delle due si sistema con una piastrella sopra.",
        ],
      },
    ],
    faqs: [
      { q: "Si possono posare piastrelle sopra le vecchie?", a: "Sì, se il supporto esistente è ben ancorato, planare e pulito, previa applicazione di un primer di aggancio. Va verificato in sopralluogo, non a priori." },
      { q: "Quanto tempo si risparmia?", a: "Di norma 4-6 giorni lavorativi contro i 7-12 di una ristrutturazione completa, perché si eliminano demolizione, smaltimento e massetto." },
      { q: "Costa molto meno?", a: "Costa meno, ma non della metà: la manodopera di posa e i materiali restano. Il risparmio vero è su demolizione, smaltimento e ripristino." },
    ],
    relatedServices: ["bagno-chiavi-in-mano", "rifacimento-doccia"],
    cta: "Verifichiamo se il tuo bagno è adatto",
  },
  {
    slug: "ristrutturazione-bagno-disabili",
    primaryKeyword: "bagno per disabili Milano",
    secondaryKeywords: ["bagno accessibile", "bagno a norma disabili", "doccia per anziani", "bagno senza barriere architettoniche"],
    intent: "commercial",
    title: "Bagno accessibile e senza barriere a Milano",
    metaTitle: "Bagno per Disabili e Anziani a Milano | Bagni Milano",
    metaDescription: "Bagno accessibile a Milano: spazi di manovra, doccia a filo pavimento, maniglioni e altezze corrette. Requisiti tecnici e agevolazioni.",
    answer:
      "Un bagno accessibile richiede uno spazio di rotazione libero, doccia a filo pavimento con seduta, maniglioni di appoggio, wc ad altezza maggiorata (45-50 cm) e porta con luce netta di almeno 80 cm, apribile verso l'esterno o scorrevole.",
    intro:
      "Rendere accessibile un bagno non significa costruire un bagno da ospedale. Significa progettare misure corrette: la maggior parte degli interventi resta esteticamente identica a un bagno contemporaneo.",
    sections: [
      {
        h2: "I requisiti tecnici che contano",
        body: [],
        list: [
          { title: "Spazio di manovra", text: "Serve un'area libera sufficiente alla rotazione della carrozzina davanti ai sanitari principali." },
          { title: "Doccia a filo pavimento", text: "Nessun gradino, piletta a scomparsa, pendenza corretta e seduta ribaltabile a parete." },
          { title: "Altezze", text: "Wc a 45-50 cm da terra, lavabo con sottopiano libero per l'accosto, specchio inclinabile o ribassato." },
          { title: "Maniglioni e appigli", text: "Fissati su rinforzo strutturale nella parete, non solo sul rivestimento." },
          { title: "Porta", text: "Luce netta minima 80 cm, apertura verso l'esterno o scorrevole per non bloccare i soccorsi." },
          { title: "Antiscivolo", text: "Pavimento con classe di scivolosità adeguata all'uso in ambiente bagnato." },
        ],
      },
      {
        h2: "Agevolazioni fiscali",
        body: [
          "Gli interventi per l'abbattimento delle barriere architettoniche hanno storicamente un trattamento fiscale dedicato, distinto dalla normale ristrutturazione.",
          "⚠️ NOTA DA VALIDARE: aliquote, massimali e requisiti cambiano con ogni legge di bilancio. Prima della pubblicazione, questa sezione va aggiornata con i riferimenti normativi in vigore e, se possibile, verificata dal commercialista dell'azienda.",
        ],
      },
    ],
    faqs: [
      { q: "Quanto spazio serve per un bagno accessibile?", a: "Non conta solo la metratura totale ma lo spazio libero di manovra davanti ai sanitari. Molti bagni esistenti diventano accessibili ridisponendo i sanitari e sostituendo la porta, senza ampliare." },
      { q: "Si può trasformare la vasca in doccia accessibile?", a: "Sì, ed è l'intervento più richiesto: la vasca viene rimossa e sostituita da una doccia a filo pavimento con seduta e maniglione. Richiede in media 3-5 giorni lavorativi." },
      { q: "I maniglioni si possono montare su qualsiasi parete?", a: "No. Servono un fissaggio su muratura piena o un rinforzo predisposto durante i lavori. È uno dei motivi per cui l'accessibilità va decisa in progettazione, non alla fine." },
    ],
    relatedServices: ["trasformazione-vasca-in-doccia", "bagno-chiavi-in-mano"],
    cta: "Progettiamo un bagno accessibile",
  },
  {
    slug: "rifacimento-impianto-idraulico-bagno",
    primaryKeyword: "rifacimento impianto idraulico bagno Milano",
    secondaryKeywords: ["sostituzione tubi bagno", "tubi in ferro zincato", "spostare scarico wc", "impianto idraulico a norma bagno"],
    intent: "commercial",
    title: "Rifacimento impianto idraulico del bagno",
    metaTitle: "Rifacimento Impianto Idraulico Bagno a Milano | Bagni Milano",
    metaDescription: "Rifare l'impianto idraulico del bagno a Milano: quando è necessario, come si riconoscono i tubi da sostituire, tempi reali e cosa comporta spostare i sanitari.",
    answer:
      "L'impianto idraulico del bagno va rifatto quando le tubazioni sono in ferro zincato, quando la pressione è calata progressivamente, in presenza di perdite ricorrenti o quando si spostano i sanitari. L'intervento richiede 2-4 giorni e va sempre eseguito prima di massetto e posa.",
    intro:
      "È la parte del bagno che nessuno vede e che determina se fra dieci anni si dovrà riaprire il muro. Negli edifici milanesi costruiti prima della metà degli anni '70 le tubazioni in ferro zincato sono ancora molto diffuse.",
    sections: [
      {
        h2: "Come si capisce che va rifatto",
        body: [],
        list: [
          { title: "Acqua che esce colorata dopo qualche giorno di assenza", text: "Segnale tipico di ossidazione interna delle tubazioni in ferro." },
          { title: "Pressione calata nel tempo", text: "L'accumulo di incrostazioni riduce progressivamente la sezione utile del tubo." },
          { title: "Perdite ripetute negli stessi punti", text: "Quando si ripara più di una volta nella stessa zona, si sta rimandando una sostituzione." },
          { title: "Macchie di umidità sul muro confinante", text: "Vanno indagate prima di qualsiasi rivestimento nuovo." },
        ],
      },
      {
        h2: "Cosa comprende l'intervento",
        body: [
          "Tracce nelle pareti, nuove linee di adduzione in multistrato o PEX con collettore, nuovo scarico con pendenza verificata, prova di tenuta in pressione prima della chiusura delle tracce.",
          "La prova di tenuta è il passaggio che distingue un lavoro fatto bene: si mette l'impianto in pressione e si verifica che la tenga per il tempo necessario, prima di richiudere. Chiudere senza provare significa scoprire l'errore a bagno finito.",
        ],
      },
    ],
    faqs: [
      { q: "Si può rifare l'impianto senza demolire tutto?", a: "Parzialmente. Le tracce interessano le pareti coinvolte dai nuovi percorsi: il rivestimento di quelle pareti va comunque rifatto. Il pavimento si salva solo se lo scarico non cambia posizione." },
      { q: "Quanto dura il rifacimento dell'impianto idraulico?", a: "In genere 2-4 giorni lavorativi all'interno di una ristrutturazione completa, inclusa la prova di tenuta." },
      { q: "Si può spostare lo scarico del wc?", a: "Sì, entro l'appartamento e rispettando la pendenza minima verso la colonna. Spostamenti importanti richiedono un rialzo del piano di calpestio." },
    ],
    relatedServices: ["ristrutturazione-bagno-condominio", "bagno-chiavi-in-mano"],
    cta: "Facciamo un sopralluogo tecnico",
  },
  {
    slug: "rifacimento-doccia",
    primaryKeyword: "rifacimento doccia Milano",
    secondaryKeywords: ["sostituzione piatto doccia", "doccia filo pavimento", "box doccia su misura", "doccia che perde"],
    intent: "transactional",
    title: "Rifacimento doccia a Milano",
    metaTitle: "Rifacimento Doccia a Milano | Bagni Milano",
    metaDescription: "Rifare la doccia a Milano: sostituzione del piatto, doccia filo pavimento, impermeabilizzazione e box su misura. Tempi, lavorazioni e cause delle perdite.",
    answer:
      "Rifare una doccia richiede 2-3 giorni lavorativi e comprende rimozione del piatto esistente, verifica dello scarico, impermeabilizzazione della zona bagnata, posa del nuovo piatto o del rivestimento a filo pavimento e installazione del box su misura.",
    intro:
      "Nove perdite su dieci in una doccia non vengono dal box: vengono da un'impermeabilizzazione fatta male o da una siliconatura arrivata a fine vita. Sostituire solo il box non risolve nulla.",
    sections: [
      {
        h2: "Piatto appoggiato o filo pavimento",
        body: [
          "Il piatto appoggiato è più rapido da installare e più economico, ma lascia un gradino e un perimetro siliconato che va manutenuto.",
          "La doccia a filo pavimento è più pulita esteticamente e più accessibile, ma richiede spessore sufficiente sotto il piano per la piletta e la pendenza. In un appartamento con solaio in latero-cemento va verificato in sopralluogo che lo spessore ci sia.",
        ],
      },
      {
        h2: "L'impermeabilizzazione è la parte che conta",
        body: [
          "Guaina liquida bicomponente sul fondo e sulle pareti fino ad almeno 200 cm, nastro di rinforzo su tutti gli angoli e sui raccordi con la piletta.",
          "È una lavorazione che aggiunge poche ore al cantiere e che, se saltata, produce un contenzioso condominiale entro due anni.",
        ],
      },
    ],
    faqs: [
      { q: "Perché la doccia perde acqua?", a: "Nella maggior parte dei casi per impermeabilizzazione assente o degradata sotto il piatto, oppure per siliconature perimetrali a fine vita. Il box è raramente la causa." },
      { q: "Si può sostituire solo il piatto doccia?", a: "Sì, ma comporta comunque la rimozione del rivestimento nella fascia bassa e il rifacimento dell'impermeabilizzazione. Va messo in conto un ripristino estetico." },
      { q: "Quanto dura il rifacimento di una doccia?", a: "In media 2-3 giorni lavorativi, più i tempi tecnici di asciugatura di guaina e stucchi." },
    ],
    relatedServices: ["trasformazione-vasca-in-doccia", "bagno-senza-demolizione"],
    cta: "Richiedi un preventivo per la doccia",
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
