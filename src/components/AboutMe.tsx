import React, { useState, useRef } from "react";
import { SITE_DATA } from "../data/content";
import { 
  Award, 
  Briefcase, 
  Building2, 
  CheckCircle2, 
  HeartHandshake, 
  Camera, 
  Upload, 
  RefreshCw, 
  ArrowRight,
  ShieldCheck,
  Sparkles,
  UserCheck
} from "lucide-react";

export const AboutMe: React.FC = () => {
  const mentor = SITE_DATA.mentor;
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Direct photo from mentor configuration
  const defaultPhoto = mentor.photoPlaceholder;
  const [photoUrl, setPhotoUrl] = useState<string>(() => {
    const saved = localStorage.getItem("aprovacoop_mentor_photo");
    if (saved && saved.includes("unsplash.com")) {
      localStorage.removeItem("aprovacoop_mentor_photo");
      return defaultPhoto;
    }
    return saved || defaultPhoto;
  });
  const [isCustomPhoto, setIsCustomPhoto] = useState<boolean>(() => {
    return !!localStorage.getItem("aprovacoop_mentor_photo");
  });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setPhotoUrl(result);
        setIsCustomPhoto(true);
        localStorage.setItem("aprovacoop_mentor_photo", result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetPhoto = () => {
    localStorage.removeItem("aprovacoop_mentor_photo");
    setPhotoUrl(mentor.photoPlaceholder);
    setIsCustomPhoto(false);
  };

  return (
    <section id="sobre-mim" className="py-20 lg:py-28 bg-white border-b border-slate-200 relative overflow-hidden">
      {/* Decorative subtle background gradient */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-50/70 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-slate-100/80 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 mb-4">
            <Award className="w-3.5 h-3.5 text-emerald-600" />
            Sobre Mim & Quem Ensina
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 leading-tight">
            Mais de uma década vivendo o cooperativismo de crédito por dentro
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Conheça a trajetória de mais de 15 anos no sistema bancário, 12 anos no Sicredi e o propósito por trás do Aprova Coop.
          </p>
        </div>

        {/* Main Grid: Photo Column + Story Column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start mb-16">
          
          {/* Left: Professional Photo Container Card */}
          <div className="lg:col-span-5">
            <div className="bg-slate-50 p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-md sticky top-28">
              
              {/* Photo Frame */}
              <div className="relative group rounded-xl overflow-hidden bg-slate-200 aspect-[4/5] border border-slate-300 shadow-xs mb-5">
                <img
                  src={photoUrl}
                  alt="Foto Profissional do Mentor - Aprova Coop"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback to placeholder if custom url fails
                    (e.target as HTMLImageElement).src = mentor.photoPlaceholder;
                  }}
                />

                {/* Experience Overlay Ribbon on Image */}
                <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-xs text-white px-3 py-1.5 rounded-lg border border-slate-700/80 shadow-md flex items-center gap-2 text-xs font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>12 Anos no Sicredi</span>
                </div>

                {/* Photo Upload/Change Overlay Button */}
                <div className="absolute bottom-3 right-3 flex items-center gap-2">
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleImageUpload}
                    accept="image/*"
                    className="hidden"
                    id="photo-upload-input"
                  />
                 

                  {isCustomPhoto && (
                    <button
                      onClick={handleResetPhoto}
                      title="Restaurar foto padrão"
                      className="p-1.5 bg-slate-900/90 text-white rounded-lg hover:bg-slate-900 transition-colors shadow-md"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>

              {/* Identification details */}
            

              {/* Quick Metrics */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-200">
                <div className="p-3 bg-white rounded-xl border border-slate-200 text-center">
                  <span className="block text-2xl font-black text-slate-900 tracking-tight">15+</span>
                  <span className="text-[11px] text-slate-500 font-semibold">Anos no Sistema Bancário</span>
                </div>
                <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-center">
                  <span className="block text-2xl font-black text-emerald-700 tracking-tight">12</span>
                  <span className="text-[11px] text-emerald-800 font-semibold">Anos no Sicredi</span>
                </div>
              </div>

              {/* Micro guarantee badge */}
              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-500">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Orientação prática 100% individual 1:1</span>
              </div>

            </div>
          </div>

          {/* Right: Narrative & Biography Story */}
          <div className="lg:col-span-7 space-y-6">
            
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block mb-2">
                A Minha Trajetória
              </span>
              <h3 className="text-xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                {mentor.story?.headline || "De 12 anos dentro do Sicredi à criação de um método que transforma carreiras"}
              </h3>
            </div>

            {/* Story Paragraphs */}
            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              {mentor.story?.paragraphs.map((paragraph, pIdx) => (
                <p key={pIdx}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Quote / Highlight Banner */}
            <div className="p-6 rounded-2xl bg-slate-50 border-l-4 border-emerald-600 border border-slate-200 shadow-2xs">
              <p className="text-slate-800 text-sm sm:text-base italic font-medium leading-relaxed mb-2">
                “Não vamos inventar uma experiência que você não tem. Vamos identificar e aprender a demonstrar com segurança o valor real daquilo que você já construiu.”
              </p>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                — Princípio Fundamental do Aprova Coop
              </span>
            </div>

            {/* Direct CTA */}
            <div className="pt-2">
              <a
                href={SITE_DATA.checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm tracking-wide shadow-md transition-all group"
              >
                <span>Agendar Minha Preparação 1:1</span>
                <ArrowRight className="w-4 h-4 text-emerald-400 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

          </div>

        </div>

        {/* Milestone Timeline Grid */}
        <div className="mt-8 pt-12 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase font-bold tracking-wider text-emerald-700 block mb-1">
              Evolução da Experiência
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              Linha do Tempo Profissional
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {mentor.story?.milestones.map((ms, mIdx) => (
              <div
                key={mIdx}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between hover:bg-white hover:shadow-sm hover:border-emerald-300 transition-all"
              >
                <div>
                  <span className="inline-block px-2.5 py-1 rounded-md bg-slate-900 text-white font-bold text-xs mb-3">
                    {ms.period}
                  </span>
                  <h4 className="font-bold text-slate-900 text-sm mb-1.5">
                    {ms.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {ms.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Principles / Values */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200">
          <div className="flex items-center gap-2 mb-6">
            <HeartHandshake className="w-5 h-5 text-emerald-600" />
            <h3 className="text-lg font-bold text-slate-900">
              Valores Inegociáveis que Guiam o Aprova Coop
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mentor.story?.principles.map((pr, prIdx) => (
              <div key={prIdx} className="space-y-1.5">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{pr.title}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pl-6">
                  {pr.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
