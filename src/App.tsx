import { Facebook, Instagram, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";
import { FaBolt, FaCode, FaPalette, FaPlay } from "react-icons/fa";

import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import {
  FaVideo,
  FaPaintBrush,
  FaUsers,
  FaLaptopCode,
  FaChartLine,
  FaMagic,
} from "react-icons/fa";
import MagicalStats from "./MagicalStats";
import ProcessSection from "./ProcessSection";
import TestimonialsSection from "./TestimonialsSection";
import FAQSection from "./FAQSection";
import TransformSection from "./TransformSection";

const service = [
  {
    icon: <FaVideo size={22} />,
    name: "Video Editing",
    top: "top-10",
    left: "left-10",
  },
  {
    icon: <FaPaintBrush size={22} />,
    name: "Branding",
    top: "top-20",
    left: "right-12",
  },
  {
    icon: <FaUsers size={22} />,
    name: "Social Media",
    top: "bottom-16",
    left: "left-16",
  },
  {
    icon: <FaLaptopCode size={22} />,
    name: "Web Development",
    top: "top-40",
    left: "left-1/2",
  },
  {
    icon: <FaChartLine size={22} />,
    name: "Content Strategy",
    top: "bottom-10",
    left: "right-1/4",
  },
  {
    icon: <FaMagic size={22} />,
    name: "Motion Graphics",
    top: "top-5",
    left: "right-1/3",
  },
];

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
  const [hovered, setHovered] = useState<number | null>(null);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const [visibleFeatures, setVisibleFeatures] = useState<
    Record<number, boolean[]>
  >({});

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
      <header
        className={`fixed top-0 left-0 w-full z-50  py-4 px-6 md:px-12 text-white shadow-md transition-all duration-300
        ${
          scrolled
            ? "bg-white/20 backdrop-blur-md shadow-lg"
            : "bg-gradient-to-r from-[#1e0a3c] to-[#2c0c53] shadow"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-1">
            <img
              src="/IMG_0055 (1).PNG"
              alt="Genie Hack Logo"
              className="h-8 w-auto md:h-10 rounded-full object-cover"
            />
            <span
              className={`text-xl font-semibold transition-all duration-300 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent`}
            >
              GenieHack
            </span>
          </a>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-8 font-medium text-sm">
            {["Services", "About", "Process", "Testimonials", "FAQ"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative group text-white hover:text-pink-400 transition"
                >
                  {item}
                  {/* Animated underline */}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-pink-400 transition-all group-hover:w-full"></span>
                </a>
              )
            )}
            <a
              href="#contact"
              className="bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold px-4 py-2 rounded-lg hover:brightness-110 transition"
            >
              Contact Us
            </a>
          </nav>

          {/* Mobile nav icon (optional) */}
        </div>
      </header>
      {/* hero section */}
      <section
        id="hero"
        className="relative bg-gradient-to-r mt-15 from-[#43186b] to-[#6f1d87] py-20 px-6 md:px-12 text-white overflow-hidden"
      >
        {/* Glowing Animated Icons */}
        {service.map((item, idx) => (
          <motion.div
            key={idx}
            className={`absolute ${item.top} ${item.left} z-0`}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="relative group">
              <div className="p-3 rounded-full bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500 text-white shadow-lg hover:scale-110 transition-all duration-300 drop-shadow-[0_0_12px_rgba(255,255,255,0.3)]">
                {item.icon}
              </div>

              {/* Tooltip */}
              {hovered === idx && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1 text-sm bg-white text-black rounded-md shadow-lg whitespace-nowrap z-10"
                >
                  {item.name}
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}

        {/* Main Hero Content */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
          <div className="flex-1">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Grow Your <br />
              <motion.span
                className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  backgroundSize: "200% 200%", // Ensures the gradient has room to move
                }}
              >
                Digital Business
              </motion.span>
              <br />
              with GenieHack
            </h1>
            <p className="text-gray-200 mb-8 text-lg max-w-xl">
              Professional video editing, motion graphics, social media
              management, and branding services. Everything you need to dominate
              the digital landscape, all in one place.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a
                href="#contact"
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90 text-white px-6 py-3 rounded-lg font-semibold"
              >
                Get Started Today →
              </a>
              <a
                href="https://github.com/shahinafridi012"
                className="border-white text-white hover:bg-white hover:text-black px-6 py-3 rounded-lg font-semibold"
              >
                View Our Work
              </a>
            </div>
          </div>

          <motion.div
            className="flex-1"
            animate={{ y: [0, -20, 0] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <img
              src="/IMG_0060 (1).JPG"
              alt="Hero"
              className="rounded-xl shadow-lg w-full max-w-lg mx-auto"
            />
          </motion.div>
        </div>
      </section>
      {/* service here */}
      <>
        <section
          id="services"
          className="bg-[#2e0854] py-16 px-4 text-white text-center"
        >
          <h2 className="text-6xl font-bold mb-4">
            Our{" "}
            <span className="genie-title relative inline-block">
              Genie
              <span className="twinkle twinkle-1" />
              <span className="twinkle twinkle-2" />
              <span className="twinkle twinkle-3" />
              {/* <span className="twinkle twinkle-4" /> */}
            </span>{" "}
            <span className="text-white">Services</span>
          </h2>
          <style>
            {` 
  .genie-title {
    background: linear-gradient(
      45deg,
      #9333ea,
      #e879f9,
      #a855f7,
      #ec4899,
      #f472b6,
      #9333ea
    );
    background-size: 300%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: genieRainbow 6s ease-in-out infinite, genieGlow 4s ease-in-out infinite;
    position: relative;
    text-shadow: 0 0 4px rgba(147, 51, 234, 0.3);
  }

  @keyframes genieRainbow {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @keyframes genieGlow {
    0%, 100% {
      text-shadow: 0 0 6px rgba(236, 72, 153, 0.3),
                   0 0 12px rgba(236, 72, 153, 0.4);
    }
    50% {
      text-shadow: 0 0 10px rgba(236, 72, 153, 0.6),
                   0 0 20px rgba(236, 72, 153, 0.5);
    }
  }

  .twinkle {
    position: absolute;
    width: 6px;
    height: 6px;
    background: radial-gradient(circle, #fcd34d, #fde68a);
    border-radius: 50%;
    opacity: 0.8;
    animation: sparkleTwinkle 3s ease-in-out infinite;
    pointer-events: none;
    filter: blur(0.5px);
  }

  .twinkle-1 { top: -12px; left: 10%; animation-delay: 0s; }
  .twinkle-2 { top: 0px; left: 70%; animation-delay: 1.2s; }
  .twinkle-3 { bottom: -12px; left: 30%; animation-delay: 2s; }
  .twinkle-4 { top: 14px; left: 40%; animation-delay: 2.6s; }

  @keyframes sparkleTwinkle {
    0% {
      transform: scale(0.8) translateY(0);
      opacity: 0.4;
    }
    50% {
      transform: scale(1.2) translateY(-4px);
      opacity: 1;
    }
    100% {
      transform: scale(0.8) translateY(0);
      opacity: 0.3;
    }
  }
`}
          </style>

          <p className="max-w-2xl mx-auto text-purple-200 mb-12">
            From concept to completion, we provide comprehensive digital
            solutions that transform your business presence
          </p>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {services.map((service, serviceIndex) => (
              <div
                key={serviceIndex}
                className="relative bg-[#4b1d6d] rounded-2xl shadow-lg p-8 overflow-hidden cursor-pointer
                         transform transition duration-500 hover:scale-105 hover:shadow-pink-600/70"
              >
                {/* 🔥 Foreground Glowing Icon */}
                <div
                  className="relative z-10 w-20 h-20 flex items-center justify-center rounded-xl mb-6 shadow-lg
                           bg-gradient-to-tr from-pink-500 to-purple-500 animate-glow"
                >
                  <div className="text-white text-4xl z-20">{service.icon}</div>
                  <span className="absolute inset-0 rounded-xl bg-pink-500 opacity-30 blur-2xl animate-pulse"></span>
                </div>

                <h3 className="relative z-10 text-xl font-bold mb-3 text-white">
                  {service.title}
                </h3>
                <p className="relative z-10 text-purple-200 mb-6">
                  {service.description}
                </p>

                <ul className="relative z-10 list-none text-sm text-purple-100 space-y-1">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className={`flex items-center transition-all duration-700 ease-out
                      ${
                        visibleFeatures[serviceIndex]?.[i]
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 -translate-x-6"
                      }`}
                      style={{ transitionDelay: `${i * 150}ms` }}
                    >
                      <span className="text-green-400 mr-2">✔</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Embedded glowing animation styles */}
        <style>
          {`
          @keyframes glow {
            0%, 100% {
              box-shadow: 0 0 8px 2px rgba(236, 72, 153, 0.6);
            }
            50% {
              box-shadow: 0 0 16px 4px rgba(236, 72, 153, 0.9);
            }
          }

          .animate-glow {
            animation: glow 2.5s ease-in-out infinite;
          }
        `}
        </style>
      </>
      {/* why choose our section */}
      <section
        id="about"
        className="relative bg-gradient-to-br from-[#2e0854] to-[#4b1d6d] py-20 px-6 text-white overflow-hidden"
      >
        {/* Magical sparkles inside this section only */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none z-0 overflow-hidden "
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
            <h2 className="text-6xl  font-bold mb-3">
              <span className="text-white">Why </span>
              <span className="text-purple-400">choose </span>
              <span className="text-white">our section</span>
            </h2>
            <p className="text-purple-200 mb-8 text-lg leading-relaxed">
              At Genie Hack, we help businesses grow through smart design,
              powerful content, and proven digital strategies. From websites to
              social media — we turn your brand into a magnet for clients.
            </p>
            <MagicalStats />
            <a
              href="#contact"
              className="bg-gradient-to-r from-pink-500 to-purple-500 hover:opacity-90 transition px-6 py-2 rounded-xl font-medium text-white"
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

        {/* Magical CSS */}
        <style>{`
    /* Sparkles */
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

    /* Softer glowing heading */
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

    /* Shimmer on button */
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

      {/*  process section */}
      <section id="process">
        <ProcessSection />
      </section>
      {/* testimonials  */}
      <section id="testimonials">
        <TestimonialsSection />
      </section>
      {/* frequenly */}
      <section id="faq">
        <FAQSection />
      </section>
      {/* call to action */}
      <section id="contact">
        <TransformSection />
      </section>
      {/* footer */}
      <footer className="bg-[#2b1445] text-gray-300 px-6 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & Social */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="p-1 rounded-full">
                <img
                  src="/IMG_0055 (1).PNG"
                  alt="Genie Hack Logo"
                  className="h-8 w-full rounded-full object-cover"
                />
              </div>
              <h3 className="font-bold text-lg bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent">
                GenieHack
              </h3>
            </div>

            <p className="text-sm">
              Transforming digital businesses with professional video editing,
              motion graphics, and branding services.
            </p>
            <div className="flex gap-4 mt-4 text-white">
              <a
                href="https://instagram.com/geniehack_"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-4 h-4 hover:text-pink-400 transition" />
              </a>
              <a
                href="https://www.linkedin.com/company/geniehack/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-4 h-4 hover:text-pink-400 transition" />
              </a>
              <a
                href="https://facebook.com/geniehack.team"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="w-4 h-4 hover:text-pink-400 transition" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-3">Services</h4>
            <ul className="space-y-1 text-sm">
              <li>Video Editing</li>
              <li>Motion Graphics</li>
              <li>Social Management</li>
              <li>Branding</li>
              <li>Website Building</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-3">Company</h4>
            <ul className="space-y-1 text-sm">
              <li>About Us</li>
              <li>Our Work</li>
              <li>Testimonials</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                geniehack.team@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                +880 1306548047
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Sylhet, Bangladesh
              </li>
            </ul>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="text-center text-xs text-gray-500 mt-10 border-t border-gray-700 pt-6">
          © 2025 GenieHack. All rights reserved. Created by genie team 🧠
        </div>
      </footer>
    </div>
  );
};

export default App;
