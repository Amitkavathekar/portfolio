import { motion } from "framer-motion"
import { Button } from "../components/ui/button.tsx"
import { FaWhatsapp, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa"
import { useEffect, useRef } from "react"
import Typed from "typed.js"
import { amitImage } from "../assets"

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
      className="
        flex
        min-h-screen
        items-center
        bg-white
        pt-10
        small-mobile:pt-6
        big-phone:pt-[20px]
        md:pt-20
        justify-center
      "
    >
      <div
        className="
          mx-auto
          grid
          max-w-6xl
          items-center
          gap-8
          small-mobile:gap-5
          big-phone:gap-[20px]
          md:grid-cols-2
          md:gap-14
          lg:gap-20
          xl:gap-24
          px-4
          big-phone:px-[20px]
          md:px-8
          justify-items-center
          text-center
        "
      >
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="
            flex flex-col items-center text-center
            w-full
          "
        >
          <h2 className="
            mb-1
            text-base
            font-medium
            tracking-tight
            text-gray-800
            small-mobile:text-sm
            big-phone:text-lg
            md:text-xl
            xl:text-2xl
          ">
            Hi, I'm
          </h2>

          <h1 className="
            mt-1 mb-2
            text-3xl
            leading-tight
            font-bold
            text-[#22223b]
            small-mobile:text-2xl
            big-phone:text-4xl
            md:text-5xl
            xl:text-6xl
          ">
            Amit Kavathekar
          </h1>

          {/* Typed Text */}
          <h3 className="
            mt-2 mb-3
            text-lg
            font-semibold
            text-gray-700
            small-mobile:text-base
            big-phone:text-xl
            md:text-2xl
            xl:text-3xl
          ">
            I'm <span ref={typedRef} className="text-orange-500"></span>
          </h3>

          <p className="
            mt-3
            max-w-xl
            text-sm
            font-medium
            text-gray-600
            mx-auto
            small-mobile:text-xs
            big-phone:text-base
            md:text-lg
            xl:text-xl
          ">
            Passionate Frontend Developer building beautiful modern UIs.
          </p>

          {/* CV Button */}
          <motion.a
            href={NEW_CV_LINK}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="block mx-auto w-fit big-phone:mx-auto"
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
                px-6 py-2
                text-xs
                small-mobile:px-4 small-mobile:py-2 small-mobile:text-[11px]
                big-phone:text-sm big-phone:px-[20px] big-phone:py-[20px]
                md:text-base
                rounded-lg
              "
            >
              View CV
            </Button>
          </motion.a>

          {/* Social Icons */}
          <div className="
            mt-7
            flex
            gap-4
            justify-center
            big-phone:gap-[20px]
            text-lg
            big-phone:text-xl
            md:text-2xl
          ">
            <a
              href="https://wa.me/918208815791"
              target="_blank"
              className="text-[#25D366] transition hover:scale-125"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.linkedin.com/in/amitkavathekar/"
              target="_blank"
              className="text-[#0077b5] transition hover:scale-125"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://instagram.com/amittt_0x9/"
              target="_blank"
              className="text-[#E1306C] transition hover:scale-125"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://github.com/Amitkavathekar"
              target="_blank"
              className="text-black transition hover:scale-125"
              aria-label="GitHub"
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
          className="
            flex
            items-center
            justify-center
            small-mobile:mt-6
            big-phone:mt-[20px]
            md:mt-0
            w-full
          "
        >
          <img
            src={amitImage}
            alt="Amit Kavathekar"
            className="
              h-[200px] w-[140px]
              rounded-2xl border-4 border-white object-cover shadow-2xl
              big-phone:h-[280px] big-phone:w-[200px]
              md:h-[340px] md:w-[260px]
              lg:h-[420px] lg:w-[330px]
              xl:h-[580px] xl:w-[460px]
              small-mobile:h-[160px] small-mobile:w-[110px]
              transition-all
              mx-auto
            "
          />
        </motion.div>
      </div>
    </section>
  )
}
