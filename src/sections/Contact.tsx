import { useState } from "react"
import { Button } from "../components/ui/button.tsx"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async (e: React.MouseEvent) => {
    e.preventDefault()
    const email = "amitkavathekar123@gmail.com"

    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => {
        setCopied(false)
      }, 2000)
    } catch (err) {
      console.error("Error copying email", err)
    }
  }

  return (
    <section id="contact" className="py-16 bg-gray-100 flex justify-center">
      <div className="max-w-4xl w-full bg-black text-white py-16 px-6 rounded-lg">

        {/* Title */}
        <h1 className="text-4xl text-center mb-6 font-semibold">
          Contact Me
        </h1>

        {/* Description */}
        <p className="text-center text-gray-300">
          If you have any questions or want to get in touch, feel free
        </p>
        <p className="text-center text-gray-300 mb-4">
          to drop me an email. I would love to hear from you!
        </p>

        <h5 className="text-center text-lg mb-10">
          Let's Build Together
        </h5>

        {/* Email Button */}
        <div className="flex justify-center mb-12">
          <a href="mailto:amitkavathekar123@gmail.com">
            <Button
              onClick={copyEmail}
              className={`
                uppercase tracking-widest shadow-[6px_6px_0px_#d1d5db] bg-orange-500 text-white transition
                hover:bg-black hover:text-white
                active:bg-black active:text-white
              `}
            >
              {copied ? "Copied!" : "Let's Connect"}
              <Mail className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>

        {/* Contact Info */}
        <div className="space-y-8">

          {/* Phone */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 flex items-center justify-center border-2 border-black bg-[#9bd3d0]">
              <Phone size={22} />
            </div>

            <div>
              <h5 className="uppercase text-sm text-gray-300">Phone</h5>
              <p className="text-lg font-medium">
                +91 8208815791
              </p>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 flex items-center justify-center border-2 border-black bg-[#feccb5]">
              <MapPin size={22} />
            </div>

            <div>
              <h5 className="uppercase text-sm text-gray-300">Address</h5>
              <p className="text-lg font-medium">
                Pune, Maharashtra
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}