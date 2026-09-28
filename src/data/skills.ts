import type { SkillGroup } from "@/lib/types";

/**
 * Skills grouped into category cards, rendered by SkillsSection. Keep every
 * item evidenced by a real project or course in the portfolio.
 */
export const skills: SkillGroup[] = [
  {
    label: "Programming Languages",
    items: ["Java", "Python", "C", "C++", "JavaScript", "TypeScript", "SQL"],
  },
  {
    label: "Frameworks",
    items: [
      "REST",
      "React",
      "Next.js",
      "Node.js",
      "Android",
      "Electron",
      "PixiJS",
      "AnimeJS",
      "Framer Motion",
      "FastAPI",
      "Flask",
    ],
  },
  {
    label: "Databases",
    items: [
      "PostgreSQL",
      "MySQL",
      "SQLite",
      "ChromaDB",
      "Query Indexing",
      "Fine-Grained Access Control",
    ],
  },
  {
    label: "Artificial Intelligence",
    items: [
      "PyTorch",
      "TensorFlow",
      "LangChain",
      "RAG",
      "DSPy",
      "LoRA/PEFT",
      "Model Context Protocol",
      "Gemini Embeddings",
      "Neural Network Design",
    ],
  },
  {
    label: "Tooling",
    items: [
      "Git",
      "Linux",
      "Docker",
      "GCP",
      "Maven",
      "JUnit",
      "Gemini 2.5 flash",
      "CUDA",
      "MPS",
      "WebSockets",
      "TCP/IP",
      "Android Studio",
    ],
  },
];
