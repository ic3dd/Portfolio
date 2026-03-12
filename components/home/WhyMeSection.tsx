"use client";

import { motion } from "framer-motion";
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
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="font-heading text-2xl font-bold text-primary sm:text-3xl text-center"
        >
          {t("why.title")}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="mt-2 text-center font-body text-text-muted"
        >
          {t("why.subtitle")}
        </motion.p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.08 * i }}
              className="card-hover rounded-xl border border-border bg-primary p-5 text-center"
            >
              <span className="text-2xl" aria-hidden>{item.icon}</span>
              <h3 className="mt-3 font-heading font-semibold text-primary">{item.title}</h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-text-muted">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
