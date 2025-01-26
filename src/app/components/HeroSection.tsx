"use client";

import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/abstract-background.svg"
          alt="Background Pattern"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, Im{" "}
            <span className="text-yellow-400">Muhammad Faqih Al Firdaus</span>
          </h1>
          <p className="text-xl md:text-2xl font-medium text-yellow-400 mb-4">
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
          <p className="text-lg md:text-xl font-medium mb-8">
            Crafting modern and interactive web experiences.
          </p>
          <div className="flex justify-center space-x-4">
            <motion.a
              href="#about"
              className="bg-yellow-400 text-gray-900 py-3 px-6 rounded-lg shadow-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              About Me
            </motion.a>
            <motion.a
              href="#contact"
              className="bg-gray-900 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
