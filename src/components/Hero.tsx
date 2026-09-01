import React from "react";
import { SITE_DATA } from "../data/content";
import {
  Briefcase,
  FileText,
  Linkedin,
  Video,
  Cpu,
  Trophy,
  Check,
} from "lucide-react";
import { motion } from "motion/react";

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-10 pb-20 sm:pt-14 sm:pb-28 lg:pt-16 lg:pb-32 bg-white">
      {/* Subtle modern ambient background blur */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-emerald-50/60 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-slate-50/80 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 2-Column Grid on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column (Hero Content) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Project Logo at the Top */}
            <div className="w-full flex justify-center sm:justify-start mb-8">
              <img
                src={SITE_DATA.logoUrl}
                alt="Aprova Coop"
                className="h-16 sm:h-20 lg:h-24 w-auto max-w-[320px] sm:max-w-[420px] object-contain"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = "none";
                }}
              />
            </div>

            {/* Main Headline */}
            <h1 className="w-full text-center sm:text-left text-3xl sm:text-5xl lg:text-[56px] font-extrabold text-slate-900 tracking-tight leading-[1.12] mb-8">
              Conquiste sua vaga <br className="hidden sm:block" />
              em uma{" "}
              <span className="text-emerald-600">
                Cooperativa <br className="hidden sm:block" />
                de Crédito
              </span>
            </h1>

            {/* Subtitle Paragraphs */}
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed mb-4 max-w-2xl">
              Você não precisa continuar enviando currículos sem saber por que não está avançando nos processos seletivos.
            </p>

            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed mb-10 max-w-2xl">
              Existe uma diferença enorme entre querer trabalhar em uma cooperativa e{" "}
              <strong className="text-emerald-700 font-semibold">saber se posicionar</strong> como o profissional que faz sentido para aquela instituição.
            </p>

            {/* 4 Feature Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full">
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/80 hover:bg-emerald-50/40 transition-all duration-300 flex flex-col items-center text-center justify-center gap-3 group hover:-translate-y-0.5">
                <div className="w-10 h-10 rounded-xl bg-white shadow-xs text-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FileText className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-slate-800 leading-snug">
                  Currículo magnético 
                </span>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/80 hover:bg-emerald-50/40 transition-all duration-300 flex flex-col items-center text-center justify-center gap-3 group hover:-translate-y-0.5">
                <div className="w-10 h-10 rounded-xl bg-white shadow-xs text-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Linkedin className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-slate-800 leading-snug">
                  LinkedIn otimizado
                </span>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/80 hover:bg-emerald-50/40 transition-all duration-300 flex flex-col items-center text-center justify-center gap-3 group hover:-translate-y-0.5">
                <div className="w-10 h-10 rounded-xl bg-white shadow-xs text-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Video className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-slate-800 leading-snug">
                  Simulação real 1:1
                </span>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/80 hover:bg-emerald-50/40 transition-all duration-300 flex flex-col items-center text-center justify-center gap-3 group hover:-translate-y-0.5">
                <div className="w-10 h-10 rounded-xl bg-white shadow-xs text-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Cpu className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-slate-800 leading-snug">
                  Gupy e ATS
                </span>
              </div>
            </div>

          </div>

          {/* Right Column (Dynamic Animated Floating Cards Mockup) */}
          <div className="lg:col-span-5 relative w-full flex items-center justify-center pt-8 lg:pt-0">
            <div className="relative w-full max-w-[430px] sm:max-w-[460px] min-h-[460px] sm:min-h-[500px] flex items-center justify-center">
              
              {/* 1. Top Left Badge (+ de 1500 vagas) */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                  rotate: [0, -1, 0],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-0 -left-2 sm:left-0 z-30 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-2xl bg-emerald-50/95 border border-emerald-200/80 shadow-md backdrop-blur-xs"
              >
                <div className="w-6 h-6 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700">
                  <Briefcase className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs sm:text-sm font-extrabold text-emerald-950 tracking-tight">
                  + de 1500 vagas
                </span>
              </motion.div>

              {/* 2. Main Dark Card (Document / Curriculum ATS Preview) */}
              <motion.div
                animate={{
                  y: [0, 4, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-[300px] sm:w-[340px] rounded-[32px] bg-[#0f172a] border border-slate-700/80 shadow-2xl p-5 sm:p-6 flex flex-col justify-between overflow-hidden text-left"
              >
                {/* Subtle dark glow */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

                {/* Top Section with Profile Photo + Name + Verified Check */}
                <div>
                  <div className="flex items-start justify-between gap-3 mb-4">
                    {/* Profile Picture */}
                    <div className="relative shrink-0">
                      <img
                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=160&auto=format&fit=crop&q=80"
                        alt="Foto de Perfil do Candidato"
                        referrerPolicy="no-referrer"
                        className="w-12 h-12 rounded-full object-cover border-2 border-emerald-400 shadow-md"
                      />
                      <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-[#0f172a]" />
                    </div>

                    {/* Candidate Info */}
                    <div className="flex-1 min-w-0 pr-1">
                      <h4 className="text-xs sm:text-sm font-black text-white truncate tracking-tight">
                        Mariana Silveira
                      </h4>
                      <p className="text-[10px] sm:text-[11px] font-semibold text-emerald-400 truncate">
                        Assistente de Negócios
                      </p>
                      <p className="text-[9px] text-slate-400 flex items-center gap-1 mt-0.5">
                       <span>Superior Completo</span>
                      </p>
                    </div>

                    {/* Green Checkmark Badge */}
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#00c868] text-white flex items-center justify-center shadow-lg shadow-emerald-500/30 shrink-0">
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 stroke-[3]" />
                    </div>
                  </div>

                  {/* Fictitious Mini Resume Sections */}
                  <div className="space-y-3 pt-2 text-[10px] sm:text-[11px]">
                    {/* Experiência */}
                    <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60 space-y-1">
                      <div className="flex justify-between items-center text-slate-300 font-bold text-[10px]">
                        <span className="text-white">Atendimento e Produtos Financeiros</span>
                        <span className="text-emerald-400 font-semibold text-[9px]">3 anos exp.</span>
                      </div>
                      <p className="text-slate-400 text-[9px] leading-tight">
                        Abertura de contas, consórcios, crédito e relacionamento com cooperados.
                      </p>
                    </div>

                    {/* Tags / Keywords ATS */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      <span className="px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 text-[9px] font-bold border border-emerald-500/30">
                        Cooperativismo
                      </span>
                      <span className="px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 text-[9px] font-semibold border border-slate-700">
                        Gestão de Carteira
                      </span>
                      <span className="px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 text-[9px] font-semibold border border-slate-700">
                        Gupy 98% Match
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom Match Indicator */}
                <div className="space-y-2 pt-4 mt-3 border-t border-slate-800/90">
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="text-slate-400 font-medium">Compatibilidade da Vaga:</span>
                    <span className="text-emerald-400 font-black">98%</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                    <div className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 w-[98%]" />
                  </div>
                </div>
              </motion.div>

              {/* 3. Overlapping Card: CURRÍCULO VENCEDOR (Floating Top-Left/Center) */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  x: [0, 3, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-16 -left-3 sm:-left-6 z-20 rounded-2xl bg-white shadow-xl shadow-slate-900/10 border border-slate-100/90 p-3.5 sm:p-4 flex items-center gap-3.5 backdrop-blur-xs min-w-[250px] sm:min-w-[280px]"
              >
                {/* Trophy Icon circle */}
                <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-100/80 flex items-center justify-center text-emerald-600 shrink-0">
                  <Trophy className="w-6 h-6 text-emerald-600" />
                </div>

                {/* Text */}
                <div className="flex-1 pr-1">
                  <h4 className="text-xs sm:text-sm font-black text-slate-900 tracking-tight uppercase leading-none mb-1">
                    Currículo Vencedor
                  </h4>
                  <p className="text-[10px] sm:text-[11px] text-slate-500 font-medium leading-tight">
                    Preparado para ser encontrado
                  </p>
                </div>

                {/* Right Green Check */}
                <div className="w-6 h-6 rounded-full bg-[#00c868] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
              </motion.div>

              {/* 4. Overlapping Card: Perfil Otimizado (Gupy + LinkedIn) (Floating Mid-Right) */}
              <motion.div
                animate={{
                  y: [0, 8, 0],
                  x: [0, -4, 0],
                }}
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute top-48 -right-2 sm:-right-6 z-20 rounded-2xl bg-white shadow-xl shadow-slate-900/10 border border-slate-100/90 p-3.5 sm:p-4 backdrop-blur-xs min-w-[210px] sm:min-w-[230px]"
              >
                <p className="text-[11px] font-bold text-slate-800 mb-2">
                  Perfil otimizado
                </p>
                <div className="flex items-center gap-3 pt-0.5">
                  {/* Gupy custom text styling */}
                  <span className="text-xl sm:text-2xl font-black text-[#4f21cf] tracking-tighter lowercase select-none">
                    gupy
                  </span>

                  <div className="w-px h-6 bg-slate-200" />

                  {/* LinkedIn Icon badge */}
                  <div className="flex items-center gap-0.5">
                    <div className="w-7 h-7 rounded-md bg-[#0A66C2] text-white flex items-center justify-center font-bold text-sm tracking-tighter shadow-xs">
                      in
                    </div>
                    <span className="text-[8px] text-slate-400 font-bold -mt-3">®</span>
                  </div>
                </div>
              </motion.div>

              {/* 5. Overlapping Card: Mais chances de entrevista (Growth Chart) (Floating Bottom-Left) */}
              <motion.div
                animate={{
                  y: [0, -7, 0],
                  x: [0, 3, 0],
                }}
                transition={{
                  duration: 4.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute bottom-4 -left-2 sm:-left-4 z-20 rounded-2xl bg-white shadow-xl shadow-slate-900/10 border border-slate-100/90 p-3.5 sm:p-4 backdrop-blur-xs w-[180px] sm:w-[210px]"
              >
                <p className="text-[10px] sm:text-[11px] font-bold text-slate-800 mb-2">
                  Mais chances de entrevista
                </p>
                
                {/* Smooth ascending curve with arrow */}
                <div className="relative w-full h-10 sm:h-12 overflow-visible">
                  <svg
                    viewBox="0 0 160 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                  >
                    <defs>
                      <linearGradient id="curveGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#10b981" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>

                    {/* Area under curve */}
                    <path
                      d="M 5 45 Q 60 42 100 25 T 150 10 L 150 50 L 5 50 Z"
                      fill="url(#curveGradient)"
                    />

                    {/* Rising Stroke */}
                    <path
                      d="M 5 45 Q 60 42 100 25 T 150 10"
                      stroke="#00c868"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />

                    {/* Arrow Head */}
                    <path
                      d="M 142 8 L 152 9 L 149 19"
                      stroke="#00c868"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </motion.div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};


