import { motion } from "framer-motion"
import { Button } from "../components/ui/button.tsx"
import { FaWhatsapp, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa"
import { useEffect, useRef } from "react"
import Typed from "typed.js"
import amitImage from "../assets/amit.jpg"
// Removed previous PDF import

const NEW_CV_LINK = "https://drive.google.com/file/d/18MjtY-mvB-GziYAmXkSlc2-E74fw6BcY/view"

export default function Hero() {
  const typedRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const typed = new Typed(typedRef.current!, {
      strings: ["Frontend Developer", "Web Developer", "React Developer"],
      typeSpeed: 160,
      backSpeed: 160,
      loop: true,
    })

    return () => typed.destroy()
  }, [])

  return (
    <section
      id="home"
      className="flex min-h-screen items-center bg-white pt-20"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2 xl:gap-24">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="text-left"
        >
          <h2 className="mb-1 text-lg font-medium tracking-tight text-gray-800 md:text-xl xl:text-2xl">
            Hi, I'm
          </h2>

          <h1 className="mt-1 mb-2 text-4xl leading-tight font-bold text-[#22223b] md:text-5xl xl:text-6xl">
            Amit Kavathekar
          </h1>

          {/* Typed Text */}
          <h3 className="mt-2 mb-3 text-xl font-semibold text-gray-700 md:text-2xl xl:text-3xl">
            I'm <span ref={typedRef} className="text-orange-500"></span>
          </h3>

          <p className="mt-3 max-w-xl text-base font-medium text-gray-600 md:text-lg xl:text-xl">
            Passionate Frontend Developer building beautiful modern UIs.
          </p>

          {/* CV Button */}
          <motion.a
            href={NEW_CV_LINK}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
          >
            <Button
              className="
                mt-5
                uppercase tracking-widest
                bg-orange-500 text-white
                shadow-[6px_6px_0px_#d1d5db]
                transition
                hover:text-black hover:shadow-[6px_6px_0px_#ea580c]
                active:text-black active:shadow-[6px_6px_0px_#ea580c]
              "
            >
              View CV
            </Button>
          </motion.a>

          {/* Social Icons */}
          <div className="mt-7 flex gap-5 text-xl md:text-2xl">
            <a
              href="https://wa.me/918208815791"
              target="_blank"
              className="text-[#25D366] transition hover:scale-125"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.linkedin.com/in/amitkavathekar/"
              target="_blank"
              className="text-[#0077b5] transition hover:scale-125"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://instagram.com/amittt_0x9/"
              target="_blank"
              className="text-[#E1306C] transition hover:scale-125"
            >
              <FaInstagram />
            </a>
            <a
              href="https://github.com/Amitkavathekar"
              target="_blank"
              className="text-black transition hover:scale-125"
            >
              <FaGithub />
            </a>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex items-center justify-center"
        >
          <img
            src={amitImage}
            alt="Amit Kavathekar"
            className="h-[360px] w-[260px] rounded-2xl border-4 border-white object-cover shadow-2xl md:h-[520px] md:w-[400px] xl:h-[580px] xl:w-[460px]"
          />
        </motion.div>
      </div>
    </section>
  )
}
