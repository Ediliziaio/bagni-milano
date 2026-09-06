import { ReactNode } from "react";
import { Link } from "react-router-dom";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";

/** Risposta diretta citabile. Primo blocco utile della pagina per i motori generativi. */
export const AnswerBlock = ({ question, children }: { question?: string; children: ReactNode }) => (
  <div className="answer-block my-8">
    {question && <p className="!font-display !text-lg mb-2">{question}</p>}
    <div className="space-y-2">{children}</div>
  </div>
);

export const Eyebrow = ({ children }: { children: ReactNode }) => <p className="eyebrow">{children}</p>;

export const SectionHead = ({ eyebrow, title, lede, center }: { eyebrow?: string; title: string; lede?: string; center?: boolean }) => (
  <header className={cn("max-w-3xl", center && "mx-auto text-center")}>
    {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
    <h2 className="mt-2">{title}</h2>
    {lede && <p className="lede mt-4">{lede}</p>}
  </header>
);

export const Breadcrumbs = ({ items }: { items: { name: string; href?: string }[] }) => (
  <nav aria-label="Percorso" className="container-x pt-6">
    <ol className="flex flex-wrap items-center gap-1.5 text-xs text-ink-muted">
      {items.map((it, i) => (
        <li key={it.name} className="flex items-center gap-1.5">
          {it.href ? <Link to={it.href} className="hover:text-brass-dark">{it.name}</Link> : <span className="text-ink-soft">{it.name}</span>}
          {i < items.length - 1 && <span aria-hidden>/</span>}
        </li>
      ))}
    </ol>
  </nav>
);

export const FaqList = ({ items, title = "Domande frequenti" }: { items: { q: string; a: string }[]; title?: string }) => (
  <section className="section" aria-labelledby="faq-title">
    <div className="container-x">
      <h2 id="faq-title" className="mb-8">{title}</h2>
      <Accordion.Root type="single" collapsible className="divide-y divide-line border-y border-line">
        {items.map((f, i) => (
          <Accordion.Item key={i} value={`i${i}`}>
            <Accordion.Header>
              <Accordion.Trigger className="group flex w-full items-start justify-between gap-4 py-5 text-left font-display text-lg text-ink hover:text-brass-dark">
                {f.q}
                <ChevronDown size={20} className="mt-1 shrink-0 text-brass transition-transform group-data-[state=open]:rotate-180" aria-hidden />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
              <p className="pb-5 pr-8 text-ink-soft leading-relaxed">{f.a}</p>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  </section>
);

export const CtaSection = ({
  title = "Parlaci del tuo bagno",
  text = "Sopralluogo, progetto e preventivo dettagliato. Nessun impegno.",
  cta = "Richiedi un preventivo",
}: { title?: string; text?: string; cta?: string }) => (
  <section className="section">
    <div className="container-x">
      <div className="rounded-2xl bg-ink px-6 py-12 text-center text-alabaster sm:px-12 sm:py-16">
        <h2 className="text-alabaster">{title}</h2>
        <p className="mx-auto mt-4 max-w-xl text-alabaster/75 leading-relaxed">{text}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link to="/preventivo" className="btn-brass" data-cta="section-quote">{cta}</Link>
          <Link to="/metodo" className="btn border border-alabaster/30 text-alabaster hover:bg-alabaster hover:text-ink">Come lavoriamo</Link>
        </div>
      </div>
    </div>
  </section>
);

export const CheckList = ({ items }: { items: string[] }) => (
  <ul className="space-y-3">
    {items.map((i) => (
      <li key={i} className="flex gap-3 text-ink-soft">
        <Check size={18} className="mt-1 shrink-0 text-brass" aria-hidden />
        <span>{i}</span>
      </li>
    ))}
  </ul>
);

/** Link contestuali verso money page: nucleo della strategia di internal linking. */
export const RelatedLinks = ({ title = "Approfondisci", links }: { title?: string; links: { label: string; href: string }[] }) => (
  <aside className="card my-10 bg-travertine/50" aria-labelledby="related-title">
    <p id="related-title" className="eyebrow">{title}</p>
    <ul className="mt-3 space-y-2">
      {links.map((l) => (
        <li key={l.href}>
          <Link to={l.href} className="text-brass-dark underline underline-offset-4 hover:text-ink">{l.label}</Link>
        </li>
      ))}
    </ul>
  </aside>
);
