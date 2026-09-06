import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, CalendarCheck, UserCheck, FileText } from "lucide-react";
import { Seo } from "@/components/Seo";
import { Layout } from "@/components/Layout";
import { SectionHead, FaqList, CtaSection, AnswerBlock } from "@/components/Ui";
import { site, abs } from "@/data/site";
import { graph, baseNodes, webPage, service, faqPage } from "@/lib/schema";
import { method } from "@/data/method";
import { services } from "@/data/services";
import { cities } from "@/data/cities";
import { faqs } from "@/data/faqs";
import { costBySize, costsDisclaimer } from "@/data/costs";

const homeFaqs = faqs.filter((f) =>
  ["Quanto costa rifare un bagno a Milano?", "Quanto tempo serve per rifare un bagno?", "Posso vivere in casa durante i lavori?", "In quali zone operate?", "Offrite un servizio chiavi in mano?", "Chi coordina idraulico, elettricista e muratore?"].includes(f.q)
);

const problems = [
  "Più artigiani da coordinare, nessuno che risponda del risultato",
  "Preventivi generici che si riaprono a cantiere aperto",
  "Date promesse a voce e mai messe per iscritto",
  "Imprevisti che diventano automaticamente un costo del cliente",
];

const pillarIcons = [UserCheck, FileText, CalendarCheck, ShieldCheck];

export default function HomePage() {
  const schema = graph(
    ...baseNodes(),
    webPage({
      url: abs("/"),
      name: `${site.brand} — Ristrutturazione bagno chiavi in mano a Milano`,
      description: "Ristrutturazione bagno chiavi in mano a Milano, Monza, Lodi e in Lombardia.",
    }),
    service({
      name: "Ristrutturazione bagno chiavi in mano",
      description:
        "Ristrutturazione completa del bagno con un unico referente: progettazione, demolizione, impianti, massetto, impermeabilizzazione, posa, sanitari e consegna.",
      url: abs("/ristrutturazione-bagno"),
    }),
    faqPage(homeFaqs.map((f) => ({ q: f.q, a: f.a })))
  );

  return (
    <Layout>
      <Seo
        title="Ristrutturazione Bagno a Milano Chiavi in Mano | Bagni Milano"
        description="Ristrutturazione bagno chiavi in mano a Milano, Monza, Lodi e in Lombardia. Un unico referente, preventivo chiuso prima della demolizione, date scritte in contratto."
        path="/"
        schema={schema}
        answer="Bagni Milano ristruttura bagni chiavi in mano a Milano, Monza, Lodi e in Lombardia con un unico referente, preventivo chiuso e date in contratto. Una ristrutturazione completa richiede in media 10-15 giorni lavorativi."
      />

      {/* HERO */}
      <section className="border-b border-line bg-travertine/40">
        <div className="container-x grid gap-10 py-16 sm:py-24 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <div className="animate-fade-up">
            <p className="eyebrow">Milano · Monza · Lodi · Lombardia</p>
            <h1 className="mt-3">Ristrutturazione bagno a Milano, chiavi in mano</h1>
            <p className="lede mt-5 max-w-xl">
              Progettiamo, coordiniamo e realizziamo il tuo nuovo bagno occupandoci di tutto:
              un unico referente, un preventivo chiuso prima della demolizione e le date di
              consegna scritte in contratto.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/preventivo" className="btn-brass" data-cta="hero-quote">
                Richiedi un sopralluogo <ArrowRight size={18} aria-hidden />
              </Link>
              <Link to="/metodo" className="btn-ghost">Scopri il {method.name}</Link>
            </div>
            <ul className="mt-9 grid gap-x-6 gap-y-3 text-sm text-ink-soft sm:grid-cols-2">
              <li className="flex gap-2"><UserCheck size={17} className="mt-0.5 text-brass" aria-hidden />Un solo referente dall'inizio alla fine</li>
              <li className="flex gap-2"><FileText size={17} className="mt-0.5 text-brass" aria-hidden />Preventivo dettagliato voce per voce</li>
              <li className="flex gap-2"><CalendarCheck size={17} className="mt-0.5 text-brass" aria-hidden />Date di inizio e consegna in contratto</li>
              <li className="flex gap-2"><ShieldCheck size={17} className="mt-0.5 text-brass" aria-hidden />Smaltimento in discarica autorizzata</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-line bg-white p-7 sm:p-8">
            <p className="eyebrow">In breve</p>
            <p className="mt-3 font-display text-xl leading-snug text-ink">
              Una ristrutturazione bagno completa richiede in media 10-15 giorni lavorativi di cantiere.
            </p>
            <p className="mt-3 text-ink-soft leading-relaxed">
              Comprende demolizione e smaltimento, impianto idraulico ed elettrico, massetto e
              impermeabilizzazione, posa di pavimento e rivestimento, sanitari, rubinetteria,
              tinteggiatura e consegna con collaudo.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/quanto-tempo-ristrutturare-bagno" className="text-sm text-brass-dark underline underline-offset-4 hover:text-ink">Tempi fase per fase</Link>
              <span className="text-line" aria-hidden>·</span>
              <Link to="/quanto-costa-ristrutturare-bagno" className="text-sm text-brass-dark underline underline-offset-4 hover:text-ink">Quanto costa</Link>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="section">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:gap-16">
          <SectionHead
            eyebrow="Il problema"
            title="Rifare il bagno non è difficile. Farlo gestire a cinque persone diverse, sì."
            lede="Quasi tutti i problemi di una ristrutturazione bagno nascono nello stesso punto: nessuno risponde dell'insieme."
          />
          <ul className="space-y-4">
            {problems.map((p) => (
              <li key={p} className="card flex gap-4">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brass" aria-hidden />
                <span className="text-ink-soft">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SOLUZIONE + METODO */}
      <section className="section border-y border-line bg-travertine/40">
        <div className="container-x">
          <SectionHead eyebrow="La soluzione" title={`Il ${method.name}`} lede={method.promise} center />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {method.pillars.map((p, i) => {
              const Icon = pillarIcons[i] ?? UserCheck;
              return (
                <div key={p.title} className="card">
                  <Icon size={22} className="text-brass" aria-hidden />
                  <h3 className="mt-4 text-lg">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.text}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-10 text-center">
            <Link to="/metodo" className="btn-primary">Le 12 fasi del metodo <ArrowRight size={18} aria-hidden /></Link>
          </div>
        </div>
      </section>

      {/* SERVIZI */}
      <section className="section">
        <div className="container-x">
          <SectionHead
            eyebrow="Servizi"
            title="Cosa possiamo fare per il tuo bagno"
            lede="Dalla ristrutturazione completa agli interventi mirati, con lo stesso metodo di lavoro."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <Link to="/ristrutturazione-bagno" className="card group border-brass/40 bg-travertine/40 transition-colors hover:border-brass">
              <p className="eyebrow">Servizio principale</p>
              <h3 className="mt-2 text-xl">Ristrutturazione bagno completa</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                Progetto, demolizione, impianti, posa, sanitari e finiture. Tutto dentro un unico contratto.
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brass-dark">
                Vai alla guida <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" aria-hidden />
              </span>
            </Link>
            {services.slice(0, 5).map((s) => (
              <Link key={s.slug} to={`/servizi/${s.slug}`} className="card group transition-colors hover:border-brass">
                <h3 className="text-lg">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{s.answer.split(". ")[0]}.</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brass-dark">
                  Scopri <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" aria-hidden />
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <Link to="/servizi" className="text-sm text-brass-dark underline underline-offset-4 hover:text-ink">Tutti i servizi</Link>
          </div>
        </div>
      </section>

      {/* ZONE SERVITE */}
      <section className="section border-y border-line bg-travertine/40">
        <div className="container-x">
          <SectionHead eyebrow="Zone servite" title="Dove lavoriamo" lede="Copertura continuativa su Milano e Città metropolitana, Monza e Brianza, Lodi e Lodigiano." />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {cities.map((c) => (
              <Link key={c.slug} to={`/ristrutturazione-bagno-${c.slug}`} className="card group transition-colors hover:border-brass">
                <h3 className="text-lg">Ristrutturazione bagno {c.preposition}</h3>
                <p className="mt-2 text-sm text-ink-muted">{c.zones.slice(0, 4).join(" · ")}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brass-dark">
                  Apri <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" aria-hidden />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* COSTI */}
      <section className="section">
        <div className="container-x">
          <SectionHead eyebrow="Costi" title="Quanto costa rifare un bagno" lede="Un ordine di grandezza per orientarsi, prima ancora del sopralluogo." />
          <AnswerBlock>
            <p>
              Rifare un bagno completo di 5-6 mq costa indicativamente fra 8.000 e 18.000 € in
              Lombardia, impianti inclusi. La variabile che pesa di più non è la metratura ma lo
              stato dell'impianto idraulico esistente.
            </p>
          </AnswerBlock>
          <div className="mt-2 overflow-x-auto">
            <table className="w-full min-w-[520px] border-collapse text-sm">
              <caption className="sr-only">Range indicativi di costo per metratura</caption>
              <thead>
                <tr>
                  <th scope="col" className="border border-line bg-travertine p-3 text-left font-semibold">Metratura</th>
                  <th scope="col" className="border border-line bg-travertine p-3 text-left font-semibold">Range indicativo</th>
                  <th scope="col" className="border border-line bg-travertine p-3 text-left font-semibold">Note</th>
                </tr>
              </thead>
              <tbody>
                {costBySize.map((r) => (
                  <tr key={r.label}>
                    <th scope="row" className="border border-line p-3 text-left font-medium">{r.label}</th>
                    <td className="border border-line p-3 whitespace-nowrap">{r.min.toLocaleString("it-IT")} – {r.max.toLocaleString("it-IT")} €</td>
                    <td className="border border-line p-3 text-ink-soft">{r.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs leading-relaxed text-ink-muted">{costsDisclaimer}</p>
          <div className="mt-8">
            <Link to="/quanto-costa-ristrutturare-bagno" className="btn-primary">Guida completa ai costi <ArrowRight size={18} aria-hidden /></Link>
          </div>
        </div>
      </section>

      {/* PROGETTI */}
      <section className="section border-t border-line">
        <div className="container-x">
          <SectionHead eyebrow="Progetti" title="Lavori realizzati" lede="Ogni scheda progetto riporta situazione iniziale, lavorazioni eseguite, materiali e durata reale del cantiere." />
          <div className="mt-8 card bg-travertine/50">
            <p className="text-sm leading-relaxed text-ink-soft">
              <strong className="text-ink">Sezione in preparazione.</strong> Le schede progetto vengono
              pubblicate solo quando dispongono di dati reali completi — località, metratura, lavorazioni,
              durata e fotografie prima/dopo del cantiere. Nessun case study viene pubblicato con dati ricostruiti.
            </p>
            <Link to="/progetti" className="mt-4 inline-block text-sm text-brass-dark underline underline-offset-4 hover:text-ink">
              Vai alla pagina progetti
            </Link>
          </div>
        </div>
      </section>

      <FaqList items={homeFaqs.map((f) => ({ q: f.q, a: f.a }))} />

      <CtaSection
        title="Raccontaci com'è il tuo bagno oggi"
        text="Mandaci due foto e la metratura approssimativa: ti diciamo cosa comporta l'intervento e fissiamo un sopralluogo."
        cta="Richiedi un sopralluogo"
      />
    </Layout>
  );
}
