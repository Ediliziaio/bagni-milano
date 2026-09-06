/**
 * Factory JSON-LD. Un solo grafo per pagina (@graph) con @id stabili:
 * i motori generativi risolvono meglio l'entità se gli id sono canonici e ripetuti.
 */
import { site, areaServed, abs, placeSameAs, HAS_VERIFIED_REVIEWS } from "@/data/site";
import { services } from "@/data/services";

/** Data di build: alimenta dateModified senza doverla scrivere pagina per pagina. */
const BUILD_DATE = new Date().toISOString().split("T")[0];

const ORG_ID = `${site.url}/#organization`;
const WEBSITE_ID = `${site.url}/#website`;
const LOCAL_ID = `${site.url}/#localbusiness`;

// Ogni area servita porta il proprio sameAs: è ciò che permette a un motore di
// capire che "Lodi" è la città lombarda e non un'altra località omonima.
const areaServedSchema = areaServed.map((a) => ({
  "@type": a.type,
  name: a.name,
  ...(placeSameAs[a.name] ? { sameAs: placeSameAs[a.name] } : {}),
}));

/** Catalogo dei servizi: dichiara esplicitamente cosa l'entità offre. */
const offerCatalog = () => ({
  "@type": "OfferCatalog",
  name: "Servizi di ristrutturazione bagno",
  itemListElement: [
    {
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: "Ristrutturazione bagno chiavi in mano", url: abs("/ristrutturazione-bagno") },
    },
    ...services.map((sv) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: sv.title, url: abs(`/servizi/${sv.slug}`) },
    })),
  ],
});

export const organization = () => ({
  "@type": ["Organization", "HomeAndConstructionBusiness"],
  "@id": ORG_ID,
  name: site.brand,
  legalName: site.legalName,
  alternateName: [...site.alternateName],
  url: site.url,
  logo: { "@type": "ImageObject", url: abs("/logo.png"), width: 512, height: 512 },
  image: abs(site.ogImage),
  description:
    "Bagni Milano è un'impresa specializzata nella ristrutturazione completa del bagno chiavi in mano a Milano, Monza, Lodi, Bergamo, Varese, Como e in Lombardia: progettazione, demolizione, impianti, posa, finiture e consegna con un unico referente.",
  telephone: site.telephoneE164,
  email: site.email,
  vatID: site.vatId,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: site.telephoneE164,
    contactType: "customer service",
    areaServed: "IT",
    availableLanguage: ["it"],
    contactOption: "TollFree",
  },
  hasOfferCatalog: offerCatalog(),
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.locality,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  areaServed: areaServedSchema,
  knowsAbout: [
    "ristrutturazione bagno",
    "rifacimento bagno",
    "impianto idraulico bagno",
    "impianto elettrico bagno",
    "trasformazione vasca in doccia",
    "posa pavimenti e rivestimenti",
    "sanitari e arredo bagno",
    "ristrutturazione bagno in condominio",
  ],
  ...(site.sameAs.length ? { sameAs: [...site.sameAs] } : {}),
});

export const localBusiness = () => ({
  "@type": "HomeAndConstructionBusiness",
  "@id": LOCAL_ID,
  name: site.brand,
  parentOrganization: { "@id": ORG_ID },
  url: site.url,
  telephone: site.telephoneE164,
  email: site.email,
  priceRange: site.priceRange,
  image: abs(site.ogImage),
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.locality,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  areaServed: areaServedSchema,
  openingHoursSpecification: site.openingHours.map((h) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: h.days,
    opens: h.opens,
    closes: h.closes,
  })),
  // aggregateRating volutamente ASSENTE: nessuna recensione verificata a sistema.
  ...(HAS_VERIFIED_REVIEWS ? {} : {}),
});

export const website = () => ({
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  name: site.brand,
  url: site.url,
  inLanguage: "it-IT",
  publisher: { "@id": ORG_ID },
});

export const webPage = (o: {
  url: string;
  name: string;
  description: string;
  type?: string;
  dateModified?: string;
}) => ({
  "@type": o.type ?? "WebPage",
  "@id": `${o.url}#webpage`,
  url: o.url,
  name: o.name,
  description: o.description,
  isPartOf: { "@id": WEBSITE_ID },
  about: { "@id": ORG_ID },
  inLanguage: "it-IT",
  dateModified: o.dateModified ?? BUILD_DATE,
  // Indica quale porzione della pagina è la risposta sintetica: è il blocco che
  // assistenti vocali e motori generativi leggono per primo.
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", ".answer-block"],
  },
});

export const breadcrumb = (items: { name: string; url: string }[]) => ({
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    item: it.url,
  })),
});

export const faqPage = (faqs: { q: string; a: string }[]) => ({
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

export const service = (o: {
  name: string;
  description: string;
  url: string;
  serviceType?: string;
  area?: string;
}) => ({
  "@type": "Service",
  "@id": `${o.url}#service`,
  name: o.name,
  description: o.description,
  serviceType: o.serviceType ?? "Ristrutturazione bagno",
  provider: { "@id": ORG_ID },
  areaServed: o.area
    ? {
        "@type": "AdministrativeArea",
        name: o.area,
        ...(placeSameAs[o.area] ? { sameAs: placeSameAs[o.area] } : {}),
      }
    : areaServedSchema,
  url: o.url,
});

export const howTo = (o: {
  name: string;
  description: string;
  steps: { name: string; text: string }[];
  /** Durata complessiva in formato ISO 8601, es. P12D. */
  totalTime?: string;
}) => ({
  "@type": "HowTo",
  name: o.name,
  description: o.description,
  ...(o.totalTime ? { totalTime: o.totalTime } : {}),
  step: o.steps.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.name,
    text: s.text,
  })),
});

export const blogPosting = (o: {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  authorName: string;
  section?: string;
}) => ({
  "@type": "BlogPosting",
  "@id": `${o.url}#article`,
  headline: o.headline,
  description: o.description,
  url: o.url,
  datePublished: o.datePublished,
  dateModified: o.dateModified ?? o.datePublished,
  ...(o.image ? { image: { "@type": "ImageObject", url: o.image } } : {}),
  author: { "@type": "Organization", name: o.authorName, "@id": ORG_ID },
  publisher: { "@id": ORG_ID },
  ...(o.section ? { articleSection: o.section } : {}),
  isPartOf: { "@id": WEBSITE_ID },
  mainEntityOfPage: { "@id": `${o.url}#webpage` },
});

/** Case study progetto: CreativeWork + immagini prima/dopo. */
export const projectSchema = (o: {
  name: string;
  description: string;
  url: string;
  locality: string;
  image?: string;
}) => ({
  "@type": "CreativeWork",
  "@id": `${o.url}#project`,
  name: o.name,
  description: o.description,
  url: o.url,
  creator: { "@id": ORG_ID },
  locationCreated: { "@type": "Place", name: o.locality },
  ...(o.image ? { image: o.image } : {}),
});

/** Compone il grafo finale. */
export const graph = (...nodes: object[]) => ({
  "@context": "https://schema.org",
  "@graph": nodes,
});

export const baseNodes = () => [organization(), localBusiness(), website()];
