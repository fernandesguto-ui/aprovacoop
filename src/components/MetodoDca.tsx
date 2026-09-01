import React, { useState } from "react";
import {
  CheckCircle2,
  XCircle,
  ArrowRight,
  Sparkles,
  BookOpen,
  FileText,
  Linkedin,
  Video,
  Users,
  Compass,
  Award,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  Target,
  Zap,
  Clock,
  HelpCircle,
  Lock,
  Gift,
  Layers,
  FileSpreadsheet,
  Building2,
  HeartHandshake,
  Check,
  Star,
  ArrowLeft,
} from "lucide-react";

interface MetodoDcaProps {
  onBackToHome?: () => void;
}

export const MetodoDca: React.FC<MetodoDcaProps> = ({ onBackToHome }) => {
  const checkoutUrl = "https://pay.kiwify.com.br/UIyahVG";
  const photoUrl =
    "https://firebasestorage.googleapis.com/v0/b/travessia-c189d.firebasestorage.app/o/site_images%2F1785428383876_WhatsApp_Image_2026-07-30_at_13.08.17.jpeg?alt=media&token=66176ba4-cb4f-48e4-9371-f83628a49721";

  const [openFaq, setOpenFaq] = useState<Record<number, boolean>>({
    0: true,
  });

  const toggleFaq = (index: number) => {
    setOpenFaq((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const stepsOrder = [
    { title: "Direção", desc: "Mapeamento e foco" },
    { title: "Currículo", desc: "Clareza e palavras-chave" },
    { title: "Candidatura", desc: "Gupy e plataformas" },
    { title: "Preparação", desc: "Fit cultural e roteiros" },
    { title: "Entrevista", desc: "Segurança e exemplos" },
    { title: "Aprovação", desc: "Conquista da vaga" },
  ];

  const painPoints = [
    "Candidata-se para dezenas de vagas e não recebe retorno;",
    "Não entende por que não avança nas etapas;",
    "Tem dificuldade para falar sobre a própria trajetória;",
    "Não sabe quais informações colocar no currículo;",
    "Preenche a Gupy de forma incompleta ou genérica;",
    "Fica inseguro durante testes e entrevistas;",
    "Perde oportunidades para as quais poderia ter compatibilidade.",
  ];

  const learningModules = [
    {
      number: "1",
      title: "Escolher as vagas certas",
      intro:
        "Antes de enviar currículos, você aprenderá a analisar sua trajetória, reconhecer suas principais competências e identificar os cargos mais compatíveis com o seu momento profissional.",
      bullets: [
        "Como identificar o que realmente sabe fazer;",
        "Como definir até três cargos relacionados;",
        "Como analisar vagas antes de se candidatar;",
        "Como reconhecer requisitos obrigatórios e desejáveis;",
        "Como evitar candidaturas sem compatibilidade;",
        "Como encontrar os GAPs que precisam ser desenvolvidos.",
      ],
      icon: Compass,
    },
    {
      number: "2",
      title: "Construir um currículo que gere interesse",
      intro:
        "Você aprenderá a transformar cargos e atividades em evidências claras da sua capacidade profissional.",
      bullets: [
        "O que colocar e o que retirar do currículo;",
        "Como escrever um objetivo profissional;",
        "Como criar um resumo profissional estratégico;",
        "Como descrever experiências começando com verbos de ação;",
        "Como incluir competências e palavras-chave;",
        "Como apresentar resultados mesmo sem ter números;",
        "Como adaptar o currículo para cada oportunidade;",
        "Como deixar o documento mais claro para o recrutador e para os sistemas de seleção.",
      ],
      icon: FileText,
    },
    {
      number: "3",
      title: "Preencher a Gupy com estratégia",
      intro:
        "A Gupy não deve ser preenchida com pressa ou tratada apenas como um lugar para anexar o currículo.",
      bullets: [
        "Como o cadastro é analisado pelo sistema e pelo recrutador;",
        "Como preencher todas as experiências relevantes;",
        "Como organizar atividades em tópicos;",
        "Como usar palavras-chave verdadeiras e contextualizadas;",
        "Como apresentar ferramentas, conhecimentos e resultados;",
        "Como responder às perguntas da candidatura;",
        "Como revisar seu cadastro antes de enviar;",
        "Como aumentar a clareza e a compatibilidade do seu perfil.",
      ],
      icon: Zap,
    },
    {
      number: "4",
      title: "Fortalecer seu LinkedIn",
      intro:
        "Seu LinkedIn precisa comunicar rapidamente quem você é, o que sabe fazer e quais oportunidades procura.",
      bullets: [
        "Foto e imagem de capa;",
        "Título profissional;",
        "Seção “Sobre”;",
        "Experiências profissionais;",
        "Cursos, competências e certificações;",
        "URL personalizada;",
        "Palavras-chave;",
        "Conexões e interações profissionais;",
        "Coerência entre LinkedIn, currículo e Gupy.",
      ],
      icon: Linkedin,
    },
    {
      number: "5",
      title: "Preparar seu vídeo de apresentação",
      intro:
        "Você receberá estruturas prontas para apresentar sua trajetória com segurança, naturalidade e conexão com a vaga.",
      bullets: [
        "Apresentação inicial;",
        "Resumo da trajetória;",
        "Competências principais;",
        "Experiências e resultados;",
        "Conexão com a vaga;",
        "Identificação com a empresa;",
        "Contribuição que pode oferecer;",
        "Encerramento profissional.",
      ],
      icon: Video,
    },
    {
      number: "6",
      title: "Entender e demonstrar fit cultural",
      intro:
        "Não basta decorar a missão, a visão e os valores da empresa. Você precisa transformar a cultura em comportamentos e relacioná-la com situações reais da sua trajetória.",
      bullets: [
        "Como pesquisar a cultura da empresa;",
        "Como interpretar os valores;",
        "Como transformar valores em comportamentos;",
        "Como escolher exemplos profissionais coerentes;",
        "Como responder perguntas sobre metas, mudanças, colaboração e feedback;",
        "Como manter coerência nos testes comportamentais;",
        "Como evitar respostas artificiais ou contraditórias.",
      ],
      icon: HeartHandshake,
    },
    {
      number: "7",
      title: "Chegar preparado à entrevista",
      intro:
        "A entrevista deixa de ser um improviso quando você sabe o que precisa estudar, organizar e comunicar.",
      bullets: [
        "Pesquisar a empresa e a vaga;",
        "Revisar sua própria trajetória;",
        "Preparar exemplos profissionais;",
        "Organizar respostas com clareza;",
        "Explicar seus pontos fortes e pontos de desenvolvimento;",
        "Falar sobre desligamentos e mudanças profissionais;",
        "Responder perguntas difíceis;",
        "Demonstrar interesse sem parecer artificial;",
        "Preparar entrevistas presenciais e on-line;",
        "Fazer perguntas inteligentes ao recrutador.",
      ],
      icon: Users,
    },
  ];

  const mainMaterials = [
    {
      title: "Guia completo: Da Candidatura à Contratação",
      desc: "Um material com 67 páginas que apresenta a jornada completa da busca por uma oportunidade: definição das vagas, currículo, Gupy, LinkedIn, preparação, entrevista e contratação.",
      badge: "67 Páginas",
      icon: BookOpen,
    },
    {
      title: "Guia prático: Como preencher seu currículo na Gupy",
      desc: "Um passo a passo para organizar experiências, utilizar palavras-chave, apresentar resultados e facilitar a identificação da sua compatibilidade.",
      badge: "Passo a Passo",
      icon: Zap,
    },
    {
      title: "Guia de Fit Cultural",
      desc: "Um material para entender a cultura da empresa e transformar missão, visão e valores em comportamentos, respostas e exemplos reais.",
      badge: "Comportamental",
      icon: HeartHandshake,
    },
    {
      title: "Roteiros para vídeos de apresentação",
      desc: "Você receberá três modelos adaptáveis para apresentar sua trajetória, conectar sua experiência à vaga e finalizar o vídeo com clareza.",
      badge: "3 Modelos",
      icon: Video,
    },
    {
      title: "Preparação para entrevistas",
      desc: "Um guia com 25 perguntas de entrevista, orientações práticas, estruturas de resposta e checklist de preparação.",
      badge: "25 Perguntas",
      icon: Award,
    },
  ];

  const coopsMaterials = [
    {
      name: "Guia Sicredi",
      desc: "Cultura, propósito, missão, visão, valores, cooperativismo, modelo de negócio, produtos e preparação para o processo seletivo.",
      accent: "from-emerald-600 to-green-700",
    },
    {
      name: "Guia Sicoob",
      desc: "Informações essenciais sobre o Sistema Sicoob, sua atuação, cultura, soluções financeiras e o que o candidato precisa pesquisar antes da entrevista.",
      accent: "from-teal-600 to-cyan-700",
    },
    {
      name: "Guia Cresol",
      desc: "História, cultura, missão, visão, valores, produtos, cooperativismo e orientações para demonstrar compatibilidade durante a seleção.",
      accent: "from-amber-600 to-orange-700",
    },
    {
      name: "Guia Unicred",
      desc: "Especialização no ecossistema da saúde, propósito, cultura, modelo cooperativista, soluções financeiras e preparação para as etapas do processo seletivo.",
      accent: "from-blue-600 to-indigo-700",
    },
  ];

  const bonuses = [
    {
      number: "Bônus 1",
      title: "Modelos de currículos editáveis",
      desc: "Modelos em Word para você substituir as informações, adaptar à sua trajetória e criar um currículo profissional sem começar do zero.",
      icon: FileSpreadsheet,
    },
    {
      number: "Bônus 2",
      title: "Perfil de LinkedIn preenchido: modelo feminino",
      desc: "Um exemplo visual completo para entender o que pode ser colocado em cada campo do LinkedIn.",
      icon: Linkedin,
    },
    {
      number: "Bônus 3",
      title: "Perfil de LinkedIn preenchido: modelo masculino",
      desc: "Uma segunda referência prática e preenchida para orientar a construção do perfil profissional.",
      icon: Linkedin,
    },
  ];

  const whoIsItFor = [
    "Envia currículos, mas não consegue entrevistas;",
    "Já participou de seleções, mas não foi aprovado;",
    "Está há muito tempo fora do mercado de trabalho;",
    "Deseja mudar de área ou conquistar uma nova oportunidade;",
    "Não sabe como organizar sua trajetória profissional;",
    "Tem dificuldade para preencher a Gupy;",
    "Não sabe o que escrever no currículo e no LinkedIn;",
    "Fica nervoso ou não consegue desenvolver as respostas na entrevista;",
    "Quer trabalhar no Sicredi, Sicoob, Cresol, Unicred ou em outras empresas;",
    "Deseja se preparar com mais clareza, direção e segurança.",
  ];

  const whatChanges = [
    "Escolher vagas com mais consciência;",
    "Entender sua compatibilidade antes de se candidatar;",
    "Apresentar melhor suas experiências;",
    "Utilizar palavras-chave sem inventar competências;",
    "Construir currículos direcionados;",
    "Preencher a Gupy de forma mais completa;",
    "Ter um LinkedIn coerente com seu objetivo;",
    "Responder com exemplos em vez de frases genéricas;",
    "Pesquisar a empresa com a visão certa;",
    "Chegar à entrevista sabendo o que precisa demonstrar.",
  ];

  const faqs = [
    {
      q: "Como receberei os materiais?",
      a: "O acesso será liberado de forma digital após a confirmação do pagamento. Você poderá consultar os guias e utilizar os modelos durante sua preparação.",
    },
    {
      q: "O produto serve somente para cooperativas?",
      a: "Não. Os materiais principais podem ser aplicados a processos seletivos de diferentes empresas e áreas. Além disso, você receberá quatro guias específicos para quem deseja trabalhar no Sicredi, Sicoob, Cresol ou Unicred.",
    },
    {
      q: "O produto serve para quem nunca participou de uma entrevista?",
      a: "Sim. O conteúdo começa na escolha das vagas e acompanha toda a preparação até a entrevista.",
    },
    {
      q: "Os currículos são editáveis?",
      a: "Sim. Você receberá modelos em Word para personalizar com suas informações.",
    },
    {
      q: "Vou receber um currículo personalizado?",
      a: "Não. Você receberá orientações e modelos editáveis para construir e adaptar o próprio currículo. O produto não inclui análise individual ou elaboração personalizada.",
    },
    {
      q: "O produto inclui acompanhamento individual?",
      a: "Não. Este é um produto digital para estudo e aplicação autônoma. Caso você precise de análise individual, direcionamento de vagas e preparação personalizada, poderá conhecer separadamente o acompanhamento Aprova Coop.",
    },
    {
      q: "O material garante minha aprovação?",
      a: "Nenhum produto pode garantir uma contratação, pois a decisão depende da compatibilidade com a vaga, dos critérios da empresa e do desempenho do candidato. O objetivo é aumentar sua preparação, clareza e capacidade de demonstrar sua experiência durante o processo.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-emerald-500 selection:text-white">
      {/* Top Floating Bar for Navigation back */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            
            <span className="font-extrabold text-sm sm:text-base text-slate-900 tracking-tight">
              Método DCA
            </span>
          </div>

          <a
            href={checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-sm transition-all"
          >
            <span>Garantir Acesso</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </header>

      {/* 1. HERO SECTION */}
      <section className="relative pt-12 sm:pt-20 pb-16 sm:pb-24 overflow-hidden bg-gradient-to-b from-emerald-50/40 via-white to-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10">
          {/* Eyebrow / Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-extrabold bg-emerald-100 text-emerald-900 mb-6 border border-emerald-300">
            <Sparkles className="w-4 h-4 text-emerald-700" />
            <span>MÉTODO COMPLETO E PRÁTICO</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight uppercase leading-tight mb-6">
            DA CANDIDATURA À APROVAÇÃO
          </h1>

          {/* Subtitle */}
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-800 leading-snug max-w-4xl mx-auto mb-6">
            Pare de se candidatar no escuro e aprenda a mostrar por que você é a pessoa certa para a vaga.
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto mb-10">
            Um método completo e prático para escolher as oportunidades certas, construir um currículo estratégico, preencher a Gupy, fortalecer seu LinkedIn, preparar sua apresentação e chegar à entrevista sabendo como demonstrar o seu valor.
          </p>

          {/* Hero CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-base sm:text-lg uppercase tracking-wider shadow-xl shadow-emerald-600/25 hover:shadow-emerald-600/40 hover:-translate-y-0.5 transition-all"
            >
              <span>Quero me preparar para ser aprovado</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          <div className="mt-4 flex items-center justify-center gap-6 text-xs text-slate-500 font-semibold">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-emerald-600" /> Acesso Imediato
            </span>
            <span className="flex items-center gap-1">
              <Lock className="w-4 h-4 text-emerald-600" /> Pagamento 100% Seguro
            </span>
          </div>
        </div>
      </section>

      {/* 2. PAIN POINTS SECTION */}
      <section className="py-16 sm:py-24 bg-white border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-snug mb-4">
              Você envia currículos, mas as entrevistas não chegam?
            </h2>
            <p className="text-lg font-bold text-emerald-700">
              Talvez o problema não seja falta de experiência.
            </p>
          </div>

          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4 mb-8 text-base sm:text-lg">
            <p>
              Muitas vezes, o candidato tem uma boa trajetória, mas não consegue mostrar isso durante o processo seletivo.
            </p>
            <p>
              Ele envia o mesmo currículo para todas as vagas, preenche a Gupy sem estratégia, não sabe quais palavras-chave utilizar, apresenta respostas genéricas e chega à entrevista sem conhecer verdadeiramente a empresa.
            </p>
          </div>

          <div className="rounded-2xl bg-rose-50/70 border border-rose-200 p-6 sm:p-8 mb-8">
            <h3 className="text-base sm:text-lg font-black text-rose-950 uppercase tracking-wide mb-4">
              O resultado?
            </h3>
            <ul className="space-y-3">
              {painPoints.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-800 text-sm sm:text-base font-medium">
                  <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-slate-700 space-y-3 text-base sm:text-lg border-l-4 border-emerald-600 pl-4 py-1">
            <p className="font-bold text-slate-900">
              Conseguir um emprego não começa na entrevista.
            </p>
            <p>
              Antes de chegar até o recrutador, existe uma sequência de decisões que pode aproximar ou afastar você da aprovação.
            </p>
          </div>
        </div>
      </section>

      {/* 3. ORDER / METHOD FLOW SECTION */}
      <section className="py-16 sm:py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight uppercase mb-4">
              Existe uma ordem para se preparar
            </h2>
            <div className="inline-block px-4 py-2 rounded-xl bg-emerald-500/20 border border-emerald-400/30 text-emerald-400 font-black text-sm sm:text-base">
              Direção → Currículo → Candidatura → Preparação → Entrevista → Aprovação
            </div>
          </div>

          {/* Visual Step Tracker */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-12">
            {stepsOrder.map((step, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-slate-800/90 border border-slate-700 flex flex-col justify-between text-center relative"
              >
                <div className="w-7 h-7 rounded-full bg-emerald-500 text-slate-950 font-black text-xs flex items-center justify-center mx-auto mb-2 shadow-xs">
                  {idx + 1}
                </div>
                <h4 className="font-extrabold text-sm text-white mb-1">{step.title}</h4>
                <p className="text-[11px] text-slate-400 leading-tight">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto text-center space-y-4 text-slate-300 text-base sm:text-lg">
            <p>
              O <strong className="text-white">Da Candidatura à Aprovação</strong> foi criado para ajudar você a seguir essa ordem e entender exatamente o que precisa fazer em cada etapa.
            </p>
            <p className="text-emerald-400 font-bold">
              Você não receberá apenas dicas soltas.
            </p>
            <p>
              Terá acesso a um conjunto de guias, exemplos, roteiros, modelos e materiais práticos para transformar sua trajetória em uma candidatura mais clara, coerente e competitiva.
            </p>
          </div>
        </div>
      </section>

      {/* 4. WHAT YOU WILL LEARN */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-extrabold bg-emerald-100 text-emerald-900 mb-4">
              <BookOpen className="w-3.5 h-3.5 text-emerald-700" />
              <span>PASSO A PASSO PRÁTICO</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight uppercase">
              O que você vai aprender
            </h2>
          </div>

          <div className="space-y-8">
            {learningModules.map((module) => {
              const IconComponent = module.icon;
              return (
                <div
                  key={module.number}
                  className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-xs hover:shadow-md transition-all"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-emerald-600 text-white font-black text-lg sm:text-xl flex items-center justify-center shrink-0 shadow-xs">
                      {module.number}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-2xl font-black text-slate-900 tracking-tight">
                        {module.title}
                      </h3>
                      <p className="text-sm sm:text-base text-slate-600 mt-1 leading-relaxed">
                        {module.intro}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-slate-200/70">
                    <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>Conteúdo e orientações práticas:</span>
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                      {module.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. EVERYTHING YOU RECEIVE (MAIN MATERIALS) */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight uppercase mb-4">
              Tudo o que você recebe
            </h2>
            <p className="text-base text-slate-600">
              Guias completos, modelos prontos e referências práticas para toda a sua preparação.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {mainMaterials.map((mat, idx) => {
              const IconComp = mat.icon;
              return (
                <div
                  key={idx}
                  className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-black uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                        {mat.badge}
                      </span>
                    </div>
                    <h3 className="text-lg font-black text-slate-900 mb-2">
                      {mat.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {mat.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 6. COOPERATIVAS SPECIAL CONTENT */}
          <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 shadow-xl mb-16">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 mb-4">
                <Building2 className="w-3.5 h-3.5" />
                <span>EXCLUSIVO</span>
              </div>
              <h3 className="text-xl sm:text-3xl font-black text-white tracking-tight uppercase mb-4">
                Conteúdo especial para cooperativas de crédito
              </h3>
              <p className="text-sm sm:text-base text-slate-300">
                Se o seu objetivo é trabalhar em uma cooperativa, você também receberá quatro materiais específicos:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8">
              {coopsMaterials.map((coop, cIdx) => (
                <div
                  key={cIdx}
                  className="p-5 sm:p-6 rounded-2xl bg-slate-800/90 border border-slate-700 flex flex-col justify-between"
                >
                  <div>
                    <h4 className="text-base sm:text-lg font-extrabold text-emerald-400 mb-2">
                      {coop.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {coop.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center border-t border-slate-800 pt-6 max-w-2xl mx-auto text-slate-300 text-xs sm:text-sm space-y-2">
              <p>
                Você não chegará à entrevista sabendo apenas o nome da cooperativa.
              </p>
              <p className="text-white font-bold">
                Chegará entendendo como ela funciona, quais comportamentos valoriza e como conectar sua trajetória à oportunidade.
              </p>
            </div>
          </div>

          {/* 7. EXCLUSIVE BONUSES */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black bg-amber-100 text-amber-900 mb-3">
              <Gift className="w-3.5 h-3.5 text-amber-600" />
              <span>PRESENTES INCLUSOS</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight uppercase">
              Bônus exclusivos
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {bonuses.map((bonus, bIdx) => {
              const BIcon = bonus.icon;
              return (
                <div
                  key={bIdx}
                  className="p-6 rounded-3xl bg-amber-50/60 border border-amber-200/90 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[11px] font-black uppercase tracking-wider text-amber-800 bg-amber-100 px-2.5 py-1 rounded-md">
                        {bonus.number}
                      </span>
                      <BIcon className="w-5 h-5 text-amber-700" />
                    </div>
                    <h4 className="text-base font-black text-slate-900 mb-2">
                      {bonus.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {bonus.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 8. SUMMARY: SÃO 12 MATERIAIS */}
          <div className="rounded-3xl bg-emerald-950 text-white p-8 sm:p-10 text-center shadow-xl">
            <h3 className="text-xl sm:text-3xl font-black tracking-tight mb-6">
              São 12 materiais para acompanhar toda a sua preparação
            </h3>
            <ul className="max-w-2xl mx-auto text-left space-y-3 mb-8 text-xs sm:text-sm text-emerald-100">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>5 guias completos sobre candidatura, Gupy, fit cultural, apresentação e entrevista;</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>4 guias específicos sobre Sicredi, Sicoob, Cresol e Unicred;</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Modelos de currículos editáveis;</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Modelo visual de LinkedIn feminino;</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Modelo visual de LinkedIn masculino.</span>
              </li>
            </ul>

            <a
              href={checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm sm:text-base uppercase tracking-wider shadow-lg shadow-emerald-500/25 transition-all"
            >
              <span>Quero acessar todos os materiais</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </a>
          </div>
        </div>
      </section>

      {/* 9. TARGET AUDIENCE (PARA QUEM É) */}
      <section className="py-16 sm:py-24 bg-white border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight uppercase mb-4">
              Para quem é o Da Candidatura à Aprovação?
            </h2>
            <p className="text-base text-slate-600">
              Este produto é indicado para quem:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-14">
            {whoIsItFor.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 flex items-start gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-800 font-medium">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Anti-Slop / Realism Section */}
          <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-10">
            <h3 className="text-lg sm:text-2xl font-black text-amber-400 mb-4">
              Este material não é para quem procura respostas prontas para decorar
            </h3>
            <div className="space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>Não existe uma frase mágica capaz de garantir uma contratação.</p>
              <p className="font-bold text-white">O que existe é preparação.</p>
              <p>
                O método vai ajudar você a analisar sua trajetória, organizar suas experiências, entender as vagas e construir respostas verdadeiras e estratégicas.
              </p>
              <p>
                A aprovação continuará dependendo da compatibilidade com a oportunidade, dos critérios da empresa e do seu desempenho nas etapas.
              </p>
              <p className="text-emerald-400 font-semibold pt-2">
                Mas você deixará de participar dos processos sem saber o que está fazendo ou onde pode melhorar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. WHAT CHANGES (O QUE MUDA DEPOIS) */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight uppercase mb-4">
              O que muda depois deste método?
            </h2>
            <p className="text-base text-slate-600">
              Você passa a:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-10">
            {whatChanges.map((change, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex items-start gap-3"
              >
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs sm:text-sm text-slate-800 font-medium">
                  {change}
                </span>
              </div>
            ))}
          </div>

          <div className="text-center max-w-2xl mx-auto space-y-2 text-slate-700 text-base sm:text-lg font-medium">
            <p>A diferença não está em enviar mais currículos.</p>
            <p className="font-black text-emerald-700 text-xl">
              Está em fazer candidaturas melhores.
            </p>
          </div>
        </div>
      </section>

      {/* 11. WHO CREATED THE METHOD (LUANA SOARES) */}
      <section className="py-16 sm:py-24 bg-white border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Photo */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm rounded-3xl overflow-hidden shadow-xl aspect-[3/4]">
                <img
                  src={photoUrl}
                  alt="Luana Soares - Criadora do Método DCA"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md text-white px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-md">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  <span>12 Anos no Sicredi</span>
                </div>
              </div>
            </div>

            {/* Right Bio */}
            <div className="lg:col-span-7 space-y-5 text-slate-700 text-sm sm:text-base leading-relaxed">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black bg-emerald-100 text-emerald-900 mb-2">
                <Award className="w-3.5 h-3.5 text-emerald-700" />
                <span>EXPERIÊNCIA REAL</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Quem criou este método?
              </h2>
              <p>
                Eu sou <strong>Luana Soares</strong> e trabalhei por 12 anos no Sicredi.
              </p>
              <p>
                Ao longo da minha trajetória, atuei com atendimento, relacionamento, gestão de carteira, metas e desenvolvimento de negócios. Vivi de perto a cultura cooperativista, participei de diferentes desafios profissionais e construí uma carreira marcada por crescimento e novas responsabilidades.
              </p>
              <p>
                Depois de conhecer tantas pessoas competentes que não conseguiam demonstrar seu potencial durante os processos seletivos, reuni neste produto as orientações que um candidato precisa para se preparar desde a escolha da vaga até a entrevista.
              </p>
              <p className="font-semibold text-slate-900 border-l-4 border-emerald-600 pl-4 py-1">
                Meu objetivo é ajudar você a parar de se candidatar no escuro e começar a participar das seleções entendendo o que a empresa procura e como apresentar sua trajetória com clareza.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 12. PRICING & OFFER SECTION */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 to-emerald-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight uppercase mb-4">
              Sua preparação completa começa agora
            </h2>
            <div className="space-y-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                Você pode continuar enviando o mesmo currículo, preenchendo plataformas sem estratégia e esperando que algum recrutador reconheça sozinho todo o seu potencial.
              </p>
              <p className="font-bold text-slate-900">
                Ou pode aprender a construir uma candidatura que mostre, com clareza, por que sua experiência faz sentido para a oportunidade.
              </p>
            </div>
          </div>

          {/* Pricing Box */}
          <div className="max-w-xl mx-auto rounded-3xl bg-white border-2 border-emerald-500 shadow-2xl overflow-hidden p-8 sm:p-10 relative">
            <div className="text-center mb-6">
              <span className="inline-block text-xs font-black uppercase tracking-wider bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full mb-3">
                OFERTA ESPECIAL
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                Receba agora o Da Candidatura à Aprovação
              </h3>
            </div>

            {/* Price values */}
            <div className="text-center py-6 my-4 border-y border-slate-100">
              <span className="text-sm font-bold text-slate-400 line-through block mb-1">
                De R$ 119,00
              </span>
              <div className="flex items-center justify-center gap-2">
                <span className="text-xs font-bold text-slate-500 uppercase">Por apenas</span>
                <span className="text-4xl sm:text-5xl font-black text-emerald-600 tracking-tight">
                  R$ 47,00
                </span>
              </div>
              <span className="text-xs text-slate-500 font-semibold block mt-1">
                À vista ou parcelado no cartão
              </span>
            </div>

            {/* Included bullet points */}
            <ul className="space-y-3 my-6 text-xs sm:text-sm text-slate-700">
              <li className="flex items-center gap-2.5 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Acesso aos 12 materiais;</span>
              </li>
              <li className="flex items-center gap-2.5 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Conteúdo digital;</span>
              </li>
              <li className="flex items-center gap-2.5 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Acesso imediato após a confirmação do pagamento;</span>
              </li>
              <li className="flex items-center gap-2.5 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Materiais práticos e aplicáveis;</span>
              </li>
              <li className="flex items-center gap-2.5 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Pagamento seguro.</span>
              </li>
            </ul>

            {/* Checkout Button */}
            <a
              href={checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm sm:text-base uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-emerald-600/30 hover:shadow-emerald-600/45 transition-all"
            >
              <span>QUERO ME PREPARAR PARA SER APROVADO</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <div className="mt-4 flex items-center justify-center gap-4 text-[11px] text-slate-400 font-semibold">
              <span>Garantia incondicional</span>
              <span>•</span>
              <span>Acesso vitalício aos PDFs</span>
            </div>
          </div>
        </div>
      </section>

      {/* 13. FAQ SECTION */}
      <section className="py-16 sm:py-24 bg-white border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black bg-slate-100 text-slate-800 mb-3">
              <HelpCircle className="w-3.5 h-3.5 text-slate-600" />
              <span>TIRANDO DÚVIDAS</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight uppercase">
              Perguntas frequentes
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = !!openFaq[idx];
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 overflow-hidden transition-all bg-slate-50/50"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base hover:bg-slate-100/70 transition-colors"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-emerald-600 shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="p-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 14. FINAL CTA SECTION */}
      <section className="py-16 sm:py-20 bg-slate-950 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight uppercase mb-4 text-white">
            Chega de se candidatar sem direção
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mb-8 max-w-xl mx-auto">
            Tenha em mãos o passo a passo para organizar sua trajetória, melhorar seus materiais profissionais e chegar às próximas etapas sabendo como demonstrar o seu valor.
          </p>

          <a
            href={checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm sm:text-base uppercase tracking-wider shadow-xl shadow-emerald-500/25 transition-all"
          >
            <span>QUERO ACESSAR O DA CANDIDATURA À APROVAÇÃO</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </a>
        </div>
      </section>

      {/* FOOTER */}
     
    </div>
  );
};
