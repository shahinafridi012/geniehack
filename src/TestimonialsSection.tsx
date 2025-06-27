import React from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Alice Johnson",
    role: "CEO, Company A",
    text: "GenieHack transformed our online presence!",
  },
  {
    name: "Bob Smith",
    role: "Marketing Head, Company B",
    text: "The team delivered excellent results on time.",
  },
  {
    name: "Carol Lee",
    role: "Product Manager, Company C",
    text: "Highly recommend GenieHack for your business growth.",
  },
];

const sparkleKeyframes = `
  @keyframes sparkleAnimation {
    0%, 100% { opacity: 0; transform: scale(1) translateX(0); }
    50% { opacity: 1; transform: scale(1.4) translateX(2px); }
  }
`;

const fadeInUpKeyframes = `
  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const TestimonialsSection: React.FC = () => {
  return (
    <>
      {/* Inject keyframes styles */}
      <style>
        {sparkleKeyframes}
        {fadeInUpKeyframes}
      </style>

      <section className="bg-gradient-to-r from-[#3f0a79] to-[#3b0a66] py-20 px-4 text-white text-center">
        <h2 className="text-4xl font-bold">
          What Our <span className="text-pink-400">Clients</span> Say
        </h2>
        <p className="text-sm text-gray-200 mt-2 max-w-xl mx-auto">
          Don’t just take our word for it. Here’s what our satisfied clients have to
          say about working with GenieHack
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch max-w-6xl mx-auto mt-12">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-br from-[#5e2e91] to-[#4b1e7e] border border-purple-500 rounded-xl p-6 text-left w-full md:w-1/3
                hover:scale-[1.03] transition-transform duration-300 ease-in-out"
              style={{
                animationName: "fadeInUp",
                animationDuration: "0.6s",
                animationFillMode: "forwards",
                animationTimingFunction: "ease-out",
                animationDelay: `${index * 150}ms`,
                opacity: 0,
                transform: "translateY(20px)",
              }}
            >
              {/* Stars with sparkle */}
              <div className="flex mb-4 space-x-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className="relative w-5 h-5 text-yellow-400 fill-current"
                    style={{ filter: "drop-shadow(0 0 4px #facc15)" }}
                  >
                    <svg
                      className="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
                    </svg>
                    {/* Sparkle */}
                    <span
                      style={{
                        position: "absolute",
                        top: 0,
                        left: "50%",
                        width: "6px",
                        height: "6px",
                        backgroundColor: "white",
                        borderRadius: "9999px",
                        opacity: 0,
                        animationName: "sparkleAnimation",
                        animationDuration: "2s",
                        animationIterationCount: "infinite",
                        animationTimingFunction: "ease-in-out",
                        animationDelay: `${i * 300}ms`,
                        filter: "drop-shadow(0 0 4px #fff)",
                        transformOrigin: "center",
                        transformBox: "fill-box",
                        pointerEvents: "none",
                        translate: "-50% 0",
                      }}
                    ></span>
                  </div>
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm italic mb-6 text-gray-100">"{item.text}"</p>

              {/* Author */}
              <p className="text-sm font-semibold">{item.name}</p>
              <p className="text-xs text-gray-300">{item.role}</p>

              {/* Quotation Icon */}
              <Quote className="absolute top-4 right-4 w-8 h-8 text-purple-400 opacity-20" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default TestimonialsSection;
