import { Link } from "react-router-dom";
import { Seo } from "@/components/Seo";
import { Layout } from "@/components/Layout";
import { cities } from "@/data/cities";

export default function NotFoundPage() {
  return (
    <Layout>
      <Seo title="Pagina non trovata | Bagni Milano" description="La pagina cercata non esiste." path="/404" noindex />
      <section className="container-x py-24 text-center">
        <p className="eyebrow">Errore 404</p>
        <h1 className="mt-3">Questa pagina non esiste</h1>
        <p className="lede mx-auto mt-5 max-w-lg">Forse cercavi una di queste.</p>
        <div className="mx-auto mt-10 flex max-w-2xl flex-wrap justify-center gap-3">
          <Link to="/ristrutturazione-bagno" className="btn-outline">Ristrutturazione bagno</Link>
          <Link to="/quanto-costa-ristrutturare-bagno" className="btn-outline">Quanto costa</Link>
          <Link to="/metodo" className="btn-outline">Il metodo</Link>
          <Link to="/blog" className="btn-outline">Blog</Link>
          {cities.map((c) => (
            <Link key={c.slug} to={`/ristrutturazione-bagno-${c.slug}`} className="btn-outline">{c.name}</Link>
          ))}
        </div>
        <Link to="/" className="btn-gold mt-10">Torna alla home</Link>
      </section>
    </Layout>
  );
}
