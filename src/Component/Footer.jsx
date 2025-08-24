// Footer.jsx
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaGithub, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full bg-black text-white py-16 px-6 flex flex-col items-center">
      <h3
        className="text-3xl sm:text-4xl font-extrabold mb-4 text-center"
        style={{ fontFamily: "'Orbitron', sans-serif", letterSpacing: '2px' }}
      >
        F1 Racing Official
      </h3>

      <p
        className="text-gray-400 text-center mb-8 max-w-2xl"
        style={{ fontFamily: "'Roboto', sans-serif", lineHeight: "1.6", fontWeight: 500 }}
      >
        Bringing you the fastest cars, the fiercest drivers, and the most thrilling races around the globe. Stay connected with the world of F1.
      </p>

      {/* Social Icons */}
      <div className="flex space-x-6 mb-6 text-2xl">
        <a href="https://x.com/FaizanNasim8" className="hover:text-red-500 transition">
          <FaTwitter />
        </a>
        <a href="https://www.youtube.com/@CodeWithFaizan-x8w" className="hover:text-red-500 transition">
          <FaYoutube />
        </a>
        <a href="https://github.com/faizannasim" className="hover:text-red-500 transition">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/faizan-nasim-2262a930a/" className="hover:text-red-500 transition">
          <FaLinkedinIn />
        </a>
      </div>

      <p
        className="text-gray-500 text-sm text-center"
        style={{ fontFamily: "'Roboto', sans-serif" }}
      >
        &copy; 2025 F1 Racing. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
