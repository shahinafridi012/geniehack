"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
  {
    question: "Tell me about your agency?",
    answer:
      "We’re a full-service digital agency focused on design, content, and growth — all under one roof.",
  },
  {
    question: "Tell me about your content plan?",
    answer:
      "We analyze your existing content, identify your niche and offer a comprehensive content plan catering to your personal brand.",
  },
  {
    question: "What services will you provide?",
    answer:
      "Video editing, branding, social media management, motion graphics, web development — all tailored to your goals.",
  },
  {
    question: "What if I don’t get the results?",
    answer:
      "We track performance and adjust your strategy until we meet your goals. We're here for the long run.",
  },
  {
    question: "Why wouldn’t I hire a freelancer?",
    answer:
      "With GenieHack, you get a full team — strategists, designers, editors — all working together for your growth.",
  },
  {
    question: "Tell me about your workflow?",
    answer:
      "We start with research, then plan, create, revise, and launch. It’s seamless, efficient, and stress-free.",
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section className="bg-black text-white py-20 px-6">
      <h2 className="text-center text-4xl sm:text-5xl font-bold mb-10">
        Questions You May <span className="text-purple-400">Ask</span>
      </h2>

      <div className="grid gap-4 md:grid-cols-2 max-w-5xl mx-auto">
        {faqs.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="bg-[#111111] border border-gray-800 rounded-xl overflow-hidden transition hover:border-purple-600"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-6 py-5 text-left group"
              >
                <span className="font-medium text-sm sm:text-base text-white group-hover:text-purple-400">
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                    isOpen ? "rotate-180 text-purple-400" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-5 text-sm text-gray-300"
                  >
                    {item.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQSection;
