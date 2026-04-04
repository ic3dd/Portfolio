"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";

const currentYear = new Date().getFullYear();

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          <p className="text-sm text-text-muted">
            © {currentYear} Santiago Esteves. {t("footer.availability")}
          </p>
        </div>
      </div>
    </footer>
  );
}
