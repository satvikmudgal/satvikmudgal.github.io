import { contact } from "@/data/contact";
import { SECTIONS } from "@/lib/sections";
import { SmartLink } from "./SmartLink";

/**
 * Contact / job-application footer. Renders a definition list of application
 * fields (filled values or muted placeholders) plus copyright and a Privacy
 * Policy link.
 */
export function Footer() {
  return (
    <footer id={SECTIONS.contact} className="footer">
      <div className="footer-inner">
        <div className="footer-head">
          <h2 className="section-title">{contact.heading}</h2>
          {contact.lead && <p className="footer-lead">{contact.lead}</p>}
        </div>

        <dl className="contact-grid">
          {contact.fields.map((field) => (
            <div key={field.label} className="contact-item">
              <dt className="contact-label">{field.label}</dt>
              <dd className="contact-value">
                {field.value ? (
                  field.href ? (
                    <SmartLink href={field.href} external={field.external}>
                      {field.value}
                    </SmartLink>
                  ) : (
                    field.value
                  )
                ) : (
                  <span className="contact-placeholder">
                    {field.placeholder ?? "—"}
                  </span>
                )}
              </dd>
            </div>
          ))}
        </dl>

        <div className="footer-bottom">
          <span className="footer-copy">{contact.copyright}</span>
          <a className="footer-link" href={contact.privacyHref}>
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
