/**
 * Google Analytics 4 (GA4) wiring for the site.
 *
 * Set your Measurement ID (looks like "G-XXXXXXXXXX"): either paste it into
 * HARDCODED_GA_ID below, or provide it at build time via the NEXT_PUBLIC_GA_ID
 * environment variable. The Measurement ID is public by design (it ships in the
 * client script), so hardcoding it is fine. When no ID is set, every analytics
 * call becomes a no-op and the site runs exactly as before.
 */

// Paste your GA4 Measurement ID here, e.g. "G-XXXXXXXXXX" (optional if you set
// the NEXT_PUBLIC_GA_ID env var instead).
const HARDCODED_GA_ID = "G-9CZXP2SEGB";

export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_ID || HARDCODED_GA_ID;

export const analyticsEnabled = GA_MEASUREMENT_ID.length > 0;

type GtagParams = Record<string, unknown>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

/** Send a custom event to GA4. Safe to call anywhere; no-ops if GA isn't loaded. */
export function trackEvent(name: string, params: GtagParams = {}): void {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;
  window.gtag("event", name, params);
}

/**
 * Classify an outbound link click into a meaningful GA4 event. Résumé/CV links
 * get their own `resume_click` event; every other outbound link (GitHub,
 * LinkedIn, email, project links, ...) becomes `external_link_click`.
 */
export function trackLinkClick(href: string, label?: string): void {
  if (!href) return;
  const hay = `${href} ${label ?? ""}`.toLowerCase();
  const isResume = /resum|résum|curriculum|\bcv\b|\.pdf(\?|$)/i.test(hay);

  if (isResume) {
    trackEvent("resume_click", { link_url: href, link_text: label });
    return;
  }
  trackEvent("external_link_click", { link_url: href, link_text: label });
}
