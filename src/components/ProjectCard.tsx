interface Project {
    title: string;
    description: string;
    link: string;
  }

  export default function ProjectCard({ project }: { project: Project }) {

    return (
      <div className="border p-6 rounded-lg shadow hover:shadow-lg">

        <h3 className="text-xl font-bold">
          {project.title}
        </h3>

        <p className="text-gray-600 mt-2">
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