import { Card, CardContent } from "../components/ui/card";

type Experience = {
  company: string;
  role: string;
  tech: string;
  logo: string;
};

const experiences: Experience[] = [
  {
    company: "Codsoft",
    role: "Web Developer Intern",
    tech: "HTML, CSS, JavaScript",
    logo: "/assets/img/codsoft.jpeg",
  },
  {
    company: "CipherByte Technologies",
    role: "Web Developer Intern",
    tech: "HTML, CSS, JavaScript",
    logo: "/assets/img/cybertech.png",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen bg-cover bg-center py-20"
      style={{ backgroundImage: "url('/assets/img/2.jpg')" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-center mb-16">
          My Experience
        </h2>

        {/* Experience Cards */}
        <div className="flex flex-col items-center gap-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="w-full max-w-xl border-2 border-black shadow-md hover:shadow-lg transition"
            >
              <CardContent className="flex items-center gap-6 p-6">
                {/* Logo */}
                <div className="w-16 h-16 flex items-center justify-center border-2 border-black bg-white">
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="w-10 h-10 object-contain"
                  />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-semibold">
                    Role: {exp.role}
                  </h3>
                  <p className="text-lg font-medium">
                    Company: {exp.company}
                  </p>
                  <p className="text-gray-600">
                    Tech Stack: {exp.tech}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}