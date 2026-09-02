import type { SkillGroup } from "@/lib/types";

/**
 * Skills grouped by area. Every item here is evidenced by a real project or
 * course in the portfolio — keep it that way when editing.
 */
export const skills: SkillGroup[] = [
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "Java", "C", "SQL"],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    label: "Backend & Desktop",
    items: ["Node.js", "FastAPI", "Flask", "Electron"],
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "SQLite", "MySQL", "Query optimization"],
  },
  {
    label: "AI & LLM",
    items: [
      "Gemini function calling",
      "Agentic loops",
      "MCP",
      "Prompt engineering",
      "Deep learning",
    ],
  },
  {
    label: "Security & Systems",
    items: ["argon2 auth", "Access control", "Operating systems"],
  },
];
