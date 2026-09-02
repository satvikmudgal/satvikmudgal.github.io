import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Satvik Mudgal",
  description: "Privacy policy for satvikmudgal.com (placeholder).",
};

/**
 * Placeholder Privacy Policy page. Replace the body copy with a real policy
 * before relying on it. Reached from the footer's "Privacy Policy" link.
 */
export default function PrivacyPolicy() {
  return (
    <main className="section legal">
      <h1 className="section-title">Privacy Policy</h1>
      <div className="about-text">
        <p>
          <em>
            This is a placeholder. A complete privacy policy will be added here.
          </em>
        </p>
        <p>
          This site is a personal portfolio. Describe here what information (if
          any) is collected, how it is used, any third-party services or
          analytics in use, how visitors can contact you about their data, and
          the date this policy was last updated.
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
