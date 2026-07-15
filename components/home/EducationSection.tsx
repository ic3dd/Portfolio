"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function EducationSection() {
  const { t } = useLanguage();

  const education = [
    {
      title: t("education.item1.title"),
      location: t("education.item1.location"),
      period: t("education.item1.period"),
      description: t("education.item1.desc"),
    },
    {
      title: t("education.item2.title"),
      location: t("education.item2.location"),
      period: t("education.item2.period"),
      description: t("education.item2.desc"),
      highlight: true,
    },
  ];

  return (
    <section id="formacao" className="section-shell bg-surface">
      <div className="mx-auto max-w-6xl">
        <SectionHeader title={t("education.title")} subtitle={t("education.subtitle")} />

        <ul className="timeline-list mt-10 space-y-6">
          {education.map((item) => (
            <li key={item.title} className="relative pl-0 sm:pl-8">
              <span
                className="absolute left-0 top-7 hidden h-3 w-3 -translate-x-1/2 rounded-full border-2 border-accent bg-surface sm:block"
                aria-hidden
              />
              <div
                className={`card-hover rounded-2xl border p-5 sm:p-6 ${
                  item.highlight ? "border-accent/30 bg-primary" : "border-border bg-primary"
                }`}
              >
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="font-heading font-semibold text-primary">{item.title}</h3>
                  <span className="inline-flex w-fit rounded-full border border-border bg-surface px-3 py-1 font-body text-xs font-medium text-text-muted">
                    {item.period}
                  </span>
                </div>
                <p className="mt-1 font-body text-sm font-medium text-accent">{item.location}</p>
                <p className="mt-3 font-body text-sm leading-relaxed text-text-muted">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
