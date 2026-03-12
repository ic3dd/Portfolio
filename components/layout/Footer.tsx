"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";

const currentYear = new Date().getFullYear();

export function Footer() {
  const { t } = useLanguage();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="border-t border-border bg-surface"
    >
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-sm text-text-muted">
            © {currentYear} Santiago Esteves. {t("footer.availability")}
          </p>
          <div className="flex gap-6">
            <Link
              href="https://github.com/santiagoesteves"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-muted transition-colors hover:text-accent"
            >
              GitHub
            </Link>
            <Link
              href="https://linkedin.com/in/santiagoesteves"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-muted transition-colors hover:text-accent"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
