"use client";

import { motion } from "framer-motion";

const team = [
  {
    name: "Shahin Afridi",
    role: "Senior Developer / Tech Lead",
    img: "/shahinahmed.jpeg",
  },
  {
    name: "Muntasim Fahim",
    role: "Web Developer / SEO Expert",
    img: "/muntasim-fahim.png",
  },
  {
    name: "Rashan Ahmed",
    role: "Video Editor / Social Media",
    img: "/rashan.png",
  },
  {
    name: "Imran Ahmed",
    role: "Motion Graphics Designer",
    img: "/emon.png",
  },
  {
    name: "Fahim Al Chy",
    role: "UI/UX Designer",
    img: "/fahim.png",
  },
  {
    name: "Syed Abrar",
    role: "Growth Marketing",
    img: "/team6.png",
  },
];

export default function LeadershipSection() {
  return (
    <section className="w-full lg:py-5 text-white">
      <div className="max-w-7xl mx-auto px-6 space-y-20">
        {/* 🔥 FOUNDER SECTION */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT - IMAGE */}
          <div className="relative">
            <div className="w-full h-auto rounded-3xl overflow-hidden border border-white/10">
              <img
                src="/YasinAhmedmunna.jpg" // 🔁 your image
                className="w-full h-full object-cover"
              />
            </div>

            {/* Glow effect */}
            <div className="absolute -z-10 inset-0 blur-3xl bg-purple-500/20 rounded-full" />
          </div>

          {/* RIGHT - TEXT */}
          <div>
            <p className="text-sm text-purple-400 mb-3">Founder & Visionary</p>

            <h2 className="text-4xl font-semibold leading-tight">
              Yasin Ahmed Munna
            </h2>

            <p className="mt-4 text-gray-400 max-w-lg">
              Founder of GenieHack, building powerful digital solutions,
              AI-driven platforms, and scalable systems for modern businesses.
              Passionate about innovation, automation, and creating impactful
              user experiences.
            </p>

            {/* Optional CTA */}

            <a href="https://yasinmunn.com" target="_blank">
              <button className="mt-6 px-6 py-3 bg-purple-500 rounded-xl text-sm font-medium hover:bg-purple-600 transition">
                View Projects
              </button>
            </a>
          </div>
        </div>

        {/* 👥 TEAM SECTION */}
        <div className="grid md:grid-cols-2 gap-16">
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-4xl font-semibold leading-tight">
              Meet our <span className="text-purple-400">Team</span>
            </h2>

            <p className="mt-6 text-gray-400 max-w-md">
              We’re a dynamic group of individuals who are passionate about what
              we do and dedicated to delivering the best results for our
              clients.
            </p>
          </div>

          {/* RIGHT TEAM LIST */}
        <div className="grid md:grid-cols-2 gap-6">
  {team.map((member, i) => (
    <motion.div
      key={i}
      whileHover={{ x: 6 }}
      className="flex items-center gap-4 group relative"
    >
      {/* 🔥 LEFT LINE (modern touch) */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-6 h-[1px] bg-gradient-to-r from-purple-500/40 to-transparent opacity-0 group-hover:opacity-100 transition" />

      {/* AVATAR */}
      <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border border-white/10 flex-shrink-0">
        <img
          src={member.img}
          className="w-full h-full object-cover"
        />
      </div>

      {/* TEXT */}
      <div>
        <h4 className="text-sm md:text-base font-medium text-white group-hover:text-purple-400 transition">
          {member.name}
        </h4>

        <p className="text-xs md:text-sm text-gray-400">
          {member.role}
        </p>
      </div>
    </motion.div>
  ))}
</div>
        </div>
      </div>
    </section>
  );
}
