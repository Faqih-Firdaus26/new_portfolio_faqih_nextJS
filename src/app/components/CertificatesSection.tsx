import Image from "next/image";

interface Certificate {
  title: string;
  issuer: string;
  year: string;
  image: string;
  link: string;
}

export default function CertificatesSection() {
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
            <a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#334155] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
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
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
