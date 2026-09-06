import { Link } from "react-router-dom";
import { Seo } from "@/components/Seo";
import { Layout } from "@/components/Layout";
import { Breadcrumbs, CtaSection, SectionHead } from "@/components/Ui";
import { abs } from "@/data/site";
import { graph, baseNodes, webPage, breadcrumb } from "@/lib/schema";
import { blogCategories } from "@/data/blog-categories";
import { articles, articlesByCategory } from "@/data/articles";
import { Img } from "@/components/Media";
import { imageForArticle } from "@/data/images";
import { Reveal } from "@/components/Reveal";

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

      {/* IN EVIDENZA */}
      <section className="section pt-12">
        <div className="container-x">
          <Link to={`/blog/${articles[0].slug}`} className="group grid gap-8 lg:grid-cols-[1.15fr_1fr] lg:items-center">
            <Img id={imageForArticle(articles[0].slug, articles[0].category)} ratio="16 / 10" priority />
            <div>
              <p className="eyebrow">In evidenza · {blogCategories.find((c) => c.slug === articles[0].category)?.name}</p>
              <h2 className="mt-3 transition-colors group-hover:text-gold-deep">{articles[0].title}</h2>
              <p className="lede mt-4">{articles[0].excerpt}</p>
              <span className="mt-6 inline-block text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-gold-deep">
                Leggi la guida — {articles[0].readingTime}
              </span>
            </div>
          </Link>
        </div>
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
          <ul className="mt-10 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((a, i) => (
              <Reveal as="li" key={a.slug} delay={(i % 3) * 80}>
                <Link to={`/blog/${a.slug}`} className="group block">
                  <Img id={imageForArticle(a.slug, a.category)} ratio="16 / 9" />
                  <p className="mt-4 text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-gold-deep">
                    {blogCategories.find((c) => c.slug === a.category)?.name} · {a.readingTime}
                  </p>
                  <h3 className="mt-2 text-lg transition-colors group-hover:text-gold-deep">{a.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{a.excerpt}</p>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CtaSection title="Hai una domanda che non trovi qui?" text="Scrivicela: se è una domanda ricorrente diventa una guida, e intanto ti rispondiamo direttamente." cta="Scrivici" />
    </Layout>
  );
}
