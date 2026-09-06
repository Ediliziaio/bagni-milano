import { Link } from "react-router-dom";
import { Phone, MessageCircle } from "lucide-react";
import { site } from "@/data/site";

/** CTA sticky mobile: leva CRO principale su traffico da smartphone. */
export const MobileCtaBar = () => (
  <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-alabaster/95 backdrop-blur md:hidden">
    <div className="grid grid-cols-2 gap-2 p-2.5">
      <a
        href={`tel:${String(site.telephone).replace(/\s/g, "")}`}
        className="btn-ghost !py-3 text-sm"
        data-cta="mobile-call"
      >
        <Phone size={17} aria-hidden /> Chiama
      </a>
      <Link to="/preventivo" className="btn-brass !py-3 text-sm" data-cta="mobile-quote">
        <MessageCircle size={17} aria-hidden /> Preventivo
      </Link>
    </div>
  </div>
);
