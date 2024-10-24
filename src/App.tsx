import CustomNavbar from "./components/Navbar";
import CustomCarousel from "./components/Carousel";
import Footer from "./components/Footer";
import "./styles/global.css";
import About from "./pages/About";

function App() {
  return (
    <>
      <header>
        <CustomNavbar />
      </header>
      <main className="container mt-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Bem-vindo ao Meu Portfólio</h1>
            <p>Veja meus principais projetos abaixo:</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 col-sm-12 mx-auto">
            <CustomCarousel />
          </div>
        </div>
        <About />
      </main>
      <Footer />
    </>
  );
}

export default App;
