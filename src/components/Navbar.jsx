import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import LOGO_IMAGE from '../assets/images/shovon_logo.png';
import { toggleDarkMode } from "../utils/theme";
import Button from "./Button";

const Navbar = () => {
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark")
  );
  const [menuOpen, setMenuOpen] = useState(false);

  const handleDarkToggle = () => {
    toggleDarkMode();
    setIsDark(!isDark);
  };

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const navItems = ["Home", "skills", "Experience", "Projects", "Education", "Research",  "Contact"];

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 
                       bg-white/80 dark:bg-gray-900/90 
                       backdrop-blur-md border-b border-gray-200 dark:border-gray-800 
                       shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <a href="#top">
            <img src={LOGO_IMAGE} alt="Logo" className="h-8 w-auto" />
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              {item}
            </a>
          ))}
          <Button
            onClick={handleDarkToggle}
            className="bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-400 dark:hover:bg-gray-700 p-2 rounded-full"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <Button
            onClick={handleDarkToggle}
            className="bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-400 dark:hover:bg-gray-700 p-2 rounded-full"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </Button>
          <Button
            onClick={handleMenuToggle}
            className="text-gray-800 dark:text-white p-2 rounded-full"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 pt-2 
                        bg-white dark:bg-gray-900 
                        space-y-2 border-t border-gray-200 dark:border-gray-800 shadow-sm transition-all">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={handleNavClick}
              className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
