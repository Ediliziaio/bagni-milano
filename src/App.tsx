import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import HomePage from "./pages/HomePage";
import { cities, comuni } from "@/data/cities";

/* Code splitting per pagina: la home resta nel bundle iniziale (LCP). */
const RistrutturazioneBagnoPage = lazy(() => import("./pages/RistrutturazioneBagnoPage"));
const MetodoPage = lazy(() => import("./pages/MetodoPage"));
const ProcessoPage = lazy(() => import("./pages/ProcessoPage"));
const ChiSiamoPage = lazy(() => import("./pages/ChiSiamoPage"));
const CostiPage = lazy(() => import("./pages/CostiPage"));
const CalcolatorePage = lazy(() => import("./pages/CalcolatorePage"));
const TempiPage = lazy(() => import("./pages/TempiPage"));
const GeoPage = lazy(() => import("./pages/GeoPage"));
const ServiziPage = lazy(() => import("./pages/ServiziPage"));
const ServizioDetailPage = lazy(() => import("./pages/ServizioDetailPage"));
const ProgettiPage = lazy(() => import("./pages/ProgettiPage"));
const ProgettoDetailPage = lazy(() => import("./pages/ProgettoDetailPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const BlogCategoryPage = lazy(() => import("./pages/BlogCategoryPage"));
const ArticlePage = lazy(() => import("./pages/ArticlePage"));
const FaqPage = lazy(() => import("./pages/FaqPage"));
const PreventivoPage = lazy(() => import("./pages/PreventivoPage"));
const ContattiPage = lazy(() => import("./pages/ContattiPage"));
const LegalPage = lazy(() => import("./pages/LegalPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

const Fallback = () => (
  <div className="flex min-h-[60vh] items-center justify-center" role="status" aria-label="Caricamento">
    <div className="h-9 w-9 animate-spin rounded-full border-4 border-line border-t-gold" />
  </div>
);

/* React Router v6 non supporta parametri parziali dentro un segmento:
   le rotte geografiche vengono generate esplicitamente dai dati. */
const geoSlugs = [...cities.map((c) => c.slug), ...comuni.map((c) => c.slug)];

const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Suspense fallback={<Fallback />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ristrutturazione-bagno" element={<RistrutturazioneBagnoPage />} />
        <Route path="/metodo" element={<MetodoPage />} />
        <Route path="/processo" element={<ProcessoPage />} />
        <Route path="/fasi-ristrutturazione-bagno" element={<Navigate to="/processo" replace />} />
        <Route path="/come-lavoriamo" element={<Navigate to="/metodo" replace />} />
        <Route path="/chi-siamo" element={<ChiSiamoPage />} />
        <Route path="/quanto-costa-ristrutturare-bagno" element={<CostiPage />} />
        <Route path="/calcolatore-costo-bagno" element={<CalcolatorePage />} />
        <Route path="/quanto-tempo-ristrutturare-bagno" element={<TempiPage />} />

        {geoSlugs.map((slug) => (
          <Route key={slug} path={`/ristrutturazione-bagno-${slug}`} element={<GeoPage />} />
        ))}

        <Route path="/servizi" element={<ServiziPage />} />
        <Route path="/servizi/:serviceSlug" element={<ServizioDetailPage />} />
        <Route path="/progetti" element={<ProgettiPage />} />
        <Route path="/progetti/:projectSlug" element={<ProgettoDetailPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/categoria/:categorySlug" element={<BlogCategoryPage />} />
        <Route path="/blog/:articleSlug" element={<ArticlePage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/preventivo" element={<PreventivoPage />} />
        <Route path="/contatti" element={<ContattiPage />} />
        <Route path="/privacy-policy" element={<LegalPage kind="privacy" />} />
        <Route path="/cookie-policy" element={<LegalPage kind="cookie" />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default App;
