import { useParams, Navigate, Link } from "react-router-dom";
import { Seo } from "@/components/Seo";
import { Layout } from "@/components/Layout";
import { Breadcrumbs, CtaSection } from "@/components/Ui";
import { abs } from "@/data/site";
import { graph, baseNodes, webPage, projectSchema, breadcrumb } from "@/lib/schema";
import { getProject } from "@/data/projects";

export default function ProgettoDetailPage() {
  const { projectSlug = "" } = useParams();
  const p = getProject(projectSlug);
  if (!p) return <Navigate to="/404" replace />;

  const path = `/progetti/${p.slug}`;
  const schema = graph(
    ...baseNodes(),
    webPage({ url: abs(path), name: p.title, description: p.metaDescription }),
    projectSchema({ name: p.title, description: p.metaDescription, url: abs(path), locality: p.locality }),
    breadcrumb([
      { name: "Home", url: abs("/") },
      { name: "Progetti", url: abs("/progetti") },
      { name: p.title, url: abs(path) },
    ])
  );

  const rows: [string, string][] = [
    ["Località", p.locality],
    ["Tipologia", p.typology],
    ["Metratura", p.sqm],
    ["Durata cantiere", p.duration],
  ];

  return (
    <Layout>
      {/* Le schede non pubblicate restano fuori dall'indice. */}
      <Seo title={p.metaTitle} description={p.metaDescription} path={path} schema={schema} noindex={!p.published} />
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Progetti", href: "/progetti" }, { name: p.title }]} />

      <article className="container-x pt-8">
        <p className="eyebrow">{p.locality}</p>
        <h1 className="mt-3 max-w-3xl">{p.title}</h1>

        {!p.published && (
          <div className="mt-6 rounded-xl border border-gold/40 bg-gold/5 p-4 text-sm text-ink-soft">
            <strong className="text-ink">Scheda non pubblicata.</strong> Mancano dati reali di cantiere.
            La pagina è esclusa da sitemap e indicizzazione finché non è completa.
          </div>
        )}

        <dl className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {rows.map(([k, v]) => (
            <div key={k} className="card">
              <dt className="text-xs uppercase tracking-wider text-ink-muted">{k}</dt>
              <dd className="mt-1.5 text-ink">{v}</dd>
            </div>
          ))}
        </dl>

        <div className="prose-bm mt-12">
          <h2>Situazione iniziale</h2>
          <p>{p.before}</p>
          <h2>Richiesta del cliente</h2>
          <p>{p.request}</p>
          <h2>Lavorazioni eseguite</h2>
          <ul>{p.works.map((w) => <li key={w}>{w}</li>)}</ul>
          <h2>Materiali</h2>
          <ul>{p.materials.map((m) => <li key={m}>{m}</li>)}</ul>
          <h2>Risultato</h2>
          <p>{p.result}</p>
        </div>

        <p className="mt-10">
          <Link to={`/ristrutturazione-bagno-${p.citySlug}`} className="text-gold-deep underline underline-offset-4 hover:text-ink">
            Ristrutturazione bagno in zona →
          </Link>
        </p>
      </article>

      <CtaSection />
    </Layout>
  );
}
