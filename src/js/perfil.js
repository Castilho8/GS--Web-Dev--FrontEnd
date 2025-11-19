// Lista de profissionais (simulados)
const professionals = [
  {
    id: 1,
    name: "Marcus Johnson",
    role: "Consultor de Trabalho Remoto",
    location: "Austin, TX",
    image: "../img/Perfil-Foto1.jpg",
    company: "WorkAnywhere Co.",
    email: "marcus.j@workanywhere.com",
    phone: "+1 (555) 234-5678",
    website: "https://workanywhere.com",
    about: "Ajudando organizações a fazer a transição para modelos de trabalho remoto e híbrido eficazes. Especialista em colaboração digital e gestão de equipes distribuídas.",
    skills: ["Estratégia de Trabalho Remoto", "Gestão de Equipes", "Ferramentas Digitais", "Gestão de Mudanças", "Comunicação"],
    traits: ["Estratégico", "Focado em Pessoas", "Organizado", "Visionário"],
    workStyle: ["Orientado a Resultados", "Flexível", "Comunicativo", "Proativo"],
    interests: ["Nomadismo Digital", "Produtividade", "Equilíbrio Trabalho-Vida", "Viagens"],
    academic: ["MBA em Gestão de Pessoas - Harvard Business School - 2016", "Bacharelado em Psicologia Organizacional- UC Berkeley - 2012"],
    experience: ["Consultor de Trabalho Remoto - WorkAnywhere Co. - 2018-Atual", "Gerente de RH - Tech Innovations Inc. - 2016-2018"],
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Especialista em Ética de IA",
    location: "São Francisco, CA",
    image: "../img/Perfil-Foto2.jpg",
    company: "FutureTech Labs",
    email: "sarah.chen@futuretechlabs.com",
    phone: "+1 (555) 123-4567",
    website: "https://futuretechlabs.com",
    about: "Apaixonada por garantir que o desenvolvimento de IA esteja alinhado com valores humanos e bem social. Liderando iniciativas em implementação responsável de IA.",
    skills: ["Ética em IA", "Aprendizado de Máquina", "Desenvolvimento de Políticas", "Pesquisa", "Python"],
    traits: ["Analítica", "Detalhista", "Inovadora", "Colaborativa"],
    workStyle: ["Colaborativo", "Orientado a Pesquisa", "Metódica", "Adaptável"],
    interests: ["Futuro", "Impacto Social", "Política Tecnológica", "Educação"],
    academic: ["Mestrado em Filosofia — MIT — 2021", "Doutorado em Ciência da Computação — Stanford University — 2017"],
    experience: ["Especialista em Ética de IA — FutureTech Labs — 2020–Atual", "Cientista de Dados - Google AI — 2019–2020"],
  },
  {
    id: 3,
    name: "Priya Patel",
    role: "Diretora de Sustentabilidade",
    location: "Seattle, WA",
    image: "../img/Perfil-Foto3.jpg",
    company: "GreenFuture Corp",
    email: "priya.patel@greenfuture.com",
    phone: "+1 (555) 345-6789",
    website: "https://greencorp.com",
    about: "Impulsionando iniciativas corporativas de sustentabilidade e responsabilidade ambiental. Comprometida em criar um futuro mais verde através da inovação empresarial.",
    skills: ["Estratégia de Sustentabilidade", "Política Ambiental", "Contabilidade de Carbono", "Engajamento de Stakeholders", "Análise de Dados"],
    traits: ["Orientada a Propósito", "Colaborativa", "Persistente", "Otimista"],
    workStyle: ["Foco em Impacto", "Orientada a Dados", "Inovadora", "Transparente"],
    interests: ["Ação Climática", "Impacto Social", "Energia Renovável", "Economia Circular"],
    academic: ["Mestrado em Ciências Ambientais — Universidade de Yale — 2021", "Bacharelado em Administração de Empresas — Universidade de Washington — 2015"],
    experience: ["Diretora de Sustentabilidade — GreenFuture Corp — 2021–Atual", "Analista de Políticas Ambientais — 2017–2021", "Estágio em Sustentabilidade — 2016"],
  },
  {
    id: 4,
    name: "David Kim",
    role: "Líder de Design UX",
    location: "Nova York, NY",
    image: "../img/Perfil-Foto4.jpg",
    company: "DesignFirst Studio",
    email: "david.kim@designfirst.com",
    phone: "+1 (555) 456-7890",
    website: "https://designfirst.studio",
    about: "Criando experiências digitais intuitivas e acessíveis. Defensor do design centrado no ser humano na era da automação.",
    skills: ["Design UX", "Design UI", "Pesquisa de Usuário", "Prototipação", "Sistemas de Design"],
    traits: ["Empático", "Curioso", "Cultura", "Meticuloso"],
    workStyle: ["Iterativo", "Colaborativo", "Baseado em Pesquisa", "Orientado a Detalhes"],
    interests: ["Tipografia", "Estética", "Arquitetura", "Museus e Arte"],
    academic: ["MFA em Design de Inovação — School of Visual Arts — 2018", "Bacharelado em Design Gráfico — Rhode Island School of Design — 2016"],
    experience: ["Líder de Design UX — DesignFirst Studio — 2021–Atual", "Designer UX Sênior — 2016–2021"]
  },
  {
    id: 5,
    name: "Elena Rodriguez",
    role: "Desenvolvedora Blockchain",
    location: "Miami, FL",
    image: "../img/Perfil-Foto5.jpg",
    company: "CryptoInnovate",
    email: "elena@cryptoinnovate.com",
    phone: "+1 (555) 547-9801",
    website: "https://cryptoinnovate.io",
    about: "Construindo o futuro descentralizado. Especializada em contratos inteligentes e infraestrutura blockchain para aplicações de próxima geração.",
    skills: ["Blockchain", "Contratos Inteligentes", "Solidity", "Web3", "Criptografia"],
    traits: ["Inovadora", "Lógica", "Independente", "Visionária"],
    workStyle: ["Solucionadora de Problemas", "Automatizada", "Testável", "Experimental"],
    interests: ["Criptomoedas", "Descentralização", "Jogos", "Economia"],
    academic: ["Mestrado em Engenharia da Computação — Georgia Tech — 2021", "Bacharelado em Matemática — Universidade da Florida — 2016"],
    experience: ["Desenvolvedora Blockchain Líder — CryptoInnovate — 2021–Atual", "Arquiteta de Software — 2018–2021", "Estágio em Desenvolvimento — 2016–2018"]
  },
  {
    id: 6,
    name: "James Mitchell",
    role: "Gerente de Aprendizagem e Desenvolvimento",
    location: "Boston, MA",
    image: "../img/Perfil-Foto6.jpg",
    company: "SkillBridge Academy",
    email: "james.mitchell@skillbridge.com",
    phone: "+1 (555) 678-9012",
    website: "https://skillbridge.academy",
    about: "Capacitando profissionais a prosperar no futuro do trabalho através de programas centrados em aprendizagem contínua, desenvolvimento de liderança e experiências educacionais digitais escaláveis.",
    skills: ["Design Instrucional", "E-Learning", "Desenvolvimento de Liderança", "Coaching", "Desenvolvimento Curricular"],
    traits: ["Apoiador", "Paciente", "Resiliente", "Perspicaz"],
    workStyle: ["Centrado na Aprendizagem", "Adaptável", "Estruturado", "Engajado", "Evolutivo"],
    interests: ["Tecnologia Educacional", "Mentoria", "Leitura", "Padrões"],
    academic: ["Doutorado em Aprendizagem de Adultos — Universidade de Calgary — 2022", "Mestrado em Educação — Universidade de Boston — 2016"],
    experience: [
      "Gerente de Aprendizagem e Desenvolvimento — SkillBridge Academy — 2019–Atual", "Especialista em Treinamento — Learning Labs — 2016–2019", "Analista de L&D — 2014–2016"]
  },
  {
    id: 7,
    name: "Ana Silva",
    role: "Cientista de Dados",
    location: "São Paulo, SP",
    image: "../img/Perfil-Foto7.jpg",
    company: "DataInsights Pro",
    email: "ana.silva@datainsights.com",
    phone: "+55 11 98765-4321",
    website: "https://datainsights.pro",
    about: "Transformando dados complexos em insights acionáveis. Especialista em análise preditiva e visualização de dados para suportar decisões estratégicas inteligentes.",
    skills: ["Python", "R", "Machine Learning", "SQL", "Tableau"],
    traits: ["Analítica", "Curiosa", "Precisa", "Comunicativa"],
    workStyle: ["Orientada a Dados", "Metódica", "Investigativa", "Colaborativa"],
    interests: ["Estatística", "Visualização de Dados", "Inteligência Artificial", "Café"],
    academic: ["Mestrado em Ciência de Dados — Universidade de São Paulo — 2021", "Bacharelado em Estatística — UNICAMP — 2016"],
    experience: ["Cientista de Dados Sênior — DataInsights Pro — 2021–Atual", "Analista de Dados — 2018–2021", "Estágio em Dados — 2016–2018"]
  },
  {
    id: 8,
    name: "Thomas Anderson",
    role: "Especialista em Segurança Cibernética",
    location: "Londres, Reino Unido",
    image: "../img/Perfil-Foto8.jpg",
    company: "SecureShield Systems",
    email: "thomas.a@secureshield.com",
    phone: "+44 20 7946 0958",
    website: "https://secureshield.systems",
    about: "Protegendo empresas contra ameaças cibernéticas avançadas. Especializado em arquitetura de segurança zero-trust e resposta a incidentes críticos.",
    skills: ["Segurança de Rede", "Ethical Hacking", "Análise de Malware", "SIEM", "Conformidade"],
    traits: ["Vigilante", "Analítico", "Meticuloso", "Proativo"],
    workStyle: ["Procedural", "Documentado", "Seguro", "Estratégico"],
    interests: ["Criptografia", "Segurança de Dados", "Capture The Flag", "Cafés"],
    academic: ["Mestrado em Segurança da Informação — Imperial College London — 2021", "Bacharelado em Ciência da Computação — Universidade de Cambridge — 2015"],
    experience: ["Arquiteto de Segurança — SecureShield Systems — 2021–Atual", "Analista de Segurança — 2017–2021", "Estágio em Segurança — 2015–2017"]
  },
  {
    id: 9,
    name: "Sophia Martinez",
    role: "Gerente de Produto Digital",
    location: "Barcelona, Espanha",
    image: "../img/Perfil-Foto9.jpg",
    company: "InnovateTech",
    email: "sophia.m@innovatech.com",
    phone: "+34 91 123 4567",
    website: "https://innovatech.com",
    about: "Liderando desenvolvimento de produtos digitais inovadores do conceito ao lançamento. Focada em criar experiências centradas no cliente que geram valor sustentável.",
    skills: ["Gestão de Produto", "Metodologias Ágeis", "Análise de Mercado", "Roadmapping", "User Stories", "Métricas de Produto"],
    traits: ["Visionária", "Empática", "Decisiva", "Comunicativa"],
    workStyle: ["Ágil", "Centrada no Cliente", "Iterativa", "Estratégica"],
    interests: ["Inovação de Produto", "Design Thinking", "Startups", "Cultura"],
    academic: ["MBA em Gestão de Produto — Business School — 2021", "Bacharelado em Engenharia de Software — Universidade Politécnica da Catalunha — 2016"
    ],
    experience: ["Gerente de Produto Sênior — InnovateTech — 2021–Atual", "Product Owner — SmartDigital — 2016–2021", "Estágio em Produto — 2015–2016"]
  },
  {
    id: 10,
    name: "Raj Sharma",
    role: "Estrategista de Marketing Digital",
    location: "Mumbai, Índia",
    image: "../img/Perfil-Foto10.jpg",
    company: "GrowthLab Agency",
    email: "raj.sharma@growthlab.agency",
    phone: "+91 22 4001 7788",
    website: "https://growthlab.agency",
    about: "Criando estratégias de marketing digital orientadas por dados que impulsionam crescimento em funis B2B e B2C. Especialista em SEO, marketing de conteúdo, automação e análise de performance.",
    skills: ["SEO/SEM", "Marketing de Conteúdo", "Google Analytics", "Mídias Sociais", "Email Marketing"],
    traits: ["Criativo", "Analítico", "Persuasivo", "Estratégico"],
    workStyle: ["Orientado a Resultados", "Data-Driven", "Colaborativo", "Multicanal"],
    interests: ["Growth Hacking", "Análise de Dados", "Tendências Digitais", "Críquete"],
    academic: ["Mestrado em Marketing Digital — Indian Institute of Management — 2021", "Bacharelado em Comunicação — Universidade de Mumbai — 2016"],
    experience: ["Diretor de Marketing Digital — GrowthLab Agency — 2021–Atual", "Especialista em Marketing Digital — GrowthLab Agency — 2018–2021", "Estágio em Marketing — 2016–2018"]
  },
  {
    id: 11,
    name: "Lisa Wang",
    role: "Especialista em RH Tech",
    location: "Singapura",
    image: "../img/Perfil-Foto11.jpg",
    company: "TalentFlow Solutions",
    email: "lisa.wang@talentflow.com",
    phone: "+65 6123 4567",
    website: "https://talentflow.solutions",
    about: "Revolucionando o recrutamento e gestão de talentos através de tecnologia. Implementando soluções de RH baseadas em IA para melhorar a experiência do colaborador e impulsionar a aprendizagem organizacional.",
    skills: ["HR Analytics", "Sistemas ATS", "People Management", "Recruitment Digital", "Employee Experience"],
    traits: ["Empática", "Relacionadora", "Organizada", "Meticulosa"],
    workStyle: ["Centrada em Pessoas", "Tech-Savvy", "Estratégica", "Colaborativa"],
    interests: ["Future of Work", "Cultura Organizacional", "Wellness", "Yoga"],
    academic: ["Mestrado em Gestão de Recursos Humanos — National University of Singapore — 2021", "Bacharelado em Psicologia — Universidade de Hong Kong — 2017"
    ], experience: ["Líder de RH Tech — TalentFlow Solutions — 2021–Atual", "Especialista em RH — 2017–2021", "Consultora de RH — 2015–2017"]
  },
  {
    id: 12,
    name: "Carlos Mendes",
    role: "Gerente de Mídias Sociais",
    location: "Lisboa, Portugal",
    image: "../img/Perfil-Foto12.jpg",
    company: "Social Buzz Agency",
    email: "carlos.m@socialbuzz.agency",
    phone: "+351 21 123 4567",
    website: "https://socialbuzz.agency/carlosmendes",
    about: "Criando estratégias de mídia social autênticas que constroem comunidades e impulsionam engajamento orgânico. Especialista em marketing de influenciadores e conteúdo viral orientado a dados.",
    skills: ["Gestão de Mídias Sociais", "Marketing de Influenciadores", "Criação de Conteúdo", "Community Management", "Analytics"],
    traits: ["Criativo", "Consultativo", "Trendy", "Energético"],
    workStyle: ["Dinâmico", "Criativo", "Responsivo", "Orientado a Tendências"],
    interests: ["Tendências Digitais", "Cultura Pop", "Fotografia", "Surf"],
    academic: ["Mestrado em Marketing Digital — Nova School of Business and Economics — 2021", "Bacharelado em Publicidade — Universidade de Lisboa — 2017"],
    experience: ["Gerente de Mídias Sociais — Social Buzz Agency — 2021–Atual", "Especialista em Mídias Sociais — Social Buzz Agency — 2017–2021", "Coordenador de Conteúdo — Digital Studio — 2015–2017"]
  }
];

document.addEventListener("DOMContentLoaded", () => {
  // Pega elementos
  const photoEl = document.getElementById("profile-photo");
  const nameEl = document.getElementById("profile-name");
  const roleEl = document.getElementById("profile-role");
  const locEl = document.getElementById("profile-location");
  const locTextEl = document.getElementById("profile-location-text");
  const companyTextEl = document.getElementById("profile-company-text");
  const aboutEl = document.getElementById("profile-about");
  const academicEl = document.getElementById("profile-academic");
  const expEl = document.getElementById("profile-experience");

  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");


  // Lê ?id= da URL
  const params = new URLSearchParams(window.location.search);
  const urlId = parseInt(params.get("id"), 10);

  // Define índice inicial: Se veio id válido, Começa nele; Se não, Começa no 0
  let currentIndex = 0;
  if (!isNaN(urlId)) {
    const foundIndex = professionals.findIndex(p => p.id === urlId);
    if (foundIndex !== -1) {
      currentIndex = foundIndex;
    }
  }

  function renderSlide(index) {
    const p = professionals[index];
    if (!p) return;

    photoEl.src = p.image;
    photoEl.alt = `Foto de ${p.name}`;
    nameEl.textContent = p.name;
    roleEl.textContent = p.role;
    if (locTextEl) locTextEl.textContent = p.location;
    if (companyTextEl) companyTextEl.textContent = p.company || "";
    aboutEl.textContent = p.about;

    // Barra de contato
    const contactEl = document.getElementById('contact-info');
    if (contactEl) {
      const items = [];
      if (p.email) {
        items.push(`<p class="contact-item" href="mailto:${p.email}"><i class="fa-solid fa-envelope"></i><span>${p.email}</span></p>`);
      }
      if (p.website) {
        const href = p.website.startsWith('http') ? p.website : `https://${p.website}`;
        const label = p.website.replace(/^https?:\/\//, '');
        items.push(`<p class="contact-item" href="${href}" target="_blank" rel="noopener"><i class="fa-solid fa-globe"></i><span>${label}</span></p>`);
      }
      if (p.phone) {
        const telHref = `tel:${p.phone.replace(/\s+/g, '')}`;
        items.push(`<p class="contact-item" href="${telHref}"><i class="fa-solid fa-phone"></i><span>${p.phone}</span></p>`);
      }
      contactEl.innerHTML = items.join('');
    }

    // Skills
    const skillsEl = document.getElementById('profile-skills');
    const traitsEl = document.getElementById('profile-traits');
    const workStyleEl = document.getElementById('profile-workstyle');
    const interestsEl = document.getElementById('profile-interests');
    if (skillsEl) { skillsEl.innerHTML = ''; (p.skills || []).forEach(s => { const d = document.createElement('div'); d.className = 'chip'; d.textContent = s; skillsEl.appendChild(d) }); }
    if (traitsEl) { traitsEl.innerHTML = ''; (p.traits || []).forEach(t => { const d = document.createElement('div'); d.className = 'chip'; d.textContent = t; traitsEl.appendChild(d) }); }
    if (workStyleEl) { workStyleEl.innerHTML = ''; (p.workStyle || []).forEach(w => { const d = document.createElement('div'); d.className = 'chip'; d.textContent = w; workStyleEl.appendChild(d) }); }
    if (interestsEl) { interestsEl.innerHTML = ''; (p.interests || []).forEach(i => { const d = document.createElement('div'); d.className = 'chip'; d.textContent = i; interestsEl.appendChild(d) }); }

    academicEl.innerHTML = "";
    p.academic.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      academicEl.appendChild(li);
    });

    expEl.innerHTML = "";
    p.experience.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      expEl.appendChild(li);
    });

  }

  function showNext() {
    currentIndex = (currentIndex + 1) % professionals.length;
    renderSlide(currentIndex);
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + professionals.length) % professionals.length;
    renderSlide(currentIndex);
  }

  if (prevBtn) prevBtn.addEventListener("click", showPrev);
  if (nextBtn) nextBtn.addEventListener("click", showNext);

  // Render inicial
  renderSlide(currentIndex);
});



