// components/VideoBackground.js
"use client";

import { useEffect, useState, useRef } from "react";

export default function VideoBackground({
  portraitSrc,
  landscapeSrc,
  posterPortrait,
  posterLandscape,
}) {
  const [loadedSrc, setLoadedSrc] = useState(null);
  const [loadedPoster, setLoadedPoster] = useState(null);
  const videoRef = useRef(null);

  // Pick mobile vs. desktop src & poster on mount
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    setLoadedSrc(isMobile ? portraitSrc : landscapeSrc);
    setLoadedPoster(isMobile ? posterPortrait : posterLandscape);
  }, [portraitSrc, landscapeSrc, posterPortrait, posterLandscape]);

  // Nothing to render until we know which file to load
  if (!loadedSrc) return null;

  return (
    <video
      ref={videoRef}
      className="fixed top-12 sm:inset-0 left-0 right-0 bottom-0 w-full h-[calc(100vh-3rem)] sm:h-full object-cover"
      src={loadedSrc}
      poster={loadedPoster}
      muted
      playsInline
      loop
      preload="metadata"
      onCanPlay={() => {
        // As soon as the video has buffered enough to play, force play()
        if (videoRef.current) {
          videoRef.current.play().catch(() => {
            /* swallow any errors */
          });
        }
      }}
    />
  );
}