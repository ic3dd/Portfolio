"use client";

import { useState } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { SectionHeader } from "@/components/ui/SectionHeader";

function PhoneIcon() {
  return (
    <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  );
}

export function ContactSection() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorKey, setErrorKey] = useState<"generic" | "config" | "send">("generic");

  const web3Key = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    setErrorKey("generic");

    const fd = new FormData(form);
    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();
    const botcheck = String(fd.get("botcheck") ?? "").trim();

    try {
      if (!web3Key) {
        setErrorKey("config");
        setStatus("error");
        return;
      }

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: web3Key,
          subject: `[Portfólio] Mensagem de ${name}`,
          name,
          email,
          message,
          botcheck,
        }),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
        return;
      }

      setErrorKey("send");
      setStatus("error");
    } catch {
      setErrorKey("generic");
      setStatus("error");
    }
  }

  const errorMessage =
    errorKey === "config"
      ? t("contact.form.errorConfig")
      : errorKey === "send"
        ? t("contact.form.errorSend")
        : t("contact.form.error");

  return (
    <section id="contato" className="section-shell bg-surface">
      <div className="mx-auto max-w-6xl">
        <SectionHeader title={t("contact.title")} subtitle={t("contact.subtitle")} />

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-2xl border border-border bg-primary p-5 sm:p-6">
            <form onSubmit={handleSubmit} className="relative space-y-4">
              <input
                type="text"
                name="botcheck"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden
                className="absolute -left-[9999px] h-0 w-0 opacity-0"
              />
              <div>
                <label htmlFor="name" className="block font-body text-sm font-medium text-primary">
                  {t("contact.form.name")}
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="mt-1 block w-full rounded-xl border-2 border-border bg-surface px-3 py-2.5 font-body text-primary placeholder-text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
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
                  className="mt-1 block w-full rounded-xl border-2 border-border bg-surface px-3 py-2.5 font-body text-primary placeholder-text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
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
                  className="mt-1 block w-full rounded-xl border-2 border-border bg-surface px-3 py-2.5 font-body text-primary placeholder-text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                  placeholder={t("contact.form.messagePlaceholder")}
                />
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full rounded-xl bg-accent px-4 py-3 font-heading text-sm font-semibold text-white shadow-md transition-colors hover:bg-accent-hover hover:shadow-lg disabled:opacity-70 sm:w-auto"
              >
                {status === "sending"
                  ? t("contact.form.sending")
                  : status === "success"
                    ? t("contact.form.sent")
                    : t("contact.form.send")}
              </button>
              {status === "success" && (
                <p className="text-sm text-green-600 dark:text-green-400">{t("contact.form.success")}</p>
              )}
              {status === "error" && <p className="text-sm text-red-600 dark:text-red-400">{errorMessage}</p>}
            </form>
          </div>

          <div className="flex flex-col gap-4">
            <p className="font-body font-medium text-primary">{t("contact.direct")}</p>
            <a
              href="tel:+351910183513"
              className="card-hover flex items-center gap-4 rounded-2xl border border-border bg-primary p-4 no-underline transition-colors hover:border-accent/40"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface">
                <PhoneIcon />
              </span>
              <span>
                <span className="block font-body text-xs uppercase tracking-wide text-text-muted">Telefone</span>
                <span className="font-heading font-semibold text-primary">910 183 513</span>
              </span>
            </a>
            <a
              href="mailto:santiagoesteves35@gmail.com"
              className="card-hover flex items-center gap-4 rounded-2xl border border-border bg-primary p-4 no-underline transition-colors hover:border-accent/40"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface">
                <MailIcon />
              </span>
              <span className="min-w-0">
                <span className="block font-body text-xs uppercase tracking-wide text-text-muted">Email</span>
                <span className="break-all font-heading text-sm font-semibold text-primary sm:text-base">
                  santiagoesteves35@gmail.com
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
