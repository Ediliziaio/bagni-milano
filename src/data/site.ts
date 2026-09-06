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

  telephone: TODO("telefono principale in formato +39XXXXXXXXXX"),
  whatsapp: TODO("numero WhatsApp business"),
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
  { name: "Lombardia", type: "State" },
] as const;

export const abs = (path: string) => `${site.url}${path.startsWith("/") ? path : `/${path}`}`;

/**
 * ⚠️ NON aggiungere `aggregateRating` allo schema finché non esistono recensioni
 * reali e verificabili (Google/Trustpilot). Rating inventati = rischio penalizzazione
 * manuale + violazione delle linee guida structured data.
 */
export const HAS_VERIFIED_REVIEWS = false;
