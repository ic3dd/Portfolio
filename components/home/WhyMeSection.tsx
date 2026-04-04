"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";

export function WhyMeSection() {
  const { t } = useLanguage();

  const highlights = [
    { title: t("why.item1.title"), description: t("why.item1.desc"), icon: "🌍" },
    { title: t("why.item2.title"), description: t("why.item2.desc"), icon: "🇬🇧" },
    { title: t("why.item3.title"), description: t("why.item3.desc"), icon: "💻" },
    { title: t("why.item4.title"), description: t("why.item4.desc"), icon: "🤝" },
  ];

  return (
    <section id="porque-eu" className="scroll-mt-20 border-t border-border bg-surface px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center font-heading text-2xl font-bold text-primary sm:text-3xl">{t("why.title")}</h2>
        <p className="mt-2 text-center font-body text-text-muted">{t("why.subtitle")}</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="card-hover rounded-xl border border-border bg-primary p-5 text-center"
            >
              <span className="text-2xl" aria-hidden>
                {item.icon}
              </span>
              <h3 className="mt-3 font-heading font-semibold text-primary">{item.title}</h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-text-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
