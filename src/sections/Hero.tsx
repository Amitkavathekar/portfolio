import { motion } from "framer-motion";
import { FaTelegramPlane, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import amitImage from "../assets/amit.jpg";
import AmitKavathekarResume from "../assets/AmitKavathekarResume final.pdf";

export default function Hero() {

  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current!, {
      strings: [
        "Frontend Developer",
        "Web Developer",
        "React Developer",
        "UI Designer"
      ],
      typeSpeed: 160,
      backSpeed: 160,
      loop: true
    });

    return () => typed.destroy();
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 xl:gap-24 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="text-left"
        >
          <h2 className="text-lg md:text-xl xl:text-2xl font-medium tracking-tight mb-1 text-gray-800">
            Hi, I'm
          </h2>

          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold mt-1 mb-2 text-[#22223b] leading-tight">
            Amit Kavathekar
          </h1>

          {/* Typed Text */}
          <h3 className="text-xl md:text-2xl xl:text-3xl font-semibold text-gray-700 mt-2 mb-3">
            I'm <span ref={typedRef} className="text-orange-500"></span>
          </h3>

          <p className="mt-3 text-base md:text-lg xl:text-xl text-gray-600 font-medium max-w-xl">
            Passionate Frontend Developer building beautiful modern UIs.
          </p>

          {/* CV Button */}
          <motion.a
            href={AmitKavathekarResume}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="mt-5 inline-block bg-orange-500 text-white px-5 py-2 rounded-lg text-base md:text-lg xl:text-xl font-semibold shadow-[4px_4px_0px_#d1d5db] transition hover:bg-black hover:text-white"
          >
            View CV
          </motion.a>

          {/* Social Icons */}
          <div className="flex gap-5 mt-7 text-xl md:text-2xl">
            <a href="https://t.me/Amitkavathekar" target="_blank" className="text-[#229ED9] hover:scale-125 transition">
              <FaTelegramPlane />
            </a>
            <a href="https://www.linkedin.com/in/amitkavathekar/" target="_blank" className="text-[#0077b5] hover:scale-125 transition">
              <FaLinkedin />
            </a>
            <a href="https://instagram.com/amittt_0x9/" target="_blank" className="text-[#E1306C] hover:scale-125 transition">
              <FaInstagram />
            </a>
            <a href="https://github.com/Amitkavathekar" target="_blank" className="text-black hover:scale-125 transition">
              <FaGithub />
            </a>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center items-center"
        >
          <img
            src={amitImage}
            alt="Amit Kavathekar"
            className="rounded-2xl shadow-2xl object-cover w-[260px] h-[360px] md:w-[400px] md:h-[520px] xl:w-[460px] xl:h-[580px] border-4 border-white"
          />
        </motion.div>

      </div>
    </section>
  );
}