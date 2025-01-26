import Image from "next/image";

export default function ExperienceSection() {
  const experiences = [
    {
      role: "Web Developer Intern",
      company: "FYP Media",
      duration: "June 2024 - October 2024",
      description:
        "Developed web applications using Laravel for multiple provinces in Indonesia, collaborating with a team to implement new features and fix bugs.",
      logo: "/logos/fyp-media-logo.png",
      companyLink: "https://fypmedia.com",
    },
    {
      role: "AI Trainer (Freelance)",
      company: "Outlier.AI",
      duration: "2024",
      description:
        "Worked on generative AI projects, training models with fact-checking, story-writing, and response evaluation.",
      logo: "/logos/outlier-ai-logo.png",
      companyLink: "https://outlier.ai",
    },
    {
      role: "Fullstack Developer Intern",
      company: "GITS ID",
      duration: "2023",
      description:
        "Learned and applied Laravel, API development, and database management to build scalable web applications.",
      logo: "/logos/gits-id-logo.png",
      companyLink: "https://gits.id",
    },
  ];

  return (
    <section id="experience" className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-blue-600 text-center mb-8">
          Experience
        </h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md flex items-center hover:shadow-xl transition-all duration-300"
            >
              <a
                href={exp.companyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mr-6"
              >
                <Image
                  src={exp.logo}
                  alt={`${exp.company} Logo`}
                  width={80}
                  height={80}
                  className="rounded-full"
                />
              </a>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {exp.role}
                </h3>
                <p className="text-gray-600">
                  {exp.company} - {exp.duration}
                </p>
                <p className="text-gray-700 mt-2">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
