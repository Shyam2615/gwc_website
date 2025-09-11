"use client";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

type CarouselImage = {
  src: string;
  alt?: string;
};

type CarouselProps = {
  images: CarouselImage[];
  autoPlayMs?: number;
  className?: string;
  rounded?: string;
  fill?: boolean;
};

export default function Carousel({ images, autoPlayMs = 5000, className, rounded = "rounded-xl", fill = false }: CarouselProps) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<number | null>(null);
  const length = images.length;

  const safeImages = useMemo(() => images.filter(Boolean), [images]);

  useEffect(() => {
    if (length <= 1) return;
    timerRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % length);
    }, autoPlayMs);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [length, autoPlayMs]);

  const goTo = (i: number) => setIndex((i + length) % length);
  const prev = () => goTo(index - 1);
  const next = () => goTo(index + 1);

  return (
    <div className={`relative overflow-hidden ${rounded} ${fill ? "h-full" : ""} ${className ?? ""}`}>
      <div
        className={`${fill ? "absolute inset-0" : "relative aspect-[16/9] w-full"}`}
        aria-roledescription="carousel"
      >
        {safeImages.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ${i === index ? "opacity-100" : "opacity-0"}`}
            aria-hidden={i !== index}
          >
            <Image
              src={img.src}
              alt={img.alt ?? ""}
              fill
              priority={i === 0}
              sizes="(min-width: 1024px) 1024px, 100vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {length > 1 && (
        <>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/30" />
          <button
            aria-label="Previous slide"
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white backdrop-blur hover:bg-black/60"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            aria-label="Next slide"
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white backdrop-blur hover:bg-black/60"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {safeImages.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => goTo(i)}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${i === index ? "bg-white" : "bg-white/40 hover:bg-white/70"}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}


