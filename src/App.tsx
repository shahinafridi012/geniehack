import { useEffect, useState } from "react";
import { FaBolt, FaCode, FaPalette, FaPlay, FaUsers } from "react-icons/fa";

// import { motion } from "framer-motion";
// import {
//   FaVideo,
//   FaPaintBrush,
//   FaUsers,
//   FaLaptopCode,
//   FaChartLine,
//   FaMagic,
// } from "react-icons/fa";
import MagicalStats from "./MagicalStats";
import ProcessSection from "./ProcessSection";
import TestimonialsSection from "./TestimonialsSection";
import FAQSection from "./FAQSection";
import TransformSection from "./TransformSection";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Goal from "./goal";
import Service from "./Service";
import Footer from "./Footer";
const services = [
  {
    icon: <FaPlay />,
    title: "Video Editing",
    description:
      "Professional video editing that brings your vision to life with cinematic quality and storytelling excellence.",
    features: [
      "4K/8K Resolution",
      "Color Grading",
      "Motion Graphics",
      "Sound Design",
    ],
  },
  {
    icon: <FaPalette />,
    title: "Motion Graphics",
    description:
      "Dynamic animations and visual effects that captivate audiences and elevate your brand presence.",
    features: [
      "2D/3D Animation",
      "Logo Animation",
      "Explainer Videos",
      "Visual Effects",
    ],
  },
  {
    icon: <FaUsers />,
    title: "Social Management",
    description:
      "Complete social media strategy and management to grow your online presence and engage your audience.",
    features: [
      "Content Strategy",
      "Community Management",
      "Analytics",
      "Growth Optimization",
    ],
  },
  {
    icon: <FaBolt />,
    title: "Branding",
    description:
      "Comprehensive brand identity design that makes your business stand out in the digital landscape.",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Visual Identity",
      "Marketing Materials",
    ],
  },
  {
    icon: <FaCode />,
    title: "Website Building",
    description:
      "Stunning, high-performance websites that are modern, responsive, and designed to convert visitors into clients.",
    features: [
      "Responsive Design",
      "CMS Integration",
      "E-commerce Ready",
      "SEO Optimized",
    ],
  },
];

const App = () => {
  const featureDelay = 300; // ms

  const [, setVisibleFeatures] = useState<Record<number, boolean[]>>({});

  useEffect(() => {
    services.forEach((service, serviceIndex) => {
      service.features.forEach((_, featureIndex) => {
        setTimeout(() => {
          setVisibleFeatures((prev) => {
            const prevService = prev[serviceIndex] || [];
            const newService = [...prevService];
            newService[featureIndex] = true;
            return { ...prev, [serviceIndex]: newService };
          });
        }, featureIndex * featureDelay + serviceIndex * service.features.length * featureDelay);
      });
    });
  }, []);
  return (
    <div>
      {/* navber */}
      <Navbar />
      {/* hero section */}

      <Hero />
      {/* service here */}

      <section id="service">
        <Service />
      </section>

      {/*  process section */}
      <section id="process">
        <ProcessSection />
      </section>
      {/* make you bussines globally */}

      {/* our fututer goal*/}
      <section id="explore">
        <Goal />
      </section>
      {/* why choose our section */}
      <section
        id="team"
        className="relative bg-black py-20 px-6 text-white overflow-hidden"
      >
        {/* Magical sparkles */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
        >
          {[...Array(40)].map((_, i) => (
            <span
              key={i}
              className="magical-sparkle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${4 + Math.random() * 6}s`,
                width: `${2 + Math.random() * 4}px`,
                height: `${2 + Math.random() * 4}px`,
                opacity: 0.3 + Math.random() * 0.4,
                filter: `drop-shadow(0 0 ${2 + Math.random() * 3}px #fbbf24)`,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <h2 className="text-5xl sm:text-6xl font-bold mb-3 magical-glow-soft">
              <span className="text-white">Why </span>
              <span className="text-purple-400">choose </span>
              <span className="text-white">our section</span>
            </h2>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              At Genie Hack, we help businesses grow through smart design,
              powerful content, and proven digital strategies. From websites to
              social media — we turn your brand into a magnet for clients.
            </p>
            <MagicalStats />
            <a
              href="#contact"
              className="relative bg-gradient-to-r from-cyan-400 to-blue-600 hover:opacity-90 transition px-6 py-2 rounded-xl font-medium text-white "
            >
              Start Your Project →
            </a>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-xl cursor-pointer magical-glow-softer lg:w-[450px] mx-auto">
            <img
              src="/Purple Lines Modern Tech Company Team Flyer_20250629_190319_0000 (1).png"
              alt="Team working"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        <style>{`
    .magical-sparkle {
      position: absolute;
      background: radial-gradient(circle, #fef3c7 0%, #f59e0b 70%);
      border-radius: 9999px;
      animation-name: sparkleFloat;
      animation-timing-function: ease-in-out;
      animation-iteration-count: infinite;
    }

    @keyframes sparkleFloat {
      0%, 100% {
        transform: translateY(0) scale(1);
        opacity: 0.4;
      }
      50% {
        transform: translateY(-12px) scale(1.3);
        opacity: 0.2;
      }
    }

    .magical-glow-soft {
      text-shadow:
        0 0 4px #a855f7aa,
        0 0 8px #d946ef88;
      transition: text-shadow 0.3s ease;
    }

    .magical-glow-softer {
      text-shadow:
        0 0 2px #c084fc55,
        0 0 5px #e0aaff44;
      transition: text-shadow 0.3s ease;
    }

    .magical-shimmer::before {
      content: '';
      position: absolute;
      top: 0; left: -50%;
      width: 50%;
      height: 100%;
      background: linear-gradient(120deg, transparent, rgba(255,255,255,0.2), transparent);
      transform: skewX(-20deg);
      animation: shimmerMove 2.5s infinite;
      pointer-events: none;
      border-radius: 0.75rem;
    }

    @keyframes shimmerMove {
      0% { left: -50%; }
      100% { left: 150%; }
    }
  `}</style>
      </section>
      {/* frequenly */}
      <section id="faq">
        <FAQSection />
      </section>
      {/* testimonials  */}
      <section id="testimonials">
        <TestimonialsSection />
      </section>

      {/* call to action */}
      <section id="contact">
        <TransformSection />
      </section>
      {/* footer */}
      <Footer></Footer>
    </div>
  );
};

export default App;
