"use client";

import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";
import { FC } from "react";

const HeroSection: FC = () => {
  return (
    <section className="relative bg-[#1E293B] text-white min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/abstract-background.svg"
          alt="Background Pattern"
          layout="fill"
          objectFit="cover"
          className="opacity-10"
        />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Hi, I&apos;m{" "}
            <span className="text-[#00ABE4] underline decoration-[#00ABE4]">
              Muhammad Faqih Al Firdaus
            </span>
          </h1>
          <p className="text-2xl md:text-3xl font-medium mb-6">
            <Typewriter
              words={[
                "A Frontend Developer",
                "A Web Enthusiast",
                "A Passionate Learner",
              ]}
              loop
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </p>
          <p className="text-lg md:text-xl font-light mb-12 text-[#94A3B8]">
            Crafting modern and interactive web experiences that captivate and
            engage.
          </p>

          <div className="flex justify-center space-x-6">
            <motion.a
              href="#about"
              className="bg-[#00ABE4] text-white py-3 px-8 rounded-full shadow-lg font-semibold hover:bg-[#007BCE] hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              About Me
            </motion.a>
            <motion.a
              href="#contact"
              className="bg-transparent text-white border-2 border-[#00ABE4] py-3 px-8 rounded-full shadow-lg font-semibold hover:bg-[#00ABE4] hover:text-white hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
