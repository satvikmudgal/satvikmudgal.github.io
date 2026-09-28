# Project Inventory — Skills & Technologies

A catalog of every project across Satvik's repos, **broken down to the individual
assignment/program level** for the coursework repos, with the technology and
marketable skill each one demonstrates. Built as a reference for a later pass on
the portfolio (grouping, a skills matrix, or per-project cards).

**Status legend:** 🌐 public (linkable) · 🔒 private (describe, don't link) · 🏫 PSU
internal GitLab · ⚠️ excluded.

> Confidence notes: coursework file/folder names and READMEs were read directly.
> Items marked _(inferred)_ were not opened at the source level (e.g. notebooks,
> PDFs) — verify the exact topic/library before publishing those specifics.

---

## 1. Independent & flagship projects

| # | Project | Repo | Vis | Tech / marketable skills |
|---|---------|------|-----|--------------------------|
| 1 | **Track and Sort** | track-and-sort | 🔒 | Electron, Nextron, Next.js, React, TypeScript, Tailwind CSS, Framer Motion; Python FastAPI + Pydantic; Google Gemini 2.5 Flash; SQLite (better-sqlite3), PostgreSQL (pg); argon2, Electron safeStorage; httpx + BeautifulSoup. Skills: schema-driven architecture, desktop app dev, local-first data, secure IPC (contextBridge), human-in-the-loop LLM integration, OCR/vision capture, analytics engine, authN/authZ. |
| 1b | **AI Fishbowl** (PSU CS **Capstone**, lead contributor, deployed on campus) | jadsaad06/AI-Fishbowl | 🌐 public | Voice-driven conversational-AI installation (a talking digital fish). Google Cloud STT → **Gemini 2.5 Flash + RAG** → Google Cloud TTS; **FastAPI / MCP-style** backend; **Electron + PixiJS** animated frontend; edge hardware. Languages: JavaScript, Python. Skills: multimodal AI, speech interfaces, RAG, agent orchestration, full-stack + hardware integration, deployed product. |
| 2 | **Custom Authentication Service** | custom-authentication | 🔒 (empty) | PostgreSQL, authentication/authorization microservice design (planned — repo is a skeleton). |

## 2. AI / LLM agent projects

| # | Project | Repo | Vis | Tech / marketable skills |
|---|---------|------|-----|--------------------------|
| 3 | **Travel Assistant (LLM Agent)** | llmagent-assignment2 | 🌐 | Python, Flask, React/Vite; Google Gemini **function calling**; Amadeus API (flights/hotels/activities); agentic loop; IATA code conversion. Satvik's role: prompt system + backend. Skills: LLM tool-use agents, prompt engineering, REST integration. |
| 4 | **Agentic Brochure Generator** | llmagent-assignment3 | 🌐 | Python; **Model Context Protocol (MCP)** client + server; Gemini; Unsplash API. Skills: MCP tool/server design, agentic content generation. |
| 4b | **Retrieval-Augmented QA (RAG)** (CS510 LLM Agents, group) | planetaska/rag6 | 🌐 public | DSPy PDF-RAG pipeline (LangChain chunking → **Chroma** vector store → top-k retrieval → **chain-of-thought** via **Gemini 2.0 Flash**) + **Streamlit** UI, over RAG-QA and BioASQ (biomedical) corpora; broader group system also uses BGE embeddings + Ollama (llama3.2:3b). Satvik: Question 3 + Streamlit UI. Skills: RAG, vector search, DSPy, LangChain, prompt engineering. |
| 5 | **AI Usage Optimization** | ai-usage-optimization | 🔒 | Shell benchmarking; dataset + taxonomy from real agent conversation logs (rating references, intent buckets, pattern tests). Skills: data analysis, evaluation/benchmark design, LLM-usage analytics. ⚠️ contains personal prompt logs — describe concept only. |

## 3. Research

| # | Project | Source | Vis | Tech / marketable skills |
|---|---------|--------|-----|--------------------------|
| 6 | **Sieve — Fine-Grained Access Control** (DIPr Lab; already in Experience) | external (DIPrLab/Sieve) | 🌐 | Java, MySQL; Guarded Expressions; query rewriting; fine-grained access control; caching (hit/soft-hit/miss analysis); workload generation (36,436-user simulation); DB internals & index-based query optimization. |

## 4. Open source / localization

| # | Project | Repo | Vis | Tech / marketable skills |
|---|---------|------|-----|--------------------------|
| 7 | **Marathi Python Documentation** | python-docs-mr | 🌐 (3★,1 fork) | Localization/i18n, technical writing, Sphinx docs toolchain (Makefile), open-source collaboration, Marathi↔English. |

## 5. CS410 — Deep Learning · 🔒 `deep_learning-psu` (Jupyter)
Individual deliverables (Python / Jupyter; specific per-assignment topics _(inferred)_ — read notebooks to confirm libraries/topics):

| # | Project | Tech / marketable skills |
|---|---------|--------------------------|
| 8 | HW1 | Deep learning fundamentals; Python, Jupyter, NumPy _(inferred: NN basics)_ |
| 9 | HW2 | Neural networks _(inferred)_ |
| 10 | HW3 | Neural networks _(inferred)_ |
| 11 | HW4 | Neural networks _(inferred)_ |
| 12 | **Final Project** | Applied deep learning project + written report _(topic TBD — read `satvik_final-proj.ipynb`)_ |

## 6. CS410 — Data With Python · 🔒 `psu-data-with-python` (Jupyter)

| # | Project | Tech / marketable skills |
|---|---------|--------------------------|
| 13 | Assignment 1 | Python data analysis; pandas/NumPy/matplotlib _(inferred)_ |
| 14 | **Data With Python Project** | End-to-end data wrangling, analysis & visualization _(inferred)_ |

## 6b. CS410 — Large Language Models · 🗄️ external SSD (not on GitHub/GitLab)
Fall 2025. Individual assignments + a group final, across the Hugging Face / PyTorch / OpenAI ecosystem.

| # | Project | Tech / marketable skills |
|---|---------|--------------------------|
| 49 | **Assignment 1 — Transformer Internals & Attention** | Attention-layer visualization on **DistilBERT** (encoder-only) in Google Colab; analysis of causal masking, temperature, and top-k / top-p sampling. Skills: transformer architecture, attention interpretation, decoding/sampling. |
| 50 | **Assignment 2 — Sentiment Analysis + LoRA Adapters** (`LLM_assignment2.ipynb`) | **Llama-3.2-1B-Instruct** on `cardiffnlp/tweet_sentiment_multilingual`; zero-/one-/3-shot in-context learning vs **LoRA fine-tuning (PEFT)** (r=8, α=16, q/v projections, base frozen); HuggingFace Transformers/PEFT/datasets/evaluate, Trainer, sklearn. Result: macro-F1 **0.58 → 0.73** with LoRA. Skills: parameter-efficient fine-tuning, prompt engineering, evaluation (P/R/F1), error analysis. |
| 51 | **AdventureLLM — LLM Agents on Zork I** (group final, Group 2) | Modular agent pipeline (ZorkAPI adapter → game manager → prompt builder → LLM runner → CSV logging → analysis); **OpenAI GPT-4.1-mini**; ZorkAPI (Flask/Docker, RESTful Z-machine); pandas/matplotlib; mock env for offline runs. Skills: LLM agents, agent-environment loops, API integration, experiment design/benchmarking, data analysis, Python packaging, Docker. |
| 52 | Quickfire reflections (we have #6 — Gemini 3 / Antigravity) | Weekly technical-writing / industry-analysis essays (not a coding project). |

> **Recovered:** the "missing" sentiment-analysis/adapters code is `LLM_assignment2.ipynb`. ⚠️ That notebook contains a **hardcoded Hugging Face access token** — it should be revoked and the notebook must never be committed with it.

## 7. CS358 — Principles of Programming Languages · 🔒 `cs358-...` (Python)

| # | Project | Tech / marketable skills |
|---|---------|--------------------------|
| 15 | **Language Interpreter** (multi-phase: Milestones 2 & 3) | Python; **Lark** parser (`expr.lark`); interpreter/evaluator (`interp.py`); AST construction; grammar/language design; pytest test suites. Skills: parsing, interpreters, language semantics, TDD. |

## 8. CS333 — Intro to Operating Systems · 🔒 `CS333_...` (C)
Systems programming in C (each lab is its own project):

| # | Project | Tech / marketable skills |
|---|---------|--------------------------|
| 16 | **Lab 1 — Ciphers** (`caesar.c`, `decimation.c`) | C, string manipulation, classical ciphers, Makefiles |
| 17 | **Lab 2 — `arvik` archiver** (`arvik.c/.h`) | C, file I/O, archive/serialization format, custom data structures |
| 18 | **Lab 3 — `mproc_crypt`** (multi-process encryption) | C, processes (`fork`), IPC (pipes), concurrency, encryption |
| 19 | **Lab 4 — `rockem` client/server** | C, sockets, client-server networking, IPC |
| 20 | Video Assignments 1–8 | Technical communication / explaining systems concepts (recorded) |

## 9. The Joy of Coding — Java & Android · 🔒 `JoyOfCodingWinter2025` (Java/Maven)
The "Airline" app evolves across assignments; koans are language drills. Cross-cutting: **Maven** build, **JUnit** TDD, **GitHub Actions CI**, Git workflow.

| # | Project | Tech / marketable skills |
|---|---------|--------------------------|
| 21 | **App Classes** (`airline` core) | Java, OOP class design |
| 22 | **Text File** persistence | Java file I/O, dump/load, serialization |
| 23 | **Pretty Print** | Java formatting/reporting, API design |
| 24 | **Koans** (`koans`) | Java language fundamentals, JUnit, TDD |
| 25 | **XML** persistence | Java, XML parsing/marshalling (JAXB/DOM) |
| 26 | **REST service** (`airline-web`) | Java, REST API, Jetty/servlets, HTTP client-server |
| 27 | **Android app** (`airline-android`) | Java, Android SDK, mobile UI |

## 10. CS463 — Intro to Web Development — Homework · 🔒 `student-repo-webdev`

| # | Project | Tech / marketable skills |
|---|---------|--------------------------|
| 28 | **HW1 — Hello** (html/css/js) | HTML, CSS, JavaScript basics |
| 29 | **HW2 — Selectors & Webpage** | CSS selectors, page layout |
| 30 | **HW3 — Starships** (js) | JavaScript, DOM manipulation |
| 31 | **HW4 — Code Review** | Code review practice, collaboration/process |

## 11. CS463 — Intro to Web Development — Labs · 🌐 `student-webdev-labs`
Each lab folder is a distinct, self-describing web skill:

| # | Project | Tech / marketable skills |
|---|---------|--------------------------|
| 32 | 01-html | Semantic HTML |
| 33 | 02-a11y | Web accessibility (a11y), ARIA |
| 34 | 03-css | CSS styling |
| 35 | 04-flexbox | CSS Flexbox layout |
| 36 | 05-css-grid | CSS Grid layout |
| 37 | 06-bootstrap | Bootstrap framework |
| 38 | 07-javascript | JavaScript |
| 39 | 08-jquery | jQuery |

## 12. CS314 — Elementary Software Engineering · 🌐 `chatroom-frontend-repo`

| # | Project | Tech / marketable skills |
|---|---------|--------------------------|
| 40 | **Chatroom frontend** (term project) | JavaScript, React (Create React App), UI development, software-engineering process/teamwork |

## 13. CS302 — Data Structures · 🏫 GitLab (C++) — local at `~/Computer Science/CS302 Projects/`

| # | Project | Tech / marketable skills |
|---|---------|--------------------------|
| 41 | **Program 1 — Haunted House Maze** | C++; singly-linked, circular, and array-of linked lists; class inheritance; dynamic memory |
| 42 | **Program 2 — Card Game** | C++ **templates** (generic doubly-linked list/Deck); polymorphic card types; shuffling |
| 43 | **Program 3 — Pokémon BST Battle** | C++; **binary search tree**; **smart pointers** (`shared_ptr`); ordered insertion |

## 14. Web / meta / learning repos

| # | Project | Repo | Vis | Tech / marketable skills |
|---|---------|------|-----|--------------------------|
| 44 | **Portfolio Site (this)** | satvik-mudgal.github.io | 🌐 | Next.js, React, TypeScript, CSS, static export, GitHub Pages |
| 45 | **Portfolio Site v1** | satvikmudgal.github.io | 🌐 | HTML, CSS |
| 46 | GitHub Profile config | satvikmudgal | 🌐 | GitHub profile README/config |
| 47 | Introduction to GitHub | skills-introduction-to-github | 🌐 | Git/GitHub fundamentals |
| 48 | GitHub Desktop Tutorial | desktop-tutorial | 🔒 | Git basics (tutorial stub) |
| — | ⚠️ Undergraduate_Housing | — | 🔒 | Excluded — personal financial docs, not a project |

---

## Consolidated marketable-skills index (skill → where it's demonstrated)

**Languages:** TypeScript (Track&Sort, portfolio) · JavaScript (chatroom, webdev, Travel Assistant FE) · Python (LLM agents, DL, Data w/ Python, CS358, AI-usage) · Java (Joy of Coding, Sieve) · C (CS333) · C++ (CS302) · SQL (Sieve, Track&Sort)

**Frontend / web:** React (Track&Sort, chatroom, Travel Assistant) · Next.js (Track&Sort, portfolio) · HTML/CSS · Accessibility (a11y) · Flexbox · CSS Grid · Bootstrap · jQuery · Framer Motion · Tailwind CSS

**Backend / APIs:** FastAPI · Flask · Jetty/REST (Java) · Node.js · REST API integration (Amadeus, Unsplash) · authentication (argon2, sessions)

**Mobile / desktop:** Android SDK (Joy of Coding) · Electron/Nextron (Track&Sort)

**Databases:** PostgreSQL · SQLite · MySQL · query optimization · fine-grained access control

**AI / LLM:** Gemini function calling · agentic loops · Model Context Protocol (MCP) · prompt engineering · human-in-the-loop design · OCR/vision capture · deep learning (CS410) · LLM-usage benchmarking · **LoRA / PEFT fine-tuning** · Hugging Face Transformers · OpenAI API · transformer internals & attention · in-context learning (zero/few-shot) · LLM agents (Zork benchmarking) · RAG (retrieval-augmented generation) · DSPy · vector databases (Chroma) · chain-of-thought prompting

**Systems / CS fundamentals:** processes & `fork` · IPC (pipes) · sockets/networking · concurrency · ciphers/encryption · archive/file formats · operating-systems concepts

**Data structures & PL:** linked lists (singly/circular/array-of) · doubly-linked lists · binary search trees · smart pointers · templates/generics · interpreters & parsers (Lark) · ASTs · language semantics

**Data / ML tooling:** pandas/NumPy/matplotlib _(inferred)_ · Jupyter · data wrangling & visualization

**Engineering practice:** Maven · JUnit / pytest / TDD · GitHub Actions CI · Git workflows · code review · technical writing / localization

---

## To fill in later (needs source reading, deferred to save usage)
- **CS410 Deep Learning:** exact per-HW topics and framework (PyTorch vs TensorFlow) — read the 5 notebooks + 2 report PDFs.
- **CS410 Data With Python:** confirm libraries and the project's dataset/goal.
- **CS358 interpreter:** which language it interprets and how far the milestones went.
- **CS302 (local):** could split the consolidated portfolio card into 3 if desired.
