import Image from "next/image";
import { FaGithub } from "react-icons/fa";

export default function ProjectsSection() {
  const projects = [
    {
      title: "JawaEvent",
      description:
        "An event management platform with dynamic routing and search functionality.",
      technologies: ["Laravel", "React", "TailwindCSS"],
      image: "/projects/jawaevent-screenshot.png",
      githubLink: "https://github.com/your-username/jawaevent",
    },
    {
      title: "Smart Vertical Farm",
      description:
        "Vertical aeroponic farm system using IoT, Machine Learning, and solar panels.",
      technologies: ["IoT", "Machine Learning", "Solar Panels"],
      image: "/projects/smart-vertical-farm.png",
      githubLink: "https://github.com/your-username/smart-vertical-farm",
    },
    {
      title: "Village Website",
      description:
        "Modern landing page for Desa Sumurlaban to enhance community engagement.",
      technologies: ["Laravel", "TailwindCSS"],
      image: "/projects/village-website.png",
      githubLink: "https://github.com/your-username/village-website",
    },
  ];

  return (
    <section id="projects" className="bg-white py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-blue-600 text-center mb-8">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <FaGithub className="text-2xl" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
