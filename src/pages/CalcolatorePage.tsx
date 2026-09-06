import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Seo } from "@/components/Seo";
import { Layout } from "@/components/Layout";
import { Breadcrumbs, FaqList, SectionHead } from "@/components/Ui";
import { abs } from "@/data/site";
import { graph, baseNodes, webPage, faqPage, breadcrumb } from "@/lib/schema";
import { sizes, systems, finishes, extrasList, breakdown, estimate } from "@/data/estimator";
import { costsDisclaimer } from "@/data/costs";
import { cn } from "@/lib/utils";

const PATH = "/calcolatore-costo-bagno";
const eur = (n: number) => n.toLocaleString("it-IT");

const calcFaqs = [
  { q: "Quanto è affidabile questa stima?", a: "È un ordine di grandezza costruito su range di mercato lombardi, non un preventivo. Serve a capire se il progetto rientra nel budget disponibile prima di investire tempo in un sopralluogo. Lo scostamento tipico rispetto al preventivo finale dipende soprattutto dallo stato reale degli impianti." },
  { q: "Perché il risultato è un intervallo e non un numero?", a: "Perché a parità di metratura due bagni possono differire di diverse migliaia di euro: contano lo stato dell'impianto idraulico, la posizione dei sanitari e il livello delle finiture. Un numero singolo darebbe una precisione che non esiste." },
  { q: "Il preventivo definitivo può essere più alto?", a: "Dopo il sopralluogo il preventivo è chiuso e dettagliato voce per voce. Può risultare sopra o sotto questa stima, perché tiene conto delle condizioni reali dell'immobile che una simulazione non può conoscere." },
];

const Choice = <T extends string>({
  legend, options, value, onChange, hintFor,
}: {
  legend: string;
  options: { value: T; label: string; hint: string }[];
  value: T;
  onChange: (v: T) => void;
  hintFor?: string;
}) => (
  <fieldset className="border-0 p-0">
    <legend className="eyebrow mb-1">{legend}</legend>
    {hintFor && <p className="mb-4 text-sm text-ink-muted">{hintFor}</p>}
    <div className="grid gap-2.5 sm:grid-cols-2">
      {options.map((o) => (
        <label
          key={o.value}
          className={cn(
            "cursor-pointer rounded-[2px] border p-4 transition-colors",
            value === o.value ? "border-gold-deep bg-sand" : "border-line bg-cream-hi hover:border-gold-deep/50"
          )}
        >
          <input
            type="radio"
            name={legend}
            value={o.value}
            checked={value === o.value}
            onChange={() => onChange(o.value)}
            className="sr-only"
          />
          <span className="block font-medium text-ink">{o.label}</span>
          <span className="mt-1 block text-sm leading-relaxed text-ink-muted">{o.hint}</span>
        </label>
      ))}
    </div>
  </fieldset>
);

export default function CalcolatorePage() {
  const [size, setSize] = useState("m");
  const [system, setSystem] = useState("unknown");
  const [finish, setFinish] = useState("mid");
  const [extras, setExtras] = useState<string[]>([]);

  const result = useMemo(() => estimate({ size, system, finish, extras }), [size, system, finish, extras]);
  const mid = Math.round((result.min + result.max) / 2);

  const toggle = (v: string) =>
    setExtras((prev) => (prev.includes(v) ? prev.filter((x) => x !== v) : [...prev, v]));

  const schema = graph(
    ...baseNodes(),
    webPage({ url: abs(PATH), name: "Calcolatore di costo per la ristrutturazione del bagno", description: "Stima indicativa del costo di una ristrutturazione bagno in Lombardia in base a metratura, stato degli impianti e livello delle finiture." }),
    faqPage(calcFaqs),
    breadcrumb([
      { name: "Home", url: abs("/") },
      { name: "Quanto costa ristrutturare un bagno", url: abs("/quanto-costa-ristrutturare-bagno") },
      { name: "Calcolatore", url: abs(PATH) },
    ])
  );

  return (
    <Layout>
      <Seo
        title="Calcolatore Costo Ristrutturazione Bagno | Bagni Milano"
        description="Stima il costo indicativo della tua ristrutturazione bagno: metratura, stato degli impianti e livello delle finiture. Range di mercato per la Lombardia."
        path={PATH}
        schema={schema}
        answer="Il calcolatore stima il costo di una ristrutturazione bagno in Lombardia combinando metratura, stato dell'impianto idraulico e livello delle finiture. Restituisce un intervallo indicativo di mercato, non un preventivo: il prezzo definitivo si stabilisce dopo il sopralluogo."
      />
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Quanto costa", href: "/quanto-costa-ristrutturare-bagno" }, { name: "Calcolatore" }]} />

      <section className="container-x pt-8">
        <p className="eyebrow">Strumento</p>
        <h1 className="mt-3 max-w-3xl">Quanto costa il tuo bagno</h1>
        <p className="lede mt-5 max-w-2xl">
          Quattro domande per un ordine di grandezza. Serve a capire se il progetto rientra nel
          budget prima di investire tempo in un sopralluogo.
        </p>
      </section>

      <section className="section pt-10">
        <div className="container-x grid gap-10 lg:grid-cols-[1.15fr_.85fr] lg:items-start">
          <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
            <Choice legend="1. Metratura del bagno" options={sizes} value={size} onChange={setSize} />
            <Choice
              legend="2. Stato dell'impianto idraulico"
              options={systems}
              value={system}
              onChange={setSystem}
              hintFor="È la variabile che sposta di più il preventivo. Se non lo sai, scegli l'ultima opzione."
            />
            <Choice legend="3. Livello delle finiture" options={finishes} value={finish} onChange={setFinish} />

            <fieldset className="border-0 p-0">
              <legend className="eyebrow mb-4">4. Condizioni particolari</legend>
              <div className="grid gap-2.5 sm:grid-cols-2">
                {extrasList.map((o) => (
                  <label
                    key={o.value}
                    className={cn(
                      "cursor-pointer rounded-[2px] border p-4 transition-colors",
                      extras.includes(o.value) ? "border-gold-deep bg-sand" : "border-line bg-cream-hi hover:border-gold-deep/50"
                    )}
                  >
                    <input type="checkbox" checked={extras.includes(o.value)} onChange={() => toggle(o.value)} className="sr-only" />
                    <span className="block font-medium text-ink">{o.label}</span>
                    <span className="mt-1 block text-sm leading-relaxed text-ink-muted">{o.hint}</span>
                  </label>
                ))}
              </div>
            </fieldset>
          </form>

          {/* Risultato */}
          <aside className="lg:sticky lg:top-24">
            <div className="on-dark rounded-[2px] p-7 sm:p-8">
              <p className="eyebrow">Stima indicativa</p>
              <p className="mt-4 font-display text-[clamp(1.75rem,4vw,2.5rem)] leading-tight text-gold tabular-nums">
                {eur(result.min)} – {eur(result.max)} €
              </p>
              <p className="mt-2 text-sm text-cream/55">Valore centrale intorno a {eur(mid)} €, IVA esclusa.</p>

              <div className="mt-7 border-t border-line-dark pt-6">
                <p className="text-[0.75rem] sm:text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-cream/50">Ripartizione del valore centrale</p>
                <ul className="mt-4 space-y-2.5 text-sm">
                  {breakdown.map((b) => (
                    <li key={b.voice} className="flex items-baseline justify-between gap-4">
                      <span className="text-cream/70">{b.voice}</span>
                      <span className="shrink-0 tabular-nums text-cream">{eur(Math.round((mid * b.share) / 100) * 100)} €</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link to="/preventivo" className="btn-gold mt-8 w-full" data-cta="calc-quote">
                Trasforma in preventivo <ArrowRight size={16} aria-hidden />
              </Link>
              <p className="mt-4 text-xs leading-relaxed text-cream/45">
                Il preventivo reale è dettagliato voce per voce e si chiude prima della demolizione.
              </p>
            </div>

            <div className="mt-5 rounded-[2px] border border-gold-deep/40 bg-sand p-5 text-sm leading-relaxed text-ink-soft">
              <strong className="text-ink">Come leggere questo numero.</strong> {costsDisclaimer}
            </div>
          </aside>
        </div>
      </section>

      <section className="section border-t border-line">
        <div className="container-x">
          <SectionHead eyebrow="Approfondisci" title="Da dove vengono questi numeri" />
          <div className="prose-bm mt-6">
            <p>
              La stima parte dai range di mercato lombardi per metratura e applica tre correzioni:
              lo stato dell'impianto idraulico, il livello delle finiture e le condizioni di cantiere.
            </p>
            <p>
              È volutamente un intervallo. A parità di metri quadri, due bagni possono differire di
              diverse migliaia di euro solo per lo stato delle tubazioni: un numero singolo
              suggerirebbe una precisione che nessuna simulazione può avere.
            </p>
            <ul>
              <li><Link to="/quanto-costa-ristrutturare-bagno">Guida completa ai costi</Link>, con tabelle per metratura e per tipo di intervento</li>
              <li><Link to="/blog/quanto-costa-rifare-un-bagno">Come è composto il prezzo di un bagno</Link></li>
              <li><Link to="/quanto-tempo-ristrutturare-bagno">Quanto tempo serve</Link></li>
            </ul>
          </div>
        </div>
      </section>

      <FaqList items={calcFaqs} title="Domande sul calcolatore" />
    </Layout>
  );
}
