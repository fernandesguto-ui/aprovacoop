import React from "react";
import { SITE_DATA } from "../data/content";
import { Check, Compass, Sparkles, ArrowRight } from "lucide-react";

export const BeyondResume: React.FC = () => {
  const pillars = [
    {
      title: "O que as cooperativas procuram",
      desc: "Compreender a cultura cooperativista, os valores comunitários e o perfil de profissional valorizado."
    },
    {
      title: "Como sua experiência gera valor real",
      desc: "Traduzir conquistas passadas em resultados tangíveis para a instituição e para os cooperados."
    },
    {
      title: "Para quais vagas seu perfil faz sentido",
      desc: "Focar sua energia nas oportunidades certas com alta taxa de aderência ao seu momento de carreira."
    },
    {
      title: "Currículo estratégico e de alto impacto",
      desc: "Estruturação sob medida para superar os filtros do ATS (Gupy, etc.) e prender a atenção do recrutador."
    },
    {
      title: "Posicionamento no LinkedIn & plataformas",
      desc: "Perfil otimizado com palavras-chave estratégicas para ser encontrado ativamente por recrutadores."
    },
    {
      title: "Falar sobre você sem decorar respostas",
      desc: "Apresentar sua história profissional com naturalidade, clareza, autenticidade e segurança."
    },
    {
      title: "Demonstrar competências na entrevista",
      desc: "Evidenciar habilidades comportamentais e técnicas com exemplos reais e histórias envolventes."
    },
    {
      title: "Preparação sob medida para cada vaga",
      desc: "Estratégia personalizada para a instituição e para a vaga específica que você for disputar."
    }
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 mb-4">
            <Compass className="w-3.5 h-3.5 text-emerald-600" />
            Visão Além do Papel
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Não é apenas sobre ter um bom currículo
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Um currículo bem formatado pode até abrir a primeira porta. Mas para <strong className="text-emerald-700 font-semibold">conquistar a oportunidade</strong>, você precisa dominar o jogo completo do posicionamento.
          </p>
        </div>

        {/* 8 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 hover:bg-white hover:shadow-sm transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="w-7 h-7 rounded-md bg-slate-900 text-white flex items-center justify-center font-bold text-xs mb-3 group-hover:bg-emerald-600 transition-colors">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1.5 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Transferable Skills Box */}
        <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 mb-3">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                Mesmo sem experiência bancária prévia
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                Identificamos suas Competências Transferíveis
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Mesmo que você nunca tenha atuado em uma agência bancária, suas experiências anteriores em outros segmentos podem carregar exatamente o que as cooperativas procuram:
              </p>
              <div className="flex flex-wrap gap-2">
                {SITE_DATA.transferableSkills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 shadow-2xs"
                  >
                    ✓ {skill.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-auto shrink-0 flex flex-col items-center justify-center p-6 rounded-xl bg-white border border-slate-200 text-center max-w-xs shadow-xs">
              <span className="text-[11px] uppercase tracking-wider text-slate-500 font-bold mb-2">
                Nosso Compromisso
              </span>
              <p className="text-xs text-slate-700 leading-relaxed italic mb-4">
                “Não vamos inventar experiência. Vamos aprender a demonstrar corretamente o valor da experiência que você já possui.”
              </p>
              <a
                href={SITE_DATA.checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs transition-colors"
              >
                <span>Inscrever-se no Aprova Coop</span>
                <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
