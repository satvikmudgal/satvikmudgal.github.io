import type { ExperienceEntry } from "@/lib/types";

/**
 * Experience entries, newest first. Add an object to this array to render an
 * additional card — no component changes required.
 */
export const experiences: ExperienceEntry[] = [
  {
    role: "Research Intern",
    org: "Database and Internet Privacy Lab [DIPr] · Portland State University",
    date: "May 2024 – September 2024",
    actions: [
      {
        label: "View Findings ↗",
        href: "/poster.pdf",
        external: true,
        className: "view-findings",
      },
    ],
    details: [
      {
        title: "Research & Project",
        body: "Implemented and extended Sieve, a middleware system that rewrites database queries using Guarded Expressions (GEs) to make fine-grained access control scalable across dynamic IoT environments. Work built upon the published paper by Pappachan et al. (VLDB 2020).",
      },
      {
        title: "Technical Work",
        body: "Built a Workload Generator simulating 36,436 real university users via MySQL. Implemented policy generation, query generation, and caching logic for Guarded Expressions. Benchmarked hit/soft-hit/miss rates across varying policy-per-query loads and analyzed caching effectiveness on query execution time.",
      },
      {
        title: "Technologies Used",
        body: "MySQL, Java, relational database internals, index-based query optimization, access control policy design, fine-grained access control systems.",
      },
      {
        title: "Recognition & Presentations",
        body: "Presented research poster at the PSU Maseeh College Research Week Open House and the PSU Annual Undergraduate Research & Mentorship Program (URMP) Poster Competition. Placed 2nd Runner-Up at the URMP Poster Competition.",
        images: [
          { src: "/presentation-1.jpg", alt: "Presentation photo" },
          { src: "/presentation-2.jpg", alt: "Presentation photo" },
        ],
      },
    ],
    links: [
      { label: "DIPr Website", href: "https://diprlab.pdx.edu/", external: true },
      {
        label: "Sieve Github",
        href: "https://github.com/DIPrLab/Sieve",
        external: true,
      },
      {
        label: "Me at DIPr",
        href: "https://diprlab.pdx.edu/author/satvik-mudgal/",
        external: true,
      },
    ],
  },
];
