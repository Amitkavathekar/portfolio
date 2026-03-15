import { Button } from "../components/ui/button.tsx"
import { Card } from "../components/ui/card.tsx"
import {
  mealaweImg,
  codeeditorImg,
  // blinkitImg,
  temperatureImg,
  // organicFoodImg,
  googleHomeImg,
} from "../assets"

interface Project {
  title: string
  description: string
  tech?: string
  image: string
  demo: string
  reverse?: boolean
}

// Adjusted order per instruction: code editor, then mealawe, then blinkit, then others
const projects: Project[] = [
  {
    title: "QuickCode - Live Code Editor",
    description:
      "A real-time code editor with syntax highlighting, autocomplete, and live preview functionality. Includes dark/light mode, export to PDF, and one-click copy & clear actions.",
    tech: "HTML, CSS, JavaScript, Ace Editor Library",
    image: codeeditorImg,
    demo: "https://livecodeio.vercel.app/",
    reverse: false,
  },
  {
    title: "Mealawe Clone",
    description:
      "Food delivery platform UI inspired by the Mealawe platform. Built reusable React components and responsive UI using Tailwind CSS and Shadcn UI.",
    tech: "React.js, TypeScript, Tailwind CSS, Shadcn UI",
    image: mealaweImg,
    demo: "https://home-made-food-kocv.vercel.app/",
    reverse: true,
  },
  {
    title: "Temperature Converter",
    description:
      "A simple temperature converter project built with vanilla JavaScript.",
    image: temperatureImg,
    demo: "https://oibsip-taskno-3-temperature-convert.vercel.app/",
    reverse: true,
  },
  // {
  //   title: "Blinkit Website Clone",
  //   description:
  //     "A Blinkit website clone replicating the core functionality of Blinkit, an online grocery delivery service.",
  //   tech: "Frontend: HTML, CSS, JavaScript",
  //   image: blinkitImg,
  //   demo: "https://amitkavathekar.github.io/blinkit-clone/",
  //   reverse: false,
  // },
  // {
  //   title: "Organic Food",
  //   description: "Simple landing page for organic food products.",
  //   tech: "Frontend: HTML, CSS",
  //   image: organicFoodImg,
  //   demo: "https://oibsip-taskno-1-landingpage.vercel.app/",
  //   reverse: false,
  // },
  {
    title: "Google Home Page",
    description:
      "A Google homepage clone that mimics the design and basic layout of the Google search page.",
    tech: "Frontend: HTML, CSS",
    image: googleHomeImg,
    demo: "https://google-home-page-beta.vercel.app/",
    reverse: true,
  },
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-orange-50 py-16 max-[480px]:py-12 sm:py-20 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 max-[480px]:px-3 sm:px-6">
        <h2 className="mb-12 text-center text-2xl font-semibold tracking-widest uppercase max-[480px]:text-xl sm:mb-14 sm:text-3xl md:mb-16 md:text-4xl">
          Latest Project
        </h2>

        <div className="space-y-16 sm:space-y-20 md:space-y-24">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`grid items-center gap-8 sm:gap-10 md:grid-cols-2 ${
                project.reverse ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* IMAGE */}
              <Card className="border-2 border-black shadow-none transition hover:shadow-[5px_5px_0px_black]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full object-cover max-[480px]:max-h-56 sm:max-h-72 md:max-h-80"
                  onError={(e) => {
                    // fallback to placeholder if image fails to load
                    ;(e.currentTarget as HTMLImageElement).src =
                      `https://via.placeholder.com/600x400?text=${encodeURIComponent(project.title + " Image Not Found")}`
                  }}
                />
              </Card>

              {/* TEXT */}
              <div className="max-[480px]:text-center md:text-left">
                <h3 className="mb-3 text-2xl font-semibold max-[480px]:text-xl sm:text-2xl md:mb-4 md:text-3xl">
                  {project.title}
                </h3>

                <p className="mb-3 text-sm text-gray-700 max-[480px]:text-xs sm:text-base">
                  {project.description}
                </p>

                {project.tech && (
                  <p className="mb-5 text-sm text-gray-700 max-[480px]:text-xs sm:mb-6 sm:text-base">
                    Technology Stack: {project.tech}
                  </p>
                )}

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-orange-500 tracking-widest text-white uppercase shadow-[6px_6px_0px_#d1d5db] transition hover:text-black hover:shadow-[6px_6px_0px_#ea580c] active:text-black active:shadow-[6px_6px_0px_#ea580c]">
                    Live Demo
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
