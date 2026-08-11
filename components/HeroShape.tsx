"use client";

import { useEffect, useRef } from "react";

const START_WIDTH = 50;
const END_WIDTH = 100;
const KEYFRAME_START = 0.05;
const KEYFRAME_END = 0.5;

export default function HeroShape() {
  const shapeRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const shape = shapeRef.current;
    const image = imageRef.current;
    if (!shape || !image) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      shape.style.width = `${END_WIDTH}%`;
      image.style.opacity = "1";
      return;
    }

    let raf = 0;

    const update = () => {
      const rect = shape.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = vh + rect.height;
      const progress = Math.min(
        1,
        Math.max(0, total > 0 ? (vh - rect.top) / total : 1)
      );

      let width: number;
      let opacity: number;
      if (progress <= KEYFRAME_START) {
        width = START_WIDTH;
        opacity = 0;
      } else if (progress >= KEYFRAME_END) {
        width = END_WIDTH;
        opacity = 1;
      } else {
        const t = (progress - KEYFRAME_START) / (KEYFRAME_END - KEYFRAME_START);
        width = START_WIDTH + (END_WIDTH - START_WIDTH) * t;
        opacity = t;
      }

      shape.style.width = `${width}%`;
      image.style.opacity = opacity.toString();
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      className="shape"
      ref={shapeRef}
      aria-hidden="true"
      style={{ width: "50%" }}
    >
      <div
        className="image-shape"
        ref={imageRef}
        style={{ opacity: 0, willChange: "opacity" }}
      />
    </div>
  );
}
