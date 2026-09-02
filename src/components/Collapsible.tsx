"use client";

import { useState, type ReactNode } from "react";

interface CollapsibleProps {
  /** Class for the outer wrapper element. */
  containerClassName?: string;
  /** Class for the clickable trigger button. */
  triggerClassName?: string;
  /**
   * Renders the trigger's contents. Receives the current open state so callers
   * can place their own +/- indicator wherever their layout needs it.
   */
  trigger: (open: boolean) => ReactNode;
  /** Content revealed when open. */
  children: ReactNode;
  defaultOpen?: boolean;
}

/**
 * Reusable expand/collapse primitive. Owns the open state and the trigger
 * button; callers supply the trigger markup and the revealed body. Powers both
 * the experience cards and the inner detail cards.
 */
export function Collapsible({
  containerClassName,
  triggerClassName,
  trigger,
  children,
  defaultOpen = false,
}: CollapsibleProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={containerClassName}>
      <button
        type="button"
        className={triggerClassName}
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
      >
        {trigger(open)}
      </button>
      {open && children}
    </div>
  );
}
