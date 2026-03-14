import { Card } from '../components/ui/card'

import cLogo from '../assets/C.png'
import sqlLogo from '../assets/sql.png'
import image5 from '../assets/5.jpg'

const skills = [
  {
    name: 'C',
    bg: '!bg-green-200',
    iconType: 'image' as const,
    iconSrc: cLogo,
  },
  {
    name: 'SQL',
    bg: '!bg-purple-200',
    iconType: 'image' as const,
    iconSrc: sqlLogo,
  },
  {
    name: 'HTML',
    bg: '!bg-teal-200',
    iconType: 'icon' as const,
    iconClass: 'bx bxl-html5',
  },
  {
    name: 'CSS',
    bg: '!bg-yellow-200',
    iconType: 'icon' as const,
    iconClass: 'bx bxl-css3',
  },
  {
    name: 'JavaScript',
    bg: '!bg-orange-200',
    iconType: 'icon' as const,
    iconClass: 'bx bxl-javascript',
  },
  {
    name: 'Bootstrap',
    bg: '!bg-blue-200',
    iconType: 'icon' as const,
    iconClass: 'bx bxl-bootstrap',
  },
  {
    name: 'React',
    bg: '!bg-cyan-200',
    iconType: 'icon' as const,
    iconClass: 'bx bxl-react',
  },
  {
    name: 'Java',
    bg: '!bg-red-200',
    iconType: 'icon' as const,
    iconClass: 'bx bxl-java',
  },
  {
    name: 'Tailwind CSS',
    bg: '!bg-sky-200',
    iconType: 'icon' as const,
    iconClass: 'bx bxl-tailwind-css',
  },
  {
    name: 'Git & Github',
    bg: '!bg-gray-200',
    iconType: 'icon' as const,
    iconClass: 'bx bxl-github',
  },
]

export default function Skills() {
  return (
    <section id="Skill" className="py-2">
      <div className="container mx-auto">
        <h3 className="text-4xl font-semibold text-center mt-5 mb-10 uppercase tracking-widest">
          Skills
        </h3>
        <div className="flex flex-col md:flex-row items-stretch gap-20 max-w-5xl mx-auto">
          <div className="w-full md:w-6/12 gap-4 flex flex-col h-full">
            <div className="h-full flex flex-col">
              <div className="grid md:grid-cols-2 gap-4 h-full">
                {skills.map((skill) => (
                  <Card
                    key={skill.name}
                    className={`${skill.bg} flex items-center gap-4 p-4 border-2 border-black transition hover:shadow-[5px_5px_0px_black]`}
                  >
                    <div className="flex items-center justify-center w-12 h-12 bg-white border-2 border-black">
                      {skill.iconType === 'image' && skill.iconSrc ? (
                        <img
                          src={skill.iconSrc}
                          alt={skill.name}
                          className="w-10 h-10"
                        />
                      ) : (
                        <i className={`${skill.iconClass} text-2xl`}></i>
                      )}
                    </div>
                    <h6 className="font-semibold text-black">{skill.name}</h6>
                  </Card>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center items-center h-full">
            <div className="flex w-full h-full">
              <img
                src={image5}
                alt="Skills Illustration"
                className="rounded-lg shadow-lg w-full h-full object-cover"
                style={{
                  minHeight: '100%',
                  minWidth: '100%',
                  aspectRatio: '1/1',
                  maxHeight: '500px',
                  maxWidth: '500px',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
