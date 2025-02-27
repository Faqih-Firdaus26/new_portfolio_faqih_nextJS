"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ExperienceSection() {
  const experiences = [
    {
      role: "Web Developer Intern",
      company: "FYP Media",
      duration: "June 2024 - October 2024",
      description:
        "Developed web applications using Laravel for multiple provinces in Indonesia, collaborating with a team to implement new features and fix bugs.",
      logo: "/logos/fyp-media.jpeg",
      companyLink: "https://fypmedia.com",
    },
    {
      role: "AI Trainer (Freelance)",
      company: "Outlier.AI",
      duration: "2024",
      description:
        "Worked on generative AI projects, training models with fact-checking, story-writing, and response evaluation.",
      logo: "/logos/outlier.jpeg",
      companyLink: "https://outlier.ai",
    },
    {
      role: "Fullstack Developer Intern",
      company: "GITS ID",
      duration: "2023",
      description:
        "Learned and applied Laravel, API development, and database management to build scalable web applications.",
      logo: "/logos/gits.png",
      companyLink: "https://gits.id",
    },
  ];

  return (
    <motion.section
      id="experience"
      className="bg-[#1E293B] py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-[#E9F1FA] text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
          }}
          viewport={{ once: false, amount: 0.2 }}
        >
          Experience
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-[#334155] p-6 rounded-2xl shadow-md hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.8,
                  ease: "easeOut",
                  delay: index * 0.2,
                },
              }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <div className="flex items-center gap-6 mb-4">
                <a
                  href={exp.companyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0"
                >
                  <motion.div
                    className="relative w-16 h-16 bg-[#1E293B] rounded-full p-2"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                      transition: { duration: 0.6, ease: "easeOut" },
                    }}
                    viewport={{ once: false, amount: 0.2 }}
                  >
                    <Image
                      src={exp.logo}
                      alt={`${exp.company} Logo`}
                      fill
                      className="object-contain rounded-full"
                    />
                  </motion.div>
                </a>
                <div>
                  <h3 className="text-2xl font-semibold text-[#E9F1FA]">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-[#94A3B8]">
                    {exp.company} • {exp.duration}
                  </p>
                </div>
              </div>
              <p className="text-[#CBD5E1] leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
