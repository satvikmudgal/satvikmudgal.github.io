import type { Project } from "@/lib/types";
import { LinkButton } from "./LinkButton";
import { TagList } from "./TagList";

/**
 * An always-visible project card: title (+ optional status badge), subtitle,
 * description, technology tags, and links. Used for both featured projects and
 * open-source contributions.
 */
export function ProjectCard({
  title,
  subtitle,
  status,
  description,
  tags,
  links,
}: Project) {
  return (
    <article className="project-card">
      <div className="project-header">
        <h3 className="project-title">{title}</h3>
        {status && <span className="project-status">{status}</span>}
      </div>
      {subtitle && <p className="project-subtitle">{subtitle}</p>}
      <p className="project-desc">{description}</p>
      {tags && tags.length > 0 && <TagList items={tags} />}
      {links && links.length > 0 && (
        <div className="project-links">
          {links.map((link) => (
            <LinkButton key={link.href} {...link} />
          ))}
        </div>
      )}
    </article>
  );
}
