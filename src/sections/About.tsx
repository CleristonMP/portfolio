import React, { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import { useTranslation, Trans } from "react-i18next";
import "../styles/About.css";

const About: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  const { t } = useTranslation();

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
            <h2 className="about-title">{t("about.title")}</h2>
            <p className="lead">{t("about.introduction")}</p>
            <p>
              <Trans
                i18nKey="about.skills"
                components={{
                  0: <strong />,
                  1: <strong />,
                  2: <strong />,
                  3: <strong />,
                  4: <strong />,
                  5: <strong />,
                  6: <strong />,
                  7: <strong />,
                }}
              />
            </p>

            <Collapse in={expanded}>
              <div id="aboutTextCollapse">
                <p>{t("about.background")}</p>
                <p>{t("about.experience")}</p>
                <p>{t("about.callToAction")}</p>
              </div>
            </Collapse>

            <p
              onClick={toggleText}
              aria-controls="aboutTextCollapse"
              aria-expanded={expanded}
              className="see-more-btn"
            >
              {expanded
                ? t("about.buttons.seeLess")
                : t("about.buttons.seeMore")}
            </p>
            <a
              href="https://raw.githubusercontent.com/cleristonmp/my-portfolio/main/src/assets/files/resume-cleriston-pereira.pdf"
              type="button"
              className="btn btn-primary custom-btn"
              download
            >
              <span>{t("about.buttons.downloadCV")}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
