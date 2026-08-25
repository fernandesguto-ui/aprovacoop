import React, { useState } from "react";
import { SITE_DATA, Meeting } from "../data/content";
import { 
  User, 
  Search, 
  FileText, 
  Mic, 
  Sparkles, 
  CheckCircle2, 
  Gift, 
  ArrowRight,
  Target
} from "lucide-react";

export const Methodology: React.FC = () => {
  const [activeMeeting, setActiveMeeting] = useState<number>(1);

  const getMeetingIcon = (num: number) => {
    switch (num) {
      case 1:
        return <User className="w-4 h-4" />;
      case 2:
        return <Search className="w-4 h-4" />;
      case 3:
        return <FileText className="w-4 h-4" />;
      case 4:
        return <Mic className="w-4 h-4" />;
      case 5:
        return <Sparkles className="w-4 h-4" />;
      default:
        return <Target className="w-4 h-4" />;
    }
  };

  return (
    <section id="metodologia" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 mb-4">
            <Target className="w-3.5 h-3.5 text-emerald-600" />
            Método Estruturado 1:1
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            O Método Aprova Coop: 5 Encontros Individuais
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Serão <strong className="text-slate-900 font-semibold">5 encontros individuais 1:1</strong>. Os 4 primeiros dedicados à construção da sua base e o 5º encontro reservado para quando você for chamado para uma <strong className="text-emerald-700 font-semibold">entrevista real</strong>.
          </p>
        </div>

        {/* 5 Encontros Grid Overview (as in Professional Polish design) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div 
            onClick={() => setActiveMeeting(1)}
            className={`p-6 rounded-2xl border cursor-pointer transition-all ${
              activeMeeting === 1 
                ? "bg-slate-50 border-slate-900 shadow-sm" 
                : "bg-white border-slate-200 hover:border-slate-300 shadow-xs"
            }`}
          >
            <div className="w-8 h-8 bg-slate-900 text-white rounded-lg flex items-center justify-center font-bold text-xs mb-3">01</div>
            <h3 className="font-bold text-slate-900 text-base mb-1">Trajetória e Valor</h3>
            <p className="text-xs text-slate-500 leading-normal mb-3">Diagnóstico profissional e identificação de competências transferíveis para o mercado.</p>
            <span className="text-[11px] font-semibold text-emerald-700 hover:underline">Ver detalhes do encontro →</span>
          </div>

          <div 
            onClick={() => setActiveMeeting(2)}
            className={`p-6 rounded-2xl border cursor-pointer transition-all ${
              activeMeeting === 2 
                ? "bg-slate-50 border-slate-900 shadow-sm" 
                : "bg-white border-slate-200 hover:border-slate-300 shadow-xs"
            }`}
          >
            <div className="w-8 h-8 bg-slate-900 text-white rounded-lg flex items-center justify-center font-bold text-xs mb-3">02</div>
            <h3 className="font-bold text-slate-900 text-base mb-1">O que as Coops Procuram</h3>
            <p className="text-xs text-slate-500 leading-normal mb-3">Análise de cultura, requisitos e cruzamento de perfil vs. vaga desejada.</p>
            <span className="text-[11px] font-semibold text-emerald-700 hover:underline">Ver detalhes do encontro →</span>
          </div>

          <div 
            onClick={() => setActiveMeeting(3)}
            className={`p-6 rounded-2xl border cursor-pointer transition-all ${
              activeMeeting === 3 
                ? "bg-slate-50 border-slate-900 shadow-sm" 
                : "bg-white border-slate-200 hover:border-slate-300 shadow-xs"
            }`}
          >
            <div className="w-8 h-8 bg-slate-900 text-white rounded-lg flex items-center justify-center font-bold text-xs mb-3">03</div>
            <h3 className="font-bold text-slate-900 text-base mb-1">Currículo e LinkedIn</h3>
            <p className="text-xs text-slate-500 leading-normal mb-3">Construção estratégica AO VIVO do seu currículo e perfil otimizado para plataformas.</p>
            <span className="text-[11px] font-semibold text-emerald-700 hover:underline">Ver detalhes do encontro →</span>
          </div>

          <div 
            onClick={() => setActiveMeeting(4)}
            className={`p-6 rounded-2xl border cursor-pointer transition-all ${
              activeMeeting === 4 
                ? "bg-slate-50 border-slate-900 shadow-sm" 
                : "bg-white border-slate-200 hover:border-slate-300 shadow-xs"
            }`}
          >
            <div className="w-8 h-8 bg-slate-900 text-white rounded-lg flex items-center justify-center font-bold text-xs mb-3">04</div>
            <h3 className="font-bold text-slate-900 text-base mb-1">Venda Pessoal</h3>
            <p className="text-xs text-slate-500 leading-normal mb-3">Posicionamento, tom de voz e como responder perguntas difíceis com segurança.</p>
            <span className="text-[11px] font-semibold text-emerald-700 hover:underline">Ver detalhes do encontro →</span>
          </div>

          <div 
            onClick={() => setActiveMeeting(5)}
            className={`bg-emerald-600 text-white p-6 rounded-2xl border border-emerald-500 shadow-md md:col-span-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 cursor-pointer transition-all hover:bg-emerald-700 ${
              activeMeeting === 5 ? "ring-4 ring-emerald-300" : ""
            }`}
          >
            <div className="flex items-center gap-4">
              <div className="shrink-0 w-12 h-12 bg-white text-emerald-700 rounded-full flex items-center justify-center font-black text-xl shadow-xs">
                05
              </div>
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider bg-emerald-700/80 px-2 py-0.5 rounded-full inline-block mb-1">Bônus Especial</span>
                <h3 className="font-bold text-white text-base sm:text-lg mb-0.5">Simulação de Entrevista Real (1:1)</h3>
                <p className="text-xs text-emerald-50 leading-relaxed">Encontro individual realizado especificamente quando você for chamado para uma vaga.</p>
              </div>
            </div>
            <button className="px-4 py-2 bg-white text-slate-900 rounded-lg text-xs font-bold shrink-0 self-end sm:self-center shadow-xs">
              Ver Detalhes
            </button>
          </div>
        </div>

        {/* Detailed Active Meeting Expansion Box */}
        {SITE_DATA.meetings.map((m) => {
          if (m.number !== activeMeeting) return null;
          return (
            <div
              key={m.number}
              className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm mb-10 transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-200">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-900 text-white">
                      {getMeetingIcon(m.number)}
                      {m.tag}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">Acompanhamento Individual 1:1</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">{m.title}</h3>
                  <p className="text-xs sm:text-sm font-semibold text-emerald-700">{m.subtitle}</p>
                </div>
                <span className="text-xs font-semibold px-3 py-1 bg-white border border-slate-200 rounded-lg text-slate-700 shrink-0 self-start sm:self-auto">
                  {m.number === 5 ? "Realizado no agendamento da vaga" : `Etapa ${m.number} de 5`}
                </span>
              </div>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                {m.description}
              </p>

              <h4 className="text-xs uppercase font-bold tracking-wider text-slate-500 mb-3">
                O que vamos construir neste encontro:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 mb-6">
                {m.keyPoints.map((point, pIdx) => (
                  <div
                    key={pIdx}
                    className="p-3 rounded-lg bg-white border border-slate-200 flex items-start gap-2.5 text-xs text-slate-700 shadow-2xs"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              {/* Deliverable result */}
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs sm:text-sm text-emerald-900 font-medium flex items-center gap-3">
                <Sparkles className="w-4 h-4 shrink-0 text-emerald-600" />
                <div>
                  <span className="font-bold block text-emerald-950 text-xs uppercase tracking-wider">
                    Resultado deste Encontro:
                  </span>
                  <span>{m.deliverable}</span>
                </div>
              </div>
            </div>
          );
        })}

        {/* 3 Quick Pillar Bonus Tags */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
            <div>
              <span className="text-[11px] font-bold text-slate-900 uppercase block">Plano 90 Dias</span>
              <span className="text-xs text-slate-500">Guia de adaptação e carreira</span>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
            <div>
              <span className="text-[11px] font-bold text-slate-900 uppercase block">Simulados Práticos</span>
              <span className="text-xs text-slate-500">Plataforma com testes de cooperativas</span>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
            <div>
              <span className="text-[11px] font-bold text-slate-900 uppercase block">PDF de Cultura</span>
              <span className="text-xs text-slate-500">Princípios e valores do cooperativismo</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
