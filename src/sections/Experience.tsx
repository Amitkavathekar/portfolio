import { Card, CardContent } from "../components/ui/card"
import { codsoft, experienceBg } from "../assets"

export default function Experience() {
  return (
    <section
      id="experience"
      className="
        min-h-screen bg-cover bg-center
        py-16
        max-[480px]:py-12
        sm:py-20
      "
      style={{ backgroundImage: `url(${experienceBg})` }}
    >
      <div className="mx-auto max-w-6xl px-4 max-[480px]:px-3 sm:px-6">
        {/* Section Heading */}
        <h2
          className="
            mb-10 text-center
            text-3xl font-bold
            max-[480px]:text-2xl
            sm:mb-14 sm:text-3xl
            md:mb-16 md:text-4xl
          "
        >
          My Experience
        </h2>

        {/* Experience Card */}
        <div className="flex flex-col items-center gap-8">
          <Card className="w-full max-w-xl border-2 border-black shadow-md transition hover:shadow-lg">
            <CardContent
              className="
                flex items-center gap-5 p-5
                max-[480px]:flex-col max-[480px]:items-start max-[480px]:p-4
                sm:gap-6 sm:p-6
              "
            >
              {/* Logo */}
              <div
                className="
                  flex h-16 w-16 items-center justify-center
                  border-2 border-black bg-white
                  max-[480px]:h-14 max-[480px]:w-14
                "
              >
                <img
                  src={codsoft}
                  alt="CodSoft"
                  className="h-10 w-10 object-contain"
                />
              </div>
              {/* Content */}
              <div className="max-[480px]:mt-3">
                <h3
                  className="
                    text-lg font-semibold
                    max-[480px]:text-base
                    sm:text-xl
                  "
                >
                  Role: Intern
                </h3>
                <p
                  className="
                    text-base font-medium
                    max-[480px]:text-sm
                    sm:text-lg
                  "
                >
                  Company: CodSoft
                </p>
                <p
                  className="
                    text-gray-600
                    text-sm
                    max-[480px]:text-xs
                    sm:text-base
                  "
                >
                  Tech Stack: React, TypeScript
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
