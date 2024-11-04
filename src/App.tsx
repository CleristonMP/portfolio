import "./styles/globals.css";
import CustomNavbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Projects from "./pages/Projects";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  return (
    <>
      <CustomNavbar />
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
