import { Link } from "react-router-dom";
import { Seo } from "@/components/Seo";
import { Layout } from "@/components/Layout";
import { Breadcrumbs, CtaSection, SectionHead } from "@/components/Ui";
import { abs } from "@/data/site";
import { graph, baseNodes, webPage, breadcrumb } from "@/lib/schema";
import { publishedProjects, projects } from "@/data/projects";
import { BeforeAfter, Img } from "@/components/Media";
import { Reveal } from "@/components/Reveal";
import { beforeAfterGroups } from "@/data/images";

const PATH = "/progetti";

export default function ProgettiPage() {
  const schema = graph(
    ...baseNodes(),
    webPage({ url: abs(PATH), name: "Progetti realizzati", description: "Case study di ristrutturazioni bagno realizzate a Milano e in Lombardia.", type: "CollectionPage" }),
    breadcrumb([{ name: "Home", url: abs("/") }, { name: "Progetti", url: abs(PATH) }])
  );

  return (
    <Layout>
      <Seo
        title="Progetti Realizzati: Ristrutturazioni Bagno | Bagni Milano"
        description="Case study di ristrutturazioni bagno realizzate a Milano e in Lombardia: situazione iniziale, lavorazioni eseguite, materiali, durata e risultato."
        path={PATH}
        schema={schema}
      />
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Progetti" }]} />

      <section className="container-x pt-8">
        <p className="eyebrow">Progetti</p>
        <h1 className="mt-3 max-w-3xl">Lavori realizzati</h1>
        <p className="lede mt-5 max-w-2xl">
          Ogni scheda progetto riporta località, metratura, situazione iniziale, lavorazioni eseguite,
          materiali, durata reale del cantiere e fotografie prima/dopo.
        </p>
      </section>

      {/* TRASFORMAZIONI — comparatore prima/dopo su fondo scuro */}
      <section className="on-dark section">
        <div className="container-x">
          <SectionHead
            eyebrow="Prima · Dopo"
            title="Trasformazioni"
            lede="Ogni coppia è scattata dalla stessa posizione, con la stessa focale e la stessa luce. È l'unico modo perché il confronto significhi qualcosa."
            center
          />
          <div className="mt-14 grid gap-10 sm:grid-cols-2">
            {[
              { g: "milano-centro", t: "Bagno stretto con vasca", c: "Vasca sostituita da doccia walk-in, mobile sospeso e specchio retroilluminato." },
              { g: "walkin", t: "Da vasca a doccia a filo pavimento", c: "Eliminato lo scavalcamento: più sicurezza e più spazio di manovra." },
              { g: "padronale", t: "Bagno padronale con doppio lavabo", c: "Rivestimento e mobile sostituiti integralmente." },
              { g: "navigli", t: "Bagno anni Settanta", c: "Pavimento a motivi e mobile in legno scuro: rifacimento completo." },
              { g: "porta-nuova", t: "Bagno compatto", c: "Sanitari sospesi e doccia in nicchia al posto della vasca." },
              { g: "brera", t: "Bagno stretto e alto", c: "Riorganizzazione dei sanitari e finiture contemporanee." },
              { g: "famiglia", t: "Bagno di famiglia", c: "Vasca sostituita, nuovo impianto e rivestimento." },
              { g: "ospiti", t: "Bagno di servizio", c: "Rinnovo completo in pochi metri quadri." },
            ].map((x, i) => (
              <Reveal key={x.g} delay={(i % 2) * 90}>
                <BeforeAfter group={x.g} title={x.t} caption={x.c} />
              </Reveal>
            ))}
          </div>
          <p className="mt-12 text-center text-sm leading-relaxed text-cream/45">
            {beforeAfterGroups.length} trasformazioni. Le schede progetto complete — con metratura,
            lavorazioni, materiali e durata reale del cantiere — vengono pubblicate quando i dati
            sono verificati.
          </p>
        </div>
      </section>

      {/* SCHEDE PROGETTO */}
      <section className="section">
        <div className="container-x">
          {publishedProjects.length === 0 ? (
            <>
              <SectionHead
                eyebrow="In lavorazione"
                title="Schede pronte per la pubblicazione"
                lede="Abbiamo scelto di non pubblicare case study incompleti. Una scheda è utile — per chi legge e per i motori di ricerca — solo con dati reali: metratura effettiva, lavorazioni eseguite, durata del cantiere e fotografie."
              />
              <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {projects.map((p) => (
                  <li key={p.slug}>
                    <Img id="art-progettazione" ratio="4 / 3" />
                    <p className="mt-3 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-gold-deep">{p.locality}</p>
                    <h3 className="mt-1.5 text-lg">{p.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{p.before}</p>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {publishedProjects.map((p) => (
                <li key={p.slug}>
                  <Link to={`/progetti/${p.slug}`} className="group block">
                    <Img id="art-progettazione" ratio="4 / 3" />
                    <p className="mt-3 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-gold-deep">{p.locality}</p>
                    <h2 className="mt-1.5 text-lg transition-colors group-hover:text-gold-deep">{p.title}</h2>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{p.result}</p>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <CtaSection title="Il prossimo progetto può essere il tuo" cta="Richiedi un sopralluogo" />
    </Layout>
  );
}
