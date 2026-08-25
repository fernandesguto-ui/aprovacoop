import React from "react";
import { SITE_DATA } from "../data/content";
import { HelpCircle, AlertCircle, MessageSquareQuote, CheckCircle, ArrowDown } from "lucide-react";

export const PainPoints: React.FC = () => {
  return (
    <section id="como-funciona" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200 mb-4">
            <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
            Você se identifica com este cenário?
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Por que tantos profissionais qualificados travam nos processos seletivos?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Talvez você já tenha formação, anos de experiência e competência, mas ainda não conseguiu traduzir isso na linguagem que as cooperativas de crédito buscam.
          </p>
        </div>

        {/* 3 Common Pains Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 rounded-lg bg-slate-900 text-white flex items-center justify-center font-bold text-xs mb-4">
                01
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Currículo que não desperta interesse
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Você envia dezenas de candidaturas em plataformas como Gupy e LinkedIn, mas raramente recebe um retorno ou avança para as próximas fases.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-100 text-xs text-red-700 font-semibold flex items-center gap-1.5">
              <span>✕</span> Falta de palavras-chave e adequação ao ATS
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 rounded-lg bg-slate-900 text-white flex items-center justify-center font-bold text-xs mb-4">
                02
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Insegurança nas perguntas decisivas
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Quando chega à entrevista, fica em dúvida sobre o que falar, responde de forma improvisada ou sente que não conseguiu demonstrar o seu real potencial.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-100 text-xs text-amber-700 font-semibold flex items-center gap-1.5">
              <span>✕</span> Falta de narrativa estruturada e simulação
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 rounded-lg bg-slate-900 text-white flex items-center justify-center font-bold text-xs mb-4">
                03
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                A dúvida de não ter histórico em banco
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Você pensa que por não ter trabalhado em agência bancária tradicional não terá chances, sem saber como transferir suas experiências anteriores.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-100 text-xs text-purple-700 font-semibold flex items-center gap-1.5">
              <span>✕</span> Desconhecimento das competências transferíveis
            </div>
          </div>
        </div>

        {/* The 3 Tough Interview Questions Section */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm mb-12">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs uppercase tracking-wider text-emerald-700 font-bold">
              O Momento Decisivo da Entrevista
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
              Como você responde a estas perguntas clássicas?
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {SITE_DATA.anxiousQuestions.map((q, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-slate-50 border border-slate-200 hover:border-emerald-500/50 transition-colors"
              >
                <div className="flex items-center gap-2 mb-2.5">
                  <MessageSquareQuote className="w-4 h-4 text-emerald-600 shrink-0" />
                  <h4 className="text-sm font-bold text-slate-900">
                    {q.question}
                  </h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {q.description}
                </p>
              </div>
            ))}
          </div>

          {/* Post-interview frustration quotes */}
          <div className="mt-8 pt-6 border-t border-slate-100">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500 text-center mb-3">
              E depois da entrevista, fica aquela sensação amarga:
            </p>
            <div className="flex flex-wrap justify-center gap-2.5 text-xs text-slate-600">
              <span className="px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 italic">
                “Eu poderia ter respondido melhor.”
              </span>
              <span className="px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 italic">
                “Eu tenho experiência, mas não consegui demonstrar.”
              </span>
              <span className="px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 italic">
                “O que será que eles realmente procuram?”
              </span>
              <span className="px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 italic">
                “Será que o problema é nunca ter trabalhado em banco?”
              </span>
            </div>
          </div>
        </div>

        {/* The Turnaround Solution */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center p-2 rounded-full bg-emerald-50 text-emerald-600 mb-3 border border-emerald-100">
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-2">
            É exatamente para transformar essa realidade que nasceu o <span className="text-emerald-600">APROVA COOP</span>.
          </h3>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Um método individual e prático para você parar de entrar nos processos seletivos no improviso e passar a chegar <strong className="text-slate-900 font-semibold">consciente do seu valor e sabendo exatamente como demonstrá-lo</strong>.
          </p>
        </div>

      </div>
    </section>
  );
};
