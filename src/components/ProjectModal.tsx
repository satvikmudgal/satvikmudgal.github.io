"use client";

import { useEffect, useRef } from "react";
import type { Project } from "@/lib/types";
import { Carousel } from "./Carousel";
import { DetailCard } from "./DetailCard";
import { SmartLink } from "./SmartLink";

/**
 * Project detail overlay. Two columns on desktop: an image carousel on the
 * left, and on the right — status chips, a "Project Information" summary, and
 * any number of expandable, scrollable detail dropdowns (customizable per
 * project via `project.details`). Collapses to a single column on mobile, and
 * to an info-only layout when a project has no images.
 *
 * Handles Escape, backdrop click, body scroll lock, initial focus, focus
 * restoration, and a basic focus trap.
 */
export function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key === "Tab" && panelRef.current) {
        const focusables = panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
      previouslyFocused?.focus?.();
    };
  }, [onClose]);

  const hasMedia = Boolean(project.images && project.images.length > 0);
  const hasDetails = Boolean(project.details && project.details.length > 0);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        ref={panelRef}
        className={`modal-panel modal-panel--project${hasMedia ? "" : " modal-panel--info-only"}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          ref={closeRef}
          type="button"
          className="modal-close"
          onClick={onClose}
          aria-label="Close details"
        >
          ×
        </button>

        <div className={`project-modal${hasMedia ? "" : " project-modal--single"}`}>
          {hasMedia && (
            <div className="project-modal__media">
              <Carousel images={project.images!} />
            </div>
          )}

          <div className="project-modal__info">
            <h3 id="project-modal-title" className="project-modal__title">
              {project.title}
            </h3>
            {project.subtitle && (
              <p className="project-modal__subtitle">{project.subtitle}</p>
            )}

            {(project.badges?.length || project.links?.length) && (
              <div className="project-chips">
                {project.badges?.map((badge) => (
                  <span key={badge} className="chip">
                    {badge}
                  </span>
                ))}
                {project.links?.map((link) => (
                  <SmartLink
                    key={link.href}
                    href={link.href}
                    external={link.external}
                    className="chip chip--action"
                  >
                    {link.label} ↗
                  </SmartLink>
                ))}
              </div>
            )}

            <section className="project-info">
              <h4 className="project-info__heading">Project Information</h4>
              <p className="project-info__summary">{project.description}</p>

              {hasDetails && (
                <div className="project-info__details">
                  {project.details!.map((detail) => (
                    <DetailCard key={detail.title} {...detail} />
                  ))}
                </div>
              )}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
