import { Link } from "react-router-dom";
import { method, macroPhases } from "@/data/method";
import { Reveal } from "./Reveal";

/**
 * Le 4 macro-fasi. Su desktop una fascia in quattro colonne collegate da una
 * linea; su mobile un carosello con scroll-snap, perché quattro schede impilate
 * occuperebbero due schermate senza far percepire la sequenza.
 */
export const PhaseOverview = ({ dark = true }: { dark?: boolean }) => (
  <section className={dark ? "on-dark section" : "section"} aria-labelledby="fasi-title">
    <div className="container-x">
      <Reveal>
        <p className="eyebrow">Come funziona</p>
        <h2 id="fasi-title" className="mt-3 max-w-2xl">Dal primo contatto alla consegna, in quattro momenti</h2>
        <p className={`mt-5 max-w-2xl leading-relaxed ${dark ? "text-cream/70" : "text-ink-soft"}`}>
          Le 12 fasi del {method.name} raggruppate. Ogni momento si chiude con un esito
          verificabile: non si passa al successivo finché il precedente non è concluso.
        </p>
      </Reveal>

      {/* Traccia: griglia su desktop, scorrimento con snap su mobile */}
      <ol
        className="mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4
                   [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
                   lg:grid lg:grid-cols-4 lg:gap-6 lg:overflow-visible lg:pb-0"
      >
        {macroPhases.map((m, i) => (
          <Reveal
            as="li"
            key={m.n}
            delay={i * 90}
            className="relative w-[80vw] shrink-0 snap-start sm:w-[58vw] lg:w-auto"
          >
            {/* Linea di collegamento fra le fasi, solo desktop */}
            {i < macroPhases.length - 1 && (
              <span
                className={`absolute left-[calc(50%+2.2rem)] top-5 hidden h-px w-[calc(100%-4.4rem)] lg:block ${
                  dark ? "bg-line-dark" : "bg-line"
                }`}
                aria-hidden
              />
            )}

            <span
              className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full border font-display text-sm ${
                dark ? "border-gold/50 bg-ink text-gold" : "border-gold-deep/40 bg-cream text-gold-deep"
              }`}
              aria-hidden
            >
              {m.n}
            </span>

            <h3 className="mt-5 text-xl">{m.name}</h3>
            <p className={`mt-1 text-[0.65rem] font-semibold uppercase tracking-[0.16em] ${dark ? "text-gold" : "text-gold-deep"}`}>
              {m.range} · {m.duration}
            </p>
            <p className={`mt-3 text-sm leading-relaxed ${dark ? "text-cream/65" : "text-ink-soft"}`}>{m.text}</p>

            <ul className={`mt-4 space-y-1.5 text-sm ${dark ? "text-cream/50" : "text-ink-muted"}`}>
              {m.steps.map((n) => {
                const step = method.steps.find((s) => s.n === n);
                return step ? (
                  <li key={n} className="flex gap-2">
                    <span className={dark ? "text-gold/60" : "text-gold-deep/60"} aria-hidden>{String(n).padStart(2, "0")}</span>
                    {step.name}
                  </li>
                ) : null;
              })}
            </ul>
          </Reveal>
        ))}
      </ol>

      <p className={`mt-2 text-xs lg:hidden ${dark ? "text-cream/40" : "text-ink-muted"}`}>
        Scorri per vedere tutte le fasi →
      </p>

      <Reveal className="mt-12">
        <Link to="/metodo" className={dark ? "btn-gold" : "btn-ink"}>
          Le 12 fasi in dettaglio
        </Link>
      </Reveal>
    </div>
  </section>
);
