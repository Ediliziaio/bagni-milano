import { Link } from "react-router-dom";
import { Seo } from "@/components/Seo";
import { Layout } from "@/components/Layout";
import { Breadcrumbs, CtaSection, SectionHead } from "@/components/Ui";
import { abs } from "@/data/site";
import { graph, baseNodes, webPage, breadcrumb } from "@/lib/schema";
import { publishedProjects, projects } from "@/data/projects";

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

      <section className="section">
        <div className="container-x">
          {publishedProjects.length === 0 ? (
            <>
              <div className="card max-w-3xl bg-travertine/50">
                <h2 className="text-2xl">Sezione in preparazione</h2>
                <p className="mt-4 leading-relaxed text-ink-soft">
                  Abbiamo scelto di non pubblicare schede progetto incomplete. Un case study è utile —
                  per chi legge e per i motori di ricerca — solo se riporta dati reali: metratura effettiva,
                  lavorazioni realmente eseguite, durata effettiva del cantiere e fotografie del lavoro.
                </p>
                <p className="mt-3 leading-relaxed text-ink-soft">
                  {projects.length} schede sono già impostate e attendono i dati di cantiere per essere pubblicate.
                </p>
              </div>

              <SectionHead
                eyebrow="In lavorazione"
                title="Progetti pronti per la pubblicazione"
                lede="Queste sono le schede già strutturate. Diventano pagine pubbliche non appena i dati sono completi."
              />
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {projects.map((p) => (
                  <li key={p.slug} className="card">
                    <p className="text-xs uppercase tracking-wider text-brass-dark">{p.locality}</p>
                    <h3 className="mt-2 text-lg">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.before}</p>
                    <p className="mt-3 text-xs uppercase tracking-wider text-ink-muted">Non ancora pubblicata</p>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {publishedProjects.map((p) => (
                <li key={p.slug}>
                  <Link to={`/progetti/${p.slug}`} className="card block transition-colors hover:border-brass">
                    <p className="text-xs uppercase tracking-wider text-brass-dark">{p.locality}</p>
                    <h2 className="mt-2 text-lg">{p.title}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.result}</p>
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
