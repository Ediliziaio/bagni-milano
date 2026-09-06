import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, CalendarCheck, UserCheck, FileText } from "lucide-react";
import { Seo } from "@/components/Seo";
import { Layout } from "@/components/Layout";
import { SectionHead, FaqList, CtaSection, AnswerBlock } from "@/components/Ui";
import { Img, BeforeAfter } from "@/components/Media";
import { PhaseOverview } from "@/components/Phases";
import { Reveal } from "@/components/Reveal";
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
        description="Ristrutturazione bagno chiavi in mano a Milano, Monza, Lodi e in Lombardia. Un unico referente, preventivo chiuso e date scritte in contratto."
        path="/"
        schema={schema}
        answer="Bagni Milano ristruttura bagni chiavi in mano a Milano, Monza, Lodi e in Lombardia con un unico referente, preventivo chiuso e date in contratto. Una ristrutturazione completa richiede in media 10-15 giorni lavorativi."
      />

      {/* HERO — fascia scura a tutta pagina, come nel prototipo I Bagni Milano */}
      <section className="on-dark relative isolate overflow-hidden">
        {/* Immagine di fondo. Fino a quando non esiste, il segnaposto resta scuro
            e leggibile: il testo dell'hero non dipende dalla foto. */}
        <div className="absolute inset-0 -z-10">
          <div className="hidden h-full sm:block">
            <Img id="hero-home" priority bare ratio="16 / 9" className="!h-full !border-0 !rounded-none" />
          </div>
          <div className="h-full sm:hidden">
            <Img id="hero-home-mobile" priority bare ratio="3 / 4" className="!h-full !border-0 !rounded-none" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/75 to-ink" aria-hidden />
        </div>

        <div className="container-x flex min-h-[560px] flex-col items-center justify-center py-24 text-center sm:min-h-[640px] sm:py-32">
          <p className="eyebrow">Milano · Monza · Lodi · Lombardia</p>
          <h1 className="mt-6 max-w-4xl">Ristrutturazione bagno a Milano, chiavi in mano</h1>
          <div className="rule-gold my-8" />
          <p className="font-accent text-[clamp(1.25rem,2.6vw,1.75rem)] italic leading-snug text-cream/85 max-w-2xl">
            Progettiamo, coordiniamo e realizziamo il tuo nuovo bagno occupandoci di tutto.
          </p>
          <p className="mt-5 max-w-xl leading-relaxed text-cream/60">
            Un unico referente, un preventivo chiuso prima della demolizione e le date di
            consegna scritte in contratto.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link to="/preventivo" className="btn-gold" data-cta="hero-quote">
              Richiedi un sopralluogo <ArrowRight size={16} aria-hidden />
            </Link>
            <Link to="/metodo" className="btn-outline-light">Il {method.name}</Link>
          </div>
        </div>

        {/* Elementi di fiducia, fascia inferiore dell'hero */}
        <div className="relative border-t border-line-dark bg-ink-2/80">
          <ul className="container-x grid gap-x-8 gap-y-4 py-7 text-sm text-cream/70 sm:grid-cols-2 lg:grid-cols-4">
            <li className="flex gap-2.5"><UserCheck size={17} className="mt-0.5 shrink-0 text-gold" aria-hidden />Un solo referente</li>
            <li className="flex gap-2.5"><FileText size={17} className="mt-0.5 shrink-0 text-gold" aria-hidden />Preventivo voce per voce</li>
            <li className="flex gap-2.5"><CalendarCheck size={17} className="mt-0.5 shrink-0 text-gold" aria-hidden />Date in contratto</li>
            <li className="flex gap-2.5"><ShieldCheck size={17} className="mt-0.5 shrink-0 text-gold" aria-hidden />Smaltimento autorizzato</li>
          </ul>
        </div>
      </section>

      {/* IN BREVE — risposta diretta per l'estrazione AI */}
      <section className="section">
        <div className="container-x grid gap-8 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <SectionHead
            eyebrow="In breve"
            title="Una ristrutturazione bagno completa richiede in media 10-15 giorni lavorativi"
          />
          <div>
            <p className="leading-relaxed text-ink-soft">
              Comprende demolizione e smaltimento, impianto idraulico ed elettrico, massetto e
              impermeabilizzazione, posa di pavimento e rivestimento, sanitari, rubinetteria,
              tinteggiatura e consegna con collaudo.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
              <Link to="/quanto-tempo-ristrutturare-bagno" className="text-sm text-gold-deep underline underline-offset-4 hover:text-ink">Tempi fase per fase</Link>
              <Link to="/quanto-costa-ristrutturare-bagno" className="text-sm text-gold-deep underline underline-offset-4 hover:text-ink">Quanto costa</Link>
              <Link to="/ristrutturazione-bagno" className="text-sm text-gold-deep underline underline-offset-4 hover:text-ink">Cosa comprende</Link>
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
            {problems.map((p, i) => (
              <Reveal as="li" key={p} delay={i * 80} className="card flex gap-4">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-deep" aria-hidden />
                <span className="text-ink-soft">{p}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* SOLUZIONE + METODO */}
      <section className="on-dark section">
        <div className="container-x">
          <SectionHead eyebrow="La soluzione" title={`Il ${method.name}`} lede={method.promise} center />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {method.pillars.map((p, i) => {
              const Icon = pillarIcons[i] ?? UserCheck;
              return (
                <Reveal key={p.title} delay={i * 80} className="card">
                  <Icon size={22} className="text-gold" aria-hidden />
                  <h3 className="mt-4 text-lg">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/65">{p.text}</p>
                </Reveal>
              );
            })}
          </div>
          <div className="mt-10 text-center">
            <Link to="/metodo" className="btn-gold">Le 12 fasi del metodo <ArrowRight size={16} aria-hidden /></Link>
          </div>
        </div>
      </section>

      {/* LE FASI */}
      <PhaseOverview dark={false} />

      {/* SERVIZI */}
      <section className="section">
        <div className="container-x">
          <SectionHead
            eyebrow="Servizi"
            title="Cosa possiamo fare per il tuo bagno"
            lede="Dalla ristrutturazione completa agli interventi mirati, con lo stesso metodo di lavoro."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <Link to="/ristrutturazione-bagno" className="card group border-gold/40 bg-sand/40 transition-colors hover:border-gold">
              <p className="eyebrow">Servizio principale</p>
              <h3 className="mt-2 text-xl">Ristrutturazione bagno completa</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                Progetto, demolizione, impianti, posa, sanitari e finiture. Tutto dentro un unico contratto.
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-deep">
                Vai alla guida <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" aria-hidden />
              </span>
            </Link>
            {services.slice(0, 5).map((s) => (
              <Link key={s.slug} to={`/servizi/${s.slug}`} className="card group transition-colors hover:border-gold">
                <h3 className="text-lg">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{s.answer.split(". ")[0]}.</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-deep">
                  Scopri <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" aria-hidden />
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <Link to="/servizi" className="text-sm text-gold-deep underline underline-offset-4 hover:text-ink">Tutti i servizi</Link>
          </div>
        </div>
      </section>

      {/* ZONE SERVITE */}
      <section className="on-dark section">
        <div className="container-x">
          <SectionHead eyebrow="Zone servite" title="Dove lavoriamo" lede="Copertura continuativa su Milano e Città metropolitana, Monza e Brianza, Lodi e Lodigiano." />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {cities.map((c) => (
              <Link key={c.slug} to={`/ristrutturazione-bagno-${c.slug}`} className="card group transition-colors hover:border-gold">
                <h3 className="text-lg">Ristrutturazione bagno {c.preposition}</h3>
                <p className="mt-2 text-sm text-ink-muted">{c.zones.slice(0, 4).join(" · ")}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-deep">
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
                  <th scope="col" className="border border-line bg-sand p-3 text-left font-semibold">Metratura</th>
                  <th scope="col" className="border border-line bg-sand p-3 text-left font-semibold">Range indicativo</th>
                  <th scope="col" className="border border-line bg-sand p-3 text-left font-semibold">Note</th>
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
            <Link to="/quanto-costa-ristrutturare-bagno" className="btn-ink">Guida completa ai costi <ArrowRight size={18} aria-hidden /></Link>
          </div>
        </div>
      </section>

      {/* PRIMA / DOPO — su fondo scuro, dove il confronto si legge meglio */}
      <section className="on-dark section">
        <div className="container-x">
          <SectionHead
            eyebrow="Prima · Dopo"
            title="Trasformazioni reali"
            lede="Trascina il cursore per confrontare. Ogni coppia è scattata dalla stessa posizione, prima e dopo i lavori."
            center
          />
          <div className="mt-14 grid gap-10 sm:grid-cols-2">
            {[
              { g: "milano-centro", t: "Milano centro — bagno padronale", c: "Da rivestimento anni Ottanta a finitura contemporanea." },
              { g: "porta-nuova", t: "Porta Nuova — bagno compatto", c: "4 mq riorganizzati: doccia walk-in e mobile sospeso al posto della vasca." },
              { g: "brera", t: "Brera — bagno stretto", c: "Riorganizzazione dei sanitari in un ambiente stretto e alto." },
              { g: "navigli", t: "Navigli — rifacimento completo", c: "Bagno anni Settanta, impianto idraulico rifatto integralmente." },
            ].map((x, i) => (
              <Reveal key={x.g} delay={(i % 2) * 90}>
                <BeforeAfter group={x.g} title={x.t} caption={x.c} />
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/progetti" className="btn-outline-light">Tutte le trasformazioni</Link>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="section">
        <div className="container-x">
          <SectionHead
            eyebrow="Portfolio"
            title="Progetti realizzati"
            lede="Ogni scheda riporta località, metratura, lavorazioni eseguite, materiali e durata reale del cantiere."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { id: "progetto-porta-nuova", t: "Porta Nuova", d: "Bagno compatto, 4 mq" },
              { id: "progetto-brera", t: "Brera", d: "Bagno stretto in edificio storico" },
              { id: "progetto-navigli", t: "Navigli", d: "Rifacimento completo anni '70" },
              { id: "progetto-milano-centro", t: "Milano centro", d: "Bagno padronale" },
            ].map((x, i) => (
              <Reveal as="figure" key={x.id} delay={i * 80}>
                <Img id={x.id} ratio="4 / 3" />
                <figcaption className="mt-3">
                  <p className="font-display text-lg">{x.t}</p>
                  <p className="mt-0.5 text-sm text-ink-muted">{x.d}</p>
                </figcaption>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-sm text-ink-muted">
            Le schede progetto complete vengono pubblicate quando dispongono di dati reali di
            cantiere e delle fotografie. <Link to="/progetti" className="text-gold-deep underline underline-offset-4 hover:text-ink">Vai ai progetti</Link>
          </p>
        </div>
      </section>

      {/* FASCIA IMMAGINE */}
      <section aria-hidden className="relative h-[220px] overflow-hidden sm:h-[300px] lg:h-[380px]">
        <Img id="home-banda" ratio="3 / 1" className="!h-full !border-0 !rounded-none" />
      </section>

      {/* IL CANTIERE — le lavorazioni che non si vedono */}
      <section className="on-dark section">
        <div className="container-x">
          <Reveal>
            <SectionHead
              eyebrow="Il cantiere"
              title="Le lavorazioni che non vedrai mai"
              lede="Impianti e impermeabilizzazione finiscono sotto il rivestimento. Sono anche le due fasi che decidono se il bagno terrà nel tempo: per questo le fotografiamo e te le mostriamo."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              { id: "cantiere-demolizione", t: "Demolizione", d: "Protezioni sui percorsi, smaltimento in discarica autorizzata con formulario." },
              { id: "cantiere-impianti", t: "Impianti", d: "Nuove linee in traccia e prova di tenuta in pressione prima di richiudere." },
              { id: "cantiere-impermeabilizzazione", t: "Impermeabilizzazione", d: "Guaina liquida e nastro di rinforzo sugli angoli: è ciò che evita le infiltrazioni." },
            ].map((x, i) => (
              <Reveal as="figure" key={x.id} delay={i * 90}>
                <Img id={x.id} ratio="3 / 2" />
                <figcaption className="mt-4">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-gold">{x.t}</p>
                  <p className="mt-2 text-sm leading-relaxed text-cream/65">{x.d}</p>
                </figcaption>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12">
            <Link to="/metodo" className="btn-gold">Come lavoriamo</Link>
          </Reveal>
        </div>
      </section>

      {/* MATERIALI E CONSULENZA */}
      <section className="section">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal>
            <Img id="materiali" ratio="1 / 1" />
          </Reveal>
          <Reveal delay={90}>
            <p className="eyebrow">Materiali</p>
            <h2 className="mt-3">La scelta avviene dentro il budget, non oltre</h2>
            <p className="mt-5 leading-relaxed text-ink-soft">
              Gres, rivestimenti, sanitari e rubinetteria vengono proposti su tre fasce di prezzo,
              tutte compatibili con il preventivo già approvato. Nessuna selezione che sposta il
              totale a lavori iniziati.
            </p>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Se arrivi con materiali già scelti, ne verifichiamo la compatibilità tecnica prima
              dell'ordine: spessori, planarità richiesta e quote di posa.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/blog/categoria/materiali" className="btn-outline">Guide sui materiali</Link>
              <Link to="/preventivo" className="btn-ink">Richiedi un sopralluogo</Link>
            </div>
          </Reveal>
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
