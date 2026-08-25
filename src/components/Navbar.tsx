import React, { useState } from "react";
import { SITE_DATA } from "../data/content";
import { Menu, X, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      {/* Top Professional Ribbon */}
      <div className="bg-slate-900 py-1.5 px-4 text-xs font-semibold text-slate-200 text-center flex items-center justify-center gap-2">
        <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
        <span>Vagas limitadas para acompanhamento individual 1:1</span>
        <span className="hidden sm:inline text-slate-400 font-normal">| 5 encontros personalizados + Bônus</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-lg p-1">
            <img
              src={SITE_DATA.logoUrl}
              alt="Aprova Coop Logo"
              referrerPolicy="no-referrer"
              className="h-11 w-auto object-contain max-w-[200px] transition-transform duration-200 group-hover:scale-105"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <div className="flex flex-col">
              <span className="font-extrabold text-lg tracking-tight text-slate-900 flex items-center gap-1">
                APROVA <span className="text-emerald-600">COOP</span>
              </span>
              <span className="text-[10px] text-slate-500 font-semibold tracking-wider uppercase">
                Preparação para Cooperativas
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <a href="#como-funciona" className="hover:text-emerald-600 transition-colors">
              Como Funciona
            </a>
            <a href="#metodologia" className="hover:text-emerald-600 transition-colors">
              5 Encontros
            </a>
            <a href="#especialista" className="hover:text-emerald-600 transition-colors">
              Quem Ensina
            </a>
            <a href="#bonus" className="hover:text-emerald-600 transition-colors">
              Bônus
            </a>
            <a href="#duvidas" className="hover:text-emerald-600 transition-colors">
              Dúvidas
            </a>
          </nav>

          {/* Action CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              id="header-cta-button"
              href={SITE_DATA.checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm tracking-wide shadow-sm hover:shadow transition-all focus:outline-none focus:ring-2 focus:ring-slate-900"
            >
              <span>Inscreva-se Agora</span>
              <ArrowRight className="w-4 h-4 text-emerald-400" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={SITE_DATA.checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden px-3.5 py-2 rounded-full bg-emerald-600 text-white font-bold text-xs"
            >
              Inscrever
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              aria-label="Abrir Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <a
            href="#como-funciona"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-700 hover:text-emerald-600 font-semibold text-sm"
          >
            Como Funciona
          </a>
          <a
            href="#metodologia"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-700 hover:text-emerald-600 font-semibold text-sm"
          >
            Os 5 Encontros
          </a>
          <a
            href="#especialista"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-700 hover:text-emerald-600 font-semibold text-sm"
          >
            Quem Ensina (12 anos Sicredi)
          </a>
          <a
            href="#bonus"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-700 hover:text-emerald-600 font-semibold text-sm"
          >
            Bônus Inclusos
          </a>
          <a
            href="#investimento"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-700 hover:text-emerald-600 font-semibold text-sm"
          >
            Investimento
          </a>
          <a
            href="#duvidas"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-700 hover:text-emerald-600 font-semibold text-sm"
          >
            Perguntas Frequentes
          </a>
          <div className="pt-2">
            <a
              href={SITE_DATA.checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Garantir Vaga no Aprova Coop</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
