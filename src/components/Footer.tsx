import { Github, Linkedin, Instagram } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-[#373737] border-t border-white/70 py-8 max-[480px]:py-6 sm:py-8">
      <div
        className="
          mx-auto flex max-w-6xl flex-col items-center justify-between
          gap-4
          px-4
          max-[480px]:px-3
          sm:flex-row sm:gap-0 sm:px-6
        "
      >

        {/* Social Icons */}
        <div className="mb-2 flex gap-4 text-xl text-white md:mb-0">

          <a
            href="https://wa.me/918208815791"
            target="_blank"
            className="hover:text-orange-500 transition"
          >
            <FaWhatsapp size={22} />
          </a>

          <a
            href="https://www.linkedin.com/in/amitkavathekar/"
            target="_blank"
            className="hover:text-orange-500 transition"
          >
            <Linkedin size={22} />
          </a>

          <a
            href="https://www.instagram.com/amittt_0x9/"
            target="_blank"
            className="hover:text-orange-500 transition"
          >
            <Instagram size={22} />
          </a>

          <a
            href="https://github.com/Amitkavathekar"
            target="_blank"
            className="hover:text-orange-500 transition"
          >
            <Github size={22} />
          </a>

        </div>

        {/* Copyright */}
        <p className="text-center text-xs text-white max-[480px]:text-[11px] sm:text-sm md:text-right">
          ©2026 copyright all right reserved developed by{" "}
          <span className="text-orange-500 font-medium">
            Amit Kavathekar
          </span>
        </p>

      </div>
    </footer>
  )
}