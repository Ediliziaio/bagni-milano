/**
 * SINGLE SOURCE OF TRUTH — entità "Bagni Milano".
 *
 * ⚠️  DATI DA VALIDARE PRIMA DEL GO-LIVE
 * Ogni campo marcato `TODO_AZIENDA` è un PLACEHOLDER: non è un dato verificato.
 * Regola: nessun numero, certificazione, recensione o anno di esperienza viene
 * pubblicato se non confermato dall'azienda. Vedi docs/00-DATI-DA-VALIDARE.md
 */

export const TODO = (label: string) => `TODO_AZIENDA:${label}`;

export const site = {
  /** Nome legale/commerciale usato ovunque. Coerenza NAP obbligatoria. */
  brand: "Bagni Milano",
  legalName: TODO("ragione sociale completa (es. Bagni Milano S.r.l.)"),
  /** Il brand sul prototipo Lovable è "I Bagni Milano" — allineare prima del go-live. */
  alternateName: ["I Bagni Milano", "Bagni Milano ristrutturazioni"],
  tagline: "Ristrutturazione bagno chiavi in mano a Milano e in Lombardia",

  /** ⚠️ Dominio provvisorio: sostituire ovunque prima del deploy. */
  url: "https://www.bagnimilano.it",

  telephone: "+39 352 067 9764",
  /** Formato E.164, per i link tel: e wa.me */
  telephoneE164: "+393520679764",
  whatsapp: "393520679764",
  email: TODO("email commerciale"),
  vatId: TODO("partita IVA"),

  address: {
    street: TODO("indirizzo sede/showroom"),
    locality: "Milano",
    region: "MI",
    postalCode: TODO("CAP"),
    country: "IT",
  },
  /** Coordinate sede: obbligatorie per LocalBusiness coerente col GBP. */
  geo: { lat: TODO("latitudine sede"), lng: TODO("longitudine sede") },

  openingHours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "18:00" },
  ],

  /** Profili ufficiali → sameAs. Inserire SOLO URL realmente esistenti. */
  sameAs: [] as string[],

  /** Google Business Profile: URL scheda + place id. Serve per Entity SEO. */
  googleBusinessProfile: TODO("URL scheda Google Business Profile"),

  /** Partner dichiarato sul prototipo. Confermare natura del rapporto. */
  partner: { name: "Gruppo BEA", note: TODO("natura del rapporto con Gruppo BEA") },

  priceRange: "€€–€€€",
  foundingDate: TODO("anno di fondazione"),
  ogImage: "/og-image.png",
  locale: "it_IT",
} as const;

/** Aree servite — usate da schema, sitemap, footer e internal linking. */
export const areaServed = [
  { name: "Milano", type: "City" },
  { name: "Città metropolitana di Milano", type: "AdministrativeArea" },
  { name: "Monza", type: "City" },
  { name: "Provincia di Monza e della Brianza", type: "AdministrativeArea" },
  { name: "Lodi", type: "City" },
  { name: "Provincia di Lodi", type: "AdministrativeArea" },
  { name: "Bergamo", type: "City" },
  { name: "Provincia di Bergamo", type: "AdministrativeArea" },
  { name: "Varese", type: "City" },
  { name: "Provincia di Varese", type: "AdministrativeArea" },
  { name: "Como", type: "City" },
  { name: "Provincia di Como", type: "AdministrativeArea" },
  { name: "Lombardia", type: "State" },
] as const;

/**
 * Disambiguazione delle entità geografiche per Google e per i motori generativi.
 * "Milano" da solo è ambiguo; con un sameAs verso la voce enciclopedica non lo è più.
 */
export const placeSameAs: Record<string, string> = {
  Milano: "https://it.wikipedia.org/wiki/Milano",
  Monza: "https://it.wikipedia.org/wiki/Monza",
  Lodi: "https://it.wikipedia.org/wiki/Lodi",
  Bergamo: "https://it.wikipedia.org/wiki/Bergamo",
  Varese: "https://it.wikipedia.org/wiki/Varese",
  Como: "https://it.wikipedia.org/wiki/Como",
  Lombardia: "https://it.wikipedia.org/wiki/Lombardia",
  "Città metropolitana di Milano": "https://it.wikipedia.org/wiki/Citt%C3%A0_metropolitana_di_Milano",
  "Provincia di Monza e della Brianza": "https://it.wikipedia.org/wiki/Provincia_di_Monza_e_della_Brianza",
  "Provincia di Lodi": "https://it.wikipedia.org/wiki/Provincia_di_Lodi",
  "Provincia di Bergamo": "https://it.wikipedia.org/wiki/Provincia_di_Bergamo",
  "Provincia di Varese": "https://it.wikipedia.org/wiki/Provincia_di_Varese",
  "Provincia di Como": "https://it.wikipedia.org/wiki/Provincia_di_Como",
};

export const abs = (path: string) => `${site.url}${path.startsWith("/") ? path : `/${path}`}`;

/**
 * ⚠️ NON aggiungere `aggregateRating` allo schema finché non esistono recensioni
 * reali e verificabili (Google/Trustpilot). Rating inventati = rischio penalizzazione
 * manuale + violazione delle linee guida structured data.
 */
export const HAS_VERIFIED_REVIEWS = false;
