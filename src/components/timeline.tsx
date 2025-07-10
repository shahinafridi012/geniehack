"use client";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-black dark:bg-neutral-950 font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto pt-10 px-4 md:px-8 lg:px-10">
     <div className="relative">
  <h2 className="relative text-white z-10 text-5xl sm:text-6xl font-bold mb-4">
    Our{" "}
    <span className="genie-title inline-block relative animate-float animate-gradient-text text-transparent bg-clip-text">
      Genie
      <span className="twinkle twinkle-1" />
      <span className="twinkle twinkle-2" />
      <span className="twinkle twinkle-3" />
    </span>{" "}
    Services
  </h2>

  {/* ➕ Add this CSS */}
  <style>{`
    .twinkle {
      position: absolute;
      width: 5px;
      height: 5px;
      background: radial-gradient(circle, #fcd34d, #fde68a);
      border-radius: 50%;
      opacity: 0.8;
      animation: sparkleTwinkle 3s ease-in-out infinite;
      pointer-events: none;
      filter: blur(0.5px);
    }

    .twinkle-1 { top: -10px; left: 10%; animation-delay: 0s; }
    .twinkle-2 { top: 0px; left: 70%; animation-delay: 1.2s; }
    .twinkle-3 { bottom: -10px; left: 30%; animation-delay: 2s; }

    @keyframes sparkleTwinkle {
      0% { transform: scale(0.8) translateY(0); opacity: 0.4; }
      50% { transform: scale(1.2) translateY(-4px); opacity: 1; }
      100% { transform: scale(0.8) translateY(0); opacity: 0.3; }
    }

    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-4px); }
    }

    .animate-float {
      animation: float 3s ease-in-out infinite;
    }

    @keyframes gradientText {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    .animate-gradient-text {
      background-image: linear-gradient(
        270deg,
        #a855f7,
        #ec4899,
        #f59e0b,
        #10b981,
        #3b82f6,
        #a855f7
      );
      background-size: 600% 600%;
      animation: gradientText 6s ease infinite;
    }
  `}</style>
</div>



        <p className="text-neutral-500 dark:text-neutral-300 text-sm md:text-base max-w-sm">
          From concept to completion, we provide comprehensive digital solutions
          that transform your business presence.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 ">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
