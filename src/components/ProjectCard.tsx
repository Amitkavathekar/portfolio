interface Project {
    title: string;
    description: string;
    link: string;
  }

  export default function ProjectCard({ project }: { project: Project }) {

    return (
      <div
        className="
          rounded-lg border p-5 shadow hover:shadow-lg
          max-[480px]:p-4
          sm:p-6
        "
      >

        <h3
          className="
            text-lg font-bold
            max-[480px]:text-base
            sm:text-xl
          "
        >
          {project.title}
        </h3>

        <p
          className="
            mt-2 text-gray-600
            text-sm
            max-[480px]:text-xs
            sm:text-base
          "
        >
          {project.description}
        </p>

        <a
          href={project.link}
          target="_blank"
          className="text-orange-500 mt-3 inline-block"
        >
          Live Demo →
        </a>

      </div>
    );
  }