import type { Link } from "@/lib/types";
import { SmartLink } from "./SmartLink";

/**
 * Pill-style link (the `experience-link` look) used for actions and related
 * resources. Accepts an optional `className` from the data for one-off variants.
 */
export function LinkButton({ label, href, external, className }: Link) {
  return (
    <SmartLink
      href={href}
      external={external}
      className={className ? `experience-link ${className}` : "experience-link"}
    >
      {label}
    </SmartLink>
  );
}
