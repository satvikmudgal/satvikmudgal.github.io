/**
 * Horizontal gradient divider. Use `size="sm"` for the tighter in-card variant.
 */
export function Partition({ size }: { size?: "sm" }) {
  return <div className={size === "sm" ? "partition-sm" : "partition"} />;
}
