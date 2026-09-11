"use client";

import { useState } from "react";
import Image, { type ImageProps } from "next/image";
import { useReducedMotion } from "motion/react";

type SiteImageProps = Omit<ImageProps, "onLoad" | "onLoadingComplete"> & {
  /** Extra classes for the outer frame (position/size live here for `fill`). */
  frameClassName?: string;
  /** Soft ink hatch while the photo loads. Default true. */
  skeleton?: boolean;
};

/**
 * Site photography with a brutalist skeleton placeholder and fade-in.
 * Layout stays reserved (no CLS); photo appears when ready.
 */
export default function SiteImage({
  className = "",
  frameClassName = "",
  skeleton = true,
  alt,
  priority,
  quality = 75,
  ...rest
}: SiteImageProps) {
  const [loaded, setLoaded] = useState(false);
  const reduce = useReducedMotion();

  return (
    <div className={`media-frame ${frameClassName}`.trim()}>
      {skeleton && !loaded ? (
        <div className="media-skeleton" aria-hidden="true" />
      ) : null}
      <Image
        alt={alt}
        priority={priority}
        quality={quality}
        loading={priority ? undefined : "lazy"}
        onLoad={() => setLoaded(true)}
        className={`media-photo ${loaded ? "is-loaded" : ""} ${
          reduce ? "media-photo-instant" : ""
        } ${className}`.trim()}
        {...rest}
      />
    </div>
  );
}
