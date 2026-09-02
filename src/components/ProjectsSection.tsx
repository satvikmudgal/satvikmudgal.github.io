import { projects } from "@/data/projects";
import { SECTIONS } from "@/lib/sections";
import { ProjectsGrid } from "./ProjectsGrid";
import { Section } from "./Section";

/**
 * Featured projects. The section stays server-rendered; the interactive grid
 * (clickable cards + details overlay) is a client component.
 */
export function ProjectsSection() {
  return (
    <Section id={SECTIONS.projects} title="Projects">
      <ProjectsGrid projects={projects} />
    </Section>
  );
}
