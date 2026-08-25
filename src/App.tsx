import React, { useState, useEffect } from "react";
import { Hero } from "./components/Hero";
import { LogosMarquee } from "./components/LogosMarquee";
import { PainPoints } from "./components/PainPoints";
import { BeyondResume } from "./components/BeyondResume";
import { Footer } from "./components/Footer";
import { SITE_DATA } from "./data/content";
import { Sparkles, ArrowRight } from "lucide-react";

export default function App() {
  const [showStickyCTA, setShowStickyCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowStickyCTA(true);
      } else {
        setShowStickyCTA(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col selection:bg-emerald-500 selection:text-white">
      {/* Main Content Flow */}
      <main className="flex-grow">
        <Hero />
        <LogosMarquee />
        <PainPoints />
        <BeyondResume />
      </main>

      {/* Dark Footer Bar */}
      <Footer />

      {/* Floating Bottom Sticky CTA for Mobile (hidden on large screens where sticky sidebar is present) */}
      {showStickyCTA && (
        <aside
          aria-label="Acesso rápido à matrícula"
          className="lg:hidden fixed bottom-4 left-4 right-4 z-40 flex items-center justify-between gap-3 p-3 rounded-2xl bg-white/95 border border-slate-200 shadow-xl backdrop-blur-md transition-all duration-300"
        >
          <div className="flex flex-col text-left">
            <span className="text-[10px] text-emerald-800 font-bold uppercase tracking-wider flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-emerald-600" />
              Condição Especial
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
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider shadow-sm active:scale-95 transition-all"
          >
            <span>Garantir Vaga</span>
            <ArrowRight className="w-3.5 h-3.5 text-white" />
          </a>
        </aside>
      )}
    </div>
  );
}
