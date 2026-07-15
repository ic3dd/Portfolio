"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { SectionHeader } from "@/components/ui/SectionHeader";

function GlobeIcon() {
  return (
    <svg className="h-7 w-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  );
}

function LanguageIcon() {
  return (
    <svg className="h-7 w-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21M6.75 9h4.5M3 21h18M6 9l1.5-3h9L18 9" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg className="h-7 w-7 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
    </svg>
  );
}

function TeamIcon() {
  return (
    <svg className="h-7 w-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 2.198a5.001 5.001 0 00-9.41 0m9.41 0a5 5 0 00-9.41 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zM7.5 10.5a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
    </svg>
  );
}

export function WhyMeSection() {
  const { t } = useLanguage();

  const highlights = [
    { title: t("why.item1.title"), description: t("why.item1.desc"), icon: <GlobeIcon />, featured: false },
    { title: t("why.item2.title"), description: t("why.item2.desc"), icon: <LanguageIcon />, featured: false },
    { title: t("why.item3.title"), description: t("why.item3.desc"), icon: <CodeIcon />, featured: true },
    { title: t("why.item4.title"), description: t("why.item4.desc"), icon: <TeamIcon />, featured: false },
  ];

  return (
    <section id="porque-eu" className="section-shell bg-surface">
      <div className="mx-auto max-w-6xl">
        <SectionHeader title={t("why.title")} subtitle={t("why.subtitle")} align="center" />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <div
              key={item.title}
              className={`card-hover flex h-full flex-col rounded-2xl border bg-primary p-5 text-center ${
                item.featured
                  ? "border-emerald-500/40 ring-1 ring-emerald-500/15"
                  : "border-border"
              }`}
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-surface">
                {item.icon}
              </div>
              <h3 className="mt-4 font-heading font-semibold text-primary">{item.title}</h3>
              <p className="mt-2 flex-1 font-body text-sm leading-relaxed text-text-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
