"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "@/types";
import { useLanguage } from "@/components/providers/LanguageProvider";

const placeholderProjects: Project[] = [
  {
    id: "1",
    title: "Plataforma Escolar Damião de Goes",
    slug: "plataforma-escolar-damiao-de-goes",
    description:
      "Plataforma web académica com foco em organização de conteúdos e experiência do utilizador para contexto escolar.",
    cover_image_url: null,
    technologies: ["HTML5", "CSS", "JavaScript"],
    github_url: null,
    live_url: "https://aluno19355.damiaodegoes.pt/",
    featured: true,
    sort_order: 0,
    published: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "2",
    title: "AulaBot",
    slug: "aulabot",
    description: "Projeto web com foco em apoio ao estudo e automação de tarefas educativas.",
    cover_image_url: null,
    technologies: ["HTML", "CSS", "JavaScript"],
    github_url: null,
    live_url: "https://aulabot.hstn.me/",
    featured: false,
    sort_order: 1,
    published: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];

export function ProjectsSection({ projects }: { projects?: Project[] | null }) {
  const { t } = useLanguage();

  const list = projects && projects.length > 0 ? projects : placeholderProjects;

  return (
    <section id="projetos" className="scroll-mt-20 border-t border-border px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="font-heading text-2xl font-bold text-primary sm:text-3xl"
        >
          {t("projects.title")}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="mt-2 font-body text-text-muted"
        >
          {t("projects.subtitle")}
        </motion.p>

        <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((project, i) => {
            const isPlaceholder = !projects || projects.length === 0;
            const mappedTitle =
              isPlaceholder && project.id === "1" ? t("projects.item1.title") :
              isPlaceholder && project.id === "2" ? t("projects.item2.title") :
              project.title;
            const mappedDesc =
              isPlaceholder && project.id === "1" ? t("projects.item1.desc") :
              isPlaceholder && project.id === "2" ? t("projects.item2.desc") :
              project.description;

            return (
            <motion.li
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 * i }}
              className="card-hover group overflow-hidden rounded-xl border border-border bg-surface shadow-sm"
            >
              <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-border to-primary/50">
                {project.cover_image_url ? (
                  <Image
                    src={project.cover_image_url}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <div className="flex h-full flex-col items-center justify-center gap-2 font-body text-text-muted">
                    <svg className="h-12 w-12 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                    </svg>
                    <span className="text-xs">{t("projects.noImage")}</span>
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-heading font-semibold text-primary">{mappedTitle}</h3>
                <p className="mt-1 font-body text-sm text-text-muted line-clamp-2">
                  {mappedDesc || "—"}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.technologies?.map((tech) => (
                    <span
                      key={tech}
                      className="rounded bg-primary px-2 py-0.5 font-body text-xs text-text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex gap-4">
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
                      className="text-sm font-medium text-accent hover:underline"
                    >
                      {t("projects.live")}
                    </a>
                  )}
                </div>
              </div>
            </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
