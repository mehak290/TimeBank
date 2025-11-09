import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Community from "./pages/Community";
import Rewards from "./pages/Rewards";
import Blog from "./pages/Blog";
import About from "./pages/About";

export default function App() {
  const [activePage, setActivePage] = useState("home");
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const renderPage = () => {
    switch (activePage) {
      case "dashboard": return <Dashboard />;
      case "community": return <Community />;
      case "rewards": return <Rewards />;
      case "blog": return <Blog />;
      case "about": return <About />;
      default: return <Home />;
    }
  };

  return (
    <div className="bg-primary text-primary min-h-screen transition">
      <Navbar onNavigate={setActivePage} theme={theme} setTheme={setTheme} />
      <main className="max-w-7xl mx-auto p-6">{renderPage()}</main>
      <Footer />
    </div>
  );
}
