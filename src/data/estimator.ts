/**
 * Modello del calcolatore di costo.
 *
 * ⚠️ Deriva dai RANGE DI MERCATO di costs.ts, non da un listino Bagni Milano.
 * I moltiplicatori sono coefficienti di stima dichiarati, non prezzi.
 * Quando l'azienda valida i propri valori, si aggiornano qui in un punto solo.
 */

export interface Option<T extends string> {
  value: T;
  label: string;
  hint: string;
  /** Moltiplicatore applicato al range base. */
  k: number;
}

export const sizes: Option<string>[] = [
  { value: "s", label: "3-4 mq", hint: "Bagno di servizio o secondo bagno", k: 1 },
  { value: "m", label: "5-6 mq", hint: "La metratura più diffusa a Milano", k: 1 },
  { value: "l", label: "7-8 mq", hint: "Consente doppio lavabo o vasca e doccia", k: 1 },
  { value: "xl", label: "9 mq o più", hint: "Bagno padronale", k: 1 },
];

/** Range base per metratura, allineati a costBySize. */
export const baseBySize: Record<string, [number, number]> = {
  s: [6500, 12000],
  m: [8000, 18000],
  l: [11000, 24000],
  xl: [14000, 35000],
};

export const systems: Option<string>[] = [
  { value: "full", label: "Da rifare completamente", hint: "Tubazioni datate, in ferro zincato o con perdite ricorrenti", k: 1 },
  { value: "partial", label: "Da rifare in parte", hint: "Alcune linee si conservano, altre no", k: 0.88 },
  { value: "keep", label: "Recenti, da mantenere", hint: "Multistrato o rame in buono stato, sanitari nella stessa posizione", k: 0.75 },
  { value: "unknown", label: "Non lo so", hint: "Lo verifichiamo in sopralluogo: è la variabile che pesa di più", k: 0.95 },
];

export const finishes: Option<string>[] = [
  { value: "basic", label: "Essenziali", hint: "Gres di serie, sanitari e rubinetteria di catalogo", k: 0.85 },
  { value: "mid", label: "Medie", hint: "Gres di buona fascia, sanitari sospesi, box su misura", k: 1 },
  { value: "high", label: "Alte", hint: "Grandi lastre, effetto marmo, rubinetteria di design", k: 1.3 },
];

export const extrasList = [
  { value: "move", label: "Voglio spostare i sanitari", hint: "Nuovo tratto di scarico con pendenza corretta", k: 0.08 },
  { value: "stairs", label: "Piano alto senza ascensore o accesso difficile", hint: "Più ore per carico, scarico e macerie", k: 0.05 },
  { value: "old", label: "Edificio anteriore al 1975", hint: "Più probabilità di imprevisti strutturali e impiantistici", k: 0.06 },
];

/** Voci su cui si ripartisce la stima, coerenti con costBreakdown. */
export const breakdown = [
  { voice: "Manodopera e coordinamento", share: 0.40 },
  { voice: "Pavimenti e rivestimenti", share: 0.16 },
  { voice: "Sanitari e mobile bagno", share: 0.16 },
  { voice: "Impianto idraulico ed elettrico", share: 0.14 },
  { voice: "Rubinetteria e box doccia", share: 0.09 },
  { voice: "Demolizione e smaltimento", share: 0.05 },
];

const roundTo = (n: number, step = 500) => Math.round(n / step) * step;

export function estimate(input: {
  size: string;
  system: string;
  finish: string;
  extras: string[];
}): { min: number; max: number } {
  const [bMin, bMax] = baseBySize[input.size] ?? baseBySize.m;
  const kSystem = systems.find((s) => s.value === input.system)?.k ?? 1;
  const kFinish = finishes.find((f) => f.value === input.finish)?.k ?? 1;
  const kExtras = 1 + input.extras.reduce((acc, e) => acc + (extrasList.find((x) => x.value === e)?.k ?? 0), 0);
  const k = kSystem * kFinish * kExtras;
  return { min: roundTo(bMin * k), max: roundTo(bMax * k) };
}
