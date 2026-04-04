export type Language = "pt" | "en";

export type TranslationKey =
  | "nav.why"
  | "nav.about"
  | "nav.portfolio"
  | "nav.education"
  | "nav.certs"
  | "nav.contact"
  | "nav.available"
  | "hero.badgeErasmus"
  | "hero.badgeEnglish"
  | "hero.hello"
  | "hero.role"
  | "hero.pitch"
  | "hero.ctaContact"
  | "hero.ctaCv"
  | "hero.scrollLabel"
  | "why.title"
  | "why.subtitle"
  | "why.item1.title"
  | "why.item1.desc"
  | "why.item2.title"
  | "why.item2.desc"
  | "why.item3.title"
  | "why.item3.desc"
  | "why.item4.title"
  | "why.item4.desc"
  | "about.title"
  | "about.p1"
  | "about.p2"
  | "about.skillsTitle"
  | "about.langTitle"
  | "about.langPt"
  | "about.langEn"
  | "education.title"
  | "education.subtitle"
  | "education.item1.title"
  | "education.item1.location"
  | "education.item1.period"
  | "education.item1.desc"
  | "education.item2.title"
  | "education.item2.location"
  | "education.item2.period"
  | "education.item2.desc"
  | "experience.title"
  | "experience.subtitle"
  | "experience.item1.title"
  | "experience.item1.context"
  | "experience.item1.period"
  | "experience.item1.desc"
  | "experience.item2.title"
  | "experience.item2.context"
  | "experience.item2.period"
  | "experience.item2.desc"
  | "projects.title"
  | "projects.intro"
  | "projects.item1.title"
  | "projects.item1.desc"
  | "projects.item1.badge"
  | "projects.item1.f1"
  | "projects.item1.f2"
  | "projects.item1.f3"
  | "projects.item1.f4"
  | "projects.item1.f5"
  | "projects.item2.title"
  | "projects.item2.desc"
  | "projects.item2.badge"
  | "projects.item2.f1"
  | "projects.item2.f2"
  | "projects.item2.f3"
  | "projects.item2.f4"
  | "projects.item2.f5"
  | "projects.stack"
  | "projects.features"
  | "projects.noImage"
  | "projects.github"
  | "projects.live"
  | "projects.visit"
  | "projects.featured"
  | "projects.previewUnavailable"
  | "certs.title"
  | "certs.subtitle"
  | "testimonial.title"
  | "testimonial.quote"
  | "testimonial.author"
  | "contact.title"
  | "contact.subtitle"
  | "contact.form.name"
  | "contact.form.email"
  | "contact.form.message"
  | "contact.form.namePlaceholder"
  | "contact.form.emailPlaceholder"
  | "contact.form.messagePlaceholder"
  | "contact.form.send"
  | "contact.form.sending"
  | "contact.form.sent"
  | "contact.form.success"
  | "contact.form.error"
  | "contact.direct"
  | "contact.networks"
  | "footer.availability";

type Dict = Record<TranslationKey, string>;

export const translations: Record<Language, Dict> = {
  pt: {
    "nav.why": "Porquê eu?",
    "nav.about": "Sobre",
    "nav.portfolio": "Portfólio",
    "nav.education": "Formação",
    "nav.certs": "Certificações",
    "nav.contact": "Contato",
    "nav.available": "Disponível para estágio",

    "hero.badgeErasmus": "Erasmus+ 2026",
    "hero.badgeEnglish": "Inglês C1",
    "hero.hello": "Olá, eu sou",
    "hero.role": "Programador Júnior",
    "hero.pitch": "À procura de estágio ou primeira oportunidade em desenvolvimento web e cibersegurança.",
    "hero.ctaContact": "Fala comigo",
    "hero.ctaCv": "Ver CV em PDF",
    "hero.scrollLabel": "O que me destaca",

    "why.title": "Porquê eu?",
    "why.subtitle": "Diferenciais que posso trazer à sua equipa.",
    "why.item1.title": "Selecionado Erasmus+",
    "why.item1.desc":
      "Estágio de 300h na Croácia em 2026. Desempenho técnico e capacidade de adaptação reconhecidos pela escola.",
    "why.item2.title": "Inglês C1",
    "why.item2.desc": "Fluente em inglês. Preparado para equipas internacionais e documentação em inglês.",
    "why.item3.title": "Projetos com impacto",
    "why.item3.desc": "Chatbot com segurança (IP, autenticação), APIs e bases de dados. Não só teoria — código real.",
    "why.item4.title": "Comunicação e iniciativa",
    "why.item4.desc":
      "Formador voluntário de IA para encarregados de educação. Facilidade em trabalhar em equipa.",

    "about.title": "Sobre mim",
    "about.p1":
      "Finalista em Gestão e Programação de Sistemas Informáticos, com foco em desenvolvimento web e cibersegurança. Fui selecionado para estágio Erasmus+ na Croácia pelo desempenho técnico.",
    "about.p2":
      "Destaco-me por criar projetos práticos (PHP, SQL, APIs) e por trabalhar bem em equipa. Procuro a minha primeira oportunidade profissional para aprender e contribuir desde o primeiro dia.",
    "about.skillsTitle": "Principais habilidades",
    "about.langTitle": "Idiomas",
    "about.langPt": "Português — Nativo",
    "about.langEn": "Inglês — C1 (Fluente)",

    "education.title": "Formação e mobilidade",
    "education.subtitle": "Percurso académico e experiência internacional.",
    "education.item1.title": "Mobilidade Internacional (Erasmus+)",
    "education.item1.location": "Split, Croácia",
    "education.item1.period": "Fev 2026 – Abr 2026 (Estágio Agendado)",
    "education.item1.desc":
      "Selecionado para estágio profissional de 300 horas em contexto europeu. Foco em adaptação cultural e prática de Inglês em ambiente técnico.",
    "education.item2.title": "Curso Técnico de Gestão e Programação de Sistemas Informáticos",
    "education.item2.location": "Escola Secundária Damião de Goes",
    "education.item2.period": "2022 – Presente (12.º Ano)",
    "education.item2.desc": "Média atual boa com foco em programação, redes e base de dados.",

    "experience.title": "Experiência e projetos práticos",
    "experience.subtitle": "Voluntariado e trabalho de desenvolvimento.",
    "experience.item1.title": "Formador de Tecnologia e IA",
    "experience.item1.context": "Voluntariado Escolar",
    "experience.item1.period": "2025",
    "experience.item1.desc":
      "Ministrou sessões de formação sobre Inteligência Artificial para encarregados de educação. Desenvolvimento de capacidades de comunicação e liderança.",
    "experience.item2.title": "Projetos de Desenvolvimento de Software",
    "experience.item2.context": "Portefólio",
    "experience.item2.period": "2023 – Presente",
    "experience.item2.desc":
      "Chatbot Inteligente e outros projetos com PHP, SQL, integração de APIs e gestão de bases de dados. Foco em segurança (controlo por IP, autenticação) e experiência de utilizador.",

    "projects.title": "Portfólio",
    "projects.intro":
      "Aqui estão exemplos de sites que desenvolvi para negócios locais — rápidos, claros e pensados para telemóvel.",
    "projects.item1.title": "Sabor da Vila — Restaurante local",
    "projects.item1.desc":
      "Landing page completa para um restaurante: história da casa, destaques do menu, prova social e contacto com mapa. Pensada para converter visitas em reservas e pedidos de orçamento.",
    "projects.item1.badge": "Projeto de demonstração",
    "projects.item1.f1": "Layout responsivo, com foco em quem pesquisa no telemóvel",
    "projects.item1.f2": "Secções tipo menu e benefícios com hierarquia visual clara",
    "projects.item1.f3": "Formulário de pedido de orçamento e dados de contacto visíveis",
    "projects.item1.f4": "HTML semântico e boas práticas de acessibilidade (rótulos, foco)",
    "projects.item1.f5": "Site estático leve, rápido a carregar e fácil de alojar",
    "projects.item2.title": "Studio Elegance — Salão de beleza",
    "projects.item2.desc":
      "Presença online elegante para um salão: serviços em destaque, galeria, depoimentos de estilo e formulário para pedir orçamento — a imagem de marca forte desde o primeiro ecrã.",
    "projects.item2.badge": "Conceito para negócio local",
    "projects.item2.f1": "Interface moderna, tipografia e cores alinhadas com marca premium",
    "projects.item2.f2": "Cards de serviços, galeria e blocos de prova social",
    "projects.item2.f3": "Formulário de contacto e fluxo para pedido de orçamento",
    "projects.item2.f4": "Navegação simples, skip link e cuidado com acessibilidade",
    "projects.item2.f5": "Stack front-end clássica (HTML, CSS, JS) pronta para GitHub Pages",
    "projects.stack": "Stack tecnológica",
    "projects.features": "Destaques",
    "projects.noImage": "Projeto",
    "projects.github": "GitHub",
    "projects.live": "Live Demo",
    "projects.visit": "Ver site ao vivo",
    "projects.featured": "Destaque",
    "projects.previewUnavailable": "Preview indisponivel",

    "certs.title": "Certificações",
    "certs.subtitle": "Formações complementares e idiomas.",

    "testimonial.title": "O que dizem sobre mim",
    "testimonial.quote":
      "O Santiago destaca-se pelo empenho técnico e pela capacidade de trabalhar em equipa. Recomendo-o para ambientes que valorizem iniciativa e aprendizagem contínua.",
    "testimonial.author": "— Professor / Coordenador (substituir quando tiveres)",

    "contact.title": "Vamos trabalhar juntos?",
    "contact.subtitle":
      "Estou disponível para estágio ou primeira oportunidade júnior. Envie uma mensagem ou use o telefone e email abaixo.",
    "contact.form.name": "Nome",
    "contact.form.email": "E-mail",
    "contact.form.message": "Mensagem",
    "contact.form.namePlaceholder": "O teu nome",
    "contact.form.emailPlaceholder": "teu@email.com",
    "contact.form.messagePlaceholder": "Escreve a tua mensagem...",
    "contact.form.send": "Enviar mensagem",
    "contact.form.sending": "Enviando...",
    "contact.form.sent": "Enviado!",
    "contact.form.success": "Mensagem enviada. Em breve retorno!",
    "contact.form.error": "Erro ao enviar. Tente de novo.",
    "contact.direct": "Contacte-me diretamente:",
    "contact.networks": "Redes (atualiza quando tiveres):",

    "footer.availability": "Disponível para estágio e primeira oportunidade júnior.",
  },
  en: {
    "nav.why": "Why me?",
    "nav.about": "About",
    "nav.portfolio": "Portfolio",
    "nav.education": "Education",
    "nav.certs": "Certifications",
    "nav.contact": "Contact",
    "nav.available": "Open to internship",

    "hero.badgeErasmus": "Erasmus+ 2026",
    "hero.badgeEnglish": "English C1",
    "hero.hello": "Hi, I’m",
    "hero.role": "Junior Developer",
    "hero.pitch": "Looking for an internship or my first role in web development and cybersecurity.",
    "hero.ctaContact": "Contact me",
    "hero.ctaCv": "View CV (PDF)",
    "hero.scrollLabel": "What sets me apart",

    "why.title": "Why me?",
    "why.subtitle": "What I can bring to your team.",
    "why.item1.title": "Selected for Erasmus+",
    "why.item1.desc":
      "300-hour internship in Croatia in 2026. Strong technical performance and adaptability recognized by my school.",
    "why.item2.title": "English C1",
    "why.item2.desc": "Fluent in English. Ready for international teams and English documentation.",
    "why.item3.title": "Real projects",
    "why.item3.desc": "Chatbot with security (IP checks, authentication), APIs, and databases. Not just theory—real code.",
    "why.item4.title": "Communication & initiative",
    "why.item4.desc":
      "Volunteer AI instructor for parents/guardians. Comfortable working in teams and explaining clearly.",

    "about.title": "About me",
    "about.p1":
      "Final-year student in Information Systems Management & Programming, focused on web development and cybersecurity. Selected for an Erasmus+ internship in Croatia due to strong technical performance.",
    "about.p2":
      "I build practical projects (PHP, SQL, APIs) and work well in teams. I’m looking for my first professional opportunity to learn fast and contribute from day one.",
    "about.skillsTitle": "Key skills",
    "about.langTitle": "Languages",
    "about.langPt": "Portuguese — Native",
    "about.langEn": "English — C1 (Fluent)",

    "education.title": "Education & mobility",
    "education.subtitle": "Academic background and international experience.",
    "education.item1.title": "International Mobility (Erasmus+)",
    "education.item1.location": "Split, Croatia",
    "education.item1.period": "Feb 2026 – Apr 2026 (Scheduled internship)",
    "education.item1.desc":
      "Selected for a 300-hour professional internship in a European context. Focus on cultural adaptation and technical English practice.",
    "education.item2.title": "Technical Course in Information Systems Management & Programming",
    "education.item2.location": "Escola Secundária Damião de Goes",
    "education.item2.period": "2022 – Present (12th grade)",
    "education.item2.desc": "Strong current average with focus on programming, networks, and databases.",

    "experience.title": "Experience & hands-on projects",
    "experience.subtitle": "Volunteering and development work.",
    "experience.item1.title": "Technology & AI Instructor",
    "experience.item1.context": "School volunteering",
    "experience.item1.period": "2025",
    "experience.item1.desc":
      "Delivered AI training sessions for parents/guardians. Strengthened communication and leadership skills.",
    "experience.item2.title": "Software Development Projects",
    "experience.item2.context": "Portfolio",
    "experience.item2.period": "2023 – Present",
    "experience.item2.desc":
      "Chatbot Intelligent and other projects using PHP, SQL, API integrations, and database management. Focus on security (IP control, authentication) and user experience.",

    "projects.title": "Portfolio",
    "projects.intro":
      "Here are some example websites I built for local businesses — fast, clear, and mobile-first.",
    "projects.item1.title": "Sabor da Vila — Local restaurant website",
    "projects.item1.desc":
      "A full landing page for a restaurant: brand story, menu highlights, social proof, and contact with map. Built to turn visits into reservations and quote requests.",
    "projects.item1.badge": "Demo project",
    "projects.item1.f1": "Responsive layout for guests searching on their phones",
    "projects.item1.f2": "Menu-style sections and benefit blocks with clear hierarchy",
    "projects.item1.f3": "Quote request form and prominent contact details",
    "projects.item1.f4": "Semantic HTML and accessibility basics (labels, focus, structure)",
    "projects.item1.f5": "Light static site for fast loads and simple hosting",
    "projects.item2.title": "Studio Elegance — Beauty salon website",
    "projects.item2.desc":
      "An elegant online presence for a salon: featured services, gallery, testimonial-style proof, and a budget request form — strong brand feel from the first screen.",
    "projects.item2.badge": "Concept for a local business",
    "projects.item2.f1": "Polished UI with typography and color suited to a premium local brand",
    "projects.item2.f2": "Service cards, gallery, and social-proof sections",
    "projects.item2.f3": "Contact form and streamlined quote request flow",
    "projects.item2.f4": "Simple navigation, skip link, and accessibility-minded markup",
    "projects.item2.f5": "Classic HTML, CSS, and JavaScript — easy to deploy statically",
    "projects.stack": "Tech stack",
    "projects.features": "Key features",
    "projects.noImage": "Project",
    "projects.github": "GitHub",
    "projects.live": "Live Demo",
    "projects.visit": "View live site",
    "projects.featured": "Featured",
    "projects.previewUnavailable": "Preview unavailable",

    "certs.title": "Certifications",
    "certs.subtitle": "Extra training and language level.",

    "testimonial.title": "What people say",
    "testimonial.quote":
      "Santiago stands out for his technical drive and teamwork. I recommend him for environments that value initiative and continuous learning.",
    "testimonial.author": "— Teacher / Coordinator (replace when you have one)",

    "contact.title": "Let’s work together",
    "contact.subtitle":
      "I’m open to an internship or a junior role. Send a message or reach me by phone/email below.",
    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.message": "Message",
    "contact.form.namePlaceholder": "Your name",
    "contact.form.emailPlaceholder": "your@email.com",
    "contact.form.messagePlaceholder": "Write your message...",
    "contact.form.send": "Send message",
    "contact.form.sending": "Sending...",
    "contact.form.sent": "Sent!",
    "contact.form.success": "Message sent. I’ll get back to you soon!",
    "contact.form.error": "Couldn’t send. Please try again.",
    "contact.direct": "Reach me directly:",
    "contact.networks": "Links (update when ready):",

    "footer.availability": "Open to an internship and my first junior role.",
  },
};

export function isLanguage(value: string): value is Language {
  return value === "pt" || value === "en";
}

export function t(lang: Language, key: TranslationKey): string {
  return translations[lang][key] ?? translations.pt[key] ?? key;
}

