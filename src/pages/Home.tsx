import React from "react";
import "../styles/Home.css";

const Home: React.FC = () => {
  return (
    <section id="home" className="home-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-7">
            <div className="home-content">
              <h3 className="text-uppercase">Hello</h3>
              <h1 className="text-uppercase">I am Cleriston Pereira</h1>
              <h5 className="text-uppercase">Full stack web developer</h5>
              <div className="button-group d-flex align-items-center">
                <button type="button" className="btn btn-primary custom-btn">
                  <span>Hire Me</span>
                </button>
                <a
                  href="https://raw.githubusercontent.com/cleristonmp/my-portfolio/main/src/assets/files/resume-cleriston-pereira.pdf"
                  className="btn btn-primary cv-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Get CV</span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="home-right-img">
              <img src="/assets/imgs/my-avatar.jpg" alt="Cleriston avatar" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
