"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";

export function CertificationsSection() {
  const { t, lang } = useLanguage();

  const certifications =
    lang === "en"
      ? [
          { name: "English — C1", detail: "Certified / Fluent" },
          { name: "Python Basics", detail: null },
          { name: "Cybersecurity basics", detail: null },
        ]
      : [
          { name: "Inglês – Nível C1", detail: "Certificado / Fluente" },
          { name: "Curso Básico de Python", detail: null },
          { name: "Curso básico de cibersegurança", detail: null },
        ];

  return (
    <section id="certificacoes" className="scroll-mt-20 border-t border-border px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-heading text-2xl font-bold text-primary sm:text-3xl">{t("certs.title")}</h2>
        <p className="mt-2 font-body text-text-muted">{t("certs.subtitle")}</p>

        <ul className="mt-10 flex flex-wrap gap-4">
          {certifications.map((cert) => (
            <li key={cert.name} className="pill-hover cursor-default rounded-xl border border-border bg-surface px-5 py-4">
              <span className="font-heading font-semibold text-primary">{cert.name}</span>
              {cert.detail && (
                <span className="ml-2 font-body text-sm text-text-muted">— {cert.detail}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
