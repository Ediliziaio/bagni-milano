import { Link } from "react-router-dom";
import { Seo } from "@/components/Seo";
import { Layout } from "@/components/Layout";
import { AnswerBlock, Breadcrumbs, CtaSection, FaqList, SectionHead } from "@/components/Ui";
import { Reveal } from "@/components/Reveal";
import { Img } from "@/components/Media";
import { abs } from "@/data/site";
import { graph, baseNodes, webPage, howTo, faqPage, breadcrumb } from "@/lib/schema";
import { method, macroPhases } from "@/data/method";
import { workDays, timelineAnswer } from "@/data/timeline";

const PATH = "/processo";

/**
 * Distinta da /metodo per intento, non per contenuto ripetuto:
 *  - /metodo   → perché lavoriamo così, i quattro principi, differenziazione (commercial)
 *  - /processo → cosa succede concretamente, fase per fase, cosa serve dal cliente (informational)
 * Le due pagine si linkano a vicenda e non condividono keyword primaria.
 */
const processoFaqs = [
  { q: "Quante fasi ha una ristrutturazione bagno?", a: "Il processo di Bagni Milano è articolato in 12 fasi raggruppate in quattro momenti: progetto, preventivo e materiali, cantiere, consegna. Le prime sette avvengono prima che qualcuno entri in casa." },
  { q: "Quanto tempo passa dal primo contatto all'inizio dei lavori?", a: "In media 4-6 settimane: 1-2 per sopralluogo e progetto, 1 per il preventivo, 2-3 per la scelta e la consegna dei materiali. È il tempo che evita i fermi cantiere." },
  { q: "Cosa devo fare io durante i lavori?", a: "Molto poco. Le decisioni si concentrano nelle fasi 4, 5 e 6, cioè prima dell'apertura del cantiere. Durante i lavori serve solo garantire l'accesso all'immobile." },
  { q: "Posso cambiare idea durante il cantiere?", a: "Sì, ma ogni variante viene quantificata e approvata per iscritto prima di essere eseguita. È una tutela reciproca: evita sorprese in fattura e lavorazioni non concordate." },
  { q: "Cosa succede se emerge un imprevisto?", a: "Viene comunicato subito, con la soluzione tecnica e l'eventuale impatto economico messi per iscritto prima di procedere. Un sopralluogo accurato ne intercetta la maggior parte già in fase 2." },
];

export default function ProcessoPage() {
  const schema = graph(
    ...baseNodes(),
    webPage({ url: abs(PATH), name: "Il processo, fase per fase", description: "Le 12 fasi di una ristrutturazione bagno: cosa succede, quanto dura, cosa produce e cosa serve dal cliente." }),
    howTo({
      name: "Le 12 fasi di una ristrutturazione bagno",
      description: "Processo completo dal primo contatto alla consegna, con durata ed esito di ogni fase.",
      steps: method.steps.map((s) => ({ name: s.name, text: s.text })),
    }),
    faqPage(processoFaqs),
    breadcrumb([{ name: "Home", url: abs("/") }, { name: "Processo", url: abs(PATH) }])
  );

  return (
    <Layout>
      <Seo
        title="Le Fasi di una Ristrutturazione Bagno | Bagni Milano"
        description="Le 12 fasi di una ristrutturazione bagno: cosa succede in ciascuna, quanto dura, cosa produce e cosa serve da te. Dal primo contatto alla consegna."
        path={PATH}
        schema={schema}
        answer="Una ristrutturazione bagno si svolge in 12 fasi raggruppate in quattro momenti: progetto, preventivo e materiali, cantiere, consegna. Le prime sette avvengono prima che il cantiere apra e occupano 4-6 settimane; il cantiere vero e proprio dura 10-15 giorni lavorativi."
      />
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Processo" }]} />

      <section className="container-x pt-8">
        <p className="eyebrow">Il processo</p>
        <h1 className="mt-3 max-w-3xl">Cosa succede, fase per fase</h1>
        <p className="lede mt-5 max-w-2xl">
          Dodici fasi, dal primo contatto alla consegna. Per ciascuna trovi cosa facciamo,
          quanto dura, cosa produce e — soprattutto — cosa serve da te.
        </p>
        <AnswerBlock question="Come si svolge una ristrutturazione bagno?">
          <p>
            Si svolge in 12 fasi raggruppate in quattro momenti: progetto, preventivo e materiali,
            cantiere, consegna. Le prime sette avvengono prima che qualcuno entri in casa e occupano
            4-6 settimane. Il cantiere dura 10-15 giorni lavorativi.
          </p>
        </AnswerBlock>
      </section>

      {/* I QUATTRO MOMENTI */}
      <section className="on-dark section">
        <div className="container-x">
          <Reveal>
            <SectionHead eyebrow="Panoramica" title="I quattro momenti" center />
          </Reveal>
          <ol className="mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:grid lg:grid-cols-4 lg:overflow-visible lg:pb-0">
            {macroPhases.map((m, i) => (
              <Reveal as="li" key={m.n} delay={i * 90} className="w-[78vw] shrink-0 snap-start sm:w-[52vw] lg:w-auto">
                <div className="flex h-full flex-col border-t-2 border-gold pt-6">
                  <p className="font-display text-4xl text-gold/40">{String(m.n).padStart(2, "0")}</p>
                  <h3 className="mt-3 text-xl">{m.name}</h3>
                  <p className="mt-1 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-gold">{m.range} · {m.duration}</p>
                  <p className="mt-4 text-sm leading-relaxed text-cream/65">{m.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
          <p className="mt-2 text-xs text-cream/40 lg:hidden">Scorri per vedere tutti i momenti →</p>
        </div>
      </section>

      {/* LE 12 FASI IN DETTAGLIO */}
      <section className="section">
        <div className="container-x">
          <SectionHead
            eyebrow="In dettaglio"
            title="Le 12 fasi"
            lede="Per ogni fase: cosa facciamo, quanto dura, cosa ne esce e cosa serve da te. La colonna che conta di più è l'ultima."
          />

          <div className="mt-14 space-y-4">
            {method.steps.map((s, i) => {
              const macro = macroPhases.find((m) => (m.steps as readonly number[]).includes(s.n));
              const isFirstOfMacro = macro && macro.steps[0] === s.n;
              return (
                <div key={s.n}>
                  {isFirstOfMacro && (
                    <p className="mb-4 mt-10 border-b border-line pb-2 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-gold-deep first:mt-0">
                      {macro!.name}
                    </p>
                  )}
                  <Reveal delay={(i % 4) * 60} className="card grid gap-5 sm:grid-cols-[auto_1fr] sm:gap-7">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold-deep/40 font-display text-sm text-gold-deep" aria-hidden>
                      {String(s.n).padStart(2, "0")}
                    </span>
                    <div>
                      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                        <h3 className="text-lg">{s.name}</h3>
                        <span className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-ink-muted">{s.duration}</span>
                      </div>
                      <p className="mt-2.5 leading-relaxed text-ink-soft">{s.text}</p>

                      <dl className="mt-5 grid gap-4 border-t border-line pt-4 sm:grid-cols-2">
                        <div>
                          <dt className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-ink-muted">Cosa ne esce</dt>
                          <dd className="mt-1.5 text-sm text-ink-soft">{s.output}</dd>
                        </div>
                        <div>
                          <dt className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-gold-deep">Cosa serve da te</dt>
                          <dd className="mt-1.5 text-sm text-ink-soft">{s.clientAction}</dd>
                        </div>
                      </dl>
                    </div>
                  </Reveal>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* IL CANTIERE GIORNO PER GIORNO */}
      <section className="on-dark section">
        <div className="container-x">
          <Reveal>
            <SectionHead eyebrow="Il cantiere" title="Giorno per giorno" lede={timelineAnswer} />
          </Reveal>
          <ol className="mt-12 space-y-4">
            {workDays.map((w, i) => (
              <Reveal as="li" key={w.day} delay={i * 60} className="card-dark sm:flex sm:items-start sm:gap-7">
                <div className="shrink-0 sm:w-44">
                  <p className="font-display text-lg text-gold">{w.day}</p>
                  {w.noisy && (
                    <p className="mt-2 inline-block border border-gold/40 px-2 py-0.5 text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-gold">
                      Fase rumorosa
                    </p>
                  )}
                </div>
                <div className="mt-3 sm:mt-0">
                  <h3 className="text-lg">{w.phase}</h3>
                  <p className="mt-1.5 leading-relaxed text-cream/65">{w.detail}</p>
                </div>
              </Reveal>
            ))}
          </ol>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              { id: "cantiere-demolizione", t: "Giorni 1-2" },
              { id: "cantiere-impianti", t: "Giorni 3-5" },
              { id: "cantiere-impermeabilizzazione", t: "Giorni 5-7" },
            ].map((x, i) => (
              <Reveal as="figure" key={x.id} delay={i * 90}>
                <Img id={x.id} ratio="3 / 2" />
                <figcaption className="mt-3 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-gold">{x.t}</figcaption>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* COLLEGAMENTO A METODO */}
      <section className="section">
        <div className="container-x">
          <div className="card max-w-3xl !bg-sand">
            <p className="eyebrow">Processo e metodo</p>
            <h2 className="mt-2 text-2xl">Questa pagina spiega il «cosa». Il «perché» è altrove</h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Le fasi descritte qui sono la parte operativa. I quattro principi che le tengono
              insieme — referente unico, preventivo chiuso, date in contratto, squadra coordinata —
              sono il {method.name}, e spiegano perché il processo è costruito così e non altrimenti.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/metodo" className="btn-ink">Il {method.name}</Link>
              <Link to="/quanto-tempo-ristrutturare-bagno" className="btn-outline">Quanto tempo serve</Link>
            </div>
          </div>
        </div>
      </section>

      <FaqList items={processoFaqs} title="Domande sul processo" />
      <CtaSection title="Partiamo dalla fase 1" text="Mandaci metratura, comune e due foto: in 24-48 ore ti diciamo se il progetto rientra in quello che sappiamo fare bene." cta="Inizia da qui" />
    </Layout>
  );
}
