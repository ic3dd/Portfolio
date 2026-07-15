"use client";

import Link from "next/link";
import { useLanguage } from "@/components/providers/LanguageProvider";

const currentYear = new Date().getFullYear();

const footerLinks = [
  { href: "#sobre", key: "nav.about" as const },
  { href: "#projetos", key: "nav.portfolio" as const },
  { href: "#formacao", key: "nav.education" as const },
  { href: "#contato", key: "nav.contact" as const },
];

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border bg-primary">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-heading text-lg font-semibold text-primary">Santiago Esteves</p>
            <p className="mt-2 max-w-sm font-body text-sm leading-relaxed text-text-muted">
              {t("footer.availability")}
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-text-muted no-underline transition-colors hover:text-accent"
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-8 border-t border-border pt-6 text-center sm:text-left">
          <p className="font-body text-sm text-text-muted">© {currentYear} Santiago Esteves</p>
        </div>
      </div>
    </footer>
  );
}
