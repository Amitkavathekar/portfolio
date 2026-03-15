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
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <img
          src={laptopworking}
          alt="Amit Kavathekar"
          className="rounded-xl shadow-lg w-full object-cover"
        />

        <div>
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-gray-600 mb-4">
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
