import { ArrowUp, Github, LinkedinIcon, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-6 py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-6">
        {/* Left Section */}
        <div>
          <h2 className="text-xl font-bold flex items-center gap-2">
            <span className="text-blue-500">&lt;/&gt;</span>
            Md Shovon Biswas
          </h2>
          <p className="mt-2 text-gray-400 max-w-sm">
            A passionate Software Developer specializing in creating modern web applications.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-end gap-4">
          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a href="https://github.com/Imran-Shovon" target="_blank" rel="noopener noreferrer"
               className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full">
              <Github className="text-white" size={20} />
            </a>
            <a href="https://www.linkedin.com/in/shovon-biswas/" target="_blank" rel="noopener noreferrer"
               className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full">
              <LinkedinIcon className="text-white" size={20} />
            </a>
            <a href="mailto:shovonbiswas.cse@gmail.com"
               className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full">
              <Mail className="text-white" size={20} />
            </a>
          </div>

          {/* Back to Top Button */}
          <a href="#top"
             className="inline-flex items-center gap-2 border border-gray-700 px-4 py-2 rounded-md text-sm hover:bg-gray-800 transition">
            <ArrowUp size={16} />
            Back to Top
          </a>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="text-center text-xl text-gray-500 mt-10 border-t border-gray-700 pt-6">
        <span className="text-xl">©</span> 2025 Md Shovon Biswas. All rights reserved.
      </div>
    </footer>
  );
}
