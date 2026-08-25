import React, { useState, useEffect } from "react";
import { Hero } from "./components/Hero";
import { PainPoints } from "./components/PainPoints";
import { BeyondResume } from "./components/BeyondResume";
import { Authority } from "./components/Authority";
import { Methodology } from "./components/Methodology";
import { AboutMe } from "./components/AboutMe";
import { Bonuses } from "./components/Bonuses";
import { DeliverablesStack } from "./components/DeliverablesStack";
import { Pricing } from "./components/Pricing";
import { ObjectionsFAQ } from "./components/ObjectionsFAQ";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { SITE_DATA } from "./data/content";
import { ArrowUp, Sparkles, ArrowRight } from "lucide-react";

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showStickyCTA, setShowStickyCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
        setShowStickyCTA(true);
      } else {
        setShowScrollTop(false);
        setShowStickyCTA(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col selection:bg-emerald-500 selection:text-white">
      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero />
        <PainPoints />
        <BeyondResume />
        <Methodology />
        <AboutMe />
        <Bonuses />
        <DeliverablesStack />
        <Pricing />
        <ObjectionsFAQ />
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Bottom Sticky CTA for Mobile/Desktop */}
      {showStickyCTA && (
        <aside
          aria-label="Acesso rápido à matrícula"
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 z-40 flex items-center justify-between sm:justify-end gap-3 p-3 sm:px-5 sm:py-3 rounded-2xl bg-white/95 border border-slate-200 shadow-xl backdrop-blur-md transition-all duration-300"
        >
          <div className="flex flex-col text-left">
            <span className="text-[10px] text-emerald-800 font-bold uppercase tracking-wider flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-emerald-600" />
              Condição Especial 1:1
            </span>
            <div className="flex items-baseline gap-1.5">
              <span className="text-xs text-slate-400 line-through">{SITE_DATA.regularPrice}</span>
              <span className="text-sm font-black text-slate-900">{SITE_DATA.specialPrice}</span>
            </div>
          </div>

          <a
            id="floating-sticky-cta"
            href={SITE_DATA.checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider shadow-sm active:scale-95 transition-all"
          >
            <span>Garantir Vaga</span>
            <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
          </a>
        </aside>
      )}

      {/* Back to top button */}
      {showScrollTop && (
        <button
          id="back-to-top-button"
          onClick={scrollToTop}
          className="fixed bottom-20 sm:bottom-6 left-4 z-40 p-3 rounded-xl bg-white text-slate-600 hover:text-slate-900 border border-slate-200 shadow-md hover:border-slate-400 transition-all focus:outline-none"
          aria-label="Voltar ao topo"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
