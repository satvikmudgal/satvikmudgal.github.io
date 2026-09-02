"use client";

import { useState } from "react";
import type { ImageAsset } from "@/lib/types";

/**
 * Simple image carousel for the project overlay: one image at a time with
 * prev/next controls and dot indicators. Swap the placeholder images in the
 * project data for real screenshots (or a <video>) later.
 */
export function Carousel({ images }: { images: ImageAsset[] }) {
  const [index, setIndex] = useState(0);
  const count = images.length;

  if (count === 0) {
    return <div className="carousel carousel--empty">Preview coming soon</div>;
  }

  const go = (delta: number) => setIndex((i) => (i + delta + count) % count);
  const current = images[index];

  return (
    <div className="carousel">
      <div className="carousel__viewport">
        <img
          src={current.src}
          alt={current.alt}
          className="carousel__img"
          key={current.src}
        />
      </div>

      {count > 1 && (
        <>
          <button
            type="button"
            className="carousel__nav carousel__nav--prev"
            onClick={() => go(-1)}
            aria-label="Previous image"
          >
            ‹
          </button>
          <button
            type="button"
            className="carousel__nav carousel__nav--next"
            onClick={() => go(1)}
            aria-label="Next image"
          >
            ›
          </button>
          <div className="carousel__dots" role="tablist" aria-label="Choose image">
            {images.map((image, i) => (
              <button
                key={image.src}
                type="button"
                className={`carousel__dot${i === index ? " is-active" : ""}`}
                onClick={() => setIndex(i)}
                aria-label={`Image ${i + 1} of ${count}`}
                aria-current={i === index}
              />
            ))}
          </div>
          <span className="carousel__counter">
            {index + 1} / {count}
          </span>
        </>
      )}
    </div>
  );
}
