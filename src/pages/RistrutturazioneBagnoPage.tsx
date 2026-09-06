import { Link } from "react-router-dom";
import { Seo } from "@/components/Seo";
import { Layout } from "@/components/Layout";
import { AnswerBlock, Breadcrumbs, CheckList, CtaSection, FaqList, RelatedLinks, SectionHead } from "@/components/Ui";
import { abs, site } from "@/data/site";
import { graph, baseNodes, webPage, service, faqPage, breadcrumb, howTo } from "@/lib/schema";
import { method } from "@/data/method";
import { services } from "@/data/services";
import { cities } from "@/data/cities";
import { faqs } from "@/data/faqs";
import { quoteChecklist } from "@/data/costs";

const PATH = "/ristrutturazione-bagno";

const included = [
  { h: "Progettazione", t: "Pianta quotata, disposizione dei sanitari, punti luce e prese, moodboard dei materiali. Il progetto si approva prima di ordinare qualsiasi cosa." },
  { h: "Demolizione e smaltimento", t: "Protezione dei percorsi, rimozione di sanitari, rivestimenti e massetto, trasporto in discarica autorizzata con formulario rifiuti." },
  { h: "Impianto idraulico", t: "Nuove linee di adduzione e scarico, eventuale spostamento dei punti acqua, prova di tenuta in pressione prima di richiudere le tracce." },
  { h: "Impianto elettrico", t: "Punti luce, prese, linea lavatrice e illuminazione specchio, posizionati nel rispetto delle prescrizioni applicabili ai volumi del bagno." },
  { h: "Massetto e impermeabilizzazione", t: "Livellamento del piano e guaina liquida su piatto doccia e zone bagnate. È la lavorazione invisibile che evita le infiltrazioni." },
  { h: "Pavimenti e rivestimenti", t: "Posa di gres, ceramica o grandi lastre, stuccatura e siliconature perimetrali." },
  { h: "Sanitari e rubinetteria", t: "Fornitura e installazione di sanitari, mobile, rubinetteria, box o piatto doccia, radiatore e specchio." },
  { h: "Tinteggiatura e consegna", t: "Finiture, pulizia di fine cantiere e consegna con checklist di collaudo firmata." },
];

const pillarFaqs = faqs.filter((f) =>
  ["Quanto tempo serve per rifare un bagno?", "Fate il sopralluogo prima del preventivo?", "Chi coordina idraulico, elettricista e muratore?", "Offrite un servizio chiavi in mano?", "Chi si occupa dello smaltimento delle macerie?", "Posso cambiare la disposizione dei sanitari?", "Serve la CILA per rifare il bagno?", "Il preventivo può cambiare durante i lavori?"].includes(f.q)
);

export default function RistrutturazioneBagnoPage() {
  const schema = graph(
    ...baseNodes(),
    webPage({ url: abs(PATH), name: "Ristrutturazione bagno chiavi in mano", description: "Cosa comprende una ristrutturazione bagno completa: lavorazioni, tempi, costi, garanzie e processo." }),
    service({
      name: "Ristrutturazione bagno chiavi in mano",
      description: "Ristrutturazione completa del bagno: progettazione, demolizione, smaltimento, impianto idraulico ed elettrico, massetto, impermeabilizzazione, posa, sanitari, tinteggiatura e consegna con collaudo.",
      url: abs(PATH),
    }),
    howTo({
      name: `Come si svolge una ristrutturazione bagno con il ${method.name}`,
      description: method.promise,
      steps: method.steps.map((s) => ({ name: s.name, text: s.text })),
    }),
    faqPage(pillarFaqs.map((f) => ({ q: f.q, a: f.a }))),
    breadcrumb([
      { name: "Home", url: abs("/") },
      { name: "Ristrutturazione bagno", url: abs(PATH) },
    ])
  );

  return (
    <Layout>
      <Seo
        title="Ristrutturazione Bagno Chiavi in Mano | Bagni Milano"
        description="Cosa comprende una ristrutturazione bagno completa: demolizione, impianti, massetto, impermeabilizzazione, posa e sanitari. Tempi, costi e processo."
        path={PATH}
        schema={schema}
        answer="Una ristrutturazione bagno completa comprende demolizione e smaltimento, impianto idraulico ed elettrico, massetto e impermeabilizzazione, posa di pavimento e rivestimento, sanitari e rubinetteria, tinteggiatura e consegna. Richiede in media 10-15 giorni lavorativi."
      />

      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Ristrutturazione bagno" }]} />

      <section className="container-x pt-8 pb-4">
        <p className="eyebrow">Servizio principale</p>
        <h1 className="mt-3 max-w-3xl">Ristrutturazione bagno chiavi in mano</h1>
        <p className="lede mt-5 max-w-2xl">
          Tutto quello che comprende un rifacimento completo del bagno, fase per fase: cosa si demolisce,
          cosa si rifà, quanto dura, cosa deve esserci in un preventivo e chi risponde del risultato.
        </p>

        <AnswerBlock question="Che cos'è una ristrutturazione bagno completa?">
          <p>
            È l'intervento che rifà il bagno dalle strutture in su: demolizione e smaltimento, impianto
            idraulico ed elettrico, massetto e impermeabilizzazione, posa di pavimento e rivestimento,
            installazione di sanitari e rubinetteria, tinteggiatura e consegna con collaudo.
          </p>
          <p>Richiede in media 10-15 giorni lavorativi di cantiere.</p>
        </AnswerBlock>
      </section>

      {/* COSA COMPRENDE */}
      <section className="section">
        <div className="container-x">
          <SectionHead eyebrow="Perimetro" title="Cosa comprende, voce per voce" lede="Se una di queste voci non compare nel preventivo, non è inclusa: è rinviata a cantiere aperto." />
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {included.map((i, idx) => (
              <div key={i.h} className="card">
                <span className="font-accent text-2xl text-gold">{String(idx + 1).padStart(2, "0")}</span>
                <h3 className="mt-1 text-lg">{i.h}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{i.t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESSO */}
      <section className="section border-y border-line bg-sand/40">
        <div className="container-x">
          <SectionHead eyebrow="Processo" title={`Le 12 fasi del ${method.name}`} lede={method.claim} />
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {method.steps.map((s) => (
              <li key={s.n} className="card">
                <div className="flex items-baseline gap-3">
                  <span className="font-accent text-xl text-gold">{String(s.n).padStart(2, "0")}</span>
                  <h3 className="text-base">{s.name}</h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.text}</p>
                <p className="mt-3 text-xs uppercase tracking-wider text-ink-muted">{s.duration}</p>
              </li>
            ))}
          </ol>
          <div className="mt-8">
            <Link to="/metodo" className="text-sm text-gold-deep underline underline-offset-4 hover:text-ink">Approfondisci il metodo</Link>
          </div>
        </div>
      </section>

      {/* TEMPI E COSTI */}
      <section className="section">
        <div className="container-x grid gap-8 lg:grid-cols-2">
          <div className="card">
            <p className="eyebrow">Tempi</p>
            <h2 className="mt-2 text-2xl">Quanto dura il cantiere</h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              In media 10-15 giorni lavorativi, a cui vanno aggiunte 2-4 settimane precedenti per
              sopralluogo, progetto, preventivo e consegna dei materiali. Le fasi rumorose — demolizione
              e tracce — occupano di norma i primi 3-4 giorni.
            </p>
            <Link to="/quanto-tempo-ristrutturare-bagno" className="mt-5 inline-block text-sm text-gold-deep underline underline-offset-4 hover:text-ink">Cronoprogramma giorno per giorno</Link>
          </div>
          <div className="card">
            <p className="eyebrow">Costi</p>
            <h2 className="mt-2 text-2xl">Quanto costa</h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Per un bagno di 5-6 mq i range di mercato indicativi vanno da circa 8.000 a 18.000 €
              in Lombardia. La variabile che pesa di più è lo stato dell'impianto idraulico, non la metratura.
            </p>
            <Link to="/quanto-costa-ristrutturare-bagno" className="mt-5 inline-block text-sm text-gold-deep underline underline-offset-4 hover:text-ink">Guida completa ai costi</Link>
          </div>
        </div>
      </section>

      {/* PREVENTIVO */}
      <section className="section border-t border-line">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:gap-16">
          <SectionHead
            eyebrow="Preventivo"
            title="Cosa deve contenere un preventivo confrontabile"
            lede="Un preventivo di tre righe non è più economico: è meno definito. Queste sono le voci che devono comparire, sempre."
          />
          <CheckList items={quoteChecklist} />
        </div>
      </section>

      {/* GARANZIE */}
      <section className="section">
        <div className="container-x">
          <div className="card bg-sand/50">
            <p className="eyebrow">Garanzie</p>
            <h2 className="mt-2 text-2xl">Cosa copriamo dopo la consegna</h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-ink-soft">
              <strong className="text-ink">Contenuto da completare.</strong> Durata e perimetro della
              garanzia su lavorazioni e materiali vanno dichiarati per iscritto dall'azienda prima della
              pubblicazione. Nessuna durata viene indicata su questo sito finché non è confermata:
              una garanzia dichiarata e non mantenuta vale meno di una garanzia non dichiarata.
            </p>
          </div>
        </div>
      </section>

      {/* SERVIZI CORRELATI */}
      <section className="section border-t border-line">
        <div className="container-x">
          <SectionHead eyebrow="Interventi specifici" title="Non sempre serve rifare tutto" lede="Alcuni interventi mirati risolvono il problema con tempi e costi molto inferiori." />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link key={s.slug} to={`/servizi/${s.slug}`} className="card transition-colors hover:border-gold">
                <h3 className="text-lg">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.answer.split(". ")[0]}.</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="container-x">
        <RelatedLinks
          title="Dove operiamo"
          links={cities.map((c) => ({ label: `Ristrutturazione bagno ${c.preposition}`, href: `/ristrutturazione-bagno-${c.slug}` }))}
        />
      </div>

      <FaqList items={pillarFaqs.map((f) => ({ q: f.q, a: f.a }))} />
      <CtaSection cta="Richiedi il preventivo" />
    </Layout>
  );
}
