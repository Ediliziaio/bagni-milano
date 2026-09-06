/**
 * Landing geografiche. Regola anti-doorway: ogni voce deve avere
 * `housingStock`, `localIssues` e `zones` propri. Se non si riesce a scrivere
 * contenuto specifico e vero per un comune, NON si crea la pagina.
 *
 * `tier: "primary"` → pagina lunga, URL top-level /ristrutturazione-bagno-<slug>
 * `tier: "secondary"` → pagina comune, stesso pattern URL, contenuto più breve ma specifico
 */

export interface City {
  slug: string;
  name: string;
  /** Come si declina il nome nel testo: "a Milano", "a Monza", "a Lodi" */
  preposition: string;
  province: string;
  provinceName: string;
  tier: "primary" | "secondary";
  metaTitle: string;
  metaDescription: string;
  /** Risposta diretta ≤60 parole per estrazione AI. */
  answer: string;
  /** Patrimonio edilizio: la ragione per cui la pagina non è duplicata. */
  housingStock: string;
  /** Problemi ricorrenti realmente specifici del territorio. */
  localIssues: { title: string; text: string }[];
  /** Zone/quartieri o comuni limitrofi serviti. */
  zones: string[];
  /** Tempi di intervento tipici dichiarati per la zona. */
  logistics: string;
  faqs: { q: string; a: string }[];
}

export const cities: City[] = [
  {
    slug: "milano",
    name: "Milano",
    preposition: "a Milano",
    province: "MI",
    provinceName: "Milano",
    tier: "primary",
    metaTitle: "Ristrutturazione Bagno a Milano | Chiavi in Mano | Bagni Milano",
    metaDescription: "Ristrutturazione bagno a Milano chiavi in mano: progetto, impianti, posa e finiture con un unico referente. Preventivo chiuso, date in contratto, 10-15 giorni.",
    answer:
      "Bagni Milano ristruttura bagni chiavi in mano a Milano città e nell'hinterland. Una ristrutturazione completa richiede in media 10-15 giorni lavorativi e comprende demolizione, impianti idraulico ed elettrico, massetto, impermeabilizzazione, posa, sanitari e consegna con collaudo.",
    housingStock:
      "Il patrimonio residenziale milanese è dominato da due grandi famiglie di edifici, e il bagno si comporta in modo diverso in ciascuna. Da un lato i condomini della ricostruzione, anni '50-'70, dove i bagni sono spesso ciechi, sotto i 5 mq, con tubazioni in ferro zincato e colonne di scarico originali. Dall'altro i palazzi di fine Ottocento e primo Novecento del centro e del semicentro, con solai in legno o in ferro, altezze importanti e vincoli che possono estendersi anche alle facciate interne. A questi si aggiungono le nuove costruzioni di Porta Nuova, CityLife e delle aree di rigenerazione, dove il problema non è mai l'impianto ma la personalizzazione di finiture consegnate in serie.",
    localIssues: [
      { title: "Tubazioni in ferro zincato", text: "Molto diffuse negli edifici anteriori alla metà degli anni '70. Producono cali di pressione progressivi e perdite ricorrenti: se il bagno si rifà, l'impianto va rifatto con lui." },
      { title: "Bagni ciechi e ventilazione", text: "Gran parte dei bagni milanesi non ha finestra. Senza un aspiratore dimensionato e temporizzato correttamente, la muffa torna entro due stagioni, qualunque sia la qualità del rivestimento." },
      { title: "Solai in legno negli edifici storici", text: "Nei palazzi di inizio Novecento il carico aggiuntivo di massetti tradizionali va valutato. In molti casi si lavora con massetti alleggeriti e sistemi a basso spessore." },
      { title: "Logistica di cantiere", text: "ZTL, Area B e Area C, cortili stretti, ascensori piccoli e divieti di sosta: a Milano lo scarico dei materiali e il ritiro delle macerie vanno pianificati, non improvvisati." },
      { title: "Regolamenti condominiali severi", text: "Nei condomini milanesi orari e giorni consentiti per lavorazioni rumorose sono spesso più restrittivi della norma comunale." },
    ],
    zones: ["Centro storico", "Brera", "Porta Nuova e Isola", "Navigli e Ticinese", "Città Studi", "Porta Romana", "Loreto e Buenos Aires", "Bicocca", "Lambrate", "NoLo", "Sempione e Fiera", "CityLife", "Bovisa", "Corvetto", "Barona", "Affori"],
    logistics:
      "Su Milano città il sopralluogo viene fissato di norma entro pochi giorni lavorativi dalla richiesta. Il cantiere viene organizzato concentrando le lavorazioni rumorose nei primi giorni, per ridurre il disagio a vicini e condomini.",
    faqs: [
      { q: "Quanto costa ristrutturare un bagno a Milano?", a: "I range di mercato per un bagno completo di 5-6 mq a Milano si collocano indicativamente tra 8.000 e 18.000 €, in funzione di metratura, rifacimento impianti e livello delle finiture. Il preventivo definitivo si costruisce solo dopo il sopralluogo." },
      { q: "Lavorate anche in edifici storici del centro?", a: "Sì. In quel caso il sopralluogo verifica tipologia di solaio, spessori disponibili e presenza di vincoli, e il progetto viene adattato di conseguenza." },
      { q: "Quanto tempo serve per rifare un bagno a Milano?", a: "In media 10-15 giorni lavorativi per una ristrutturazione completa. Interventi mirati, come la trasformazione della vasca in doccia, richiedono 2-4 giorni." },
      { q: "Come gestite lo smaltimento delle macerie in centro?", a: "Con trasporto in discarica autorizzata e formulario rifiuti, pianificando carico e scarico negli orari compatibili con ZTL e regolamento condominiale." },
    ],
  },
  {
    slug: "monza",
    name: "Monza",
    preposition: "a Monza",
    province: "MB",
    provinceName: "Monza e della Brianza",
    tier: "primary",
    metaTitle: "Ristrutturazione Bagno a Monza | Chiavi in Mano | Bagni Milano",
    metaDescription: "Ristrutturazione bagno a Monza e in Brianza: villette, bifamiliari e condomini. Un unico referente, preventivo chiuso e date in contratto. Sopralluogo su richiesta.",
    answer:
      "Bagni Milano ristruttura bagni chiavi in mano a Monza e nella provincia di Monza e Brianza. Rispetto a Milano prevalgono villette e bifamiliari con più bagni, spesso su due livelli: gli interventi riguardano frequentemente il secondo bagno o il bagno padronale.",
    housingStock:
      "Monza e la Brianza hanno un tessuto residenziale molto diverso da quello milanese. Prevalgono le villette singole e bifamiliari costruite fra gli anni '70 e i primi anni 2000, spesso con due o tre bagni distribuiti su più piani, e le palazzine di piccole dimensioni. Il centro storico di Monza conserva edifici di pregio con vincoli, mentre le zone di espansione a nord e a est offrono case indipendenti con ampi spazi tecnici. Questa differenza cambia il tipo di richiesta: a Monza si interviene spesso su un secondo bagno o su un bagno padronale da riorganizzare, più raramente su un monolocale con bagno cieco.",
    localIssues: [
      { title: "Bagni multipli e cantieri sequenziali", text: "Nelle case con due o tre bagni si può lavorare a fasi mantenendo sempre un bagno funzionante: è il vantaggio operativo principale rispetto a un appartamento milanese." },
      { title: "Bagni in mansarda e sottotetto", text: "Molto diffusi in Brianza. Richiedono attenzione alle altezze utili, alla ventilazione forzata e allo scarico, che spesso deve percorrere tratti lunghi con pendenza limitata." },
      { title: "Impianti anni '80-'90 ancora efficienti", text: "Diversamente da Milano, molte tubazioni sono già in rame o multistrato: capita più spesso di poter conservare parte dell'impianto, con un risparmio reale sul preventivo." },
      { title: "Bagni con vasca da riorganizzare", text: "Le villette degli anni '80 hanno quasi sempre vasca da 170 cm poco utilizzata: la trasformazione in doccia è l'intervento più richiesto in zona." },
    ],
    zones: ["Monza centro", "San Fruttuoso", "Triante", "San Rocco", "Villaggio Snia", "Cederna", "Desio", "Seregno", "Lissone", "Vimercate", "Cesano Maderno", "Brugherio", "Villasanta", "Concorezzo", "Muggiò"],
    logistics:
      "Monza e i comuni della Brianza sono coperti con la stessa organizzazione di cantiere usata su Milano. Nelle case indipendenti carico, scarico e deposito materiali sono più semplici, e questo riduce i tempi morti fra una fase e l'altra.",
    faqs: [
      { q: "Operate in tutta la provincia di Monza e Brianza?", a: "Sì, su Monza città e sui comuni della provincia. Per le zone più distanti confermiamo la copertura in fase di primo contatto." },
      { q: "Posso rifare un bagno alla volta in una villetta con due bagni?", a: "Sì, ed è quello che consigliamo. Si lavora in sequenza mantenendo sempre un bagno funzionante, senza dover lasciare casa." },
      { q: "Fate bagni in mansarda?", a: "Sì. Verifichiamo in sopralluogo altezze utili, percorso dello scarico e ventilazione: sono i tre punti che determinano la fattibilità." },
    ],
  },
  {
    slug: "lodi",
    name: "Lodi",
    preposition: "a Lodi",
    province: "LO",
    provinceName: "Lodi",
    tier: "primary",
    metaTitle: "Ristrutturazione Bagno a Lodi | Chiavi in Mano | Bagni Milano",
    metaDescription: "Ristrutturazione bagno a Lodi e nel Lodigiano: case di corte, centro storico e nuove costruzioni. Referente unico, preventivo chiuso e tempi scritti.",
    answer:
      "Bagni Milano ristruttura bagni chiavi in mano a Lodi e nella provincia di Lodi. Il territorio presenta molte case di corte e edifici storici in centro, dove il bagno è stato ricavato in un secondo momento e l'impianto di scarico richiede una verifica preliminare accurata.",
    housingStock:
      "Lodi e il Lodigiano hanno una tipologia edilizia riconoscibile: il centro storico con edifici in muratura portante e cortili interni, le case di corte della campagna lodigiana spesso recuperate a uso residenziale, e una fascia di nuove costruzioni sviluppata soprattutto lungo l'asse verso Milano. Nelle case di corte e nelle abitazioni del centro il bagno è quasi sempre un'aggiunta successiva alla costruzione originaria: questo significa scarichi con percorsi lunghi, quote non ideali e murature in mattone pieno che si comportano diversamente dai tramezzi in forato.",
    localIssues: [
      { title: "Bagni ricavati in edifici nati senza bagno", text: "Nelle case di corte e negli edifici storici lo scarico percorre spesso tratti lunghi con pendenze al limite. È il primo elemento da verificare, prima ancora di parlare di finiture." },
      { title: "Murature in mattone pieno", text: "Le tracce impiantistiche richiedono più tempo e attrezzatura diversa rispetto ai tramezzi in laterizio forato tipici dei condomini." },
      { title: "Umidità di risalita ai piani terra", text: "Frequente negli edifici storici del centro e nelle corti. Va affrontata prima della posa: un rivestimento nuovo su una parete che risale si degrada in poche stagioni." },
      { title: "Solai in legno con travi a vista", text: "Comuni nei recuperi. Vincolano lo spessore disponibile e orientano verso sistemi a basso spessore per pavimento e impermeabilizzazione." },
    ],
    zones: ["Lodi centro", "Borgo Adda", "San Fereolo", "Lodi Vecchio", "Codogno", "Casalpusterlengo", "Sant'Angelo Lodigiano", "Tavazzano", "Massalengo", "Borghetto Lodigiano", "Sant'Angelo", "Melegnano"],
    logistics:
      "Lodi e i comuni del Lodigiano rientrano nell'area di intervento. Trattandosi di una zona più distante dal capoluogo, il calendario dei lavori viene organizzato in blocchi continuativi per ridurre gli spostamenti e i tempi morti.",
    faqs: [
      { q: "Operate anche fuori Milano, a Lodi?", a: "Sì, Lodi e la provincia di Lodi rientrano nell'area servita. La copertura del singolo comune viene confermata al primo contatto." },
      { q: "Lavorate su case di corte e cascine recuperate?", a: "Sì. In questi casi il sopralluogo è più importante del solito: percorso dello scarico, tipo di solaio e presenza di umidità di risalita determinano progetto e preventivo." },
      { q: "I tempi sono più lunghi rispetto a Milano?", a: "No. Cambia l'organizzazione: i lavori vengono pianificati in blocchi continuativi, quindi la durata complessiva del cantiere resta allineata ai 10-15 giorni lavorativi." },
    ],
  },
  {
    slug: "lombardia",
    name: "Lombardia",
    preposition: "in Lombardia",
    province: "LOM",
    provinceName: "Lombardia",
    tier: "primary",
    metaTitle: "Ristrutturazione Bagno in Lombardia | Chiavi in Mano | Bagni Milano",
    metaDescription: "Ristrutturazione bagno in Lombardia: Milano, Monza e Brianza, Lodi e province limitrofe. Metodo unico, referente unico, preventivo chiuso e date in contratto.",
    answer:
      "Bagni Milano opera in Lombardia con base a Milano, coprendo in modo strutturato Milano e provincia, Monza e Brianza e il Lodigiano. Per le altre province lombarde la fattibilità viene valutata caso per caso in funzione della distanza e della dimensione dell'intervento.",
    housingStock:
      "La Lombardia non ha un patrimonio edilizio omogeneo, e questo si riflette direttamente sul modo in cui si ristruttura un bagno. L'area metropolitana milanese è dominata da condomini della ricostruzione con bagni piccoli e ciechi. La Brianza è terra di villette e bifamiliari con bagni multipli. Il Lodigiano e la bassa pianura hanno case di corte e centri storici in muratura portante. Le zone pedemontane e lacustri hanno una quota rilevante di seconde case e di edifici con solai in legno. Un'impresa che lavora su scala regionale deve saper leggere queste differenze prima di preventivare, non dopo.",
    localIssues: [
      { title: "Area metropolitana: impianti da rifare", text: "Nei condomini milanesi e dell'hinterland la variabile che pesa di più sul preventivo è quasi sempre lo stato dell'impianto idraulico." },
      { title: "Brianza: bagni multipli", text: "La possibilità di lavorare a fasi mantenendo un bagno funzionante cambia completamente la gestione del cantiere." },
      { title: "Bassa pianura: bagni ricavati", text: "Nel Lodigiano e nelle zone di corte il vincolo principale è il percorso dello scarico." },
      { title: "Clima continentale e umidità", text: "Inverni umidi e nebbiosi, estati afose: nei bagni ciechi la ventilazione meccanica non è un accessorio ma un requisito." },
    ],
    zones: ["Milano e Città metropolitana", "Monza e Brianza", "Lodi e Lodigiano", "Pavia (su valutazione)", "Como (su valutazione)", "Varese (su valutazione)", "Bergamo (su valutazione)", "Cremona (su valutazione)"],
    logistics:
      "Milano, la Città metropolitana, Monza e Brianza e il Lodigiano sono coperti in modo continuativo. Per le altre province lombarde la copertura viene confermata al primo contatto, in funzione della distanza e della dimensione del progetto.",
    faqs: [
      { q: "In quali province lombarde operate?", a: "In modo continuativo su Milano e Città metropolitana, Monza e Brianza e Lodi. Sulle altre province lombarde valutiamo caso per caso al primo contatto." },
      { q: "La distanza incide sul preventivo?", a: "Può incidere sulla voce di trasferta per i cantieri più distanti. Quando accade lo indichiamo esplicitamente nel preventivo, non lo nascondiamo in altre voci." },
      { q: "Il metodo di lavoro cambia da provincia a provincia?", a: "No. Il Metodo Bagno Certo è lo stesso ovunque: referente unico, preventivo chiuso e date scritte in contratto. Cambia l'adattamento tecnico al tipo di edificio." },
    ],
  },
];

/** Comuni secondari: stesso pattern URL, contenuto più corto ma specifico. */
export interface Comune {
  slug: string;
  name: string;
  province: string;
  provinceName: string;
  intro: string;
  housingNote: string;
  focus: string[];
}

export const comuni: Comune[] = [
  { slug: "sesto-san-giovanni", name: "Sesto San Giovanni", province: "MI", provinceName: "Milano",
    intro: "Sesto San Giovanni convive con due patrimoni edilizi molto diversi: le case operaie e i condomini anni '50-'70 nati intorno alle fabbriche, e i nuovi quartieri sorti sulle ex aree Falck.",
    housingNote: "Nei condomini storici i bagni sono tipicamente sotto i 5 mq, ciechi, con impianto originale da rifare. Nelle nuove costruzioni l'impianto è recente e l'intervento riguarda quasi solo finiture e riorganizzazione degli spazi.",
    focus: ["Bagni ciechi da ventilare correttamente", "Impianti in ferro zincato nei palazzi anni '60", "Regolamenti condominiali con orari stretti"] },
  { slug: "cinisello-balsamo", name: "Cinisello Balsamo", province: "MI", provinceName: "Milano",
    intro: "Cinisello Balsamo è caratterizzata da un'edilizia residenziale intensiva degli anni '60-'80, con palazzine di più piani e una quota significativa di edilizia popolare riqualificata.",
    housingNote: "I bagni sono spesso stretti e lunghi, con la vasca sul lato corto. La trasformazione in doccia è l'intervento che restituisce più spazio percepito a parità di metratura.",
    focus: ["Bagni stretti e lunghi", "Trasformazione vasca in doccia", "Isolamento acustico verso vani scala"] },
  { slug: "rho", name: "Rho", province: "MI", provinceName: "Milano",
    intro: "Rho unisce un centro storico compatto a zone residenziali sviluppate fra gli anni '70 e i primi anni 2000, con una buona presenza di villette a schiera.",
    housingNote: "Nelle villette a schiera il bagno padronale al primo piano e il servizio al piano terra hanno esigenze diverse: il primo va riprogettato, il secondo va spesso reso più funzionale in pochi metri quadri.",
    focus: ["Villette a schiera con due bagni", "Secondo bagno sotto i 4 mq", "Bagni in mansarda"] },
  { slug: "segrate", name: "Segrate", province: "MI", provinceName: "Milano",
    intro: "Segrate comprende realtà residenziali molto differenti, dai quartieri progettati come Milano Due alle zone di espansione più recenti.",
    housingNote: "Nei complessi residenziali degli anni '70 gli impianti corrono spesso in cavedi tecnici comuni: verificare l'accessibilità del cavedio è la prima cosa da fare in sopralluogo.",
    focus: ["Complessi residenziali con cavedi tecnici", "Bagni doppi negli appartamenti grandi", "Regolamenti di comparto"] },
  { slug: "san-donato-milanese", name: "San Donato Milanese", province: "MI", provinceName: "Milano",
    intro: "San Donato Milanese ha un patrimonio residenziale largamente costruito fra gli anni '50 e '80, con una quota rilevante di edilizia progettata in modo unitario.",
    housingNote: "Gli appartamenti hanno spesso planimetrie razionali ma bagni sottodimensionati rispetto agli standard attuali: si lavora sulla disposizione, non sull'ampliamento.",
    focus: ["Bagni sottodimensionati da riorganizzare", "Impianti anni '60-'70", "Sanitari sospesi per guadagnare spazio"] },
  { slug: "cologno-monzese", name: "Cologno Monzese", province: "MI", provinceName: "Milano",
    intro: "Cologno Monzese è cresciuta rapidamente fra gli anni '60 e '80 e presenta una prevalenza di condomini di media altezza.",
    housingNote: "Bagni ciechi e ventilazione insufficiente sono i due temi ricorrenti. L'aspiratore temporizzato è spesso l'intervento a più alto rapporto beneficio/costo.",
    focus: ["Bagni ciechi", "Muffa ricorrente", "Rifacimento impianto idraulico"] },
  { slug: "legnano", name: "Legnano", province: "MI", provinceName: "Milano",
    intro: "Legnano ha un centro storico con edifici di pregio e ampie zone residenziali sviluppate nel dopoguerra, oltre a villette singole nelle aree periferiche.",
    housingNote: "Negli edifici del centro capita di trovare solai in legno e altezze importanti: entrambi gli elementi vanno verificati prima di scegliere il sistema di posa.",
    focus: ["Edifici storici con solai in legno", "Villette con bagni multipli", "Bagni ricavati in sottotetto"] },
  { slug: "corsico", name: "Corsico", province: "MI", provinceName: "Milano",
    intro: "Corsico ha un tessuto residenziale denso, sviluppato principalmente fra gli anni '60 e '80 lungo la direttrice sud-ovest di Milano.",
    housingNote: "Gli appartamenti hanno metrature contenute e bagni compatti: le scelte che pagano di più sono sanitari sospesi, doccia filo pavimento e porta scorrevole.",
    focus: ["Bagni compatti", "Doccia filo pavimento", "Porte scorrevoli per guadagnare spazio"] },
  { slug: "desio", name: "Desio", province: "MB", provinceName: "Monza e della Brianza",
    intro: "Desio è uno dei centri principali della Brianza, con un mix di centro storico, palazzine e ampie zone di villette e bifamiliari.",
    housingNote: "Nelle bifamiliari degli anni '80 il bagno padronale ha quasi sempre una vasca da 170 cm poco usata e uno spazio doccia assente: è l'intervento più richiesto.",
    focus: ["Bifamiliari anni '80", "Trasformazione vasca in doccia", "Bagno padronale da riprogettare"] },
  { slug: "seregno", name: "Seregno", province: "MB", provinceName: "Monza e della Brianza",
    intro: "Seregno alterna un centro urbano compatto a zone residenziali con villette e piccoli condomini, in un territorio storicamente legato alla lavorazione del legno e dell'arredo.",
    housingNote: "La sensibilità al dettaglio di finitura è mediamente alta: la scelta dei materiali e la qualità della posa pesano più che altrove nella valutazione del cliente.",
    focus: ["Finiture di livello e posa curata", "Bagni multipli in villetta", "Bagni in mansarda"] },
  { slug: "lissone", name: "Lissone", province: "MB", provinceName: "Monza e della Brianza",
    intro: "Lissone è il centro brianzolo storicamente più legato al mobile e all'arredamento, con un tessuto residenziale che unisce palazzine e case indipendenti.",
    housingNote: "Molti clienti arrivano con un'idea progettuale già definita: il valore aggiunto è la verifica di fattibilità tecnica prima dell'acquisto dei materiali.",
    focus: ["Progetti già definiti da validare tecnicamente", "Grandi lastre e posa a basso spessore", "Bagno padronale con doppio lavabo"] },
  { slug: "vimercate", name: "Vimercate", province: "MB", provinceName: "Monza e della Brianza",
    intro: "Vimercate ha un centro storico di impianto medievale e ampie zone residenziali sviluppate dagli anni '70 in poi, con una quota importante di case indipendenti.",
    housingNote: "Nel centro storico si incontrano murature in mattone pieno e solai in legno; nelle zone di espansione impianti più recenti e spazi tecnici generosi.",
    focus: ["Centro storico con murature piene", "Case indipendenti con più bagni", "Bagni di servizio al piano terra"] },
  { slug: "codogno", name: "Codogno", province: "LO", provinceName: "Lodi",
    intro: "Codogno è il centro principale del Basso Lodigiano, con un nucleo storico in muratura portante e zone residenziali più recenti.",
    housingNote: "Negli edifici del centro il bagno è quasi sempre ricavato in un secondo momento: percorso e pendenza dello scarico sono il primo vincolo di progetto.",
    focus: ["Bagni ricavati in edifici storici", "Scarichi con percorsi lunghi", "Umidità di risalita al piano terra"] },
  { slug: "casalpusterlengo", name: "Casalpusterlengo", province: "LO", provinceName: "Lodi",
    intro: "Casalpusterlengo unisce un centro storico compatto a zone residenziali e a un tessuto di case di corte nella campagna circostante.",
    housingNote: "Nelle corti recuperate le altezze e i solai in legno orientano verso sistemi di posa a basso spessore e impermeabilizzazioni liquide.",
    focus: ["Corti recuperate", "Solai in legno", "Sistemi a basso spessore"] },
];

export const getCity = (slug: string) => cities.find((c) => c.slug === slug);
export const getComune = (slug: string) => comuni.find((c) => c.slug === slug);
export const allGeoSlugs = [...cities.map((c) => c.slug), ...comuni.map((c) => c.slug)];
