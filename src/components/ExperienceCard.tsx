import type { ExperienceEntry } from "@/lib/types";
import { DetailCard } from "./DetailCard";
import { LinkButton } from "./LinkButton";
import { Partition } from "./Partition";

/**
 * One experience entry, always expanded: a header (role / org / date) followed
 * by its content — action links, the collapsible detail cards, and related
 * resource links. The entry itself is no longer behind a dropdown; only the
 * inner detail cards remain click-to-expand.
 */
export function ExperienceCard({
  role,
  org,
  date,
  actions,
  details,
  links,
}: ExperienceEntry) {
  return (
    <article className="experience-card">
      <div className="experience-header">
        <div>
          <h3 className="experience-role">{role}</h3>
          <p className="experience-org">{org}</p>
        </div>
        <div className="experience-header-right">
          <p className="experience-date">{date}</p>
        </div>
      </div>

      {actions && actions.length > 0 && (
        <>
          <Partition size="sm" />
          <div className="experience-actions">
            {actions.map((action) => (
              <LinkButton key={action.href} {...action} />
            ))}
          </div>
        </>
      )}

      <Partition size="sm" />
      <div className="experience-details">
        {details.map((detail) => (
          <DetailCard key={detail.title} {...detail} />
        ))}
      </div>

      {links && links.length > 0 && (
        <>
          <Partition size="sm" />
          <div className="experience-links">
            {links.map((link) => (
              <LinkButton key={link.href} {...link} />
            ))}
          </div>
        </>
      )}
    </article>
  );
}
