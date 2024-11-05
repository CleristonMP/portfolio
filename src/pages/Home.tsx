import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/Home.css";

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="home-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-7">
            <div className="home-content">
              <h3 className="text-uppercase">{t("home.greeting")}</h3>
              <h1 className="text-uppercase">{t("home.name")}</h1>
              <h5 className="text-uppercase">{t("home.profession")}</h5>
              <div className="button-group d-flex align-items-center">
                <button type="button" className="btn btn-primary custom-btn">
                  <span>{t("home.buttons.hireMe")}</span>
                </button>
                <a
                  href="https://raw.githubusercontent.com/cleristonmp/my-portfolio/main/src/assets/files/resume-cleriston-pereira.pdf"
                  className="btn btn-primary cv-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>{t("home.buttons.downloadCV")}</span>
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
