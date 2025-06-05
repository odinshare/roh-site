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

  // 1️⃣ Choose mobile vs. desktop src/poster on mount (or on resize if you like)
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    setLoadedSrc(isMobile ? portraitSrc : landscapeSrc);
    setLoadedPoster(isMobile ? posterPortrait : posterLandscape);
  }, [portraitSrc, landscapeSrc, posterPortrait, posterLandscape]);

  // 2️⃣ As soon as loadedSrc is set, attempt to play() the video
  useEffect(() => {
    if (!loadedSrc) return;
    const vid = videoRef.current;
    if (!vid) return;

    // Ensure muted (some browsers insist)
    vid.muted = true;

    // Attempt to play; mobile will only allow if muted & playsInline
    vid
      .play()
      .catch((err) => {
        // Silently swallow any autoplay rejections
        // (e.g. if Safari temporarily blocks it, but usually if muted+playsInline it's fine)
      });
  }, [loadedSrc]);

  if (!loadedSrc) return null;

  return (
    <video
      ref={videoRef}
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