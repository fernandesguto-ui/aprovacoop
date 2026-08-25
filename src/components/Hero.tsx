import React from "react";
import { SITE_DATA } from "../data/content";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  FileText,
  Linkedin,
  Video,
  Cpu,
  Shield,
  Sparkles,
  TrendingUp,
  UserCheck,
} from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-12 lg:pb-20 bg-white border-b border-slate-200">
      {/* Subtle light background accent */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-emerald-50/50 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-slate-50 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 2-Column Grid on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column (Hero Content) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Project Logo at the Top */}
            <div className="w-full flex justify-center sm:justify-start mb-6">
              <img
                src={SITE_DATA.logoUrl}
                alt="Aprova Coop"
                className="h-16 sm:h-12 w-auto object-contain"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = "none";
                }}
              />
            </div>

            {/* Top Amber Badge */}
            <div className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-900 border border-amber-200 mb-6 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              <span>Preparação individual para transformar experiência em contratação.</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold text-slate-900 tracking-tight leading-[1.12] mb-6">
              Conquiste sua vaga <br className="hidden sm:block" />
              em uma{" "}
              <span className="text-emerald-600">
                Cooperativa <br className="hidden sm:block" />
                de Crédito.
              </span>
            </h1>

            {/* Subtitle Paragraphs */}
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed mb-3 max-w-2xl">
              Você não precisa continuar enviando currículos sem saber por que não está avançando nos processos seletivos.
            </p>

            <p className="text-sm sm:text-base text-slate-500 leading-relaxed mb-8 max-w-2xl">
              Existe uma diferença enorme entre querer trabalhar em uma cooperativa e{" "}
              <strong className="text-emerald-700 font-semibold">saber se posicionar</strong> como o profissional que faz sentido para aquela instituição.
            </p>

            {/* 4 Feature Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 w-full mb-8">
              <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs flex flex-col items-center text-center justify-center gap-2 hover:border-emerald-300 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <FileText className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-slate-800 leading-snug">
                  Currículo ao vivo
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs flex flex-col items-center text-center justify-center gap-2 hover:border-emerald-300 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <Linkedin className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-slate-800 leading-snug">
                  LinkedIn otimizado
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs flex flex-col items-center text-center justify-center gap-2 hover:border-emerald-300 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <Video className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-slate-800 leading-snug">
                  Simulação real 1:1
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs flex flex-col items-center text-center justify-center gap-2 hover:border-emerald-300 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <Cpu className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-slate-800 leading-snug">
                  Gupy & ATS sem mistério
                </span>
              </div>
            </div>

          </div>

          {/* Right Column (Layered Mockup / Graphic Cards) */}
          <div className="lg:col-span-5 relative w-full flex items-center justify-center pt-6 lg:pt-0">
            <div className="relative w-full max-w-[440px] aspect-[4/5] sm:aspect-square lg:aspect-[4/5] flex items-center justify-center">
              {/* Card 1: Dark Profile Card (Top Right) */}
              <div className="absolute top-2 sm:top-4 right-0 sm:right-2 w-64 sm:w-72 bg-slate-900 text-white rounded-2xl p-4 sm:p-5 shadow-2xl border border-slate-800 z-10 transform hover:scale-[1.02] transition-transform">
                <div className="flex items-center justify-between mb-3.5">
                  <span className="text-xs font-semibold text-slate-300">Seu perfil profissional</span>
                  <div className="w-6 h-6 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center shadow-xs">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300">
                    <UserCheck className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div className="flex-1 space-y-1.5">
                    <div className="h-3 bg-slate-700 rounded-full w-24" />
                    <div className="h-2 bg-slate-800 rounded-full w-36" />
                  </div>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-800/80">
                  <div className="h-2 bg-emerald-500/30 rounded-full w-full" />
                  <div className="h-2 bg-slate-800 rounded-full w-4/5" />
                  <div className="h-2 bg-slate-800 rounded-full w-3/5" />
                </div>
              </div>

              {/* Card 2: "Vaga dos Sonhos" Badge Card (Floating Left Overlap) */}
              <div className="absolute top-28 sm:top-32 -left-2 sm:-left-4 bg-white border border-slate-200/90 rounded-2xl p-4 shadow-xl z-20 w-56 sm:w-60 transform hover:scale-105 transition-transform">
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[9px] font-extrabold uppercase tracking-wide mb-1.5">
                      <Sparkles className="w-2.5 h-2.5 text-emerald-600" />
                      Vaga dos sonhos
                    </div>
                    <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 leading-tight">
                      Analista de Negócios
                    </h4>
                    <p className="text-[11px] text-slate-500 font-medium">
                      Cooperativa de Crédito
                    </p>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-md">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                </div>
              </div>

              {/* Card 3: Checklist "Etapas do Processo" (Middle Right) */}
              <div className="absolute top-52 sm:top-56 right-2 sm:right-4 bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-xl z-10 w-60 sm:w-68 transform hover:scale-[1.02] transition-transform">
                <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 mb-3 flex items-center gap-1.5">
                  <span>Etapas do processo</span>
                </h4>
                <div className="space-y-2.5 text-xs text-slate-700">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-[11px] sm:text-xs">Triagem de currículo</span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-[11px] sm:text-xs">Testes e avaliações</span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-[11px] sm:text-xs">Entrevista técnica</span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-[11px] sm:text-xs">Entrevista final</span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  </div>
                </div>
              </div>

              {/* Card 4: Chart Card "Preparação Personalizada" (Bottom Left) */}
              <div className="absolute bottom-2 sm:bottom-4 left-0 sm:left-2 bg-white border border-slate-200/90 rounded-2xl p-3.5 sm:p-4 shadow-xl z-20 w-52 sm:w-56 transform hover:scale-105 transition-transform">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold text-slate-800">Preparação personalizada</span>
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                </div>
                {/* Visual SVG Progress Curve */}
                <div className="w-full h-12 relative overflow-hidden flex items-end">
                  <svg className="w-full h-full" viewBox="0 0 100 40" fill="none" preserveAspectRatio="none">
                    <path
                      d="M0 35 Q 20 32, 40 22 T 80 12 T 100 4"
                      stroke="#059669"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M0 35 Q 20 32, 40 22 T 80 12 T 100 4 L 100 40 L 0 40 Z"
                      fill="url(#emeraldGradient)"
                      opacity="0.15"
                    />
                    <defs>
                      <linearGradient id="emeraldGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#059669" />
                        <stop offset="100%" stopColor="#ffffff" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
