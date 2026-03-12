"use client";

import { motion } from "framer-motion";
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
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="font-heading text-2xl font-bold text-primary sm:text-3xl"
        >
          {t("about.title")}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mt-6 max-w-3xl font-body text-base leading-relaxed text-text-muted"
        >
          <p className="text-primary font-medium">{t("about.p1")}</p>
          <p className="mt-4">{t("about.p2")}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-10"
        >
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-text-muted">
            {t("about.skillsTitle")}
          </h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {skills.map((skill, i) => (
              <motion.li
                key={skill}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: 0.05 * i }}
                whileHover={{ scale: 1.08 }}
                className="pill-hover cursor-default rounded-full border border-border bg-primary px-4 py-2 font-body text-sm text-primary"
              >
                {skill}
              </motion.li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="mt-10"
        >
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-text-muted">
            {t("about.langTitle")}
          </h3>
          <ul className="mt-3 flex flex-wrap gap-3 font-body text-sm text-text-muted">
            <li>{t("about.langPt")}</li>
            <li>{t("about.langEn")}</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
