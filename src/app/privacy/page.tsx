import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Satvik Mudgal",
  description:
    "How this portfolio site uses analytics and what visitor data is collected.",
};

/**
 * Privacy Policy page. Reached from the footer's "Privacy Policy" link.
 * Update the "last updated" date whenever the policy changes.
 */
export default function PrivacyPolicy() {
  return (
    <main className="section legal">
      <h1 className="section-title">Privacy Policy</h1>
      <div className="about-text">
        <p>
          This site is a personal portfolio. It does not require you to create
          an account, and it does not ask you to submit personal information to
          browse it.
        </p>
        <p>
          <strong>Analytics.</strong> This site uses Google Analytics 4, a web
          analytics service provided by Google, to understand how visitors use
          the site. Google Analytics uses cookies and similar technologies to
          collect aggregated, anonymized usage data — such as the pages you
          view, the site or link that referred you, your approximate location
          (derived from your IP address, which Google truncates and does not
          share with the site owner), your device type, browser, and
          operating system, and interactions such as opening a project's
          details or clicking an outbound link. This information is used only to
          gauge interest in the site and improve it.
        </p>
        <p>
          <strong>What is not collected.</strong> The analytics used here do not
          identify you personally. The site owner sees counts and trends, not
          names, email addresses, or the identity of individual visitors.
        </p>
        <p>
          <strong>Your choices.</strong> You can block analytics cookies through
          your browser settings, use a content blocker, or install Google&rsquo;s
          official{" "}
          <a
            className="experience-link"
            href="https://tools.google.com/dlpage/gaoptout"
            target="_blank"
            rel="noopener noreferrer"
          >
            opt-out browser add-on
          </a>
          . You can also learn how Google uses data at{" "}
          <a
            className="experience-link"
            href="https://policies.google.com/technologies/partner-sites"
            target="_blank"
            rel="noopener noreferrer"
          >
            policies.google.com
          </a>
          .
        </p>
        <p>
          <strong>Contact.</strong> Questions about this policy or your data can
          be sent to{" "}
          <a className="experience-link" href="mailto:satvik.mudgal@gmail.com">
            satvik.mudgal@gmail.com
          </a>
          .
        </p>
        <p>
          <em>Last updated: September 27, 2026.</em>
        </p>
      </div>
      <div className="project-links">
        <a className="experience-link" href="/">
          ← Back to portfolio
        </a>
      </div>
    </main>
  );
}
