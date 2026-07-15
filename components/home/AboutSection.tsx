"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { SectionHeader } from "@/components/ui/SectionHeader";

const skillsPT = [
  "PHP",
  "SQL",
  "JavaScript",
  "Inteligência Artificial",
  "Hardware",
  "C#",
  "HTML",
  "CSS",
  "MySQL",
  "Git",
  "Linux",
  "Redes",
  "Cibersegurança",
];

const skillsEN = [
  "PHP",
  "SQL",
  "JavaScript",
  "Artificial Intelligence",
  "Hardware",
  "C#",
  "HTML",
  "CSS",
  "MySQL",
  "Git",
  "Linux",
  "Networking",
  "Cybersecurity",
];

export function AboutSection() {
  const { t, lang } = useLanguage();
  const skills = lang === "en" ? skillsEN : skillsPT;

  return (
    <section id="sobre" className="section-shell bg-primary">
      <div className="mx-auto max-w-6xl">
        <SectionHeader title={t("about.title")} />

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="max-w-3xl font-body text-base leading-relaxed text-text-muted">
            <p className="font-medium text-primary">{t("about.p1")}</p>
            <p className="mt-4">{t("about.p2")}</p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-2xl border border-border bg-surface p-4">
              <p className="font-heading text-xs font-semibold uppercase tracking-wider text-text-muted">
                {t("about.langTitle")}
              </p>
              <ul className="mt-3 space-y-2 font-body text-sm text-primary">
                <li className="flex items-center gap-2">
                  <span className="text-base" aria-hidden>🇵🇹</span>
                  {t("about.langPt")}
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-base" aria-hidden>🇬🇧</span>
                  {t("about.langEn")}
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-accent/30 bg-accent/5 p-4">
              <p className="font-heading text-xs font-semibold uppercase tracking-wider text-accent">
                {t("about.focusTitle")}
              </p>
              <p className="mt-3 font-body text-sm font-medium leading-relaxed text-primary">
                {t("about.focusDesc")}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-text-muted">
            {t("about.skillsTitle")}
          </h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <li
                key={skill}
                className="pill-hover cursor-default rounded-full border border-border bg-surface px-4 py-2 font-body text-sm font-medium text-primary"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
