import { Timeline } from "./components/timeline";

const Service = () => {
  const data = [
    {
    title: "Video Editing",
    content: (
      <div>
        <p className="mb-8 text-xs font-normal text-neutral-300 md:text-sm ">
          Professional video editing that brings your vision to life with cinematic quality and storytelling excellence.
        </p>
        <div className="rounded-lg overflow-hidden shadow-lg">
          <video
            autoPlay
            muted
            loop
            controls={false}
            playsInline
            className="w-full h-auto object-cover rounded-lg"
          >
            <source src="/0709 (2) (1).mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    ),
  },
  {
    title: "Motion Graphics",
    content: (
      <div>
        <p className="mb-8 text-xs font-normal text-neutral-300 md:text-sm ">
          Dynamic animations and visual effects that captivate audiences and elevate your brand presence.
        </p>
        <div className="rounded-lg overflow-hidden shadow-lg">
          <video
            autoPlay
            muted
            loop
            controls={false}
            playsInline
            className="w-full h-auto object-cover rounded-lg"
          >
            <source src="/quality_restoration_20250709195718775.MP4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    ),
  },
    {
      title: "Social Management",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-300 md:text-sm ">
          Complete social media strategy and management to grow your online presence and engage your audience.
          </p>
          <div className="mb-8 space-y-1">
            {[
              "Content Strategy",
              "Community Management",
              "Analytics",
              "Growth Optimization",
            ].map((item, i) => (
              <div
                key={i}
                className="flex text-neutral-300 items-center gap-2 text-xs  md:text-sm dark:text-neutral-300"
              >
                {item}
              </div>
            ))}
          </div>
          <div className="grid  grid-cols-2 gap-4">
            {[
              { src: "/sm-2.jpg", alt: "" },
              { src: "/sm-3.webp", alt: "" },
              { src: "/sm-4.png", alt: "" },
              { src: "/sm.webp", alt: "" },
            ].map(({ src, alt }, i) => (
              <img
                key={i}
                src={`${src}`}
                alt={`${alt} template`}
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Branding",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-300 md:text-sm ">
         Comprehensive brand identity design that makes your business stand out in the digital landscape.
          </p>
          <div className="mb-8 space-y-1">
            {[
              "Logo Design",
              "Brand Guidelines",
              "Visual Identity",
              "Marketing Materials",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-xs text-neutral-300 md:text-sm dark:text-neutral-300"
              >
                {item}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { src: "/brand-2.jpg", alt: "hero" },
              { src: "/branding 1.jpeg", alt: "features" },
              { src: "/branding 3.webp", alt: "bento" },
              { src: "/branding 4.png", alt: "cards" },
            ].map(({ src, alt }, i) => (
              <img
                key={i}
                src={`${src}`}
                alt={`${alt} template`}
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Website Building",
      content: (
        <div className="text-neutral-300">
          <p className="mb-4 text-xs font-normal text-neutral-300 md:text-sm ">
        Stunning, high-performance websites that are modern, responsive, and designed to convert visitors into clients.
          </p>
          <div className="mb-8 space-y-1  text-neutral-300">
            {[
              "Responsive Design",
              "CMS Integration",
              "E-commerce Ready",
              "SEO Optimized",
            ].map((item, i) => (
              <div
                key={i}
                className="flex text-neutral-300 items-center gap-2 text-xs md:text-sm dark:text-neutral-300"
              >
                {item}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { src: "/web.jpg", alt: "hero" },
              { src: "website building.webp", alt: "features" },
              { src: "WhatsApp Image 2025-07-10 at 11.50.09 AM.jpeg", alt: "bento" },
              { src: "/coding.jpg", alt: "cards" },
            ].map(({ src, alt }, i) => (
              <img
                key={i}
                src={`${src}`}
                alt={`${alt} template`}
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
            ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
};

export default Service;