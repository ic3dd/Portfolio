"use client";

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
        <div className="flex items-center justify-center">
          <p className="text-sm text-text-muted">
            © {currentYear} Santiago Esteves. {t("footer.availability")}
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
