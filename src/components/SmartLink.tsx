import type { AnchorHTMLAttributes, ReactNode } from "react";

type SmartLinkProps = {
  href: string;
  /** When true, opens in a new tab with safe rel attributes. */
  external?: boolean;
  children: ReactNode;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

/**
 * A plain anchor that centralizes external-link behavior so no component has to
 * remember `target`/`rel` by hand.
 */
export function SmartLink({ href, external, children, ...rest }: SmartLinkProps) {
  const externalProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <a href={href} {...externalProps} {...rest}>
      {children}
    </a>
  );
}
