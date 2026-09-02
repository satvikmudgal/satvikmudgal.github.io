"use client";

import { useEffect, useRef } from "react";
import type { Project } from "@/lib/types";
import { LinkButton } from "./LinkButton";
import { TagList } from "./TagList";

/**
 * Overlay showing a project's full details. Rendered only while a project is
 * selected. Handles Escape, backdrop click, body scroll lock, initial focus,
 * focus restoration, and a basic focus trap.
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

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        ref={panelRef}
        className="modal-panel"
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

        <div className="project-header">
          <h3 id="project-modal-title" className="project-title">
            {project.title}
          </h3>
          {project.status && (
            <span className="project-status">{project.status}</span>
          )}
        </div>
        {project.subtitle && (
          <p className="project-subtitle">{project.subtitle}</p>
        )}
        <p className="modal-desc">{project.description}</p>
        {project.tags && project.tags.length > 0 && (
          <TagList items={project.tags} />
        )}
        {project.links && project.links.length > 0 && (
          <div className="project-links">
            {project.links.map((link) => (
              <LinkButton key={link.href} {...link} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
