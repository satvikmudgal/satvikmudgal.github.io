import type { ContactConfig } from "@/lib/types";

/**
 * Contact / job-application footer. Known details are filled in; the rest are
 * placeholders ready to complete. Fill a field by adding `value` (and `href`
 * for links); remove `placeholder` once done.
 */
export const contact: ContactConfig = {
  heading: "Contact",
  lead: "Everything an application typically asks for, in one place. Placeholder fields are ready to fill in.",
  fields: [
    { label: "Name", value: "Satvik Mudgal" },
    {
      label: "Email",
      value: "satvik.mudgal@gmail.com",
      href: "mailto:satvik.mudgal@gmail.com",
    },
    { label: "Phone", placeholder: "Add phone number" },
    { label: "Location", placeholder: "Add location (city, state)" },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/satvikmudgal",
      href: "https://www.linkedin.com/in/satvikmudgal/",
      external: true,
    },
    {
      label: "GitHub",
      value: "github.com/satvikmudgal",
      href: "https://github.com/satvikmudgal",
      external: true,
    },
    { label: "Portfolio", placeholder: "Add portfolio / website URL" },
    { label: "Résumé / CV", placeholder: "Add résumé link" },
    { label: "Work Authorization", placeholder: "Add work authorization status" },
    { label: "Availability", placeholder: "Add availability / earliest start date" },
    { label: "Desired Role", placeholder: "Add target role(s)" },
    { label: "References", placeholder: "Available upon request" },
  ],
  privacyHref: "/privacy/",
  copyright: `© ${new Date().getFullYear()} Satvik Mudgal`,
};
