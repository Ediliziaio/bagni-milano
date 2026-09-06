/**
 * Articoli pubblicati. Regola: si pubblica solo contenuto completo.
 * Il piano editoriale esteso (100 titoli) vive in docs/06-PIANO-EDITORIALE.md
 * e diventa articolo qui solo quando il testo è scritto per intero.
 *
 * Struttura GEO di ogni articolo:
 *  1. `answer` — risposta diretta ≤60 parole, resa in cima alla pagina
 *  2. corpo in H2/H3 brevi, liste e tabelle
 *  3. FAQ finali → FAQPage schema
 *  4. internal link espliciti verso la money page del cluster
 */

export interface Article {
  slug: string;
  category: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  answer: string;
  datePublished: string;
  dateModified?: string;
  readingTime: string;
  primaryKeyword: string;
  /** Link interni obbligatori: sostengono le money page. */
  internalLinks: { label: string; href: string }[];
  body: string; // HTML controllato, scritto internamente (nessun input utente)
  faqs?: { q: string; a: string }[];
  related: string[];
}

const P = (s: string) => s;

export const articles: Article[] = [
  {
    slug: "quanto-costa-rifare-un-bagno",
    category: "costi",
    title: "Quanto costa rifare un bagno: la struttura reale del prezzo",
    metaTitle: "Quanto Costa Rifare un Bagno nel 2026 | Range e Variabili",
    metaDescription: "Quanto costa rifare un bagno: range indicativi per metratura, ripartizione del budget fra le voci e le sei variabili che spostano davvero il preventivo.",
    excerpt: "Il prezzo di un bagno non si stima a metro quadro. Dipende da sei variabili, e una sola di queste può valere qualche migliaio di euro.",
    answer: "Rifare un bagno completo di 5-6 mq costa indicativamente fra 8.000 e 18.000 € in Lombardia, impianti inclusi. La variabile che pesa di più non è la metratura ma lo stato dell'impianto idraulico: sostituire tubazioni in ferro zincato può valere alcune migliaia di euro di differenza.",
    datePublished: "2026-09-06",
    readingTime: "8 min",
    primaryKeyword: "quanto costa rifare un bagno",
    internalLinks: [
      { label: "Guida completa ai costi di ristrutturazione bagno", href: "/quanto-costa-ristrutturare-bagno" },
      { label: "Ristrutturazione bagno chiavi in mano", href: "/ristrutturazione-bagno" },
    ],
    body: P(`
<h2>Perché il prezzo al metro quadro non funziona</h2>
<p>Il bagno è l'ambiente della casa con la maggiore densità di lavorazioni per metro quadro. In 5 mq convivono impianto idraulico, impianto elettrico, impermeabilizzazione, massetto, posa, sanitari e arredo. Ridurre tutto a un prezzo al metro quadro significa ignorare la voce che pesa di più: quante di queste lavorazioni servono davvero.</p>
<p>Due bagni identici per metratura possono differire di 6.000 € solo perché in uno le tubazioni sono in multistrato del 2010 e nell'altro in ferro zincato del 1962.</p>

<h2>Dove va il budget</h2>
<p>La ripartizione tipica di una ristrutturazione completa è questa:</p>
<table>
<thead><tr><th>Voce</th><th>Peso sul totale</th></tr></thead>
<tbody>
<tr><td>Manodopera e coordinamento</td><td>35-45%</td></tr>
<tr><td>Pavimenti e rivestimenti</td><td>12-20%</td></tr>
<tr><td>Sanitari e mobile bagno</td><td>12-20%</td></tr>
<tr><td>Impianto idraulico ed elettrico</td><td>10-18%</td></tr>
<tr><td>Rubinetteria e box doccia</td><td>6-12%</td></tr>
<tr><td>Demolizione e smaltimento</td><td>5-10%</td></tr>
</tbody>
</table>
<p>La conseguenza pratica è che risparmiare sui sanitari sposta poco il totale, mentre rinunciare a lavorazioni tecniche come l'impermeabilizzazione sposta molto — e produce un costo futuro molto più alto.</p>

<h2>Le sei variabili che spostano il preventivo</h2>
<ol>
<li><strong>Stato dell'impianto idraulico.</strong> È la prima. Tubazioni ossidate vanno sostituite, e questo comporta tracce, ripristini e più giorni di cantiere.</li>
<li><strong>Spostamento dei sanitari.</strong> Cambiare posizione al wc richiede un nuovo tratto di scarico con pendenza corretta, a volte un rialzo del piano.</li>
<li><strong>Livello delle finiture.</strong> Fra un gres di serie e una grande lastra effetto marmo il solo materiale può più che raddoppiare.</li>
<li><strong>Superficie da rivestire.</strong> Contano le pareti, non il pavimento. Un bagno stretto e alto ha più mq di rivestimento di quanto suggerisca la pianta.</li>
<li><strong>Accessibilità del cantiere.</strong> Piano alto senza ascensore, cortile stretto, ZTL: incidono sulle ore di manodopera.</li>
<li><strong>Vincoli dell'edificio.</strong> Solai in legno, murature portanti, immobili storici richiedono soluzioni tecniche dedicate.</li>
</ol>

<h2>Come si legge un preventivo</h2>
<p>Un preventivo di ristrutturazione bagno che sta in tre righe non è confrontabile con nessun altro. Le voci che devono comparire esplicitamente sono demolizione, smaltimento con formulario, impianto idraulico, impianto elettrico, massetto e impermeabilizzazione, posa con i mq indicati, sanitari e rubinetteria con i modelli identificati, tinteggiatura, pulizia finale, data di inizio e data di consegna.</p>
<p>Se una di queste voci manca, non significa che sia gratis: significa che verrà discussa a cantiere aperto.</p>
`),
    faqs: [
      { q: "Quanto costa rifare un bagno di 5 mq?", a: "Indicativamente fra 8.000 e 18.000 € in Lombardia per una ristrutturazione completa con rifacimento degli impianti. La forbice dipende soprattutto dallo stato dell'impianto esistente e dal livello delle finiture." },
      { q: "Conviene risparmiare sui sanitari?", a: "Poco: sanitari e mobile pesano il 12-20% del totale. Il risparmio significativo si ottiene sul livello dei rivestimenti, non sui sanitari, e mai sulle lavorazioni tecniche nascoste." },
    ],
    related: ["costo-piastrelle-bagno", "errori-da-evitare-ristrutturazione-bagno"],
  },

  {
    slug: "costo-piastrelle-bagno",
    category: "costi",
    title: "Costo delle piastrelle per il bagno: materiale, posa e sprechi",
    metaTitle: "Costo Piastrelle Bagno al mq: Materiale e Posa | Bagni Milano",
    metaDescription: "Quanto costano le piastrelle per il bagno al mq, quanto incide la posa, perché il formato cambia il prezzo e quanto materiale calcolare in più.",
    excerpt: "Il prezzo al mq della piastrella è meno della metà del costo reale. Il resto lo fanno formato, posa e sfrido.",
    answer: "Il costo delle piastrelle da bagno si compone di tre voci: materiale (indicativamente 15-90 €/mq per il gres), posa (25-60 €/mq secondo formato e schema) e sfrido, da calcolare fra il 10% e il 15% in più della superficie reale.",
    datePublished: "2026-09-06",
    readingTime: "6 min",
    primaryKeyword: "costo piastrelle bagno al mq",
    internalLinks: [
      { label: "Quanto costa ristrutturare un bagno", href: "/quanto-costa-ristrutturare-bagno" },
      { label: "Gres o ceramica: cosa cambia", href: "/blog/gres-o-ceramica-per-il-bagno" },
    ],
    body: P(`
<h2>Le tre voci che compongono il costo</h2>
<p>Chi confronta due preventivi guardando solo il prezzo della piastrella confronta un terzo del problema.</p>
<ul>
<li><strong>Materiale.</strong> Il gres porcellanato di serie parte da fasce contenute; le grandi lastre e i materiali effetto marmo di fascia alta stanno su valori molto superiori.</li>
<li><strong>Posa.</strong> Cresce con il formato e con lo schema. Una posa dritta con formato medio costa meno di una posa a correre con lastre di grande formato, che richiede due posatori e attrezzatura dedicata.</li>
<li><strong>Sfrido.</strong> Tagli, angoli e rotture in cantiere. Va calcolato fra il 10% e il 15% della superficie, di più se lo schema di posa è diagonale o a spina.</li>
</ul>

<h2>Perché il formato grande costa più a posare</h2>
<p>Una lastra da 120x280 richiede un fondo perfettamente planare, ventose, un telaio di movimentazione e almeno due persone. Se il massetto non è a livello, la lastra non perdona: non si recupera con la colla come si fa con un 30x60.</p>
<p>Il grande formato è una scelta estetica legittima, ma il suo costo reale sta nella preparazione del fondo, non nella piastrella.</p>

<h2>Dove si risparmia davvero</h2>
<p>Usare un materiale di fascia alta solo sulla parete che si vede entrando, e un materiale coordinato più economico sulle altre, è la scelta che dà il rapporto migliore fra resa visiva e budget. Il pavimento, che si vede sempre e si sporca sempre, è invece l'ultimo posto dove risparmiare.</p>
`),
    faqs: [
      { q: "Quanto materiale in più devo ordinare?", a: "Fra il 10% e il 15% oltre la superficie reale, per coprire tagli e sfridi. Con pose diagonali o a spina di pesce si sale al 15-20%." },
      { q: "Conviene il grande formato in un bagno piccolo?", a: "Spesso sì, perché riduce le fughe e le interruzioni visive. Richiede però un massetto perfettamente planare, quindi va deciso prima della fase di livellamento." },
    ],
    related: ["quanto-costa-rifare-un-bagno", "gres-o-ceramica-per-il-bagno"],
  },

  {
    slug: "gres-o-ceramica-per-il-bagno",
    category: "materiali",
    title: "Gres porcellanato o ceramica per il bagno: come si sceglie",
    metaTitle: "Gres o Ceramica per il Bagno? Differenze Reali | Bagni Milano",
    metaDescription: "Differenza fra gres porcellanato e ceramica per il bagno: assorbimento d'acqua, resistenza, uso a pavimento e a parete, manutenzione e costi.",
    excerpt: "La differenza non è estetica: è quanta acqua assorbe il materiale. E questo decide dove puoi usarlo.",
    answer: "Il gres porcellanato assorbe meno dello 0,5% di acqua ed è adatto sia a pavimento sia a parete, anche nelle zone bagnate. La ceramica ha un assorbimento più alto ed è indicata soprattutto a parete. Per il pavimento di un bagno la scelta corretta è quasi sempre il gres.",
    datePublished: "2026-09-06",
    readingTime: "6 min",
    primaryKeyword: "gres o ceramica bagno",
    internalLinks: [
      { label: "Costo delle piastrelle per il bagno", href: "/blog/costo-piastrelle-bagno" },
      { label: "Ristrutturazione bagno chiavi in mano", href: "/ristrutturazione-bagno" },
    ],
    body: P(`
<h2>La differenza tecnica che conta</h2>
<p>Gres e ceramica sono entrambi materiali ceramici, ma cotti a temperature diverse e con impasti diversi. Il risultato pratico è l'assorbimento d'acqua: molto basso nel gres porcellanato, sensibilmente più alto nella ceramica smaltata.</p>
<p>Da questa singola proprietà derivano tutte le altre: resistenza al gelo, resistenza all'abrasione, adattabilità al pavimento e comportamento nelle zone costantemente bagnate.</p>

<h2>Dove usare cosa</h2>
<table>
<thead><tr><th>Zona</th><th>Scelta consigliata</th><th>Perché</th></tr></thead>
<tbody>
<tr><td>Pavimento bagno</td><td>Gres porcellanato</td><td>Resistenza all'abrasione e bassissimo assorbimento.</td></tr>
<tr><td>Interno doccia</td><td>Gres porcellanato</td><td>Zona costantemente bagnata: serve il minimo assorbimento.</td></tr>
<tr><td>Pareti fuori dalla zona doccia</td><td>Gres o ceramica</td><td>La ceramica va benissimo e offre più scelta decorativa.</td></tr>
<tr><td>Bagno con accesso da esterno</td><td>Gres</td><td>Resistenza al gelo.</td></tr>
</tbody>
</table>

<h2>Antiscivolo: il dato da chiedere</h2>
<p>Per il pavimento di un bagno, e in particolare per l'interno di una doccia a filo pavimento, il dato da chiedere è la classificazione antiscivolo. Una superficie molto lucida è bellissima in showroom e scivolosa da bagnata: è un compromesso che va fatto consapevolmente, non per distrazione.</p>

<h2>Manutenzione</h2>
<p>Il gres non teme i detergenti comuni. Le fughe sì: sono il punto debole di qualsiasi rivestimento. Fughe di colore medio, epossidiche nelle zone bagnate, riducono drasticamente la manutenzione rispetto a una fuga bianca cementizia.</p>
`),
    faqs: [
      { q: "Il gres è più costoso della ceramica?", a: "Non necessariamente: le fasce di prezzo si sovrappongono ampiamente. Un gres di serie può costare meno di una ceramica decorativa di fascia alta." },
      { q: "Posso usare la ceramica dentro la doccia?", a: "È sconsigliato. L'interno doccia è la zona più sollecitata dall'acqua: il gres porcellanato, con assorbimento sotto lo 0,5%, è la scelta tecnicamente corretta." },
    ],
    related: ["costo-piastrelle-bagno", "muffa-in-bagno-cause-e-soluzioni"],
  },

  {
    slug: "come-progettare-un-bagno",
    category: "progettazione",
    title: "Come progettare un bagno: disposizione, distanze e sequenza corretta",
    metaTitle: "Come Progettare un Bagno: Misure e Disposizione | Bagni Milano",
    metaDescription: "Come progettare un bagno funzionale: sequenza corretta dei sanitari, distanze minime, altezze, punti luce e prese. Con gli errori più comuni.",
    excerpt: "La disposizione dei sanitari non è una questione di gusto: è una sequenza tecnica che dipende da dove arriva lo scarico.",
    answer: "Un bagno si progetta partendo dallo scarico, non dai sanitari. La sequenza corretta è: posizione della colonna di scarico, poi wc e bidet, poi lavabo, poi doccia o vasca. Le distanze minime di riferimento sono 20 cm fra i sanitari e 55-60 cm di spazio libero frontale.",
    datePublished: "2026-09-06",
    readingTime: "8 min",
    primaryKeyword: "come progettare un bagno",
    internalLinks: [
      { label: "Il Metodo Bagno Certo", href: "/metodo" },
      { label: "Ristrutturazione bagno piccolo", href: "/servizi/bagno-piccolo" },
    ],
    body: P(`
<h2>Si parte dallo scarico, non dal moodboard</h2>
<p>L'errore più comune è scegliere prima i sanitari e poi cercare di farli entrare. La posizione della colonna di scarico è un vincolo fisso: il wc deve stare abbastanza vicino da garantire la pendenza minima del tratto orizzontale, tipicamente intorno all'1-2%.</p>
<p>Tutto il resto si dispone intorno a questo vincolo. Un progetto che ignora la pendenza produce uno scarico lento e, a lungo andare, cattivi odori.</p>

<h2>La sequenza dei sanitari</h2>
<ol>
<li><strong>WC</strong> — il più vincolato, va posizionato per primo.</li>
<li><strong>Bidet</strong> — accanto al wc, per condividere gli allacci.</li>
<li><strong>Lavabo</strong> — di norma vicino alla porta, è il sanitario più usato.</li>
<li><strong>Doccia o vasca</strong> — nella zona più protetta e lontana dalla porta.</li>
</ol>

<h2>Distanze e altezze di riferimento</h2>
<table>
<thead><tr><th>Elemento</th><th>Riferimento</th></tr></thead>
<tbody>
<tr><td>Distanza laterale fra sanitari</td><td>circa 20 cm</td></tr>
<tr><td>Distanza sanitario-parete laterale</td><td>circa 15-20 cm</td></tr>
<tr><td>Spazio libero frontale</td><td>55-60 cm</td></tr>
<tr><td>Altezza lavabo</td><td>85-90 cm dal pavimento finito</td></tr>
<tr><td>Altezza wc sospeso</td><td>40-45 cm (45-50 cm se accessibile)</td></tr>
<tr><td>Altezza soffione doccia</td><td>200-210 cm</td></tr>
</tbody>
</table>
<p>Sono riferimenti pratici di progetto: in un intervento reale vanno verificati contro le misure effettive rilevate in sopralluogo e contro le prescrizioni applicabili all'immobile.</p>

<h2>Punti luce e prese: si decidono ora</h2>
<p>Prese e punti luce vanno definiti in progetto, prima delle tracce. Servono almeno: un punto luce generale, una luce sullo specchio, una presa accanto al lavabo, e la linea per la lavatrice se prevista. Il bagno ha zone in cui il posizionamento dei componenti elettrici è normato in funzione della distanza dall'acqua: è una verifica che spetta all'installatore.</p>

<h2>La ventilazione non è un dettaglio</h2>
<p>In un bagno cieco l'aspiratore va dimensionato sul volume dell'ambiente e temporizzato, in modo che continui a funzionare qualche minuto dopo l'uscita. È il singolo elemento che determina se ci sarà muffa.</p>
`),
    faqs: [
      { q: "Da cosa si parte per progettare un bagno?", a: "Dalla posizione della colonna di scarico. È il vincolo fisso su cui si costruisce tutta la disposizione: il wc va collocato per primo, poi bidet, lavabo e zona doccia." },
      { q: "Qual è la distanza minima fra i sanitari?", a: "Come riferimento pratico, circa 20 cm fra un sanitario e l'altro e 55-60 cm di spazio libero frontale per un uso comodo." },
    ],
    related: ["errori-da-evitare-ristrutturazione-bagno", "muffa-in-bagno-cause-e-soluzioni"],
  },

  {
    slug: "errori-da-evitare-ristrutturazione-bagno",
    category: "progettazione",
    title: "Dieci errori che rendono costosa una ristrutturazione del bagno",
    metaTitle: "10 Errori da Evitare Ristrutturando il Bagno | Bagni Milano",
    metaDescription: "Gli errori più costosi nella ristrutturazione del bagno: dall'ordine dei materiali all'impermeabilizzazione saltata. Come si riconoscono e come si evitano.",
    excerpt: "Quasi tutti gli extra costi di una ristrutturazione bagno nascono da decisioni prese nell'ordine sbagliato.",
    answer: "I dieci errori più costosi in una ristrutturazione bagno sono: comprare i materiali prima del progetto, saltare l'impermeabilizzazione, ignorare la ventilazione, non fare la prova di tenuta, sottovalutare lo sfrido, accettare preventivi non dettagliati, dividere il lavoro fra più artigiani, forzare i tempi di asciugatura, spostare il wc senza verificare la pendenza e rimandare la sostituzione di impianti vecchi.",
    datePublished: "2026-09-06",
    readingTime: "9 min",
    primaryKeyword: "errori ristrutturazione bagno",
    internalLinks: [
      { label: "Come progettare un bagno", href: "/blog/come-progettare-un-bagno" },
      { label: "Il Metodo Bagno Certo", href: "/metodo" },
      { label: "Quanto costa ristrutturare un bagno", href: "/quanto-costa-ristrutturare-bagno" },
    ],
    body: P(`
<h2>1. Comprare i materiali prima di avere la pianta quotata</h2>
<p>Un mobile da 100 cm non entra in una parete che, tolti gli spessori del rivestimento, ne misura 96. È l'errore che genera più resi e più giorni persi.</p>

<h2>2. Saltare o ridurre l'impermeabilizzazione</h2>
<p>È invisibile, costa poche centinaia di euro e determina se ci sarà un contenzioso condominiale. Va estesa al fondo della doccia e alle pareti della zona bagnata fino ad almeno 200 cm.</p>

<h2>3. Ignorare la ventilazione</h2>
<p>In un bagno cieco senza aspiratore temporizzato la muffa torna entro due inverni, indipendentemente da quanto è costato il rivestimento.</p>

<h2>4. Non fare la prova di tenuta prima di chiudere le tracce</h2>
<p>L'impianto va messo in pressione e verificato prima di richiudere. Chiudere senza provare significa scoprire l'errore a bagno finito.</p>

<h2>5. Sottovalutare lo sfrido</h2>
<p>Ordinare la superficie esatta significa fermarsi a tre piastrelle dalla fine, e scoprire che il lotto è esaurito. Si calcola sempre il 10-15% in più.</p>

<h2>6. Accettare un preventivo che non elenca le lavorazioni</h2>
<p>Le voci mancanti non sono incluse: sono rinviate. Un preventivo confrontabile elenca demolizione, smaltimento, impianti, massetto, impermeabilizzazione, posa con i mq, sanitari con i modelli, finiture, pulizia e date.</p>

<h2>7. Dividere il lavoro fra più artigiani senza un coordinatore</h2>
<p>Ogni interfaccia fra due fornitori è un punto in cui la responsabilità si perde. Il cliente diventa il capocantiere di un lavoro che non conosce.</p>

<h2>8. Forzare i tempi di asciugatura</h2>
<p>Massetto e guaina hanno tempi tecnici non comprimibili. Posare troppo presto produce distacchi e crepe che si manifestano mesi dopo, quando l'impresa non c'è più.</p>

<h2>9. Spostare il wc senza verificare la pendenza</h2>
<p>Uno scarico con pendenza insufficiente non si vede il primo giorno. Si manifesta come scarico lento e cattivi odori nei mesi successivi.</p>

<h2>10. Rimandare la sostituzione di impianti vecchi</h2>
<p>Rifare il rivestimento lasciando sotto tubazioni in ferro zincato significa scommettere sulla loro tenuta. Quando cedono, si riapre un bagno appena finito.</p>
`),
    faqs: [
      { q: "Qual è l'errore più costoso in assoluto?", a: "Saltare l'impermeabilizzazione della zona doccia. Costa poco farla e può costare moltissimo non averla fatta, perché l'infiltrazione coinvolge anche l'appartamento sottostante." },
      { q: "Quando si scelgono i materiali?", a: "Dopo il progetto e prima dell'apertura del cantiere. Scegliere dopo l'inizio dei lavori è la causa principale degli slittamenti." },
    ],
    related: ["come-progettare-un-bagno", "quanto-costa-rifare-un-bagno"],
  },

  {
    slug: "muffa-in-bagno-cause-e-soluzioni",
    category: "problemi",
    title: "Muffa in bagno: perché torna e cosa la elimina davvero",
    metaTitle: "Muffa in Bagno: Cause Reali e Soluzioni Definitive | Bagni Milano",
    metaDescription: "Perché la muffa in bagno ricompare sempre negli stessi punti: cause reali, differenza fra condensa e infiltrazione, e gli interventi che risolvono.",
    excerpt: "La muffa non è un problema di pulizia. È un problema di aria, e finché non si risolve l'aria torna sempre.",
    answer: "La muffa in bagno è quasi sempre causata da condensa, non da infiltrazione: aria umida che condensa sulle superfici più fredde. Si elimina definitivamente con ventilazione meccanica temporizzata e correzione dei ponti termici. Detergenti e antimuffa rimuovono il sintomo, non la causa.",
    datePublished: "2026-09-06",
    readingTime: "7 min",
    primaryKeyword: "muffa in bagno",
    internalLinks: [
      { label: "Ristrutturazione bagno chiavi in mano", href: "/ristrutturazione-bagno" },
      { label: "Come progettare un bagno", href: "/blog/come-progettare-un-bagno" },
    ],
    body: P(`
<h2>Condensa o infiltrazione: si riconoscono</h2>
<p>Distinguerle è il primo passo, perché richiedono interventi opposti.</p>
<table>
<thead><tr><th></th><th>Condensa</th><th>Infiltrazione</th></tr></thead>
<tbody>
<tr><td>Dove compare</td><td>Angoli alti, dietro i mobili, sul soffitto</td><td>Macchia circoscritta, spesso in basso o su una parete specifica</td></tr>
<tr><td>Quando</td><td>Peggiora d'inverno</td><td>Costante o legata all'uso dell'acqua</td></tr>
<tr><td>Aspetto</td><td>Puntinatura nera diffusa</td><td>Alone con bordo definito, intonaco che si sfoglia</td></tr>
<tr><td>Causa</td><td>Aria umida + superficie fredda</td><td>Acqua che passa da un punto non impermeabilizzato</td></tr>
</tbody>
</table>

<h2>Perché torna sempre negli stessi punti</h2>
<p>La condensa si forma dove la superficie è più fredda: angoli con l'esterno, spigoli, zone dietro un mobile dove l'aria non circola. Sono i punti in cui il ponte termico abbassa la temperatura superficiale sotto il punto di rugiada.</p>
<p>Pulire con la candeggina rimuove la colonia. L'aria umida e la parete fredda restano dov'erano.</p>

<h2>Cosa risolve davvero</h2>
<ul>
<li><strong>Ventilazione meccanica temporizzata.</strong> Un aspiratore dimensionato sul volume dell'ambiente che continua a funzionare qualche minuto dopo l'uscita. È l'intervento con il rapporto costo/efficacia più alto.</li>
<li><strong>Correzione del ponte termico.</strong> Nelle pareti verso l'esterno, un rivestimento a bassa conducibilità o una controparete isolante alza la temperatura superficiale sopra il punto di rugiada.</li>
<li><strong>Riorganizzazione dei mobili.</strong> Lasciare qualche centimetro fra mobile e parete fredda permette all'aria di circolare.</li>
<li><strong>Fughe epossidiche nelle zone bagnate.</strong> Meno porose, non trattengono umidità come le cementizie.</li>
</ul>

<h2>Quando la muffa segnala un problema più grande</h2>
<p>Se la macchia è circoscritta, ha un bordo netto e l'intonaco si sfoglia, non è condensa: è acqua che arriva da qualche parte. In quel caso serve un'indagine sull'impermeabilizzazione della doccia o sulle tubazioni, e coprire con un rivestimento nuovo peggiora la situazione perché nasconde il sintomo.</p>
`),
    faqs: [
      { q: "L'antimuffa spray risolve il problema?", a: "No. Rimuove la colonia visibile ma non modifica né l'umidità dell'aria né la temperatura della parete: la muffa ricompare nelle stesse condizioni." },
      { q: "Basta aprire la finestra?", a: "In un bagno con finestra aiuta molto, se si apre subito dopo la doccia e per un tempo sufficiente. In un bagno cieco l'unica soluzione affidabile è la ventilazione meccanica temporizzata." },
    ],
    related: ["infiltrazioni-dal-bagno", "gres-o-ceramica-per-il-bagno"],
  },

  {
    slug: "infiltrazioni-dal-bagno",
    category: "problemi",
    title: "Infiltrazioni dal bagno: come si trova l'origine",
    metaTitle: "Infiltrazioni dal Bagno: Cause e Come Individuarle | Bagni Milano",
    metaDescription: "Infiltrazione dal bagno verso il piano di sotto: le cinque cause più frequenti, come si individua l'origine e cosa comporta l'intervento.",
    excerpt: "Un'infiltrazione dal bagno non si risolve indovinando. Si risolve escludendo, una causa alla volta.",
    answer: "Le infiltrazioni dal bagno hanno cinque cause frequenti: impermeabilizzazione assente o degradata sotto la doccia, siliconature perimetrali a fine vita, guarnizione dello scarico deteriorata, perdita su un raccordo incassato, fughe degradate nella zona bagnata. Si individuano per esclusione, non a occhio.",
    datePublished: "2026-09-06",
    readingTime: "6 min",
    primaryKeyword: "infiltrazioni dal bagno",
    internalLinks: [
      { label: "Rifacimento doccia", href: "/servizi/rifacimento-doccia" },
      { label: "Rifacimento impianto idraulico del bagno", href: "/servizi/rifacimento-impianto-idraulico-bagno" },
    ],
    body: P(`
<h2>Le cinque cause più frequenti</h2>
<ol>
<li><strong>Impermeabilizzazione assente o degradata sotto il piatto doccia.</strong> È la causa numero uno nelle case dove il bagno ha più di quindici anni.</li>
<li><strong>Siliconature perimetrali a fine vita.</strong> Il silicone invecchia, si stacca e lascia passare l'acqua nel giunto fra piatto e parete.</li>
<li><strong>Guarnizione della piletta di scarico deteriorata.</strong> Produce una perdita lenta e continua, difficile da vedere.</li>
<li><strong>Perdita su un raccordo incassato.</strong> Tipica degli impianti datati, spesso su un gomito dietro la parete.</li>
<li><strong>Fughe degradate nella zona bagnata.</strong> Da sole raramente bastano, ma sommate a un'impermeabilizzazione assente diventano la via d'ingresso.</li>
</ol>

<h2>Come si individua l'origine per esclusione</h2>
<p>Il metodo è semplice e va seguito in ordine, perché ogni passaggio esclude una famiglia di cause:</p>
<ul>
<li>Non usare il bagno per 24-48 ore e osservare se la macchia evolve. Se evolve senza uso, la perdita è su una linea in pressione.</li>
<li>Riempire e svuotare solo il lavabo, poi solo la doccia, osservando dopo ciascuna prova. Isola l'apparecchio coinvolto.</li>
<li>Tamponare temporaneamente il perimetro del piatto e ripetere la prova doccia. Se la macchia si ferma, il problema è nel giunto perimetrale.</li>
</ul>

<h2>Perché è urgente</h2>
<p>Un'infiltrazione verso l'appartamento sottostante ha conseguenze che escono dal perimetro tecnico: coinvolge il vicino, l'amministratore e spesso l'assicurazione. Più a lungo si aspetta, più il danno da risarcire cresce rispetto al costo dell'intervento.</p>
`),
    faqs: [
      { q: "L'infiltrazione può venire dal box doccia?", a: "Raramente. Il box è quasi sempre innocente: nella grande maggioranza dei casi l'acqua passa da un'impermeabilizzazione mancante sotto il piatto o da una siliconatura perimetrale degradata." },
      { q: "Si può riparare senza rifare la doccia?", a: "A volte sì, quando la causa è la sola siliconatura o la guarnizione della piletta. Se l'impermeabilizzazione sotto il piatto è assente, l'unico intervento risolutivo è rifare la zona doccia." },
    ],
    related: ["muffa-in-bagno-cause-e-soluzioni", "quanto-costa-rifare-un-bagno"],
  },

  {
    slug: "serve-la-cila-per-rifare-il-bagno",
    category: "normative",
    title: "Serve la CILA per rifare il bagno?",
    metaTitle: "Serve la CILA per Rifare il Bagno? | Bagni Milano",
    metaDescription: "Quando serve la CILA per rifare il bagno e quando l'intervento resta manutenzione ordinaria. Differenze pratiche e comunicazione all'amministratore.",
    excerpt: "Dipende da una cosa sola: se tocchi murature e posizione degli impianti, oppure no.",
    answer: "La CILA non serve se si sostituiscono sanitari, rivestimenti e finiture senza modificare murature né spostare i punti acqua principali: è manutenzione ordinaria. Serve invece quando si demoliscono o spostano tramezzi, o si modifica in modo significativo la posizione degli impianti.",
    datePublished: "2026-09-06",
    readingTime: "5 min",
    primaryKeyword: "serve la CILA per rifare il bagno",
    internalLinks: [
      { label: "Ristrutturazione bagno in condominio", href: "/servizi/ristrutturazione-bagno-condominio" },
      { label: "FAQ Bagni Milano", href: "/faq" },
    ],
    body: P(`
<h2>La linea di demarcazione</h2>
<p>La distinzione pratica è fra manutenzione ordinaria e manutenzione straordinaria.</p>
<table>
<thead><tr><th>Intervento</th><th>Titolo abilitativo</th></tr></thead>
<tbody>
<tr><td>Sostituzione di sanitari e rubinetteria</td><td>Nessuno</td></tr>
<tr><td>Rifacimento di pavimento e rivestimento</td><td>Nessuno</td></tr>
<tr><td>Sostituzione di tubazioni sullo stesso percorso</td><td>Nessuno</td></tr>
<tr><td>Spostamento significativo dei punti acqua</td><td>Di norma CILA</td></tr>
<tr><td>Demolizione o spostamento di tramezzi</td><td>Di norma CILA</td></tr>
<tr><td>Modifica di murature portanti</td><td>Titolo più complesso, con progetto strutturale</td></tr>
</tbody>
</table>
<p>La verifica va sempre fatta caso per caso: regolamenti edilizi comunali e vincoli sull'immobile possono cambiare l'inquadramento.</p>

<h2>Comunicazione all'amministratore: sempre</h2>
<p>Indipendentemente dalla CILA, in condominio i lavori vanno comunicati all'amministratore prima di iniziare, indicando natura dell'intervento, impresa esecutrice e durata prevista. Non serve invece l'autorizzazione dell'assemblea per lavori interni all'appartamento.</p>

<h2>Chi presenta la pratica</h2>
<p>La CILA è presentata da un tecnico abilitato, che asseveri la conformità dell'intervento. Nella formula chiavi in mano la gestione della pratica rientra nel perimetro dell'impresa, che si coordina con il tecnico.</p>
`),
    faqs: [
      { q: "Se sposto solo il bidet serve la CILA?", a: "Uno spostamento minimo sullo stesso allaccio esistente resta di norma manutenzione ordinaria. Uno spostamento che richiede un nuovo tratto di scarico va valutato: la verifica spetta a un tecnico abilitato." },
      { q: "Cosa succede se non presento la CILA quando serve?", a: "L'intervento risulta eseguito in assenza del titolo richiesto, con le conseguenze sanzionatorie previste e possibili problemi in caso di successiva compravendita dell'immobile." },
    ],
    related: ["ristrutturare-bagno-a-milano", "detrazioni-ristrutturazione-bagno"],
  },

  {
    slug: "detrazioni-ristrutturazione-bagno",
    category: "normative",
    title: "Detrazioni fiscali per la ristrutturazione del bagno: come funzionano",
    metaTitle: "Detrazioni Ristrutturazione Bagno: Come Funzionano | Bagni Milano",
    metaDescription: "Come funzionano le detrazioni fiscali per la ristrutturazione del bagno: quali interventi rientrano, il bonus mobili e gli adempimenti necessari.",
    excerpt: "Il meccanismo è stabile da anni. Sono le aliquote a cambiare, e vanno verificate ogni volta.",
    answer: "La ristrutturazione del bagno rientra tipicamente fra gli interventi di recupero edilizio agevolabili quando configura manutenzione straordinaria. L'acquisto di arredo bagno può rientrare nel bonus mobili se collegato a un intervento di recupero. Aliquote e massimali cambiano con ogni legge di bilancio e vanno verificati con un professionista.",
    datePublished: "2026-09-06",
    readingTime: "6 min",
    primaryKeyword: "detrazioni ristrutturazione bagno",
    internalLinks: [
      { label: "Serve la CILA per rifare il bagno", href: "/blog/serve-la-cila-per-rifare-il-bagno" },
      { label: "Quanto costa ristrutturare un bagno", href: "/quanto-costa-ristrutturare-bagno" },
    ],
    body: P(`
<div class="answer-block"><p>⚠️ Contenuto da validare prima della pubblicazione.</p><p>Aliquote, massimali di spesa e requisiti delle agevolazioni edilizie cambiano con ogni legge di bilancio. Questa pagina descrive il meccanismo generale e non riporta percentuali, proprio per non pubblicare dati che invecchiano male. Prima del go-live il testo va integrato con i riferimenti in vigore e validato dal commercialista dell'azienda.</p></div>

<h2>Il meccanismo, in breve</h2>
<p>Le agevolazioni sul recupero edilizio funzionano come detrazione dall'IRPEF, ripartita in quote annuali di pari importo, entro un massimale di spesa riferito all'unità immobiliare. La ristrutturazione del bagno vi rientra quando configura manutenzione straordinaria, cioè quando si modificano impianti, tramezzi o la distribuzione degli spazi.</p>

<h2>Cosa serve per non perdere il beneficio</h2>
<ul>
<li><strong>Pagamento tracciabile con bonifico dedicato</strong>, riportante causale, codice fiscale del beneficiario e partita IVA dell'impresa. È l'adempimento su cui si perde più spesso il diritto.</li>
<li><strong>Fatture intestate a chi detrae</strong>, coerenti con chi effettua il bonifico.</li>
<li><strong>Titolo edilizio quando richiesto</strong> — vedi la nostra guida sulla CILA.</li>
<li><strong>Conservazione della documentazione</strong> per il periodo previsto dai controlli.</li>
</ul>

<h2>Bonus mobili e arredo bagno</h2>
<p>L'acquisto di mobile bagno e grandi elettrodomestici può rientrare nell'agevolazione dedicata all'arredo, a condizione che sia collegato a un intervento di recupero del patrimonio edilizio iniziato entro i termini previsti. È un beneficio separato, con un proprio massimale.</p>

<h2>Abbattimento delle barriere architettoniche</h2>
<p>Gli interventi che rendono il bagno accessibile hanno storicamente un trattamento dedicato, distinto dalla ristrutturazione ordinaria. Anche in questo caso i parametri vanno verificati sull'anno in corso.</p>
`),
    faqs: [
      { q: "La ristrutturazione del bagno è detraibile?", a: "Quando configura manutenzione straordinaria rientra tipicamente fra gli interventi di recupero edilizio agevolabili. Aliquote e massimali vanno verificati sull'anno in corso con un professionista." },
      { q: "Posso detrarre anche il mobile bagno?", a: "Può rientrare nell'agevolazione dedicata all'arredo, se collegato a un intervento di recupero edilizio e nel rispetto dei requisiti e dei massimali previsti." },
    ],
    related: ["serve-la-cila-per-rifare-il-bagno", "quanto-costa-rifare-un-bagno"],
  },

  {
    slug: "ristrutturare-bagno-a-milano",
    category: "lombardia",
    title: "Ristrutturare il bagno a Milano: cosa cambia rispetto ad altrove",
    metaTitle: "Ristrutturare il Bagno a Milano: Cosa Sapere Prima | Bagni Milano",
    metaDescription: "Ristrutturare il bagno a Milano: impianti in ferro zincato, bagni ciechi, regolamenti condominiali e logistica di cantiere fra ZTL e cortili stretti.",
    excerpt: "A Milano il bagno si ristruttura con due vincoli in più: l'età degli impianti e la logistica del cantiere.",
    answer: "A Milano la ristrutturazione del bagno presenta tre specificità: impianti in ferro zincato molto diffusi negli edifici anteriori al 1975, prevalenza di bagni ciechi sotto i 5 mq, e una logistica di cantiere condizionata da ZTL, cortili stretti e regolamenti condominiali restrittivi sugli orari.",
    datePublished: "2026-09-06",
    readingTime: "7 min",
    primaryKeyword: "ristrutturare bagno Milano",
    internalLinks: [
      { label: "Ristrutturazione bagno a Milano", href: "/ristrutturazione-bagno-milano" },
      { label: "Ristrutturazione bagno in condominio", href: "/servizi/ristrutturazione-bagno-condominio" },
    ],
    body: P(`
<h2>L'età degli impianti</h2>
<p>Una quota molto rilevante del patrimonio residenziale milanese è stata costruita fra il dopoguerra e i primi anni '70. In quegli edifici le tubazioni di adduzione sono spesso in ferro zincato, un materiale che si ossida dall'interno riducendo progressivamente la sezione utile.</p>
<p>La conseguenza pratica: a Milano, più che altrove, il preventivo per un bagno va costruito dopo aver verificato lo stato dell'impianto, perché è la voce che può spostare alcune migliaia di euro.</p>

<h2>Il bagno cieco è la norma, non l'eccezione</h2>
<p>Negli appartamenti milanesi tipici il bagno è interno, senza finestra, e spesso sotto i 5 mq. Questo rende la ventilazione meccanica un requisito di progetto, non un accessorio, e rende la scelta della disposizione dei sanitari molto più vincolante che in una casa con bagno finestrato.</p>

<h2>La logistica del cantiere è un costo reale</h2>
<ul>
<li><strong>ZTL, Area B e Area C</strong> condizionano gli orari di accesso dei mezzi.</li>
<li><strong>Cortili stretti e ascensori piccoli</strong> allungano i tempi di carico e scarico: sacchi di macerie e lastre di grande formato non sempre entrano in ascensore.</li>
<li><strong>Divieti di sosta e permessi</strong> per il posizionamento del mezzo vanno pianificati.</li>
</ul>
<p>Sono ore di manodopera, e in un preventivo onesto compaiono da qualche parte. Il punto non è che costino: è che siano dichiarate.</p>

<h2>Regolamenti condominiali</h2>
<p>Molti regolamenti condominiali milanesi restringono ulteriormente le fasce orarie in cui sono ammesse lavorazioni rumorose. Concentrare demolizione e tracce in giornate contigue riduce sia la durata del disagio sia la probabilità di lamentele.</p>

<h2>Edifici storici</h2>
<p>Nel centro e nel semicentro si incontrano solai in legno o in ferro e altezze importanti. In questi casi il carico aggiuntivo di un massetto tradizionale va valutato, e si lavora spesso con massetti alleggeriti e sistemi di posa a basso spessore.</p>
`),
    faqs: [
      { q: "Quanto costa rifare un bagno a Milano rispetto alla provincia?", a: "La differenza principale non è il listino ma la logistica: accessi limitati, cortili stretti e ascensori piccoli aggiungono ore di manodopera. Sul preventivo incide di più lo stato dell'impianto che la città." },
      { q: "Come si gestiscono le macerie in centro a Milano?", a: "Con trasporto in discarica autorizzata e formulario rifiuti, pianificando carico e scarico in orari compatibili con ZTL e regolamento condominiale." },
    ],
    related: ["serve-la-cila-per-rifare-il-bagno", "quanto-costa-rifare-un-bagno"],
  },

  {
    slug: "quanto-costa-trasformare-vasca-in-doccia",
    category: "costi",
    title: "Quanto costa trasformare la vasca in doccia",
    metaTitle: "Quanto Costa Trasformare la Vasca in Doccia | Bagni Milano",
    metaDescription: "Costo della trasformazione vasca in doccia: cosa comprende l'intervento, range indicativi, e quando conviene invece rifare tutto il bagno.",
    excerpt: "Sembra un intervento piccolo. Tocca scarico, impermeabilizzazione e rivestimento: il costo dipende da quanto rivestimento si deve rifare.",
    answer: "Trasformare la vasca in doccia costa indicativamente fra 2.500 e 6.000 € e richiede 2-4 giorni lavorativi. Il costo dipende soprattutto da quanto rivestimento va rifatto: la zona vasca era rivestita solo in parte, e trovare piastrelle identiche alle esistenti è raro.",
    datePublished: "2026-09-06",
    readingTime: "5 min",
    primaryKeyword: "quanto costa trasformare vasca in doccia",
    internalLinks: [
      { label: "Trasformazione vasca in doccia", href: "/servizi/trasformazione-vasca-in-doccia" },
      { label: "Quanto costa ristrutturare un bagno", href: "/quanto-costa-ristrutturare-bagno" },
    ],
    body: P(`
<h2>Cosa comprende il costo</h2>
<ul>
<li>Demolizione della vasca e del muretto perimetrale, con smaltimento</li>
<li>Adeguamento dello scarico alla quota e alla posizione del nuovo piatto</li>
<li>Impermeabilizzazione del fondo e delle pareti della nicchia</li>
<li>Rivestimento della nuova zona doccia</li>
<li>Fornitura e posa di piatto e box</li>
</ul>

<h2>La variabile che decide il prezzo</h2>
<p>Non è il piatto doccia: è il rivestimento. Dove c'era la vasca, le pareti erano rivestite solo fino a una certa altezza, e il pavimento sotto la vasca spesso non è mai stato piastrellato.</p>
<p>Se le piastrelle esistenti sono ancora reperibili, l'intervento resta circoscritto. Se non lo sono — ed è il caso più frequente sopra i dieci anni — bisogna decidere fra un accostamento visibile e il rifacimento dell'intero rivestimento. La seconda opzione avvicina il costo a quello di una ristrutturazione completa.</p>

<h2>Quando conviene rifare tutto</h2>
<p>Quando l'impianto idraulico è datato, quando il rivestimento è fuori produzione o quando il bagno ha più di 25 anni. In quei casi molte lavorazioni si pagano una volta sola: protezioni, smaltimento, presenza in cantiere della squadra.</p>
`),
    faqs: [
      { q: "Si può fare in un solo giorno?", a: "No, se l'intervento è fatto correttamente. L'impermeabilizzazione e gli stucchi hanno tempi tecnici di asciugatura: servono di norma 2-4 giorni lavorativi." },
      { q: "Serve un permesso per trasformare la vasca in doccia?", a: "Di norma no: è manutenzione ordinaria se non si spostano i punti acqua principali. In condominio va comunque comunicato all'amministratore." },
    ],
    related: ["quanto-costa-rifare-un-bagno", "costo-piastrelle-bagno"],
  },

  {
    slug: "dimensioni-minime-bagno",
    category: "progettazione",
    title: "Dimensioni minime del bagno: cosa serve davvero per farci stare tutto",
    metaTitle: "Dimensioni Minime Bagno: Misure e Spazi Reali | Bagni Milano",
    metaDescription: "Dimensioni minime di un bagno funzionale: metratura, distanze fra sanitari, ingombri reali di lavabo, wc, bidet e doccia. Con esempi di layout.",
    excerpt: "Il numero di metri quadri conta meno della forma. Un bagno di 4 mq quadrato funziona meglio di uno di 5 stretto e lungo.",
    answer: "Un bagno completo con lavabo, wc, bidet e doccia funziona a partire da circa 3,5-4 mq, purché la forma sia regolare. Sotto i 3 mq si rinuncia di norma al bidet. Conta più la geometria dell'ambiente della metratura: la larghezza minima utile è circa 160 cm.",
    datePublished: "2026-09-06",
    readingTime: "6 min",
    primaryKeyword: "dimensioni minime bagno",
    internalLinks: [
      { label: "Ristrutturazione bagno piccolo", href: "/servizi/bagno-piccolo" },
      { label: "Come progettare un bagno", href: "/blog/come-progettare-un-bagno" },
    ],
    body: P(`
<h2>Ingombri reali dei sanitari</h2>
<table>
<thead><tr><th>Sanitario</th><th>Ingombro tipico</th><th>Spazio libero frontale</th></tr></thead>
<tbody>
<tr><td>Lavabo</td><td>50-70 x 35-50 cm</td><td>55-60 cm</td></tr>
<tr><td>WC sospeso</td><td>36-40 x 50-55 cm</td><td>55-60 cm</td></tr>
<tr><td>Bidet sospeso</td><td>36-40 x 50-55 cm</td><td>55-60 cm</td></tr>
<tr><td>Piatto doccia</td><td>da 70x90 a 80x120 cm</td><td>55-60 cm all'uscita</td></tr>
<tr><td>Vasca standard</td><td>70x170 cm</td><td>55-60 cm sul lato lungo</td></tr>
</tbody>
</table>
<p>La versione sospesa dei sanitari recupera profondità utile e libera il pavimento, con un effetto sulla percezione dello spazio superiore a quello dei centimetri realmente guadagnati.</p>

<h2>Perché la forma batte la metratura</h2>
<p>Uno spazio di 5 mq largo 120 cm costringe a disporre tutti i sanitari su una sola parete, con un corridoio davanti. Uno di 4 mq largo 180 cm permette due pareti attrezzate e una zona doccia in fondo.</p>
<p>La larghezza minima realmente utile per lavorare bene è intorno ai 160 cm: sotto, le opzioni di layout si riducono a una.</p>

<h2>Quando si rinuncia a qualcosa</h2>
<ul>
<li><strong>Sotto 3 mq:</strong> si rinuncia di norma al bidet, oppure si sceglie un wc con funzione integrata.</li>
<li><strong>Bagno stretto:</strong> la doccia rettangolare stretta e lunga rende più di una quadrata.</li>
<li><strong>Porta:</strong> se si apre verso l'interno può consumare un intero metro quadro utile. Scorrevole o a battente esterno è quasi sempre la scelta migliore.</li>
</ul>
`),
    faqs: [
      { q: "Qual è la metratura minima per un bagno?", a: "Per un bagno completo con lavabo, wc, bidet e doccia si lavora bene a partire da circa 3,5-4 mq con forma regolare. Le prescrizioni dimensionali applicabili dipendono dal regolamento edilizio comunale." },
      { q: "Serve la finestra in bagno?", a: "Non sempre: molti regolamenti ammettono il bagno cieco a condizione che sia dotato di ventilazione meccanica adeguata. La verifica va fatta sul regolamento edilizio del comune." },
    ],
    related: ["come-progettare-un-bagno", "errori-da-evitare-ristrutturazione-bagno"],
  },

  {
    slug: "costo-bagno-6-mq",
    category: "costi",
    title: "Quanto costa un bagno di 6 mq",
    metaTitle: "Quanto Costa un Bagno di 6 mq | Range e Voci | Bagni Milano",
    metaDescription: "Quanto costa rifare un bagno di 6 mq: range indicativi, superficie reale da rivestire, e perché due bagni identici possono differire di 6.000 euro.",
    excerpt: "Sei metri quadri di pavimento sono spesso quindici metri quadri di parete. È lì che va il budget dei rivestimenti.",
    answer: "Un bagno di 6 mq costa indicativamente fra 8.000 e 18.000 € in Lombardia per una ristrutturazione completa con rifacimento degli impianti. Con impianti recenti da mantenere e finiture essenziali si scende sotto i 10.000 €; con grandi lastre e sanitari di fascia alta si superano i 20.000 €.",
    datePublished: "2026-09-06",
    readingTime: "6 min",
    primaryKeyword: "costo bagno 6 mq",
    internalLinks: [
      { label: "Calcolatore: stima il costo del tuo bagno", href: "/calcolatore-costo-bagno" },
      { label: "Guida completa ai costi", href: "/quanto-costa-ristrutturare-bagno" },
    ],
    body: P(`
<h2>Sei metri quadri di pavimento, quindici di parete</h2>
<p>È l'errore di valutazione più comune. Un bagno di 6 mq con pianta 2,4 × 2,5 m e altezza di rivestimento a 2,2 m ha circa 21 metri lineari di perimetro per 2,2 m di altezza, meno porta e finestra: intorno ai 18-20 mq di parete da rivestire.</p>
<p>La superficie di parete è quindi tre volte quella di pavimento. Quando si valuta il costo dei rivestimenti, è quel numero che conta.</p>

<h2>Cosa cambia fra 8.000 e 18.000 euro</h2>
<table>
<thead><tr><th>Scenario</th><th>Range indicativo</th></tr></thead>
<tbody>
<tr><td>Impianti recenti, sanitari nella stessa posizione, finiture essenziali</td><td>8.000 – 11.000 €</td></tr>
<tr><td>Impianti da rifare, sanitari nella stessa posizione, finiture medie</td><td>11.000 – 15.000 €</td></tr>
<tr><td>Impianti da rifare, sanitari spostati, finiture alte</td><td>15.000 – 22.000 €</td></tr>
</tbody>
</table>

<h2>Le tre voci che si sottovalutano sempre</h2>
<ul>
<li><strong>Lo sfrido.</strong> Su 20 mq di rivestimento servono 22-23 mq di materiale. Su una fascia media sono qualche centinaio di euro.</li>
<li><strong>Il ripristino della porta.</strong> Alzare il pavimento di 1-2 cm significa accorciare la porta o sostituirla. Raramente compare nei preventivi generici.</li>
<li><strong>La tinteggiatura del soffitto.</strong> Dopo tracce e polvere va sempre rifatta.</li>
</ul>

<h2>Dove ha senso risparmiare in 6 mq</h2>
<p>Sul rivestimento delle pareti che non si vedono entrando: quella dietro la porta e quella sopra i sanitari possono usare un materiale coordinato più economico, senza che la differenza si percepisca.</p>
<p>Dove non ha senso: impermeabilizzazione, massetto e impianto. Sono le lavorazioni invisibili che decidono se il bagno reggerà, e valgono meno del 20% del totale.</p>
`),
    faqs: [
      { q: "Un bagno di 6 mq costa il doppio di uno di 3 mq?", a: "No. Molte lavorazioni — allestimento del cantiere, impianti, smaltimento, presenza della squadra — si pagano una volta sola. Un bagno di 6 mq costa circa il 25-35% in più di uno di 3-4 mq, non il doppio." },
      { q: "Quanto materiale serve per 6 mq?", a: "Circa 6-7 mq di pavimento e 18-20 mq di rivestimento, più il 10-15% di sfrido. Il conto va fatto sulle pareti, non sul pavimento." },
    ],
    related: ["quanto-costa-rifare-un-bagno", "costo-piastrelle-bagno"],
  },

  {
    slug: "leggere-preventivo-ristrutturazione-bagno",
    category: "costi",
    title: "Come si legge un preventivo di ristrutturazione bagno",
    metaTitle: "Come Leggere un Preventivo di Ristrutturazione Bagno | Bagni Milano",
    metaDescription: "Come confrontare due preventivi per il bagno: le voci che devono comparire, le formule che nascondono costi e le domande da fare prima di firmare.",
    excerpt: "Due preventivi si confrontano solo se elencano le stesse lavorazioni. Quasi mai lo fanno.",
    answer: "Un preventivo di ristrutturazione bagno è confrontabile solo se elenca separatamente demolizione, smaltimento con formulario, impianto idraulico, impianto elettrico, massetto e impermeabilizzazione, posa con i mq indicati, sanitari con i modelli, finiture, pulizia finale e le date di inizio e consegna.",
    datePublished: "2026-09-06",
    readingTime: "7 min",
    primaryKeyword: "leggere preventivo ristrutturazione bagno",
    internalLinks: [
      { label: "Guida completa ai costi", href: "/quanto-costa-ristrutturare-bagno" },
      { label: "Ristrutturazione bagno chiavi in mano", href: "/ristrutturazione-bagno" },
    ],
    body: P(`
<h2>Il preventivo più corto non è il più economico</h2>
<p>Un preventivo che dice "rifacimento bagno completo, chiavi in mano: 9.500 €" non è più conveniente di uno da dodici voci a 12.000 €. È semplicemente meno definito, e ogni voce non scritta è una voce che verrà discussa a cantiere aperto, quando il bagno è demolito e il cliente non ha alternative.</p>

<h2>Le formule da chiarire prima di firmare</h2>
<table>
<thead><tr><th>Se leggi</th><th>Chiedi</th></tr></thead>
<tbody>
<tr><td>"Opere murarie"</td><td>Quali, esattamente? Demolizione, tracce, massetto e ripristini sono cose diverse</td></tr>
<tr><td>"Fornitura sanitari"</td><td>Quali modelli, di quale marca, a quale prezzo di listino</td></tr>
<tr><td>"Rivestimenti esclusi"</td><td>Quanti mq servono e chi li acquista</td></tr>
<tr><td>"Salvo imprevisti"</td><td>Quali imprevisti, e con quale procedura di approvazione</td></tr>
<tr><td>"Tempi indicativi"</td><td>Data di inizio e data di consegna, per iscritto</td></tr>
<tr><td>"Smaltimento a carico del committente"</td><td>Quanto costa e chi lo organizza</td></tr>
</tbody>
</table>

<h2>Le tre domande che rivelano di più</h2>
<ol>
<li><strong>"Cosa succede se durante la demolizione trovate un problema all'impianto?"</strong> La risposta giusta descrive una procedura: comunicazione, preventivo della variante, approvazione scritta, poi esecuzione. Una risposta vaga significa che il problema diventerà un costo non negoziato.</li>
<li><strong>"Chi è il mio referente e con che frequenza mi aggiorna?"</strong> Se la risposta è un nome e una cadenza, c'è un'organizzazione. Se è "ci sentiamo", non c'è.</li>
<li><strong>"L'impermeabilizzazione è compresa e fin dove arriva?"</strong> È la voce che si taglia più spesso per abbassare il prezzo, ed è quella che costa di più non avere.</li>
</ol>

<h2>Il confronto va fatto a parità di perimetro</h2>
<p>Prima di confrontare i totali, si compila una tabella con le lavorazioni su una colonna e i preventivi sulle altre. Le caselle vuote sono la differenza reale di prezzo.</p>
<p>Nella maggior parte dei casi, dopo questo esercizio, il preventivo che sembrava più caro del 25% risulta più caro dell'8% e comprende tre lavorazioni in più.</p>
`),
    faqs: [
      { q: "È normale che i preventivi differiscano molto?", a: "Sì, ed è quasi sempre perché non comprendono le stesse lavorazioni. Differenze superiori al 30% a parità di perimetro reale sono rare: di solito una delle due offerte esclude qualcosa." },
      { q: "Devo pagare per avere un preventivo?", a: "Un preventivo dopo sopralluogo è di norma gratuito. Può essere a pagamento la progettazione vera e propria, quando comprende render, tavole quotate e capitolato: in quel caso l'importo va dichiarato prima." },
    ],
    related: ["quanto-costa-rifare-un-bagno", "errori-da-evitare-ristrutturazione-bagno"],
  },

  {
    slug: "costo-manodopera-ristrutturazione-bagno",
    category: "costi",
    title: "Quanto incide la manodopera sul costo di un bagno",
    metaTitle: "Costo Manodopera Ristrutturazione Bagno | Bagni Milano",
    metaDescription: "Quanto pesa la manodopera in una ristrutturazione bagno: 35-45% del totale, quante figure intervengono e perché il coordinamento è una voce di costo reale.",
    excerpt: "Su 12.000 euro di bagno, circa 5.000 sono ore di lavoro di cinque figure diverse.",
    answer: "La manodopera pesa fra il 35% e il 45% del costo di una ristrutturazione bagno. In un cantiere completo intervengono almeno cinque figure — muratore, idraulico, elettricista, posatore e chi coordina — per un totale indicativo di 25-40 giornate uomo su 10-15 giorni di calendario.",
    datePublished: "2026-09-06",
    readingTime: "5 min",
    primaryKeyword: "costo manodopera ristrutturazione bagno",
    internalLinks: [
      { label: "Guida completa ai costi", href: "/quanto-costa-ristrutturare-bagno" },
      { label: "Il Metodo Bagno Certo", href: "/metodo" },
    ],
    body: P(`
<h2>Chi entra davvero in un cantiere da 6 mq</h2>
<table>
<thead><tr><th>Figura</th><th>Fasi</th><th>Giornate indicative</th></tr></thead>
<tbody>
<tr><td>Muratore</td><td>Demolizione, tracce, massetto, ripristini</td><td>5-8</td></tr>
<tr><td>Idraulico</td><td>Adduzione, scarichi, prova di tenuta, montaggio sanitari</td><td>4-6</td></tr>
<tr><td>Elettricista</td><td>Punti luce, prese, quadro</td><td>2-3</td></tr>
<tr><td>Posatore</td><td>Impermeabilizzazione, posa, stuccatura, siliconature</td><td>5-8</td></tr>
<tr><td>Imbianchino</td><td>Tinteggiatura finale</td><td>1-2</td></tr>
<tr><td>Referente / direzione</td><td>Coordinamento, controlli, consegna</td><td>3-5</td></tr>
</tbody>
</table>

<h2>Il coordinamento è una voce, non un favore</h2>
<p>Le giornate del referente sembrano un costo eliminabile. Sono invece quelle che evitano il caso più comune: il posatore che arriva e trova il massetto non asciutto, e va rimandato di tre giorni con la squadra ferma.</p>
<p>In un cantiere non coordinato quel tempo non sparisce: si sposta sul cliente, che diventa il centralino fra cinque fornitori.</p>

<h2>Perché il costo orario non si confronta</h2>
<p>Confrontare due imprese sul costo orario dichiarato dice poco: conta quante ore servono, e quelle dipendono da organizzazione, attrezzatura e da quante volte si torna indietro a rifare.</p>
<p>Un posatore più veloce del 30% con lo stesso risultato non è più caro: è meno caro.</p>
`),
    faqs: [
      { q: "Posso far eseguire alcune lavorazioni da artigiani miei?", a: "È possibile, ma spezza la responsabilità: se il rivestimento si stacca, il posatore indicherà il massetto e il muratore indicherà la posa. Nella formula chiavi in mano la responsabilità è unica proprio per evitarlo." },
      { q: "La manodopera è detraibile?", a: "Nella misura in cui l'intervento rientra fra quelli agevolabili, sì: la detrazione riguarda la spesa complessiva sostenuta, non solo i materiali. Aliquote e requisiti vanno verificati sull'anno in corso." },
    ],
    related: ["quanto-costa-rifare-un-bagno", "leggere-preventivo-ristrutturazione-bagno"],
  },

  {
    slug: "cattivi-odori-in-bagno",
    category: "problemi",
    title: "Cattivi odori in bagno: le quattro cause reali",
    metaTitle: "Cattivi Odori in Bagno: Cause e Soluzioni | Bagni Milano",
    metaDescription: "Da dove viene il cattivo odore in bagno: sifone asciutto, colonna non ventilata, pendenza insufficiente, guarnizioni degradate. Come si riconosce ciascuna causa.",
    excerpt: "Il deodorante nasconde il sintomo. Le cause sono quattro e si riconoscono in pochi minuti.",
    answer: "I cattivi odori in bagno hanno quattro cause: sifone asciutto per mancato uso, colonna di scarico non ventilata correttamente, pendenza dello scarico insufficiente che trattiene i residui, guarnizione del wc o della piletta degradata. Ciascuna si riconosce da quando e come l'odore si manifesta.",
    datePublished: "2026-09-06",
    readingTime: "6 min",
    primaryKeyword: "cattivi odori bagno",
    internalLinks: [
      { label: "Rifacimento impianto idraulico del bagno", href: "/servizi/rifacimento-impianto-idraulico-bagno" },
      { label: "Ristrutturazione bagno chiavi in mano", href: "/ristrutturazione-bagno" },
    ],
    body: P(`
<h2>Come si riconoscono</h2>
<table>
<thead><tr><th>Quando compare</th><th>Causa probabile</th><th>Verifica</th></tr></thead>
<tbody>
<tr><td>Dopo giorni di assenza, poi sparisce</td><td>Sifone asciutto per evaporazione</td><td>Far scorrere l'acqua un minuto: se l'odore sparisce, è questo</td></tr>
<tr><td>Quando si scarica un altro apparecchio o il vicino di sopra</td><td>Colonna non ventilata: la depressione risucchia il sifone</td><td>Osservare se l'odore arriva insieme a un gorgoglio</td></tr>
<tr><td>Costante, peggiora d'estate</td><td>Pendenza insufficiente: residui fermi nel tratto orizzontale</td><td>Lo scarico è anche lento</td></tr>
<tr><td>Localizzato alla base del wc</td><td>Guarnizione della braga degradata</td><td>Odore più forte accostandosi al pavimento</td></tr>
</tbody>
</table>

<h2>Il sifone asciutto è il caso più semplice</h2>
<p>Il sifone trattiene un tappo d'acqua che separa l'ambiente dalla colonna. In un bagno usato poco — una seconda casa, un bagno di servizio — quell'acqua evapora e il tappo sparisce.</p>
<p>Si risolve facendo scorrere l'acqua regolarmente. Nei bagni usati raramente, un cucchiaio di olio alimentare nello scarico rallenta l'evaporazione per settimane.</p>

<h2>La colonna non ventilata è il caso più frequente nei condomini</h2>
<p>Quando qualcuno scarica ai piani superiori, la colonna genera una depressione. Se la ventilazione primaria è insufficiente o ostruita, quella depressione risucchia l'acqua dei sifoni degli appartamenti sottostanti, che restano aperti.</p>
<p>Il sintomo tipico è il gorgoglio nel lavabo o nella doccia quando qualcun altro scarica. La soluzione riguarda la colonna, che è parte comune: va segnalato all'amministratore.</p>

<h2>La pendenza è quella che si scopre a lavori finiti</h2>
<p>Un tratto orizzontale con pendenza sotto il minimo non svuota completamente. I residui restano, fermentano e l'odore diventa costante.</p>
<p>È l'esito tipico di uno spostamento del wc fatto senza verificare le quote. Si corregge solo riaprendo il pavimento e rifacendo il tratto: è il motivo per cui in fase di progetto la posizione dei sanitari si decide sulla base dello scarico, non del gusto.</p>
`),
    faqs: [
      { q: "I prodotti disgorganti risolvono il cattivo odore?", a: "Solo quando la causa è un accumulo di residui nel sifone. Se l'origine è un sifone asciutto, una colonna non ventilata o una pendenza insufficiente, non cambiano nulla." },
      { q: "L'odore può venire dal vicino?", a: "Sì, indirettamente: se la colonna comune non è ventilata correttamente, gli scarichi degli altri appartamenti svuotano i sifoni del vostro. È un problema della colonna, quindi condominiale." },
    ],
    related: ["infiltrazioni-dal-bagno", "muffa-in-bagno-cause-e-soluzioni"],
  },

  {
    slug: "scarico-bagno-lento",
    category: "problemi",
    title: "Scarico del bagno lento: quando è il sifone e quando è la pendenza",
    metaTitle: "Scarico Bagno Lento: Cause e Come Risolvere | Bagni Milano",
    metaDescription: "Perché lo scarico del bagno è lento: ostruzione del sifone, incrostazioni nella tubazione, pendenza insufficiente o colonna satura. Come distinguerle.",
    excerpt: "Se è lento solo un apparecchio è il sifone. Se sono lenti tutti, il problema è più a valle.",
    answer: "Se lo scarico è lento in un solo apparecchio, la causa è quasi sempre un'ostruzione locale nel sifone. Se sono lenti più apparecchi contemporaneamente, il problema è nel tratto comune o nella colonna. Se il rallentamento è progressivo negli anni, sono incrostazioni nella tubazione.",
    datePublished: "2026-09-06",
    readingTime: "5 min",
    primaryKeyword: "scarico bagno lento",
    internalLinks: [
      { label: "Rifacimento impianto idraulico del bagno", href: "/servizi/rifacimento-impianto-idraulico-bagno" },
      { label: "Ristrutturazione bagno in condominio", href: "/servizi/ristrutturazione-bagno-condominio" },
    ],
    body: P(`
<h2>Prima diagnosi: uno o più apparecchi</h2>
<p>È la distinzione che orienta tutto il resto.</p>
<ul>
<li><strong>Un solo apparecchio lento</strong> → ostruzione locale, nel sifone o nel tratto immediatamente a valle. Intervento circoscritto.</li>
<li><strong>Più apparecchi lenti</strong> → il problema è nel collettore comune dell'appartamento o nella colonna condominiale.</li>
<li><strong>Gorgoglio associato</strong> → ventilazione della colonna insufficiente.</li>
</ul>

<h2>Il rallentamento progressivo</h2>
<p>Se lo scarico è peggiorato nell'arco di anni senza un evento preciso, la causa è quasi sempre la riduzione della sezione utile: incrostazioni calcaree, residui di sapone, e nelle tubazioni in ferro zincato l'ossidazione interna.</p>
<p>In quest'ultimo caso la pulizia meccanica dà sollievo temporaneo, perché la parete interna del tubo è ormai irregolare e trattiene nuovi depositi in poche settimane. La soluzione stabile è la sostituzione del tratto.</p>

<h2>La pendenza insufficiente</h2>
<p>Un tratto orizzontale troppo piatto non genera velocità di deflusso: l'acqua avanza ma i solidi restano. Si manifesta come scarico lento costante, spesso accompagnato da cattivo odore.</p>
<p>È l'errore tipico di uno spostamento del wc eseguito senza verificare le quote disponibili. Non si corregge con prodotti: si corregge rifacendo il tratto con la pendenza corretta, a volte rialzando leggermente il piano.</p>

<h2>Cosa evitare</h2>
<p>I disgorganti chimici aggressivi usati ripetutamente danneggiano le guarnizioni e, sulle tubazioni più datate, accelerano il degrado. Su un impianto già compromesso trasformano uno scarico lento in una perdita.</p>
`),
    faqs: [
      { q: "Lo scarico lento può dipendere dalla colonna condominiale?", a: "Sì, quando più apparecchi rallentano insieme o quando il problema riguarda anche altri appartamenti. In quel caso l'intervento è sulla parte comune e va segnalato all'amministratore." },
      { q: "Conviene rifare l'impianto o continuare a disostruire?", a: "Se le disostruzioni si ripetono più di una volta l'anno sullo stesso punto, il costo cumulato supera rapidamente quello della sostituzione, e nel frattempo il rischio di perdita aumenta." },
    ],
    related: ["cattivi-odori-in-bagno", "infiltrazioni-dal-bagno"],
  },

  {
    slug: "poca-pressione-acqua-bagno",
    category: "problemi",
    title: "Poca pressione dell'acqua in bagno: come capire se è l'impianto",
    metaTitle: "Poca Pressione Acqua in Bagno: Cause Reali | Bagni Milano",
    metaDescription: "Perché esce poca acqua dalla doccia: aeratore intasato, riduttore starato, incrostazioni nelle tubazioni o pressione di rete. Come si isola la causa.",
    excerpt: "Se la pressione è calata negli anni e non da un giorno all'altro, il problema è dentro i muri.",
    answer: "La bassa pressione in bagno ha quattro cause: aeratore o soffione intasato dal calcare, riduttore di pressione starato, incrostazioni o ossidazione nelle tubazioni, pressione di rete insufficiente ai piani alti. Un calo progressivo negli anni indica quasi sempre le tubazioni.",
    datePublished: "2026-09-06",
    readingTime: "5 min",
    primaryKeyword: "poca pressione acqua bagno",
    internalLinks: [
      { label: "Rifacimento impianto idraulico del bagno", href: "/servizi/rifacimento-impianto-idraulico-bagno" },
      { label: "Ristrutturare il bagno a Milano", href: "/blog/ristrutturare-bagno-a-milano" },
    ],
    body: P(`
<h2>Isolare la causa in quattro passaggi</h2>
<ol>
<li><strong>Un solo rubinetto o tutti?</strong> Se è uno solo, è quasi certamente l'aeratore: si svita e si pulisce in cinque minuti.</li>
<li><strong>Solo calda o anche fredda?</strong> Se manca solo sulla calda, il problema è nella caldaia o nel boiler, non nell'impianto del bagno.</li>
<li><strong>Anche in cucina?</strong> Se sì, il problema è a monte: riduttore di pressione, contatore o rete.</li>
<li><strong>È peggiorato negli anni o all'improvviso?</strong> Progressivo significa incrostazioni. Improvviso significa un evento: un lavoro sulla rete, un filtro ostruito, un riduttore che ha ceduto.</li>
</ol>

<h2>Il caso milanese: le tubazioni in ferro zincato</h2>
<p>Negli edifici anteriori alla metà degli anni Settanta l'adduzione è spesso in ferro zincato. L'ossidazione interna riduce progressivamente la sezione utile: un tubo da mezzo pollice può arrivare a comportarsi come uno molto più piccolo.</p>
<p>Il segnale che conferma la diagnosi è l'acqua leggermente colorata dopo qualche giorno di assenza. Quando compare, la sostituzione non è più rinviabile: alla riduzione di portata segue, prima o poi, la perdita.</p>

<h2>Cosa non risolve</h2>
<p>Installare una pompa di rilancio su un impianto incrostato aumenta la pressione a monte di una sezione ridotta: dà un miglioramento percepibile e accelera il cedimento dei punti più deboli.</p>
<p>È un intervento che ha senso solo quando la pressione di rete è oggettivamente insufficiente e le tubazioni interne sono in buono stato.</p>
`),
    faqs: [
      { q: "Come capisco se i tubi sono in ferro zincato?", a: "Dall'età dell'edificio e da tre segnali: acqua colorata dopo giorni di non utilizzo, pressione calata progressivamente, perdite ripetute. Una verifica diretta si fa aprendo un punto ispezionabile, di norma durante il sopralluogo." },
      { q: "Rifare l'impianto del bagno risolve se il problema è la colonna condominiale?", a: "Solo in parte. Se la riduzione è sulla montante comune, il miglioramento è limitato: in quel caso l'intervento va valutato a livello condominiale." },
    ],
    related: ["scarico-bagno-lento", "ristrutturare-bagno-a-milano"],
  },

  {
    slug: "impermeabilizzazione-bagno",
    category: "materiali",
    title: "Impermeabilizzazione del bagno: la lavorazione che non si vede",
    metaTitle: "Impermeabilizzazione Bagno: Come si Fa e Perché | Bagni Milano",
    metaDescription: "Come si impermeabilizza un bagno: guaina liquida, nastri di rinforzo sugli angoli, altezze corrette nella zona doccia. Perché è la voce da non tagliare mai.",
    excerpt: "Costa poche centinaia di euro, non si vede, e decide se fra due anni ci sarà un contenzioso col vicino di sotto.",
    answer: "L'impermeabilizzazione del bagno si esegue con guaina liquida bicomponente stesa sul fondo della doccia e sulle pareti della zona bagnata fino ad almeno 200 cm, con nastro di rinforzo su tutti gli angoli e sui raccordi con la piletta. Va applicata prima della posa del rivestimento.",
    datePublished: "2026-09-06",
    readingTime: "6 min",
    primaryKeyword: "impermeabilizzazione bagno",
    internalLinks: [
      { label: "Rifacimento doccia", href: "/servizi/rifacimento-doccia" },
      { label: "Ristrutturazione bagno chiavi in mano", href: "/ristrutturazione-bagno" },
    ],
    body: P(`
<h2>Perché le piastrelle non bastano</h2>
<p>Gres e ceramica sono impermeabili. Le fughe no: sono porose e, con il tempo, l'acqua le attraversa. Sotto il rivestimento serve quindi una barriera continua che raccolga quell'umidità e la convogli verso lo scarico.</p>
<p>Senza barriera, l'acqua raggiunge il massetto, lo satura e prosegue verso il solaio. Il tempo perché il danno diventi visibile al piano di sotto va da qualche mese a qualche anno.</p>

<h2>Come si esegue</h2>
<ol>
<li><strong>Preparazione del fondo.</strong> Superficie pulita, planare e priva di parti friabili. Un primer regola l'assorbimento.</li>
<li><strong>Nastri di rinforzo.</strong> Su tutti gli angoli parete-parete e parete-pavimento, e attorno alla piletta e ai passaggi delle tubazioni. Gli angoli sono i punti dove la guaina si fessura per movimento.</li>
<li><strong>Prima mano di guaina.</strong> Bicomponente cementizia o liquida monocomponente, stesa a rullo o spatola.</li>
<li><strong>Seconda mano incrociata.</strong> Nella direzione opposta alla prima, per coprire le microporosità.</li>
<li><strong>Tempi di asciugatura.</strong> Non comprimibili. Posare prima significa intrappolare umidità sotto il rivestimento.</li>
</ol>

<h2>Fin dove deve arrivare</h2>
<table>
<thead><tr><th>Zona</th><th>Estensione</th></tr></thead>
<tbody>
<tr><td>Interno doccia — pavimento</td><td>Tutta la superficie, con risvolto sulle pareti</td></tr>
<tr><td>Interno doccia — pareti</td><td>Almeno 200 cm di altezza</td></tr>
<tr><td>Perimetro vasca</td><td>Pavimento e pareti fino al bordo, più risvolto</td></tr>
<tr><td>Resto del bagno</td><td>Pavimento e fascia bassa delle pareti, 20-30 cm</td></tr>
</tbody>
</table>

<h2>Come si verifica che sia stata fatta</h2>
<p>È la lavorazione più facile da saltare, perché finisce sotto il rivestimento e nessuno la vede. Il modo per verificarla è uno solo: <strong>chiedere una fotografia della guaina stesa</strong>, prima della posa.</p>
<p>Un'impresa che lavora correttamente la fotografa già, perché è anche la sua tutela in caso di contestazione. Un'impresa che non riesce a fornirla, quella lavorazione probabilmente non l'ha eseguita.</p>
`),
    faqs: [
      { q: "L'impermeabilizzazione è sempre compresa nel preventivo?", a: "Non sempre. È una delle voci che vengono omesse per abbassare il totale. Va cercata esplicitamente nel preventivo: se non c'è scritta, va chiesta." },
      { q: "Quanto costa impermeabilizzare un bagno?", a: "Incide per poche centinaia di euro su una ristrutturazione completa. È fra le voci meno costose del cantiere e quella con le conseguenze più care se manca." },
      { q: "Si può impermeabilizzare senza rimuovere il rivestimento?", a: "Esistono trattamenti superficiali per le fughe, ma non sostituiscono una barriera continua sotto il rivestimento. Se il problema è già un'infiltrazione in atto, l'intervento risolutivo richiede di aprire la zona doccia." },
    ],
    related: ["infiltrazioni-dal-bagno", "gres-o-ceramica-per-il-bagno"],
  },

  {
    slug: "sanitari-sospesi",
    category: "materiali",
    title: "Sanitari sospesi: cosa comportano davvero",
    metaTitle: "Sanitari Sospesi: Vantaggi, Costi e Requisiti | Bagni Milano",
    metaDescription: "Sanitari sospesi: quanto spazio fanno guadagnare, cosa richiede la cassetta a incasso, quali pareti li reggono e quando conviene restare a terra.",
    excerpt: "Liberano il pavimento e semplificano la pulizia. In cambio chiedono 15 cm di parete e un telaio.",
    answer: "I sanitari sospesi richiedono un telaio metallico fissato a pavimento e parete, con cassetta a incasso che occupa circa 15-20 cm di profondità. Liberano il pavimento, semplificano la pulizia e permettono di regolare l'altezza del wc. Non richiedono una parete portante: il carico lo regge il telaio.",
    datePublished: "2026-09-06",
    readingTime: "5 min",
    primaryKeyword: "sanitari sospesi",
    internalLinks: [
      { label: "Ristrutturazione bagno piccolo", href: "/servizi/bagno-piccolo" },
      { label: "Come progettare un bagno", href: "/blog/come-progettare-un-bagno" },
    ],
    body: P(`
<h2>Cosa cambia rispetto ai sanitari a terra</h2>
<table>
<thead><tr><th></th><th>Sospesi</th><th>A terra</th></tr></thead>
<tbody>
<tr><td>Pulizia del pavimento</td><td>Continua, nessun ostacolo</td><td>Bisogna aggirare la base</td></tr>
<tr><td>Percezione dello spazio</td><td>Maggiore: il pavimento si vede per intero</td><td>Minore</td></tr>
<tr><td>Profondità occupata</td><td>+15-20 cm di controparete</td><td>Nessuna</td></tr>
<tr><td>Altezza regolabile</td><td>Sì, in fase di installazione</td><td>No</td></tr>
<tr><td>Accesso alla cassetta</td><td>Da pannello di ispezione</td><td>Diretto</td></tr>
<tr><td>Costo</td><td>Superiore, per telaio e controparete</td><td>Inferiore</td></tr>
</tbody>
</table>

<h2>Il telaio: cosa serve davvero</h2>
<p>Il dubbio più comune riguarda la tenuta: un wc sospeso regge il peso di una persona adulta senza problemi, perché il carico non grava sulla parete ma su un telaio metallico ancorato al pavimento e controventato alla muratura.</p>
<p>Questo significa che i sanitari sospesi si possono installare anche su una parete in cartongesso, purché il telaio sia dimensionato e fissato correttamente. La parete diventa un rivestimento, non un elemento portante.</p>

<h2>Il conto della profondità</h2>
<p>La controparete che nasconde il telaio occupa 15-20 cm. In un bagno di 6 mq è un compromesso quasi sempre vantaggioso, perché quella profondità si recupera in profondità di manovra sul pavimento.</p>
<p>In un bagno stretto sotto i 160 cm di larghezza va invece verificata in pianta: 18 cm su 150 sono il 12% della larghezza utile.</p>

<h2>Il pannello di ispezione non è opzionale</h2>
<p>La cassetta a incasso deve restare accessibile. Il pannello coincide di norma con la placca di comando. Murare completamente la cassetta significa dover demolire per qualsiasi manutenzione futura.</p>
`),
    faqs: [
      { q: "Un wc sospeso regge il peso di una persona?", a: "Sì. Il carico è sostenuto dal telaio metallico ancorato a pavimento, non dalla parete. I telai di serie sono dimensionati con ampio margine rispetto al peso di un adulto." },
      { q: "Si possono installare in un bagno piccolo?", a: "Sì, e spesso conviene: la profondità persa nella controparete si recupera in spazio di manovra percepito e reale sul pavimento. Va verificato in pianta nei bagni sotto i 160 cm di larghezza." },
    ],
    related: ["come-progettare-un-bagno", "dimensioni-minime-bagno"],
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
export const articlesByCategory = (cat: string) => articles.filter((a) => a.category === cat);
