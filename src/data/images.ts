/**
 * REGISTRO IMMAGINI — unica fonte di verità.
 *
 * Ogni slot visivo del sito è dichiarato qui. Finché `available` è false il sito
 * mostra un segnaposto che indica formato e soggetto, invece di un box vuoto.
 *
 * Il brief per il fotografo è GENERATO da questo file:
 *   npm run images   →  docs/14-IMMAGINI-DA-PRODURRE.md
 *
 * ⚠️  PROVENIENZA. Le immagini attualmente attive sono materiale di riferimento
 * fornito dall'azienda: coppie prima/dopo generate con AI e fotografie generiche
 * di ambienti bagno. NON sono fotografie di cantieri realizzati da Bagni Milano,
 * e per i file generici va verificata la licenza d'uso.
 * Vanno sostituite con scatti reali appena disponibili: il campo `source` traccia
 * quali immagini sono ancora da rimpiazzare.
 */

export type ImageSource = "propria" | "riferimento";

export interface ImageSpec {
  id: string;
  where: string;
  brief: string;
  width: number;
  height: number;
  alt: string;
  priority: 1 | 2 | 3;
  available: boolean;
  /** `riferimento` = da sostituire con materiale fotografico proprio. */
  source?: ImageSource;
  group?: string;
  phase?: "prima" | "dopo";
}

export const images: ImageSpec[] = [
  /* ── IDENTITÀ ────────────────────────────────────────────────────── */
  { id: "logo-light", where: "Header e footer su fondo scuro", brief: "Logo ufficiale, lettering bianco e oro.", width: 1933, height: 526, alt: "Bagni Milano — ristrutturazioni chiavi in mano", priority: 1, available: true, source: "propria" },
  { id: "logo-dark", where: "Superfici chiare e materiali stampati", brief: "Logo ufficiale, lettering nero e oro.", width: 1933, height: 520, alt: "Bagni Milano — ristrutturazioni chiavi in mano", priority: 1, available: true, source: "propria" },
  { id: "partner-gruppo-bea", where: "Home e Chi siamo — fascia partner", brief: "Logo Gruppo BEA.", width: 600, height: 200, alt: "Gruppo BEA, partner di Bagni Milano", priority: 1, available: true, source: "propria" },

  /* ── HERO ────────────────────────────────────────────────────────── */
  { id: "hero-home", where: "Homepage — sfondo dell'hero, desktop", brief: "Bagno finito in orizzontale, con zona centrale poco dettagliata perché ospita il testo. Sostituire con uno scatto di un cantiere concluso.", width: 2000, height: 1562, alt: "Bagno ristrutturato, vista d'insieme", priority: 1, available: true, source: "riferimento" },
  { id: "hero-home-mobile", where: "Homepage — sfondo dell'hero, smartphone", brief: "Stessa scena in inquadratura verticale.", width: 969, height: 1200, alt: "Bagno ristrutturato, inquadratura verticale", priority: 1, available: true, source: "riferimento" },
  { id: "home-banda", where: "Homepage — fascia immagine a tutta larghezza", brief: "Scatto orizzontale ampio, adatto al taglio a fascia.", width: 1600, height: 1000, alt: "Bagno ristrutturato da Bagni Milano", priority: 2, available: true, source: "riferimento" },

  /* ── COPPIE PRIMA / DOPO ─────────────────────────────────────────── */
  { id: "ba-milano-centro-prima", group: "milano-centro", phase: "prima", where: "Comparatore prima/dopo", brief: "Bagno stretto con vasca e rivestimento datato.", width: 1120, height: 1400, alt: "Bagno stretto con vasca e rivestimento datato, prima dell'intervento", priority: 1, available: true, source: "riferimento" },
  { id: "ba-milano-centro-dopo", group: "milano-centro", phase: "dopo", where: "Comparatore prima/dopo", brief: "Stessa inquadratura con doccia walk-in e mobile sospeso.", width: 1120, height: 1400, alt: "Lo stesso bagno con doccia walk-in e mobile sospeso, dopo l'intervento", priority: 1, available: true, source: "riferimento" },

  { id: "ba-porta-nuova-prima", group: "porta-nuova", phase: "prima", where: "Comparatore prima/dopo", brief: "Bagno compatto con sanitari e finiture originali.", width: 1120, height: 1400, alt: "Bagno compatto con sanitari originali, prima dell'intervento", priority: 1, available: true, source: "riferimento" },
  { id: "ba-porta-nuova-dopo", group: "porta-nuova", phase: "dopo", where: "Comparatore prima/dopo", brief: "Stessa inquadratura, ambiente rinnovato.", width: 1120, height: 1400, alt: "Lo stesso bagno compatto dopo il rifacimento completo", priority: 1, available: true, source: "riferimento" },

  { id: "ba-brera-prima", group: "brera", phase: "prima", where: "Comparatore prima/dopo", brief: "Bagno stretto e alto con rivestimento originale.", width: 1120, height: 1400, alt: "Bagno stretto con rivestimento originale, prima dell'intervento", priority: 2, available: true, source: "riferimento" },
  { id: "ba-brera-dopo", group: "brera", phase: "dopo", where: "Comparatore prima/dopo", brief: "Stessa inquadratura, finiture contemporanee.", width: 1120, height: 1400, alt: "Lo stesso bagno con finiture contemporanee, dopo l'intervento", priority: 2, available: true, source: "riferimento" },

  { id: "ba-navigli-prima", group: "navigli", phase: "prima", where: "Comparatore prima/dopo", brief: "Bagno anni Settanta con pavimento a motivi e mobile in legno scuro.", width: 1120, height: 1400, alt: "Bagno anni Settanta con pavimento a motivi, prima dell'intervento", priority: 2, available: true, source: "riferimento" },
  { id: "ba-navigli-dopo", group: "navigli", phase: "dopo", where: "Comparatore prima/dopo", brief: "Stessa inquadratura, rifacimento completo.", width: 1120, height: 1400, alt: "Lo stesso bagno dopo il rifacimento completo", priority: 2, available: true, source: "riferimento" },

  { id: "ba-padronale-prima", group: "padronale", phase: "prima", where: "Comparatore prima/dopo", brief: "Bagno padronale con doppio lavabo e rivestimento beige datato.", width: 1400, height: 933, alt: "Bagno padronale con doppio lavabo e rivestimento datato, prima dell'intervento", priority: 2, available: true, source: "riferimento" },
  { id: "ba-padronale-dopo", group: "padronale", phase: "dopo", where: "Comparatore prima/dopo", brief: "Stessa inquadratura, bagno padronale rinnovato.", width: 1400, height: 933, alt: "Lo stesso bagno padronale dopo la ristrutturazione", priority: 2, available: true, source: "riferimento" },

  { id: "ba-famiglia-prima", group: "famiglia", phase: "prima", where: "Comparatore prima/dopo", brief: "Bagno di famiglia con vasca e finiture originali.", width: 1400, height: 954, alt: "Bagno di famiglia con vasca e finiture originali, prima dell'intervento", priority: 2, available: true, source: "riferimento" },
  { id: "ba-famiglia-dopo", group: "famiglia", phase: "dopo", where: "Comparatore prima/dopo", brief: "Stessa inquadratura, ambiente rinnovato.", width: 1400, height: 954, alt: "Lo stesso bagno di famiglia dopo la ristrutturazione", priority: 2, available: true, source: "riferimento" },

  { id: "ba-ospiti-prima", group: "ospiti", phase: "prima", where: "Comparatore prima/dopo", brief: "Bagno di servizio con rivestimento e sanitari datati.", width: 1400, height: 1056, alt: "Bagno di servizio con sanitari datati, prima dell'intervento", priority: 3, available: true, source: "riferimento" },
  { id: "ba-ospiti-dopo", group: "ospiti", phase: "dopo", where: "Comparatore prima/dopo", brief: "Stessa inquadratura, bagno di servizio rinnovato.", width: 1400, height: 1055, alt: "Lo stesso bagno di servizio dopo il rifacimento", priority: 3, available: true, source: "riferimento" },

  { id: "ba-walkin-prima", group: "walkin", phase: "prima", where: "Comparatore prima/dopo", brief: "Bagno con vasca da sostituire con doccia.", width: 1050, height: 1400, alt: "Bagno con vasca prima della trasformazione in doccia", priority: 2, available: true, source: "riferimento" },
  { id: "ba-walkin-dopo", group: "walkin", phase: "dopo", where: "Comparatore prima/dopo", brief: "Stessa inquadratura con doccia walk-in a filo pavimento.", width: 1050, height: 1400, alt: "Lo stesso bagno con doccia walk-in a filo pavimento", priority: 2, available: true, source: "riferimento" },

  /* ── CANTIERE — da produrre: è la prova visiva del metodo ────────── */
  { id: "cantiere-demolizione", where: "Metodo e processo — fase 8", brief: "Cantiere durante la demolizione: protezioni sui pavimenti, teli, sacchi per le macerie. Deve mostrare ORDINE, non caos.", width: 1600, height: 1067, alt: "Cantiere Bagni Milano durante la demolizione, con protezioni sui percorsi", priority: 1, available: false },
  { id: "cantiere-impianti", where: "Metodo e processo — fase 9", brief: "Tracce a muro con le nuove linee idrauliche ed elettriche in vista, prima della chiusura.", width: 1600, height: 1067, alt: "Nuovo impianto idraulico ed elettrico in traccia durante una ristrutturazione bagno", priority: 1, available: false },
  { id: "cantiere-impermeabilizzazione", where: "Metodo, processo e articolo sulle infiltrazioni", brief: "Guaina liquida stesa sul piatto doccia e sulle pareti, con nastro di rinforzo sugli angoli. È la lavorazione che nessuno vede: mostrarla è un argomento di vendita.", width: 1600, height: 1067, alt: "Impermeabilizzazione con guaina liquida della zona doccia prima della posa", priority: 1, available: false },

  /* ── FIDUCIA — da produrre ──────────────────────────────────────── */
  { id: "referente", where: "Chi siamo — E-E-A-T", brief: "Ritratto del referente unico, in cantiere o in showroom, luce naturale, sguardo in camera.", width: 1200, height: 1500, alt: "Il referente unico di Bagni Milano in cantiere", priority: 1, available: false },
  { id: "materiali", where: "Home e metodo — selezione materiali", brief: "Composizione dall'alto dei campioni: lastre di gres, campioni di fuga, finiture di rubinetteria.", width: 1600, height: 1600, alt: "Campioni di gres, fughe e finiture di rubinetteria selezionati per un progetto", priority: 2, available: false },
  { id: "showroom", where: "Home e contatti", brief: "Showroom o area di consulenza con i campioni esposti.", width: 1600, height: 1067, alt: "Area di consulenza di Bagni Milano con i campioni dei materiali", priority: 3, available: false },

  /* ── EDITORIALI ─────────────────────────────────────────────────── */
  { id: "art-costi", where: "Articoli del cluster Costi", brief: "Ambiente bagno finito, uso editoriale.", width: 1400, height: 875, alt: "Bagno ristrutturato, immagine di riferimento per gli articoli sui costi", priority: 2, available: true, source: "riferimento" },
  { id: "art-progettazione", where: "Articoli del cluster Progettazione", brief: "Bagno di piccole dimensioni ben organizzato.", width: 1400, height: 784, alt: "Bagno piccolo con disposizione ottimizzata dei sanitari", priority: 2, available: true, source: "riferimento" },
  { id: "art-idee", where: "Articoli dei cluster Idee e Materiali", brief: "Dettaglio di finitura contemporanea.", width: 1400, height: 934, alt: "Dettaglio di finitura di un bagno contemporaneo", priority: 3, available: true, source: "riferimento" },
  { id: "art-lombardia", where: "Articoli del cluster Lombardia", brief: "Ambiente bagno in contesto residenziale.", width: 1001, height: 1200, alt: "Bagno in un appartamento residenziale lombardo", priority: 2, available: true, source: "riferimento" },
  /* ── UNA IMMAGINE PER PAGINA ─────────────────────────────────────── */
  { id: "geo-milano", where: "Landing Milano — apertura", brief: "Contesto edilizio riconoscibile di Milano.", width: 1600, height: 900, alt: "Edilizia residenziale tipica di Milano, area servita da Bagni Milano", priority: 2, available: false },
  { id: "geo-monza", where: "Landing Monza — apertura", brief: "Contesto edilizio riconoscibile di Monza.", width: 1600, height: 900, alt: "Edilizia residenziale tipica di Monza, area servita da Bagni Milano", priority: 2, available: false },
  { id: "geo-lodi", where: "Landing Lodi — apertura", brief: "Contesto edilizio riconoscibile di Lodi.", width: 1600, height: 900, alt: "Edilizia residenziale tipica di Lodi, area servita da Bagni Milano", priority: 2, available: false },
  { id: "geo-bergamo", where: "Landing Bergamo — apertura", brief: "Contesto edilizio riconoscibile di Bergamo.", width: 1600, height: 900, alt: "Edilizia residenziale tipica di Bergamo, area servita da Bagni Milano", priority: 2, available: false },
  { id: "geo-varese", where: "Landing Varese — apertura", brief: "Contesto edilizio riconoscibile di Varese.", width: 1600, height: 900, alt: "Edilizia residenziale tipica di Varese, area servita da Bagni Milano", priority: 2, available: false },
  { id: "geo-como", where: "Landing Como — apertura", brief: "Contesto edilizio riconoscibile di Como.", width: 1600, height: 900, alt: "Edilizia residenziale tipica di Como, area servita da Bagni Milano", priority: 2, available: false },
  { id: "geo-lombardia", where: "Landing Lombardia — apertura", brief: "Contesto edilizio riconoscibile di Lombardia.", width: 1600, height: 900, alt: "Edilizia residenziale tipica di Lombardia, area servita da Bagni Milano", priority: 2, available: false },
  { id: "srv-bagno-chiavi-in-mano", where: "Pagina servizio /servizi/bagno-chiavi-in-mano", brief: "Immagine di apertura del servizio.", width: 1600, height: 900, alt: "Intervento di Bagni Milano: bagno chiavi in mano", priority: 2, available: true, source: "riferimento" },
  { id: "srv-trasformazione-vasca-in-doccia", where: "Pagina servizio /servizi/trasformazione-vasca-in-doccia", brief: "Immagine di apertura del servizio.", width: 1600, height: 1000, alt: "Intervento di Bagni Milano: trasformazione vasca in doccia", priority: 2, available: true, source: "riferimento" },
  { id: "srv-bagno-piccolo", where: "Pagina servizio /servizi/bagno-piccolo", brief: "Immagine di apertura del servizio.", width: 1179, height: 1600, alt: "Intervento di Bagni Milano: bagno piccolo", priority: 2, available: true, source: "riferimento" },
  { id: "srv-ristrutturazione-bagno-condominio", where: "Pagina servizio /servizi/ristrutturazione-bagno-condominio", brief: "Immagine di apertura del servizio.", width: 1600, height: 1065, alt: "Intervento di Bagni Milano: ristrutturazione bagno condominio", priority: 2, available: true, source: "riferimento" },
  { id: "srv-bagno-senza-demolizione", where: "Pagina servizio /servizi/bagno-senza-demolizione", brief: "Immagine di apertura del servizio.", width: 1600, height: 992, alt: "Intervento di Bagni Milano: bagno senza demolizione", priority: 2, available: true, source: "riferimento" },
  { id: "srv-ristrutturazione-bagno-disabili", where: "Pagina servizio /servizi/ristrutturazione-bagno-disabili", brief: "Immagine di apertura del servizio.", width: 1600, height: 1239, alt: "Intervento di Bagni Milano: ristrutturazione bagno disabili", priority: 2, available: true, source: "riferimento" },
  { id: "srv-rifacimento-impianto-idraulico-bagno", where: "Pagina servizio /servizi/rifacimento-impianto-idraulico-bagno", brief: "Immagine di apertura del servizio.", width: 1600, height: 927, alt: "Intervento di Bagni Milano: rifacimento impianto idraulico bagno", priority: 2, available: true, source: "riferimento" },
  { id: "srv-rifacimento-doccia", where: "Pagina servizio /servizi/rifacimento-doccia", brief: "Immagine di apertura del servizio.", width: 1600, height: 1130, alt: "Intervento di Bagni Milano: rifacimento doccia", priority: 2, available: true, source: "riferimento" },
  { id: "pag-costi", where: "Money page /costi", brief: "Immagine di apertura della pagina.", width: 1600, height: 1092, alt: "Bagni Milano — costi", priority: 2, available: true, source: "riferimento" },
  { id: "pag-tempi", where: "Money page /tempi", brief: "Immagine di apertura della pagina.", width: 1201, height: 1600, alt: "Bagni Milano — tempi", priority: 2, available: true, source: "riferimento" },
  { id: "pag-preventivo", where: "Money page /preventivo", brief: "Immagine di apertura della pagina.", width: 1400, height: 787, alt: "Bagni Milano — preventivo", priority: 2, available: true, source: "riferimento" },
  { id: "pag-faq", where: "Money page /faq", brief: "Immagine di apertura della pagina.", width: 1066, height: 1600, alt: "Bagni Milano — faq", priority: 2, available: true, source: "riferimento" },
  { id: "pag-chi-siamo", where: "Money page /chi-siamo", brief: "Immagine di apertura della pagina.", width: 1600, height: 1198, alt: "Bagni Milano — chi siamo", priority: 2, available: true, source: "riferimento" },

  { id: "og-social", where: "Anteprima social (Open Graph)", brief: "Una delle foto migliori, ritagliata 1200×630 con spazio per il testo.", width: 1200, height: 630, alt: "Bagni Milano — ristrutturazione bagno chiavi in mano", priority: 2, available: false },
];

export const getImage = (id: string) => images.find((i) => i.id === id);

/** Testata di default per categoria del blog. */
export const categoryImage: Record<string, string> = {
  costi: "art-costi",
  progettazione: "art-progettazione",
  materiali: "art-idee",
  problemi: "ba-padronale-prima",
  normative: "art-costi",
  lombardia: "art-lombardia",
  "idee-e-design": "art-idee",
};

/** Override per singolo articolo, dove esiste un'immagine più pertinente. */
export const articleImage: Record<string, string> = {
  "impermeabilizzazione-bagno": "ba-walkin-dopo",
  "quanto-costa-trasformare-vasca-in-doccia": "ba-walkin-dopo",
  "sanitari-sospesi": "art-progettazione",
  "infiltrazioni-dal-bagno": "ba-ospiti-prima",
  "muffa-in-bagno-cause-e-soluzioni": "ba-navigli-prima",
  "cattivi-odori-in-bagno": "ba-famiglia-prima",
  "scarico-bagno-lento": "ba-ospiti-prima",
  "poca-pressione-acqua-bagno": "ba-padronale-prima",
  "errori-da-evitare-ristrutturazione-bagno": "ba-brera-prima",
  "dimensioni-minime-bagno": "art-progettazione",
  "gres-o-ceramica-per-il-bagno": "art-idee",
  "costo-bagno-6-mq": "ba-porta-nuova-dopo",
  "ristrutturare-bagno-a-milano": "art-lombardia",
};

/** Immagine di apertura per pagina geografica; i comuni ereditano dalla provincia. */
export const geoImage = (slug: string, province?: string) => {
  const own = images.find((i) => i.id === `geo-${slug}`);
  if (own) return own.id;
  const byProvince: Record<string, string> = {
    MI: "geo-milano", MB: "geo-monza", LO: "geo-lodi",
    BG: "geo-bergamo", VA: "geo-varese", CO: "geo-como",
  };
  return byProvince[province ?? ""] ?? "geo-lombardia";
};

export const imageForArticle = (slug: string, category: string) =>
  articleImage[slug] ?? categoryImage[category] ?? "art-progettazione";

/** Coppie prima/dopo, nell'ordine in cui compaiono nel sito. */
export const beforeAfterGroups = [
  "milano-centro", "porta-nuova", "brera", "navigli",
  "padronale", "famiglia", "ospiti", "walkin",
] as const;

export const getPair = (group: string) => ({
  prima: images.find((i) => i.group === group && i.phase === "prima"),
  dopo: images.find((i) => i.group === group && i.phase === "dopo"),
});

/** Proporzione della coppia, letta dal file reale: evita ritagli distruttivi. */
export const pairAspect = (group: string) => {
  const { prima } = getPair(group);
  if (!prima) return "4 / 3";
  return prima.height > prima.width ? "4 / 5" : "4 / 3";
};
