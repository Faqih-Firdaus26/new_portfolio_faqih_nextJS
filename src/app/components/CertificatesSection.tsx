"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";

interface Certificate {
  title: string;
  issuer: string;
  year: string;
  image: string;
  link: string;
}

export default function CertificatesSection() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  const certificates: Certificate[] = [
    {
      title: "AI & IoT Bootcamp",
      issuer: "Samsung Innovation Campus",
      year: "2024",
      image: "/certificates/samsung-cert.jpg",
      link: "https://example.com/samsung-cert",
    },
    {
      title: "Fullstack Developer Certification",
      issuer: "GITS ID",
      year: "2023",
      image: "/certificates/gits-cert.jpg",
      link: "https://example.com/gits-cert",
    },
  ];

  return (
    <section id="certificates" className="py-16 bg-[#1E293B]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-[#E9F1FA] text-center mb-8">
          Certificates
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              onClick={() => setSelectedCert(cert)}
              className="cursor-pointer bg-[#334155] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative h-52 w-full">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  layout="fill"
                  objectFit="contain"
                  className="p-4"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#E9F1FA] mb-2">
                  {cert.title}
                </h3>
                <p className="text-[#CBD5E1]">
                  {cert.issuer} • {cert.year}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Box */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              className="bg-[#1E293B] text-white p-6 rounded-2xl shadow-2xl max-w-lg w-full relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()} // Mencegah modal tertutup jika diklik di dalamnya
            >
              {/* Tombol Close */}
              <button
                className="absolute top-4 right-4 text-[#CBD5E1] hover:text-white transition-all duration-300"
                onClick={() => setSelectedCert(null)}
              >
                <AiOutlineClose size={24} />
              </button>

              {/* Gambar Sertifikat */}
              <div className="relative h-52 w-full rounded-lg overflow-hidden">
                <Image
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  layout="fill"
                  objectFit="contain"
                  className="p-4"
                />
              </div>

              {/* Detail Sertifikat */}
              <h3 className="text-xl font-semibold text-white mt-4 text-center">
                {selectedCert.title}
              </h3>
              <p className="text-[#CBD5E1] text-center">
                {selectedCert.issuer} • {selectedCert.year}
              </p>

              {/* Tombol View Certificate */}
              <a
                href={selectedCert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center justify-center bg-[#00ABE4] text-white py-3 px-6 rounded-full font-semibold hover:bg-[#007BCE] transition-all duration-300"
              >
                View Certificate
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
