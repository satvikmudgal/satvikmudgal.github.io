import { navItems } from "@/data/nav";
import { site } from "@/data/site";
import { SECTIONS } from "@/lib/sections";
import { ThemeToggle } from "./ThemeToggle";

/**
 * Fixed top navigation. Links are absolute-with-hash (`/#section`) so they work
 * from any page (e.g. the Privacy page) — navigating home and scrolling to the
 * target section.
 */
export function Navbar() {
  return (
    <header className="navbar">
      <nav className="nav-inner" aria-label="Primary">
        <a href={`/#${SECTIONS.top}`} className="nav-brand">
          {site.name}
        </a>
        <div className="nav-right">
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={`/#${item.id}`}>{item.label}</a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
