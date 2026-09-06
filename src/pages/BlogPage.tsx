import { Link } from "react-router-dom";
import { Seo } from "@/components/Seo";
import { Layout } from "@/components/Layout";
import { Breadcrumbs, CtaSection, SectionHead } from "@/components/Ui";
import { abs } from "@/data/site";
import { graph, baseNodes, webPage, breadcrumb } from "@/lib/schema";
import { blogCategories } from "@/data/blog-categories";
import { articles, articlesByCategory } from "@/data/articles";

const PATH = "/blog";

export default function BlogPage() {
  const schema = graph(
    ...baseNodes(),
    webPage({ url: abs(PATH), name: "Blog", description: "Guide su costi, progettazione, materiali, problemi e normative della ristrutturazione bagno.", type: "CollectionPage" }),
    {
      "@type": "Blog",
      "@id": `${abs(PATH)}#blog`,
      name: "Blog Bagni Milano",
      url: abs(PATH),
      blogPost: articles.map((a) => ({ "@type": "BlogPosting", headline: a.title, url: abs(`/blog/${a.slug}`), datePublished: a.datePublished })),
    },
    breadcrumb([{ name: "Home", url: abs("/") }, { name: "Blog", url: abs(PATH) }])
  );

  return (
    <Layout>
      <Seo
        title="Blog: Guide sulla Ristrutturazione del Bagno | Bagni Milano"
        description="Guide pratiche sulla ristrutturazione del bagno: costi, progettazione, materiali, problemi ricorrenti, normative e specificità della Lombardia."
        path={PATH}
        schema={schema}
      />
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Blog" }]} />

      <section className="container-x pt-8">
        <p className="eyebrow">Blog</p>
        <h1 className="mt-3 max-w-3xl">Guide sulla ristrutturazione del bagno</h1>
        <p className="lede mt-5 max-w-2xl">
          Risposte concrete alle domande che ci vengono fatte in sopralluogo. Ogni guida apre con
          una risposta diretta, poi entra nel dettaglio.
        </p>
      </section>

      {/* HUB CATEGORIE */}
      <section className="section">
        <div className="container-x">
          <SectionHead eyebrow="Categorie" title="Da dove vuoi partire" />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {blogCategories.map((c) => {
              const count = articlesByCategory(c.slug).length;
              return (
                <Link key={c.slug} to={`/blog/categoria/${c.slug}`} className="card transition-colors hover:border-gold">
                  <h3 className="text-lg">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{c.description}</p>
                  <p className="mt-3 text-xs uppercase tracking-wider text-ink-muted">
                    {count === 0 ? "In preparazione" : `${count} ${count === 1 ? "guida" : "guide"}`}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* TUTTI GLI ARTICOLI */}
      <section className="section border-t border-line">
        <div className="container-x">
          <SectionHead eyebrow="Tutte le guide" title="Ultime pubblicazioni" />
          <ul className="mt-8 divide-y divide-line border-y border-line">
            {articles.map((a) => (
              <li key={a.slug}>
                <Link to={`/blog/${a.slug}`} className="group block py-6">
                  <p className="text-xs uppercase tracking-wider text-gold-deep">
                    {blogCategories.find((c) => c.slug === a.category)?.name} · {a.readingTime}
                  </p>
                  <h3 className="mt-2 text-xl transition-colors group-hover:text-gold-deep">{a.title}</h3>
                  <p className="mt-2 max-w-3xl leading-relaxed text-ink-soft">{a.excerpt}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaSection title="Hai una domanda che non trovi qui?" text="Scrivicela: se è una domanda ricorrente diventa una guida, e intanto ti rispondiamo direttamente." cta="Scrivici" />
    </Layout>
  );
}
