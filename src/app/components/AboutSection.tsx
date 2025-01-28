import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="bg-[#1E293B] py-20">
      <div className="container mx-auto px-6 text-center">
        <div className="relative w-44 h-44 mx-auto mb-10">
          <Image
            src="/about/faqih.jpg"
            alt="Profile Picture"
            fill
            className="object-cover rounded-full border-4 border-[#00ABE4] shadow-xl"
          />
        </div>
        <h2 className="text-4xl font-extrabold text-[#E9F1FA] mb-6">
          About Me
        </h2>
        <div className="bg-[#334155] p-10 rounded-2xl shadow-md max-w-4xl mx-auto">
          <p className="text-[#E2E8F0] text-lg leading-relaxed">
            I am a diligent and reliable Electrical Engineering student at
            Singaperbangsa University of Karawang, specializing in creating
            modern web applications. I am passionate about problem-solving and
            always strive to improve my skills in programming and teamwork.
          </p>
        </div>
      </div>
    </section>
  );
}
