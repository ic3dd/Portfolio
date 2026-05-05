"use client";

import Image from "next/image";
import type { TranslationKey } from "@/lib/i18n";
import type { Project } from "@/types";
import { useLanguage } from "@/components/providers/LanguageProvider";

type PlaceholderId = "main2" | "demo1" | "demo2";

const placeholderProjects: Project[] = [
  {
    id: "main2",
    title: "AulaBot",
    slug: "aulabot",
    description: null,
    cover_image_url: "/images/aulabot.png",
    technologies: ["PHP", "SQL", "JavaScript", "APIs", "HTML", "CSS"],
    github_url: null,
    live_url: "https://aulabot.hstn.me/",
    featured: false,
    sort_order: 1,
    published: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "demo1",
    title: "Sabor da Vila",
    slug: "sabor-da-vila",
    description: null,
    cover_image_url: null,
    technologies: ["HTML", "CSS", "JavaScript"],
    github_url: null,
    live_url: "https://ic3dd.github.io/site.exemplo1/",
    featured: false,
    sort_order: 2,
    published: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "demo2",
    title: "Studio Elegance",
    slug: "studio-elegance",
    description: null,
    cover_image_url: null,
    technologies: ["HTML", "CSS", "JavaScript"],
    github_url: null,
    live_url: "https://ic3dd.github.io/site.exemplo2/",
    featured: false,
    sort_order: 3,
    published: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];

const TITLE_KEYS: Record<PlaceholderId, TranslationKey> = {
  main2: "projects.main2.title",
  demo1: "projects.demo1.title",
  demo2: "projects.demo2.title",
};

const DESC_KEYS: Record<PlaceholderId, TranslationKey> = {
  main2: "projects.main2.desc",
  demo1: "projects.demo1.desc",
  demo2: "projects.demo2.desc",
};

const DEMO_BADGE_KEYS: Partial<Record<PlaceholderId, TranslationKey>> = {
  demo1: "projects.demo1.badge",
  demo2: "projects.demo2.badge",
};

const FEATURE_KEYS: Partial<Record<PlaceholderId, TranslationKey[]>> = {
  main2: [
    "projects.main2.f1",
    "projects.main2.f2",
    "projects.main2.f3",
    "projects.main2.f4",
    "projects.main2.f5",
  ],
};

const PLACEHOLDER_SECTIONS: { heading: TranslationKey; ids: PlaceholderId[] }[] = [
  { heading: "projects.mainHeading", ids: ["main2"] },
  { heading: "projects.demoHeading", ids: ["demo1", "demo2"] },
];

function isPlaceholderId(id: string): id is PlaceholderId {
  return id === "main2" || id === "demo1" || id === "demo2";
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

export function ProjectsSection({ projects }: { projects?: Project[] | null }) {
  const { t } = useLanguage();

  const list = projects && projects.length > 0 ? projects : placeholderProjects;
  const isPlaceholder = !projects || projects.length === 0;

  function renderCard(project: Project) {
    const pid = project.id;
    const mappedTitle =
      isPlaceholder && isPlaceholderId(pid) ? t(TITLE_KEYS[pid]) : project.title;
    const mappedDesc =
      isPlaceholder && isPlaceholderId(pid) ? t(DESC_KEYS[pid]) : project.description;
    const demoBadge =
      isPlaceholder && isPlaceholderId(pid) && DEMO_BADGE_KEYS[pid]
        ? t(DEMO_BADGE_KEYS[pid]!)
        : null;
    const mainBadge = isPlaceholder && isPlaceholderId(pid) && pid === "main2";
    const featureKeys = isPlaceholder && isPlaceholderId(pid) ? FEATURE_KEYS[pid] : undefined;

    return (
      <li
        key={project.id}
        className="card-hover group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface shadow-sm"
      >
        <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800">
          {project.cover_image_url ? (
            <>
              <Image
                src={project.cover_image_url}
                alt={mappedTitle}
                fill
                className="object-cover object-top transition-opacity duration-200 group-hover:opacity-95"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
            </>
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-2 px-4 text-center font-body text-slate-400">
              <svg
                className="h-12 w-12 opacity-50"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>
              <span className="text-xs text-slate-500">{t("projects.noImage")}</span>
            </div>
          )}
        </div>
        <div className="flex flex-1 flex-col p-4 sm:p-5">
          <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-start sm:justify-between sm:gap-3">
            <h3 className="font-heading text-lg font-semibold leading-snug text-primary">{mappedTitle}</h3>
            <div className="flex flex-wrap items-center gap-2">
              {mainBadge && (
                <span className="shrink-0 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 text-[11px] font-semibold text-accent">
                  {t("projects.mainBadge")}
                </span>
              )}
              {demoBadge && (
                <span className="shrink-0 rounded-full border border-border bg-primary px-2.5 py-1 text-[11px] font-semibold text-text-muted">
                  {demoBadge}
                </span>
              )}
              {project.featured && (
                <span className="shrink-0 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 text-[11px] font-semibold text-accent">
                  {t("projects.featured")}
                </span>
              )}
            </div>
          </div>
          <p className="mt-3 font-body text-sm leading-relaxed text-text-muted">{mappedDesc || "—"}</p>

          {featureKeys && featureKeys.length > 0 && (
            <div className="mt-4">
              <p className="font-heading text-xs font-semibold uppercase tracking-wide text-text-muted">
                {t("projects.features")}
              </p>
              <ul className="mt-2 space-y-2">
                {featureKeys.map((key) => (
                  <li key={key} className="flex gap-2.5 font-body text-sm text-text-muted">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span>{t(key)}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-4">
            <p className="font-heading text-xs font-semibold uppercase tracking-wide text-text-muted">
              {t("projects.stack")}
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.technologies?.map((tech) => (
                <span key={tech} className="rounded bg-primary px-2 py-0.5 font-body text-xs text-text-muted">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-auto flex flex-wrap gap-3 pt-5">
            {project.github_url && (
              <a
                href={project.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-accent hover:underline"
              >
                {t("projects.github")}
              </a>
            )}
            {project.live_url && (
              <a
                href={project.live_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg border border-accent/30 bg-accent/10 px-4 py-2.5 text-sm font-semibold text-accent no-underline transition-colors hover:bg-accent hover:text-white sm:min-h-0 sm:min-w-0"
              >
                {t("projects.visit")}
              </a>
            )}
          </div>
        </div>
      </li>
    );
  }

  return (
    <section id="projetos" className="scroll-mt-20 border-t border-border px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-heading text-2xl font-bold text-primary sm:text-3xl">{t("projects.title")}</h2>
        <p className="mt-2 max-w-3xl font-body text-text-muted">{t("projects.intro")}</p>

        {isPlaceholder ? (
          <div className="mt-10 space-y-14">
            {PLACEHOLDER_SECTIONS.map((section) => {
              const sectionProjects = section.ids
                .map((id) => placeholderProjects.find((p) => p.id === id))
                .filter((p): p is Project => Boolean(p));

              return (
                <div key={section.heading}>
                  <h3 className="font-heading text-lg font-semibold text-primary sm:text-xl">
                    {t(section.heading)}
                  </h3>
                  <ul className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-2">
                    {sectionProjects.map((project) => renderCard(project))}
                  </ul>
                </div>
              );
            })}
          </div>
        ) : (
          <ul className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {list.map((project) => renderCard(project))}
          </ul>
        )}
      </div>
    </section>
  );
}
