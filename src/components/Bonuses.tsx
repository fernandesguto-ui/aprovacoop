import React from "react";
import { SITE_DATA } from "../data/content";
import { Gift, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

export const Bonuses: React.FC = () => {
  return (
    <section id="bonus" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200 mb-4">
            <Gift className="w-3.5 h-3.5 text-amber-600" />
            Materiais & Acompanhamentos Exclusivos
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            E a preparação não termina nos primeiros 4 encontros
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Além de toda a estruturação da sua base profissional, você recebe <strong className="text-slate-900 font-semibold">3 bônus estratégicos</strong> para garantir segurança na entrevista, na prova e na sua entrada na cooperativa.
          </p>
        </div>

        {/* 3 Bonuses Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {SITE_DATA.bonuses.map((bonus, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-[11px] font-extrabold tracking-wider border border-amber-200 mb-4">
                  {bonus.badge}
                </span>

                <h3 className="text-lg font-bold text-slate-900 mb-1 leading-snug">
                  {bonus.title}
                </h3>
                
                <p className="text-xs text-emerald-700 font-bold mb-3">
                  {bonus.subtitle}
                </p>

                <p className="text-xs text-slate-600 leading-relaxed mb-5">
                  {bonus.description}
                </p>

                <div className="space-y-2 pt-3 border-t border-slate-100">
                  {bonus.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-semibold text-emerald-700 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span>{bonus.highlight}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Mini Banner */}
        <div className="text-center">
          <a
            href={SITE_DATA.checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
          >
            <span>Quero Todos os Bônus e Encontros 1:1</span>
            <ArrowRight className="w-4 h-4 text-emerald-400" />
          </a>
        </div>

      </div>
    </section>
  );
};
