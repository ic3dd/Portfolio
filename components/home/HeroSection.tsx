"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
      {/* Fundo com gradiente suave e grid */}
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,var(--bg-primary)_0%,transparent_50%),linear-gradient(135deg,var(--accent)_0%,transparent_25%),linear-gradient(225deg,var(--accent)_0%,transparent_15%)] opacity-[0.07] dark:opacity-[0.12]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,0,0,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.03)_1px,transparent_1px)] bg-[size:48px_48px] dark:bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-4 flex flex-wrap items-center justify-center gap-2"
        >
          <span className="rounded-full bg-accent/15 px-3 py-1 font-body text-xs font-semibold text-accent dark:bg-accent/20">
            {t("hero.badgeErasmus")}
          </span>
          <span className="rounded-full bg-accent/15 px-3 py-1 font-body text-xs font-semibold text-accent dark:bg-accent/20">
            {t("hero.badgeEnglish")}
          </span>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-body text-lg font-medium text-accent"
        >
          {t("hero.hello")}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="font-heading mt-2 text-4xl font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl"
        >
          Santiago Esteves
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-4 font-body text-xl text-text-muted sm:text-2xl"
        >
          {t("hero.role")}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.22 }}
          className="mt-3 max-w-xl mx-auto font-body text-base text-text-muted"
        >
          {t("hero.pitch")}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="#contato"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3 font-heading text-sm font-semibold text-white no-underline shadow-lg transition-colors hover:bg-accent-hover hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary"
            >
              {t("hero.ctaContact")}
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-border bg-primary px-6 py-3 font-heading text-sm font-semibold text-primary no-underline transition-colors hover:border-accent hover:bg-surface hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary"
            >
              {t("hero.ctaCv")}
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="mt-14 flex justify-center"
        >
          <a
            href="#porque-eu"
            className="flex flex-col items-center gap-2 text-text-muted no-underline transition-colors hover:text-accent"
            aria-label="Ver o que me destaca"
          >
            <span className="text-xs font-medium">{t("hero.scrollLabel")}</span>
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
