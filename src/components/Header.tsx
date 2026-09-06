import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { site } from "@/data/site";

const nav = [
  { to: "/ristrutturazione-bagno", label: "Ristrutturazione bagno" },
  { to: "/metodo", label: "Metodo" },
  { to: "/servizi", label: "Servizi" },
  { to: "/progetti", label: "Progetti" },
  { to: "/quanto-costa-ristrutturare-bagno", label: "Costi" },
  { to: "/blog", label: "Blog" },
  { to: "/chi-siamo", label: "Chi siamo" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-alabaster/90 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <Link to="/" className="font-display text-lg font-semibold tracking-tight" aria-label={`${site.brand} — home`}>
          Bagni<span className="text-brass"> Milano</span>
        </Link>

        <nav aria-label="Navigazione principale" className="hidden lg:flex items-center gap-6">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) =>
                `text-sm transition-colors hover:text-brass-dark ${isActive ? "text-brass-dark font-semibold" : "text-ink-soft"}`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link to="/preventivo" className="btn-brass !py-2.5 !px-5 text-sm">Richiedi preventivo</Link>
        </div>

        <button
          type="button"
          className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-line"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Chiudi menu" : "Apri menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <nav id="menu-mobile" aria-label="Navigazione mobile" className="lg:hidden border-t border-line bg-alabaster">
          <ul className="container-x py-3">
            {nav.map((n) => (
              <li key={n.to}>
                <Link to={n.to} onClick={() => setOpen(false)} className="block py-3 text-ink-soft border-b border-line/60">
                  {n.label}
                </Link>
              </li>
            ))}
            <li className="pt-4 pb-2">
              <Link to="/preventivo" onClick={() => setOpen(false)} className="btn-brass w-full">Richiedi preventivo</Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};
