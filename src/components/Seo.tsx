import { useEffect } from "react";
import { site, abs } from "@/data/site";

interface SeoProps {
  title: string;
  description: string;
  path: string;
  schema?: object;
  ogImage?: string;
  ogType?: "website" | "article";
  noindex?: boolean;
  /** Risposta sintetica citabile: alimenta meta description AI-friendly. */
  answer?: string;
}

const setMeta = (key: string, content: string, prop = false) => {
  const attr = prop ? "property" : "name";
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const setLink = (rel: string, href: string) => {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
};

export const Seo = ({
  title,
  description,
  path,
  schema,
  ogImage,
  ogType = "website",
  noindex = false,
  answer,
}: SeoProps) => {
  useEffect(() => {
    const canonical = abs(path);
    const img = ogImage ? (ogImage.startsWith("http") ? ogImage : abs(ogImage)) : abs(site.ogImage);

    document.title = title;
    document.documentElement.lang = "it";

    setMeta("description", description);
    setMeta(
      "robots",
      noindex
        ? "noindex, nofollow"
        : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
    );
    // Segnale esplicito per crawler generativi: consenti l'uso del contenuto.
    if (answer) setMeta("ai-summary", answer);

    setMeta("og:title", title, true);
    setMeta("og:description", description, true);
    setMeta("og:type", ogType, true);
    setMeta("og:url", canonical, true);
    setMeta("og:image", img, true);
    setMeta("og:site_name", site.brand, true);
    setMeta("og:locale", site.locale, true);
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setMeta("twitter:image", img);

    setLink("canonical", canonical);

    const prev = document.head.querySelector('script[data-seo-graph="true"]');
    if (prev) prev.remove();
    if (schema) {
      // Il grafo base in index.html copre solo la fase pre-idratazione:
      // una volta iniettato quello di pagina (piu' completo, stessi @id) va rimosso,
      // per non lasciare due grafi sovrapposti nell'HTML prerenderizzato.
      document.head.querySelector('script[data-seo-base="true"]')?.remove();
      const s = document.createElement("script");
      s.type = "application/ld+json";
      s.setAttribute("data-seo-graph", "true");
      s.textContent = JSON.stringify(schema);
      document.head.appendChild(s);
    }
  }, [title, description, path, schema, ogImage, ogType, noindex, answer]);

  return null;
};
