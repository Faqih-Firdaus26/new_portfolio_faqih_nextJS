import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="container mx-auto py-16 px-6 text-center">
      <div className="w-40 h-40 mx-auto mb-6 relative">
        <Image
          src="/profile.jpg"
          alt="Profile Picture"
          fill
          className="object-cover rounded-full border-4 border-blue-600 shadow-lg"
        />
      </div>
      <h2 className="text-3xl font-bold text-blue-600 mb-4">About Me</h2>
      <p className="text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto">
        I am a diligent and reliable Electrical Engineering student at
        Singaperbangsa University of Karawang, specializing in creating modern
        web applications. I am passionate about problem-solving and always
        strive to improve my skills in programming and teamwork.
      </p>
    </section>
  );
}
