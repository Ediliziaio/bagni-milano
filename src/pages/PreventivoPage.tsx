import { FormEvent, useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Seo } from "@/components/Seo";
import { Img } from "@/components/Media";
import { Layout } from "@/components/Layout";
import { Breadcrumbs, CheckList, SectionHead } from "@/components/Ui";
import { abs, site } from "@/data/site";
import { graph, baseNodes, webPage, breadcrumb } from "@/lib/schema";
import { method } from "@/data/method";

const PATH = "/preventivo";

/**
 * ⚠️  ENDPOINT DA CONFIGURARE.
 * Impostare VITE_LEAD_ENDPOINT con l'URL a cui inviare i lead
 * (CRM, Formspree, funzione serverless...). Finché non è configurato il form
 * NON finge di inviare: mostra i contatti diretti.
 */
const ENDPOINT = import.meta.env.VITE_LEAD_ENDPOINT as string | undefined;

type Status = "idle" | "sending" | "ok" | "error" | "unconfigured";

const field = "mt-1.5 w-full rounded-xl border border-line bg-white px-4 py-3 text-ink placeholder:text-ink-muted/70 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30";

export default function PreventivoPage() {
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!ENDPOINT) {
      setStatus("unconfigured");
      return;
    }
    setStatus("sending");
    try {
      const data = Object.fromEntries(new FormData(e.currentTarget).entries());
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setStatus(res.ok ? "ok" : "error");
      if (res.ok) e.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  };

  const schema = graph(
    ...baseNodes(),
    webPage({ url: abs(PATH), name: "Richiedi un preventivo", description: "Richiedi un sopralluogo e un preventivo dettagliato per la ristrutturazione del tuo bagno.", type: "ContactPage" }),
    breadcrumb([{ name: "Home", url: abs("/") }, { name: "Preventivo", url: abs(PATH) }])
  );

  return (
    <Layout>
      <Seo
        title="Richiedi un Preventivo per il Tuo Bagno | Bagni Milano"
        description="Richiedi un sopralluogo tecnico e un preventivo dettagliato per la ristrutturazione del bagno a Milano, Monza, Lodi e in Lombardia."
        path={PATH}
        schema={schema}
      />
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Preventivo" }]} />

      <section className="container-x pt-8 pb-16">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_.85fr]">
          <div>
            <p className="eyebrow">Preventivo</p>
            <h1 className="mt-3">Raccontaci com'è il tuo bagno oggi</h1>
            <p className="lede mt-5 max-w-xl">
              Più dettagli ci dai ora, più preciso sarà il primo orientamento. Il preventivo definitivo
              arriva dopo il sopralluogo tecnico: è la fase due del {method.name}.
            </p>

            <form onSubmit={onSubmit} className="mt-10 space-y-5" noValidate={false}>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="nome" className="text-sm font-medium text-ink">Nome e cognome *</label>
                  <input id="nome" name="nome" required autoComplete="name" className={field} />
                </div>
                <div>
                  <label htmlFor="telefono" className="text-sm font-medium text-ink">Telefono *</label>
                  <input id="telefono" name="telefono" type="tel" required autoComplete="tel" className={field} />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="text-sm font-medium text-ink">Email</label>
                  <input id="email" name="email" type="email" autoComplete="email" className={field} />
                </div>
                <div>
                  <label htmlFor="comune" className="text-sm font-medium text-ink">Comune dell'immobile *</label>
                  <input id="comune" name="comune" required autoComplete="address-level2" className={field} placeholder="Es. Milano, Monza, Lodi" />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="mq" className="text-sm font-medium text-ink">Metratura approssimativa</label>
                  <select id="mq" name="mq" className={field} defaultValue="">
                    <option value="" disabled>Seleziona</option>
                    <option>Fino a 4 mq</option>
                    <option>5-6 mq</option>
                    <option>7-8 mq</option>
                    <option>Oltre 9 mq</option>
                    <option>Non lo so</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="intervento" className="text-sm font-medium text-ink">Tipo di intervento</label>
                  <select id="intervento" name="intervento" className={field} defaultValue="">
                    <option value="" disabled>Seleziona</option>
                    <option>Ristrutturazione completa</option>
                    <option>Trasformazione vasca in doccia</option>
                    <option>Rifacimento doccia</option>
                    <option>Rinnovo senza demolizione</option>
                    <option>Bagno accessibile</option>
                    <option>Non lo so ancora</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="messaggio" className="text-sm font-medium text-ink">Raccontaci il tuo bagno</label>
                <textarea id="messaggio" name="messaggio" rows={5} className={field} placeholder="Anno dell'immobile, condominio o casa indipendente, problemi noti (perdite, muffa), cosa vorresti ottenere." />
              </div>

              <div className="flex items-start gap-3">
                <input id="privacy" name="privacy" type="checkbox" required className="mt-1 h-4 w-4 accent-[hsl(var(--gold))]" />
                <label htmlFor="privacy" className="text-sm leading-relaxed text-ink-soft">
                  Ho letto l'<a href="/privacy-policy" className="text-gold-deep underline underline-offset-2">informativa privacy</a> e acconsento al trattamento dei dati per essere ricontattato. *
                </label>
              </div>

              <button type="submit" className="btn-gold w-full sm:w-auto" disabled={status === "sending"} data-cta="form-submit">
                {status === "sending" ? "Invio in corso..." : "Invia la richiesta"}
              </button>

              <div aria-live="polite" role="status">
                {status === "ok" && (
                  <p className="rounded-xl border border-gold/40 bg-gold/5 p-4 text-sm text-ink">
                    Richiesta inviata. Ti ricontattiamo entro 24-48 ore lavorative.
                  </p>
                )}
                {status === "error" && (
                  <p className="rounded-xl border border-line bg-sand/60 p-4 text-sm text-ink">
                    Invio non riuscito. Chiamaci direttamente o riprova fra qualche minuto.
                  </p>
                )}
                {status === "unconfigured" && (
                  <p className="rounded-xl border border-gold/40 bg-gold/5 p-4 text-sm text-ink">
                    <strong>Form non ancora collegato.</strong> L'endpoint di destinazione dei lead
                    (<code>VITE_LEAD_ENDPOINT</code>) non è configurato: la richiesta non è stata inviata.
                    Contattaci direttamente con i riferimenti qui accanto.
                  </p>
                )}
              </div>
            </form>
          </div>

          <aside className="space-y-6">
            <Img id="pag-preventivo" ratio="4 / 3" />
            <div className="card">
              <SectionHead eyebrow="Contatti" title="Parla con noi" />
              <ul className="mt-6 space-y-4 text-sm">
                <li className="flex gap-3">
                  <Phone size={18} className="mt-0.5 shrink-0 text-gold-deep" aria-hidden />
                  <a href={`tel:${site.telephoneE164}`} className="text-gold-deep underline underline-offset-4 hover:text-ink" data-cta="quote-call">{site.telephone}</a>
                </li>
                <li className="flex gap-3">
                  <MessageCircle size={18} className="mt-0.5 shrink-0 text-gold-deep" aria-hidden />
                  <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-gold-deep underline underline-offset-4 hover:text-ink" data-cta="quote-whatsapp">Scrivici su WhatsApp</a>
                </li>
                <li className="flex gap-3"><Mail size={18} className="mt-0.5 shrink-0 text-gold" aria-hidden /><span className="text-ink-soft">{site.email}</span></li>
                <li className="flex gap-3"><MapPin size={18} className="mt-0.5 shrink-0 text-gold" aria-hidden /><span className="text-ink-soft">{site.address.street}, {site.address.locality}</span></li>
                <li className="flex gap-3"><Clock size={18} className="mt-0.5 shrink-0 text-gold" aria-hidden /><span className="text-ink-soft">Lun-Ven 9:00-18:00</span></li>
              </ul>
            </div>

            <div className="card bg-sand/50">
              <p className="eyebrow">Cosa succede dopo</p>
              <ol className="mt-4 space-y-3 text-sm text-ink-soft">
                <li><strong className="text-ink">1.</strong> Ti ricontattiamo entro 24-48 ore lavorative.</li>
                <li><strong className="text-ink">2.</strong> Se il progetto rientra in quello che sappiamo fare bene, fissiamo il sopralluogo.</li>
                <li><strong className="text-ink">3.</strong> Ricevi progetto e preventivo dettagliato voce per voce.</li>
                <li><strong className="text-ink">4.</strong> Decidi con tutti i numeri e le date davanti.</li>
              </ol>
            </div>

            <div className="card">
              <p className="eyebrow">Cosa ci aiuta</p>
              <div className="mt-4">
                <CheckList items={["Due o tre foto del bagno attuale", "Metratura approssimativa", "Anno dell'immobile", "Problemi già noti (perdite, muffa, scarichi lenti)", "Un'idea del budget, anche larga"]} />
              </div>
            </div>
          </aside>
        </div>
      </section>
    </Layout>
  );
}
