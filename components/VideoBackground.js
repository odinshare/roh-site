// components/VideoBackground.js
"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

export default function VideoBackground({
  portraitSrc,
  landscapeSrc,
  posterPortrait,
  posterLandscape,
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  // We’ll keep track of which src & poster to use
  const [chosenSrc, setChosenSrc] = useState<string | null>(null);
  const [chosenPoster, setChosenPoster] = useState<string | null>(null);

  // 1) On first mount, pick portrait vs. landscape
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    setChosenSrc(isMobile ? portraitSrc : landscapeSrc);
    setChosenPoster(isMobile ? posterPortrait : posterLandscape);
  }, [portraitSrc, landscapeSrc, posterPortrait, posterLandscape]);

  // 2) As soon as chosenSrc changes, force‐muting & play() inside useLayoutEffect
  useLayoutEffect(() => {
    const vid = videoRef.current;
    if (!vid || !chosenSrc) return;

    // (Re‐set `muted` in code, just in case)
    vid.muted = true;

    // Safari sometimes refuses to autoplay if you wait too long.
    // If `autoPlay` alone didn’t start it, this `.play()` will.
    vid
      .play()
      .then(() => {
        // success: it’s playing
      })
      .catch((err) => {
        // ignore; it may still start once enough data is buffered
      });
  }, [chosenSrc]);

  // 3) If we haven’t picked a src yet, simply render a hidden <video> so iOS “knows it’s there.”
  //    Once chosenSrc is non‐null, it becomes visible.
  return (
    <video
      ref={videoRef}
      className={
        chosenSrc
          ? "fixed top-12 sm:inset-0 left-0 right-0 bottom-0 w-full h-[calc(100vh-3rem)] sm:h-full object-cover"
          : "hidden"
      }
      src={chosenSrc || undefined}
      poster={chosenPoster || undefined}
      autoPlay
      muted
      loop
      playsInline // standard React prop for iOS
      // below attr helps older Safari versions
      webkit-playsinline="true"
      preload="metadata"
      // If `onCanPlay` fires before our `play()` attempt, this double‐checks
      onCanPlay={() => {
        const vid = videoRef.current;
        if (vid && vid.paused) {
          vid
            .play()
            .catch(() => {
              /* swallow any errors */
            });
        }
      }}
    />
  );
}