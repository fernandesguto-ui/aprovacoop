import React from "react";
import { SITE_DATA } from "../data/content";
import { Award, Briefcase, ShieldCheck, HeartHandshake } from "lucide-react";

export const Authority: React.FC = () => {
  return (
    <section id="especialista" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Visual Credentials Card */}
          <div className="lg:col-span-5">
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-md">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 mb-6">
                <Award className="w-3.5 h-3.5 text-emerald-600" />
                Vivência Real & Prática
              </div>

              {/* Numbers */}
              <div className="space-y-4 mb-8">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-lg bg-slate-900 text-white flex items-center justify-center font-black text-2xl shrink-0">
                    15+
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base">Anos no Sistema Financeiro</h4>
                    <p className="text-xs text-slate-500">Ampla bagagem bancária e de negócios</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-black text-2xl shrink-0">
                    12
                  </div>
                  <div>
                    <h4 className="font-bold text-emerald-950 text-sm sm:text-base">Anos Dentro do Sicredi</h4>
                    <p className="text-xs text-emerald-800">Vivência profunda da cultura cooperativa</p>
                  </div>
                </div>
              </div>

              {/* Trust Tag */}
              <div className="flex items-center gap-3 text-xs text-slate-500 pt-4 border-t border-slate-100">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Metodologia testada e aprovada para processos seletivos reais.</span>
              </div>
            </div>
          </div>

          {/* Right Text / Story */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700 border border-slate-200 mb-4">
              <Briefcase className="w-3.5 h-3.5 text-slate-900" />
              Autoridade no Mercado
            </div>
            
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
              E quem vai te ensinar isso conhece esse mercado por dentro
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              <p>
                Minha trajetória profissional foi construída ao longo de <strong className="text-slate-900 font-semibold">mais de 15 anos no sistema bancário</strong>. Desses, foram <strong className="text-emerald-700 font-semibold">12 anos dentro do Sicredi</strong>.
              </p>

              <p>
                Foi onde construí uma trajetória profissional sólida, conhecendo na prática o ambiente de uma cooperativa de crédito, sua cultura e as competências necessárias para construir uma carreira nesse mercado.
              </p>

              <p>
                Minha saída desse ciclo aconteceu pela porta da frente, por uma decisão profissional: empreender e construir uma nova trajetória. Hoje, toda essa experiência acumulada ao longo de mais de uma década dentro do cooperativismo também se transformou em um dos braços educacionais da minha empresa.
              </p>
            </div>

            {/* Transparency Highlight Box */}
            <div className="mt-6 p-5 sm:p-6 rounded-xl bg-white border border-slate-200 shadow-2xs">
              <div className="flex items-start gap-3">
                <HeartHandshake className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div className="space-y-2">
                  <h4 className="text-sm font-bold text-slate-900">
                    Compromisso de Transparência & Ética:
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    “Meu objetivo não é prometer que você será contratado. A decisão final sempre será da instituição. Meu trabalho é fazer com que você <strong className="text-slate-900 font-semibold">deixe de entrar nos processos seletivos no improviso</strong> e passe a chegar preparado, consciente do seu valor e sabendo como demonstrá-lo.”
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
