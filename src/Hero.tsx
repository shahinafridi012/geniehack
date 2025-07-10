"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

export default function HeroSectionOne() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.volume = 0.1; // Set initial volume low
    }
  }, []);

  const handlePlayWithSound = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = false;
      video.play();
      setIsMuted(false);
    }
  };

  return (
    <div className="relative mx-auto pt-10 flex bg-black flex-col items-center justify-center">
      {/* Background Lines */}
      <div className="absolute inset-y-0 left-0 h-full w-px bg-white/30">
        <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-y-0 right-0 h-full w-px bg-white/30">
        <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px w-full bg-white/30">
        <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      </div>

      <div className="px-4 py-10 md:py-20">
        {/* Headline */}
        <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-white md:text-4xl lg:text-7xl">
          {"Grow Your Business with GenieHack".split(" ").map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{
                duration: 0.3,
                delay: index * 0.1,
                ease: "easeInOut",
              }}
              className="mr-2 inline-block"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.8 }}
          className="relative z-10 mx-auto max-w-xl py-4 text-center text-white/80"
        >
          Professional video editing, motion graphics, social media management,
          and branding services. Everything you need to dominate the digital
          landscape, all in one place.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 1 }}
          className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#explore">
            {" "}
            <button className="w-60 transform rounded-lg bg-white/10 px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20">
              Explore Now
            </button>
          </a>
          <a href="#contact">
            <button className="w-60 transform rounded-lg border border-white/30 bg-white/5 px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10">
              Contact Support
            </button>
          </a>
        </motion.div>

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 1.2 }}
          className="relative z-10 mt-20 rounded-xl border p-4 shadow-md container mx-auto"
        >
          <div className="relative w-full overflow-hidden rounded-xl">
            <video
              ref={videoRef}
              autoPlay
              muted={isMuted}
              loop
              playsInline
              className="aspect-[16/9] h-auto w-full object-cover"
            >
              {/* <source src="/IMG_8621.MP4" type="video/mp4" /> */}
              <source src="/IMG_8621 (1).mp4" type="video/webm" />
              Your browser does not support the video tag.
            </video>

            {/* Play with sound button */}
            {isMuted && (
              <button
                onClick={handlePlayWithSound}
                className="absolute bottom-4 right-4 z-20 rounded-md bg-white/80 px-4 py-2 text-sm font-semibold text-black backdrop-blur-sm hover:bg-white"
              >
                🔊 Play with Sound
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
