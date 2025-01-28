"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const SkillsSection = () => {
  const programmingLanguages = [
    { name: "HTML", logo: "/logos/html-logo.png" },
    { name: "CSS", logo: "/logos/css-logo.png" },
    { name: "JavaScript", logo: "/logos/javascript-logo.png" },
    { name: "PHP", logo: "/logos/php-logo.png" },
    { name: "Laravel", logo: "/logos/laravel-logo.png" },
    { name: "React", logo: "/logos/react-logo.png" },
    { name: "Next.js", logo: "/logos/nextjs-logo.png" },
  ];

  const databases = [
    { name: "MySQL", logo: "/logos/mysql-logo.png" },
    { name: "MongoDB", logo: "/logos/mongodb-logo.png" },
  ];

  const tools = [
    { name: "VS Code", logo: "/logos/vscode-logo.png" },
    { name: "Git", logo: "/logos/git-logo.png" },
  ];

  return (
    <section
      id="skills"
      className="bg-gradient-to-b from-[#F4F9FF] to-white py-16"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-[#007BCE] mb-12">
          My Skills
        </h2>

        <div className="mb-12 text-center">
          <h3 className="text-2xl font-bold text-[#00ABE4] mb-6">
            Programming Languages
          </h3>
          <div className="flex flex-wrap justify-center gap-10">
            {programmingLanguages.map((language, index) => (
              <motion.div
                key={index}
                className="w-24 h-24 bg-[#F4F9FF] rounded-full flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
              >
                <Image
                  src={language.logo}
                  alt={`${language.name} Logo`}
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mb-12 text-center">
          <h3 className="text-2xl font-bold text-[#00ABE4] mb-6">Databases</h3>
          <div className="flex flex-wrap justify-center gap-10">
            {databases.map((database, index) => (
              <motion.div
                key={index}
                className="w-24 h-24 bg-[#F4F9FF] rounded-full flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
              >
                <Image
                  src={database.logo}
                  alt={`${database.name} Logo`}
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-[#00ABE4] mb-6">Tools</h3>
          <div className="flex flex-wrap justify-center gap-10">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                className="w-24 h-24 bg-[#F4F9FF] rounded-full flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
              >
                <Image
                  src={tool.logo}
                  alt={`${tool.name} Logo`}
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
