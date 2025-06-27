import React, { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How does GenieHack help grow my business?",
    answer:
      "We provide expert developers, SEO specialists, and marketing strategists to elevate your brand online.",
  },
  {
    question: "What services do you offer?",
    answer:
      "We offer website design, SEO optimization, social media management, video editing, and more.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project duration varies, but most projects complete within 4-8 weeks depending on complexity.",
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleIndex = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="bg-gradient-to-br from-[#3d0074] to-[#53177d] py-20 px-4 text-white text-center">
      <h2 className="text-4xl font-bold">
        Frequently Asked <span className="text-pink-400">Questions</span>
      </h2>
      <p className="text-sm text-gray-300 mt-2 max-w-xl mx-auto">
        Have questions? We’ve got answers. Here are some of the most common
        inquiries we receive.
      </p>

      <div className="max-w-2xl mx-auto mt-12 bg-gradient-to-br from-[#5e2e91] to-[#4b1e7e] border border-purple-500 rounded-xl overflow-hidden text-left">
        {faqs.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="border-b border-purple-600 last:border-b-0 cursor-pointer select-none"
              onClick={() => toggleIndex(index)}
            >
              <div className="flex justify-between items-center p-5">
                <h3 className="font-semibold text-sm">{item.question}</h3>
                <ChevronDown
                  className={`transition-transform duration-300 w-5 h-5 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </div>

              <div
                ref={(el) => (contentRefs.current[index] = el)}
                style={{
                  maxHeight: isOpen
                    ? contentRefs.current[index]?.scrollHeight + "px"
                    : "0px",
                  opacity: isOpen ? 1 : 0,
                  padding: isOpen ? "0 1.25rem 1.25rem" : "0 1.25rem 0",
                  transition:
                    "max-height 0.4s ease, opacity 0.3s ease 0.1s, padding 0.3s ease",
                  overflow: "hidden",
                }}
                className="text-sm text-gray-200"
              >
                {item.answer}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQSection;
