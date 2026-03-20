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
import ProcessSection from "./ProcessSection";
import TestimonialsSection from "./TestimonialsSection";
import FAQSection from "./FAQSection";
import TransformSection from "./TransformSection";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Goal from "./goal";
import Service from "./Service";
import Footer from "./Footer";
import FounderSection from "./Founder";
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
        <FounderSection/>

   

    
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
