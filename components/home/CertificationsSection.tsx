"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function CertificationsSection() {
  const { t, lang } = useLanguage();

  const certifications =
    lang === "en"
      ? [
          { name: "English — C1", detail: "Certified / Fluent", icon: "🌐" },
          { name: "Python Basics", detail: "Online course", icon: "🐍" },
          { name: "Cybersecurity basics", detail: "Fundamentals", icon: "🛡️" },
        ]
      : [
          { name: "Inglês – Nível C1", detail: "Certificado / Fluente", icon: "🌐" },
          { name: "Curso Básico de Python", detail: "Formação online", icon: "🐍" },
          { name: "Curso básico de cibersegurança", detail: "Fundamentos", icon: "🛡️" },
        ];

  return (
    <section id="certificacoes" className="section-shell bg-primary">
      <div className="mx-auto max-w-6xl">
        <SectionHeader title={t("certs.title")} subtitle={t("certs.subtitle")} />

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <li
              key={cert.name}
              className="pill-hover flex items-start gap-4 rounded-2xl border border-border bg-surface p-5"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-primary text-xl" aria-hidden>
                {cert.icon}
              </span>
              <div>
                <span className="font-heading font-semibold text-primary">{cert.name}</span>
                {cert.detail && (
                  <p className="mt-1 font-body text-sm text-text-muted">{cert.detail}</p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
