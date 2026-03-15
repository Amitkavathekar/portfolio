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
    <section
      id="contact"
      className="
        flex justify-center bg-gray-100
        py-16
        max-[480px]:py-12
        sm:py-16
      "
    >
      <div
        className="
          w-full max-w-4xl rounded-lg bg-black
          px-4 py-12
          max-[480px]:px-4 max-[480px]:py-10
          sm:px-6 sm:py-14
          md:py-16
          text-white
        "
      >
        {/* Title */}
        <h1
          className="
            mb-6 text-center
            text-3xl font-semibold
            max-[480px]:text-2xl
            sm:text-3xl
            md:text-4xl
          "
        >
          Contact Me
        </h1>

        {/* Description */}
        <p className="text-center text-gray-300 text-sm max-[480px]:text-xs sm:text-base">
          If you have any questions or want to get in touch, feel free
        </p>
        <p className="mb-4 text-center text-gray-300 text-sm max-[480px]:text-xs sm:text-base">
          to drop me an email. I would love to hear from you!
        </p>

        <h5
          className="
            mb-10 text-center
            text-base
            max-[480px]:text-sm
            sm:text-lg
          "
        >
          Let's Build Together
        </h5>

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
            className={`
              ${getButtonClass()}
              px-6 py-2 text-xs
              max-[480px]:px-5 max-[480px]:py-[7px] max-[480px]:text-[11px]
              sm:text-sm
              md:text-base
            `}
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
              <h5 className="text-sm text-gray-300 uppercase max-[480px]:text-xs">
                Phone
              </h5>
              <p className="text-lg font-medium max-[480px]:text-base">
                +91 8208815791
              </p>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center border-2 border-black bg-[#feccb5]">
              <MapPin size={22} />
            </div>

            <div>
              <h5 className="text-sm text-gray-300 uppercase max-[480px]:text-xs">
                Address
              </h5>
              <p className="text-lg font-medium max-[480px]:text-base">
                Pune, Maharashtra
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
