import type { SiteConfig } from "@/lib/types";

/**
 * Site-wide identity and metadata. Edit here to update the hero and the
 * document <head> across the whole site.
 */
export const site: SiteConfig = {
  name: "Satvik Mudgal",
  eyebrow: "B.S. Computer Science · Portland State University",
  // tagline intentionally omitted — add a string here to render it in the hero.
  social: [
    { label: "Email", href: "mailto:satvik.mudgal@gmail.com" },
    { label: "GitHub", href: "https://github.com/satvikmudgal", external: true },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/satvikmudgal/",
      external: true,
    },
  ],
  meta: {
    title: "Satvik Mudgal",
    description:
      "Computer Science undergraduate at Portland State University — research and engineering in databases and privacy.",
  },
};
