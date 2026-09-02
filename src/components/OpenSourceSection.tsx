import { openSource } from "@/data/openSource";
import { SECTIONS } from "@/lib/sections";
import { ProjectCard } from "./ProjectCard";
import { Section } from "./Section";

/** Open-source / community contributions. */
export function OpenSourceSection() {
  return (
    <Section id={SECTIONS.openSource} title="Open Source">
      <div className="card-list">
        {openSource.map((item) => (
          <ProjectCard key={item.title} {...item} />
        ))}
      </div>
    </Section>
  );
}
