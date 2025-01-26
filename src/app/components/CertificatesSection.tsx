export default function CertificatesSection() {
  const certificates = [
    {
      title: "AI & IoT Bootcamp",
      issuer: "Samsung Innovation Campus",
      year: "2024",
      icon: "🤖",
    },
    {
      title: "Fullstack Developer Certification",
      issuer: "GITS ID",
      year: "2023",
      icon: "💻",
    },
  ];

  return (
    <section id="certificates" className="py-16 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-8">Certificates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-5xl mb-4">{cert.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {cert.title}
              </h3>
              <p className="text-gray-600">
                {cert.issuer} - {cert.year}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
