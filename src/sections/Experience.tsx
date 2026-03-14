import { Card, CardContent } from "../components/ui/card"
import codsoft from "../assets/codsoft.jpeg"

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen bg-cover bg-center py-20"
      style={{ backgroundImage: "url('/assets/img/2.jpg')" }}
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Heading */}
        <h2 className="mb-16 text-center text-4xl font-bold">My Experience</h2>

        {/* Experience Card */}
        <div className="flex flex-col items-center gap-8">
          <Card className="w-full max-w-xl border-2 border-black shadow-md transition hover:shadow-lg">
            <CardContent className="flex items-center gap-6 p-6">
              {/* Logo */}
              <div className="flex h-16 w-16 items-center justify-center border-2 border-black bg-white">
                <img
                  src={codsoft}
                  alt="CodSoft"
                  className="h-10 w-10 object-contain"
                />
              </div>
              {/* Content */}
              <div>
                <h3 className="text-xl font-semibold">Role: Intern</h3>
                <p className="text-lg font-medium">Company: CodSoft</p>
                <p className="text-gray-600">Tech Stack: React, TypeScript</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
