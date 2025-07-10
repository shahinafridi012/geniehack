"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";

interface TimelineStep {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

interface AnimatedTimelineProps {
  timelineSteps: TimelineStep[];
}

const AnimatedTimeline: React.FC<AnimatedTimelineProps> = ({ timelineSteps }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setContainerHeight(containerRef.current.scrollHeight);
    }
  }, [timelineSteps]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], [0, containerHeight]);

  return (
    <section className="relative py-20 bg-black text-white">
      <h2 className="text-center text-3xl sm:text-4xl font-bold mb-12 relative z-10">
        <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
          Our Strategy To Get You Leads With Content
        </span>
      </h2>

      <div ref={containerRef} className="relative max-w-4xl mx-auto z-10">
        {/* Background vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-400 to-pink-500 opacity-20" />
        {/* Animated vertical line */}
        <motion.div
          className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-cyan-400 to-pink-500 rounded-full"
          style={{ height: lineHeight }}
        />

        <div className="space-y-16">
          {timelineSteps.map((step, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.6 }}
                className={`timeline-step relative flex flex-col sm:flex-row items-center ${
                  isLeft ? "sm:justify-start" : "sm:justify-end"
                }`}
              >
                <div
                  className={`bg-[#111] p-6 rounded-xl shadow-lg max-w-sm border border-gray-700 relative z-10 ${
                    isLeft ? "sm:mr-auto sm:ml-0" : "sm:ml-auto sm:mr-0"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-blue-600 p-3 rounded-full shadow-lg flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-sm bg-blue-900 px-3 py-1 rounded text-cyan-300 font-mono font-semibold">
                      {step.id}
                    </span>
                  </div>
                  <h3 className="font-semibold text-lg">{step.title}</h3>
                  <p className="text-gray-400 text-sm">{step.description}</p>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 w-7 h-7 rounded-full bg-gradient-to-r from-cyan-400 to-pink-500 flex items-center justify-center z-0">
                  <div className="w-4 h-4 bg-black rounded-full" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-center mt-12 relative z-10">
        <button className="bg-gradient-to-r from-cyan-400 to-pink-500 text-black font-semibold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-transform">
          Book A Call
        </button>
      </div>
    </section>
  );
};

export default AnimatedTimeline;
