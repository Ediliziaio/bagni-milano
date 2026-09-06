# 13 — KPI e monitoraggio

## Premessa sui benchmark

Il sito parte da zero su un dominio nuovo. Qualunque target sui primi 3 mesi è una stima:
il fattore dominante è la velocità di indicizzazione, che non si controlla.

I valori indicati sono **traguardi di riferimento per un'impresa locale in un mercato
competitivo come Milano**, non promesse. Vanno rivisti dopo il mese 3 sui dati reali.

---

## Cruscotto mensile

### Visibilità organica — fonte: Search Console

| KPI | M3 | M6 | M12 |
|---|---:|---:|---:|
| Pagine indicizzate | 50+ | 65+ | 100+ |
| Keyword con impression | 200+ | 600+ | 1.500+ |
| Keyword in Top 10 | 5+ | 30+ | 100+ |
| Keyword in Top 3 | 1+ | 8+ | 30+ |
| Impression/mese | 3.000 | 15.000 | 50.000 |
| Click/mese | 100 | 600 | 2.500 |
| CTR medio | 3% | 4% | 5% |

### Segmentazione del traffico

| KPI | Perché conta |
|---|---|
| Traffico non-brand / totale | Sopra l'80% significa che il sito acquisisce, non solo intercetta chi già conosce il brand |
| Traffico con intento locale | Query contenenti Milano, Monza, Lodi o nomi di comuni |
| Traffico su pagine money vs. blog | Il blog deve **alimentare** le money page: se converte da solo va bene, se non passa traffico è mal collegato |

### Posizionamento sulle query critiche

Da tracciare settimanalmente, geolocalizzate sulla città corrispondente:

| Query | M3 | M6 | M12 |
|---|---:|---:|---:|
| ristrutturazione bagno Milano | 30-50 | 15-25 | Top 10 |
| ristrutturazione bagno Monza | 20-40 | 10-20 | Top 5 |
| ristrutturazione bagno Lodi | 15-30 | Top 10 | Top 3 |
| quanto costa rifare un bagno | 40-60 | 20-30 | Top 15 |
| trasformazione vasca in doccia Milano | 25-40 | 10-20 | Top 5 |
| bagno chiavi in mano Milano | 20-35 | Top 10 | Top 3 |

### Conversione

| KPI | Target M6 | Note |
|---|---:|---|
| Richieste di preventivo organiche/mese | 15-25 | Il numero che conta davvero |
| Tasso di conversione sito | 2-4% | Sotto il 2%: problema di CTA o di qualità del traffico |
| Tasso di completamento form | > 30% | Sotto il 25%: valutare la riduzione dei campi |
| Click su telefono (mobile) | tracciato | Su mobile spesso supera gli invii del form |
| Lead → sopralluogo | > 50% | Misura la **qualità** del lead, non la quantità |
| Sopralluogo → contratto | tracciato | Fuori dal perimetro del sito, ma è il dato che chiude il ciclo |
| Costo di acquisizione organico | ↓ nel tempo | (Investimento SEO del periodo) / lead organici |

### Local SEO — fonte: Google Business Profile Insights

| KPI | Target M6 |
|---|---:|
| Visualizzazioni scheda/mese | 2.000+ |
| Azioni (chiamate, sito, indicazioni) | 150+ |
| Recensioni totali | 25+ |
| Valutazione media | ≥ 4,7 |
| Tasso di risposta alle recensioni | 100% |
| Foto pubblicate | +6/mese |

### Autorevolezza

| KPI | M6 | M12 |
|---|---:|---:|
| Referring domains | 25+ | 60+ |
| Referring domains **lombardi** | 8+ | 25+ |
| Referring domains **di settore** | 5+ | 15+ |
| Menzioni del brand (anche senza link) | tracciato | tracciato |

> I referring domains lombardi e di settore contano più del totale. Sessanta link generici
> valgono meno di venticinque link locali e pertinenti.

### Performance — Core Web Vitals

| Metrica | Target | Fonte |
|---|---|---|
| LCP mobile | < 2,5 s | PageSpeed Insights, dati di campo |
| INP | < 200 ms | idem |
| CLS | < 0,1 | idem |
| Lighthouse Performance mobile | ≥ 90 | Lab, mensile |
| URL "Buoni" in Search Console | > 95% | Report Segnali web essenziali |

---

## Visibilità AI — protocollo di misurazione

Non esiste una Search Console per i motori generativi. Questo è il metodo praticabile,
da eseguire **mensilmente**.

### Prompt di riferimento (20)

**Commerciali locali**
1. Chi ristruttura bagni chiavi in mano a Milano?
2. Migliore impresa per rifare il bagno a Monza
3. A chi mi rivolgo per ristrutturare il bagno a Lodi?
4. Imprese specializzate solo in bagni in Lombardia
5. Chi trasforma la vasca in doccia a Milano?

**Informativi di costo**
6. Quanto costa rifare un bagno a Milano?
7. Quanto costa un bagno di 6 mq?
8. Quanto costa trasformare la vasca in doccia?
9. Come si legge un preventivo di ristrutturazione bagno?
10. Quanto incide la manodopera sul costo di un bagno?

**Informativi tecnici**
11. Quanto tempo serve per rifare un bagno?
12. Serve la CILA per rifare il bagno?
13. Posso spostare il wc in un condominio?
14. Perché torna la muffa in bagno?
15. Da dove viene un'infiltrazione dal bagno?

**Di brand**
16. Cos'è Bagni Milano?
17. Che cos'è il Metodo Bagni Milano?
18. Bagni Milano opera anche a Monza?
19. Bagni Milano è affidabile?
20. Quali servizi offre Bagni Milano?

### Sistemi da interrogare

ChatGPT (con ricerca attiva) · Google AI Overviews · Gemini · Perplexity · Copilot

### Cosa registrare

| Campo | Valori |
|---|---|
| Citazione | sì / no |
| Posizione nella risposta | prima menzione / successiva / solo nelle fonti |
| Accuratezza | corretta / imprecisa / errata |
| Fonte citata | quale URL del sito viene usato |

### Target

| KPI | M6 | M12 |
|---|---:|---:|
| Citazioni su 20 prompt (almeno un sistema) | 4+ | 10+ |
| Citazioni sui 5 prompt di brand | 5/5 | 5/5 |
| Risposte imprecise sull'azienda | 0 | 0 |

**L'azione più importante è la quarta colonna.** Quando un sistema dice qualcosa di sbagliato
su Bagni Milano, la causa è quasi sempre una pagina ambigua o incompleta del sito: si corregge
la pagina, non si combatte il modello.

---

## Cadenza

| Frequenza | Cosa |
|---|---|
| **Settimanale** | Posizionamento sulle 6 query critiche, lead ricevuti, funzionamento del form |
| **Mensile** | Cruscotto completo, Insights GBP, nuovi backlink, protocollo AI |
| **Trimestrale** | Revisione della keyword map, analisi cannibalizzazioni, aggiornamento contenuti, Core Web Vitals di campo |
| **Semestrale** | Ricalcolo dei punteggi di `01-AUDIT-E-PUNTEGGI.md` con lo stesso metodo, per misurare la traiettoria |
