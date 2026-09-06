# 02 — Architettura informativa e sitemap

## Principi

1. **Un intento = un URL.** Nessuna pagina compete con un'altra sulla stessa keyword primaria.
2. **Profondità massima 3 click** dalla home a qualsiasi pagina.
3. **URL parlanti e stabili**, in italiano, senza trailing slash (`trailingSlash: false`).
   La forma con slash finale è servita in 301 verso quella senza: una sola versione canonica.
4. **Nessuna pagina pubblicata senza contenuto.** Categorie vuote e schede progetto incomplete
   esistono nel codice ma restano fuori da sitemap e indice.

## Albero

```
/                                          Home — "ristrutturazione bagno Milano"
│
├── /ristrutturazione-bagno                PILLAR — servizio, cosa comprende
│
├── /metodo                                Metodo Bagni Milano: 4 principi + 12 fasi
│   ├── /come-lavoriamo                    → 301 verso /metodo
│   ├── /processo                          → 301 verso /metodo
│   └── /fasi-ristrutturazione-bagno       → 301 verso /metodo
│
├── /chi-siamo                             Entità, E-E-A-T
│
├── /quanto-costa-ristrutturare-bagno      MONEY — cluster costi
│   └── /calcolatore-costo-bagno           strumento + lead magnet
├── /quanto-tempo-ristrutturare-bagno      MONEY — cluster tempi
│
├── GEOGRAFICHE (top-level, pattern unico)
│   ├── /ristrutturazione-bagno-milano         primaria
│   ├── /ristrutturazione-bagno-monza          primaria
│   ├── /ristrutturazione-bagno-lodi           primaria
│   ├── /ristrutturazione-bagno-bergamo        primaria
│   ├── /ristrutturazione-bagno-varese         primaria
│   ├── /ristrutturazione-bagno-como           primaria
│   ├── /ristrutturazione-bagno-lombardia      primaria (hub regionale)
│   └── /ristrutturazione-bagno-<comune>       14 comuni secondari
│
├── /servizi                               hub
│   ├── /servizi/bagno-chiavi-in-mano
│   ├── /servizi/trasformazione-vasca-in-doccia
│   ├── /servizi/bagno-piccolo
│   ├── /servizi/ristrutturazione-bagno-condominio
│   ├── /servizi/bagno-senza-demolizione
│   ├── /servizi/ristrutturazione-bagno-disabili
│   ├── /servizi/rifacimento-impianto-idraulico-bagno
│   └── /servizi/rifacimento-doccia
│
├── /progetti                              hub case study
│   └── /progetti/<slug>                   (published: false → noindex, fuori sitemap)
│
├── /blog                                  hub editoriale
│   ├── /blog/categoria/<7 categorie>
│   └── /blog/<slug>                       12 guide pubblicate
│
├── /faq                                   FAQ hub per argomento
├── /preventivo                            conversione
├── /contatti
│
└── legali (noindex)
    ├── /privacy-policy
    └── /cookie-policy
```

## Conteggio URL in sitemap: 69

| Gruppo | URL |
|---|---:|
| Pagine core | 13 |
| Geografiche primarie | 7 |
| Geografiche comuni | 14 |
| Servizi | 8 |
| Categorie blog | 7 |
| Articoli | 20 |
| Progetti pubblicati | 0 |
| **Totale** | **69** |

Prerenderizzati in HTML statico: **71** (69 + le 2 pagine legali `noindex`, che devono
esistere come file ma non essere indicizzate).

## Perché le geografiche sono top-level e non sotto `/zone/`

`/ristrutturazione-bagno-milano` contiene la query esatta nell'URL ed è a un solo livello
dalla home. `/zone/milano` non contiene la keyword e aggiunge un livello di profondità.
Il pattern è inoltre scalabile: aggiungere un comune significa aggiungere una voce in
`src/data/cities.ts`, e rotta, sitemap, footer e `llms.txt` si aggiornano da soli.

## Regola anti-doorway

Un comune entra nel sito **solo se** si può scrivere per lui:

- una descrizione reale del patrimonio edilizio locale;
- almeno tre criticità ricorrenti specifiche di quel territorio;
- l'elenco delle zone o dei comuni limitrofi coperti.

Se questi tre elementi non esistono, la pagina non si crea. Quattordici pagine comune con
contenuto vero valgono più di ottanta pagine identiche con il nome cambiato — e non
espongono il dominio a un'azione manuale per doorway pages.

## Espansione futura (non ancora attiva)

- **Quartieri di Milano** (`/ristrutturazione-bagno-milano-navigli`): da attivare **solo**
  quando esistono progetti reali in quella zona da citare. Senza, è contenuto sottile.
- **Combinazioni servizio × città** (`/servizi/bagno-piccolo-milano`): ad alto rischio di
  cannibalizzazione. Da valutare solo con dati di Search Console che dimostrino la domanda.
