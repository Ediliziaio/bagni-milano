# 14 — Immagini da produrre

> Generato da `src/data/images.ts` e `src/data/image-prompts.ts`. Non modificare a mano: `npm run images`.

**Stato: 3 definitive · 79 da sostituire · 0 da creare.**
Totale libreria: 82 immagini.

---

## Come si consegna un'immagine

1. Genera o scatta l'immagine nel formato indicato.
2. Rinominala **esattamente** come il campo *Nome file* (es. `geo-milano.jpg`). Tutto minuscolo, niente spazi.
3. Salvala in `public/img/`.
4. In `src/data/images.ts` porta `available` a `true` per quella voce.
5. `npm run build`.

Il testo alternativo è già scritto per ogni immagine: non va reinventato.
Formato di consegna: **JPEG**, lato lungo almeno quanto indicato, qualità alta.

---

## Stile comune a tutta la libreria

Queste tre formule sono già incorporate nei prompt qui sotto. Servono a far sembrare
le immagini una sola campagna e non venti scatti scollegati.

**Base fotografica**
```
fotografia di interni realistica, luce naturale morbida da finestra laterale, prospettiva a un punto con verticali perfettamente diritte, obiettivo grandangolare 24mm, nessuna persona, nessun testo o logo visibile, nessun riflesso del fotografo negli specchi, ambiente italiano residenziale, colori fedeli, nessuna saturazione eccessiva
```

**Per gli scatti "dopo" e i bagni finiti**
```
finiture contemporanee: grande formato effetto marmo scuro o pietra chiara, rubinetteria in ottone spazzolato, mobile sospeso in legno chiaro, specchio retroilluminato, sanitari sospesi bianchi, doccia walk-in con vetro trasparente
```

**Per gli scatti "prima"**
```
bagno italiano non ristrutturato degli anni Settanta-Novanta: piastrelle beige o rosa con fascia decorativa, sanitari a terra in ceramica bianca ingiallita, mobile in legno scuro, radiatore tubolare bianco, pavimento in gres a motivi, ambiente pulito ma chiaramente datato
```

---

## ⚠️ Regola vincolante per le coppie prima / dopo

Le due immagini di una coppia devono mostrare **la stessa stanza dalla stessa posizione**:
stessa finestra, stessa porta, stessa prospettiva. Cambia solo ciò che è stato rifatto.

Il modo pratico per ottenerlo con un generatore di immagini: **genera prima lo scatto "prima"**,
poi allega quell'immagine e chiedi la versione "dopo" specificando *"stessa identica inquadratura,
stessa stanza, stessa finestra"*. Generarle separatamente produce due bagni diversi, e il confronto
perde qualsiasi valore.

Con fotografie reali vale lo stesso: treppiede, altezza annotata, posizione segnata sul pavimento.

---


---


---


---

## Immagini già a sistema da sostituire

Sono attive sul sito ma marcate `source: "riferimento"`: coppie prima/dopo generate con AI e
immagini generiche di provenienza esterna. Funzionano come segnaposto di qualità, ma non
documentano lavori di Bagni Milano e per alcune la licenza non è verificata.

Per sostituirle basta sovrascrivere il file in `public/img/` **mantenendo lo stesso nome** e
portare `source` a `"propria"`: nessuna modifica al codice.

- `hero-home.jpg` — Homepage — sfondo dell'hero, desktop
- `hero-home-mobile.jpg` — Homepage — sfondo dell'hero, smartphone
- `home-banda.jpg` — Homepage — fascia immagine a tutta larghezza
- `ba-milano-centro-prima.jpg` — Comparatore prima/dopo
- `ba-milano-centro-dopo.jpg` — Comparatore prima/dopo
- `ba-porta-nuova-prima.jpg` — Comparatore prima/dopo
- `ba-porta-nuova-dopo.jpg` — Comparatore prima/dopo
- `ba-brera-prima.jpg` — Comparatore prima/dopo
- `ba-brera-dopo.jpg` — Comparatore prima/dopo
- `ba-navigli-prima.jpg` — Comparatore prima/dopo
- `ba-navigli-dopo.jpg` — Comparatore prima/dopo
- `ba-padronale-prima.jpg` — Comparatore prima/dopo
- `ba-padronale-dopo.jpg` — Comparatore prima/dopo
- `ba-famiglia-prima.jpg` — Comparatore prima/dopo
- `ba-famiglia-dopo.jpg` — Comparatore prima/dopo
- `ba-ospiti-prima.jpg` — Comparatore prima/dopo
- `ba-ospiti-dopo.jpg` — Comparatore prima/dopo
- `ba-walkin-prima.jpg` — Comparatore prima/dopo
- `ba-walkin-dopo.jpg` — Comparatore prima/dopo
- `cantiere-demolizione.jpg` — Metodo e processo — fase 8
- `cantiere-impianti.jpg` — Metodo e processo — fase 9
- `cantiere-impermeabilizzazione.jpg` — Metodo, processo e articolo sulle infiltrazioni
- `referente.jpg` — Chi siamo — E-E-A-T
- `materiali.jpg` — Home e metodo — selezione materiali
- `team.jpg` — Chi siamo — fascia squadra
- `showroom.jpg` — Home e contatti
- `art-costi.jpg` — Articoli del cluster Costi
- `art-progettazione.jpg` — Articoli del cluster Progettazione
- `art-idee.jpg` — Articoli dei cluster Idee e Materiali
- `art-lombardia.jpg` — Articoli del cluster Lombardia
- `geo-milano.jpg` — Landing Milano — apertura
- `geo-monza.jpg` — Landing Monza — apertura
- `geo-lodi.jpg` — Landing Lodi — apertura
- `geo-bergamo.jpg` — Landing Bergamo — apertura
- `geo-varese.jpg` — Landing Varese — apertura
- `geo-como.jpg` — Landing Como — apertura
- `geo-lombardia.jpg` — Landing Lombardia — apertura
- `srv-bagno-chiavi-in-mano.jpg` — Pagina servizio /servizi/bagno-chiavi-in-mano
- `srv-trasformazione-vasca-in-doccia.jpg` — Pagina servizio /servizi/trasformazione-vasca-in-doccia
- `srv-bagno-piccolo.jpg` — Pagina servizio /servizi/bagno-piccolo
- `srv-ristrutturazione-bagno-condominio.jpg` — Pagina servizio /servizi/ristrutturazione-bagno-condominio
- `srv-bagno-senza-demolizione.jpg` — Pagina servizio /servizi/bagno-senza-demolizione
- `srv-ristrutturazione-bagno-disabili.jpg` — Pagina servizio /servizi/ristrutturazione-bagno-disabili
- `srv-rifacimento-impianto-idraulico-bagno.jpg` — Pagina servizio /servizi/rifacimento-impianto-idraulico-bagno
- `srv-rifacimento-doccia.jpg` — Pagina servizio /servizi/rifacimento-doccia
- `pag-costi.jpg` — Money page /costi
- `pag-tempi.jpg` — Money page /tempi
- `pag-preventivo.jpg` — Money page /preventivo
- `pag-faq.jpg` — Money page /faq
- `pag-chi-siamo.jpg` — Money page /chi-siamo
- `art-quanto-costa-rifare-un-bagno.jpg` — Articolo /blog/quanto-costa-rifare-un-bagno
- `art-costo-piastrelle-bagno.jpg` — Articolo /blog/costo-piastrelle-bagno
- `art-quanto-costa-trasformare-vasca-in-doccia.jpg` — Articolo /blog/quanto-costa-trasformare-vasca-in-doccia
- `art-costo-bagno-6-mq.jpg` — Articolo /blog/costo-bagno-6-mq
- `art-costo-manodopera-ristrutturazione-bagno.jpg` — Articolo /blog/costo-manodopera-ristrutturazione-bagno
- `art-leggere-preventivo-ristrutturazione-bagno.jpg` — Articolo /blog/leggere-preventivo-ristrutturazione-bagno
- `art-come-progettare-un-bagno.jpg` — Articolo /blog/come-progettare-un-bagno
- `art-dimensioni-minime-bagno.jpg` — Articolo /blog/dimensioni-minime-bagno
- `art-errori-da-evitare-ristrutturazione-bagno.jpg` — Articolo /blog/errori-da-evitare-ristrutturazione-bagno
- `art-gres-o-ceramica-per-il-bagno.jpg` — Articolo /blog/gres-o-ceramica-per-il-bagno
- `art-impermeabilizzazione-bagno.jpg` — Articolo /blog/impermeabilizzazione-bagno
- `art-sanitari-sospesi.jpg` — Articolo /blog/sanitari-sospesi
- `art-muffa-in-bagno-cause-e-soluzioni.jpg` — Articolo /blog/muffa-in-bagno-cause-e-soluzioni
- `art-infiltrazioni-dal-bagno.jpg` — Articolo /blog/infiltrazioni-dal-bagno
- `art-cattivi-odori-in-bagno.jpg` — Articolo /blog/cattivi-odori-in-bagno
- `art-scarico-bagno-lento.jpg` — Articolo /blog/scarico-bagno-lento
- `art-poca-pressione-acqua-bagno.jpg` — Articolo /blog/poca-pressione-acqua-bagno
- `art-serve-la-cila-per-rifare-il-bagno.jpg` — Articolo /blog/serve-la-cila-per-rifare-il-bagno
- `art-detrazioni-ristrutturazione-bagno.jpg` — Articolo /blog/detrazioni-ristrutturazione-bagno
- `art-ristrutturare-bagno-a-milano.jpg` — Articolo /blog/ristrutturare-bagno-a-milano
- `pag-ristrutturazione-bagno.jpg` — Pillar /ristrutturazione-bagno — apertura
- `pag-metodo.jpg` — Pagina /metodo — apertura
- `pag-servizi.jpg` — Pagina /servizi — apertura
- `lav-massetto.jpg` — Pillar — fascia lavorazioni
- `lav-posa.jpg` — Pillar — fascia lavorazioni
- `fase-progetto.jpg` — Metodo — macro-fase Progetto
- `fase-materiali.jpg` — Metodo — macro-fase Preventivo e materiali
- `fase-consegna.jpg` — Metodo — macro-fase Consegna
- `og-social.jpg` — Anteprima social (Open Graph)

---

## Le tre immagini che valgono più delle altre

`cantiere-demolizione`, `cantiere-impianti` e `cantiere-impermeabilizzazione` non sono
riempitivo: sono la prova visiva del metodo. Mostrano le lavorazioni che il cliente non vedrà
mai perché finiscono sotto il rivestimento, ed è esattamente su quelle che si costruisce la
differenza rispetto a un preventivo più economico.

**Per queste tre conviene una fotografia reale invece di un'immagine generata.** Un cantiere
vero ha dettagli che un generatore non riproduce in modo credibile — e sono anche le uniche
tre immagini che un cliente potrebbe voler verificare.
