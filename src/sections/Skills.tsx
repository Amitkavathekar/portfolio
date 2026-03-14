import { Card } from "../components/ui/card"
import { skillsImage } from "../assets"

// Use react-icons for consistent working icons
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaReact,
  FaJava,
  FaGithub,
  FaDatabase,
} from "react-icons/fa"
import { SiTailwindcss, SiC } from "react-icons/si"

// FaNodeJs has been removed, as requested

const skills = [
  {
    name: "C",
    bg: "!bg-green-200",
    type: "react-icon",
    icon: <SiC className="text-2xl text-green-600" />,
  },
  {
    name: "SQL",
    bg: "!bg-purple-200",
    type: "react-icon",
    icon: <FaDatabase className="text-2xl text-purple-700" />,
  },
  {
    name: "HTML",
    bg: "!bg-teal-200",
    type: "react-icon",
    icon: <FaHtml5 className="text-2xl text-orange-600" />,
  },
  {
    name: "CSS",
    bg: "!bg-yellow-200",
    type: "react-icon",
    icon: <FaCss3Alt className="text-2xl text-blue-600" />,
  },
  {
    name: "JavaScript",
    bg: "!bg-orange-200",
    type: "react-icon",
    icon: <FaJs className="text-2xl text-yellow-500" />,
  },
  {
    name: "Bootstrap",
    bg: "!bg-blue-200",
    type: "react-icon",
    icon: <FaBootstrap className="text-2xl text-purple-700" />,
  },
  {
    name: "React",
    bg: "!bg-cyan-200",
    type: "react-icon",
    icon: <FaReact className="text-2xl text-cyan-400" />,
  },
  {
    name: "Java",
    bg: "!bg-red-200",
    type: "react-icon",
    icon: <FaJava className="text-2xl text-red-600" />,
  },
  {
    name: "Tailwind CSS",
    bg: "!bg-sky-200",
    type: "react-icon",
    icon: <SiTailwindcss className="text-2xl text-sky-500" />,
  },
  {
    name: "Github",
    bg: "!bg-gray-200",
    type: "react-icon",
    icon: <FaGithub className="text-2xl text-black" />,
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-2">
      <div className="container mx-auto">
        <h3 className="mt-5 mb-10 text-center text-4xl font-semibold tracking-widest uppercase">
          Skills
        </h3>
        <div className="mx-auto flex max-w-5xl flex-col items-stretch gap-20 md:flex-row">
          <div className="flex h-full w-full flex-col gap-4 md:w-6/12">
            <div className="flex h-full flex-col">
              <div className="grid h-full gap-4 md:grid-cols-2">
                {skills.map((skill) => (
                  <Card
                    key={skill.name}
                    className={`${skill.bg} flex items-center gap-4 border-2 border-black p-4 transition hover:shadow-[5px_5px_0px_black]`}
                  >
                    <div className="flex h-12 w-12 items-center justify-center border-2 border-black bg-white">
                      {skill.icon}
                    </div>
                    <h6 className="font-semibold text-black">{skill.name}</h6>
                  </Card>
                ))}
              </div>
            </div>
          </div>
          <div className="flex h-full w-full items-center justify-center md:w-1/2">
            <div className="flex h-full w-full">
              <img
                src={skillsImage}
                alt="Skills Illustration"
                className="h-full w-full rounded-lg object-cover shadow-lg"
                style={{
                  minHeight: "100%",
                  minWidth: "100%",
                  aspectRatio: "1/1",
                  maxHeight: "500px",
                  maxWidth: "500px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
