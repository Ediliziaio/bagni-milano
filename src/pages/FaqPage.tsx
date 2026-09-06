import { Seo } from "@/components/Seo";
import { Layout } from "@/components/Layout";
import { Breadcrumbs, CtaSection, FaqList } from "@/components/Ui";
import { abs } from "@/data/site";
import { graph, baseNodes, webPage, faqPage, breadcrumb } from "@/lib/schema";
import { faqs, faqTopics, faqsByTopic } from "@/data/faqs";

const PATH = "/faq";

export default function FaqPage() {
  const schema = graph(
    ...baseNodes(),
    webPage({ url: abs(PATH), name: "Domande frequenti", description: "Le domande più frequenti sulla ristrutturazione del bagno, con risposte dirette." }),
    faqPage(faqs.map((f) => ({ q: f.q, a: f.a }))),
    breadcrumb([{ name: "Home", url: abs("/") }, { name: "FAQ", url: abs(PATH) }])
  );

  return (
    <Layout>
      <Seo
        title="Domande Frequenti sulla Ristrutturazione del Bagno | Bagni Milano"
        description="Costi, tempi, permessi, condominio, zone servite e garanzie: le risposte alle domande più frequenti sulla ristrutturazione del bagno."
        path={PATH}
        schema={schema}
      />
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "FAQ" }]} />

      <section className="container-x pt-8">
        <p className="eyebrow">FAQ</p>
        <h1 className="mt-3 max-w-3xl">Domande frequenti</h1>
        <p className="lede mt-5 max-w-2xl">
          Le domande che ci vengono fatte più spesso in sopralluogo, con risposte dirette.
          Dove non abbiamo un dato confermato, lo diciamo.
        </p>
        <nav aria-label="Argomenti" className="mt-8 flex flex-wrap gap-2.5">
          {faqTopics.map((t) => (
            <a key={t.key} href={`#${t.key}`} className="rounded-full border border-line bg-white px-4 py-2 text-sm text-ink-soft transition-colors hover:border-gold hover:text-gold-deep">
              {t.label}
            </a>
          ))}
        </nav>
      </section>

      {faqTopics.map((t) => (
        <div key={t.key} id={t.key} className="scroll-mt-20 border-t border-line">
          <FaqList items={faqsByTopic(t.key).map((f) => ({ q: f.q, a: f.a }))} title={t.label} />
        </div>
      ))}

      <CtaSection title="Non hai trovato la risposta?" text="Scrivici la tua domanda: rispondiamo direttamente e, se è ricorrente, la aggiungiamo qui." cta="Fai una domanda" />
    </Layout>
  );
}
