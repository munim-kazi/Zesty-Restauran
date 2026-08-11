"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const SLIDES = [
  { src: "/images/slide_1.avif", alt: "" },
  { src: "/images/slide_2.avif", alt: "" },
  { src: "/images/slide_3.avif", alt: "" },
  { src: "/images/slide_4.avif", alt: "" },
];

export default function Slider() {
  const [index, setIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const maskRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = maskRef.current;
    if (!el) return;
    const update = () => {
      const peek = window.innerWidth > 991 ? 54 : window.innerWidth * 0.04;
      setOffset(index * (el.offsetWidth - peek));
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, [index]);

  return (
    <div className="slider">
      <div className="mask" ref={maskRef}>
        <div
          className="slider-track"
          style={{ transform: `translate3d(-${offset}px, 0, 0)` }}
        >
          {SLIDES.map((slide, i) => (
            <div className="slide" key={slide.src} aria-hidden={i !== index}>
              <Image
                src={slide.src}
                alt={slide.alt}
                width={1352}
                height={864}
                className="image-slide"
                priority={i === 0}
              />
            </div>
          ))}
        </div>
      </div>
      <button
        type="button"
        className="left-arrow"
        aria-label="Previous slide"
        disabled={index === 0}
        onClick={() => setIndex((i) => Math.max(0, i - 1))}
        style={index === 0 ? { opacity: 0, pointerEvents: "none" } : undefined}
      >
        <svg className="arrow-svg" viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M15 6l-6 6 6 6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <button
        type="button"
        className="right-arrow"
        aria-label="Next slide"
        disabled={index === SLIDES.length - 1}
        onClick={() => setIndex((i) => Math.min(SLIDES.length - 1, i + 1))}
        style={
          index === SLIDES.length - 1
            ? { opacity: 0, pointerEvents: "none" }
            : undefined
        }
      >
        <svg className="arrow-svg" viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M9 6l6 6-6 6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div className="slide-nav" />
    </div>
  );
}
