"use client";

import Link from "next/link";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,var(--bg-primary)_0%,transparent_50%),linear-gradient(135deg,var(--accent)_0%,transparent_25%),linear-gradient(225deg,var(--accent)_0%,transparent_15%)] opacity-[0.07] dark:opacity-[0.12]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,0,0,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.03)_1px,transparent_1px)] bg-[size:48px_48px] dark:bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl text-center">
        <div className="hero-anim mb-4 flex flex-wrap items-center justify-center gap-2">
          <span className="rounded-full bg-accent/15 px-3 py-1 font-body text-xs font-semibold text-accent dark:bg-accent/20">
            {t("hero.badgeTgpsi")}
          </span>
          <span className="rounded-full bg-accent/15 px-3 py-1 font-body text-xs font-semibold text-accent dark:bg-accent/20">
            {t("hero.badgeErasmus")}
          </span>
          <span className="rounded-full bg-accent/15 px-3 py-1 font-body text-xs font-semibold text-accent dark:bg-accent/20">
            {t("hero.badgeEnglish")}
          </span>
        </div>
        <p className="hero-anim hero-anim-d1 font-body text-lg font-medium text-accent">{t("hero.hello")}</p>
        <h1 className="hero-anim hero-anim-d2 font-heading mt-2 text-4xl font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl">
          Santiago Esteves
        </h1>
        <p className="hero-anim hero-anim-d3 mt-4 font-body text-xl text-text-muted sm:text-2xl">{t("hero.role")}</p>
        <p className="hero-anim hero-anim-d4 mx-auto mt-3 max-w-xl font-body text-base text-text-muted">
          {t("hero.pitch")}
        </p>
        <div className="hero-anim hero-anim-d5 mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="#contato"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3 font-heading text-sm font-semibold text-white no-underline shadow-lg transition-colors hover:bg-accent-hover hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary active:scale-[0.98]"
          >
            {t("hero.ctaContact")}
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-border bg-primary px-6 py-3 font-heading text-sm font-semibold text-primary no-underline transition-colors hover:border-accent hover:bg-surface hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary active:scale-[0.98]"
          >
            {t("hero.ctaCv")}
          </a>
        </div>

        <div className="hero-anim hero-anim-d6 mt-14 flex justify-center">
          <a
            href="#porque-eu"
            className="flex flex-col items-center gap-2 text-text-muted no-underline transition-colors hover:text-accent"
            aria-label="Ver o que me destaca"
          >
            <span className="text-xs font-medium">{t("hero.scrollLabel")}</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
