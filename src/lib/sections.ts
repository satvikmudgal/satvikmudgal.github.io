/**
 * Canonical section ids — the single source of truth shared by the navbar
 * links, the section anchors, and the footer. Keeping them here prevents the
 * nav and the sections from drifting out of sync.
 */
export const SECTIONS = {
  top: "top",
  about: "about",
  experience: "experience",
  skills: "skills",
  projects: "projects",
  openSource: "open-source",
  contact: "contact",
} as const;

export type SectionId = (typeof SECTIONS)[keyof typeof SECTIONS];
