import { useState } from "react"
import { Button } from "../components/ui/button.tsx"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [active, setActive] = useState(false)

  const email = "amitkavathekar123@gmail.com"

  // Open mailto link in a new tab and copy email (as per instruction)
  const handleLetsConnectClick = async (e: React.MouseEvent) => {
    e.preventDefault()
    try {
      window.open(`mailto:${email}`, "_blank")

      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => {
        setCopied(false)
      }, 2000)
    } catch (err) {
      console.error("Error copying email", err)
    }
  }

  // Compute styles for Button based on state
  const getButtonClass = () => {
    // Both active (click) and hovered should match instruction: text black and shadow orange
    if (active || hovered) {
      return `
        uppercase tracking-widest shadow-[6px_6px_0px_#ea580c] bg-orange-500 text-black
        transition
      `
    } else {
      return `
        uppercase tracking-widest shadow-[6px_6px_0px_#d1d5db] bg-orange-500 text-white
        transition
        hover:text-black
        hover:shadow-[6px_6px_0px_#ea580c]
        active:text-black
        active:shadow-[6px_6px_0px_#ea580c]
      `
    }
  }

  return (
    <section id="contact" className="flex justify-center bg-gray-100 py-16">
      <div className="w-full max-w-4xl rounded-lg bg-black px-6 py-16 text-white">
        {/* Title */}
        <h1 className="mb-6 text-center text-4xl font-semibold">Contact Me</h1>

        {/* Description */}
        <p className="text-center text-gray-300">
          If you have any questions or want to get in touch, feel free
        </p>
        <p className="mb-4 text-center text-gray-300">
          to drop me an email. I would love to hear from you!
        </p>

        <h5 className="mb-10 text-center text-lg">Let's Build Together</h5>

        {/* Email Button */}
        <div className="mb-12 flex justify-center">
          <Button
            onClick={handleLetsConnectClick}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => {
              setHovered(false)
              setActive(false)
            }}
            onMouseDown={() => setActive(true)}
            onMouseUp={() => setActive(false)}
            className={getButtonClass()}
          >
            <span
              className={`flex items-center ${hovered || active ? "text-black" : "text-white"} transition`}
              style={{
                color: hovered || active ? "#000" : undefined,
              }}
            >
              {copied ? "Copied!" : "Let's Connect"}
              <Mail className="ml-2 h-4 w-4" />
            </span>
          </Button>
        </div>

        {/* Contact Info */}
        <div className="space-y-8">
          {/* Phone */}
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center border-2 border-black bg-[#9bd3d0]">
              <Phone size={22} />
            </div>

            <div>
              <h5 className="text-sm text-gray-300 uppercase">Phone</h5>
              <p className="text-lg font-medium">+91 8208815791</p>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center border-2 border-black bg-[#feccb5]">
              <MapPin size={22} />
            </div>

            <div>
              <h5 className="text-sm text-gray-300 uppercase">Address</h5>
              <p className="text-lg font-medium">Pune, Maharashtra</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
