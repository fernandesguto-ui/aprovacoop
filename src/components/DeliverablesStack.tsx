import React from "react";
import { SITE_DATA } from "../data/content";
import { Check, ShieldCheck, ArrowRight, Layers } from "lucide-react";

export const DeliverablesStack: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700 border border-slate-200 mb-4">
            <Layers className="w-3.5 h-3.5 text-slate-900" />
            Visão Geral Completa
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Tudo o que está incluso no Aprova Coop
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Um pacote completo de orientação individual, estratégia prática e acompanhamento até a sua entrevista.
          </p>
        </div>

        {/* Stack Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
          <div className="divide-y divide-slate-200">
            {SITE_DATA.deliverablesSummary.map((item, idx) => (
              <div key={idx} className="py-4 first:pt-0 last:pb-0 flex items-start gap-3.5">
                <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <div className="flex-1">
                  <span className="text-xs sm:text-sm font-bold text-slate-900 block">
                    {item.title}
                  </span>
                  <span className="text-xs text-slate-500 leading-relaxed">
                    {item.subtitle}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Garantia de 7 dias ou seu dinheiro de volta.</span>
            </div>
            <a
              href="#investimento"
              className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1"
            >
              <span>Ver Condições de Investimento</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
