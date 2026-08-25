import React from "react";
import { SITE_DATA } from "../data/content";
import { 
  Check, 
  ArrowRight, 
  ShieldCheck, 
  CreditCard, 
  Sparkles, 
  UserCheck,
  CalendarCheck
} from "lucide-react";

export const Pricing: React.FC = () => {
  return (
    <section id="investimento" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            Vagas Limitadas para Acompanhamento 1:1
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Invista na sua carreira com quem conhece o cooperativismo por dentro
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Uma única oportunidade conquistada em uma cooperativa de crédito paga este investimento muitas vezes ao longo dos seus primeiros meses de carreira.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="p-8 sm:p-10 rounded-2xl bg-white border border-slate-200 shadow-lg relative">
          
          {/* Top Label */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-200">
            <div>
              <span className="text-xs uppercase font-extrabold tracking-wider text-emerald-700 block">
                Programa Completo
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                APROVA COOP Individual
              </h3>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200">
              <UserCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Vagas Exclusivas</span>
            </div>
          </div>

          {/* Price Numbers */}
          <div className="py-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-slate-200">
            <div>
              <div className="flex items-baseline justify-center sm:justify-start gap-2">
                <span className="text-slate-400 line-through text-lg font-medium">
                  {SITE_DATA.regularPrice}
                </span>
                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                  Condição Especial
                </span>
              </div>
              <div className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight my-1">
                {SITE_DATA.specialPrice}
              </div>
              <p className="text-xs text-slate-500 font-medium">
                {SITE_DATA.installments} ou pagamento à vista via PIX / Cartão
              </p>
            </div>

            <a
              id="pricing-checkout-button"
              href={SITE_DATA.checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group transform hover:-translate-y-0.5"
            >
              <span>Quero Minha Vaga Agora</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Checklist included */}
          <div className="py-8">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">
              O que você recebe ao garantir sua inscrição:
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs text-slate-700">
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>5 Encontros Individuais 1:1</strong> com especialista com 12 anos no Sicredi</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Construção e revisão do seu <strong>Currículo Estratégico ao vivo</strong></span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Otimização do seu <strong>LinkedIn e perfil em ATS (Gupy)</strong></span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>BÔNUS 1:</strong> Simulação 1:1 para entrevista real</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>BÔNUS 2:</strong> Acesso à plataforma com <strong>100+ simulados</strong></span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>BÔNUS 3:</strong> Plano Estratégico de Primeiros 90 Dias</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Guia completo da <strong>Cultura e Princípios do Cooperativismo</strong></span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Mapeamento de <strong>competências transferíveis</strong> do seu histórico</span>
              </div>
            </div>
          </div>

          {/* Guarantee Footer */}
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-emerald-400" />
            </div>
            <div className="text-center sm:text-left">
              <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Garantia Incondicional de 7 Dias
              </h5>
              <p className="text-xs text-slate-600 leading-relaxed">
                Se após o primeiro contato você sentir que o método não é para você, basta solicitar o reembolso integral diretamente na plataforma Kiwify, sem qualquer complicação.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
