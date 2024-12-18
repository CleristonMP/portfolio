import "./styles/globals.css";
import MyNavbar from "./components/MyNavbar";
import Footer from "./components/Footer";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Home from "./sections/Home";
import Courses from "./sections/Courses";
import Projects from "./sections/Projects";
import ScrollToTopButton from "./components/ScrollToTopButton";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n/i18n";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const storedLang = localStorage.getItem("lang");
    if (storedLang) i18n.changeLanguage(storedLang);
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      <MyNavbar />
      <main className="container mt-5">
        <Home />
        <Projects />
        <About />
        <Skills />
        <Courses />
      </main>
      <Footer />
      <ScrollToTopButton />
    </I18nextProvider>
  );
}

export default App;