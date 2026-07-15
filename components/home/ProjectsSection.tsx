"use client";

import Image from "next/image";
import type { TranslationKey } from "@/lib/i18n";
import type { Project } from "@/types";
import { ProjectCover } from "@/components/home/ProjectCover";
import { isPlaceholderId, type PlaceholderId } from "@/components/home/projectTypes";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { withBasePath } from "@/lib/basePath";

const placeholderProjects: Project[] = [
  {
    id: "main1",
    title: "GoBar",
    slug: "gobar",
    description: null,
    cover_image_url: withBasePath("/images/gobar.png"),
    technologies: ["PHP", "SQL", "JavaScript", "HTML", "CSS"],
    github_url: null,
    live_url: "https://aluno19355.damiaodegoes.pt/",
    featured: true,
    sort_order: 0,
    published: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "main2",
    title: "AulaBot",
    slug: "aulabot",
    description: null,
    cover_image_url: withBasePath("/images/aulabot.png"),
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
  main1: "projects.main1.title",
  main2: "projects.main2.title",
  demo1: "projects.demo1.title",
  demo2: "projects.demo2.title",
};

const DESC_KEYS: Record<PlaceholderId, TranslationKey> = {
  main1: "projects.main1.desc",
  main2: "projects.main2.desc",
  demo1: "projects.demo1.desc",
  demo2: "projects.demo2.desc",
};

const DEMO_BADGE_KEYS: Partial<Record<PlaceholderId, TranslationKey>> = {
  demo1: "projects.demo1.badge",
  demo2: "projects.demo2.badge",
};

const PAP_BADGE_IDS: Partial<Record<PlaceholderId, true>> = {
  main1: true,
};

const FEATURE_KEYS: Partial<Record<PlaceholderId, TranslationKey[]>> = {
  main1: [
    "projects.main1.f1",
    "projects.main1.f2",
    "projects.main1.f3",
    "projects.main1.f4",
    "projects.main1.f5",
  ],
  main2: [
    "projects.main2.f1",
    "projects.main2.f2",
    "projects.main2.f3",
    "projects.main2.f4",
    "projects.main2.f5",
  ],
};

const PLACEHOLDER_SECTIONS: { heading: TranslationKey; ids: PlaceholderId[] }[] = [
  { heading: "projects.mainHeading", ids: ["main1", "main2"] },
  { heading: "projects.demoHeading", ids: ["demo1", "demo2"] },
];

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
    const mainBadge =
      isPlaceholder && isPlaceholderId(pid) && pid === "main2";
    const papBadge =
      isPlaceholder && isPlaceholderId(pid) && PAP_BADGE_IDS[pid];
    const featureKeys = isPlaceholder && isPlaceholderId(pid) ? FEATURE_KEYS[pid] : undefined;

    const coverSrc = project.cover_image_url ? withBasePath(project.cover_image_url) : null;

    return (
      <li
        key={project.id}
        className="card-hover group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-sm"
      >
        <div className="relative aspect-video w-full overflow-hidden">
          {coverSrc ? (
            <>
              <Image
                src={coverSrc}
                alt={mappedTitle}
                fill
                className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
            </>
          ) : (
            <ProjectCover
              projectId={isPlaceholderId(pid) ? pid : undefined}
              title={mappedTitle}
            />
          )}
        </div>
        <div className="flex flex-1 flex-col p-4 sm:p-5">
          <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-start sm:justify-between sm:gap-3">
            <h3 className="font-heading text-lg font-semibold leading-snug text-primary">{mappedTitle}</h3>
            <div className="flex flex-wrap items-center gap-2">
              {papBadge && (
                <span className="shrink-0 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 text-[11px] font-semibold text-accent">
                  {t("projects.papBadge")}
                </span>
              )}
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
    <section id="projetos" className="section-shell bg-surface">
      <div className="mx-auto max-w-6xl">
        <SectionHeader title={t("projects.title")} subtitle={t("projects.intro")} />

        {isPlaceholder ? (
          <div className="mt-10 space-y-14">
            {PLACEHOLDER_SECTIONS.map((section) => {
              const sectionProjects = section.ids
                .map((id) => placeholderProjects.find((p) => p.id === id))
                .filter((p): p is Project => Boolean(p));

              return (
                <div key={section.heading}>
                  <div className="flex items-center gap-3">
                    <div className="h-px flex-1 bg-border" aria-hidden />
                    <h3 className="shrink-0 font-heading text-sm font-semibold uppercase tracking-wider text-text-muted">
                      {t(section.heading)}
                    </h3>
                    <div className="h-px flex-1 bg-border" aria-hidden />
                  </div>
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
