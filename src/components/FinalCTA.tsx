import React from "react";
import { SITE_DATA } from "../data/content";
import { ArrowRight, ShieldCheck, UserCheck, Sparkles } from "lucide-react";

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Subtle Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-slate-800 text-slate-300 border border-slate-700 mb-6">
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
          Aprovação Começa com Posicionamento Estratégico
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-6 leading-tight">
          Chegue aos processos seletivos sabendo{" "}
          <span className="text-emerald-400">exatamente o que fazer.</span>
        </h2>

        {/* Copy */}
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-10">
          Você não precisa continuar na dúvida ou no improviso. O <strong className="text-white font-semibold">Aprova Coop</strong> foi desenhado para transformar sua trajetória em uma candidatura de alto impacto.
        </p>

        {/* Main Action Box */}
        <div className="bg-slate-800/80 p-8 rounded-2xl border border-slate-700 max-w-md mx-auto shadow-2xl backdrop-blur-sm">
          <div className="flex items-baseline justify-center gap-2 mb-1">
            <span className="text-slate-400 line-through text-base font-medium">{SITE_DATA.regularPrice}</span>
            <span className="text-3xl sm:text-4xl font-black text-white">{SITE_DATA.specialPrice}</span>
          </div>
          <p className="text-xs text-slate-400 mb-6">{SITE_DATA.installments}</p>

          <a
            id="final-cta-button"
            href={SITE_DATA.checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black text-sm uppercase tracking-wider shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all flex items-center justify-center gap-2 group"
          >
            <span>Quero Garantir Minha Vaga</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>

          <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Garantia incondicional de 7 dias via Kiwify</span>
          </div>
        </div>

        {/* Footnote reassurance */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <UserCheck className="w-3.5 h-3.5 text-emerald-400" />
            Atendimento 1:1 Direto
          </span>
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            100+ Simulados de Cooperativas
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            12 Anos no Sicredi
          </span>
        </div>

      </div>
    </section>
  );
};
