import { useState } from 'react'
import { Button } from "../components/ui/button.tsx"
import { laptopworking } from "../assets"

export default function About() {
  const [copied, setCopied] = useState(false)
  const email = 'amitkavathekar123@example.com' // Replace with your email

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section
      id="about"
      className="
        py-16
        max-[480px]:py-12
        sm:py-20
      "
    >
      <div
        className="
          mx-auto grid max-w-6xl items-center gap-10
          px-4
          max-[480px]:gap-8 max-[480px]:px-3
          sm:px-6
          md:grid-cols-2
        "
      >
        <img
          src={laptopworking}
          alt="Amit Kavathekar"
          className="
            w-full rounded-xl object-cover shadow-lg
            max-[480px]:max-h-64
            sm:max-h-80
            md:max-h-[360px]
          "
        />

        <div className="max-[480px]:text-center md:text-left">
          <h2
            className="
              mb-4
              text-2xl font-bold
              max-[480px]:text-xl
              sm:text-3xl
              md:text-4xl
            "
          >
            About Me
          </h2>
          <p
            className="
              mb-4 text-gray-600
              text-sm
              max-[480px]:text-xs
              sm:text-base
              md:text-lg
            "
          >
            Hello! I'm Amit Kavathekar, a passionate and motivated front-end
            developer eager to kickstart my career in the world of web
            development. I developed a strong foundation in HTML, CSS,
            JavaScript, and various front-end frameworks. I completed several
            projects that honed my skills in creating responsive and
            user-friendly web applications.
          </p>

          <Button
            onClick={handleCopyEmail}
            className="
              mt-4
              uppercase tracking-widest
              bg-orange-500 text-white
              shadow-[6px_6px_0px_#d1d5db]
              transition
              hover:text-black hover:shadow-[6px_6px_0px_#ea580c]
              active:text-black active:shadow-[6px_6px_0px_#ea580c]
              px-5 py-2 text-xs
              max-[480px]:px-4 max-[480px]:py-[7px] max-[480px]:text-[11px]
              sm:text-sm
              md:text-base
            "
            type="button"
          >
            {copied ? 'Copied!' : 'Copy Email'}
          </Button>
        </div>
      </div>
    </section>
  )
}
