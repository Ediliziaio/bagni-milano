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
  { id: "hero-home", where: "Homepage — sfondo dell'hero, desktop", brief: "Bagno finito in orizzontale, con zona centrale poco dettagliata perché ospita il testo. Sostituire con uno scatto di un cantiere concluso.", width: 1600, height: 1600, alt: "Bagno ristrutturato, vista d'insieme", priority: 1, available: true, source: "riferimento" },
  { id: "hero-home-mobile", where: "Homepage — sfondo dell'hero, smartphone", brief: "Stessa scena in inquadratura verticale.", width: 1200, height: 1600, alt: "Bagno ristrutturato, inquadratura verticale", priority: 1, available: true, source: "riferimento" },
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
  { id: "cantiere-demolizione", where: "Metodo e processo — fase 8", brief: "Cantiere durante la demolizione: protezioni sui pavimenti, teli, sacchi per le macerie. Deve mostrare ORDINE, non caos.", width: 1600, height: 1067, alt: "Cantiere Bagni Milano durante la demolizione, con protezioni sui percorsi", priority: 1, available: true, source: "riferimento" },
  { id: "cantiere-impianti", where: "Metodo e processo — fase 9", brief: "Tracce a muro con le nuove linee idrauliche ed elettriche in vista, prima della chiusura.", width: 1600, height: 1067, alt: "Nuovo impianto idraulico ed elettrico in traccia durante una ristrutturazione bagno", priority: 1, available: true, source: "riferimento" },
  { id: "cantiere-impermeabilizzazione", where: "Metodo, processo e articolo sulle infiltrazioni", brief: "Guaina liquida stesa sul piatto doccia e sulle pareti, con nastro di rinforzo sugli angoli. È la lavorazione che nessuno vede: mostrarla è un argomento di vendita.", width: 1600, height: 1067, alt: "Impermeabilizzazione con guaina liquida della zona doccia prima della posa", priority: 1, available: true, source: "riferimento" },

  /* ── FIDUCIA — da produrre ──────────────────────────────────────── */
  { id: "referente", where: "Chi siamo — E-E-A-T", brief: "Ritratto del referente unico, in cantiere o in showroom, luce naturale, sguardo in camera.", width: 1200, height: 1500, alt: "Il referente unico di Bagni Milano in cantiere", priority: 1, available: true, source: "riferimento" },
  { id: "materiali", where: "Home e metodo — selezione materiali", brief: "Composizione dall'alto dei campioni: lastre di gres, campioni di fuga, finiture di rubinetteria.", width: 1600, height: 1600, alt: "Campioni di gres, fughe e finiture di rubinetteria selezionati per un progetto", priority: 2, available: true, source: "riferimento" },
  { id: "team", where: "Chi siamo — fascia squadra", brief: "Foto di gruppo della squadra in showroom o in un bagno finito, divise coordinate.", width: 1600, height: 1066, alt: "La squadra di Bagni Milano", priority: 1, available: true, source: "riferimento" },
  { id: "showroom", where: "Home e contatti", brief: "Showroom o area di consulenza con i campioni esposti.", width: 1600, height: 1067, alt: "Area di consulenza di Bagni Milano con i campioni dei materiali", priority: 3, available: false },

  /* ── EDITORIALI ─────────────────────────────────────────────────── */
  { id: "art-costi", where: "Articoli del cluster Costi", brief: "Ambiente bagno finito, uso editoriale.", width: 1400, height: 875, alt: "Bagno ristrutturato, immagine di riferimento per gli articoli sui costi", priority: 2, available: true, source: "riferimento" },
  { id: "art-progettazione", where: "Articoli del cluster Progettazione", brief: "Bagno di piccole dimensioni ben organizzato.", width: 1400, height: 784, alt: "Bagno piccolo con disposizione ottimizzata dei sanitari", priority: 2, available: true, source: "riferimento" },
  { id: "art-idee", where: "Articoli dei cluster Idee e Materiali", brief: "Dettaglio di finitura contemporanea.", width: 1400, height: 934, alt: "Dettaglio di finitura di un bagno contemporaneo", priority: 3, available: true, source: "riferimento" },
  { id: "art-lombardia", where: "Articoli del cluster Lombardia", brief: "Ambiente bagno in contesto residenziale.", width: 1001, height: 1200, alt: "Bagno in un appartamento residenziale lombardo", priority: 2, available: true, source: "riferimento" },
  /* ── UNA IMMAGINE PER PAGINA ─────────────────────────────────────── */
  { id: "geo-milano", where: "Landing Milano — apertura", brief: "Contesto edilizio riconoscibile di Milano.", width: 1600, height: 900, alt: "Edilizia residenziale tipica di Milano, area servita da Bagni Milano", priority: 2, available: true, source: "riferimento" },
  { id: "geo-monza", where: "Landing Monza — apertura", brief: "Contesto edilizio riconoscibile di Monza.", width: 1600, height: 900, alt: "Edilizia residenziale tipica di Monza, area servita da Bagni Milano", priority: 2, available: true, source: "riferimento" },
  { id: "geo-lodi", where: "Landing Lodi — apertura", brief: "Contesto edilizio riconoscibile di Lodi.", width: 1600, height: 900, alt: "Edilizia residenziale tipica di Lodi, area servita da Bagni Milano", priority: 2, available: true, source: "riferimento" },
  { id: "geo-bergamo", where: "Landing Bergamo — apertura", brief: "Contesto edilizio riconoscibile di Bergamo.", width: 1600, height: 900, alt: "Edilizia residenziale tipica di Bergamo, area servita da Bagni Milano", priority: 2, available: true, source: "riferimento" },
  { id: "geo-varese", where: "Landing Varese — apertura", brief: "Contesto edilizio riconoscibile di Varese.", width: 1600, height: 900, alt: "Edilizia residenziale tipica di Varese, area servita da Bagni Milano", priority: 2, available: true, source: "riferimento" },
  { id: "geo-como", where: "Landing Como — apertura", brief: "Contesto edilizio riconoscibile di Como.", width: 1600, height: 900, alt: "Edilizia residenziale tipica di Como, area servita da Bagni Milano", priority: 2, available: true, source: "riferimento" },
  { id: "geo-lombardia", where: "Landing Lombardia — apertura", brief: "Contesto edilizio riconoscibile di Lombardia.", width: 1600, height: 900, alt: "Edilizia residenziale tipica di Lombardia, area servita da Bagni Milano", priority: 2, available: true, source: "riferimento" },
  { id: "srv-bagno-chiavi-in-mano", where: "Pagina servizio /servizi/bagno-chiavi-in-mano", brief: "Immagine di apertura del servizio.", width: 1600, height: 900, alt: "Intervento di Bagni Milano: bagno chiavi in mano", priority: 2, available: true, source: "riferimento" },
  { id: "srv-trasformazione-vasca-in-doccia", where: "Pagina servizio /servizi/trasformazione-vasca-in-doccia", brief: "Immagine di apertura del servizio.", width: 1600, height: 900, alt: "Intervento di Bagni Milano: trasformazione vasca in doccia", priority: 2, available: true, source: "riferimento" },
  { id: "srv-bagno-piccolo", where: "Pagina servizio /servizi/bagno-piccolo", brief: "Immagine di apertura del servizio.", width: 1600, height: 900, alt: "Intervento di Bagni Milano: bagno piccolo", priority: 2, available: true, source: "riferimento" },
  { id: "srv-ristrutturazione-bagno-condominio", where: "Pagina servizio /servizi/ristrutturazione-bagno-condominio", brief: "Immagine di apertura del servizio.", width: 1600, height: 900, alt: "Intervento di Bagni Milano: ristrutturazione bagno condominio", priority: 2, available: true, source: "riferimento" },
  { id: "srv-bagno-senza-demolizione", where: "Pagina servizio /servizi/bagno-senza-demolizione", brief: "Immagine di apertura del servizio.", width: 1600, height: 900, alt: "Intervento di Bagni Milano: bagno senza demolizione", priority: 2, available: true, source: "riferimento" },
  { id: "srv-ristrutturazione-bagno-disabili", where: "Pagina servizio /servizi/ristrutturazione-bagno-disabili", brief: "Immagine di apertura del servizio.", width: 1600, height: 900, alt: "Intervento di Bagni Milano: ristrutturazione bagno disabili", priority: 2, available: true, source: "riferimento" },
  { id: "srv-rifacimento-impianto-idraulico-bagno", where: "Pagina servizio /servizi/rifacimento-impianto-idraulico-bagno", brief: "Immagine di apertura del servizio.", width: 1600, height: 900, alt: "Intervento di Bagni Milano: rifacimento impianto idraulico bagno", priority: 2, available: true, source: "riferimento" },
  { id: "srv-rifacimento-doccia", where: "Pagina servizio /servizi/rifacimento-doccia", brief: "Immagine di apertura del servizio.", width: 1600, height: 900, alt: "Intervento di Bagni Milano: rifacimento doccia", priority: 2, available: true, source: "riferimento" },
  { id: "pag-costi", where: "Money page /costi", brief: "Immagine di apertura della pagina.", width: 1600, height: 900, alt: "Bagni Milano — costi", priority: 2, available: true, source: "riferimento" },
  { id: "pag-tempi", where: "Money page /tempi", brief: "Immagine di apertura della pagina.", width: 1600, height: 900, alt: "Bagni Milano — tempi", priority: 2, available: true, source: "riferimento" },
  { id: "pag-preventivo", where: "Money page /preventivo", brief: "Immagine di apertura della pagina.", width: 1600, height: 900, alt: "Bagni Milano — preventivo", priority: 2, available: true, source: "riferimento" },
  { id: "pag-faq", where: "Money page /faq", brief: "Immagine di apertura della pagina.", width: 1600, height: 900, alt: "Bagni Milano — faq", priority: 2, available: true, source: "riferimento" },
  { id: "pag-chi-siamo", where: "Money page /chi-siamo", brief: "Immagine di apertura della pagina.", width: 1600, height: 900, alt: "Bagni Milano — chi siamo", priority: 2, available: true, source: "riferimento" },

  /* ── TESTATE DEGLI ARTICOLI E SEZIONI ────────────────────────────── */
  { id: "art-quanto-costa-rifare-un-bagno", where: "Articolo /blog/quanto-costa-rifare-un-bagno", brief: "Testata dell'articolo.", width: 1600, height: 900, alt: "Preventivo di ristrutturazione bagno con campioni di gres e calcolatrice", priority: 2, available: false },
  { id: "art-costo-piastrelle-bagno", where: "Articolo /blog/costo-piastrelle-bagno", brief: "Testata dell'articolo.", width: 1600, height: 900, alt: "Campioni di gres porcellanato di formati diversi per il rivestimento del bagno", priority: 2, available: false },
  { id: "art-quanto-costa-trasformare-vasca-in-doccia", where: "Articolo /blog/quanto-costa-trasformare-vasca-in-doccia", brief: "Testata dell'articolo.", width: 1600, height: 900, alt: "Vasca rimossa in cantiere con lo scarico in vista prima della trasformazione in doccia", priority: 2, available: false },
  { id: "art-costo-bagno-6-mq", where: "Articolo /blog/costo-bagno-6-mq", brief: "Testata dell'articolo.", width: 1600, height: 900, alt: "Bagno di 6 mq ristrutturato, vista d'insieme dall'ingresso", priority: 2, available: false },
  { id: "art-costo-manodopera-ristrutturazione-bagno", where: "Articolo /blog/costo-manodopera-ristrutturazione-bagno", brief: "Testata dell'articolo.", width: 1600, height: 900, alt: "Posatore al lavoro sul rivestimento di un bagno in ristrutturazione", priority: 2, available: false },
  { id: "art-leggere-preventivo-ristrutturazione-bagno", where: "Articolo /blog/leggere-preventivo-ristrutturazione-bagno", brief: "Testata dell'articolo.", width: 1600, height: 900, alt: "Preventivo dettagliato di ristrutturazione bagno aperto su una scrivania", priority: 2, available: false },
  { id: "art-come-progettare-un-bagno", where: "Articolo /blog/come-progettare-un-bagno", brief: "Testata dell'articolo.", width: 1600, height: 900, alt: "Pianta quotata di un bagno con la disposizione dei sanitari", priority: 2, available: false },
  { id: "art-dimensioni-minime-bagno", where: "Articolo /blog/dimensioni-minime-bagno", brief: "Testata dell'articolo.", width: 1600, height: 900, alt: "Rilievo delle misure di un bagno piccolo con metro laser", priority: 2, available: false },
  { id: "art-errori-da-evitare-ristrutturazione-bagno", where: "Articolo /blog/errori-da-evitare-ristrutturazione-bagno", brief: "Testata dell'articolo.", width: 1600, height: 900, alt: "Difetti di posa in un bagno: fughe irregolari e siliconatura mal eseguita", priority: 2, available: false },
  { id: "art-gres-o-ceramica-per-il-bagno", where: "Articolo /blog/gres-o-ceramica-per-il-bagno", brief: "Testata dell'articolo.", width: 1600, height: 900, alt: "Confronto fra un campione di gres porcellanato e uno di ceramica smaltata", priority: 2, available: false },
  { id: "art-impermeabilizzazione-bagno", where: "Articolo /blog/impermeabilizzazione-bagno", brief: "Testata dell'articolo.", width: 1600, height: 900, alt: "Impermeabilizzazione con guaina liquida della zona doccia prima della posa", priority: 2, available: false },
  { id: "art-sanitari-sospesi", where: "Articolo /blog/sanitari-sospesi", brief: "Testata dell'articolo.", width: 1600, height: 900, alt: "Telaio per sanitari sospesi installato prima della controparete", priority: 2, available: false },
  { id: "art-muffa-in-bagno-cause-e-soluzioni", where: "Articolo /blog/muffa-in-bagno-cause-e-soluzioni", brief: "Testata dell'articolo.", width: 1600, height: 900, alt: "Muffa nera nell'angolo alto di un bagno, sulla fuga e sull'intonaco", priority: 2, available: false },
  { id: "art-infiltrazioni-dal-bagno", where: "Articolo /blog/infiltrazioni-dal-bagno", brief: "Testata dell'articolo.", width: 1600, height: 900, alt: "Macchia di infiltrazione sul soffitto dell'appartamento sottostante un bagno", priority: 2, available: false },
  { id: "art-cattivi-odori-in-bagno", where: "Articolo /blog/cattivi-odori-in-bagno", brief: "Testata dell'articolo.", width: 1600, height: 900, alt: "Sifone del lavabo smontato per la pulizia sotto il mobile del bagno", priority: 2, available: false },
  { id: "art-scarico-bagno-lento", where: "Articolo /blog/scarico-bagno-lento", brief: "Testata dell'articolo.", width: 1600, height: 900, alt: "Acqua che ristagna sul piatto doccia per scarico lento", priority: 2, available: false },
  { id: "art-poca-pressione-acqua-bagno", where: "Articolo /blog/poca-pressione-acqua-bagno", brief: "Testata dell'articolo.", width: 1600, height: 900, alt: "Soffione doccia con getto debole per ugelli otturati dal calcare", priority: 2, available: false },
  { id: "art-serve-la-cila-per-rifare-il-bagno", where: "Articolo /blog/serve-la-cila-per-rifare-il-bagno", brief: "Testata dell'articolo.", width: 1600, height: 900, alt: "Planimetria e modulistica per la comunicazione dei lavori", priority: 2, available: false },
  { id: "art-detrazioni-ristrutturazione-bagno", where: "Articolo /blog/detrazioni-ristrutturazione-bagno", brief: "Testata dell'articolo.", width: 1600, height: 900, alt: "Documenti fiscali e ricevute per la detrazione dei lavori di ristrutturazione", priority: 2, available: false },
  { id: "art-ristrutturare-bagno-a-milano", where: "Articolo /blog/ristrutturare-bagno-a-milano", brief: "Testata dell'articolo.", width: 1600, height: 900, alt: "Cortile interno di un condominio milanese degli anni Sessanta", priority: 2, available: false },
  { id: "pag-ristrutturazione-bagno", where: "Pillar /ristrutturazione-bagno — apertura", brief: "Immagine di sezione.", width: 1600, height: 900, alt: "Bagno ristrutturato chiavi in mano da Bagni Milano, vista d'insieme", priority: 1, available: false },
  { id: "pag-metodo", where: "Pagina /metodo — apertura", brief: "Immagine di sezione.", width: 1600, height: 900, alt: "Tavolo di progetto con planimetria, campioni e cronoprogramma", priority: 1, available: false },
  { id: "pag-servizi", where: "Pagina /servizi — apertura", brief: "Immagine di sezione.", width: 1600, height: 900, alt: "I servizi di ristrutturazione bagno di Bagni Milano", priority: 1, available: false },
  { id: "lav-massetto", where: "Pillar — fascia lavorazioni", brief: "Immagine di sezione.", width: 1600, height: 1067, alt: "Massetto autolivellante steso sul pavimento di un bagno in ristrutturazione", priority: 1, available: false },
  { id: "lav-posa", where: "Pillar — fascia lavorazioni", brief: "Immagine di sezione.", width: 1600, height: 1067, alt: "Posa del pavimento in gres di grande formato in un bagno", priority: 1, available: false },
  { id: "fase-progetto", where: "Metodo — macro-fase Progetto", brief: "Immagine di sezione.", width: 1600, height: 1067, alt: "Sopralluogo tecnico in un bagno da ristrutturare", priority: 1, available: false },
  { id: "fase-materiali", where: "Metodo — macro-fase Preventivo e materiali", brief: "Immagine di sezione.", width: 1600, height: 1067, alt: "Campioni di materiali selezionati per un progetto di ristrutturazione bagno", priority: 1, available: false },
  { id: "fase-consegna", where: "Metodo — macro-fase Consegna", brief: "Immagine di sezione.", width: 1600, height: 1067, alt: "Bagno finito il giorno della consegna, con la documentazione sul mobile", priority: 1, available: false },

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
/** Ogni articolo ha la propria testata dedicata: immagini uniche per URL unico.
 *  Riusare la stessa immagine su piu' articoli spreca un segnale gratuito. */
export const articleImage: Record<string, string> = {
  "quanto-costa-rifare-un-bagno": "art-quanto-costa-rifare-un-bagno",
  "costo-piastrelle-bagno": "art-costo-piastrelle-bagno",
  "quanto-costa-trasformare-vasca-in-doccia": "art-quanto-costa-trasformare-vasca-in-doccia",
  "costo-bagno-6-mq": "art-costo-bagno-6-mq",
  "costo-manodopera-ristrutturazione-bagno": "art-costo-manodopera-ristrutturazione-bagno",
  "leggere-preventivo-ristrutturazione-bagno": "art-leggere-preventivo-ristrutturazione-bagno",
  "come-progettare-un-bagno": "art-come-progettare-un-bagno",
  "dimensioni-minime-bagno": "art-dimensioni-minime-bagno",
  "errori-da-evitare-ristrutturazione-bagno": "art-errori-da-evitare-ristrutturazione-bagno",
  "gres-o-ceramica-per-il-bagno": "art-gres-o-ceramica-per-il-bagno",
  "impermeabilizzazione-bagno": "art-impermeabilizzazione-bagno",
  "sanitari-sospesi": "art-sanitari-sospesi",
  "muffa-in-bagno-cause-e-soluzioni": "art-muffa-in-bagno-cause-e-soluzioni",
  "infiltrazioni-dal-bagno": "art-infiltrazioni-dal-bagno",
  "cattivi-odori-in-bagno": "art-cattivi-odori-in-bagno",
  "scarico-bagno-lento": "art-scarico-bagno-lento",
  "poca-pressione-acqua-bagno": "art-poca-pressione-acqua-bagno",
  "serve-la-cila-per-rifare-il-bagno": "art-serve-la-cila-per-rifare-il-bagno",
  "detrazioni-ristrutturazione-bagno": "art-detrazioni-ristrutturazione-bagno",
  "ristrutturare-bagno-a-milano": "art-ristrutturare-bagno-a-milano",
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
