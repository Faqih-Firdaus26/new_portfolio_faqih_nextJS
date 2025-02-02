"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const SkillsSection = () => {
  const programmingLanguages = [
    { name: "HTML", logo: "/logos/html.png" },
    { name: "CSS", logo: "/logos/css.png" },
    { name: "JavaScript", logo: "/logos/javascript.png" },
    { name: "PHP", logo: "/logos/php.png" },
    { name: "Python", logo: "/logos/python.jpeg" },
    { name: "Tailwind", logo: "/logos/tailwind.jpeg" },
    { name: "Bootstrap", logo: "/logos/bootstrap.jpeg" },
    { name: "Laravel", logo: "/logos/laravel.png" },
    { name: "React", logo: "/logos/react.png" },
    { name: "Next.js", logo: "/logos/nextjs.png" },
  ];

  const databases = [
    { name: "MySQL", logo: "/logos/mysql.png" },
    { name: "MongoDB", logo: "/logos/mongodb.png" },
  ];

  const tools = [
    { name: "VS Code", logo: "/logos/vscode.jpeg" },
    { name: "Git", logo: "/logos/git.png" },
  ];

  return (
    <motion.section
      id="skills"
      className="bg-[#1E293B] py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-extrabold text-center text-white mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
          }}
          viewport={{ once: false, amount: 0.2 }}
        >
          My Skills
        </motion.h2>

        {[
          { title: "Programming Languages", items: programmingLanguages },
          { title: "Databases", items: databases },
          { title: "Tools", items: tools },
        ].map((section, sectionIndex) => (
          <motion.div
            key={sectionIndex}
            className="mb-12 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: {
                duration: 0.8,
                ease: "easeOut",
                delay: 0.2 * sectionIndex,
              },
            }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              {section.title}
            </h3>
            <div className="flex flex-wrap justify-center gap-10">
              {section.items.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.6,
                      ease: "easeOut",
                      delay: 0.1 * index,
                    },
                  }}
                  viewport={{ once: false, amount: 0.2 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="w-24 h-24 bg-[#F4F9FF] rounded-full flex items-center justify-center overflow-hidden mb-3">
                    <Image
                      src={item.logo}
                      alt={`${item.name} Logo`}
                      width={96}
                      height={96}
                      className="object-cover"
                    />
                  </div>
                  <p className="text-white text-lg font-medium">{item.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default SkillsSection;
