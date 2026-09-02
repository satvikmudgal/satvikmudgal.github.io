/**
 * Content data models for the portfolio.
 *
 * These types describe *what* the site displays, independent of *how* it is
 * rendered. Content lives in `src/data/*` as plain objects typed against these
 * interfaces; components in `src/components/*` render them. To add or change
 * content, edit the data — not the components.
 */

/** A single anchor/link, e.g. a social profile or an outbound resource. */
export interface Link {
  label: string;
  href: string;
  /** When true, opens in a new tab with safe rel attributes. */
  external?: boolean;
  /** Optional extra class for one-off styling (e.g. an emphasized action). */
  className?: string;
}

/** An image with required alt text for accessibility. */
export interface ImageAsset {
  src: string;
  alt: string;
}

/** A collapsible sub-section within an experience (or any card). */
export interface DetailItem {
  title: string;
  body: string;
  images?: ImageAsset[];
}

/** One entry in the Experience section. */
export interface ExperienceEntry {
  role: string;
  org: string;
  date: string;
  /** Primary call-to-action links shown at the top of the open card. */
  actions?: Link[];
  /** Expandable detail cards describing the work. */
  details: DetailItem[];
  /** Related resource links shown at the bottom of the open card. */
  links?: Link[];
}

/** Grouping category for the projects section. */
export type ProjectCategory = "Full Stack" | "AI" | "Frontend" | "Backend";

/** A portfolio project entry. */
export interface Project {
  title: string;
  /** One-line role or context, e.g. "Local-first desktop app" or a group role. */
  subtitle?: string;
  description: string;
  /** Technology / topic chips. */
  tags?: string[];
  /** Repo / demo / write-up links. Omit to show no links (e.g. a private repo). */
  links?: Link[];
  /** Small status badge on the card, e.g. "In development" or "Coursework". */
  status?: string;
  /** Which group the card is shown under. */
  category?: ProjectCategory;
  /** Languages used, matching the filter-chip labels (for the language filter). */
  languages?: string[];
  /** Status/label chips shown at the top-right of the detail overlay. */
  badges?: string[];
  /** Carousel images shown on the left of the detail overlay. */
  images?: ImageAsset[];
  /**
   * Expandable "Project Information" dropdowns — customizable per project.
   * Each item's `title` is the dropdown label; `body` is the expanded content.
   */
  details?: DetailItem[];
}

/** A named group of skills for the Skills section. */
export interface SkillGroup {
  label: string;
  items: string[];
}

/** Free-form About/bio content. */
export interface AboutContent {
  heading: string;
  paragraphs: string[];
}

/** A navbar entry linking to a section by id. */
export interface NavItem {
  id: string;
  label: string;
}

/**
 * One row in the contact / job-application footer. Provide `value` (optionally
 * with `href`) for known info, or leave it out and set `placeholder` for a
 * field still to be filled in.
 */
export interface ContactField {
  label: string;
  value?: string;
  href?: string;
  external?: boolean;
  placeholder?: string;
}

/** Contact footer content. */
export interface ContactConfig {
  heading: string;
  lead?: string;
  fields: ContactField[];
  /** Link target for the Privacy Policy (placeholder page for now). */
  privacyHref: string;
  copyright: string;
}

/** Site-wide identity, contact links, and page metadata. */
export interface SiteConfig {
  name: string;
  /** Small uppercase line above the name. */
  eyebrow: string;
  /** Optional tagline below the name. */
  tagline?: string;
  /** Links rendered in the hero (Email, GitHub, LinkedIn, …). */
  social: Link[];
  /** Document <head> metadata. */
  meta: {
    title: string;
    description: string;
  };
}
