import { about } from "@/data/about";
import { SECTIONS } from "@/lib/sections";
import { Section } from "./Section";

/** Short bio / about content, rendered from the `about` data object. */
export function AboutSection() {
  return (
    <Section id={SECTIONS.about} title={about.heading}>
      <div className="about-text">
        {about.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </Section>
  );
}
