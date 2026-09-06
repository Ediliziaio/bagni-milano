export interface BlogCategory {
  slug: string;
  name: string;
  title: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  /** Pagina pillar/money che questo cluster deve sostenere con internal link. */
  supports: string;
}

export const blogCategories: BlogCategory[] = [
  { slug: "costi", name: "Costi", title: "Costi e preventivi", supports: "/quanto-costa-ristrutturare-bagno",
    description: "Quanto costa davvero rifare un bagno, come si legge un preventivo e dove va a finire il budget.",
    metaTitle: "Costi Ristrutturazione Bagno: Guide e Prezzi | Bagni Milano",
    metaDescription: "Guide sui costi della ristrutturazione bagno: prezzi di piastrelle, sanitari, doccia e manodopera, e come leggere un preventivo." },
  { slug: "progettazione", name: "Progettazione", title: "Progettazione del bagno", supports: "/ristrutturazione-bagno",
    description: "Disposizione dei sanitari, misure minime, illuminazione e ventilazione: le scelte che si fanno prima di comprare qualsiasi cosa.",
    metaTitle: "Progettare il Bagno: Misure, Disposizione e Errori | Bagni Milano",
    metaDescription: "Come progettare un bagno funzionale: disposizione dei sanitari, dimensioni minime, distanze e gli errori più frequenti." },
  { slug: "materiali", name: "Materiali", title: "Materiali e finiture", supports: "/ristrutturazione-bagno",
    description: "Gres, ceramica, resina, marmo e rubinetteria: cosa cambia davvero nell'uso quotidiano e nella durata.",
    metaTitle: "Materiali per il Bagno: Gres, Resina, Marmo | Bagni Milano",
    metaDescription: "Guida ai materiali del bagno: gres porcellanato, ceramica, resina, marmo e rubinetteria. Durata, manutenzione e costi." },
  { slug: "idee-e-design", name: "Idee e design", title: "Idee e design", supports: "/progetti",
    description: "Soluzioni, palette e riferimenti visivi per capire che direzione dare al bagno.",
    metaTitle: "Idee per il Bagno: Design, Colori e Illuminazione | Bagni Milano",
    metaDescription: "Idee e riferimenti di design per il bagno: palette di colore, illuminazione, tendenze e soluzioni per ambienti piccoli." },
  { slug: "problemi", name: "Problemi", title: "Problemi e soluzioni", supports: "/servizi",
    description: "Muffa, infiltrazioni, cattivi odori, umidità: cause reali e interventi che risolvono davvero.",
    metaTitle: "Problemi del Bagno: Muffa, Infiltrazioni, Odori | Bagni Milano",
    metaDescription: "Muffa, infiltrazioni, cattivi odori e umidità in bagno: come si riconoscono le cause e quali interventi risolvono davvero." },
  { slug: "normative", name: "Normative", title: "Permessi, normative e detrazioni", supports: "/servizi/ristrutturazione-bagno-condominio",
    description: "CILA, regolamenti condominiali, distanze normative e agevolazioni fiscali.",
    metaTitle: "Permessi e Detrazioni per il Bagno | Bagni Milano",
    metaDescription: "CILA, comunicazione all'amministratore, normative e detrazioni fiscali per la ristrutturazione del bagno." },
  { slug: "lombardia", name: "Lombardia", title: "Ristrutturare in Lombardia", supports: "/ristrutturazione-bagno-milano",
    description: "Specificità di Milano, Monza, Lodi e del territorio lombardo: edifici, condomini, logistica di cantiere.",
    metaTitle: "Ristrutturare il Bagno in Lombardia: Guide Locali | Bagni Milano",
    metaDescription: "Guide locali alla ristrutturazione del bagno a Milano, Monza, Lodi e in Lombardia: edifici tipici, condomini e cantiere." },
];

export const getCategory = (slug: string) => blogCategories.find((c) => c.slug === slug);
