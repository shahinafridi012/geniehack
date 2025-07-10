import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import {
  Lightbulb,
  Pen,
  Scissors,
  Image as ImageIcon,
  Send,
  LifeBuoy,
  RefreshCcw,
  Cast,
  Rocket,
  Palette,
  Smile,
} from "lucide-react";
import AnimatedTimeline from "./components/AnimatedTimeline";

gsap.registerPlugin(ScrollTrigger);

const timelineSteps = [
  {
    id: "01",
    title: "Discover & Plan",
    description:
      "We understand your brand, goals, and audience — then create a tailored digital growth roadmap.",
    icon: Lightbulb,
  },
  {
    id: "02",
    title: "Design & Build",
    description:
      "From websites to social posts, our designers and developers craft assets that elevate your brand.",
    icon: Pen,
  },
  {
    id: "03",
    title: "Edit & Animate",
    description:
      "We produce high-quality video edits and motion graphics that keep your audience hooked.",
    icon: Scissors,
  },
  {
    id: "04",
    title: "Brand & Optimize",
    description:
      "We fine-tune your visuals, messaging, and presence to match your identity and engage your market.",
    icon: ImageIcon,
  },
  {
    id: "05",
    title: "Launch & Grow",
    description:
      "We publish, manage, and scale your content across platforms for consistent growth and visibility.",
    icon: Send,
  },
];


const cardItems = [
  {
    icon: LifeBuoy,
    title: "24/7 Client Support",
    text: "Get instant help from our team — anytime, any day.",
  },
  {
    icon: RefreshCcw,
    title: "Flexible Revisions",
    text: "Need changes? We offer quick and easy revisions until you’re satisfied.",
  },
  {
    icon: Cast,
    title: "Content Delivery on Time",
    text: "We meet your deadlines without compromising quality.",
  },
  {
    icon: Rocket,
    title: "Growth-Focused Strategy",
    text: "Every project is built with one goal — to grow your business.",
  },
  {
    icon: Palette,
    title: "Brand Consistency",
    text: "We keep your visuals, tone, and content perfectly aligned.",
  },
  {
    icon: Smile,
    title: "Human-Centered Approach",
    text: "You’re not just a project — you’re a partner. We listen and deliver.",
  },
];




interface IconCardProps {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  text: string;
}

const IconCard: React.FC<IconCardProps> = ({ icon: Icon, title, text }) => (
  <div className="flex flex-col items-center gap-4 max-w-xs px-6">
    <Icon className="w-14 h-14 text-cyan-400" />
    <h3 className="font-semibold text-white text-xl text-center">{title}</h3>
    <p className="text-white/60 text-center text-sm">{text}</p>
  </div>
);

export default function ProcessSection() {
  
  useEffect(() => {
    gsap.from(".iconstext", {
      y: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".iconstext",
        start: "bottom center",
      },
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".icons-section",
        start: "top center",
        end: "bottom top",
        scrub: 1,
      },
    });

    tl.fromTo(
      ".icon-card:nth-child(1)",
      { x: 150 },
      { x: -135, ease: "power1.out" },
      0
    );
    tl.fromTo(
      ".icon-card:nth-child(2)",
      { y: 150 },
      { y: -60, ease: "power1.out" },
      0
    );
    tl.fromTo(
      ".icon-card:nth-child(3)",
      { x: -150 },
      { x: 135, ease: "power1.out" },
      0
    );
    tl.fromTo(
      ".icon-card:nth-child(4)",
      { x: 150 },
      { x: -100, ease: "power1.out" },
      0
    );
    tl.fromTo(
      ".icon-card:nth-child(5)",
      { y: -150 },
      { y: 60, ease: "power1.out" },
      0
    );
    tl.fromTo(
      ".icon-card:nth-child(6)",
      { x: -150 },
      { x: 100, ease: "power1.out" },
      0
    );
  }, []);

  return (
    <section className="relative bg-black text-white py-16 px-6 overflow-hidden min-h-screen">
 
 <AnimatedTimeline timelineSteps={timelineSteps} />
      {/* Icons Section */}
      <section className="icons-section w-full z-20 relative">
        <h2 className="iconstext pb-12 font-bold text-white text-5xl text-center max-w-4xl mx-auto">
          Plenty of cool stuff
        </h2>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-16 container w-full px-6">
            {cardItems.map((item, idx) => (
              <div className="icon-card flex justify-center" key={idx}>
                <IconCard icon={item.icon} title={item.title} text={item.text} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
