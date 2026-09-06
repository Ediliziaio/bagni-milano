import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { site } from "@/data/site";

const nav = [
  { to: "/ristrutturazione-bagno", label: "Ristrutturazione" },
  { to: "/metodo", label: "Metodo" },
  { to: "/progetti", label: "Progetti" },
  { to: "/servizi", label: "Servizi" },
  { to: "/quanto-costa-ristrutturare-bagno", label: "Costi" },
  { to: "/blog", label: "Blog" },
  { to: "/chi-siamo", label: "Chi siamo" },
];

const Wordmark = () => (
  <Link
    to="/"
    aria-label={`${site.brand} — home`}
    className="font-display text-[0.95rem] sm:text-base font-semibold uppercase tracking-[0.22em] leading-[1.15] text-cream"
  >
    Bagni<br className="hidden sm:inline" /> <span className="text-gold">Milano</span>
  </Link>
);

export const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-line-dark bg-ink">
      <div className="container-x flex h-[72px] items-center justify-between gap-6">
        <Wordmark />

        <nav aria-label="Navigazione principale" className="hidden lg:flex items-center gap-7">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) =>
                `text-[0.68rem] font-medium uppercase tracking-[0.18em] transition-colors hover:text-gold ${
                  isActive ? "text-gold" : "text-cream/70"
                }`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        <Link to="/preventivo" className="hidden lg:inline-flex btn-gold !min-h-0 !py-3 !px-6">
          Consulenza
        </Link>

        <button
          type="button"
          className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-[2px] border border-line-dark text-cream"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Chiudi menu" : "Apri menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <nav id="menu-mobile" aria-label="Navigazione mobile" className="lg:hidden border-t border-line-dark bg-ink">
          <ul className="container-x py-2">
            {nav.map((n) => (
              <li key={n.to}>
                <Link
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="block border-b border-line-dark/70 py-3.5 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-cream/80"
                >
                  {n.label}
                </Link>
              </li>
            ))}
            <li className="py-4">
              <Link to="/preventivo" onClick={() => setOpen(false)} className="btn-gold w-full">
                Richiedi la consulenza
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};
