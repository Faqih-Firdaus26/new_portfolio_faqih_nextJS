import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function FooterSection() {
  return (
    <footer className="bg-[#1E293B] text-white py-12">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold mb-8 text-[#00ABE4]">
          Lets Connect!
        </h2>
        <div className="flex justify-center space-x-8 mb-8">
          <a
            href="mailto:firdausfaqih727@gmail.com"
            className="text-white hover:text-[#00ABE4] transition-all duration-300 transform hover:scale-110"
            aria-label="Email"
          >
            <FaEnvelope className="text-3xl" />
          </a>
          <a
            href="https://linkedin.com/in/muhammad-faqih-al-firdaus"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#00ABE4] transition-all duration-300 transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-3xl" />
          </a>
          <a
            href="https://github.com/Faqih-Firdaus26"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#00ABE4] transition-all duration-300 transform hover:scale-110"
            aria-label="GitHub"
          >
            <FaGithub className="text-3xl" />
          </a>
        </div>
        <div className="border-t border-[#374151] pt-6">
          <p className="text-sm text-[#D1D5DB]">
            © {new Date().getFullYear()} Muhammad Faqih Al Firdaus. All rights
            reserved.
          </p>
          <p className="text-xs text-[#9CA3AF] mt-2">
            Built with Next.js and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
