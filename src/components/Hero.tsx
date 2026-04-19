"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoDurationRef = useRef(0);
  const targetTimeRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const lastSeekAtRef = useRef(0);
  const lastAppliedTimeRef = useRef(-1);
  const lastProgressRef = useRef(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const syncDurationAndFrame = () => {
      videoDurationRef.current = Number.isFinite(video.duration) ? video.duration : 0;
      const initialProgress = scrollYProgress.get();
      const initialTime = initialProgress * videoDurationRef.current;
      targetTimeRef.current = initialTime;
      video.currentTime = initialTime;
      video.pause();
    };

    const primeDecoder = async () => {
      try {
        await video.play();
        video.pause();
      } catch {
        // If autoplay is blocked, metadata sync still enables manual seeking.
      }
    };

    const handleLoadedMetadata = () => {
      syncDurationAndFrame();
      primeDecoder();
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("durationchange", syncDurationAndFrame);

    if (video.readyState >= 1) {
      syncDurationAndFrame();
      primeDecoder();
    }

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("durationchange", syncDurationAndFrame);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, [scrollYProgress]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const duration = videoDurationRef.current;
    if (!duration) return;
    if (Math.abs(latest - lastProgressRef.current) < 0.004) return;
    lastProgressRef.current = latest;
    targetTimeRef.current = latest * duration;

    if (rafRef.current !== null) return;

    const applyFrame = () => {
      const video = videoRef.current;
      if (!video) {
        rafRef.current = null;
        return;
      }

      const now = performance.now();
      // Limit seeks to ~16fps so high-resolution decoding remains smooth.
      if (now - lastSeekAtRef.current < 62) {
        rafRef.current = null;
        return;
      }

      // Snap to frame steps to avoid tiny seek thrash.
      const snappedTarget = Math.round(targetTimeRef.current * 16) / 16;
      if (Math.abs(snappedTarget - lastAppliedTimeRef.current) < 0.001) {
        rafRef.current = null;
        return;
      }

      if (Math.abs(snappedTarget - video.currentTime) > 0.012) {
        video.currentTime = snappedTarget;
        lastAppliedTimeRef.current = snappedTarget;
        lastSeekAtRef.current = now;
      }

      rafRef.current = null;
    };

    rafRef.current = requestAnimationFrame(applyFrame);
  });

  // Opacities for the text overlays
  const text1Opacity = useTransform(scrollYProgress, [0, 0.14, 0.2], [1, 1, 0]);

  const text2Opacity = useTransform(scrollYProgress, [0.18, 0.28, 0.38], [0, 1, 0]);

  const text3Opacity = useTransform(scrollYProgress, [0.36, 0.5, 1], [0, 1, 1]);

  return (
    <section ref={containerRef} className="h-[300vh] relative w-full bg-background" id="hero">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Scroll-scrubbed playback with eased seeking for smoothness. */}
        <video
          ref={videoRef}
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover z-0 will-change-transform"
        >
          <source src="/hero-background.mp4" type="video/mp4" />
        </video>
        
        {/* Lower-opacity dark overlay keeps text readable without washing out the video. */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/20 to-black/30 z-0 pointer-events-none"></div>

        {/* Text Section 1 (0% - 25%) */}
        <motion.div
          style={{ opacity: text1Opacity }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-6 pointer-events-none"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-7xl font-semibold tracking-tight mb-4 text-white"
          >
            Abhiraj Jain
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl md:text-3xl text-white/90 font-medium"
          >
            Full-Stack Developer
          </motion.h2>
        </motion.div>

        {/* Text Section 2 (25% - 45%) */}
        <motion.div
          style={{ opacity: text2Opacity }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-6 pointer-events-none"
        >
          <h2 className="text-4xl md:text-6xl font-semibold max-w-4xl leading-tight text-white mb-6">
            Building <span className="text-white/80">innovative</span> solutions
            <br /> that matter
          </h2>
        </motion.div>

        {/* Text Section 3 (45% - end) */}
        <motion.div
          style={{ opacity: text3Opacity }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-6 pointer-events-none"
        >
          <h2 className="text-3xl md:text-5xl font-semibold mb-12 text-white">
            Explore my work below
          </h2>
          <div className="w-[2px] h-24 bg-gradient-to-b from-accent to-transparent"></div>
        </motion.div>
      </div>
    </section>
  );
}
