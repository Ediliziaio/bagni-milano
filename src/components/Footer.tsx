import { Link } from "react-router-dom";
import { site } from "@/data/site";
import { cities, comuni } from "@/data/cities";
import { services } from "@/data/services";
import { blogCategories } from "@/data/blog-categories";

export const Footer = () => (
  <footer className="mt-20 border-t border-line bg-ink text-alabaster">
    <div className="container-x py-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
      <div>
        <p className="font-display text-xl">Bagni<span className="text-brass-light"> Milano</span></p>
        <p className="mt-3 text-sm text-alabaster/70 leading-relaxed">
          Ristrutturazione bagno chiavi in mano a Milano, Monza, Lodi e in Lombardia.
          Un unico referente, preventivo chiuso, date in contratto.
        </p>
        <p className="mt-4 text-xs text-alabaster/50">
          {site.legalName} · P.IVA {site.vatId}
        </p>
      </div>

      <nav aria-label="Servizi">
        <p className="text-sm font-semibold text-brass-light">Servizi</p>
        <ul className="mt-3 space-y-2 text-sm text-alabaster/70">
          <li><Link className="hover:text-alabaster" to="/ristrutturazione-bagno">Ristrutturazione bagno</Link></li>
          {services.slice(0, 6).map((s) => (
            <li key={s.slug}><Link className="hover:text-alabaster" to={`/servizi/${s.slug}`}>{s.title}</Link></li>
          ))}
        </ul>
      </nav>

      <nav aria-label="Zone servite">
        <p className="text-sm font-semibold text-brass-light">Zone servite</p>
        <ul className="mt-3 space-y-2 text-sm text-alabaster/70">
          {cities.map((c) => (
            <li key={c.slug}>
              <Link className="hover:text-alabaster" to={`/ristrutturazione-bagno-${c.slug}`}>
                Ristrutturazione bagno {c.preposition}
              </Link>
            </li>
          ))}
        </ul>
        <details className="mt-3 text-sm text-alabaster/60">
          <summary className="cursor-pointer hover:text-alabaster">Altri comuni serviti</summary>
          <ul className="mt-2 space-y-1.5">
            {comuni.map((c) => (
              <li key={c.slug}>
                <Link className="hover:text-alabaster" to={`/ristrutturazione-bagno-${c.slug}`}>{c.name}</Link>
              </li>
            ))}
          </ul>
        </details>
      </nav>

      <nav aria-label="Risorse">
        <p className="text-sm font-semibold text-brass-light">Risorse</p>
        <ul className="mt-3 space-y-2 text-sm text-alabaster/70">
          <li><Link className="hover:text-alabaster" to="/quanto-costa-ristrutturare-bagno">Quanto costa</Link></li>
          <li><Link className="hover:text-alabaster" to="/quanto-tempo-ristrutturare-bagno">Quanto tempo serve</Link></li>
          <li><Link className="hover:text-alabaster" to="/faq">Domande frequenti</Link></li>
          <li><Link className="hover:text-alabaster" to="/progetti">Progetti realizzati</Link></li>
          {blogCategories.slice(0, 3).map((c) => (
            <li key={c.slug}><Link className="hover:text-alabaster" to={`/blog/categoria/${c.slug}`}>{c.name}</Link></li>
          ))}
          <li><Link className="hover:text-alabaster" to="/contatti">Contatti</Link></li>
        </ul>
      </nav>
    </div>

    <div className="border-t border-alabaster/10">
      <div className="container-x flex flex-col gap-3 py-6 text-xs text-alabaster/50 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {site.brand}. Tutti i diritti riservati.</p>
        <div className="flex gap-4">
          <Link className="hover:text-alabaster" to="/privacy-policy">Privacy</Link>
          <Link className="hover:text-alabaster" to="/cookie-policy">Cookie</Link>
        </div>
      </div>
    </div>
  </footer>
);
