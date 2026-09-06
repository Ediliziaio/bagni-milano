import { Link } from "react-router-dom";
import { Seo } from "@/components/Seo";
import { Layout } from "@/components/Layout";
import { Breadcrumbs, CtaSection, SectionHead } from "@/components/Ui";
import { abs } from "@/data/site";
import { graph, baseNodes, webPage, breadcrumb } from "@/lib/schema";
import { services } from "@/data/services";

const PATH = "/servizi";

export default function ServiziPage() {
  const schema = graph(
    ...baseNodes(),
    webPage({ url: abs(PATH), name: "Servizi", description: "Tutti gli interventi sul bagno: ristrutturazione completa e interventi mirati." }),
    {
      "@type": "ItemList",
      itemListElement: services.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: s.title,
        url: abs(`/servizi/${s.slug}`),
      })),
    },
    breadcrumb([{ name: "Home", url: abs("/") }, { name: "Servizi", url: abs(PATH) }])
  );

  return (
    <Layout>
      <Seo
        title="Servizi: Ristrutturazione e Interventi sul Bagno | Bagni Milano"
        description="I servizi di Bagni Milano: ristrutturazione completa, bagno chiavi in mano, vasca in doccia, bagno piccolo, condominio e accessibilità."
        path={PATH}
        schema={schema}
      />
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Servizi" }]} />

      <section className="container-x pt-8">
        <p className="eyebrow">Servizi</p>
        <h1 className="mt-3 max-w-3xl">Cosa possiamo fare per il tuo bagno</h1>
        <p className="lede mt-5 max-w-2xl">
          Dalla ristrutturazione completa agli interventi mirati. Se il problema si risolve senza
          rifare tutto, lo diciamo.
        </p>
      </section>

      <section className="section">
        <div className="container-x">
          <Link to="/ristrutturazione-bagno" className="card block border-brass/50 bg-travertine/40 transition-colors hover:border-brass">
            <p className="eyebrow">Servizio principale</p>
            <h2 className="mt-2 text-2xl">Ristrutturazione bagno chiavi in mano</h2>
            <p className="mt-3 max-w-2xl leading-relaxed text-ink-soft">
              Demolizione, smaltimento, impianto idraulico ed elettrico, massetto, impermeabilizzazione,
              posa, sanitari, rubinetteria, tinteggiatura e consegna con collaudo. Un unico contratto,
              un unico referente.
            </p>
          </Link>

          <SectionHead eyebrow="Interventi specifici" title="Quando serve un intervento mirato" lede="Ogni pagina spiega cosa comporta l'intervento, quanto dura e quando invece conviene rifare tutto." />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link key={s.slug} to={`/servizi/${s.slug}`} className="card transition-colors hover:border-brass">
                <h3 className="text-lg">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{s.answer}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </Layout>
  );
}
