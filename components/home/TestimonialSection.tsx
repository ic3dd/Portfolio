"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function TestimonialSection() {
  const { t } = useLanguage();

  return (
    <section id="depoimento" className="section-shell bg-surface">
      <div className="mx-auto max-w-4xl">
        <SectionHeader title={t("testimonial.title")} align="center" />

        <blockquote className="card-hover relative mt-10 overflow-hidden rounded-2xl border border-border bg-primary p-6 sm:p-10">
          <svg
            className="absolute right-6 top-6 h-16 w-16 text-accent/10"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
          >
            <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.016 3.016 0 01-3.016 3.016c-1.118 0-2.034-.625-2.512-1.607zm12 0c-1.03-1.094-1.583-2.321-1.583-4.311 0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.016 3.016 0 01-3.016 3.016c-1.118 0-2.034-.625-2.512-1.607z" />
          </svg>
          <p className="relative font-body text-lg italic leading-relaxed text-text-muted sm:text-xl">
            &ldquo;{t("testimonial.quote")}&rdquo;
          </p>
          <footer className="relative mt-6 flex items-center gap-3 font-body text-sm not-italic">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/15 font-heading font-semibold text-accent">
              P
            </span>
            <span className="text-text-muted">{t("testimonial.author")}</span>
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
