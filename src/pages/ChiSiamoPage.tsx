import { Link } from "react-router-dom";
import { Seo } from "@/components/Seo";
import { Layout } from "@/components/Layout";
import { AnswerBlock, Breadcrumbs, CtaSection, SectionHead } from "@/components/Ui";
import { abs, site } from "@/data/site";
import { graph, baseNodes, webPage, breadcrumb } from "@/lib/schema";
import { method } from "@/data/method";
import { areaServed } from "@/data/site";

const PATH = "/chi-siamo";

const differences = [
  { h: "Facciamo solo bagni", t: "Non siamo un'impresa edile generalista che accetta anche i bagni. La specializzazione su un unico ambiente significa conoscere in anticipo i vincoli ricorrenti: pendenze di scarico, spessori disponibili, comportamento dei supporti, punti in cui nascono le infiltrazioni." },
  { h: "Un referente, non un centralino", t: "La stessa persona segue il progetto dal sopralluogo alla consegna. Non c'è passaggio di consegne fra commerciale e cantiere, che è il punto in cui di solito si perdono le informazioni." },
  { h: "Il preventivo si chiude prima della demolizione", t: "Le varianti in corso d'opera esistono, ma sono l'eccezione documentata, non il modello di business." },
  { h: "Le date stanno nel contratto", t: "Data di inizio e data di consegna sono scritte. Un impegno che non è scritto non è un impegno." },
];

export default function ChiSiamoPage() {
  const schema = graph(
    ...baseNodes(),
    webPage({ url: abs(PATH), name: `Chi è ${site.brand}`, description: "Chi è Bagni Milano, cosa fa, dove opera e come lavora.", type: "AboutPage" }),
    breadcrumb([{ name: "Home", url: abs("/") }, { name: "Chi siamo", url: abs(PATH) }])
  );

  return (
    <Layout>
      <Seo
        title="Chi è Bagni Milano | Impresa Specializzata in Bagni"
        description="Impresa specializzata nella ristrutturazione bagno chiavi in mano a Milano, Monza, Lodi e in Lombardia. Chi siamo e come lavoriamo."
        path={PATH}
        schema={schema}
        answer="Bagni Milano è un'impresa specializzata nella ristrutturazione completa del bagno chiavi in mano. Opera a Milano e nella Città metropolitana, a Monza e in Brianza, a Lodi e nel Lodigiano, e in Lombardia. Gestisce progetto, impianti, posa e finiture con un unico referente."
      />
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Chi siamo" }]} />

      <section className="container-x pt-8">
        <p className="eyebrow">Chi siamo</p>
        <h1 className="mt-3 max-w-3xl">Specialisti del bagno, non generalisti dell'edilizia</h1>
        <AnswerBlock question="Chi è Bagni Milano?">
          <p>
            Bagni Milano è un'impresa specializzata nella ristrutturazione completa del bagno chiavi in mano.
            Si occupa di progettazione, demolizione, impianto idraulico ed elettrico, massetto,
            impermeabilizzazione, posa, sanitari e finiture, con un unico referente per l'intero progetto.
          </p>
          <p>
            Opera a Milano e nella Città metropolitana, a Monza e nella provincia di Monza e Brianza,
            a Lodi e nel Lodigiano, e più in generale in Lombardia.
          </p>
        </AnswerBlock>
      </section>

      <section className="section">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <SectionHead eyebrow="Il posizionamento" title="Perché una sola specializzazione" />
          <div className="prose-bm">
            <p>
              Un'impresa edile generalista fa bagni, cucine, controsoffitti, facciate e cappotti. Ogni
              ambiente ha vincoli tecnici diversi, e nessuno di questi si impara superficialmente.
            </p>
            <p>
              Il bagno è l'ambiente con la maggiore densità di lavorazioni per metro quadro della casa:
              in 5 mq convivono impianto idraulico, impianto elettrico, impermeabilizzazione, massetto,
              posa, sanitari e arredo. È anche l'unico ambiente in cui un errore invisibile — una guaina
              stesa male — produce un danno che coinvolge l'appartamento del piano di sotto.
            </p>
            <p>
              Fare solo bagni significa incontrare gli stessi problemi molte volte e riconoscerli in
              sopralluogo, prima che diventino una variante in corso d'opera.
            </p>
          </div>
        </div>
      </section>

      <section className="section border-y border-line bg-travertine/40">
        <div className="container-x">
          <SectionHead eyebrow="Differenze" title="Cosa ci distingue da altre imprese" lede="Quattro impegni concreti, verificabili durante il cantiere." />
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {differences.map((d) => (
              <div key={d.h} className="card">
                <h3 className="text-lg">{d.h}</h3>
                <p className="mt-2 leading-relaxed text-ink-soft">{d.t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHead eyebrow="Organizzazione" title="Come è organizzato il lavoro" />
            <div className="prose-bm mt-6">
              <p>
                Il progetto passa attraverso tre funzioni che restano coordinate dallo stesso referente:
              </p>
              <ul>
                <li><strong>Progettazione</strong> — rilievo, pianta quotata, disposizione dei sanitari, selezione dei materiali.</li>
                <li><strong>Gestione del cantiere</strong> — cronoprogramma, coordinamento di idraulico, elettricista, muratore e posatore, controllo delle fasi.</li>
                <li><strong>Assistenza post-consegna</strong> — collaudo, checklist firmata e interventi successivi.</li>
              </ul>
              <p>
                <strong>Da completare:</strong> composizione della squadra, quali figure sono interne e quali
                collaborano stabilmente, esperienza e anno di avvio dell'attività. Sono informazioni che
                l'azienda deve fornire e che non vengono ricostruite: dichiarare anni di esperienza non
                verificabili è esattamente il tipo di affermazione che questo sito evita.
              </p>
            </div>
          </div>

          <div>
            <SectionHead eyebrow="Dove operiamo" title="Aree servite" />
            <ul className="mt-6 space-y-2.5">
              {areaServed.map((a) => (
                <li key={a.name} className="flex gap-3 text-ink-soft">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brass" aria-hidden />
                  {a.name}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-ink-muted">
              Milano e Città metropolitana, Monza e Brianza e il Lodigiano sono coperti in modo
              continuativo. Per le altre province lombarde la copertura viene confermata al primo contatto.
            </p>
            <Link to="/ristrutturazione-bagno-lombardia" className="mt-5 inline-block text-sm text-brass-dark underline underline-offset-4 hover:text-ink">
              Ristrutturazione bagno in Lombardia
            </Link>
          </div>
        </div>
      </section>

      <section className="section border-t border-line">
        <div className="container-x">
          <div className="card max-w-3xl bg-travertine/50">
            <p className="eyebrow">Filosofia</p>
            <h2 className="mt-2 text-2xl">Preferiamo dire di no</h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Non tutti i progetti sono adatti al modo in cui lavoriamo. Quando un intervento richiede
              competenze fuori dal nostro perimetro, o quando le aspettative di budget e di risultato non
              sono compatibili, lo diciamo al primo contatto. È meno gradevole di un preventivo ottimistico,
              ed è l'unico modo per non trovarsi a metà cantiere a rinegoziare.
            </p>
            <Link to="/metodo" className="mt-5 inline-block text-sm text-brass-dark underline underline-offset-4 hover:text-ink">
              Il {method.name}
            </Link>
          </div>
        </div>
      </section>

      <CtaSection title="Vuoi capire se siamo l'impresa giusta per il tuo bagno?" text="Il primo contatto serve esattamente a questo: in 24-48 ore ti diciamo se il tuo progetto rientra in quello che sappiamo fare bene." cta="Parliamone" />
    </Layout>
  );
}
