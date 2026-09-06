import { Link } from "react-router-dom";
import { Seo } from "@/components/Seo";
import { Layout } from "@/components/Layout";
import { AnswerBlock, Breadcrumbs, CheckList, CtaSection, FaqList, SectionHead } from "@/components/Ui";
import { abs } from "@/data/site";
import { graph, baseNodes, webPage, faqPage, breadcrumb } from "@/lib/schema";
import { costBySize, costByScope, costBreakdown, costDrivers, quoteChecklist, costsDisclaimer, CostRow } from "@/data/costs";
import { faqs } from "@/data/faqs";

const PATH = "/quanto-costa-ristrutturare-bagno";
const eur = (n: number) => n.toLocaleString("it-IT");

const CostTable = ({ rows, head }: { rows: CostRow[]; head: string }) => (
  <div className="overflow-x-auto">
    <table className="w-full min-w-[560px] border-collapse text-sm">
      <thead>
        <tr>
          <th scope="col" className="border border-line bg-sand p-3 text-left font-semibold">{head}</th>
          <th scope="col" className="border border-line bg-sand p-3 text-left font-semibold">Range indicativo</th>
          <th scope="col" className="border border-line bg-sand p-3 text-left font-semibold">Note</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r) => (
          <tr key={r.label}>
            <th scope="row" className="border border-line p-3 text-left font-medium">{r.label}</th>
            <td className="border border-line p-3 whitespace-nowrap">{eur(r.min)} – {eur(r.max)} €</td>
            <td className="border border-line p-3 text-ink-soft">{r.note}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const costFaqs = faqs.filter((f) => f.topic === "costi");

export default function CostiPage() {
  const schema = graph(
    ...baseNodes(),
    webPage({ url: abs(PATH), name: "Quanto costa ristrutturare un bagno", description: "Range indicativi di costo per metratura e tipologia di intervento, ripartizione del budget e variabili che spostano il preventivo." }),
    faqPage(costFaqs.map((f) => ({ q: f.q, a: f.a }))),
    breadcrumb([{ name: "Home", url: abs("/") }, { name: "Quanto costa ristrutturare un bagno", url: abs(PATH) }])
  );

  return (
    <Layout>
      <Seo
        title="Quanto Costa Ristrutturare un Bagno a Milano | Prezzi 2026"
        description="Quanto costa ristrutturare un bagno: range indicativi per 3, 5, 6 e 8 mq, ripartizione del budget e le variabili che spostano il preventivo."
        path={PATH}
        schema={schema}
        answer="Ristrutturare un bagno completo di 5-6 mq costa indicativamente fra 8.000 e 18.000 € in Lombardia, impianti inclusi. La variabile che pesa di più è lo stato dell'impianto idraulico, non la metratura."
      />
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Quanto costa ristrutturare un bagno" }]} />

      <section className="container-x pt-8">
        <p className="eyebrow">Costi</p>
        <h1 className="mt-3 max-w-3xl">Quanto costa ristrutturare un bagno</h1>
        <p className="lede mt-5 max-w-2xl">
          Range di riferimento per metratura e tipologia di intervento, dove va davvero il budget e
          quali variabili spostano il preventivo di migliaia di euro.
        </p>

        <AnswerBlock question="Quanto costa ristrutturare un bagno a Milano?">
          <p>
            Un bagno completo di 5-6 mq costa indicativamente fra 8.000 e 18.000 € in Lombardia,
            con rifacimento degli impianti incluso. Un bagno di 3-4 mq parte da circa 6.500 €,
            uno oltre i 9 mq può superare i 30.000 € in funzione delle finiture.
          </p>
          <p>La variabile che pesa di più non è la metratura ma lo stato dell'impianto idraulico esistente.</p>
        </AnswerBlock>

        <div className="rounded-xl border border-gold/40 bg-gold/5 p-4 text-sm leading-relaxed text-ink-soft">
          <strong className="text-ink">Come leggere questi numeri.</strong> {costsDisclaimer}
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <SectionHead eyebrow="Per metratura" title="Quanto costa un bagno di 3, 5, 6 o 8 mq" />
          <div className="mt-8"><CostTable rows={costBySize} head="Metratura" /></div>
        </div>
      </section>

      <section className="section border-y border-line bg-sand/40">
        <div className="container-x">
          <SectionHead eyebrow="Per tipo di intervento" title="Non sempre serve una ristrutturazione completa" lede="Interventi mirati costano meno e durano meno, quando le condizioni tecniche lo permettono." />
          <div className="mt-8"><CostTable rows={costByScope} head="Intervento" /></div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <SectionHead eyebrow="Ripartizione" title="Dove va il budget" lede="Capire il peso di ogni voce serve a decidere dove ha senso risparmiare e dove non ne ha nessuno." />
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[520px] border-collapse text-sm">
              <thead>
                <tr>
                  <th scope="col" className="border border-line bg-sand p-3 text-left font-semibold">Voce</th>
                  <th scope="col" className="border border-line bg-sand p-3 text-left font-semibold">Peso</th>
                  <th scope="col" className="border border-line bg-sand p-3 text-left font-semibold">Note</th>
                </tr>
              </thead>
              <tbody>
                {costBreakdown.map((b) => (
                  <tr key={b.voice}>
                    <th scope="row" className="border border-line p-3 text-left font-medium">{b.voice}</th>
                    <td className="border border-line p-3 whitespace-nowrap">{b.share}</td>
                    <td className="border border-line p-3 text-ink-soft">{b.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-ink-soft">
            La conseguenza pratica: risparmiare sui sanitari sposta poco il totale, mentre rinunciare a
            lavorazioni tecniche come l'impermeabilizzazione sposta molto — e produce un costo futuro
            molto più alto di quanto si è risparmiato.
          </p>
        </div>
      </section>

      <section className="section border-t border-line">
        <div className="container-x">
          <SectionHead eyebrow="Variabili" title="Cosa sposta davvero il preventivo" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {costDrivers.map((d, i) => (
              <div key={d.title} className="card">
                <span className="font-accent text-2xl text-gold">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-1 text-lg">{d.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{d.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section border-t border-line">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:gap-16">
          <SectionHead
            eyebrow="Confrontare preventivi"
            title="Le voci che devono comparire"
            lede="Due preventivi si confrontano solo se elencano le stesse lavorazioni. Una voce che manca non è inclusa: è rinviata."
          />
          <CheckList items={quoteChecklist} />
        </div>
      </section>

      <section className="section border-t border-line">
        <div className="container-x">
          <div className="card max-w-3xl bg-sand/50">
            <h2 className="text-2xl">Approfondimenti sui costi</h2>
            <p className="mt-3"><Link className="text-gold-deep underline underline-offset-4 hover:text-ink" to="/calcolatore-costo-bagno"><strong>Calcolatore: stima il costo del tuo bagno in trenta secondi</strong></Link></p>
            <ul className="mt-4 space-y-2">
              <li><Link className="text-gold-deep underline underline-offset-4 hover:text-ink" to="/blog/quanto-costa-rifare-un-bagno">Quanto costa rifare un bagno: la struttura del prezzo</Link></li>
              <li><Link className="text-gold-deep underline underline-offset-4 hover:text-ink" to="/blog/costo-piastrelle-bagno">Costo delle piastrelle: materiale, posa e sfrido</Link></li>
              <li><Link className="text-gold-deep underline underline-offset-4 hover:text-ink" to="/blog/quanto-costa-trasformare-vasca-in-doccia">Quanto costa trasformare la vasca in doccia</Link></li>
              <li><Link className="text-gold-deep underline underline-offset-4 hover:text-ink" to="/blog/detrazioni-ristrutturazione-bagno">Detrazioni fiscali: come funzionano</Link></li>
              <li><Link className="text-gold-deep underline underline-offset-4 hover:text-ink" to="/quanto-tempo-ristrutturare-bagno">Quanto tempo serve per rifare un bagno</Link></li>
            </ul>
          </div>
        </div>
      </section>

      <FaqList items={costFaqs.map((f) => ({ q: f.q, a: f.a }))} title="Domande frequenti sui costi" />
      <CtaSection title="Un preventivo reale, non una stima" text="Il prezzo del tuo bagno dipende dal tuo bagno. Il sopralluogo serve a dirti un numero che non cambierà." cta="Richiedi il preventivo" />
    </Layout>
  );
}
