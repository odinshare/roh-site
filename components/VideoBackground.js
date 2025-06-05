// components/VideoBackground.js
"use client";

import { useEffect, useState } from "react";

export default function VideoBackground({
  portraitSrc,
  landscapeSrc,
  posterPortrait,
  posterLandscape,
}) {
  const [loadedSrc, setLoadedSrc] = useState(null);
  const [loadedPoster, setLoadedPoster] = useState(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    setLoadedSrc(isMobile ? portraitSrc : landscapeSrc);
    setLoadedPoster(isMobile ? posterPortrait : posterLandscape);
  }, [portraitSrc, landscapeSrc, posterPortrait, posterLandscape]);

  if (!loadedSrc) return null;
  return (
    <video
      className="fixed top-12 sm:inset-0 left-0 right-0 bottom-0 w-full h-[calc(100vh-3rem)] sm:h-full object-cover"
      src={loadedSrc}
      poster={loadedPoster}
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
    />
  );
}