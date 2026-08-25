export interface Meeting {
  number: number;
  isBonus?: boolean;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  keyPoints: string[];
  deliverable: string;
  quote: string;
}

export interface BonusItem {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  highlight: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const SITE_DATA = {
  name: "Aprova Coop",
  logoUrl: "https://firebasestorage.googleapis.com/v0/b/travessia-c189d.firebasestorage.app/o/site_images%2F1787658150114_aprovacoop?alt=media&token=024afe17-83e9-4124-aee9-3ba0406d7409",
  checkoutUrl: "https://pay.kiwify.com.br/Mz9SSZO",
  regularPrice: "R$ 799,00",
  specialPrice: "R$ 599,00",
  installments: "em até 12x no cartão",
  mentor: {
    totalExperience: "Mais de 15 anos",
    systemExperience: "no sistema bancário",
    coopExperience: "12 anos no Sicredi",
    bio: "Minha trajetória profissional foi construída ao longo de mais de 15 anos no sistema bancário, sendo 12 anos dentro do Sicredi. Foi onde construí uma trajetória sólida, conhecendo na prática o ambiente de uma cooperativa de crédito, sua cultura e as competências necessárias para crescer nesse mercado.",
  },
  meetings: [
    {
      number: 1,
      tag: "Encontro 1",
      title: "Tua Trajetória e Teu Valor Profissional",
      subtitle: "Diagnóstico profundo & Competências transferíveis",
      description: "Antes de tentar convencer uma cooperativa do seu valor, você precisa reconhecer esse valor. Faremos um verdadeiro diagnóstico da sua trajetória, analisando formação, histórico, resultados e competências transferíveis.",
      keyPoints: [
        "Diagnóstico da formação, cursos, certificações e histórico profissional",
        "Mapeamento de resultados, conquistas e competências reais",
        "Identificação de competências transferíveis (mesmo sem experiência prévia em banco)",
        "Análise de competências: Atendimento, Relacionamento, Vendas, Metas, Negociação, Organização, Resolução de Problemas e Liderança",
        "Mapeamento de áreas, cargos, instituições e oportunidades com maior aderência ao seu perfil"
      ],
      deliverable: "Você termina esse encontro sabendo exatamente: 'O que eu tenho para oferecer e onde isso pode ter valor.'",
      quote: "O que eu tenho para oferecer e onde isso pode ter valor."
    },
    {
      number: 2,
      tag: "Encontro 2",
      title: "Descubra o que as Cooperativas Procuram",
      subtitle: "Cultura do cooperativismo & Cruzamento de requisitos",
      description: "Agora que entendemos você, vamos entender quem está do outro lado da mesa. Você aprenderá como pesquisar uma instituição antes de se candidatar e como analisar sua cultura, valores e requisitos.",
      keyPoints: [
        "Cultura do cooperativismo, história da instituição, missão, visão, propósito e valores",
        "Comportamento esperado e atuação da cooperativa na comunidade",
        "Comunicação institucional e postura de seus líderes",
        "Requisitos obrigatórios vs. desejáveis e certificações quando exigidas (CPA-10, CPA-20, etc.)",
        "Identificação de palavras e competências recorrentes nas vagas",
        "Cruzamento estratégico: O que a vaga procura × O que você possui (diferenciais e GAPs)"
      ],
      deliverable: "Você termina sabendo com clareza: 'O que a empresa espera de mim e o que ainda preciso construir.'",
      quote: "O que a empresa espera de mim e o que ainda preciso construir."
    },
    {
      number: 3,
      tag: "Encontro 3",
      title: "Currículo, LinkedIn e Candidatura Estratégica",
      subtitle: "Construção ao vivo & Otimização para ATS e Gupy",
      description: "Não adianta possuir boas experiências se o recrutador ou o algoritmo não conseguem enxergá-las. Vamos trabalhar ao vivo no seu posicionamento profissional completo.",
      keyPoints: [
        "Como funcionam processos seletivos online, plataformas como Gupy e sistemas ATS",
        "Trabalho direto e ao vivo no seu CURRÍCULO: Objetivo, Resumo, Experiências, Resultados, Competências e Palavras-chave",
        "Ajuste completo do seu LINKEDIN para conversar diretamente com seu objetivo profissional",
        "Estratégia prática de CANDIDATURAS: onde encontrar vagas e como preenchê-las corretamente",
        "Análise conjunta de uma vaga real quando houver oportunidade adequada disponível"
      ],
      deliverable: "Currículo direcionado + LinkedIn ajustado + Estratégia prática para encontrar e se candidatar às vagas certas.",
      quote: "Currículo direcionado + LinkedIn ajustado + Estratégia de candidatura."
    },
    {
      number: 4,
      tag: "Encontro 4",
      title: "Venda Pessoal e Posicionamento",
      subtitle: "Como falar sobre você com naturalidade, estratégia e segurança",
      description: "Chegar à entrevista e simplesmente repetir frases decoradas dificilmente demonstra quem você realmente é. Vamos construir sua capacidade de comunicar seu valor com maestria.",
      keyPoints: [
        "Construção do seu 'Me fale sobre você' e apresentação estratégica da sua trajetória",
        "Como apresentar resultados, pontos fortes e pontos de desenvolvimento com naturalidade",
        "Comunicação verbal, tom de voz, ritmo, objetividade, postura, expressão facial e contato visual",
        "Técnicas de Rapport e Escuta Ativa para conectar com o entrevistador",
        "Preparação para entrevistas presenciais e online (iluminação, áudio, vestimenta adequada)",
        "Preparação emocional e técnicas rápidas para controle de ansiedade antes e durante a entrevista"
      ],
      deliverable: "Você sai preparado para responder com segurança: 'Quem sou eu?', 'O que tenho para oferecer?' e 'Por que faço sentido para essa oportunidade?'.",
      quote: "Falar sobre si com naturalidade, estratégia e segurança."
    },
    {
      number: 5,
      isBonus: true,
      tag: "Encontro 5 • Bônus Exclusivo",
      title: "Preparação para a sua Entrevista Real",
      subtitle: "Encontro individual realizado quando você for chamado para um processo",
      description: "Uma coisa é aprender a se preparar; outra é olhar para a vaga que você realmente quer disputar e construir uma estratégia cirúrgica direcionada para ela.",
      keyPoints: [
        "Análise minuciosa da vaga específica, da cooperativa e da etapa do processo seletivo",
        "Revisão do currículo enviado e das competências que você precisa evidenciar",
        "Definição das 3 principais mensagens que você precisa transmitir para os avaliadores",
        "Seleção das melhores histórias e experiências da sua trajetória para aquela vaga específica",
        "Mapeamento das perguntas mais prováveis e fortalecimento das suas respostas",
        "SIMULAÇÃO REAL 1:1 da entrevista com feedback imediato, correções e checklist final"
      ],
      deliverable: "Entrar na entrevista sabendo exatamente o que comunicar, quais histórias contar e por que seu perfil é a escolha certa.",
      quote: "Chegar à sua entrevista real com preparo, segurança e estratégia."
    }
  ] as Meeting[],

  bonuses: [
    {
      id: "bonus-1",
      badge: "BÔNUS 1 (INCLUSO NO 5º ENCONTRO)",
      title: "Preparação & Simulação para a sua Entrevista Real",
      subtitle: "Acompanhamento 1:1 direcionado para a vaga que você for disputar",
      description: "Quando você for chamado para um processo seletivo em uma cooperativa, nós agendaremos este encontro individual para destrinchar a vaga, a banca examinadora, as perguntas prováveis e realizar uma simulação real com feedback imediato.",
      features: [
        "Análise da cooperativa e da vaga específica",
        "Seleção das melhores experiências da sua trajetória",
        "Simulação completa de entrevista 1:1 ao vivo",
        "Feedback detalhado, correções e checklist de segurança emocional"
      ],
      highlight: "Você não vai para a entrevista sozinho nem no improviso."
    },
    {
      id: "bonus-2",
      badge: "BÔNUS 2",
      title: "Fui Contratado: O Plano dos Primeiros 90 Dias",
      subtitle: "Construindo uma carreira sólida dentro da cooperativa",
      description: "A aprovação não é o fim do trabalho, é o início de uma nova etapa. Você receberá um guia completo para se posicionar com excelência desde o primeiro dia de trabalho.",
      features: [
        "Postura no primeiro dia e adaptação à cultura cooperativa",
        "Relacionamento com gestor, colegas e identificação de pessoas-chave",
        "Aprendizado acelerado de processos, sistemas, produtos e serviços",
        "Metas, indicadores, proatividade e como pedir e receber feedback",
        "Construção de autonomia e demonstração rápida de resultados"
      ],
      highlight: "Para que seu objetivo não seja apenas entrar, mas crescer na instituição."
    },
    {
      id: "bonus-3",
      badge: "BÔNUS 3",
      title: "Preparação para Provas de Cooperativas",
      subtitle: "Materiais exclusivos de aprofundamento e prática",
      description: "Material completo com foco no entendimento cultural do cooperativismo e acesso a simulados para você gabaritar as etapas teóricas dos processos seletivos.",
      features: [
        "PDF Exclusivo sobre Cultura do Cooperativismo de Crédito",
        "Compreensão profunda dos princípios cooperativistas antes dos testes",
        "Acesso a plataforma com simulados práticos",
        "Questões reais utilizadas em etapas avaliativas de cooperativas"
      ],
      highlight: "Tudo o que você precisa para se destacar nas avaliações teóricas."
    }
  ] as BonusItem[],

  deliverablesSummary: [
    {
      title: "5 Encontros Individuais 1:1 ao vivo",
      subtitle: "Diagnóstico, cultura, currículo, venda pessoal e simulação real 1:1"
    },
    {
      title: "Construção do Currículo Estratégico Ao Vivo",
      subtitle: "Adequado para ATS, Gupy e com palavras-chave de cooperativas"
    },
    {
      title: "Otimização Completa de LinkedIn",
      subtitle: "Perfil direcionado para atrair recrutadores de instituições financeiras"
    },
    {
      title: "Mapeamento de Competências Transferíveis",
      subtitle: "Tradução das suas experiências passadas para o valor esperado em cooperativas"
    },
    {
      title: "BÔNUS 1: Simulação 1:1 para Entrevista Real",
      subtitle: "Encontro exclusivo realizado na data em que você for chamado para um processo"
    },
    {
      title: "BÔNUS 2: Plataforma com 100+ Simulados",
      subtitle: "Banco com testes reais para você gabaritar as etapas de provas escritas"
    },
    {
      title: "BÔNUS 3: Plano dos Primeiros 90 Dias",
      subtitle: "Guia prático para garantir adaptação rápida e crescimento na carreira"
    },
    {
      title: "Guia de Cultura & Princípios do Cooperativismo",
      subtitle: "PDF exclusivo com fundamentos e valores exigidos pelos avaliadores"
    }
  ],

  deliverablesChecklist: [
    "Acompanhamento individual 1:1 com 5 encontros dedicados",
    "Diagnóstico completo da sua trajetória profissional",
    "Identificação de competências e diferenciais competitivos",
    "Mapeamento de competências transferíveis (mesmo sem histórico em banco)",
    "Direcionamento estratégico para cargos e cooperativas adequadas",
    "Análise profunda do que as cooperativas de crédito procuram",
    "Identificação e plano de superação dos seus GAPs profissionais",
    "Construção e revisão do seu currículo AO VIVO",
    "Ajustes cirúrgicos no seu perfil do LinkedIn",
    "Estratégia prática para encontrar e se candidatar a vagas",
    "Preparação para plataformas de recrutamento (Gupy, ATS)",
    "Construção da sua apresentação pessoal ('Fale sobre você')",
    "Desenvolvimento de venda pessoal, postura, rapport e voz",
    "5º Encontro individual direcionado para a sua entrevista real",
    "Análise específica da vaga e da instituição contratante",
    "Banco de histórias e experiências profissionais sob medida",
    "Simulação individual de entrevista com feedback ao vivo",
    "Correção e refinamento de respostas difíceis",
    "BÔNUS: Plano dos Primeiros 90 Dias após a contratação",
    "BÔNUS: PDF exclusivo sobre Cultura do Cooperativismo",
    "BÔNUS: Plataforma com simulados de provas de processos seletivos"
  ],

  anxiousQuestions: [
    {
      question: "“Fale sobre você.”",
      description: "Como sintetizar sua vida profissional sem ser prolixo, sem parecer arrogante e destacando o que realmente interessa para a cooperativa."
    },
    {
      question: "“Por que você quer trabalhar em uma cooperativa?”",
      description: "Como demonstrar entendimento real do cooperativismo e dos valores da instituição, fugindo das respostas clichês que todo mundo dá."
    },
    {
      question: "“Por que deveríamos contratar você?”",
      description: "Como conectar suas experiências e competências aos desafios da vaga com confiança, sem gaguejar e sem parecer que decorou um texto."
    }
  ],

  transferableSkills: [
    { name: "Atendimento ao Público", icon: "Users" },
    { name: "Relacionamento & Fidelização", icon: "HeartHandshake" },
    { name: "Vendas & Negociação", icon: "TrendingUp" },
    { name: "Foco em Metas & Resultados", icon: "Target" },
    { name: "Organização & Processos", icon: "CheckSquare" },
    { name: "Resolução de Problemas", icon: "Lightbulb" },
    { name: "Liderança & Trabalho em Equipe", icon: "Award" },
    { name: "Comunicação & Escuta Ativa", icon: "MessageSquare" }
  ],

  cooperativeInstitutions: [
    "Sicredi",
    "Sicoob",
    "Cresol",
    "Unicred",
    "Viacredi (Ailos)",
    "Credisis",
    "Credicitrus",
    "Cresol Confederação"
  ],

  faqs: [
    {
      question: "“Mas eu nunca trabalhei em banco. Consigo passar em uma cooperativa?”",
      answer: "Sim! As cooperativas valorizam muito profissionais com competências sólidas em relacionamento, atendimento, vendas, resolução de problemas e alinhamento de valores. No Aprova Coop, não vamos inventar experiências — vamos mapear suas competências transferíveis e ensinar você a demonstrar com precisão o valor do que você já construiu."
    },
    {
      question: "“Já mandei vários currículos e não fui chamado. O que está errado?”",
      answer: "Precisamos investigar onde está o gargalo (GAP). Muitas vezes o problema está na escolha errada do nível da vaga, currículo mal estruturado para filtros automáticos (ATS/Gupy), ausência de palavras-chave estratégicas ou candidatura genérica. No Encontro 3 vamos refazer seu currículo e LinkedIn ao vivo."
    },
    {
      question: "“Eu fico muito nervoso e travo na hora das entrevistas. Como o método ajuda?”",
      answer: "O nervosismo vem principalmente da sensação de improviso e de não saber o que o entrevistador espera. No Aprova Coop você terá técnicas de controle de ansiedade, preparação da sua narrativa e, no 5º Encontro, faremos uma SIMULAÇÃO REAL 1:1 da entrevista da vaga que você estiver disputando com feedback imediato."
    },
    {
      question: "“R$ 599,00 é um investimento alto para mim. Vale a pena?”",
      answer: "Pense no seguinte: quanto custa continuar perdendo oportunidades de emprego ou meses enviando currículos sem resposta? O Aprova Coop não é um curso gravado genérico — são 5 encontros 1:1 totalmente individuais comigo (15+ anos no sistema bancário, 12 anos no Sicredi), revisando seu currículo ao vivo e simulando sua entrevista real, além dos 3 bônus exclusivos. O valor pode ser parcelado em até 12x no cartão."
    },
    {
      question: "“Como funcionam os agendamentos dos 5 encontros individuais?”",
      answer: "Assim que você concluir sua inscrição na Kiwify, você receberá acesso direto para alinharmos os horários que melhor se encaixam na sua rotina (inclusive horários flexíveis). Os 4 primeiros encontros acontecem online via videoconferência, e o 5º encontro fica reservado para quando você for chamado para uma entrevista real!"
    },
    {
      question: "“O Aprova Coop serve para quais cooperativas de crédito?”",
      answer: "O método é baseado nos pilares e exigências de todo o sistema cooperativo de crédito brasileiro: Sicredi, Sicoob, Cresol, Unicred, Viacredi / Ailos, Credisis, entre outras. A cultura cooperativista possui diretrizes fundamentais compartilhadas por todas elas."
    }
  ] as FAQItem[],

  get faq() {
    return this.faqs;
  },

  footerDisclaimer: "Aprova Coop é um programa educacional e de desenvolvimento profissional independente. Não possuímos vínculo empregatício direto ou exclusividade com quaisquer cooperativas citadas. A decisão de contratação cabe exclusivamente às bancas e instituições contratantes."
};
