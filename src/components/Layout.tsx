import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { MobileCtaBar } from "./MobileCtaBar";

export const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:m-3 focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-cream">
      Vai al contenuto
    </a>
    <Header />
    <main id="main" className="pb-20 md:pb-0">{children}</main>
    <Footer />
    <MobileCtaBar />
  </>
);
