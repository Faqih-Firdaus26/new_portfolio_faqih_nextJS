"use client";

import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";
import { FC, useState } from "react";

const HeroSection: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleContactClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
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
                  "A Fullstack Developer",
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
              <motion.button
                onClick={handleContactClick}
                className="bg-transparent text-white border-2 border-[#00ABE4] py-3 px-8 rounded-full shadow-lg font-semibold hover:bg-[#00ABE4] hover:text-white hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="text-2xl font-bold text-[#1E293B] mb-4">
              Contact Me
            </h2>
            <p className="text-gray-600 mb-6">
              Start a chat with me on WhatsApp:
            </p>
            <a
              href="https://wa.me/+6289507322971"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[#00ABE4] text-white text-center py-2 px-4 rounded-full font-semibold hover:bg-[#007BCE] transition-all duration-300"
            >
              Open WhatsApp
            </a>
            <button
              onClick={closeModal}
              className="mt-4 text-gray-500 hover:text-gray-700 transition-all duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default HeroSection;
