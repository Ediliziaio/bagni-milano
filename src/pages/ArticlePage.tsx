import { useParams, Navigate, Link } from "react-router-dom";
import { Seo } from "@/components/Seo";
import { Layout } from "@/components/Layout";
import { AnswerBlock, Breadcrumbs, CtaSection, FaqList, RelatedLinks } from "@/components/Ui";
import { abs, site } from "@/data/site";
import { graph, baseNodes, webPage, blogPosting, faqPage, breadcrumb } from "@/lib/schema";
import { getArticle, articles } from "@/data/articles";
import { getCategory } from "@/data/blog-categories";

export default function ArticlePage() {
  const { articleSlug = "" } = useParams();
  const a = getArticle(articleSlug);
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

      <article className="container-x pt-8">
        <header className="max-w-3xl">
          <p className="eyebrow">{cat?.name} · {a.readingTime} di lettura</p>
          <h1 className="mt-3">{a.title}</h1>
          <p className="lede mt-5">{a.excerpt}</p>
          <p className="mt-4 text-sm text-ink-muted">
            <time dateTime={a.datePublished}>
              Pubblicato il {new Date(a.datePublished).toLocaleDateString("it-IT", { day: "numeric", month: "long", year: "numeric" })}
            </time>
          </p>
        </header>

        <AnswerBlock question="Risposta breve">
          <p>{a.answer}</p>
        </AnswerBlock>

        <div className="prose-bm" dangerouslySetInnerHTML={{ __html: a.body }} />

        <RelatedLinks title="Vai alle pagine di riferimento" links={a.internalLinks} />
      </article>

      {a.faqs && a.faqs.length > 0 && <FaqList items={a.faqs} />}

      {related.length > 0 && (
        <section className="section border-t border-line">
          <div className="container-x">
            <h2 className="text-2xl">Continua a leggere</h2>
            <ul className="mt-6 divide-y divide-line border-y border-line">
              {related.map((r) => (
                <li key={r!.slug}>
                  <Link to={`/blog/${r!.slug}`} className="group block py-5">
                    <h3 className="text-lg transition-colors group-hover:text-gold-deep">{r!.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{r!.excerpt}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <CtaSection />
    </Layout>
  );
}
