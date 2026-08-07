"use client";

import { useEffect, useRef, useState } from "react";

export function LazyEventVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isNearViewport, setIsNearViewport] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIsNearViewport(true);
        observer.disconnect();
      },
      { rootMargin: "280px" },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !isNearViewport) return;

    video.load();
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      void video.play().catch(() => undefined);
    }
  }, [isNearViewport]);

  return (
    <video
      ref={videoRef}
      aria-label="Silent H private-event dining experience"
      className="event-video"
      poster="/media/event-poster.webp"
      muted
      loop
      playsInline
      preload="none"
      width="960"
      height="540"
    >
      {isNearViewport ? (
        <source src="/media/event-optimized.mp4" type="video/mp4" />
      ) : null}
    </video>
  );
}
