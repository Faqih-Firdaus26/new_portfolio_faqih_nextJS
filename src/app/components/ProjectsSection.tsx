import Image from "next/image";
import { FaGithub } from "react-icons/fa";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Portfolio",
      description: "A website portfolio Muhammad Faqih Al Firdaus",
      technologies: ["Next js", "Tailwind CSS"],
      image: "/projects/portfolio.jpg",
      githubLink: "-",
    },
    {
      title: "Smart Vertical Farm",
      description:
        "Vertical aeroponic farm system using IoT, Machine Learning, and solar panels.",
      technologies: ["IoT", "Machine Learning", "Solar Panels"],
      image: "/projects/aeroponic.png",
      githubLink: "",
    },
    {
      title: "Smart Clinic",
      description: "Smart Prediction Lung Diese",
      technologies: ["Python", "Machine Learning", "Tailwind CSS"],
      image: "/projects/smart-clinic.jpg",
      githubLink: "",
    },
    {
      title: "Silo Sirloin",
      description: "A silo and sirloin meat sales website ",
      technologies: ["NextJs", "Tailwind CSS", "API"],
      image: "/projects/silo-sirloin.jpg",
      githublink: "-",
    },
    {
      title: "Jelajah Jawa",
      description: "a java island news portal website",
      technologies: ["Laravel", "Tailwind CSS", "Blade"],
      image: "/projects/jelajah-jawa.jpg",
      githublink: "-",
    },
    {
      title: "Andalas News",
      description: "a Sumatran island news portal website ",
      technologies: ["Laravel", "Tailwind CSS", "Blade"],
      image: "/projects/andalas-news.jpg",
      githublink: "-",
    },
    {
      title: "Borneo Bulletin",
      description: "a kalimantan island news portal website",
      technologies: ["Laravel", "Tailwind CSS", "Blade"],
      image: "/projects/borneo-bulletin.jpg",
      githublink: "-",
    },
  ];

  return (
    <section id="projects" className="bg-[#1E293B] py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-[#E9F1FA] text-center mb-8">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#334155] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
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
                <h3 className="text-xl font-semibold text-[#E9F1FA] mb-3">
                  {project.title}
                </h3>
                <p className="text-[#CBD5E1] mb-4 line-clamp-2">
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
                    className="text-[#CBD5E1] hover:text-[#00ABE4] transition-colors duration-300"
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
