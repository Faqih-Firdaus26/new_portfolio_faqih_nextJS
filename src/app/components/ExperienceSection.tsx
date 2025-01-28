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
    <section
      id="experience"
      className="bg-gradient-to-b from-[#E9F1FA] to-[#F4F9FF] py-16"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-[#007BCE] text-center mb-12">
          Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center gap-6 mb-4">
                <a
                  href={exp.companyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0"
                >
                  <div className="relative w-16 h-16 bg-[#F0F8FF] rounded-full p-2">
                    <Image
                      src={exp.logo}
                      alt={`${exp.company} Logo`}
                      fill
                      className="object-contain rounded-full"
                    />
                  </div>
                </a>
                <div>
                  <h3 className="text-2xl font-semibold text-[#007BCE]">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {exp.company} • {exp.duration}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
