import { site } from "@/data/site";
import { SECTIONS } from "@/lib/sections";
import { SmartLink } from "./SmartLink";

/**
 * Full-viewport hero, driven entirely by `site` data (name, eyebrow, optional
 * tagline, and social links).
 */
export function Hero() {
  return (
    <main id={SECTIONS.top} className="hero">
      <div className="hero-content">
        <p className="hero-eyebrow">{site.eyebrow}</p>
        <h1 className="hero-name">{site.name}</h1>
        {site.tagline && <p className="hero-tagline">{site.tagline}</p>}
        <div className="hero-links">
          {site.social.map((link) => (
            <SmartLink key={link.href} href={link.href} external={link.external}>
              {link.label}
            </SmartLink>
          ))}
        </div>
      </div>
    </main>
  );
}
