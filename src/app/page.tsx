import { AboutSection } from "@/components/AboutSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { OpenSourceSection } from "@/components/OpenSourceSection";
import { Partition } from "@/components/Partition";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";

/**
 * Page composition only. Each section is self-contained and data-driven, so
 * building out the site means adding a section component here (and its data
 * file) rather than editing markup inline.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <Partition />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <OpenSourceSection />
      <Footer />
    </>
  );
}
