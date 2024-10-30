import "./styles/globals.css";
import CustomNavbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Projects from "./pages/Projects";
import ScrollToTopButton from "./components/ScrollToTopButton";
import { useEffect, useState } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setIsDarkMode(storedTheme === "dark");
      document.documentElement.classList.add(
        storedTheme === "dark" ? "dark-mode" : ""
      );
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark-mode", !isDarkMode);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <>
      <CustomNavbar />
      <div>
        <label className="theme-switch">
          <input type="checkbox" checked={isDarkMode} onChange={toggleTheme} />
          <span className="slider" />
        </label>
      </div>
      <main className="container mt-5">
        <Home />
        <Projects />
        <About />
        <Skills />
        <Courses />
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}

export default App;
