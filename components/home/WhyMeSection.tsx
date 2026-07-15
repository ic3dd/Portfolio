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

function AiIcon() {
  return (
    <svg className="h-7 w-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
    </svg>
  );
}

function HardwareIcon() {
  return (
    <svg className="h-7 w-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21M6 12h12a1.5 1.5 0 001.5-1.5V7.5A1.5 1.5 0 0018 6H6a1.5 1.5 0 00-1.5 1.5V10.5A1.5 1.5 0 006 12z" />
    </svg>
  );
}

export function WhyMeSection() {
  const { t } = useLanguage();

  const highlights = [
    { title: t("why.item1.title"), description: t("why.item1.desc"), icon: <GlobeIcon />, featured: false },
    { title: t("why.item2.title"), description: t("why.item2.desc"), icon: <LanguageIcon />, featured: false },
    { title: t("why.item3.title"), description: t("why.item3.desc"), icon: <AiIcon />, featured: true },
    { title: t("why.item4.title"), description: t("why.item4.desc"), icon: <HardwareIcon />, featured: false },
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
                  ? "border-accent/40 ring-1 ring-accent/15"
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
