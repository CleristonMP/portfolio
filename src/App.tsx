import "./styles/globals.css";
import MyNavbar from "./components/MyNavbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Projects from "./pages/Projects";
import ScrollToTopButton from "./components/ScrollToTopButton";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n/i18n";
import { useEffect } from "react";
import { SectionProvider } from "./context/SectionContext";
import ObserverSection from "./components/ObserverSection";

function App() {
  useEffect(() => {
    const storedLang = localStorage.getItem("lang");
    if (storedLang) i18n.changeLanguage(storedLang);
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      <SectionProvider>
        <MyNavbar />
        <main className="container mt-5">
          <ObserverSection id="home">
            <Home />
          </ObserverSection>

          <ObserverSection id="projects">
            <Projects />
          </ObserverSection>

          <ObserverSection id="about">
            <About />
          </ObserverSection>

          <ObserverSection id="skills">
            <Skills />
          </ObserverSection>

          <ObserverSection id="courses">
            <Courses />
          </ObserverSection>
        </main>
        <Footer />
      </SectionProvider>
      <ScrollToTopButton />
    </I18nextProvider>
  );
}

export default App;
