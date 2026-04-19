"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoDuration, setVideoDuration] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (videoRef.current && videoDuration > 0) {
      videoRef.current.currentTime = latest * videoDuration;
    }
  });

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setVideoDuration(videoRef.current.duration);
    }
  };

  // Opacities for the text overlays
  const text1Opacity = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);
  const text1Y = useTransform(scrollYProgress, [0, 0.25], [0, -50]);

  const text2Opacity = useTransform(scrollYProgress, [0.25, 0.35, 0.45], [0, 1, 0]);
  const text2Y = useTransform(scrollYProgress, [0.25, 0.35, 0.45], [50, 0, -50]);

  const text3Opacity = useTransform(scrollYProgress, [0.45, 0.6, 1], [0, 1, 1]);
  const text3Y = useTransform(scrollYProgress, [0.45, 0.6, 1], [50, 0, 0]);

  return (
    <section ref={containerRef} className="h-[500vh] relative w-full bg-background" id="hero">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Scrubbable Background Video below everything */}
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          onLoadedMetadata={handleLoadedMetadata}
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/hero-background.mp4" type="video/mp4" />
        </video>
        
        {/* Light overlay to gracefully darken background video for text contrast */}
        <div className="absolute inset-0 bg-background/60 z-0 pointer-events-none"></div>

        {/* Text Section 1 (0% - 25%) */}
        <motion.div 
          style={{ opacity: text1Opacity, y: text1Y }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-6 pointer-events-none"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-4"
          >
            Abhiraj Jain
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl md:text-3xl text-accent font-medium"
          >
            Full-Stack Developer
          </motion.h2>
        </motion.div>

        {/* Text Section 2 (25% - 45%) */}
        <motion.div 
          style={{ opacity: text2Opacity, y: text2Y }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-6 pointer-events-none"
        >
          <h2 className="text-4xl md:text-6xl font-bold max-w-4xl leading-tight text-white mb-6">
            Building <span className="text-accent">innovative</span> solutions
            <br /> that matter
          </h2>
        </motion.div>

        {/* Text Section 3 (45% - end) */}
        <motion.div 
          style={{ opacity: text3Opacity, y: text3Y }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-6 pointer-events-none"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-white">
            Explore my work below
          </h2>
          <div className="w-[2px] h-24 bg-gradient-to-b from-accent to-transparent"></div>
        </motion.div>
      </div>
    </section>
  );
}
