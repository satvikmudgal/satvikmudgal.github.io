"use client";

import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";
import { trackLinkClick } from "@/lib/analytics";

type SmartLinkProps = {
  href: string;
  /** When true, opens in a new tab with safe rel attributes. */
  external?: boolean;
  children: ReactNode;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

/**
 * A plain anchor that centralizes external-link behavior so no component has to
 * remember `target`/`rel` by hand. Outbound clicks (external, mailto, tel) are
 * reported to analytics; internal links are not.
 */
export function SmartLink({
  href,
  external,
  children,
  onClick,
  ...rest
}: SmartLinkProps) {
  const externalProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  const isOutbound =
    external === true || /^(https?:|mailto:|tel:)/i.test(href);

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (isOutbound) {
      const label = event.currentTarget.textContent?.trim() || undefined;
      trackLinkClick(href, label);
    }
    onClick?.(event);
  };

  return (
    <a href={href} {...externalProps} {...rest} onClick={handleClick}>
      {children}
    </a>
  );
}
