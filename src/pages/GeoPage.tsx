import { useLocation, Link, Navigate } from "react-router-dom";
import { Seo } from "@/components/Seo";
import { Layout } from "@/components/Layout";
import { AnswerBlock, Breadcrumbs, CtaSection, FaqList, RelatedLinks, SectionHead } from "@/components/Ui";
import { abs } from "@/data/site";
import { graph, baseNodes, webPage, service, faqPage, breadcrumb } from "@/lib/schema";
import { getCity, getComune, cities, comuni } from "@/data/cities";
import { method } from "@/data/method";
import { services } from "@/data/services";
import { faqs } from "@/data/faqs";
import { Img } from "@/components/Media";
import { geoImage } from "@/data/images";

const genericFaqs = faqs.filter((f) =>
  ["Quanto tempo serve per rifare un bagno?", "Fate il sopralluogo prima del preventivo?", "Chi coordina idraulico, elettricista e muratore?"].includes(f.q)
);

export default function GeoPage() {
  // Le rotte geo sono statiche (/ristrutturazione-bagno-<slug>): lo slug si ricava dal path.
  const { pathname } = useLocation();
  const geoSlug = pathname.replace(/\/$/, "").replace("/ristrutturazione-bagno-", "");
  const city = getCity(geoSlug);
  const comune = getComune(geoSlug);
  if (!city && !comune) return <Navigate to="/404" replace />;

  const path = `/ristrutturazione-bagno-${geoSlug}`;
  const name = city ? city.name : comune!.name;
  const prep = city ? city.preposition : `a ${comune!.name}`;
  const pageFaqs = city ? city.faqs : genericFaqs.map((f) => ({ q: f.q, a: f.a }));

  const schema = graph(
    ...baseNodes(),
    webPage({
      url: abs(path),
      name: `Ristrutturazione bagno ${prep}`,
      description: city ? city.metaDescription : `Ristrutturazione bagno chiavi in mano a ${comune!.name} (${comune!.province}).`,
    }),
    service({
      name: `Ristrutturazione bagno ${prep}`,
      description: city ? city.answer : comune!.intro,
      url: abs(path),
      area: name,
    }),
    faqPage(pageFaqs),
    breadcrumb([
      { name: "Home", url: abs("/") },
      { name: "Zone servite", url: abs("/ristrutturazione-bagno-lombardia") },
      { name, url: abs(path) },
    ])
  );

  const otherGeo = [
    ...cities.filter((c) => c.slug !== geoSlug).map((c) => ({ label: `Ristrutturazione bagno ${c.preposition}`, href: `/ristrutturazione-bagno-${c.slug}` })),
    ...comuni.filter((c) => c.slug !== geoSlug).slice(0, 6).map((c) => ({ label: `Ristrutturazione bagno a ${c.name}`, href: `/ristrutturazione-bagno-${c.slug}` })),
  ];

  return (
    <Layout>
      <Seo
        title={city ? city.metaTitle : `Ristrutturazione Bagno a ${comune!.name} | Bagni Milano`}
        description={city ? city.metaDescription : `Ristrutturazione bagno chiavi in mano a ${comune!.name} (${comune!.province}): sopralluogo, progetto e preventivo chiuso. ${comune!.focus[0]}.`}
        path={path}
        schema={schema}
        answer={city ? city.answer : comune!.intro}
      />
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Zone servite", href: "/ristrutturazione-bagno-lombardia" }, { name }]} />

      <section className="container-x pt-8">
        <p className="eyebrow">{city ? `Provincia di ${city.provinceName}` : `${comune!.name} · provincia di ${comune!.provinceName}`}</p>
        <h1 className="mt-3 max-w-3xl">Ristrutturazione bagno {prep}</h1>
        <figure className="mt-8">
          <Img id={geoImage(geoSlug, city ? city.province : comune!.province)} ratio="16 / 9" priority />
        </figure>

        <AnswerBlock question={`Bagni Milano opera ${prep}?`}>
          <p>{city ? city.answer : comune!.intro}</p>
        </AnswerBlock>
      </section>

      {/* PATRIMONIO EDILIZIO — è ciò che rende la pagina non duplicata */}
      <section className="section">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          <SectionHead eyebrow="Il territorio" title={city ? `Come sono fatti i bagni ${prep}` : `Il patrimonio edilizio di ${comune!.name}`} />
          <div className="prose-bm">
            <p>{city ? city.housingStock : comune!.housingNote}</p>
            {!city && <p>{comune!.intro}</p>}
          </div>
        </div>
      </section>

      {/* PROBLEMATICHE LOCALI */}
      <section className="section border-y border-line bg-sand/40">
        <div className="container-x">
          <SectionHead
            eyebrow="Criticità ricorrenti"
            title={city ? `Cosa incontriamo più spesso ${prep}` : `Su cosa interveniamo più spesso a ${comune!.name}`}
          />
          {city ? (
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {city.localIssues.map((i) => (
                <div key={i.title} className="card">
                  <h3 className="text-lg">{i.title}</h3>
                  <p className="mt-2 leading-relaxed text-ink-soft">{i.text}</p>
                </div>
              ))}
            </div>
          ) : (
            <ul className="mt-10 grid gap-4 sm:grid-cols-3">
              {comune!.focus.map((f) => (
                <li key={f} className="card text-ink-soft">{f}</li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* ZONE + LOGISTICA */}
      {city && (
        <section className="section">
          <div className="container-x grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHead eyebrow="Copertura" title="Zone servite" />
              <ul className="mt-6 flex flex-wrap gap-2">
                {city.zones.map((z) => (
                  <li key={z} className="rounded-full border border-line bg-white px-3.5 py-1.5 text-sm text-ink-soft">{z}</li>
                ))}
              </ul>
            </div>
            <div>
              <SectionHead eyebrow="Cantiere" title="Come organizziamo i lavori" />
              <p className="mt-6 leading-relaxed text-ink-soft">{city.logistics}</p>
              <Link to="/metodo" className="mt-5 inline-block text-sm text-gold-deep underline underline-offset-4 hover:text-ink">Il {method.name}</Link>
            </div>
          </div>
        </section>
      )}

      {/* SERVIZI */}
      <section className="section border-t border-line">
        <div className="container-x">
          <SectionHead eyebrow="Servizi" title={`Cosa possiamo fare ${prep}`} />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <Link to="/ristrutturazione-bagno" className="card border-gold/40 bg-sand/40 transition-colors hover:border-gold">
              <h3 className="text-lg">Ristrutturazione completa</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">Progetto, impianti, posa e finiture con un unico referente.</p>
            </Link>
            {services.slice(0, 5).map((s) => (
              <Link key={s.slug} to={`/servizi/${s.slug}`} className="card transition-colors hover:border-gold">
                <h3 className="text-lg">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.answer.split(". ")[0]}.</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="container-x">
        <RelatedLinks title="Altre zone servite" links={otherGeo} />
      </div>

      <FaqList items={pageFaqs} title={`Domande frequenti — ${name}`} />
      <CtaSection title={`Un sopralluogo ${prep}`} text="Vieni contattato da un referente unico che seguirà il progetto fino alla consegna." cta="Richiedi il sopralluogo" />
    </Layout>
  );
}
