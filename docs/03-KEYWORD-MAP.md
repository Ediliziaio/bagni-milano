# 03 — Keyword map

Una sola keyword primaria per URL. Se due pagine puntano alla stessa, una delle due va
rimossa o riorientata: la cannibalizzazione costa più di quanto renda la pagina in più.

## Legenda intenti

- **T** Transactional — vuole comprare ora
- **C** Commercial investigation — sta scegliendo il fornitore
- **I** Informational — cerca una risposta
- **L** Local — cerca vicino a sé

## Pagine money

| URL | Keyword primaria | Intento | Funnel | Secondarie / semantiche |
|---|---|:--:|---|---|
| `/` | ristrutturazione bagno Milano | T/L | BOFU | rifacimento bagno Milano, impresa ristrutturazione bagno Milano, ditta ristrutturazione bagni Milano, preventivo ristrutturazione bagno Milano |
| `/ristrutturazione-bagno` | ristrutturazione bagno | T | MOFU→BOFU | cosa comprende ristrutturazione bagno, rifacimento bagno completo, ristrutturazione bagno chiavi in mano |
| `/quanto-costa-ristrutturare-bagno` | quanto costa ristrutturare un bagno | I | TOFU→MOFU | costo ristrutturazione bagno, prezzo rifacimento bagno, costo bagno 5 mq, costo bagno 6 mq, costo bagno 8 mq, preventivo bagno |
| `/quanto-tempo-ristrutturare-bagno` | quanto tempo serve per rifare un bagno | I | MOFU | durata ristrutturazione bagno, rifacimento bagno tempi, tempi cantiere bagno |
| `/metodo` | metodo ristrutturazione bagno | C | MOFU | come lavoriamo, processo ristrutturazione bagno, fasi ristrutturazione bagno |
| `/chi-siamo` | Bagni Milano *(brand)* | C | MOFU | impresa specializzata bagni Milano, chi è Bagni Milano |
| `/preventivo` | preventivo ristrutturazione bagno | T | BOFU | richiedi preventivo bagno, sopralluogo gratuito bagno |
| `/progetti` | ristrutturazione bagno prima e dopo | C | MOFU | lavori realizzati bagno, case study bagno Milano |
| `/faq` | domande ristrutturazione bagno | I | TOFU | — *(la FAQPage sostiene le altre pagine, non compete)* |

## Pagine geografiche

| URL | Keyword primaria | Intento |
|---|---|:--:|
| `/ristrutturazione-bagno-milano` | ristrutturazione bagno Milano | T/L |
| `/ristrutturazione-bagno-monza` | ristrutturazione bagno Monza | T/L |
| `/ristrutturazione-bagno-lodi` | ristrutturazione bagno Lodi | T/L |
| `/ristrutturazione-bagno-lombardia` | ristrutturazione bagno Lombardia | T/L |
| `/ristrutturazione-bagno-<comune>` | ristrutturazione bagno *<comune>* | T/L |

> **Nota sulla sovrapposizione home / landing Milano.** Entrambe intercettano
> "ristrutturazione bagno Milano". È voluto e gestito: la **home** è ottimizzata sul brand +
> servizio + conversione, la **landing Milano** su territorio, patrimonio edilizio e criticità
> locali. Title, H1 e corpo sono deliberatamente diversi. Se in Search Console le due pagine
> iniziano a scambiarsi posizione sulla stessa query, la landing Milano va rafforzata e la home
> alleggerita sul geo-modificatore — non viceversa.

## Pagine servizio

| URL | Keyword primaria | Intento |
|---|---|:--:|
| `/servizi/bagno-chiavi-in-mano` | bagno chiavi in mano Milano | T |
| `/servizi/trasformazione-vasca-in-doccia` | trasformazione vasca in doccia Milano | T |
| `/servizi/bagno-piccolo` | ristrutturazione bagno piccolo Milano | C |
| `/servizi/ristrutturazione-bagno-condominio` | ristrutturazione bagno condominio Milano | C |
| `/servizi/bagno-senza-demolizione` | ristrutturazione bagno senza demolizione | C |
| `/servizi/ristrutturazione-bagno-disabili` | bagno per disabili Milano | C |
| `/servizi/rifacimento-impianto-idraulico-bagno` | rifacimento impianto idraulico bagno Milano | C |
| `/servizi/rifacimento-doccia` | rifacimento doccia Milano | T |

## Decisioni anti-cannibalizzazione

| Keyword | Decisione | Perché |
|---|---|---|
| "rifacimento bagno", "ristrutturazione bagno completo", "rifare il bagno" | **Nessuna pagina propria** → 301 su `/ristrutturazione-bagno` | Sinonimi puri della pillar. Due pagine si toglierebbero forza a vicenda |
| "ristrutturazione bagno appartamento" | Assorbita da `/servizi/ristrutturazione-bagno-condominio` | A Milano l'appartamento *è* il condominio: stesso intento, stesse risposte |
| "bagno moderno", "idee bagno", "colori bagno" | Blog, non landing | Intento ispirazionale: una landing commerciale su queste query converte pochissimo e diluisce il cluster |
| "costo ristrutturazione bagno Milano" | Sulla pagina costi, **non** sulla landing Milano | La pagina costi ha la profondità per vincere la query; la landing Milano linka a lei |
| "ristrutturazione bagno vicino a me" | Nessuna pagina | Query risolta da Google Business Profile e proximity, non da una landing |

## Entità di riferimento (per AIO)

Da usare in modo naturale e coerente nei testi, mai forzato:

**Geografiche** — Milano, Città metropolitana di Milano, Monza, Brianza, Lodi, Lodigiano, Lombardia
**Tecniche** — bagno, ristrutturazione, demolizione, massetto, impermeabilizzazione, guaina,
impianto idraulico, impianto elettrico, colonna di scarico, pendenza, sanitari sospesi, gres
porcellanato, piatto doccia, box doccia, rubinetteria, ventilazione meccanica
**Procedurali** — sopralluogo, preventivo, capitolato, CILA, formulario rifiuti, collaudo, garanzia
**Di business** — chiavi in mano, referente unico, impresa specializzata, tempi certi
