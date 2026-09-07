import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Seo } from "@/components/Seo";
import { Layout } from "@/components/Layout";
import { Breadcrumbs, SectionHead } from "@/components/Ui";
import { abs, site, areaServed, show, isPending } from "@/data/site";
import { graph, baseNodes, webPage, breadcrumb } from "@/lib/schema";

const PATH = "/contatti";

export default function ContattiPage() {
  const schema = graph(
    ...baseNodes(),
    webPage({ url: abs(PATH), name: "Contatti", description: "Contatti di Bagni Milano: telefono, email e aree servite.", type: "ContactPage" }),
    breadcrumb([{ name: "Home", url: abs("/") }, { name: "Contatti", url: abs(PATH) }])
  );

  return (
    <Layout>
      <Seo
        title="Contatti | Bagni Milano"
        description="Contatta Bagni Milano per la ristrutturazione del tuo bagno a Milano, Monza, Lodi e in Lombardia. Telefono, email e aree servite."
        path={PATH}
        schema={schema}
      />
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Contatti" }]} />

      <section className="container-x pt-8 pb-16">
        <p className="eyebrow">Contatti</p>
        <h1 className="mt-3">Come raggiungerci</h1>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="card">
            <SectionHead title="Recapiti" />
            <ul className="mt-6 space-y-4">
              <li className="flex gap-3">
                <Phone size={18} className="mt-0.5 shrink-0 text-gold-deep" aria-hidden />
                <a href={`tel:${site.telephoneE164}`} className="text-gold-deep underline underline-offset-4 hover:text-ink" data-cta="contact-call">{site.telephone}</a>
              </li>
              <li className="flex gap-3">
                <MessageCircle size={18} className="mt-0.5 shrink-0 text-gold-deep" aria-hidden />
                <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-gold-deep underline underline-offset-4 hover:text-ink" data-cta="contact-whatsapp">WhatsApp</a>
              </li>
              {!isPending(site.email) && (
                <li className="flex gap-3">
                  <Mail size={18} className="mt-0.5 shrink-0 text-gold-deep" aria-hidden />
                  <a href={`mailto:${site.email}`} className="text-gold-deep underline underline-offset-4 hover:text-ink">{site.email}</a>
                </li>
              )}
              <li className="flex gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-gold-deep" aria-hidden />
                <span className="text-ink-soft">
                  {isPending(site.address.street) ? `${site.address.locality} e provincia` : `${site.address.street} — ${site.address.postalCode} ${site.address.locality} (${site.address.region})`}
                </span>
              </li>
            </ul>
            <p className="mt-6 text-xs leading-relaxed text-ink-muted">
              Il modo più rapido per avere una risposta è il telefono o WhatsApp: rispondiamo
              negli orari di ufficio, dal lunedì al venerdì.
            </p>
            <Link to="/preventivo" className="btn-gold mt-8">Richiedi un preventivo</Link>
          </div>

          <div className="card">
            <SectionHead title="Dove operiamo" />
            <ul className="mt-6 space-y-2.5">
              {areaServed.map((a) => (
                <li key={a.name} className="flex gap-3 text-ink-soft">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden />
                  {a.name}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-ink-soft">
              Milano e Città metropolitana, Monza e Brianza e il Lodigiano sono coperti in modo
              continuativo. Per le altre province lombarde confermiamo al primo contatto.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
