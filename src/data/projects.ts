import type { Project, ProjectCategory } from "@/lib/types";

/** Category headings, in display order. */
export const projectCategories: ProjectCategory[] = [
  "Full Stack",
  "AI",
  "Frontend",
  "Backend",
];

/** Language filter chips, in display order. Must match `Project.languages`. */
export const projectLanguages: string[] = [
  "Java",
  "Python",
  "JavaScript",
  "C",
  "C++",
  "TypeScript",
  "HTML/CSS",
];

/**
 * Projects, grouped by `category` and filterable by `languages`. Add an object
 * to render another card; set its category and languages to place and filter it.
 */
export const projects: Project[] = [
  // ------------------------------------------------------------------ Full Stack
  {
    title: "Track and Sort",
    subtitle: "Local-first cross-platform desktop app",
    status: "In development · Private",
    category: "Full Stack",
    languages: ["TypeScript", "Python"],
    description:
      "A frictionless lifestyle-analysis tool for tracking any facet of life from one interface. Its core is a single schema-driven engine: every domain is described once as a set of fields, and that definition powers storage, adaptive forms, faceted and natural-language search, a local analytics engine, and AI capture — so adding a new domain is a data change, not a feature build. A bundled Python AI sidecar (Gemini 2.5 Flash) drafts structured entries from plain English, links, or screenshots, always human-in-the-loop.",
    tags: [
      "Electron",
      "Next.js",
      "React",
      "TypeScript",
      "FastAPI",
      "Gemini",
      "SQLite",
      "PostgreSQL",
    ],
  },
  {
    title: "Airline Reservation",
    subtitle: "Full-stack airline system · The Joy of Coding (Java), PSU",
    status: "Coursework",
    category: "Full Stack",
    languages: ["Java"],
    description:
      "A multi-part airline reservation system built across a term of Java projects: a core domain model (flights, airports, airlines), text-file and XML persistence, a pretty-printed reporting layer, a REST web service on Jetty, and an Android client — all built with Maven, JUnit test-driven development, and continuous integration.",
    tags: ["Java", "Android", "REST", "Jetty", "Maven", "JUnit", "XML"],
    // No link: private course repo.
  },
  {
    title: "AI Fishbowl",
    subtitle: "PSU CS Capstone · lead contributor · deployed on campus",
    status: "Capstone",
    category: "Full Stack",
    languages: ["JavaScript", "Python", "HTML/CSS"],
    description:
      "A voice-driven conversational-AI installation — a talking digital fish in an on-screen aquarium — built as a Portland State University CS capstone and deployed on campus. Users speak to it and it answers aloud: real-time Google Cloud speech-to-text feeds a Gemini 2.5 Flash agent backed by a retrieval-augmented (RAG) knowledge base for PSU CS questions, with Google Cloud text-to-speech and a PixiJS-animated fish reacting in sync. Built on a modular, MCP-style FastAPI backend with an Electron frontend running on edge hardware.",
    tags: [
      "Python",
      "JavaScript",
      "FastAPI",
      "Gemini + RAG",
      "Electron",
      "PixiJS",
      "Speech (STT/TTS)",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/jadsaad06/AI-Fishbowl",
        external: true,
      },
      {
        label: "Wiki",
        href: "https://github.com/jadsaad06/AI-Fishbowl/wiki",
        external: true,
      },
    ],
  },

  // -------------------------------------------------------------------------- AI
  {
    title: "Travel Assistant — LLM Agent",
    subtitle: "Prompt system & backend · 3-person team",
    category: "AI",
    languages: ["Python", "JavaScript"],
    description:
      "A travel-planning assistant powered by Google Gemini function calling and React. An agentic loop decides when to search for flights, hotels, and activities via the Amadeus API across multiple iterations. I designed the prompt system and built the Flask backend.",
    tags: ["Python", "Flask", "React", "Gemini function calling", "Amadeus API"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/satvikmudgal/llmagent-assignment2",
        external: true,
      },
    ],
  },
  {
    title: "Agentic Brochure Generator",
    subtitle: "MCP-based agent · group project",
    category: "AI",
    languages: ["Python"],
    description:
      "An agent that generates marketing brochures through a Model Context Protocol (MCP) client/server setup, pulling imagery from Unsplash. Built for Portland State University's CS410 LLM Agent course.",
    tags: ["Python", "MCP", "Gemini", "Unsplash API"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/satvikmudgal/llmagent-assignment3",
        external: true,
      },
    ],
  },
  {
    title: "LLM Sentiment Analysis with LoRA Adapters",
    subtitle: "CS410 Large Language Models · Portland State University",
    status: "Coursework",
    category: "AI",
    languages: ["Python"],
    description:
      "Fine-tuned Llama-3.2-1B-Instruct for tweet sentiment classification (positive/neutral/negative), comparing four strategies — zero-shot, one-shot, and 3-shot in-context learning against parameter-efficient LoRA fine-tuning. The LoRA adapter (rank 8, alpha 16, applied to the query/value projections with the base model frozen) lifted macro-F1 from 0.58 zero-shot to 0.73, the best result. Built with Hugging Face Transformers, PEFT, and the Trainer API, with precision/recall/F1 evaluation and written error analysis.",
    tags: [
      "Python",
      "Hugging Face",
      "LoRA / PEFT",
      "Fine-tuning",
      "PyTorch",
      "Sentiment Analysis",
    ],
    // No link: local coursework.
  },
  {
    title: "AdventureLLM — LLM Agents Playing Zork",
    subtitle: "CS410 Large Language Models · Group project",
    status: "Coursework",
    category: "AI",
    languages: ["Python"],
    description:
      "A modular pipeline that benchmarks LLM agents playing the classic text adventure Zork I: a ZorkAPI environment adapter, a game-manager episode loop, a dynamic prompt builder, an OpenAI (GPT-4.1-mini) command generator, CSV run logging, and a pandas/matplotlib analysis notebook comparing score, moves, and token usage across runs — with a mock environment for offline iteration.",
    tags: [
      "Python",
      "OpenAI API",
      "LLM Agents",
      "Prompt Engineering",
      "pandas",
      "Benchmarking",
    ],
    // No link: local group coursework.
  },
  {
    title: "Transformer Internals & Attention Analysis",
    subtitle: "CS410 Large Language Models · Portland State University",
    status: "Coursework",
    category: "AI",
    languages: ["Python"],
    description:
      "A study of transformer mechanics: visualizing and interpreting attention layers in an encoder-only model (DistilBERT) to trace how global versus local attention aggregates context, and analyzing decoding controls — causal masking, temperature, and top-k / top-p sampling — via the Transformer Explainer.",
    tags: ["Transformers", "Attention", "DistilBERT", "Tokenization", "Sampling"],
    // No link: local coursework.
  },
  {
    title: "AI Usage Optimization",
    subtitle: "Personal research",
    status: "Private",
    category: "AI",
    description:
      "Recognizing AI usage patterns from personal agent interactions — a dataset and taxonomy built from real conversation logs, with rating references, intent buckets, and a benchmarking script to analyze how AI agents are used.",
    tags: ["Data Analysis", "Benchmarking", "AI", "Shell"],
  },
  {
    title: "Deep Learning",
    subtitle: "CS410 · Portland State University",
    status: "Private",
    category: "AI",
    languages: ["Python"],
    description:
      "Coursework for CS410 Deep Learning: a series of assignments and a final project implemented as Jupyter notebooks, with accompanying written reports.",
    tags: ["Python", "Deep Learning", "Jupyter"],
  },
  {
    title: "Data With Python",
    subtitle: "CS410 · Portland State University",
    status: "Private",
    category: "AI",
    languages: ["Python"],
    description:
      "Version control for CS410 Data With Python at PSU — notebooks covering data manipulation, analysis, and visualization in Python.",
    tags: ["Python", "Data Analysis", "Jupyter"],
  },

  // -------------------------------------------------------------------- Frontend
  {
    title: "Intro to Web Development — Homework",
    subtitle: "CS463 · Portland State University",
    status: "Private",
    category: "Frontend",
    languages: ["HTML/CSS", "JavaScript"],
    description:
      "Homework submissions for CS463 Intro to Web Development at PSU — HTML, CSS, and JavaScript exercises building up core web fundamentals.",
    tags: ["Web Development", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Intro to Web Development — Labs",
    subtitle: "CS463 · Portland State University",
    category: "Frontend",
    languages: ["HTML/CSS", "JavaScript"],
    description:
      "Public lab notebook for CS463 Intro to Web Development — labs spanning semantic HTML, accessibility, CSS, Flexbox, CSS Grid, Bootstrap, JavaScript, and jQuery.",
    tags: ["HTML", "CSS", "Flexbox", "CSS Grid", "Bootstrap", "jQuery"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/satvikmudgal/student-webdev-labs",
        external: true,
      },
    ],
  },
  {
    title: "Portfolio Site",
    subtitle: "This website",
    category: "Frontend",
    languages: ["TypeScript", "HTML/CSS"],
    description:
      "This portfolio — a data-driven Next.js app with reusable section templates, statically exported and hosted on GitHub Pages.",
    tags: ["Next.js", "React", "TypeScript", "CSS"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/satvikmudgal/satvik-mudgal.github.io",
        external: true,
      },
    ],
  },

  // --------------------------------------------------------------------- Backend
  {
    title: "Data Structures in C++",
    subtitle: "CS302 · Prof. Karla Fant, Portland State University",
    status: "Coursework",
    category: "Backend",
    languages: ["C++"],
    description:
      "Three from-scratch C++ programs exploring core data structures. A haunted-house maze traversal built on singly-linked, circular, and array-of linked lists with class inheritance; a two-player card game backed by a templated, generic doubly-linked list with polymorphic card types and shuffling; and a Pokémon battle game using a binary search tree of smart-pointer–managed nodes that keeps trainers' rosters ordered by level. Together they cover manual memory management, templates, inheritance and polymorphism, and linked and tree structures.",
    tags: [
      "C++",
      "Linked Lists",
      "Binary Search Tree",
      "Templates",
      "Smart Pointers",
      "OOP",
    ],
    // No links: PSU internal GitLab + active-course coursework.
  },
  {
    title: "Custom Authentication Service",
    subtitle: "Standalone auth microservice",
    status: "Private",
    category: "Backend",
    description:
      "A standalone, customizable authentication service with a dedicated PostgreSQL database, designed to plug into any application that needs user authentication and authorization.",
    tags: ["PostgreSQL", "Authentication", "Backend"],
  },
  {
    title: "Introduction to Operating Systems",
    subtitle: "CS333 · Portland State University",
    status: "Private",
    category: "Backend",
    languages: ["C"],
    description:
      "Systems programming in C: classical ciphers (Caesar, decimation), an `arvik` archive utility, a multi-process encryption tool using fork and pipes, and a socket-based client/server — covering processes, IPC, concurrency, and file I/O.",
    tags: ["C", "Operating Systems", "Processes", "IPC", "Sockets"],
  },
  {
    title: "Principles of Programming Languages",
    subtitle: "CS358 · Portland State University",
    status: "Private",
    category: "Backend",
    languages: ["Python"],
    description:
      "A multi-phase language interpreter in Python: a Lark grammar, an AST, and an evaluator with a pytest test suite — exploring parsing, language semantics, and interpreter design.",
    tags: ["Python", "Interpreters", "Lark", "Parsing", "ASTs"],
  },
];
