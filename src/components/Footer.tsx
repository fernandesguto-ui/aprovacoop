import React from "react";
import { SITE_DATA } from "../data/content";
import { Shield, Sparkles } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <img
              src={SITE_DATA.logoUrl}
              alt="Aprova Coop Logo"
              referrerPolicy="no-referrer"
              className="h-9 w-auto object-contain brightness-110"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <div>
              <span className="font-extrabold text-white text-base tracking-tight">
                APROVA <span className="text-emerald-400">COOP</span>
              </span>
              <p className="text-[11px] text-slate-500">
                Programa de Preparação para Cooperativas de Crédito
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs text-slate-400 font-medium">
            <a href="#como-funciona" className="hover:text-emerald-400 transition-colors">Como Funciona</a>
            <a href="#metodologia" className="hover:text-emerald-400 transition-colors">Os 5 Encontros</a>
            <a href="#especialista" className="hover:text-emerald-400 transition-colors">Quem Ensina</a>
            <a href="#bonus" className="hover:text-emerald-400 transition-colors">Bônus</a>
            <a href="#investimento" className="hover:text-emerald-400 transition-colors">Investimento</a>
            <a href="#duvidas" className="hover:text-emerald-400 transition-colors">Dúvidas</a>
          </div>
        </div>

        {/* Legal and Disclaimer */}
        <div className="pt-8 text-center space-y-3 text-[11px] text-slate-500 leading-relaxed max-w-3xl mx-auto">
          <p>
            {SITE_DATA.footerDisclaimer}
          </p>
          <p>
            © {new Date().getFullYear()} Aprova Coop. Todos os direitos reservados. Pagamentos processados com segurança por Kiwify.
          </p>
        </div>

      </div>
    </footer>
  );
};
