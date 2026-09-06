import { Seo } from "@/components/Seo";
import { Layout } from "@/components/Layout";
import { Breadcrumbs } from "@/components/Ui";
import { abs, site } from "@/data/site";
import { graph, baseNodes, webPage } from "@/lib/schema";

/**
 * Le informative legali devono essere redatte o validate da un professionista.
 * Non vengono generati testi legali fittizi: la pagina esiste, è noindex,
 * e dichiara esplicitamente che il testo definitivo va inserito.
 */
export default function LegalPage({ kind }: { kind: "privacy" | "cookie" }) {
  const isPrivacy = kind === "privacy";
  const path = isPrivacy ? "/privacy-policy" : "/cookie-policy";
  const title = isPrivacy ? "Informativa Privacy" : "Cookie Policy";

  return (
    <Layout>
      <Seo
        title={`${title} | ${site.brand}`}
        description={`${title} di ${site.brand}.`}
        path={path}
        noindex
        schema={graph(...baseNodes(), webPage({ url: abs(path), name: title, description: title }))}
      />
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: title }]} />

      <article className="container-x pt-8 pb-20">
        <h1>{title}</h1>
        <div className="prose-bm mt-8">
          <div className="answer-block">
            <p>Testo da inserire prima del go-live.</p>
            <p>
              {isPrivacy
                ? "L'informativa privacy deve essere redatta sui trattamenti realmente effettuati (form di contatto, analytics, eventuali pixel pubblicitari, hosting) e indicare titolare, finalità, basi giuridiche, periodo di conservazione e diritti dell'interessato."
                : "La cookie policy deve elencare i cookie e le tecnologie di tracciamento effettivamente installati, con finalità, durata e terze parti coinvolte, e va accompagnata da un banner di consenso conforme."}
            </p>
            <p>
              Non generiamo testi legali di riempimento: un'informativa non aderente ai trattamenti reali
              è peggio di un'informativa assente, perché dichiara il falso. La pagina è impostata come
              <code> noindex</code> finché non è completa.
            </p>
          </div>

          <h2>Dati da raccogliere per la redazione</h2>
          <ul>
            <li>Ragione sociale completa, sede legale e partita IVA del titolare</li>
            <li>Email e recapito del titolare (o del DPO, se nominato)</li>
            <li>Strumenti di analytics e advertising effettivamente installati</li>
            <li>Destinazione dei lead raccolti dal form (CRM, provider email, funzione serverless)</li>
            <li>Provider di hosting e sua ubicazione</li>
            <li>Eventuali trasferimenti di dati extra-UE</li>
          </ul>
        </div>
      </article>
    </Layout>
  );
}
