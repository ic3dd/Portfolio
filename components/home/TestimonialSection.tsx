"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function TestimonialSection() {
  const { t } = useLanguage();

  return (
    <section id="depoimento" className="scroll-mt-20 border-t border-border bg-surface px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="font-heading text-2xl font-bold text-primary sm:text-3xl"
        >
          {t("testimonial.title")}
        </motion.h2>
        <motion.blockquote
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="card-hover mt-8 rounded-xl border-l-4 border-l-accent border-border bg-primary p-6 sm:p-8"
        >
          <p className="font-body text-lg leading-relaxed text-text-muted italic">
            &ldquo;{t("testimonial.quote")}&rdquo;
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
}
