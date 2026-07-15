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
  | "hero.badgeTgpsi"
  | "hero.badgeAi"
  | "hero.hello"
  | "hero.role"
  | "hero.pitch"
  | "hero.ctaContact"
  | "hero.ctaCv"
  | "hero.scrollLabel"
  | "hero.stat1.value"
  | "hero.stat1.label"
  | "hero.stat2.value"
  | "hero.stat2.label"
  | "hero.stat3.value"
  | "hero.stat3.label"
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
  | "about.focusTitle"
  | "about.focusDesc"
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
  | "projects.mainHeading"
  | "projects.demoHeading"
  | "projects.mainBadge"
  | "projects.papBadge"
  | "projects.main1.title"
  | "projects.main1.desc"
  | "projects.main1.f1"
  | "projects.main1.f2"
  | "projects.main1.f3"
  | "projects.main1.f4"
  | "projects.main1.f5"
  | "projects.main2.title"
  | "projects.main2.desc"
  | "projects.main2.f1"
  | "projects.main2.f2"
  | "projects.main2.f3"
  | "projects.main2.f4"
  | "projects.main2.f5"
  | "projects.demo1.title"
  | "projects.demo1.desc"
  | "projects.demo1.badge"
  | "projects.demo2.title"
  | "projects.demo2.desc"
  | "projects.demo2.badge"
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
  | "contact.form.errorConfig"
  | "contact.form.errorSend"
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
    "hero.badgeTgpsi": "TGPSI concluído",
    "hero.badgeAi": "Foco em IA",
    "hero.hello": "Olá, eu sou",
    "hero.role": "Programador Júnior",
    "hero.pitch":
      "Perfil técnico em informática — hardware, redes e software. Mais direcionado para desenvolvimento e Inteligência Artificial, onde quero ganhar experiência.",
    "hero.ctaContact": "Fala comigo",
    "hero.ctaCv": "Ver CV em PDF",
    "hero.scrollLabel": "O que me destaca",
    "hero.stat1.value": "18",
    "hero.stat1.label": "Média TGPSI",
    "hero.stat2.value": "IA",
    "hero.stat2.label": "Área favorita",
    "hero.stat3.value": "C1",
    "hero.stat3.label": "Inglês",

    "why.title": "Porquê eu?",
    "why.subtitle": "Diferenciais que posso trazer à sua equipa.",
    "why.item1.title": "Selecionado Erasmus+",
    "why.item1.desc":
      "Estágio de 300h na Croácia em 2026. Desempenho técnico e capacidade de adaptação reconhecidos pela escola.",
    "why.item2.title": "Inglês C1",
    "why.item2.desc": "Fluente em inglês. Preparado para equipas internacionais e documentação em inglês.",
    "why.item3.title": "Inteligência Artificial",
    "why.item3.desc":
      "A minha área favorita. Parte do meu estágio e formação passou por IA — quero continuar a aprender e ganhar experiência prática nesta área.",
    "why.item4.title": "Informática a 360º",
    "why.item4.desc":
      "Bases sólidas em hardware, redes e sistemas. Perfil versátil, com maior orientação para software e soluções com IA.",

    "about.title": "Sobre mim",
    "about.p1":
      "Técnico de Gestão e Programação de Sistemas Informáticos (TGPSI), concluído em julho de 2026. Tenho boa base em informática de forma geral — hardware, redes, sistemas e programação.",
    "about.p2":
      "Sou mais direcionado para software e Inteligência Artificial, que é a área onde quero crescer profissionalmente. Procuro estágio ou primeira oportunidade para desenvolver projetos reais e aprender com uma equipa.",
    "about.focusTitle": "Foco atual",
    "about.focusDesc": "Software · IA · Projetos web",
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
      "Estágio profissional de 300 horas em contexto europeu, com forte componente técnica e exposição a ambientes de inovação, incluindo trabalho ligado a tecnologia e IA.",
    "education.item2.title": "Curso Técnico de Gestão e Programação de Sistemas Informáticos",
    "education.item2.location": "Escola Secundária Damião de Goes",
    "education.item2.period": "2022 – Jul 2026 (Concluído)",
    "education.item2.desc":
      "Curso concluído com média final de 18 valores. Especialização em programação, redes, bases de dados e desenvolvimento de software.",

    "experience.title": "Experiência e projetos práticos",
    "experience.subtitle": "Estágio, voluntariado e desenvolvimento.",
    "experience.item1.title": "Estágio e formação em IA",
    "experience.item1.context": "Voluntariado escolar · Tecnologia",
    "experience.item1.period": "2025",
    "experience.item1.desc":
      "Experiência prática centrada em Inteligência Artificial: formação para encarregados de educação, explicação de conceitos e ferramentas. Foi uma das experiências que reforçou o meu interesse em IA.",
    "experience.item2.title": "Projetos de Desenvolvimento de Software",
    "experience.item2.context": "GoBar · AulaBot · Portfólio",
    "experience.item2.period": "2023 – Presente",
    "experience.item2.desc":
      "Desenvolvimento de aplicações web com PHP, SQL, APIs e bases de dados — incluindo o GoBar e o AulaBot — com foco em funcionalidade, segurança e experiência de utilizador.",

    "projects.title": "Portfólio",
    "projects.intro":
      "Os projetos principais são aplicações web completas com backend e dados. Os exemplos seguintes são landing pages estáticas — o tipo de presença online rápida que também posso criar para negócios locais.",
    "projects.mainHeading": "Projetos principais",
    "projects.demoHeading": "Exemplos de landing pages",
    "projects.mainBadge": "Projeto principal",
    "projects.papBadge": "PAP · 20 valores",
    "projects.main1.title": "GoBar — Plataforma escolar",
    "projects.main1.desc":
      "Plataforma digital de reservas escolares: backend, base de dados e interface completa — aplicação web real, não só páginas estáticas.",
    "projects.main1.f1": "Gestão de reservas com lógica de negócio no servidor (PHP + SQL)",
    "projects.main1.f2": "Perfis e permissões adaptados ao contexto escolar",
    "projects.main1.f3": "Interface responsiva pensada para alunos e staff no dia a dia",
    "projects.main1.f4": "Aplicação web completa, pronta para evoluir com novas funcionalidades",
    "projects.main1.f5": "Demonstra trabalho full stack além de HTML/CSS isolado",
    "projects.main2.title": "AulaBot — Assistente de estudo",
    "projects.main2.desc":
      "Plataforma com backend, APIs e camadas de segurança (controlo de acesso), pensada para apoiar estudo e interação — arquitetura de produto, não só conteúdo estático.",
    "projects.main2.f1": "Integração com APIs e serviços externos",
    "projects.main2.f2": "Segurança aplicada (autenticação, restrições de acesso)",
    "projects.main2.f3": "Persistência e gestão de dados no servidor",
    "projects.main2.f4": "Experiência web orientada a alunos e fluxos educativos",
    "projects.main2.f5": "Funcionalidades dinâmicas e estado gerido no backend",
    "projects.demo1.title": "Sabor da Vila",
    "projects.demo1.desc": "Demo de landing para restaurante (só front-end).",
    "projects.demo1.badge": "Exemplo",
    "projects.demo2.title": "Studio Elegance",
    "projects.demo2.desc": "Demo de landing para salão (só front-end).",
    "projects.demo2.badge": "Exemplo",
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
      "Disponível para estágio ou primeira oportunidade em software e IA. Envie uma mensagem ou use o telefone e email abaixo.",
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
    "contact.form.errorConfig":
      "O envio pelo formulário não está configurado neste servidor. Usa o email ou o telefone ao lado.",
    "contact.form.errorSend": "O serviço de email falhou. Tenta mais tarde ou contacta-me diretamente.",
    "contact.direct": "Contacte-me diretamente:",
    "contact.networks": "Redes (atualiza quando tiveres):",

    "footer.availability": "Disponível para estágio e primeira oportunidade júnior em software e IA.",
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
    "hero.badgeTgpsi": "TGPSI completed",
    "hero.badgeAi": "AI focus",
    "hero.hello": "Hi, I'm",
    "hero.role": "Junior Developer",
    "hero.pitch":
      "IT background across hardware, networking, and software — with a stronger focus on development and Artificial Intelligence, where I want to grow.",
    "hero.ctaContact": "Contact me",
    "hero.ctaCv": "View CV (PDF)",
    "hero.scrollLabel": "What sets me apart",
    "hero.stat1.value": "18",
    "hero.stat1.label": "TGPSI average",
    "hero.stat2.value": "AI",
    "hero.stat2.label": "Favorite area",
    "hero.stat3.value": "C1",
    "hero.stat3.label": "English",

    "why.title": "Why me?",
    "why.subtitle": "What I can bring to your team.",
    "why.item1.title": "Selected for Erasmus+",
    "why.item1.desc":
      "300-hour internship in Croatia in 2026. Strong technical performance and adaptability recognized by my school.",
    "why.item2.title": "English C1",
    "why.item2.desc": "Fluent in English. Ready for international teams and English documentation.",
    "why.item3.title": "Artificial Intelligence",
    "why.item3.desc":
      "My favorite area. Part of my internship and training has been AI-focused — I want to keep learning and gaining hands-on experience.",
    "why.item4.title": "Well-rounded IT profile",
    "why.item4.desc":
      "Solid foundations in hardware, networking, and systems. Versatile profile, with a stronger orientation toward software and AI solutions.",

    "about.title": "About me",
    "about.p1":
      "Information Systems Management & Programming (TGPSI) graduate, completed in July 2026. Strong general IT foundation — hardware, networking, systems, and programming.",
    "about.p2":
      "I'm more oriented toward software and Artificial Intelligence, where I want to grow professionally. I'm looking for an internship or first role to build real projects and learn with a team.",
    "about.focusTitle": "Current focus",
    "about.focusDesc": "Software · AI · Web projects",
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
      "300-hour professional internship in a European context, with strong technical exposure — including work linked to technology and AI.",
    "education.item2.title": "Technical Course in Information Systems Management & Programming",
    "education.item2.location": "Escola Secundária Damião de Goes",
    "education.item2.period": "2022 – Jul 2026 (Completed)",
    "education.item2.desc":
      "Completed with a final average of 18/20. Specialization in programming, networks, databases, and software development.",

    "experience.title": "Experience & hands-on projects",
    "experience.subtitle": "Internship, volunteering, and development.",
    "experience.item1.title": "Internship & AI training",
    "experience.item1.context": "School volunteering · Technology",
    "experience.item1.period": "2025",
    "experience.item1.desc":
      "Hands-on experience centered on Artificial Intelligence: training sessions for parents/guardians, explaining concepts and tools. One of the experiences that reinforced my interest in AI.",
    "experience.item2.title": "Software Development Projects",
    "experience.item2.context": "GoBar · AulaBot · Portfolio",
    "experience.item2.period": "2023 – Present",
    "experience.item2.desc":
      "Web applications with PHP, SQL, APIs, and databases — including GoBar and AulaBot — focused on functionality, security, and user experience.",

    "projects.title": "Portfolio",
    "projects.intro":
      "My main projects are full web applications with a backend and real data. The examples below are static landing pages — the kind of fast, clear local-business presence I can deliver too.",
    "projects.mainHeading": "Main projects",
    "projects.demoHeading": "Landing page examples",
    "projects.mainBadge": "Main project",
    "projects.papBadge": "Final project · 20/20",
    "projects.main1.title": "GoBar — School platform",
    "projects.main1.desc":
      "School reservation platform: backend, database, and full interface — a real web application, not just static pages.",
    "projects.main1.f1": "Reservation management with server-side business logic (PHP + SQL)",
    "projects.main1.f2": "Roles and permissions tailored to a school environment",
    "projects.main1.f3": "Responsive interface designed for students and staff day to day",
    "projects.main1.f4": "Complete web application ready to grow with new features",
    "projects.main1.f5": "Shows full-stack work beyond standalone HTML/CSS",
    "projects.main2.title": "AulaBot — Study assistant",
    "projects.main2.desc":
      "A platform with backend, APIs, and security layers (access control) built to support study workflows — product-style architecture, not static content only.",
    "projects.main2.f1": "Integration with external APIs and services",
    "projects.main2.f2": "Security-minded access control and authentication",
    "projects.main2.f3": "Server-side persistence and data management",
    "projects.main2.f4": "Web UX oriented to students and learning flows",
    "projects.main2.f5": "Dynamic behavior with state handled on the backend",
    "projects.demo1.title": "Sabor da Vila",
    "projects.demo1.desc": "Restaurant landing demo (front-end only).",
    "projects.demo1.badge": "Example",
    "projects.demo2.title": "Studio Elegance",
    "projects.demo2.desc": "Salon landing demo (front-end only).",
    "projects.demo2.badge": "Example",
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
    "contact.form.errorConfig":
      "Form delivery isn’t configured on this server. Please use the email or phone on the right.",
    "contact.form.errorSend": "The mail service failed. Try again later or contact me directly.",
    "contact.direct": "Reach me directly:",
    "contact.networks": "Links (update when ready):",

    "footer.availability": "Open to an internship and my first junior role in software and AI.",
  },
};

export function isLanguage(value: string): value is Language {
  return value === "pt" || value === "en";
}

export function t(lang: Language, key: TranslationKey): string {
  return translations[lang][key] ?? translations.pt[key] ?? key;
}

