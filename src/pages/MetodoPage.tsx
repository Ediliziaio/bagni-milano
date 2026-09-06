import { Seo } from "@/components/Seo";
import { Layout } from "@/components/Layout";
import { AnswerBlock, Breadcrumbs, CtaSection, SectionHead } from "@/components/Ui";
import { abs } from "@/data/site";
import { graph, baseNodes, webPage, howTo, breadcrumb } from "@/lib/schema";
import { method } from "@/data/method";
import { Img } from "@/components/Media";
import { PhaseOverview } from "@/components/Phases";
import { Reveal } from "@/components/Reveal";

const PATH = "/metodo";

export default function MetodoPage() {
  const schema = graph(
    ...baseNodes(),
    webPage({ url: abs(PATH), name: `${method.name} — come lavoriamo`, description: method.promise }),
    howTo({ name: method.name, description: method.promise, steps: method.steps.map((s) => ({ name: s.name, text: s.text })) }),
    breadcrumb([{ name: "Home", url: abs("/") }, { name: "Metodo", url: abs(PATH) }])
  );

  return (
    <Layout>
      <Seo
        title={`${method.name}: Come Lavoriamo in 12 Fasi | Bagni Milano`}
        description="Il Metodo Bagno Certo di Bagni Milano: 12 fasi dal primo contatto alla consegna, con referente unico, preventivo chiuso e date scritte in contratto."
        path={PATH}
        schema={schema}
        answer={method.promise}
      />
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Metodo" }]} />

      <section className="container-x pt-8">
        <p className="eyebrow">Come lavoriamo</p>
        <h1 className="mt-3 max-w-3xl">{method.name}</h1>
        <p className="lede mt-5 max-w-2xl">{method.claim}</p>
        <AnswerBlock question={`Che cos'è il ${method.name}?`}>
          <p>{method.promise}</p>
        </AnswerBlock>
      </section>

      <PhaseOverview dark />

      <section className="section">
        <div className="container-x">
          <SectionHead eyebrow="I quattro principi" title="Su cosa si regge il metodo" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {method.pillars.map((p) => (
              <div key={p.title} className="card">
                <h3 className="text-lg">{p.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-soft">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-sand">
        <div className="container-x">
          <SectionHead eyebrow="Le 12 fasi" title="Dal primo contatto alla consegna" lede="Ogni fase ha un esito verificabile. Non si passa alla successiva finché la precedente non è chiusa." />
          <ol className="mt-12 space-y-8 border-l border-line pl-8 sm:pl-12">
            {method.steps.map((s) => (
              <Reveal as="li" key={s.n} className="relative">
                <span
                  className="absolute -left-[2.9rem] top-0.5 flex h-8 w-8 items-center justify-center rounded-full border border-gold-deep/40 bg-cream font-display text-xs text-gold-deep sm:-left-[3.9rem]"
                  aria-hidden
                >
                  {s.n}
                </span>
                <h3 className="text-lg">{s.name}</h3>
                <p className="mt-1.5 max-w-2xl leading-relaxed text-ink-soft">{s.text}</p>
                <p className="mt-2 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-gold-deep">Durata indicativa: {s.duration}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <SectionHead
            eyebrow="Il cantiere"
            title="Le lavorazioni che non si vedono"
            lede="Impianti e impermeabilizzazione finiscono sotto il rivestimento. Sono anche le due fasi che decidono se il bagno terrà nel tempo: per questo le fotografiamo."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              { id: "cantiere-demolizione", t: "Fase 8 — Demolizione", d: "Protezioni sui percorsi e smaltimento con formulario." },
              { id: "cantiere-impianti", t: "Fase 9 — Impianti", d: "Nuove linee in traccia, prova di tenuta prima di richiudere." },
              { id: "cantiere-impermeabilizzazione", t: "Fase 10 — Impermeabilizzazione", d: "Guaina liquida e nastro di rinforzo sugli angoli." },
            ].map((x) => (
              <figure key={x.id}>
                <Img id={x.id} ratio="3 / 2" />
                <figcaption className="mt-3">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-gold-deep">{x.t}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{x.d}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <div className="card max-w-3xl">
            <p className="eyebrow">Perché lo abbiamo scritto</p>
            <h2 className="mt-2 text-2xl">Un metodo esiste per essere verificato</h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Dichiarare un metodo significa accettare di essere misurati su di esso. Se una fase salta,
              il cliente se ne accorge — ed è esattamente il punto. Le imprese che non scrivono il proprio
              processo non lo fanno per riservatezza: lo fanno perché un processo scritto è un impegno.
            </p>
          </div>
        </div>
      </section>

      <CtaSection title="Vuoi vedere il metodo applicato al tuo bagno?" text="Partiamo dal sopralluogo tecnico: è la fase due, e da lì in poi ogni passaggio è definito." cta="Prenota il sopralluogo" />
    </Layout>
  );
}
