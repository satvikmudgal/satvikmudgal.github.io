"use client";

import { useId, useState, type ReactNode } from "react";

/**
 * Generic titled content block. Every top-level page section (About,
 * Experience, Projects, Open Source, Skills) renders through this so spacing,
 * the enclosure box, and the collapse behavior stay consistent.
 *
 * Each section sits in its own bordered enclosure with a top bar holding the
 * centered title and a collapse toggle. Collapsing hides the body while
 * keeping the bar (and the section anchor) in place.
 */
export function Section({
  id,
  title,
  children,
}: {
  /** Anchor id, so the navbar can link to this section. */
  id?: string;
  title: string;
  children: ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(false);
  const bodyId = useId();

  return (
    <section id={id} className="section">
      <div className="section-box">
        <div className="section-bar">
          <h2 className="section-title">{title}</h2>
          <button
            type="button"
            className="section-collapse"
            aria-expanded={!collapsed}
            aria-controls={bodyId}
            onClick={() => setCollapsed((prev) => !prev)}
          >
            <span aria-hidden="true">{collapsed ? "+" : "−"}</span>
            <span className="sr-only">
              {collapsed ? `Expand ${title} section` : `Collapse ${title} section`}
            </span>
          </button>
        </div>
        <div id={bodyId} className="section-body" hidden={collapsed}>
          {children}
        </div>
      </div>
    </section>
  );
}
