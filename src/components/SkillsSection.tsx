import { skills } from "@/data/skills";
import { SECTIONS } from "@/lib/sections";
import { Section } from "./Section";
import { TagList } from "./TagList";

/** Skills grouped by area, rendered from the `skills` data array. */
export function SkillsSection() {
  return (
    <Section id={SECTIONS.skills} title="Skills">
      <div className="skills-grid">
        {skills.map((group) => (
          <div key={group.label} className="skill-group">
            <h3 className="skill-group-title">{group.label}</h3>
            <TagList items={group.items} />
          </div>
        ))}
      </div>
    </Section>
  );
}
