"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";

const skillsPT = [
  "PHP",
  "SQL",
  "C#",
  "HTML",
  "CSS",
  "JavaScript",
  "MySQL",
  "Git",
  "Linux",
  "Cibersegurança",
  "Redes",
  "Trabalho em equipa",
];

const skillsEN = [
  "PHP",
  "SQL",
  "C#",
  "HTML",
  "CSS",
  "JavaScript",
  "MySQL",
  "Git",
  "Linux",
  "Cybersecurity",
  "Networking",
  "Teamwork",
];

export function AboutSection() {
  const { t, lang } = useLanguage();
  const skills = lang === "en" ? skillsEN : skillsPT;

  return (
    <section id="sobre" className="scroll-mt-20 border-t border-border bg-surface px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-heading text-2xl font-bold text-primary sm:text-3xl">{t("about.title")}</h2>
        <div className="mt-6 max-w-3xl font-body text-base leading-relaxed text-text-muted">
          <p className="font-medium text-primary">{t("about.p1")}</p>
          <p className="mt-4">{t("about.p2")}</p>
        </div>
        <div className="mt-10">
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-text-muted">
            {t("about.skillsTitle")}
          </h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <li
                key={skill}
                className="pill-hover cursor-default rounded-full border border-border bg-primary px-4 py-2 font-body text-sm text-primary"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-10">
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-text-muted">
            {t("about.langTitle")}
          </h3>
          <ul className="mt-3 flex flex-wrap gap-3 font-body text-sm text-text-muted">
            <li>{t("about.langPt")}</li>
            <li>{t("about.langEn")}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
