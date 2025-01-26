import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function FooterSection() {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-12 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Lets Connect!</h2>
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="mailto:firdausfaqih727@gmail.com"
            className="text-white hover:text-yellow-300 transition-all duration-300 transform hover:scale-110"
            aria-label="Email"
          >
            <FaEnvelope className="text-3xl" />
          </a>
          <a
            href="https://linkedin.com/in/muhammad-faqih-al-firdaus"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-yellow-300 transition-all duration-300 transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-3xl" />
          </a>
          <a
            href="https://github.com/Faqih-Firdaus26"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-yellow-300 transition-all duration-300 transform hover:scale-110"
            aria-label="GitHub"
          >
            <FaGithub className="text-3xl" />
          </a>
        </div>
        <div className="border-t border-blue-500 pt-6 mt-6">
          <p className="text-sm">
            © {new Date().getFullYear()} Muhammad Faqih Al Firdaus. All rights
            reserved.
          </p>
          <p className="text-xs text-blue-200 mt-2">
            Built with Next.js and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
