import React, { useState } from "react";
import { SITE_DATA } from "../data/content";
import { ChevronDown, HelpCircle, ShieldAlert, Sparkles, ArrowRight } from "lucide-react";

export const ObjectionsFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="duvidas" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700 border border-slate-200 mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-slate-900" />
            Tire Suas Dúvidas
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Perguntas Frequentes sobre o Aprova Coop
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Esclarecemos os principais questionamentos sobre formato, agendamentos e elegibilidade.
          </p>
        </div>

        {/* Accordion FAQ */}
        <div className="space-y-3 mb-12">
          {SITE_DATA.faq.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-xl border transition-all ${
                  isOpen ? "bg-slate-50 border-slate-300 shadow-xs" : "bg-white border-slate-200 hover:border-slate-300"
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-bold text-slate-900 text-sm sm:text-base">
                    {item.question}
                  </span>
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-slate-900 text-white" : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-200/60 pt-3">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Final Reassurance Box */}
        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center">
          <h3 className="font-bold text-slate-900 text-base mb-1">Ainda ficou com alguma dúvida específica?</h3>
          <p className="text-xs text-slate-500 mb-4 max-w-md mx-auto">
            Garantimos 100% de flexibilidade de horários para os encontros individuais, adaptados à sua rotina atual.
          </p>
          <a
            href={SITE_DATA.checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider transition-colors"
          >
            <span>Fazer Inscrição no Aprova Coop</span>
            <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
          </a>
        </div>

      </div>
    </section>
  );
};
