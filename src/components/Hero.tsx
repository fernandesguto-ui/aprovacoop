import React from "react";
import { SITE_DATA } from "../data/content";
import { ArrowRight, CheckCircle2, UserCheck, Shield, Sparkles, Building2 } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-16 lg:pb-28 bg-white border-b border-slate-200">
      {/* Subtle light background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-50/60 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-slate-100/80 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          {/* Project Logo without background */}
          <div className="flex items-center justify-center mb-6 sm:mb-8">
            <img
              src={SITE_DATA.logoUrl}
              alt="Aprova Coop"
              className="h-14 sm:h-16 md:h-20 w-auto object-contain transition-transform duration-200 hover:scale-105"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-6">
            Conquiste sua vaga em uma{" "}
            <span className="text-emerald-600">
              Cooperativa de Crédito.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed mb-4 max-w-3xl mx-auto">
            Você não precisa continuar enviando currículos sem saber por que não está avançando nos processos seletivos.
          </p>

          <p className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-2xl mx-auto">
            Existe uma diferença enorme entre <span className="text-slate-800 font-semibold">querer trabalhar em uma cooperativa</span> e <span className="text-emerald-700 font-semibold">saber se posicionar</span> como o profissional que faz sentido para aquela instituição.
          </p>
        </div>

        {/* Highlight Summary Card */}
        <div className="max-w-3xl mx-auto mb-10 p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-0.5 rounded-full bg-slate-900 text-white font-bold text-[11px] uppercase tracking-wider shadow">
            O que é o Aprova Coop
          </div>
          
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed text-center">
            Um processo de <strong className="text-slate-900 font-semibold">preparação individual 1:1, em 5 encontros</strong>, para ajudar você a entender o mercado, identificar seu valor profissional, melhorar seu posicionamento e chegar <strong className="text-emerald-700 font-semibold">muito mais preparado</strong> aos processos seletivos de cooperativas de crédito.
          </p>

          {/* Quick Pillars Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-5 border-t border-slate-200 text-xs font-medium text-slate-600">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Currículo Ao Vivo</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>LinkedIn Otimizado</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Simulação Real 1:1</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Gupy & ATS Sem Mistério</span>
            </div>
          </div>
        </div>

        {/* Action CTA & Price Anchor */}
        <div className="flex flex-col items-center justify-center text-center gap-4">
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-md max-w-md w-full">
            <div className="flex items-end justify-center gap-3 mb-1">
              <span className="text-slate-400 line-through text-lg font-medium">{SITE_DATA.regularPrice}</span>
              <span className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">{SITE_DATA.specialPrice}</span>
            </div>
            <p className="text-slate-500 text-xs sm:text-sm mb-5 font-medium">{SITE_DATA.installments}</p>
            
            <a
              id="hero-main-cta-button"
              href={SITE_DATA.checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block w-full py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base uppercase tracking-wider shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span className="inline-flex items-center justify-center gap-2">
                Quero me preparar agora
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </a>

            <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-500">
              <Shield className="w-3.5 h-3.5 text-emerald-600" />
              <span>Inscrição 100% Segura via Kiwify</span>
            </div>
          </div>
        </div>

        {/* Cooperatives Target Banner with Animated Logo Carousel */}
        <div className="mt-16 pt-8 border-t border-slate-200 text-center">
          <p className="text-[11px] uppercase tracking-widest text-slate-500 font-bold mb-6">
            Metodologia baseada em experiências reais no sistema de cooperativas:
          </p>

          {/* Marquee Carousel with transparent gradient fade edges */}
          <div className="relative w-full overflow-hidden py-2">
            {/* Left transparent gradient edge */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-slate-50 to-transparent z-10" />
            
            {/* Right transparent gradient edge */}
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-slate-50 to-transparent z-10" />

            {/* Continuous Marquee Track */}
            <div className="animate-marquee flex items-center gap-8 sm:gap-14">
              {/* Group 1 */}
              {SITE_DATA.cooperativeLogos.map((item, index) => (
                <div
                  key={`logo-1-${index}`}
                  className="flex items-center justify-center shrink-0 px-2 sm:px-4"
                >
                  <img
                    src={item.url}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    className="h-8 sm:h-10 max-w-[140px] sm:max-w-[170px] w-auto object-contain transition-transform hover:scale-105"
                  />
                </div>
              ))}

              {/* Group 2 (Duplicate for seamless infinite loop) */}
              {SITE_DATA.cooperativeLogos.map((item, index) => (
                <div
                  key={`logo-2-${index}`}
                  className="flex items-center justify-center shrink-0 px-2 sm:px-4"
                >
                  <img
                    src={item.url}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    className="h-8 sm:h-10 max-w-[140px] sm:max-w-[170px] w-auto object-contain transition-transform hover:scale-105"
                  />
                </div>
              ))}

              {/* Group 3 (Duplicate for seamless infinite loop) */}
              {SITE_DATA.cooperativeLogos.map((item, index) => (
                <div
                  key={`logo-3-${index}`}
                  className="flex items-center justify-center shrink-0 px-2 sm:px-4"
                >
                  <img
                    src={item.url}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    className="h-8 sm:h-10 max-w-[140px] sm:max-w-[170px] w-auto object-contain transition-transform hover:scale-105"
                  />
                </div>
              ))}

              {/* Group 4 (Duplicate for ultra smooth continuous loop on widescreen) */}
              {SITE_DATA.cooperativeLogos.map((item, index) => (
                <div
                  key={`logo-4-${index}`}
                  className="flex items-center justify-center shrink-0 px-2 sm:px-4"
                >
                  <img
                    src={item.url}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    className="h-8 sm:h-10 max-w-[140px] sm:max-w-[170px] w-auto object-contain transition-transform hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
