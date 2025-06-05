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

  // 1) On mount (and whenever the src/ poster props change), pick mobile vs desktop
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    setLoadedSrc(isMobile ? portraitSrc : landscapeSrc);
    setLoadedPoster(isMobile ? posterPortrait : posterLandscape);
  }, [portraitSrc, landscapeSrc, posterPortrait, posterLandscape]);

  // 2) Don’t render the <video> until we know which src/poster to use
  if (!loadedSrc) return null;

  return (
    <video
      ref={videoRef}
      className="fixed top-12 sm:inset-0 left-0 right-0 bottom-0 w-full h-[calc(100vh-3rem)] sm:h-full object-cover"
      src={loadedSrc}
      poster={loadedPoster}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      onCanPlay={() => {
        // If autoplay didn’t trigger, this will force play once enough data is buffered
        if (videoRef.current) {
          videoRef.current.play().catch(() => {
            /* Silently swallow errors if play() is rejected */
          });
        }
      }}
    />
  );
}