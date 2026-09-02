import type { ReactNode } from "react";

/**
 * Generic titled content block. Every top-level page section (Experience,
 * and future ones like Projects or Education) should render through this so
 * spacing and the eyebrow title style stay consistent.
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
  return (
    <section id={id} className="section">
      <h2 className="section-title">{title}</h2>
      {children}
    </section>
  );
}
