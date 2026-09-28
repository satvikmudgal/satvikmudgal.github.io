"use client";

import { useId, useMemo, useState } from "react";
import { projectCategories, projectLanguages } from "@/data/projects";
import type { Project } from "@/lib/types";
import { trackEvent } from "@/lib/analytics";
import { ProjectModal } from "./ProjectModal";
import { TagList } from "./TagList";

function slug(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/**
 * Interactive projects list: language filter chips, then cards grouped by
 * category. Each card is a clickable summary that opens a details overlay.
 */
export function ProjectsGrid({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<Project | null>(null);
  const [language, setLanguage] = useState<string | null>(null);
  const baseId = useId();

  const visible = useMemo(
    () =>
      language
        ? projects.filter((project) => project.languages?.includes(language))
        : projects,
    [projects, language],
  );

  return (
    <>
      <div
        className="project-filters"
        role="group"
        aria-label="Filter projects by language"
      >
        <button
          type="button"
          className={`filter-chip${language === null ? " filter-chip--active" : ""}`}
          aria-pressed={language === null}
          onClick={() => setLanguage(null)}
        >
          All
        </button>
        {projectLanguages.map((lang) => (
          <button
            key={lang}
            type="button"
            className={`filter-chip${language === lang ? " filter-chip--active" : ""}`}
            aria-pressed={language === lang}
            onClick={() => setLanguage((current) => (current === lang ? null : lang))}
          >
            {lang}
          </button>
        ))}
      </div>

      {projectCategories.map((category) => {
        const items = visible.filter((project) => project.category === category);
        if (items.length === 0) return null;
        return (
          <section
            key={category}
            className="project-group"
            aria-label={category}
          >
            <h3 className="project-group-title">{category}</h3>
            <div className="card-list">
              {items.map((project) => {
                const titleId = `${baseId}-${slug(project.title)}`;
                return (
                  <article
                    key={project.title}
                    className="project-card project-card--interactive"
                  >
                    <div className="project-header">
                      <h4 id={titleId} className="project-title">
                        {project.title}
                      </h4>
                      {project.status && (
                        <span className="project-status">{project.status}</span>
                      )}
                    </div>
                    {project.subtitle && (
                      <p className="project-subtitle">{project.subtitle}</p>
                    )}
                    {project.tags && project.tags.length > 0 && (
                      <TagList items={project.tags} />
                    )}
                    <button
                      type="button"
                      className="project-open"
                      aria-labelledby={titleId}
                      aria-haspopup="dialog"
                      onClick={() => {
                        trackEvent("view_project_details", {
                          project_title: project.title,
                        });
                        setActive(project);
                      }}
                    >
                      View details →
                    </button>
                  </article>
                );
              })}
            </div>
          </section>
        );
      })}

      {visible.length === 0 && (
        <p className="projects-empty">No projects tagged with this language yet.</p>
      )}

      {active && (
        <ProjectModal project={active} onClose={() => setActive(null)} />
      )}
    </>
  );
}
