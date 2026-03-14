import { Button } from "../components/ui/button.tsx";
import { Card } from "../components/ui/card.tsx";

interface Project {
  title: string;
  role: string;
  description: string;
  tech?: string;
  image: string;
  demo: string;
  reverse?: boolean;
}

const projects: Project[] = [
  {
    title: "Blinkit Website Clone",
    role: "Web Designer",
    description:
      "A Blinkit website clone replicating the core functionality of Blinkit, an online grocery delivery service.",
    tech: "Frontend: HTML, CSS, JavaScript",
    image: "/assets/img/blinkit home page.png",
    demo: "https://amitkavathekar.github.io/blinkit-clone/",
  },
  {
    title: "Temperature Converter",
    role: "Web Designer",
    description:
      "A simple temperature converter project built with vanilla JavaScript.",
    image: "/assets/img/tempreture.jpg",
    demo: "https://amitkavathekar.github.io/Temperature-Converter/",
    reverse: true,
  },
  {
    title: "Organic Food",
    role: "Web Designer",
    description: "Simple landing page for organic food products.",
    tech: "Frontend: HTML, CSS",
    image: "/assets/img/1 (2).jpg",
    demo: "https://amitkavathekar.github.io/organic-food/",
  },
  {
    title: "Google Home Page",
    role: "Web Designer",
    description:
      "A Google homepage clone that mimics the design and basic layout of the Google search page.",
    tech: "Frontend: HTML, CSS",
    image: "/assets/img/google.home.jpg",
    demo: "https://amitkavathekar.github.io/google-home-page/",
    reverse: true,
  },
];

export default function Projects() {
  return (
    <section id="portfolio" className="py-24 bg-orange-50">
      <div className="max-w-6xl mx-auto px-4">

        <h2 className="text-4xl font-semibold text-center mb-16 tracking-widest uppercase">
          Latest Project
        </h2>

        <div className="space-y-24">

          {projects.map((project, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-10 items-center ${
                project.reverse ? "md:flex-row-reverse" : ""
              }`}
            >

              {/* IMAGE */}
              <Card className="border-2 border-black shadow-none hover:shadow-[5px_5px_0px_black] transition">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full object-cover"
                />
              </Card>

              {/* TEXT */}
              <div>
                <span className="inline-block px-5 py-2 rounded-full bg-orange-200 text-sm tracking-widest uppercase mb-4">
                  {project.role}
                </span>

                <h3 className="text-3xl font-semibold mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-700 mb-4">
                  {project.description}
                </p>

                {project.tech && (
                  <p className="text-gray-700 mb-6">
                    Technology Stack: {project.tech}
                  </p>
                )}

                <a href={project.demo} target="_blank">
                  <Button className="shadow-[6px_6px_0px_black]">
                    Live Demo
                  </Button>
                </a>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}