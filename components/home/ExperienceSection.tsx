"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function ExperienceSection() {
  const { t } = useLanguage();

  const experience = [
    {
      title: t("experience.item1.title"),
      context: t("experience.item1.context"),
      period: t("experience.item1.period"),
      description: t("experience.item1.desc"),
    },
    {
      title: t("experience.item2.title"),
      context: t("experience.item2.context"),
      period: t("experience.item2.period"),
      description: t("experience.item2.desc"),
    },
  ];

  return (
    <section id="experiencia" className="scroll-mt-20 border-t border-border bg-surface px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="font-heading text-2xl font-bold text-primary sm:text-3xl"
        >
          {t("experience.title")}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="mt-2 font-body text-text-muted"
        >
          {t("experience.subtitle")}
        </motion.p>

        <ul className="mt-10 space-y-8">
          {experience.map((item, i) => (
            <motion.li
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * i }}
              className="card-hover rounded-xl border border-border bg-primary p-5 sm:p-6"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-heading font-semibold text-primary">{item.title}</h3>
                <span className="font-body text-sm text-text-muted">{item.period}</span>
              </div>
              <p className="mt-1 font-body text-sm font-medium text-accent">{item.context}</p>
              <p className="mt-3 font-body text-sm leading-relaxed text-text-muted">{item.description}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
