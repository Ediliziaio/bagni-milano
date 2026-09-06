import { useParams, Navigate, Link } from "react-router-dom";
import { Seo } from "@/components/Seo";
import { Layout } from "@/components/Layout";
import { Breadcrumbs, CtaSection } from "@/components/Ui";
import { abs } from "@/data/site";
import { graph, baseNodes, webPage, breadcrumb } from "@/lib/schema";
import { getCategory, blogCategories } from "@/data/blog-categories";
import { articlesByCategory } from "@/data/articles";

export default function BlogCategoryPage() {
  const { categorySlug = "" } = useParams();
  const cat = getCategory(categorySlug);
  if (!cat) return <Navigate to="/404" replace />;

  const path = `/blog/categoria/${cat.slug}`;
  const list = articlesByCategory(cat.slug);

  const schema = graph(
    ...baseNodes(),
    webPage({ url: abs(path), name: cat.title, description: cat.description, type: "CollectionPage" }),
    breadcrumb([
      { name: "Home", url: abs("/") },
      { name: "Blog", url: abs("/blog") },
      { name: cat.name, url: abs(path) },
    ])
  );

  return (
    <Layout>
      <Seo title={cat.metaTitle} description={cat.metaDescription} path={path} schema={schema} />
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Blog", href: "/blog" }, { name: cat.name }]} />

      <section className="container-x pt-8">
        <p className="eyebrow">Categoria</p>
        <h1 className="mt-3 max-w-3xl">{cat.title}</h1>
        <p className="lede mt-5 max-w-2xl">{cat.description}</p>
        <p className="mt-6">
          <Link to={cat.supports} className="text-brass-dark underline underline-offset-4 hover:text-ink">
            Vai alla pagina di riferimento →
          </Link>
        </p>
      </section>

      <section className="section">
        <div className="container-x">
          {list.length === 0 ? (
            <div className="card bg-travertine/50 max-w-2xl">
              <p className="leading-relaxed text-ink-soft">
                Questa categoria è in preparazione. Pubblichiamo una guida solo quando è completa:
                nessun contenuto di riempimento.
              </p>
              <Link to="/blog" className="mt-4 inline-block text-sm text-brass-dark underline underline-offset-4 hover:text-ink">Torna al blog</Link>
            </div>
          ) : (
            <ul className="divide-y divide-line border-y border-line">
              {list.map((a) => (
                <li key={a.slug}>
                  <Link to={`/blog/${a.slug}`} className="group block py-6">
                    <p className="text-xs uppercase tracking-wider text-brass-dark">{a.readingTime}</p>
                    <h2 className="mt-2 text-xl transition-colors group-hover:text-brass-dark">{a.title}</h2>
                    <p className="mt-2 max-w-3xl leading-relaxed text-ink-soft">{a.excerpt}</p>
                  </Link>
                </li>
              ))}
            </ul>
          )}

          <nav aria-label="Altre categorie" className="mt-12">
            <p className="eyebrow">Altre categorie</p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {blogCategories.filter((c) => c.slug !== cat.slug).map((c) => (
                <Link key={c.slug} to={`/blog/categoria/${c.slug}`} className="rounded-full border border-line bg-white px-4 py-2 text-sm text-ink-soft transition-colors hover:border-brass hover:text-brass-dark">
                  {c.name}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </section>

      <CtaSection />
    </Layout>
  );
}
