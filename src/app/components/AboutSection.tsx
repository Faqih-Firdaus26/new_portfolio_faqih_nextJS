import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-[#F4F9FF] to-[#FFFFFF] py-20"
    >
      <div className="container mx-auto px-6 text-center">
        <div className="relative w-44 h-44 mx-auto mb-10">
          <Image
            src="/profile.jpg"
            alt="Profile Picture"
            fill
            className="object-cover rounded-full border-4 border-[#007BCE] shadow-xl"
          />
        </div>
        <h2 className="text-4xl font-extrabold text-[#007BCE] mb-6">
          About Me
        </h2>
        <div className="bg-white p-10 rounded-2xl shadow-md max-w-4xl mx-auto">
          <p className="text-gray-600 text-lg leading-relaxed">
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
