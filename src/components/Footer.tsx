import { Link } from "react-router-dom";
import { site, isPending } from "@/data/site";
import { cities, comuni } from "@/data/cities";
import { services } from "@/data/services";
import { blogCategories } from "@/data/blog-categories";

export const Footer = () => (
  <footer className="on-dark mt-24 border-t border-line-dark">
    <div className="container-x py-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
      <div>
        <img src="/img/logo-light.png" alt="Bagni Milano" width={1933} height={526} loading="lazy" className="h-10 w-auto" />
        <p className="mt-3 text-sm text-cream/70 leading-relaxed">
          Ristrutturazione bagno chiavi in mano a Milano, Monza, Lodi e in Lombardia.
          Un unico referente, preventivo chiuso, date in contratto.
        </p>
        <p className="mt-5">
          <a href={`tel:${site.telephoneE164}`} className="font-display text-lg text-gold hover:text-gold-soft" data-cta="footer-call">
            {site.telephone}
          </a>
        </p>
        {!isPending(site.legalName) && (
          <p className="mt-3 text-xs text-cream/50">
            {site.legalName} · P.IVA {site.vatId}
          </p>
        )}
        <div className="mt-6 border-t border-line-dark pt-5">
          <p className="text-[0.75rem] sm:text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-cream/40">Partner</p>
          <img src="/img/partner-gruppo-bea.png" alt="Gruppo BEA, partner di Bagni Milano" width={600} height={200} loading="lazy" className="mt-3 h-9 w-auto opacity-80" />
        </div>
      </div>

      <nav aria-label="Servizi">
        <p className="text-sm font-semibold text-gold">Servizi</p>
        <ul className="mt-3 space-y-2 text-sm text-cream/70">
          <li><Link className="hover:text-gold" to="/ristrutturazione-bagno">Ristrutturazione bagno</Link></li>
          {services.slice(0, 6).map((s) => (
            <li key={s.slug}><Link className="hover:text-gold" to={`/servizi/${s.slug}`}>{s.title}</Link></li>
          ))}
        </ul>
      </nav>

      <nav aria-label="Zone servite">
        <p className="text-sm font-semibold text-gold">Zone servite</p>
        <ul className="mt-3 space-y-2 text-sm text-cream/70">
          {cities.map((c) => (
            <li key={c.slug}>
              <Link className="hover:text-gold" to={`/ristrutturazione-bagno-${c.slug}`}>
                Ristrutturazione bagno {c.preposition}
              </Link>
            </li>
          ))}
        </ul>
        <details className="mt-3 text-sm text-cream/60">
          <summary className="cursor-pointer hover:text-cream">Altri comuni serviti</summary>
          <ul className="mt-2 space-y-1.5">
            {comuni.map((c) => (
              <li key={c.slug}>
                <Link className="hover:text-gold" to={`/ristrutturazione-bagno-${c.slug}`}>{c.name}</Link>
              </li>
            ))}
          </ul>
        </details>
      </nav>

      <nav aria-label="Risorse">
        <p className="text-sm font-semibold text-gold">Risorse</p>
        <ul className="mt-3 space-y-2 text-sm text-cream/70">
          <li><Link className="hover:text-gold" to="/quanto-costa-ristrutturare-bagno">Quanto costa</Link></li>
          <li><Link className="hover:text-gold" to="/quanto-tempo-ristrutturare-bagno">Quanto tempo serve</Link></li>
          <li><Link className="hover:text-gold" to="/faq">Domande frequenti</Link></li>
          <li><Link className="hover:text-gold" to="/progetti">Progetti realizzati</Link></li>
          {blogCategories.slice(0, 3).map((c) => (
            <li key={c.slug}><Link className="hover:text-gold" to={`/blog/categoria/${c.slug}`}>{c.name}</Link></li>
          ))}
          <li><Link className="hover:text-gold" to="/contatti">Contatti</Link></li>
        </ul>
      </nav>
    </div>

    <div className="border-t border-line-dark">
      <div className="container-x flex flex-col gap-3 py-6 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {site.brand}. Tutti i diritti riservati.</p>
        <div className="flex gap-4">
          <Link className="hover:text-gold" to="/privacy-policy">Privacy</Link>
          <Link className="hover:text-gold" to="/cookie-policy">Cookie</Link>
        </div>
      </div>
    </div>
  </footer>
);
