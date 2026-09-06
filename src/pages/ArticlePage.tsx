import { useParams, Navigate, Link } from "react-router-dom";
import { useMemo } from "react";
import { ArrowRight } from "lucide-react";
import { Seo } from "@/components/Seo";
import { Layout } from "@/components/Layout";
import { AnswerBlock, Breadcrumbs, CtaSection, FaqList, RelatedLinks } from "@/components/Ui";
import { Reveal } from "@/components/Reveal";
import { abs, site } from "@/data/site";
import { graph, baseNodes, webPage, blogPosting, faqPage, breadcrumb } from "@/lib/schema";
import { getArticle, articles } from "@/data/articles";
import { getCategory, blogCategories } from "@/data/blog-categories";
import { withToc } from "@/lib/toc";
import { Img } from "@/components/Media";
import { imageForArticle } from "@/data/images";

export default function ArticlePage() {
  const { articleSlug = "" } = useParams();
  const a = getArticle(articleSlug);
  const parsed = useMemo(() => (a ? withToc(a.body) : { html: "", headings: [] }), [a]);
  if (!a) return <Navigate to="/404" replace />;

  const path = `/blog/${a.slug}`;
  const cat = getCategory(a.category);

  const schema = graph(
    ...baseNodes(),
    webPage({ url: abs(path), name: a.title, description: a.metaDescription }),
    blogPosting({
      headline: a.title,
      description: a.metaDescription,
      url: abs(path),
      datePublished: a.datePublished,
      dateModified: a.dateModified,
      authorName: site.brand,
      section: cat?.name,
    }),
    ...(a.faqs?.length ? [faqPage(a.faqs)] : []),
    breadcrumb([
      { name: "Home", url: abs("/") },
      { name: "Blog", url: abs("/blog") },
      ...(cat ? [{ name: cat.name, url: abs(`/blog/categoria/${cat.slug}`) }] : []),
      { name: a.title, url: abs(path) },
    ])
  );

  const related = a.related.map((s) => articles.find((x) => x.slug === s)).filter(Boolean);
  const sameCategory = articles.filter((x) => x.category === a.category && x.slug !== a.slug).slice(0, 4);

  return (
    <Layout>
      <Seo title={a.metaTitle} description={a.metaDescription} path={path} schema={schema} ogType="article" answer={a.answer} />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog" },
          ...(cat ? [{ name: cat.name, href: `/blog/categoria/${cat.slug}` }] : []),
          { name: a.title },
        ]}
      />

      {/* grid-cols-1 e min-w-0: senza, la larghezza minima delle tabelle
          risale la griglia e fa scorrere lateralmente tutta la pagina. */}
      <div className="container-x grid grid-cols-1 gap-12 pt-8 lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-16">
        <article className="min-w-0">
          <header className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3">
              {cat && (
                <Link
                  to={`/blog/categoria/${cat.slug}`}
                  className="chip rounded-[2px] border border-gold-deep/40 bg-sand px-3.5 py-2.5 text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-gold-deep transition-colors hover:bg-gold-deep hover:text-cream"
                >
                  {cat.name}
                </Link>
              )}
              <span className="text-[0.75rem] sm:text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-ink-muted">
                {a.readingTime} di lettura
              </span>
            </div>

            <h1 className="h1-article mt-5">{a.title}</h1>
            <p className="lede mt-5">{a.excerpt}</p>
            <p className="mt-5 text-sm text-ink-muted">
              <time dateTime={a.datePublished}>
                Pubblicato il {new Date(a.datePublished).toLocaleDateString("it-IT", { day: "numeric", month: "long", year: "numeric" })}
              </time>
            </p>
          </header>

          <figure className="mt-10">
            <Img id={imageForArticle(a.slug, a.category)} ratio="16 / 9" priority />
          </figure>

          <AnswerBlock question="Risposta breve">
            <p>{a.answer}</p>
          </AnswerBlock>

          {/* Indice interno: su mobile compare qui, su desktop nella colonna laterale */}
          {parsed.headings.length > 2 && (
            <nav aria-label="Indice dell'articolo" className="card my-10 !bg-sand lg:hidden">
              <p className="eyebrow">In questa guida</p>
              <ol className="mt-4 space-y-2">
                {parsed.headings.map((h, i) => (
                  <li key={h.id} className="flex gap-3 text-sm">
                    <span className="text-gold-deep tabular-nums" aria-hidden>{String(i + 1).padStart(2, "0")}</span>
                    <a href={`#${h.id}`} className="text-ink-soft underline underline-offset-4 hover:text-gold-deep">{h.text}</a>
                  </li>
                ))}
              </ol>
            </nav>
          )}

          <div className="prose-bm [&_h2]:scroll-mt-24" dangerouslySetInnerHTML={{ __html: parsed.html }} />

          <RelatedLinks title="Vai alle pagine di riferimento" links={a.internalLinks} />
        </article>

        {/* Colonna laterale: indice appiccicato + CTA contestuale */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 space-y-6">
            {parsed.headings.length > 2 && (
              <nav aria-label="Indice dell'articolo">
                <p className="eyebrow">In questa guida</p>
                <ol className="mt-4 space-y-2.5 border-l border-line pl-4">
                  {parsed.headings.map((h) => (
                    <li key={h.id}>
                      <a href={`#${h.id}`} className="block text-sm leading-snug text-ink-muted transition-colors hover:text-gold-deep">
                        {h.text}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            )}

            <div className="on-dark rounded-[2px] p-6">
              <p className="eyebrow">Il tuo bagno</p>
              <p className="mt-3 text-sm leading-relaxed text-cream/70">
                Mandaci due foto e la metratura: ti diciamo cosa comporta l'intervento.
              </p>
              <Link to="/preventivo" className="btn-gold mt-5 w-full !px-4 !text-[0.75rem] sm:text-[0.65rem]" data-cta="article-side">
                Richiedi un sopralluogo
              </Link>
            </div>
          </div>
        </aside>
      </div>

      {a.faqs && a.faqs.length > 0 && <FaqList items={a.faqs} />}

      {/* Continua a leggere */}
      {(related.length > 0 || sameCategory.length > 0) && (
        <section className="section border-t border-line">
          <div className="container-x">
            <h2 className="text-2xl">Continua a leggere</h2>
            <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[...related, ...sameCategory]
                .filter((x, i, arr) => x && arr.findIndex((y) => y!.slug === x!.slug) === i)
                .slice(0, 3)
                .map((r, i) => (
                  <Reveal as="li" key={r!.slug} delay={i * 80}>
                    <Link to={`/blog/${r!.slug}`} className="group block h-full">
                      <Img id={imageForArticle(r!.slug, r!.category)} ratio="16 / 9" />
                      <p className="mt-4 text-[0.75rem] sm:text-[0.75rem] sm:text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-gold-deep">
                        {blogCategories.find((c) => c.slug === r!.category)?.name} · {r!.readingTime}
                      </p>
                      <h3 className="mt-2 text-lg transition-colors group-hover:text-gold-deep">{r!.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-muted">{r!.excerpt}</p>
                      <span className="mt-3 inline-flex items-center gap-1.5 text-[0.75rem] sm:text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-gold-deep">
                        Leggi <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" aria-hidden />
                      </span>
                    </Link>
                  </Reveal>
                ))}
            </ul>
          </div>
        </section>
      )}

      <CtaSection />
    </Layout>
  );
}
