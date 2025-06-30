import { ArrowUp, Github, LinkedinIcon, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white px-6 py-12 transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-6">
        {/* Left Section */}
        <div>
          <h2 className="text-xl font-bold flex items-center gap-2">
            <span className="text-blue-600 dark:text-blue-400">&lt;/&gt;</span>
            Md Shovon Biswas
          </h2>
          <p className="mt-2 text-gray-700 dark:text-gray-400 max-w-sm">
            A passionate Software Developer specializing in creating modern web applications.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-end gap-4">
          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Imran-Shovon"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 p-2 rounded-full transition"
            >
              <Github className="text-gray-800 dark:text-white" size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/shovon-biswas/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 p-2 rounded-full transition"
            >
              <LinkedinIcon className="text-gray-800 dark:text-white" size={20} />
            </a>
            <a
              href="mailto:shovonbiswas.cse@gmail.com"
              className="bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 p-2 rounded-full transition"
            >
              <Mail className="text-gray-800 dark:text-white" size={20} />
            </a>
          </div>

          {/* Back to Top Button */}
          <a
            href="#top"
            className="inline-flex items-center gap-2 
                       border border-gray-300 dark:border-gray-700 
                       text-sm text-gray-800 dark:text-white 
                       px-4 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 
                       transition"
          >
            <ArrowUp size={16} />
            Back to Top
          </a>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="text-center text-sm text-gray-600 dark:text-gray-500 mt-10 border-t border-gray-300 dark:border-gray-700 pt-6">
        <span className="text-xl">©</span> 2025 Md Shovon Biswas. All rights reserved.
      </div>
    </footer>
  );
}
