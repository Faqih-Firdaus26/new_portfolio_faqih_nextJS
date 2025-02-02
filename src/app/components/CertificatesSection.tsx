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
      image:
        "/certificates/Sertifikat Semi Final - Samsung Innovation Campus Batch 5 (2023_2024) (1)_page-0001.jpg",
      link: "https://drive.google.com/file/d/1bBvwiZSW85yJqm3xHrCt3Ogrl9EIstk4/view?usp=sharing",
    },
    {
      title: "Fullstack Developer Certification",
      issuer: "GITS ID",
      year: "2023",
      image:
        "/certificates/Certificate SIB 5 - MUHAMMAD FAQIH AL FIRDAUS (3)_page-0001.jpg",
      link: "https://drive.google.com/file/d/1GilfPpOM-jXX0F-wNuPkwTB6tmTpVcvC/view?usp=sharing",
    },
    {
      title: "Intern Progammer Certification",
      issuer: "FYP Media",
      year: "2024",
      image: "/certificates/Intern Programmer FYP Media.png",
      link: "https://drive.google.com/file/d/1F2Ox6_ar8oCraHOSoJi_k7dH5wXk1Exd/view?usp=sharing",
    },
    {
      title: "Belajar Dasar AI",
      issuer: "Dicoding",
      year: "2024",
      image: "/certificates/Belajar Dasar AI_page-0001.jpg",
      link: "https://www.dicoding.com/certificates/53XEDJNV0PRN",
    },
    {
      title: "Belajar Dasar Manajemen Proyek",
      issuer: "Dicoding",
      year: "2023",
      image: "/certificates/Belajar Dasar Manajemen Proyek_page-0001.jpg",
      link: "https://www.dicoding.com/certificates/98XWGD29LPM3",
    },
    {
      title: "Belajar Dasar Pemrograman Javascript",
      issuer: "Dicoding",
      year: "2024",
      image: "/certificates/Belajar Dasar Pemrograman Javascript_page-0001.jpg",
      link: "https://www.dicoding.com/certificates/81P24Y5OQZOY",
    },
    {
      title: "Belajar Dasar Pemrograman Web",
      issuer: "Dicoding",
      year: "2024",
      image: "/certificates/Belajar Dasar Pemrograman Web_page-0001.jpg",
      link: "https://www.dicoding.com/certificates/N9ZO94O0DXG5",
    },
    {
      title: "Belajar Dasar Structured Query Language (SQL)",
      issuer: "Dicoding",
      year: "2024",
      image:
        "/certificates/Belajar Dasar Structured Query Language (SQL)_page-0001.jpg",
      link: "https://www.dicoding.com/certificates/0LZ092K9RZ65",
    },
    {
      title: "Belajar Dasar Visualisasi Data",
      issuer: "Dicoding",
      year: "2024",
      image: "/certificates/Belajar Dasar Visualisasi Data_page-0001.jpg",
      link: "https://www.dicoding.com/certificates/RVZKR4WOOPD5",
    },
    {
      title: "Belajar Membuat Aplikasi Web dengan React",
      issuer: "Dicoding",
      year: "2024",
      image:
        "/certificates/Belajar Membuat Aplikasi Web dengan React_page-0001.jpg",
      link: "https://www.dicoding.com/certificates/6RPNRKRKRX2M",
    },
    {
      title: "Belajar Membuat Frontend Web Untuk Pemula",
      issuer: "Dicoding",
      year: "2024",
      image:
        "/certificates/Belajar Membuat Frontend Web Untuk Pemula_page-0001.jpg",
      link: "https://www.dicoding.com/certificates/1RXYE4E2KZVM",
    },
    {
      title: "Belajar Prinsip Pemrograman SOLID",
      issuer: "Dicoding",
      year: "2024",
      image: "/certificates/Belajar Prinsip Pemrograman SOLID_page-0001.jpg",
      link: "https://www.dicoding.com/certificates/1OP81MYQVZQK",
    },
    {
      title: "Memulai Dasar Pemrograman untuk Menjadi Pengembang Software",
      issuer: "Dicoding",
      year: "2024",
      image:
        "/certificates/Memulai Dasar Pemrograman untuk Menjadi Pengembang Software_page-0001.jpg",
      link: "https://www.dicoding.com/certificates/L4PQGOR72ZO1",
    },
    {
      title: "Memulai Pemrograman dengan Python",
      issuer: "Dicoding",
      year: "2024",
      image: "/certificates/Memulai Pemrograman dengan Python_page-0001.jpg",
      link: "https://www.dicoding.com/certificates/1OP8W6MLVXQK",
    },
    {
      title: "Internet of Things (IoT) - Software and Platforms (Gold)",
      issuer: "Skilvul",
      year: "2024",
      image:
        "/certificates/Completion Certificate for Internet of Things (IoT) - Software and Platforms_page-0001.jpg",
      link: "https://drive.google.com/file/d/1oY7Jya1dCTAQGJBOyiT-OOykOlyMJRrh/view?usp=sharing",
    },

    // {
    //   title: "Python Dasar (Gold)",
    //   issuer: "Skilvul",
    //   year: "2024",
    //   image:
    //     "/certificates/Completion Certificate for Python Dasar_page-0001.jpg",
    //   link: "https://drive.google.com/file/d/1sHzk9JpaBFVatgfRT5WIdkewpYj4O4-w/view?usp=sharing",
    // },
    // {
    //   title: "Python Lanjutan (Gold)",
    //   issuer: "Skilvul",
    //   year: "2024",
    //   image: "Completion Certificate for Python Lanjutan (1)_page-0001.jpg",
    //   link: "https://drive.google.com/file/d/1yraM3zJfR0kXHGJ8TCpk9JsY5ppICcCy/view?usp=sharing",
    // },
    // {
    //   title: "Internet of Things (IoT) - Fundamentals (Gold)",
    //   issuer: "Skilvul",
    //   year: "2024",
    //   image:
    //     "/certificates/Completion Certificate for Internet of Things (IoT) - Fundamentals_page-0001.jpg",
    //   link: "https://drive.google.com/file/d/1QckMiqbLnPCxBb9uAbqOfNZQ-UPw8OCT/view?usp=sharing",
    // },
    // {
    //   title: "Algorithm & Data Structures with Python (Gold)",
    //   issuer: "Skilvul",
    //   year: "2024",
    //   image:
    //     "/certificates/Completion Certificate for Algorithm & Data Structures with Python_page-0001.jpg",
    //   link: "https://drive.google.com/file/d/198qA5h1iQr_6d30xgtkIt4l2uvLltDSx/view?usp=sharing",
    // },
    {
      title: "IoT Development with ESP32 (Gold)",
      issuer: "Skilvul",
      year: "2024",
      image:
        "/certificates/Completion Certificate for IoT Development with ESP32_page-0001.jpg",
      link: "https://drive.google.com/file/d/11CoqKa7GTyi5o4hgMBXZ2ulXvh4Varov/view?usp=sharing",
    },
  ];

  return (
    <motion.section
      id="certificates"
      className="py-16 bg-[#1E293B]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-extrabold text-center text-[#E9F1FA] mb-12 tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
          }}
          viewport={{ once: false, amount: 0.2 }}
        >
          Certificates
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              onClick={() => setSelectedCert(cert)}
              className="cursor-pointer bg-[#334155] rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transform transition-all duration-500 hover:scale-105"
              whileHover={{ scale: 1.08 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.8,
                  ease: "easeOut",
                  delay: 0.1 * index,
                },
              }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <div className="relative h-52 w-full">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  layout="fill"
                  objectFit="cover"
                  className="p-4 rounded-t-xl"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-[#E9F1FA] mb-2">
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

      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-md flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              className="bg-[#1E293B] text-white p-8 rounded-2xl shadow-2xl max-w-lg w-full relative transform transition-all duration-500 hover:scale-105"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-[#CBD5E1] hover:text-white transition-all duration-300"
                onClick={() => setSelectedCert(null)}
              >
                <AiOutlineClose size={24} />
              </button>
              <div className="relative h-60 w-full rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  layout="fill"
                  objectFit="cover"
                  className="p-4"
                />
              </div>
              <h3 className="text-2xl font-bold text-white mt-6 text-center">
                {selectedCert.title}
              </h3>
              <p className="text-[#CBD5E1] text-center">
                {selectedCert.issuer} • {selectedCert.year}
              </p>
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
    </motion.section>
  );
}
