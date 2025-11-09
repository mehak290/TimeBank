import { Moon, Sun, Bell, Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar({ onNavigate, theme, setTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  const navLinks = ["home", "dashboard", "community", "rewards", "blog", "about"];

  return (
    <header className="bg-secondary shadow sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-3xl font-bold text-accent tracking-tight">Time <span className="text-primary font-medium">Bank</span></span>
        </div>

        <nav className="hidden md:flex space-x-6 font-medium">
          {navLinks.map(link => (
            <button key={link} onClick={() => onNavigate(link)} className="text-primary hover:text-accent capitalize">
              {link}
            </button>
          ))}
        </nav>

        <div className="flex items-center space-x-3">
          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <Bell className="w-5 h-5 text-accent" />
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-secondary shadow-lg p-3">
          {navLinks.map(link => (
            <button key={link} onClick={() => { onNavigate(link); setMenuOpen(false); }} className="block w-full text-left py-2 text-primary hover:text-accent capitalize">
              {link}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
