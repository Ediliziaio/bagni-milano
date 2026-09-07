import { Link } from "react-router-dom";
import { Seo } from "@/components/Seo";
import { Img } from "@/components/Media";
import { Layout } from "@/components/Layout";
import { AnswerBlock, Breadcrumbs, CheckList, CtaSection, FaqList, SectionHead } from "@/components/Ui";
import { Reveal } from "@/components/Reveal";
import { abs } from "@/data/site";
import { graph, baseNodes, webPage, faqPage, breadcrumb } from "@/lib/schema";
import { costBreakdown, costDrivers, quoteChecklist, costsDisclaimer } from "@/data/costs";
import { faqs } from "@/data/faqs";

const PATH = "/quanto-costa-ristrutturare-bagno";

/**
 * Scelta editoriale: questa pagina non pubblica importi.
 * Risponde alla domanda spiegando COME si compone il costo e cosa lo sposta,
 * invece di dare un numero medio che non descrive nessun bagno reale.
 */
const costFaqs = faqs.filter((f) => f.topic === "costi");

export default function CostiPage() {
  const schema = graph(
    ...baseNodes(),
    webPage({
      url: abs(PATH),
      name: "Quanto costa ristrutturare un bagno",
      description:
        "Come si compone il costo di una ristrutturazione bagno: le sei variabili che lo determinano, la ripartizione del budget e le voci che un preventivo deve contenere.",
    }),
    faqPage(costFaqs.map((f) => ({ q: f.q, a: f.a }))),
    breadcrumb([{ name: "Home", url: abs("/") }, { name: "Quanto costa ristrutturare un bagno", url: abs(PATH) }])
  );

  return (
    <Layout>
      <Seo
        title="Quanto Costa Ristrutturare un Bagno: Come si Compone il Prezzo"
        description="Cosa determina il costo di una ristrutturazione bagno: le sei variabili che lo spostano, dove va il budget e le voci che un preventivo serio deve contenere."
        path={PATH}
        schema={schema}
        answer="Il costo di una ristrutturazione bagno dipende da sei variabili: stato dell'impianto idraulico, spostamento dei sanitari, livello delle finiture, superficie da rivestire, accessibilità del cantiere e vincoli dell'edificio. La variabile che pesa di più non è la metratura ma l'età dell'impianto."
      />
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Quanto costa ristrutturare un bagno" }]} />

      <section className="container-x pt-8">
        <p className="eyebrow">Costi</p>
        <h1 className="mt-3 max-w-3xl">Quanto costa ristrutturare un bagno</h1>
        <p className="lede mt-5 max-w-2xl">
          Come si compone il prezzo, cosa lo sposta davvero e quali voci deve contenere un
          preventivo perché sia confrontabile con un altro.
        </p>

        <figure className="mt-10">
          <Img id="pag-costi" ratio="16 / 9" priority />
        </figure>

        <AnswerBlock question="Da cosa dipende il costo di una ristrutturazione bagno?">
          <p>
            Da sei variabili: stato dell'impianto idraulico, eventuale spostamento dei sanitari,
            livello delle finiture, superficie da rivestire, accessibilità del cantiere e vincoli
            dell'edificio.
          </p>
          <p>
            La variabile che pesa di più non è la metratura, ma l'età dell'impianto: due bagni
            identici per dimensione possono richiedere lavorazioni molto diverse.
          </p>
        </AnswerBlock>
      </section>

      {/* PERCHÉ NIENTE LISTINO */}
      <section className="section">
        <div className="container-x">
          <div className="card max-w-3xl !bg-sand">
            <p className="eyebrow">Una scelta</p>
            <h2 className="mt-2 text-2xl">Perché non pubblichiamo un listino</h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Un prezzo medio non descrive nessun bagno reale. Serve a chi lo pubblica per farsi
              chiamare, e a chi legge per farsi un'idea che verrà smentita al primo sopralluogo.
            </p>
            <p className="mt-3 leading-relaxed text-ink-soft">{costsDisclaimer}</p>
          </div>
        </div>
      </section>

      {/* LE SEI VARIABILI */}
      <section className="on-dark section">
        <div className="container-x">
          <Reveal>
            <SectionHead
              eyebrow="Variabili"
              title="Cosa sposta davvero il preventivo"
              lede="In ordine di peso. La prima, da sola, vale più delle altre cinque messe insieme."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {costDrivers.map((d, i) => (
              <Reveal key={d.title} delay={(i % 3) * 80} className="card">
                <span className="font-display text-2xl text-gold/50">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-1 text-lg">{d.title}</h3>
                <p className="mt-2 text-sm leading-relaxed">{d.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DOVE VA IL BUDGET */}
      <section className="section">
        <div className="container-x">
          <SectionHead
            eyebrow="Ripartizione"
            title="Dove va il budget"
            lede="Capire il peso di ogni voce serve a decidere dove ha senso risparmiare e dove non ne ha nessuno."
          />
          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[520px] border-collapse text-sm">
              <caption className="sr-only">Peso percentuale delle voci di costo</caption>
              <thead>
                <tr>
                  <th scope="col" className="border border-line bg-sand p-3 text-left font-semibold">Voce</th>
                  <th scope="col" className="border border-line bg-sand p-3 text-left font-semibold">Peso sul totale</th>
                  <th scope="col" className="border border-line bg-sand p-3 text-left font-semibold">Note</th>
                </tr>
              </thead>
              <tbody>
                {costBreakdown.map((b) => (
                  <tr key={b.voice}>
                    <th scope="row" className="border border-line p-3 text-left font-medium">{b.voice}</th>
                    <td className="border border-line p-3 whitespace-nowrap tabular-nums">{b.share}</td>
                    <td className="border border-line p-3 text-ink-soft">{b.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 max-w-2xl leading-relaxed text-ink-soft">
            La conseguenza pratica: risparmiare sui sanitari sposta poco il totale, mentre rinunciare
            a lavorazioni tecniche come l'impermeabilizzazione sposta molto — e produce un costo
            futuro molto più alto di quanto si è risparmiato.
          </p>
        </div>
      </section>

      {/* CONFRONTARE PREVENTIVI */}
      <section className="section border-t border-line">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:gap-16">
          <SectionHead
            eyebrow="Confrontare preventivi"
            title="Le voci che devono comparire"
            lede="Due preventivi si confrontano solo se elencano le stesse lavorazioni. Una voce che manca non è inclusa: è rinviata a cantiere aperto."
          />
          <CheckList items={quoteChecklist} />
        </div>
      </section>

      {/* APPROFONDIMENTI */}
      <section className="section border-t border-line">
        <div className="container-x">
          <div className="card max-w-3xl !bg-sand">
            <h2 className="text-2xl">Approfondimenti</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              Nel blog trovi gli ordini di grandezza di mercato, con il contesto necessario a
              interpretarli.
            </p>
            <ul className="mt-5 space-y-2">
              <li><Link className="text-gold-deep underline underline-offset-4 hover:text-ink" to="/blog/quanto-costa-rifare-un-bagno">Quanto costa rifare un bagno: la struttura del prezzo</Link></li>
              <li><Link className="text-gold-deep underline underline-offset-4 hover:text-ink" to="/blog/leggere-preventivo-ristrutturazione-bagno">Come si legge un preventivo</Link></li>
              <li><Link className="text-gold-deep underline underline-offset-4 hover:text-ink" to="/blog/costo-manodopera-ristrutturazione-bagno">Quanto incide la manodopera</Link></li>
              <li><Link className="text-gold-deep underline underline-offset-4 hover:text-ink" to="/quanto-tempo-ristrutturare-bagno">Quanto tempo serve</Link></li>
            </ul>
          </div>
        </div>
      </section>

      <FaqList items={costFaqs.map((f) => ({ q: f.q, a: f.a }))} title="Domande frequenti sui costi" />
      <CtaSection
        title="Un preventivo reale, non una stima"
        text="Il prezzo del tuo bagno dipende dal tuo bagno. Il sopralluogo serve a dirti un numero che non cambierà."
        cta="Richiedi il preventivo"
      />
    </Layout>
  );
}
