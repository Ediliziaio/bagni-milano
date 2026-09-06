/**
 * REGISTRO IMMAGINI — unica fonte di verità.
 *
 * Ogni slot visivo del sito è dichiarato qui. Finché `available` è false il sito
 * mostra un segnaposto che indica formato, proporzione e cosa inquadrare, invece
 * di un box vuoto o di una foto stock che non è di Bagni Milano.
 *
 * Il brief per il fotografo è GENERATO da questo file:
 *   npm run images   →  docs/14-IMMAGINI-DA-PRODURRE.md
 *
 * Per attivare un'immagine:
 *   1. salvare il file in public/img/<id>.avif (+ <id>.jpg di fallback)
 *   2. mettere `available: true` qui
 *   3. npm run build
 */

export interface ImageSpec {
  id: string;
  /** Dove compare nel sito. */
  where: string;
  /** Cosa deve mostrare. Scritto per chi scatta, non per chi sviluppa. */
  brief: string;
  /** Dimensioni minime del file sorgente. */
  width: number;
  height: number;
  /** Testo alternativo: descrittivo e specifico, mai "bagno moderno". */
  alt: string;
  priority: 1 | 2 | 3;
  available: boolean;
  /** Coppie prima/dopo: stesso `group`, stessa inquadratura obbligatoria. */
  group?: string;
  phase?: "prima" | "dopo";
}

export const images: ImageSpec[] = [
  /* ── 1. HERO ─────────────────────────────────────────────────────── */
  {
    id: "hero-home",
    where: "Homepage — hero a tutta pagina",
    brief:
      "Bagno finito, ripreso in orizzontale, con illuminazione bassa e materiali scuri (marmo nero, gres effetto pietra, ottone). Deve reggere una sovrapposizione scura e testo bianco al centro: lasciare la zona centrale poco dettagliata. Niente persone, niente riflessi del fotografo negli specchi.",
    width: 2400, height: 1350,
    alt: "Bagno padronale ristrutturato da Bagni Milano, rivestimento in marmo scuro e rubinetteria in ottone",
    priority: 1, available: false,
  },
  {
    id: "hero-home-mobile",
    where: "Homepage — hero su smartphone",
    brief:
      "Stessa scena di hero-home ma inquadratura verticale. Serve perché il taglio orizzontale su mobile perde tutto il contesto.",
    width: 1200, height: 1600,
    alt: "Bagno padronale ristrutturato da Bagni Milano, dettaglio verticale della zona doccia",
    priority: 1, available: false,
  },

  /* ── 2. PRIMA / DOPO ─────────────────────────────────────────────── */
  {
    id: "ba-milano-centro-prima", group: "milano-centro", phase: "prima",
    where: "Homepage e progetti — comparatore prima/dopo",
    brief:
      "Bagno padronale prima dei lavori, in centro a Milano. Rivestimento datato, sanitari originali. INQUADRATURA DA TREPPIEDE: annotare altezza e posizione, servono identiche per lo scatto 'dopo'.",
    width: 1600, height: 1200,
    alt: "Bagno padronale in centro a Milano prima della ristrutturazione, rivestimento anni Ottanta",
    priority: 1, available: false,
  },
  {
    id: "ba-milano-centro-dopo", group: "milano-centro", phase: "dopo",
    where: "Homepage e progetti — comparatore prima/dopo",
    brief: "Stessa identica inquadratura di ba-milano-centro-prima, a lavori conclusi e ambiente pulito.",
    width: 1600, height: 1200,
    alt: "Lo stesso bagno padronale in centro a Milano dopo la ristrutturazione",
    priority: 1, available: false,
  },
  {
    id: "ba-porta-nuova-prima", group: "porta-nuova", phase: "prima",
    where: "Homepage e progetti — comparatore prima/dopo",
    brief: "Bagno compatto di circa 4 mq a Porta Nuova prima dei lavori, con vasca ingombrante. Treppiede, posizione annotata.",
    width: 1600, height: 1200,
    alt: "Bagno di 4 mq a Porta Nuova prima della ristrutturazione, con vasca",
    priority: 1, available: false,
  },
  {
    id: "ba-porta-nuova-dopo", group: "porta-nuova", phase: "dopo",
    where: "Homepage e progetti — comparatore prima/dopo",
    brief: "Stessa inquadratura, dopo: doccia walk-in e mobile sospeso al posto della vasca.",
    width: 1600, height: 1200,
    alt: "Lo stesso bagno a Porta Nuova dopo la ristrutturazione, con doccia walk-in e mobile sospeso",
    priority: 1, available: false,
  },
  {
    id: "ba-brera-prima", group: "brera", phase: "prima",
    where: "Progetti — comparatore prima/dopo",
    brief: "Bagno stretto a Brera prima dei lavori. Treppiede, posizione annotata.",
    width: 1600, height: 1200,
    alt: "Bagno stretto a Brera prima della ristrutturazione",
    priority: 2, available: false,
  },
  {
    id: "ba-brera-dopo", group: "brera", phase: "dopo",
    where: "Progetti — comparatore prima/dopo",
    brief: "Stessa inquadratura, a lavori conclusi.",
    width: 1600, height: 1200,
    alt: "Lo stesso bagno a Brera dopo la ristrutturazione",
    priority: 2, available: false,
  },
  {
    id: "ba-navigli-prima", group: "navigli", phase: "prima",
    where: "Progetti — comparatore prima/dopo",
    brief: "Bagno anni Settanta ai Navigli prima dei lavori. Treppiede, posizione annotata.",
    width: 1600, height: 1200,
    alt: "Bagno anni Settanta ai Navigli prima della ristrutturazione",
    priority: 2, available: false,
  },
  {
    id: "ba-navigli-dopo", group: "navigli", phase: "dopo",
    where: "Progetti — comparatore prima/dopo",
    brief: "Stessa inquadratura, a lavori conclusi.",
    width: 1600, height: 1200,
    alt: "Lo stesso bagno ai Navigli dopo la ristrutturazione",
    priority: 2, available: false,
  },

  /* ── 3. PORTFOLIO ────────────────────────────────────────────────── */
  {
    id: "progetto-porta-nuova",
    where: "Homepage e pagina progetti — griglia portfolio",
    brief: "Vista d'insieme del bagno finito a Porta Nuova. Luce naturale se possibile, ambiente sgombro.",
    width: 1600, height: 1200,
    alt: "Bagno ristrutturato a Porta Nuova, Milano: doccia walk-in e mobile sospeso",
    priority: 1, available: false,
  },
  {
    id: "progetto-brera",
    where: "Homepage e pagina progetti — griglia portfolio",
    brief: "Vista d'insieme del bagno finito a Brera.",
    width: 1600, height: 1200,
    alt: "Bagno ristrutturato a Brera, Milano: rivestimento scuro e specchio retroilluminato",
    priority: 2, available: false,
  },
  {
    id: "progetto-navigli",
    where: "Homepage e pagina progetti — griglia portfolio",
    brief: "Vista d'insieme del bagno finito ai Navigli.",
    width: 1600, height: 1200,
    alt: "Bagno ristrutturato ai Navigli, Milano: finitura minimalista",
    priority: 2, available: false,
  },
  {
    id: "progetto-milano-centro",
    where: "Homepage e pagina progetti — griglia portfolio",
    brief: "Vista d'insieme del bagno padronale finito in centro.",
    width: 1600, height: 1200,
    alt: "Bagno padronale ristrutturato in centro a Milano",
    priority: 2, available: false,
  },

  /* ── 4. CANTIERE — è ciò che dimostra il metodo ──────────────────── */
  {
    id: "cantiere-demolizione",
    where: "Pagina Metodo — fase 8",
    brief:
      "Cantiere in corso durante la demolizione: protezioni sui pavimenti, teli, sacchi per le macerie. Deve mostrare ORDINE, non caos: è la prova visiva del metodo.",
    width: 1600, height: 1067,
    alt: "Cantiere Bagni Milano durante la demolizione, con protezioni sui percorsi",
    priority: 2, available: false,
  },
  {
    id: "cantiere-impianti",
    where: "Pagina Metodo — fase 9",
    brief: "Tracce a muro con le nuove linee idrauliche ed elettriche in vista, prima della chiusura. Dettaglio tecnico leggibile.",
    width: 1600, height: 1067,
    alt: "Nuovo impianto idraulico ed elettrico in traccia durante una ristrutturazione bagno",
    priority: 2, available: false,
  },
  {
    id: "cantiere-impermeabilizzazione",
    where: "Pagina Metodo — fase 10 e articolo sulle infiltrazioni",
    brief:
      "Guaina liquida stesa sul piatto doccia e sulle pareti, con nastro di rinforzo sugli angoli. È la lavorazione che nessuno vede: mostrarla è un argomento di vendita.",
    width: 1600, height: 1067,
    alt: "Impermeabilizzazione con guaina liquida della zona doccia prima della posa",
    priority: 2, available: false,
  },
  {
    id: "cantiere-posa",
    where: "Pagina Metodo — fase 10",
    brief: "Posa del rivestimento in corso, con livella o crociere in vista.",
    width: 1600, height: 1067,
    alt: "Posa del rivestimento in gres durante una ristrutturazione bagno",
    priority: 3, available: false,
  },

  /* ── 5. FIDUCIA ──────────────────────────────────────────────────── */
  {
    id: "referente",
    where: "Chi siamo — E-E-A-T",
    brief:
      "Ritratto del referente unico, in cantiere o in showroom, luce naturale, sguardo in camera. Una persona reale con nome e cognome vale più di dieci frasi sull'affidabilità.",
    width: 1200, height: 1500,
    alt: "Il referente unico di Bagni Milano in cantiere",
    priority: 1, available: false,
  },
  {
    id: "materiali",
    where: "Pagina Metodo — fase 6, e articoli sui materiali",
    brief:
      "Composizione dall'alto dei campioni: lastre di gres, campioni di fuga, finiture di rubinetteria, moodboard. Sfondo neutro.",
    width: 1600, height: 1600,
    alt: "Campioni di gres, fughe e finiture di rubinetteria selezionati per un progetto",
    priority: 3, available: false,
  },
  {
    id: "og-social",
    where: "Anteprima social di tutte le pagine (Open Graph)",
    brief:
      "Una delle foto 'dopo' migliori, ritagliata 1200×630 con spazio a sinistra per il testo. Sostituisce l'anteprima tipografica generata automaticamente.",
    width: 1200, height: 630,
    alt: "Bagni Milano — ristrutturazione bagno chiavi in mano",
    priority: 2, available: false,
  },

  /* ── 6. EDITORIALI — testate degli articoli ──────────────────────── */
  {
    id: "art-costi",
    where: "Articoli del cluster Costi — immagine di testata",
    brief:
      "Preventivo cartaceo su un tavolo con metro, calcolatrice e un campione di gres. Luce naturale laterale, ripresa dall'alto a 45°. Nessun logo di terzi leggibile e nessun importo reale visibile.",
    width: 1600, height: 900,
    alt: "Preventivo di ristrutturazione bagno con campioni di materiale e metro",
    priority: 2, available: false,
  },
  {
    id: "art-progettazione",
    where: "Articoli del cluster Progettazione — immagine di testata",
    brief:
      "Pianta quotata di un bagno stampata, con matita e scalimetro appoggiati. Deve leggersi che è un disegno tecnico reale, non una grafica.",
    width: 1600, height: 900,
    alt: "Pianta quotata di un bagno con la disposizione dei sanitari",
    priority: 2, available: false,
  },
  {
    id: "art-problemi",
    where: "Articoli del cluster Problemi — immagine di testata",
    brief:
      "Dettaglio ravvicinato di un angolo di bagno con muffa o di una siliconatura degradata. Deve essere un caso reale, riconoscibile: è la foto che fa dire al lettore «è il mio bagno».",
    width: 1600, height: 900,
    alt: "Muffa nell'angolo alto di un bagno e siliconatura degradata",
    priority: 2, available: false,
  },
  {
    id: "art-normative",
    where: "Articoli del cluster Normative — immagine di testata",
    brief:
      "Documenti di cantiere su una scrivania: modulo di comunicazione, planimetria, penna. Oscurare o omettere dati personali e riferimenti reali.",
    width: 1600, height: 900,
    alt: "Documenti per la comunicazione dei lavori all'amministratore di condominio",
    priority: 3, available: false,
  },
  {
    id: "art-lombardia",
    where: "Articoli del cluster Lombardia — immagine di testata",
    brief:
      "Facciata di un condominio milanese anni Cinquanta-Settanta, ripresa dal cortile interno. È il patrimonio edilizio di cui parlano questi articoli.",
    width: 1600, height: 900,
    alt: "Cortile interno di un condominio milanese degli anni Sessanta",
    priority: 2, available: false,
  },
  {
    id: "art-idee",
    where: "Articoli del cluster Idee e design — immagine di testata",
    brief: "Dettaglio di finitura ben riuscito: incontro fra rivestimento e specchio, o nicchia doccia illuminata.",
    width: 1600, height: 900,
    alt: "Dettaglio di finitura di un bagno ristrutturato: nicchia doccia illuminata",
    priority: 3, available: false,
  },
  {
    id: "art-vasca-doccia",
    where: "Articoli sulla trasformazione vasca in doccia",
    brief:
      "Zona vasca demolita, con lo scarico in vista prima del rifacimento. Mostra il vero contenuto tecnico dell'intervento.",
    width: 1600, height: 900,
    alt: "Zona vasca demolita con lo scarico in vista prima della trasformazione in doccia",
    priority: 2, available: false,
  },
  {
    id: "art-sanitari",
    where: "Articoli su sanitari e installazione",
    brief: "Telaio metallico per sanitari sospesi montato, prima della chiusura della controparete.",
    width: 1600, height: 900,
    alt: "Telaio metallico per sanitari sospesi installato prima della controparete",
    priority: 3, available: false,
  },
  {
    id: "home-banda",
    where: "Homepage — fascia immagine a tutta larghezza",
    brief:
      "Scatto orizzontale molto ampio di un bagno finito, adatto a essere tagliato a fascia bassa (proporzione 3:1). Materiali scuri e ottone.",
    width: 2400, height: 800,
    alt: "Bagno ristrutturato da Bagni Milano, vista d'insieme",
    priority: 2, available: false,
  },
  {
    id: "showroom",
    where: "Homepage e contatti",
    brief: "Showroom o area di consulenza dove si scelgono i materiali, con i campioni esposti.",
    width: 1600, height: 1067,
    alt: "Area di consulenza di Bagni Milano con i campioni dei materiali",
    priority: 3, available: false,
  },
];

/** Testata di default per categoria del blog. */
export const categoryImage: Record<string, string> = {
  costi: "art-costi",
  progettazione: "art-progettazione",
  materiali: "materiali",
  problemi: "art-problemi",
  normative: "art-normative",
  lombardia: "art-lombardia",
  "idee-e-design": "art-idee",
};

/** Override per singolo articolo, dove esiste una foto più pertinente. */
export const articleImage: Record<string, string> = {
  "impermeabilizzazione-bagno": "cantiere-impermeabilizzazione",
  "quanto-costa-trasformare-vasca-in-doccia": "art-vasca-doccia",
  "sanitari-sospesi": "art-sanitari",
  "infiltrazioni-dal-bagno": "cantiere-impermeabilizzazione",
  "costo-manodopera-ristrutturazione-bagno": "cantiere-impianti",
  "poca-pressione-acqua-bagno": "cantiere-impianti",
  "scarico-bagno-lento": "cantiere-impianti",
  "errori-da-evitare-ristrutturazione-bagno": "cantiere-demolizione",
};

export const imageForArticle = (slug: string, category: string) =>
  articleImage[slug] ?? categoryImage[category] ?? "art-progettazione";

export const getImage = (id: string) => images.find((i) => i.id === id);
export const beforeAfterGroups = [...new Set(images.filter((i) => i.group).map((i) => i.group!))];
export const getPair = (group: string) => ({
  prima: images.find((i) => i.group === group && i.phase === "prima"),
  dopo: images.find((i) => i.group === group && i.phase === "dopo"),
});
