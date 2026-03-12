"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function LanguageToggle() {
  const { lang, toggleLang } = useLanguage();

  return (
    <motion.button
      type="button"
      aria-label={lang === "pt" ? "Switch language to English" : "Mudar idioma para Português"}
      onClick={toggleLang}
      className="rounded-lg border border-border px-2.5 py-1.5 text-xs font-semibold text-text-muted transition-colors hover:bg-surface hover:text-primary focus:outline-none focus:ring-2 focus:ring-accent"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {lang === "pt" ? "PT" : "EN"}
    </motion.button>
  );
}

