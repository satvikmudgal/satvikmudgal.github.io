/**
 * A row of small chip labels (technologies, topics). Reused by project cards
 * and the skills section.
 */
export function TagList({ items }: { items: string[] }) {
  return (
    <ul className="tag-list">
      {items.map((item) => (
        <li key={item} className="tag">
          {item}
        </li>
      ))}
    </ul>
  );
}
