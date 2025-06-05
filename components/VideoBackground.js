// components/VideoBackground.js
"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

export default function VideoBackground({
  portraitSrc,
  landscapeSrc,
  posterPortrait,
  posterLandscape,
}) {
  // Prevent server‐side rendering from breaking
  const isClient = typeof window !== "undefined";
  
  // We’ll keep track of which src & poster to use
  const [chosenSrc, setChosenSrc] = useState(null);
  const [chosenPoster, setChosenPoster] = useState(null);

  const videoRef = useRef(null);

  // Only run on client
  useEffect(() => {
    if (!isClient) return;
    const isMobile = window.innerWidth < 768;
    setChosenSrc(isMobile ? portraitSrc : landscapeSrc);
    setChosenPoster(isMobile ? posterPortrait : posterLandscape);
  }, [portraitSrc, landscapeSrc, posterPortrait, posterLandscape, isClient]);

  // Force‐mute & play the video as soon as chosenSrc is set
  useLayoutEffect(() => {
    if (!isClient) return;
    const vid = videoRef.current;
    if (!vid || !chosenSrc) return;
    vid.muted = true;
    vid
      .play()
      .catch(() => {
        /* If autoplay is blocked, it may still start once buffered */
      });
  }, [chosenSrc, isClient]);

  // While server‐rendering or before we've picked a src, hide the video
  if (!isClient || !chosenSrc) {
    return null;
  }

  // Once we’re on the client and have a chosenSrc, render the <video>
  return (
    <video
    ref={videoRef}
    src={chosenSrc}
    poster={chosenPoster}
    autoPlay
    loop
    muted            // ← absolutely required for silent autoplay
    defaultmuted="true"     // ← sometimes helps iOS honor muted state
    playsInline      // ← required for iOS to allow inline (vs. fullscreen) playback
    webkit-playsinline="true" // ← older iOS versions need this
    preload="auto"   // ← Helps buffer ahead of time; "metadata" sometimes delays
    crossOrigin="anonymous" // ← if you load from an R2/worker origin, add CORS
    className="fixed top-12 sm:inset-0 left-0 right-0 bottom-0 w-full h-[calc(100vh-3rem)] sm:h-full object-cover"
    onCanPlay={() => {
      // Try to play again as soon as it’s ready
      const vid = videoRef.current;
      if (vid && vid.paused) vid.play().catch(() => {});
    }}
  />
  );
}
