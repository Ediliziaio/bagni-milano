import { Link } from "react-router-dom";
import { Phone, MessageCircle } from "lucide-react";
import { site } from "@/data/site";

/** CTA sticky mobile: leva CRO principale sul traffico da smartphone. */
export const MobileCtaBar = () => (
  <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line-dark bg-ink/95 backdrop-blur md:hidden">
    <div className="grid grid-cols-3 gap-2 p-2.5">
      <a href={`tel:${site.telephoneE164}`} className="btn-outline-light !min-h-0 !py-3.5 !px-2 !text-[0.62rem]" data-cta="mobile-call">
        <Phone size={15} aria-hidden /> Chiama
      </a>
      <a
        href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Salve, vorrei informazioni per la ristrutturazione del mio bagno.")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-outline-light !min-h-0 !py-3.5 !px-2 !text-[0.62rem]"
        data-cta="mobile-whatsapp"
      >
        <MessageCircle size={15} aria-hidden /> WhatsApp
      </a>
      <Link to="/preventivo" className="btn-gold !min-h-0 !py-3.5 !px-2 !text-[0.62rem]" data-cta="mobile-quote">
        Preventivo
      </Link>
    </div>
  </div>
);
