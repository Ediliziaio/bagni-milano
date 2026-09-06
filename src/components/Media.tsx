import { getImage, getPair, pairAspect } from "@/data/images";
import { cn } from "@/lib/utils";
import { useId, useState } from "react";

/**
 * Slot immagine. Finché la foto non esiste mostra un segnaposto che dichiara
 * formato e soggetto, invece di un box vuoto o di uno stock non aziendale.
 * Quando `available` passa a true in src/data/images.ts, rende la foto reale.
 */
export const Img = ({
  id,
  className,
  priority = false,
  ratio = "4 / 3",
  bare = false,
}: {
  id: string;
  className?: string;
  /** true solo per l'immagine LCP: evita il lazy loading sull'hero. */
  priority?: boolean;
  ratio?: string;
  /** Uso come sfondo: il segnaposto resta muto, senza testo che traspare sotto l'overlay. */
  bare?: boolean;
}) => {
  const spec = getImage(id);
  if (!spec) return null;

  if (!spec.available) {
    if (bare) return <div className={cn("h-full w-full bg-ink-2", className)} aria-hidden />;
    return (
      <div className={cn("img-slot", className)} style={{ aspectRatio: ratio }} role="img" aria-label={`Immagine da produrre: ${spec.alt}`}>
        <b>Foto da produrre</b>
        <span className="font-mono text-[0.7rem]">{spec.id} · {spec.width}×{spec.height}</span>
        <span className="max-w-[38ch]">{spec.alt}</span>
      </div>
    );
  }

  return (
    <picture>
      <img
        src={`/img/${spec.id}.jpg`}
        alt={spec.alt}
        width={spec.width}
        height={spec.height}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding={priority ? "sync" : "async"}
        className={cn("h-full w-full object-cover", className)}
      />
    </picture>
  );
};

/**
 * Comparatore prima/dopo. Il cursore è un <input type="range">: si trascina
 * col mouse e si muove con le frecce da tastiera, che uno slider costruito
 * con soli eventi di puntatore non permetterebbe.
 */
export const BeforeAfter = ({
  group,
  title,
  caption,
  className,
}: {
  group: string;
  title: string;
  caption?: string;
  className?: string;
}) => {
  const [pos, setPos] = useState(50);
  const { prima, dopo } = getPair(group);
  const labelId = useId();
  if (!prima || !dopo) return null;
  const pending = !prima.available || !dopo.available;
  const ratio = pairAspect(group);

  return (
    <figure className={cn("group", className)}>
      <div className="relative overflow-hidden rounded-[2px] border border-line-dark bg-ink-2" style={{ aspectRatio: ratio }}>
        {/* Stato DOPO: livello di fondo */}
        <div className="absolute inset-0">
          <Img id={dopo.id} bare={pending} className={pending ? "!bg-gold/15" : "!h-full !border-0 !rounded-none"} ratio={ratio} />
        </div>

        {/* Stato PRIMA: ritagliato dal cursore */}
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <Img id={prima.id} bare={pending} className={pending ? "!bg-ink-2" : "!h-full !border-0 !rounded-none"} ratio={ratio} />
        </div>

        {pending && (
          <p className="pointer-events-none absolute inset-x-0 bottom-6 text-center text-[0.65rem] font-medium uppercase tracking-[0.16em] text-cream/45">
            Foto da produrre — {prima.width}×{prima.height}
          </p>
        )}

        {/* Linea di separazione */}
        <div className="pointer-events-none absolute inset-y-0 w-px bg-gold" style={{ left: `${pos}%` }} aria-hidden>
          <span className="absolute top-1/2 left-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gold bg-ink text-gold text-xs">
            ‹›
          </span>
        </div>

        <span className="pointer-events-none absolute left-3 top-3 bg-ink/85 px-2.5 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-cream" aria-hidden>
          Prima
        </span>
        <span className="pointer-events-none absolute right-3 top-3 bg-gold px-2.5 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-ink" aria-hidden>
          Dopo
        </span>

        <label htmlFor={labelId} className="sr-only">
          {title} — trascina per confrontare prima e dopo
        </label>
        <input
          id={labelId}
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
          aria-valuetext={`${pos}% dell'immagine "prima" visibile`}
        />
      </div>

      <figcaption className="mt-4">
        <p className="font-display text-lg text-cream">{title}</p>
        {caption && <p className="mt-1 text-sm leading-relaxed text-cream/60">{caption}</p>}
      </figcaption>
    </figure>
  );
};
