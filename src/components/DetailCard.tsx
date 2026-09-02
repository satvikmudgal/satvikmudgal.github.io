"use client";

import type { DetailItem } from "@/lib/types";
import { Collapsible } from "./Collapsible";

/**
 * A single collapsible detail: a title that expands to a paragraph and an
 * optional image grid.
 */
export function DetailCard({ title, body, images }: DetailItem) {
  return (
    <Collapsible
      containerClassName="detail-card"
      triggerClassName="detail-trigger"
      trigger={(open) => (
        <>
          <span>{title}</span>
          <span className="detail-icon">{open ? "−" : "+"}</span>
        </>
      )}
    >
      <div className="detail-body">
        <p>{body}</p>
        {images && images.length > 0 && (
          <div className="detail-images">
            {images.map((image) => (
              <img
                key={image.src}
                src={image.src}
                alt={image.alt}
                className="detail-image"
              />
            ))}
          </div>
        )}
      </div>
    </Collapsible>
  );
}
