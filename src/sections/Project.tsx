import { Button } from "../components/ui/button.tsx"
import { Card } from "../components/ui/card.tsx"
import { mealaweImg, codeeditorImg } from "../assets"

// Import public images at the top
import blinkitImg from "/assets/img/blinkit home page.png"
import temperatureImg from "/assets/img/tempreture.jpg"
import organicFoodImg from "/assets/img/1 (2).jpg"
import googleHomeImg from "/assets/img/google.home.jpg"
// Fix quickcodeImg to use a placeholder since the file does not exist

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
    title: "Blinkit Website Clone",
    description:
      "A Blinkit website clone replicating the core functionality of Blinkit, an online grocery delivery service.",
    tech: "Frontend: HTML, CSS, JavaScript",
    image: blinkitImg,
    demo: "https://amitkavathekar.github.io/blinkit-clone/",
    reverse: false,
  },
  {
    title: "Temperature Converter",
    description:
      "A simple temperature converter project built with vanilla JavaScript.",
    image: temperatureImg,
    demo: "https://amitkavathekar.github.io/Temperature-Converter/",
    reverse: true,
  },
  {
    title: "Organic Food",
    description: "Simple landing page for organic food products.",
    tech: "Frontend: HTML, CSS",
    image: organicFoodImg,
    demo: "https://amitkavathekar.github.io/organic-food/",
    reverse: false,
  },
  {
    title: "Google Home Page",
    description:
      "A Google homepage clone that mimics the design and basic layout of the Google search page.",
    tech: "Frontend: HTML, CSS",
    image: googleHomeImg,
    demo: "https://amitkavathekar.github.io/google-home-page/",
    reverse: true,
  }
]

export default function Projects() {
  return (
    <section id="projects" className="bg-orange-50 py-24">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-16 text-center text-4xl font-semibold tracking-widest uppercase">
          Latest Project
        </h2>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`grid items-center gap-10 md:grid-cols-2 ${
                project.reverse ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* IMAGE */}
              <Card className="border-2 border-black shadow-none transition hover:shadow-[5px_5px_0px_black]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full object-cover"
                  onError={e => {
                    // fallback to placeholder if image fails to load
                    (e.currentTarget as HTMLImageElement).src = `https://via.placeholder.com/600x400?text=${encodeURIComponent(project.title + ' Image Not Found')}`
                  }}
                />
              </Card>

              {/* TEXT */}
              <div>
                <h3 className="mb-4 text-3xl font-semibold">{project.title}</h3>

                <p className="mb-4 text-gray-700">{project.description}</p>

                {project.tech && (
                  <p className="mb-6 text-gray-700">
                    Technology Stack: {project.tech}
                  </p>
                )}

                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <Button
                    className="
                      uppercase tracking-widest
                      bg-orange-500 text-white
                      shadow-[6px_6px_0px_#d1d5db]
                      transition
                      hover:text-black hover:shadow-[6px_6px_0px_#ea580c]
                      active:text-black active:shadow-[6px_6px_0px_#ea580c]
                    "
                  >
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