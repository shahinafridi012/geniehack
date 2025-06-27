/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import  { useEffect, useRef, useState } from "react";

const MagicalStats = () => {
  const stats = [
    { number: 500, label: "Projects Completed", color: "text-purple-100" },
    { number: 98, label: "Client Satisfaction %", color: "text-purple-100" },
    { number: 24, label: "Support Hours", color: "text-orange-300" },
    { number: 5, label: "Years Experience", color: "text-sky-400" },
  ];

  const [visible, setVisible] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  useEffect(() => {
    if (!visible) return;

    const intervals = stats.map((stat, index) => {
      return setInterval(() => {
        setCounts((prev) => {
          const newCounts = [...prev];
          if (newCounts[index] < stat.number) {
            newCounts[index] = Math.min(newCounts[index] + Math.ceil(stat.number / 60), stat.number);
          }
          return newCounts;
        });
      }, 30);
    });

    const stopCheck = setInterval(() => {
      if (counts.every((val, i) => val >= stats[i].number)) {
        intervals.forEach(clearInterval);
        clearInterval(stopCheck);
      }
    }, 100);

    return () => {
      intervals.forEach(clearInterval);
      clearInterval(stopCheck);
    };
  }, [visible]);

  return (
    <div className="grid grid-cols-2 gap-6 text-left mb-8" ref={containerRef}>
      {stats.map(({ number, label, color }, i) => (
        <div
          key={i}
          className="relative group rounded-lg p-2 overflow-hidden"
        >
          {/* Sparkles */}
          <span className="magical-number-sparkle" />
          <span className="magical-number-sparkle" />
          <span className="magical-number-sparkle" />

          <p className={`text-3xl font-bold ${color} magical-number`}>
            {counts[i]}
          </p>
          <p className="text-purple-300 magical-label">{label}</p>
        </div>
      ))}

      <style>{`
        .magical-number {
          position: relative;
          animation: numberGlow 4s ease-in-out infinite;
          text-shadow:
            0 0 4px rgba(168, 85, 247, 0.4),
            0 0 8px rgba(168, 85, 247, 0.3);
          transition: text-shadow 0.3s ease;
        }

        .magical-label {
          text-shadow:
            0 0 2px rgba(216, 180, 254, 0.4);
        }

        .group:hover .magical-number {
          text-shadow:
            0 0 6px rgba(236, 72, 153, 0.5),
            0 0 12px rgba(236, 72, 153, 0.4);
        }

        @keyframes numberGlow {
          0%, 100% {
            text-shadow:
              0 0 4px rgba(168, 85, 247, 0.3),
              0 0 8px rgba(168, 85, 247, 0.2);
          }
          50% {
            text-shadow:
              0 0 8px rgba(236, 72, 153, 0.5),
              0 0 16px rgba(236, 72, 153, 0.4);
          }
        }

        .magical-number-sparkle {
          position: absolute;
          width: 6px;
          height: 6px;
          background: radial-gradient(circle, #fcd34d 0%, #fde68a 60%);
          border-radius: 9999px;
          opacity: 0.7;
          pointer-events: none;
          filter: blur(0.5px);
          animation: sparkleFloat 3s ease-in-out infinite;
        }

        .magical-number-sparkle:nth-child(1) {
          top: 10%; left: 20%;
          animation-delay: 0s;
        }
        .magical-number-sparkle:nth-child(2) {
          top: 50%; left: 80%;
          animation-delay: 1s;
        }
        .magical-number-sparkle:nth-child(3) {
          bottom: 10%; left: 40%;
          animation-delay: 2s;
        }

        @keyframes sparkleFloat {
          0% { transform: translateY(0) scale(1); opacity: 0.6; }
          50% { transform: translateY(-6px) scale(1.3); opacity: 1; }
          100% { transform: translateY(0) scale(1); opacity: 0.6; }
        }
      `}</style>
    </div>
  );
};

export default MagicalStats;
