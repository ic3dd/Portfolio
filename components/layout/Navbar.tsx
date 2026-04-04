"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/providers/LanguageProvider";

const navLinks = [
  { href: "#porque-eu", key: "nav.why" as const },
  { href: "#sobre", key: "nav.about" as const },
  { href: "#projetos", key: "nav.portfolio" as const },
  { href: "#formacao", key: "nav.education" as const },
  { href: "#certificacoes", key: "nav.certs" as const },
  { href: "#contato", key: "nav.contact" as const },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="sticky top-0 z-50 border-b border-border bg-primary/80 backdrop-blur-md"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="font-heading text-lg font-semibold text-primary no-underline transition-colors hover:text-accent"
        >
          Santiago Esteves
        </Link>

        {/* Desktop */}
        <div className="hidden items-center md:flex">
          <Link
            href="#contato"
            className="mr-4 rounded-lg bg-accent px-3 py-1.5 text-sm font-semibold text-white no-underline transition-colors hover:bg-accent-hover"
          >
            {t("nav.available")}
          </Link>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="link-underline-hover mr-6 whitespace-nowrap text-sm font-medium text-text-muted transition-colors hover:text-primary"
            >
              {t(link.key)}
            </Link>
          ))}
          <LanguageToggle />
          <ThemeToggle />
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 md:hidden">
          <LanguageToggle />
          <ThemeToggle />
          <motion.button
            type="button"
            aria-label="Abrir menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="rounded-lg p-2 text-text-muted hover:bg-surface hover:text-primary"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </motion.button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="border-t border-border bg-primary md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-3">
              <Link
                href="#contato"
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-lg bg-accent px-3 py-2.5 text-center text-sm font-semibold text-white no-underline transition-colors hover:bg-accent-hover"
                )}
              >
                {t("nav.available")}
              </Link>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-lg px-3 py-2 text-sm font-medium text-text-muted transition-colors hover:bg-surface hover:text-primary"
                  )}
                >
                  {t(link.key)}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
