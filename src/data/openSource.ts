import type { Project } from "@/lib/types";

/**
 * Open-source / community contributions. Rendered with the same ProjectCard as
 * featured projects.
 */
export const openSource: Project[] = [
  {
    title: "Marathi Python Documentation",
    subtitle: "Localization contributor",
    description:
      "Contributing to the localization of the official Python language documentation into Marathi, making the language's core reference accessible to Marathi speakers.",
    tags: ["Open Source", "Localization", "Python"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/satvikmudgal/python-docs-mr",
        external: true,
      },
    ],
  },
];
