import { experiences } from "@/data/experience";
import { SECTIONS } from "@/lib/sections";
import { ExperienceCard } from "./ExperienceCard";
import { Section } from "./Section";

/**
 * Renders the Experience section by mapping every entry in the `experiences`
 * data array to an `ExperienceCard`.
 */
export function ExperienceSection() {
  return (
    <Section id={SECTIONS.experience} title="Experience">
      <div className="experience-list">
        {experiences.map((entry) => (
          <ExperienceCard key={`${entry.role}-${entry.org}`} {...entry} />
        ))}
      </div>
    </Section>
  );
}
