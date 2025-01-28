"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const SkillsSection = () => {
  const programmingLanguages = [
    { name: "HTML", logo: "/logos/html.png" },
    { name: "CSS", logo: "/logos/css.png" },
    { name: "JavaScript", logo: "/logos/javascript.png" },
    { name: "PHP", logo: "/logos/php.png" },
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
    <section id="skills" className="bg-[#1E293B] py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-white mb-12">
          My Skills
        </h2>

        <div className="mb-12 text-center">
          <h3 className="text-2xl font-bold text-white mb-6">
            Programming Languages
          </h3>
          <div className="flex flex-wrap justify-center gap-10">
            {programmingLanguages.map((language, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center justify-center"
                whileHover={{ scale: 1.1 }}
              >
                <div className="w-24 h-24 bg-[#F4F9FF] rounded-full flex items-center justify-center overflow-hidden mb-3">
                  <Image
                    src={language.logo}
                    alt={`${language.name} Logo`}
                    width={96}
                    height={96}
                    className="object-cover"
                  />
                </div>
                <p className="text-white text-lg font-medium">
                  {language.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mb-12 text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Databases</h3>
          <div className="flex flex-wrap justify-center gap-10">
            {databases.map((database, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center justify-center"
                whileHover={{ scale: 1.1 }}
              >
                <div className="w-24 h-24 bg-[#F4F9FF] rounded-full flex items-center justify-center overflow-hidden mb-3">
                  <Image
                    src={database.logo}
                    alt={`${database.name} Logo`}
                    width={96}
                    height={96}
                    className="object-cover"
                  />
                </div>
                <p className="text-white text-lg font-medium">
                  {database.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Tools</h3>
          <div className="flex flex-wrap justify-center gap-10">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center justify-center"
                whileHover={{ scale: 1.1 }}
              >
                <div className="w-24 h-24 bg-[#F4F9FF] rounded-full flex items-center justify-center overflow-hidden mb-3">
                  <Image
                    src={tool.logo}
                    alt={`${tool.name} Logo`}
                    width={96}
                    height={96}
                    className="object-cover"
                  />
                </div>
                <p className="text-white text-lg font-medium">{tool.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
