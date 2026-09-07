/**
 * Dati minimi delle tre guide mostrate in homepage.
 *
 * Importare `articles` dalla home trascinava l'intero corpo dei 20 articoli
 * (oltre 200 kB) nel bundle iniziale, perché la home non è caricata in lazy.
 * Qui stanno solo i campi che servono alle schede.
 */
export const featuredGuides = [
  {
    slug: "quanto-costa-rifare-un-bagno",
    category: "costi",
    categoryName: "Costi",
    readingTime: "8 min",
    title: "Quanto costa rifare un bagno: la struttura reale del prezzo",
    excerpt:
      "Il prezzo di un bagno non si stima a metro quadro. Dipende da sei variabili, e una sola di queste pesa più di tutte le altre.",
    image: "art-quanto-costa-rifare-un-bagno",
  },
  {
    slug: "come-progettare-un-bagno",
    category: "progettazione",
    categoryName: "Progettazione",
    readingTime: "8 min",
    title: "Come progettare un bagno: disposizione, distanze e sequenza corretta",
    excerpt:
      "La disposizione dei sanitari non è una questione di gusto: è una sequenza tecnica che dipende da dove arriva lo scarico.",
    image: "art-come-progettare-un-bagno",
  },
  {
    slug: "muffa-in-bagno-cause-e-soluzioni",
    category: "problemi",
    categoryName: "Problemi",
    readingTime: "7 min",
    title: "Muffa in bagno: perché torna e cosa la elimina davvero",
    excerpt:
      "La muffa non è un problema di pulizia. È un problema di aria, e finché non si risolve l'aria torna sempre.",
    image: "art-muffa-in-bagno-cause-e-soluzioni",
  },
] as const;
