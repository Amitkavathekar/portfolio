import { Button } from "../components/ui/button.tsx"

// Helper for smooth scrolling with navbar offset
const scrollToSection = (id: string) => {
  const section = document.getElementById(id)
  if (!section) return

  const navbarHeight = 72 // approx height of fixed header
  const sectionTop = section.getBoundingClientRect().top + window.scrollY

  window.scrollTo({
    top: sectionTop - navbarHeight,
    behavior: "smooth",
  })
}

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full bg-white shadow">
      <div
        className="
          mx-auto flex max-w-6xl items-center justify-between
          px-4 py-3
          max-[480px]:px-3 max-[480px]:py-2
          sm:px-6 sm:py-4
        "
      >
        {/* Logo / Name */}
        <button
          onClick={() => scrollToSection("home")}
          className="rounded outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
        >
          <h1
            className="
              cursor-pointer select-none
              text-lg font-bold
              max-[480px]:text-base
              sm:text-xl
            "
          >
            Amit <span className="text-orange-500">Kavathekar</span>
          </h1>
        </button>

        <nav className="hidden gap-6 font-medium md:flex">
          <button
            onClick={() => scrollToSection("home")}
            className="cursor-pointer"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("experience")}
            className="cursor-pointer"
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="cursor-pointer"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="cursor-pointer"
          >
            Projects
          </button>
        </nav>

        <Button
          onClick={() => scrollToSection("contact")}
          className="bg-orange-500 tracking-widest text-white uppercase shadow-[6px_6px_0px_#d1d5db] transition hover:text-black hover:shadow-[6px_6px_0px_#ea580c] active:text-black active:shadow-[6px_6px_0px_#ea580c]"
        >
          Contact
        </Button>
      </div>
    </header>
  )
}
