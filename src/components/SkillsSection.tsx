import { skills } from "@/data/skills";
import { SECTIONS } from "@/lib/sections";
import { Section } from "./Section";

/**
 * Skills rendered as four category cards. Each card flips its color profile and
 * enlarges on hover (see `.skill-card` in globals.css).
 */
export function SkillsSection() {
  return (
    <Section id={SECTIONS.skills} title="Skills">
      <div className="skills-cards">
        {skills.map((group) => (
          <article key={group.label} className="skill-card">
            <h3 className="skill-card__title">{group.label}</h3>
            <ul className="skill-card__chips">
              {group.items.map((item) => (
                <li key={item} className="skill-chip">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
