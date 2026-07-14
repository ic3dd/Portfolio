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
    "hero.badgeTgpsi": "TGPSI concluído · Média 18",
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
    "why.item3.title": "PAP com 20 valores",
    "why.item3.desc":
      "Projeto de Aptidão Profissional (GoBar): sistema de reservas escolares com backend, base de dados e interface completa — avaliado com a nota máxima.",
    "why.item4.title": "Comunicação e iniciativa",
    "why.item4.desc":
      "Formador voluntário de IA para encarregados de educação. Facilidade em trabalhar em equipa.",

    "about.title": "Sobre mim",
    "about.p1":
      "Técnico de Gestão e Programação de Sistemas Informáticos (TGPSI), concluído em julho de 2026 com média final de 18 valores. Foco em desenvolvimento web e cibersegurança. Selecionado para estágio Erasmus+ na Croácia pelo desempenho técnico.",
    "about.p2":
      "Na PAP desenvolvi o GoBar — sistema de reservas escolares em destaque neste portfólio — com avaliação de 20 valores. Procuro a minha primeira oportunidade profissional para aprender e contribuir desde o primeiro dia.",
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
    "education.item2.period": "2022 – Jul 2026 (Concluído)",
    "education.item2.desc":
      "Curso concluído com média final de 18 valores. Especialização em programação, redes, bases de dados e desenvolvimento de software.",

    "experience.title": "Experiência e projetos práticos",
    "experience.subtitle": "Voluntariado e trabalho de desenvolvimento.",
    "experience.item1.title": "Formador de Tecnologia e IA",
    "experience.item1.context": "Voluntariado Escolar",
    "experience.item1.period": "2025",
    "experience.item1.desc":
      "Ministrou sessões de formação sobre Inteligência Artificial para encarregados de educação. Desenvolvimento de capacidades de comunicação e liderança.",
    "experience.item2.title": "PAP — GoBar",
    "experience.item2.context": "Projeto de Aptidão Profissional · 20 valores",
    "experience.item2.period": "2025 – 2026",
    "experience.item2.desc":
      "Desenvolvimento completo do GoBar, plataforma de reservas escolares: backend em PHP, base de dados SQL, gestão de utilizadores e interface web responsiva. Projeto apresentado e avaliado com a nota máxima.",

    "projects.title": "Portfólio",
    "projects.intro":
      "Os projetos principais são aplicações web completas com backend e dados. Os exemplos seguintes são landing pages estáticas — o tipo de presença online rápida que também posso criar para negócios locais.",
    "projects.mainHeading": "Projetos principais",
    "projects.demoHeading": "Exemplos de landing pages",
    "projects.mainBadge": "Projeto principal",
    "projects.papBadge": "PAP · 20 valores",
    "projects.main1.title": "GoBar — Plataforma escolar",
    "projects.main1.desc":
      "GoBar — plataforma de reservas escolares e o meu Projeto de Aptidão Profissional, avaliado com 20 valores. Backend, base de dados e interface completa, não só páginas estáticas.",
    "projects.main1.f1": "Gestão de reservas com lógica de negócio no servidor (PHP + SQL)",
    "projects.main1.f2": "Perfis e permissões adaptados ao contexto escolar",
    "projects.main1.f3": "Interface responsiva pensada para alunos e staff no dia a dia",
    "projects.main1.f4": "Aplicação web real, desenvolvida e defendida como PAP",
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
    "contact.form.errorConfig":
      "O envio pelo formulário não está configurado neste servidor. Usa o email ou o telefone ao lado.",
    "contact.form.errorSend": "O serviço de email falhou. Tenta mais tarde ou contacta-me diretamente.",
    "contact.direct": "Contacte-me diretamente:",
    "contact.networks": "Redes (atualiza quando tiveres):",

    "footer.availability": "TGPSI concluído (média 18). Disponível para estágio e primeira oportunidade júnior.",
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
    "hero.badgeTgpsi": "TGPSI completed · Grade 18",
    "hero.hello": "Hi, I'm",
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
    "why.item3.title": "Final project — top grade",
    "why.item3.desc":
      "Professional Aptitude Project (GoBar): school reservation system with backend, database, and full interface — graded 20/20.",
    "why.item4.title": "Communication & initiative",
    "why.item4.desc":
      "Volunteer AI instructor for parents/guardians. Comfortable working in teams and explaining clearly.",

    "about.title": "About me",
    "about.p1":
      "Information Systems Management & Programming (TGPSI) graduate, completed in July 2026 with a final average of 18/20. Focus on web development and cybersecurity. Selected for an Erasmus+ internship in Croatia due to strong technical performance.",
    "about.p2":
      "For my final project I built GoBar — the school reservation system featured in this portfolio — graded 20/20. I'm looking for my first professional opportunity to learn fast and contribute from day one.",
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
    "education.item2.period": "2022 – Jul 2026 (Completed)",
    "education.item2.desc":
      "Completed with a final average of 18/20. Specialization in programming, networks, databases, and software development.",

    "experience.title": "Experience & hands-on projects",
    "experience.subtitle": "Volunteering and development work.",
    "experience.item1.title": "Technology & AI Instructor",
    "experience.item1.context": "School volunteering",
    "experience.item1.period": "2025",
    "experience.item1.desc":
      "Delivered AI training sessions for parents/guardians. Strengthened communication and leadership skills.",
    "experience.item2.title": "Final Project — GoBar",
    "experience.item2.context": "Professional Aptitude Project · 20/20",
    "experience.item2.period": "2025 – 2026",
    "experience.item2.desc":
      "End-to-end development of GoBar, a school reservation platform: PHP backend, SQL database, user management, and responsive web interface. Presented and graded with the top mark.",

    "projects.title": "Portfolio",
    "projects.intro":
      "My main projects are full web applications with a backend and real data. The examples below are static landing pages — the kind of fast, clear local-business presence I can deliver too.",
    "projects.mainHeading": "Main projects",
    "projects.demoHeading": "Landing page examples",
    "projects.mainBadge": "Main project",
    "projects.papBadge": "Final project · 20/20",
    "projects.main1.title": "GoBar — School platform",
    "projects.main1.desc":
      "GoBar — school reservation platform and my Professional Aptitude Project, graded 20/20. Full backend, database, and interface, not just static pages.",
    "projects.main1.f1": "Reservation management with server-side business logic (PHP + SQL)",
    "projects.main1.f2": "Roles and permissions tailored to a school environment",
    "projects.main1.f3": "Responsive interface designed for students and staff day to day",
    "projects.main1.f4": "Real web application developed and defended as my final project",
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

    "footer.availability": "TGPSI completed (average 18). Open to an internship and my first junior role.",
  },
};

export function isLanguage(value: string): value is Language {
  return value === "pt" || value === "en";
}

export function t(lang: Language, key: TranslationKey): string {
  return translations[lang][key] ?? translations.pt[key] ?? key;
}

