"use client";

import { useEffect, useState } from "react";

export default function VideoBackground({ portraitSrc, landscapeSrc, poster }) {
  const [loadedSrc, setLoadedSrc] = useState(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    setLoadedSrc(isMobile ? portraitSrc : landscapeSrc);
  }, [portraitSrc, landscapeSrc]);

  if (!loadedSrc) return null;
  return (
    <video
      className="fixed top-12 sm:inset-0 left-0 right-0 bottom-0 w-full h-[calc(100vh-3rem)] sm:h-full object-cover"
      src={loadedSrc}
      poster={poster}
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
    />
  );
}
