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
    <section id="projects" className="bg-[#FFFFFF] py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-[#00ABE4] text-center mb-8">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#E9F1FA] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#00ABE4] mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-[#00ABE4] text-white text-xs px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-end">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-[#00ABE4] transition-colors duration-300"
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
