import { useParams, Navigate, Link } from "react-router-dom";
import { Seo } from "@/components/Seo";
import { Layout } from "@/components/Layout";
import { AnswerBlock, Breadcrumbs, CtaSection, FaqList, RelatedLinks, SectionHead } from "@/components/Ui";
import { abs } from "@/data/site";
import { graph, baseNodes, webPage, service as serviceSchema, faqPage, breadcrumb } from "@/lib/schema";
import { getService, services } from "@/data/services";
import { cities } from "@/data/cities";

export default function ServizioDetailPage() {
  const { serviceSlug = "" } = useParams();
  const s = getService(serviceSlug);
  if (!s) return <Navigate to="/404" replace />;

  const path = `/servizi/${s.slug}`;
  const schema = graph(
    ...baseNodes(),
    webPage({ url: abs(path), name: s.title, description: s.metaDescription }),
    serviceSchema({ name: s.title, description: s.answer, url: abs(path), serviceType: s.primaryKeyword }),
    faqPage(s.faqs),
    breadcrumb([
      { name: "Home", url: abs("/") },
      { name: "Servizi", url: abs("/servizi") },
      { name: s.title, url: abs(path) },
    ])
  );

  const related = s.relatedServices.map((slug) => services.find((x) => x.slug === slug)).filter(Boolean);

  return (
    <Layout>
      <Seo title={s.metaTitle} description={s.metaDescription} path={path} schema={schema} answer={s.answer} />
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Servizi", href: "/servizi" }, { name: s.title }]} />

      <section className="container-x pt-8">
        <p className="eyebrow">Servizio</p>
        <h1 className="mt-3 max-w-3xl">{s.title}</h1>
        <p className="lede mt-5 max-w-2xl">{s.intro}</p>
        <AnswerBlock question="In sintesi">
          <p>{s.answer}</p>
        </AnswerBlock>
      </section>

      {s.sections.map((sec) => (
        <section key={sec.h2} className="section border-t border-line">
          <div className="container-x">
            <SectionHead title={sec.h2} />
            <div className="mt-6 prose-bm">
              {sec.body.map((p, i) => <p key={i}>{p}</p>)}
            </div>
            {sec.list && (
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {sec.list.map((l) => (
                  <div key={l.title} className="card">
                    <h3 className="text-base">{l.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">{l.text}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      ))}

      <div className="container-x">
        <RelatedLinks
          title="Collegamenti utili"
          links={[
            { label: "Ristrutturazione bagno chiavi in mano", href: "/ristrutturazione-bagno" },
            { label: "Quanto costa ristrutturare un bagno", href: "/quanto-costa-ristrutturare-bagno" },
            { label: "Quanto tempo serve", href: "/quanto-tempo-ristrutturare-bagno" },
            ...related.map((r) => ({ label: r!.title, href: `/servizi/${r!.slug}` })),
          ]}
        />
      </div>

      <section className="section border-t border-line">
        <div className="container-x">
          <SectionHead eyebrow="Dove operiamo" title="Zone servite" />
          <div className="mt-6 flex flex-wrap gap-3">
            {cities.map((c) => (
              <Link key={c.slug} to={`/ristrutturazione-bagno-${c.slug}`} className="rounded-full border border-line bg-white px-4 py-2 text-sm text-ink-soft transition-colors hover:border-brass hover:text-brass-dark">
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FaqList items={s.faqs} />
      <CtaSection cta={s.cta} />
    </Layout>
  );
}
