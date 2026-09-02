import { SECTIONS } from "@/lib/sections";
import type { NavItem } from "@/lib/types";

/**
 * Navbar links, in display order. Each `id` matches a section anchor on the
 * home page (see `@/lib/sections`).
 */
export const navItems: NavItem[] = [
  { id: SECTIONS.about, label: "About" },
  { id: SECTIONS.experience, label: "Experience" },
  { id: SECTIONS.skills, label: "Skills" },
  { id: SECTIONS.projects, label: "Projects" },
  { id: SECTIONS.openSource, label: "Open Source" },
  { id: SECTIONS.contact, label: "Contact" },
];
