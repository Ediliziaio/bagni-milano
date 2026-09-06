import { Link } from "react-router-dom";
import { Seo } from "@/components/Seo";
import { Layout } from "@/components/Layout";
import { Breadcrumbs, CtaSection, SectionHead } from "@/components/Ui";
import { abs } from "@/data/site";
import { graph, baseNodes, webPage, breadcrumb } from "@/lib/schema";
import { services } from "@/data/services";
import { Img } from "@/components/Media";
import { Reveal } from "@/components/Reveal";

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
        <figure className="mt-10">
          <Img id="pag-servizi" ratio="16 / 9" priority />
        </figure>
      </section>

      <section className="section">
        <div className="container-x">
          <Link to="/ristrutturazione-bagno" className="group grid gap-8 rounded-[2px] border border-gold-deep/40 bg-sand p-6 transition-colors hover:border-gold-deep sm:p-8 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div>
              <p className="eyebrow">Servizio principale</p>
              <h2 className="mt-2 text-2xl transition-colors group-hover:text-gold-deep">Ristrutturazione bagno chiavi in mano</h2>
              <p className="mt-3 leading-relaxed text-ink-soft">
                Demolizione, smaltimento, impianto idraulico ed elettrico, massetto, impermeabilizzazione,
                posa, sanitari, rubinetteria, tinteggiatura e consegna con collaudo. Un unico contratto,
                un unico referente.
              </p>
            </div>
            <Img id="pag-ristrutturazione-bagno" ratio="16 / 9" />
          </Link>

          <SectionHead eyebrow="Interventi specifici" title="Quando serve un intervento mirato" lede="Ogni pagina spiega cosa comporta l'intervento, quanto dura e quando invece conviene rifare tutto." />
          <ul className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal as="li" key={s.slug} delay={(i % 3) * 80}>
                <Link to={`/servizi/${s.slug}`} className="group block">
                  <Img id={`srv-${s.slug}`} ratio="16 / 9" />
                  <h3 className="mt-4 text-lg transition-colors group-hover:text-gold-deep">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{s.answer}</p>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CtaSection />
    </Layout>
  );
}
