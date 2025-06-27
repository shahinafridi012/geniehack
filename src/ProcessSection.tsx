/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import {
  RefreshCw,
  Lightbulb,
  Globe,
  FileText,
  TrendingUp,
  Users,
  Video,
  BarChart2,
  TrendingUp as GrowthIcon,
} from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Discovery & Consultation",
    description:
      "Understand client’s business goals, target audience, and challenges. Analyze current online presence and competitors.",
    icon: <RefreshCw className="w-5 h-5 text-white" />,
    align: "left",
  },
  {
    id: 2,
    title: "Customized Strategy Development",
    description:
      "Create a tailored growth strategy based on client needs. Decide on services required: SEO, web design, social media, etc.",
    icon: <Lightbulb className="w-5 h-5 text-white" />,
    align: "right",
  },
  {
    id: 3,
    title: "Brand & Website Enhancement",
    description:
      "Optimize website design for mobile and usability. Improve speed, UX/UI, and implement SEO basics.",
    icon: <Globe className="w-5 h-5 text-white" />,
    align: "left",
  },
  {
    id: 4,
    title: "Content Creation & Marketing",
    description:
      "Create blogs, social media posts, and ads using storytelling and visuals to attract your audience.",
    icon: <FileText className="w-5 h-5 text-white" />,
    align: "right",
  },
  {
    id: 5,
    title: "SEO & Online Visibility Boost",
    description:
      "Use on-page and off-page SEO tactics including keyword research, backlinks, and local SEO.",
    icon: <TrendingUp className="w-5 h-5 text-white" />,
    align: "left",
  },
  {
    id: 6,
    title: "Social Media Management",
    description:
      "Handle all your social platforms, ensure regular posts, community engagement, and run paid campaigns.",
    icon: <Users className="w-5 h-5 text-white" />,
    align: "right",
  },
  {
    id: 7,
    title: "Video & Motion Graphics Production",
    description:
      "Create engaging videos, reels, and brand animations to elevate your storytelling.",
    icon: <Video className="w-5 h-5 text-white" />,
    align: "left",
  },
  {
    id: 8,
    title: "Performance Tracking & Analytics",
    description:
      "Track KPIs like traffic, leads, and conversions. Adjust strategy based on performance data.",
    icon: <BarChart2 className="w-5 h-5 text-white" />,
    align: "right",
  },
  {
    id: 9,
    title: "Continuous Support & Scaling",
    description:
      "Keep optimizing, provide regular updates, and scale successful campaigns to reach new heights.",
    icon: <GrowthIcon className="w-5 h-5 text-white" />,
    align: "left",
  },
];

const ProcessSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const [progressHeight, setProgressHeight] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-step") || "0");
            if (!visibleSteps.includes(index)) {
              setVisibleSteps((prev) => [...prev, index]);
            }
          }
        });
      },
      { threshold: 0.4 }
    );

    if (containerRef.current) {
      containerRef.current.querySelectorAll(".process-card").forEach((el) => {
        observer.observe(el);
      });
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.querySelectorAll(".process-card").forEach((el) => {
          observer.unobserve(el);
        });
      }
    };
  }, [visibleSteps]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onScroll = () => {
      const rect = container.getBoundingClientRect();
      const visible = Math.max(0, window.innerHeight - rect.top);
      const max = rect.height;
      const progress = Math.min(max, Math.max(0, visible));
      setProgressHeight(progress);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="bg-[#3d0074] text-white py-20 px-4">
      <div className="text-center">
        <h2 className="text-4xl font-bold">
          Our Proven <span className="text-pink-400">Process</span>
        </h2>
        <p className="mt-2 text-sm max-w-xl mx-auto">
          A streamlined workflow designed to elevate your brand and deliver measurable results.
        </p>
      </div>

      <div ref={containerRef} className="relative max-w-5xl mx-auto mt-16" style={{ minHeight: "600px" }}>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[4px] h-full bg-[#6a1b9a] rounded-full" />
        <div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[4px] bg-pink-400 rounded-full transition-all duration-300"
          style={{ height: progressHeight }}
        />

        {steps.map((step) => {
          const isLeft = step.align === "left";
          const isVisible = visibleSteps.includes(step.id);

          return (
            <div
              key={step.id}
              data-step={step.id}
              className={`mb-16 flex ${
                isLeft ? "justify-start" : "justify-end"
              } relative process-card transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="w-1/2 px-4">
                <div className="bg-gradient-to-br from-[#5e2e91] to-[#4b1e7e] rounded-xl p-6 shadow-md relative">
                  <div
                    className={`absolute -top-6 ${
                      isLeft ? "-left-6" : "-right-6"
                    } bg-pink-500 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold`}
                  >
                    {step.id}
                  </div>
                  <div className="mb-4 flex justify-center">
                    <div className="bg-pink-400 p-3 rounded-full animate-pulse-glow">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-white font-semibold text-base text-center mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-center text-gray-100">{step.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        .animate-pulse-glow {
          animation: pulseGlow 3s ease-in-out infinite;
        }
        @keyframes pulseGlow {
          0%, 100% {
            box-shadow: 0 0 6px rgba(236, 72, 153, 0.4), 0 0 12px rgba(236, 72, 153, 0.3);
          }
          50% {
            box-shadow: 0 0 12px rgba(236, 72, 153, 0.6), 0 0 24px rgba(236, 72, 153, 0.4);
          }
        }
      `}</style>
    </section>
  );
};

export default ProcessSection;
