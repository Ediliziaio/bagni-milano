import { Link } from "react-router-dom";
import { Phone, MessageCircle } from "lucide-react";
import { site } from "@/data/site";

/** CTA sticky mobile: leva CRO principale sul traffico da smartphone. */
export const MobileCtaBar = () => (
  <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line-dark bg-ink/95 backdrop-blur md:hidden">
    <div className="grid grid-cols-2 gap-2 p-2.5">
      <a
        href={`tel:${String(site.telephone).replace(/\s/g, "")}`}
        className="btn-outline-light !min-h-0 !py-3.5 !px-4"
        data-cta="mobile-call"
      >
        <Phone size={16} aria-hidden /> Chiama
      </a>
      <Link to="/preventivo" className="btn-gold !min-h-0 !py-3.5 !px-4" data-cta="mobile-quote">
        <MessageCircle size={16} aria-hidden /> Preventivo
      </Link>
    </div>
  </div>
);
