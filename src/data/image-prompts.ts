/**
 * Prompt di generazione per ogni slot immagine.
 *
 * Tenuti separati da images.ts per non appesantire il registro: qui sta il
 * "come si ottiene", là il "dove serve e in che formato".
 *
 * Alimentano docs/14-IMMAGINI-DA-PRODURRE.md via `npm run images`.
 *
 * Regola di stile comune a tutta la libreria, per far sì che le immagini
 * sembrino la stessa campagna e non venti scatti scollegati.
 */
export const STYLE_BASE =
  "fotografia di interni realistica, luce naturale morbida da finestra laterale, " +
  "prospettiva a un punto con verticali perfettamente diritte, obiettivo grandangolare 24mm, " +
  "nessuna persona, nessun testo o logo visibile, nessun riflesso del fotografo negli specchi, " +
  "ambiente italiano residenziale, colori fedeli, nessuna saturazione eccessiva";

/** Palette del brand, da citare negli scatti "dopo" per coerenza col sito. */
export const STYLE_DOPO =
  "finiture contemporanee: grande formato effetto marmo scuro o pietra chiara, " +
  "rubinetteria in ottone spazzolato, mobile sospeso in legno chiaro, specchio retroilluminato, " +
  "sanitari sospesi bianchi, doccia walk-in con vetro trasparente";

/** Stato di partenza tipico del patrimonio edilizio lombardo. */
export const STYLE_PRIMA =
  "bagno italiano non ristrutturato degli anni Settanta-Novanta: piastrelle beige o rosa con " +
  "fascia decorativa, sanitari a terra in ceramica bianca ingiallita, mobile in legno scuro, " +
  "radiatore tubolare bianco, pavimento in gres a motivi, ambiente pulito ma chiaramente datato";

export const prompts: Record<string, string> = {
  /* ── HERO ─────────────────────────────────────────────────────────── */
  "hero-home":
    `${STYLE_BASE}. Bagno padronale finito, ripreso in orizzontale dall'ingresso. ${STYLE_DOPO}. ` +
    "Illuminazione volutamente bassa e atmosferica, toni scuri dominanti. " +
    "IMPORTANTE: la fascia centrale dell'inquadratura deve restare visivamente calma e poco " +
    "dettagliata, perché ospiterà del testo bianco sovrapposto. Composizione simmetrica.",
  "hero-home-mobile":
    `${STYLE_BASE}. Stessa scena di hero-home ma inquadratura verticale ravvicinata sulla zona doccia. ${STYLE_DOPO}. ` +
    "Toni scuri, luce bassa, spazio calmo nella metà superiore per il testo sovrapposto.",
  "home-banda":
    `${STYLE_BASE}. Bagno finito ripreso molto largo, panoramica orizzontale. ${STYLE_DOPO}. ` +
    "Composizione pensata per essere tagliata in una fascia bassa e larga: soggetto distribuito " +
    "su tutta la larghezza, niente elementi importanti ai bordi superiore e inferiore.",

  /* ── COPPIE PRIMA / DOPO ──────────────────────────────────────────── */
  "ba-milano-centro-prima":
    `${STYLE_BASE}. ${STYLE_PRIMA}. Bagno stretto e lungo con vasca da 170 cm sul lato lungo, ` +
    "lavabo a colonna, wc e bidet a terra, finestra in fondo con serramento in legno. " +
    "Vista dalla porta verso la finestra.",
  "ba-milano-centro-dopo":
    `${STYLE_BASE}. ESATTAMENTE LA STESSA INQUADRATURA, STESSA STANZA, STESSA FINESTRA e stesso ` +
    "serramento in legno dell'immagine precedente, ma dopo la ristrutturazione: la vasca è " +
    `sostituita da una doccia walk-in a filo pavimento con vetro fisso. ${STYLE_DOPO}.`,

  "ba-porta-nuova-prima":
    `${STYLE_BASE}. ${STYLE_PRIMA}. Bagno compatto di circa 4 mq, vista dalla porta, ` +
    "lavabo a colonna a sinistra, wc e bidet in fondo, box doccia in alluminio e vetro stampato.",
  "ba-porta-nuova-dopo":
    `${STYLE_BASE}. ESATTAMENTE LA STESSA INQUADRATURA E STESSA STANZA dell'immagine precedente, ` +
    `dopo la ristrutturazione. ${STYLE_DOPO}. Sanitari sospesi, doccia in nicchia con vetro fisso.`,

  "ba-brera-prima":
    `${STYLE_BASE}. ${STYLE_PRIMA}. Bagno stretto in appartamento con soffitto alto, ` +
    "rivestimento fino a metà parete, mobile lavabo in legno scuro con specchiera datata.",
  "ba-brera-dopo":
    `${STYLE_BASE}. ESATTAMENTE LA STESSA INQUADRATURA E STESSA STANZA dell'immagine precedente, ` +
    `dopo la ristrutturazione. Rivestimento a tutta altezza in grande formato effetto marmo nero venato. ${STYLE_DOPO}.`,

  "ba-navigli-prima":
    `${STYLE_BASE}. ${STYLE_PRIMA}. Bagno anni Settanta con pavimento in gres a motivi marroni, ` +
    "mobile a doppio lavabo in legno scuro, vasca incassata sul lato destro, finestra con vista su tetti.",
  "ba-navigli-dopo":
    `${STYLE_BASE}. ESATTAMENTE LA STESSA INQUADRATURA, STESSA FINESTRA e stessa vista sui tetti ` +
    `dell'immagine precedente, dopo il rifacimento completo. ${STYLE_DOPO}.`,

  "ba-padronale-prima":
    `${STYLE_BASE}. ${STYLE_PRIMA}. Bagno padronale orizzontale con doppio lavabo su top in marmo ` +
    "chiaro datato, ante in laminato crema con bordo in legno, box doccia con vetro stampato, specchio con cornice in legno.",
  "ba-padronale-dopo":
    `${STYLE_BASE}. ESATTAMENTE LA STESSA INQUADRATURA E STESSA STANZA dell'immagine precedente, ` +
    `dopo la ristrutturazione, formato orizzontale. ${STYLE_DOPO}. Doppio lavabo su mobile sospeso.`,

  "ba-famiglia-prima":
    `${STYLE_BASE}. ${STYLE_PRIMA}. Bagno di famiglia orizzontale con vasca, lavabo su mobile a terra, ` +
    "portasciugamani a parete, luce a soffitto centrale.",
  "ba-famiglia-dopo":
    `${STYLE_BASE}. ESATTAMENTE LA STESSA INQUADRATURA E STESSA STANZA dell'immagine precedente, ` +
    `dopo la ristrutturazione, formato orizzontale. ${STYLE_DOPO}.`,

  "ba-ospiti-prima":
    `${STYLE_BASE}. ${STYLE_PRIMA}. Piccolo bagno di servizio senza finestra, circa 3 mq, ` +
    "lavabo a colonna, wc, piatto doccia in ceramica con tenda.",
  "ba-ospiti-dopo":
    `${STYLE_BASE}. ESATTAMENTE LA STESSA INQUADRATURA E STESSA STANZA dell'immagine precedente, ` +
    `dopo il rifacimento. ${STYLE_DOPO}. Illuminazione artificiale calda, bagno cieco ben illuminato.`,

  "ba-walkin-prima":
    `${STYLE_BASE}. ${STYLE_PRIMA}. Bagno verticale con vasca da 170 cm ingombrante e bordo alto ` +
    "da scavalcare, miscelatore cromato datato, piastrelle chiare con fascia decorativa.",
  "ba-walkin-dopo":
    `${STYLE_BASE}. ESATTAMENTE LA STESSA INQUADRATURA E STESSA STANZA dell'immagine precedente. ` +
    "La vasca è stata sostituita da una doccia walk-in a filo pavimento, senza gradino, " +
    `con piletta lineare e seduta a parete. ${STYLE_DOPO}.`,

  /* ── CANTIERE ─────────────────────────────────────────────────────── */
  "cantiere-demolizione":
    `${STYLE_BASE}. Cantiere reale di ristrutturazione bagno durante la demolizione: teli di ` +
    "protezione sul pavimento del corridoio, sacchi big bag per le macerie allineati, vecchie " +
    "piastrelle rimosse impilate ordinatamente, attrezzi appoggiati in ordine, aspiratore per " +
    "polveri. L'ambiente deve trasmettere ORDINE e organizzazione, non disordine.",
  "cantiere-impianti":
    `${STYLE_BASE}. Dettaglio tecnico di un bagno in ristrutturazione: pareti con tracce aperte ` +
    "e nuove tubazioni multistrato rosse e blu in vista, collettore idraulico, scatole elettriche " +
    "incassate con cavi, prima della chiusura delle tracce. Illuminazione da lampada da cantiere. " +
    "Il dettaglio tecnico deve essere leggibile e credibile.",
  "cantiere-impermeabilizzazione":
    `${STYLE_BASE}. Dettaglio ravvicinato della zona doccia di un bagno in costruzione, con guaina ` +
    "liquida impermeabilizzante di colore azzurro o grigio stesa uniformemente sul fondo e sulle " +
    "pareti, nastro di rinforzo bianco visibile su tutti gli angoli e attorno alla piletta di " +
    "scarico. Rullo e secchio del prodotto appoggiati a terra. Prima della posa delle piastrelle.",

  /* ── FIDUCIA ──────────────────────────────────────────────────────── */
  referente:
    "Ritratto fotografico professionale in formato verticale di un uomo italiano sui 40 anni, " +
    "responsabile di cantiere, camicia scura o polo tecnica, sguardo diretto in camera, " +
    "espressione seria e affidabile, in piedi in un bagno appena ristrutturato leggermente " +
    "sfocato sullo sfondo. Luce naturale morbida. Nessun logo visibile. Fotografia realistica, " +
    "non ritratto in studio.",
  materiali:
    "Composizione fotografica dall'alto (flat lay) su fondo neutro chiaro: campioni di gres " +
    "porcellanato effetto marmo scuro e pietra chiara, campioncini di fuga in diverse tonalità, " +
    "un miscelatore in ottone spazzolato, una piastrella di grande formato appoggiata di taglio, " +
    "un metro a nastro. Luce naturale diffusa, ombre morbide. Nessun marchio leggibile. Formato quadrato.",
  showroom:
    `${STYLE_BASE}. Area di consulenza di un'impresa di ristrutturazioni: tavolo in legno con ` +
    "campionari di piastrelle esposti a parete su espositori verticali, planimetria stampata sul " +
    "tavolo, sedie. Ambiente ordinato e professionale, toni caldi. Nessun logo o testo leggibile.",
  "og-social":
    `${STYLE_BASE}. Bagno finito, inquadratura orizzontale molto larga (proporzione 1200×630). ${STYLE_DOPO}. ` +
    "La metà sinistra deve essere volutamente semplice e poco dettagliata perché ospiterà del testo. " +
    "Toni scuri e caldi.",

  /* ── UNA IMMAGINE PER PAGINA ──────────────────────────────────────── */
  "geo-milano":
    `${STYLE_BASE}. Facciata di un condominio milanese anni Cinquanta-Settanta vista dal cortile interno, ringhiere in ferro, finestre allineate, atmosfera urbana. Nessuna persona, nessuna targa o insegna leggibile. Formato orizzontale.`,
  "geo-monza":
    `${STYLE_BASE}. Villetta bifamiliare brianzola degli anni Ottanta vista dal giardino, mattoni a vista e intonaco chiaro, siepe curata. Nessuna persona, nessuna targa o insegna leggibile. Formato orizzontale.`,
  "geo-lodi":
    `${STYLE_BASE}. Cascina lodigiana recuperata a uso residenziale, corte interna in mattoni, portico con travi in legno. Nessuna persona, nessuna targa o insegna leggibile. Formato orizzontale.`,
  "geo-bergamo":
    `${STYLE_BASE}. Scorcio di Bergamo Città Alta, edifici in pietra e portoni antichi lungo una via stretta in salita. Nessuna persona, nessuna targa o insegna leggibile. Formato orizzontale.`,
  "geo-varese":
    `${STYLE_BASE}. Villa varesina di inizio Novecento immersa nel verde, facciata chiara con persiane, vialetto di ghiaia. Nessuna persona, nessuna targa o insegna leggibile. Formato orizzontale.`,
  "geo-como":
    `${STYLE_BASE}. Abitazione affacciata sul lago di Como costruita in pendio, terrazzo con ringhiera, acqua e montagne sullo sfondo. Nessuna persona, nessuna targa o insegna leggibile. Formato orizzontale.`,
  "geo-lombardia":
    `${STYLE_BASE}. Paesaggio urbano lombardo con edifici residenziali di epoche diverse affiancati, cielo velato di pianura. Nessuna persona, nessuna targa o insegna leggibile. Formato orizzontale.`,
  "srv-bagno-chiavi-in-mano":
    `${STYLE_BASE}. Bagno completamente finito e pronto all'uso, vista d'insieme dall'ingresso. ${STYLE_DOPO}. Formato orizzontale.`,
  "srv-trasformazione-vasca-in-doccia":
    `${STYLE_BASE}. Doccia walk-in a filo pavimento installata dove prima c'era una vasca, vetro fisso trasparente. ${STYLE_DOPO}. Formato orizzontale.`,
  "srv-bagno-piccolo":
    `${STYLE_BASE}. Bagno di 4 mq ottimizzato, sanitari sospesi, doccia rettangolare stretta e porta scorrevole. ${STYLE_DOPO}. Formato orizzontale.`,
  "srv-ristrutturazione-bagno-condominio":
    `${STYLE_BASE}. Bagno di appartamento in condominio appena rifatto, con porta d'ingresso e corridoio protetto da teli sullo sfondo. ${STYLE_DOPO}. Formato orizzontale.`,
  "srv-bagno-senza-demolizione":
    `${STYLE_BASE}. Posa di nuovo rivestimento sopra piastrelle esistenti, dettaglio del bordo fra vecchio e nuovo. ${STYLE_DOPO}. Formato orizzontale.`,
  "srv-ristrutturazione-bagno-disabili":
    `${STYLE_BASE}. Bagno accessibile con doccia a filo pavimento, seduta ribaltabile a parete e maniglioni di appoggio, estetica contemporanea non ospedaliera. ${STYLE_DOPO}. Formato orizzontale.`,
  "srv-rifacimento-impianto-idraulico-bagno":
    `${STYLE_BASE}. Parete di bagno con tracce aperte e nuove tubazioni multistrato rosse e blu collegate a un collettore. ${STYLE_DOPO}. Formato orizzontale.`,
  "srv-rifacimento-doccia":
    `${STYLE_BASE}. Piatto doccia a filo pavimento appena posato con piletta lineare e rivestimento in grande formato. ${STYLE_DOPO}. Formato orizzontale.`,
  "pag-costi":
    `${STYLE_BASE}. Tavolo con preventivo dettagliato, campioni di gres di tre fasce diverse allineati e calcolatrice, ripresa dall'alto a 45 gradi. Formato orizzontale.`,
  "pag-tempi":
    `${STYLE_BASE}. Calendario da cantiere appeso a parete accanto a un bagno in lavorazione, con le giornate segnate a pennarello, nessun testo leggibile. Formato orizzontale.`,
  "pag-preventivo":
    `${STYLE_BASE}. Tecnico che prende le misure di un bagno con metro laser, inquadratura sulle mani e sullo strumento, volto non visibile. Formato orizzontale.`,
  "pag-faq":
    `${STYLE_BASE}. Dettaglio ordinato di un bagno finito, angolo lavabo con specchio retroilluminato. Formato orizzontale.`,
  "pag-chi-siamo":
    `${STYLE_BASE}. Squadra di cantiere di tre persone vista di spalle mentre lavora in un bagno in ristrutturazione, volti non riconoscibili. Formato orizzontale.`,

  /* ── EDITORIALI ───────────────────────────────────────────────────── */
  "art-costi":
    `${STYLE_BASE}. Scrivania con un preventivo di ristrutturazione stampato (testo NON leggibile, ` +
    "solo righe e tabelle sfocate), una calcolatrice, un metro a nastro arrotolato, due campioni di " +
    "gres appoggiati. Ripresa dall'alto a 45 gradi, luce naturale laterale. Formato orizzontale.",
  "art-progettazione":
    `${STYLE_BASE}. Pianta quotata di un bagno stampata su carta bianca, con matita, scalimetro e ` +
    "gomma appoggiati sopra. Il disegno deve sembrare un elaborato tecnico reale con quote e simboli " +
    "dei sanitari, ma senza testo leggibile. Ripresa dall'alto, luce naturale. Formato orizzontale.",
  "art-problemi":
    `${STYLE_BASE}. Dettaglio ravvicinato e realistico di un angolo alto di bagno con muffa nera ` +
    "puntinata sulla fuga e sull'intonaco, e di una siliconatura perimetrale ingiallita e distaccata. " +
    "Illuminazione naturale cruda. Deve essere riconoscibile e non drammatizzato. Formato orizzontale.",
  "art-normative":
    `${STYLE_BASE}. Documenti tecnici su una scrivania: modulo amministrativo, planimetria piegata, ` +
    "penna, timbro. Nessun testo leggibile, nessun dato personale, nessuno stemma istituzionale. " +
    "Ripresa dall'alto, luce naturale. Formato orizzontale.",
  "art-lombardia":
    "Fotografia realistica del cortile interno di un condominio milanese degli anni Sessanta: " +
    "facciata intonacata chiara, ringhiere in ferro sui ballatoi, finestre allineate, qualche pianta. " +
    "Luce di giornata nuvolosa, atmosfera urbana italiana. Nessuna persona, nessun testo leggibile. " +
    "Formato orizzontale.",
  "art-idee":
    `${STYLE_BASE}. Dettaglio ravvicinato di una finitura di bagno ben eseguita: nicchia doccia ` +
    "illuminata con striscia LED, incontro pulito fra grande formato effetto marmo scuro e mensola " +
    `in pietra. ${STYLE_DOPO}. Formato orizzontale.`,
  "art-vasca-doccia":
    `${STYLE_BASE}. Zona vasca appena demolita in un bagno in ristrutturazione: muretto rimosso, ` +
    "scarico in PVC in vista sul massetto, vecchie piastrelle asportate sulla parete, ambiente pulito " +
    "e ordinato. Prima del rifacimento. Formato orizzontale.",
  "art-sanitari":
    `${STYLE_BASE}. Telaio metallico per sanitari sospesi montato e fissato a pavimento e parete, ` +
    "con cassetta di risciacquo integrata e tubazioni collegate, prima della chiusura con la " +
    "controparete in cartongesso. Dettaglio tecnico leggibile. Formato orizzontale.",
};
