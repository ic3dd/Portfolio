"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function ContactSection() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    // TODO: integrar com API (ex: /api/contato ou Supabase)
    await new Promise((r) => setTimeout(r, 800));
    setStatus("success");
  }

  return (
    <section id="contato" className="scroll-mt-20 border-t border-border bg-surface px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="font-heading text-2xl font-bold text-primary sm:text-3xl"
        >
          {t("contact.title")}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="mt-2 font-body text-text-muted"
        >
          {t("contact.subtitle")}
        </motion.p>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block font-body text-sm font-medium text-primary">
                  {t("contact.form.name")}
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="mt-1 block w-full rounded-xl border-2 border-border bg-primary px-3 py-2.5 font-body text-primary placeholder-text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                  placeholder={t("contact.form.namePlaceholder")}
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-body text-sm font-medium text-primary">
                  {t("contact.form.email")}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-1 block w-full rounded-xl border-2 border-border bg-primary px-3 py-2.5 font-body text-primary placeholder-text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                  placeholder={t("contact.form.emailPlaceholder")}
                />
              </div>
              <div>
                <label htmlFor="message" className="block font-body text-sm font-medium text-primary">
                  {t("contact.form.message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="mt-1 block w-full rounded-xl border-2 border-border bg-primary px-3 py-2.5 font-body text-primary placeholder-text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                  placeholder={t("contact.form.messagePlaceholder")}
                />
              </div>
              <motion.button
                type="submit"
                disabled={status === "sending"}
                whileHover={{ scale: status === "sending" ? 1 : 1.02 }}
                whileTap={{ scale: status === "sending" ? 1 : 0.98 }}
                className="w-full rounded-xl bg-accent px-4 py-3 font-heading text-sm font-semibold text-white shadow-md transition-colors hover:bg-accent-hover hover:shadow-lg disabled:opacity-70 sm:w-auto"
              >
                {status === "sending"
                  ? t("contact.form.sending")
                  : status === "success"
                    ? t("contact.form.sent")
                    : t("contact.form.send")}
              </motion.button>
              {status === "success" && (
                <p className="text-sm text-green-600 dark:text-green-400">{t("contact.form.success")}</p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-600 dark:text-red-400">{t("contact.form.error")}</p>
              )}
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="flex flex-col gap-4"
          >
            <p className="font-body text-text-muted">{t("contact.direct")}</p>
            <a
              href="tel:+351910183513"
              className="link-underline-hover inline-flex items-center gap-2 font-medium text-accent"
            >
              <span className="text-lg">📞</span> 910 183 513
            </a>
            <a
              href="mailto:santiagoesteves35@gmail.com"
              className="link-underline-hover inline-flex items-center gap-2 font-medium text-accent"
            >
              <span className="text-lg">✉️</span> santiagoesteves35@gmail.com
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
