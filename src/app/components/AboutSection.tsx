"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <motion.section
      id="about"
      className="bg-[#1E293B] py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="container mx-auto px-6 text-center">
        <motion.div
          className="relative w-44 h-44 mx-auto mb-10"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: { duration: 0.8, ease: "easeOut" },
          }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <Image
            src="/about/faqih.jpg"
            alt="Profile Picture"
            fill
            className="object-cover rounded-full border-4 border-[#00ABE4] shadow-xl"
          />
        </motion.div>
        <motion.h2
          className="text-4xl font-extrabold text-[#E9F1FA] mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut", delay: 0.3 },
          }}
          viewport={{ once: false, amount: 0.2 }}
        >
          About Me
        </motion.h2>
        <motion.div
          className="bg-[#334155] p-10 rounded-2xl shadow-md max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: { duration: 0.8, ease: "easeOut", delay: 0.5 },
          }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <p className="text-[#E2E8F0] text-lg leading-relaxed">
            I am a diligent and reliable Electrical Engineering student at
            Singaperbangsa University of Karawang, specializing in creating
            modern web applications. I am passionate about problem-solving and
            always strive to improve my skills in programming and teamwork.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
