"use client";

import { useState } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function ContactSection() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorKey, setErrorKey] = useState<"generic" | "config" | "send">("generic");

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
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, botcheck }),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
        return;
      }

      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (res.status === 503 || data.error === "not_configured") {
        setErrorKey("config");
      } else if (res.status === 502 || data.error === "provider") {
        setErrorKey("send");
      }
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
    <section id="contato" className="scroll-mt-20 border-t border-border bg-surface px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-heading text-2xl font-bold text-primary sm:text-3xl">{t("contact.title")}</h2>
        <p className="mt-2 font-body text-text-muted">{t("contact.subtitle")}</p>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <div>
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
                  className="mt-1 block w-full rounded-xl border-2 border-border bg-primary px-3 py-2.5 font-body text-primary placeholder-text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
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
                  className="mt-1 block w-full rounded-xl border-2 border-border bg-primary px-3 py-2.5 font-body text-primary placeholder-text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
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
                  className="mt-1 block w-full rounded-xl border-2 border-border bg-primary px-3 py-2.5 font-body text-primary placeholder-text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
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
            <p className="font-body text-text-muted">{t("contact.direct")}</p>
            <a
              href="tel:+351910183513"
              className="link-underline-hover inline-flex items-center gap-2 font-medium text-accent"
            >
              <span className="text-lg">📞</span> 910 183 513
            </a>
            <a
              href="mailto:santiagoesteves35@gmail.com"
              className="link-underline-hover inline-flex items-center gap-2 font-medium text-accent"
            >
              <span className="text-lg">✉️</span> santiagoesteves35@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
