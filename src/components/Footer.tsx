import { Github, Linkedin, Instagram } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-[#373737] border-t border-white/70 py-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">

        {/* Social Icons */}
        <div className="flex gap-4 text-white text-xl mb-3 md:mb-0">

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
        <p className="text-white text-sm text-center md:text-right">
          ©2026 copyright all right reserved developed by{" "}
          <span className="text-orange-500 font-medium">
            Amit Kavathekar
          </span>
        </p>

      </div>
    </footer>
  )
}