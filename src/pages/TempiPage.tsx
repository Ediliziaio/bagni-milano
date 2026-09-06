import { Link } from "react-router-dom";
import { Volume2 } from "lucide-react";
import { Seo } from "@/components/Seo";
import { Img } from "@/components/Media";
import { Layout } from "@/components/Layout";
import { AnswerBlock, Breadcrumbs, CtaSection, FaqList, SectionHead } from "@/components/Ui";
import { abs } from "@/data/site";
import { graph, baseNodes, webPage, faqPage, breadcrumb, howTo } from "@/lib/schema";
import { timelineAnswer, preWork, workDays, timeDrivers } from "@/data/timeline";
import { faqs } from "@/data/faqs";

const PATH = "/quanto-tempo-ristrutturare-bagno";
const timeFaqs = faqs.filter((f) => f.topic === "tempi");

export default function TempiPage() {
  const schema = graph(
    ...baseNodes(),
    webPage({ url: abs(PATH), name: "Quanto tempo serve per ristrutturare un bagno", description: "Cronoprogramma di una ristrutturazione bagno: fasi pre-cantiere e giorni di lavoro fase per fase." }),
    howTo({
      name: "Cronoprogramma di una ristrutturazione bagno",
      description: timelineAnswer,
      totalTime: "P12D",
      steps: workDays.map((w) => ({ name: `${w.day} — ${w.phase}`, text: w.detail })),
    }),
    faqPage(timeFaqs.map((f) => ({ q: f.q, a: f.a }))),
    breadcrumb([{ name: "Home", url: abs("/") }, { name: "Quanto tempo serve", url: abs(PATH) }])
  );

  return (
    <Layout>
      <Seo
        title="Quanto Tempo Serve per Rifare un Bagno | Giorno per Giorno"
        description="Quanto dura una ristrutturazione bagno: 7-12 giorni di cantiere più 2-4 settimane di preparazione. Cronoprogramma fase per fase."
        path={PATH}
        schema={schema}
        answer={timelineAnswer}
      />
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Quanto tempo serve" }]} />

      <section className="container-x pt-8">
        <p className="eyebrow">Tempi</p>
        <h1 className="mt-3 max-w-3xl">Quanto tempo serve per rifare un bagno</h1>
        <p className="lede mt-5 max-w-2xl">
          Il cantiere è la parte più corta. Quello che allunga davvero i tempi succede prima,
          e si può controllare.
        </p>
        <figure className="mt-8">
          <Img id="pag-tempi" ratio="16 / 9" priority />
        </figure>

        <AnswerBlock question="Quanto dura una ristrutturazione bagno?">
          <p>{timelineAnswer}</p>
        </AnswerBlock>
      </section>

      <section className="section">
        <div className="container-x">
          <SectionHead eyebrow="Prima del cantiere" title="Le settimane che nessuno conta" lede="È qui che si accumulano i ritardi: quasi sempre nell'attesa dei materiali." />
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse text-sm">
              <thead>
                <tr>
                  <th scope="col" className="border border-line bg-sand p-3 text-left font-semibold">Fase</th>
                  <th scope="col" className="border border-line bg-sand p-3 text-left font-semibold">Durata</th>
                  <th scope="col" className="border border-line bg-sand p-3 text-left font-semibold">Note</th>
                </tr>
              </thead>
              <tbody>
                {preWork.map((p) => (
                  <tr key={p.phase}>
                    <th scope="row" className="border border-line p-3 text-left font-medium">{p.phase}</th>
                    <td className="border border-line p-3 whitespace-nowrap">{p.duration}</td>
                    <td className="border border-line p-3 text-ink-soft">{p.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section border-y border-line bg-sand/40">
        <div className="container-x">
          <SectionHead eyebrow="Il cantiere" title="Giorno per giorno" lede="Le fasi rumorose sono due e occupano i primi 3-4 giorni. Il resto del cantiere è sostanzialmente silenzioso." />
          <ol className="mt-10 space-y-4">
            {workDays.map((w) => (
              <li key={w.day} className="card sm:flex sm:gap-6">
                <div className="shrink-0 sm:w-40">
                  <p className="font-accent text-lg text-gold-deep">{w.day}</p>
                  {w.noisy && (
                    <p className="mt-1 inline-flex items-center gap-1.5 rounded-full bg-gold/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-gold-deep">
                      <Volume2 size={12} aria-hidden /> rumorosa
                    </p>
                  )}
                </div>
                <div className="mt-3 sm:mt-0">
                  <h3 className="text-lg">{w.phase}</h3>
                  <p className="mt-1.5 leading-relaxed text-ink-soft">{w.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <SectionHead eyebrow="Ritardi" title="Cosa fa slittare i tempi" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {timeDrivers.map((d) => (
              <div key={d.title} className="card">
                <h3 className="text-lg">{d.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-soft">{d.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 card max-w-3xl bg-sand/50">
            <h2 className="text-2xl">Vivere in casa durante i lavori</h2>
            <p className="mt-3 leading-relaxed text-ink-soft">
              Nella maggior parte dei casi è possibile. Il cantiere viene confinato al bagno con protezioni
              sui percorsi, e le lavorazioni rumorose si concentrano nei primi giorni. Se il bagno è l'unico
              dell'abitazione, va messa in conto l'indisponibilità per l'intera durata del cantiere: è una
              cosa da decidere prima, non da scoprire il primo giorno.
            </p>
            <Link to="/servizi/ristrutturazione-bagno-condominio" className="mt-4 inline-block text-sm text-gold-deep underline underline-offset-4 hover:text-ink">
              Regole e orari nei condomini
            </Link>
          </div>
        </div>
      </section>

      <FaqList items={timeFaqs.map((f) => ({ q: f.q, a: f.a }))} title="Domande frequenti sui tempi" />
      <CtaSection title="Vuoi una data, non una stima?" text="Dopo il sopralluogo mettiamo per iscritto data di inizio e data di consegna." cta="Prenota il sopralluogo" />
    </Layout>
  );
}
