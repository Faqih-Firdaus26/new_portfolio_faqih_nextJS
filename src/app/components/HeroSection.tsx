"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";
import { FC, useState } from "react";
import { AiOutlineClose, AiOutlineWhatsApp } from "react-icons/ai";

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

      {/* MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-[#1E293B] text-white p-8 rounded-2xl shadow-2xl max-w-sm w-full relative"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()} // Agar tidak tertutup jika modal diklik
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 text-[#CBD5E1] hover:text-white transition-all duration-300"
                onClick={closeModal}
              >
                <AiOutlineClose size={24} />
              </button>

              <h2 className="text-2xl font-bold text-white mb-4 text-center">
                Contact Me
              </h2>
              <p className="text-gray-300 text-center mb-6">
                Start a chat with me on WhatsApp:
              </p>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/+6289507322971"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-[#00ABE4] text-white py-3 px-6 rounded-full font-semibold hover:bg-[#007BCE] transition-all duration-300 space-x-2"
              >
                <AiOutlineWhatsApp size={24} />
                <span>Open WhatsApp</span>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HeroSection;
