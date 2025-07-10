import { InfiniteMovingCards } from "./components/infinite-moving-cards";
import { motion } from "framer-motion";
import { PointerHighlight } from "./components/pointer-highlight";

const testimonials = [
  {
    quote:
      "Genie Hack took the time to understand our business goals before jumping into design or development. They weren’t just building a website—they were building a digital experience that aligned with our brand and truly resonated with our customers. We’ve seen a 40% increase in conversions since launch.",
    name: "Emily Carter",
    title: "Marketing Manager at BrightPath Solutions",
  },
  {
    quote:
      "We hired Genie Hack to help with our product launch, expecting just a landing page. What we got was a fully responsive, beautifully animated interface backed by lightning-fast performance. Their attention to detail and communication throughout the project was top-tier.",
    name: "Rahim Chowdhury",
    title: "Founder & CEO, TechNova Ltd.",
  },
  {
    quote:
      "After struggling with SEO and slow site speed for months, Genie Hack stepped in and completely revamped our technical stack. They improved loading time by 65%, optimized every asset, and got us to the top 3 rankings on Google for our main keywords. The results were beyond what we hoped for.",
    name: "Jenna Park",
    title: "E-commerce Director at ZenCart",
  },
  {
    quote:
      "The Genie Hack team felt like an extension of our own. From project kickoff to final delivery, they were always transparent, proactive, and highly skilled. They transformed our dashboard UX into something our users now rave about—smooth, intuitive, and polished.",
    name: "Omar Faruk",
    title: "Product Manager at FlowSpace",
  },
  {
    quote:
      "What really stood out was their storytelling through design. We wanted something visually impactful but not overwhelming—and they delivered exactly that. Our brand now looks premium, trustworthy, and modern. Couldn't have asked for a better creative partner.",
    name: "Sophia Martinez",
    title: "Creative Lead at Lumen Creative Agency",
  },
];


const TestimonialsSection = () => {
  return (
    <div className="relative h-[46rem] w-full bg-black overflow-hidden px-4 sm:px-6 flex flex-col items-center justify-center">
      {/* Glowing background blur */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-blue-500 via-purple-600 to-pink-500 opacity-30 blur-3xl" />
      </div>

      {/* Animated Title */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="text-white text-6xl sm:text-4xl font-bold mb-4 text-center"
>
  <span className="inline">What Our </span>
  <PointerHighlight containerClassName="inline-block">
    <span className="inline">Clients</span>
  </PointerHighlight>
  <span className="inline"> say</span>
</motion.div>




      {/* Description below title */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-gray-300 text-base sm:text-lg mb-10 max-w-2xl text-center"
      >
        Hear directly from those who experienced our commitment to quality,
        creativity, and results. These words reflect the impact we strive to
        make every day.
      </motion.p>

      {/* Infinite Moving Cards with edge mask */}
      <div className="relative w-full max-w-6xl">
        {/* Fading edge effect */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black to-transparent z-10" />

        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        
        />
      </div>
    </div>
  );
};

export default TestimonialsSection;
