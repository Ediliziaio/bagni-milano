/**
 * Case study. Fonte: prototipo Lovable dell'azienda (progetti dichiarati dal cliente).
 *
 * ⚠️  I campi marcati TODO_AZIENDA non erano presenti nella fonte e NON sono stati
 * inventati. Una scheda progetto va pubblicata solo quando ha: località, metratura,
 * situazione iniziale, lavorazioni, durata e almeno una foto reale prima/dopo.
 * Le schede con `published: false` sono escluse da sitemap e indicizzazione.
 */

export interface Project {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  locality: string;
  citySlug: string;
  /** Pubblicabile solo con dati reali completi. */
  published: boolean;
  typology: string;
  sqm: string;
  before: string;
  request: string;
  works: string[];
  materials: string[];
  duration: string;
  result: string;
  imageBefore?: string;
  imageAfter?: string;
}

export const projects: Project[] = [
  {
    slug: "ristrutturazione-bagno-milano-porta-nuova",
    title: "Bagno compatto rinnovato a Porta Nuova, Milano",
    metaTitle: "Ristrutturazione Bagno a Porta Nuova, Milano | Case Study",
    metaDescription: "Case study: 4 mq trasformati a Porta Nuova con doccia walk-in e mobile sospeso. Situazione iniziale, lavorazioni e risultato.",
    locality: "Milano — Porta Nuova",
    citySlug: "milano",
    published: false,
    typology: "Bagno compatto in appartamento",
    sqm: "4 mq",
    before: "Bagno di piccole dimensioni con vasca ingombrante e mobile a terra, spazio di manovra ridotto.",
    request: "Guadagnare spazio percepito e utilizzabile senza modificare la posizione della colonna di scarico.",
    works: ["Rimozione vasca e sanitari esistenti", "Adeguamento scarico per doccia walk-in", "Impermeabilizzazione zona doccia", "Posa pavimento e rivestimento", "Installazione mobile sospeso e sanitari"],
    materials: ["TODO_AZIENDA: marche e formati effettivamente posati"],
    duration: "TODO_AZIENDA: durata reale del cantiere",
    result: "Doccia walk-in e mobile sospeso al posto della vasca: pavimento libero e spazio di manovra recuperato.",
  },
  {
    slug: "ristrutturazione-bagno-milano-brera",
    title: "Bagno stretto ottimizzato a Brera, Milano",
    metaTitle: "Ristrutturazione Bagno a Brera, Milano | Case Study",
    metaDescription: "Case study: bagno stretto a Brera riprogettato da rivestimento anonimo a design contemporaneo. Vincoli, lavorazioni e risultato.",
    locality: "Milano — Brera",
    citySlug: "milano",
    published: false,
    typology: "Bagno stretto in edificio storico",
    sqm: "TODO_AZIENDA: metratura",
    before: "Rivestimento bianco anonimo, disposizione dei sanitari poco funzionale in un ambiente stretto.",
    request: "Rendere l'ambiente contemporaneo lavorando sulla percezione della larghezza.",
    works: ["Demolizione rivestimento esistente", "Riorganizzazione sanitari", "Posa pavimento e rivestimento", "Nuova illuminazione"],
    materials: ["TODO_AZIENDA: marche e formati effettivamente posati"],
    duration: "TODO_AZIENDA: durata reale del cantiere",
    result: "Ambiente contemporaneo con palette scura e continuità di posa fra pavimento e zona doccia.",
  },
  {
    slug: "ristrutturazione-bagno-milano-navigli",
    title: "Bagno anni '70 rinnovato ai Navigli, Milano",
    metaTitle: "Ristrutturazione Bagno ai Navigli, Milano | Case Study",
    metaDescription: "Case study: bagno con rivestimento verde anni '70 ai Navigli trasformato in ambiente minimalista. Lavorazioni e risultato.",
    locality: "Milano — Navigli",
    citySlug: "milano",
    published: false,
    typology: "Bagno in appartamento anni '70",
    sqm: "TODO_AZIENDA: metratura",
    before: "Rivestimento verde originale anni '70, sanitari e impianto d'epoca.",
    request: "Rifacimento completo con estetica minimalista.",
    works: ["Demolizione completa e smaltimento", "Rifacimento impianto idraulico ed elettrico", "Massetto e impermeabilizzazione", "Posa pavimento e rivestimento", "Installazione sanitari e finiture"],
    materials: ["TODO_AZIENDA: marche e formati effettivamente posati"],
    duration: "TODO_AZIENDA: durata reale del cantiere",
    result: "Ambiente minimalista, impianto completamente rinnovato.",
  },
  {
    slug: "ristrutturazione-bagno-milano-centro",
    title: "Bagno padronale moderno in centro, Milano",
    metaTitle: "Ristrutturazione Bagno Padronale in Centro a Milano | Case Study",
    metaDescription: "Case study: bagno padronale in centro a Milano, da rivestimento anni '80 a eleganza contemporanea. Lavorazioni e risultato.",
    locality: "Milano — Centro",
    citySlug: "milano",
    published: false,
    typology: "Bagno padronale",
    sqm: "TODO_AZIENDA: metratura",
    before: "Rivestimento rosa anni '80, sanitari datati.",
    request: "Trasformazione completa in chiave contemporanea.",
    works: ["Demolizione completa", "Rifacimento impianti", "Massetto e impermeabilizzazione", "Posa pavimento e rivestimento", "Installazione sanitari, mobile e illuminazione"],
    materials: ["TODO_AZIENDA: marche e formati effettivamente posati"],
    duration: "TODO_AZIENDA: durata reale del cantiere",
    result: "Bagno padronale contemporaneo con finiture coordinate.",
  },
];

export const publishedProjects = projects.filter((p) => p.published);
export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
