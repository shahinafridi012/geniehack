import { Facebook, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 px-6 py-8 text-sm">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center border-b border-gray-800 pb-6">
        {/* Left: Logo & Brand Name */}
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <img
            src="/IMG_0055 (1).PNG"
            alt="GenieHack Logo"
            className="h-9 rounded-full object-cover"
          />
          <h3 className="font-bold text-lg bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent">
            GenieHack
          </h3>
        </div>

        {/* Center: Policy Links */}
        <div className="flex gap-6 text-gray-400 text-xs">
          <a href="/terms" className="hover:text-white transition">
            Terms & Conditions
          </a>
          <a href="/refund" className="hover:text-white transition">
            Refund Policy
          </a>
          <a href="/privacy" className="hover:text-white transition">
            Privacy Policy
          </a>
        </div>

        {/* Right: Social Icons */}
        <div className="flex gap-4 mt-4 md:mt-0">
          <a
            href="https://www.linkedin.com/company/geniehack/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-white transition"
          >
            <Linkedin className="w-5 h-5" />
          </a>

          <a
            href="https://facebook.com/geniehack.team"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-white transition"
          >
            <Facebook className="w-5 h-5" />
          </a>

          <a
            href="https://instagram.com/geniehack_"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-white transition"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-4 text-center text-xs text-gray-500">
        © 2025 geniehack | all rights reserved by geniehack
      </div>
    </footer>
  );
};

export default Footer;
