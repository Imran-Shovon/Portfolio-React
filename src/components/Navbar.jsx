import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
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

  const navItems = ["Home", "Experience", "Projects", "Education", "Research", "About", "Contact"];

  // Close menu on nav click (mobile)
  const handleNavClick = () => {
    setMenuOpen(false);
  };

  // Optional: Close on route hash change or outside click
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo + Name */}
        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          {/* <span className="mr-2">🚀</span>  */}
          <a href="#top">Md Shovon Biswas</a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-4">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              {item}
            </a>
          ))}

          <Button
            onClick={handleDarkToggle}
            className="bg-transparent text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <Button
            onClick={handleDarkToggle}
            className="bg-transparent text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </Button>
          <Button onClick={handleMenuToggle} className="text-black dark:text-white">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 pt-2 bg-white dark:bg-gray-900 space-y-2 shadow-md">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={handleNavClick}
              className="block text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition"
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
