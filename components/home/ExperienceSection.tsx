"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function ExperienceSection() {
  const { t } = useLanguage();

  const experience = [
    {
      title: t("experience.item1.title"),
      context: t("experience.item1.context"),
      period: t("experience.item1.period"),
      description: t("experience.item1.desc"),
      highlight: false,
    },
    {
      title: t("experience.item2.title"),
      context: t("experience.item2.context"),
      period: t("experience.item2.period"),
      description: t("experience.item2.desc"),
      highlight: true,
    },
  ];

  return (
    <section id="experiencia" className="section-shell bg-primary">
      <div className="mx-auto max-w-6xl">
        <SectionHeader title={t("experience.title")} subtitle={t("experience.subtitle")} />

        <ul className="mt-10 space-y-6">
          {experience.map((item) => (
            <li
              key={item.title}
              className={`card-hover rounded-2xl border p-5 sm:p-6 ${
                item.highlight
                  ? "border-emerald-500/30 bg-surface"
                  : "border-border bg-surface"
              }`}
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-heading font-semibold text-primary">{item.title}</h3>
                <span className="font-body text-sm text-text-muted">{item.period}</span>
              </div>
              <p
                className={`mt-1 font-body text-sm font-medium ${
                  item.highlight ? "text-emerald-700 dark:text-emerald-400" : "text-accent"
                }`}
              >
                {item.context}
              </p>
              <p className="mt-3 font-body text-sm leading-relaxed text-text-muted">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
