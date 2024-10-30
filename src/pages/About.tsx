import React, { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import "../styles/About.css";

const About: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleText = () => {
    setExpanded(!expanded);
  };

  return (
    <section id="about" className="about-area container my-5">
      <div className="row justify-content-start align-items-center">
        <div className="col-md-6">
          <div className="about-img">
            <img
              src="/assets/imgs/about.svg"
              alt="Imagem sobre mim"
              className="img-fluid"
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className={`about-content ${expanded ? "expanded" : ""}`}>
            <h2 className="about-title">Deixa eu me apresentar</h2>
            <p className="lead">
              Olá! Meu nome é Cleriston e sou um desenvolvedor web e mobile com
              mais de 5 anos de experiência. Durante minha carreira, desenvolvi
              vários projetos que vão desde aplicativos móveis até plataformas
              web complexas.
            </p>
            <p>
              Atualmente, desenvolvo aplicações em <strong>Java</strong>{" "}
              (backend) e <strong>JavaScript</strong>
              (frontend), além de <strong>HTML</strong> e <strong>CSS</strong>.
              Amo trabalhar com tecnologias modernas, como{" "}
              <strong>React, TypeScript</strong> e <strong>Spring Boot</strong>,
              e estou sempre aprendendo e aprimorando minhas habilidades. Também
              desenvolvo aplicativos mobile com <strong>Ionic</strong>, também
              com <strong>Jetpack Compose (Kotlin)</strong>.
            </p>

            <Collapse in={expanded}>
              <div id="aboutTextCollapse">
                <p>
                  Sempre tive afinidade com a área de TI, apesar de ter iniciado
                  minha carreira na área portuária. Mesmo atuando como Inspetor
                  Técnico Naval, também fui responsável pela montagem e
                  manutenção de computadores, rede LAN e desenvolvimento de
                  soluções administrativas. Decidi mudar de profissão e me
                  dedicar à área que sempre chamou minha atenção e que se alinha
                  mais com minha vocação.
                </p>
                <p>
                  Com o conhecimento adquirido, desenvolvi o site da empresa
                  onde trabalho. Além disso, ao longo dos últimos 5 anos, tive a
                  oportunidade de trabalhar como freelancer, o que me permitiu
                  colaborar com uma variedade de clientes e empresas. Gosto do
                  desafio de entender as necessidades de cada cliente e
                  transformar essas necessidades em um produto funcional e bem
                  apresentável.
                </p>
                <p>
                  Se você está procurando alguém para ajudar no desenvolvimento
                  do seu próximo projeto, ficarei feliz em colaborar. Entre em
                  contato e vamos conversar!
                </p>
              </div>
            </Collapse>

            <p 
              onClick={toggleText}
              aria-controls="aboutTextCollapse"
              aria-expanded={expanded}
              className="see-more-btn"
            >
              {expanded ? "Veja menos..." : "Veja mais..."}
            </p>
            <a
              href="https://raw.githubusercontent.com/cleristonmp/my-portfolio/main/src/assets/files/resume-cleriston-pereira.pdf"
              type="button"
              className="btn btn-primary custom-btn"
              download
            >
              <span>Baixar CV</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
