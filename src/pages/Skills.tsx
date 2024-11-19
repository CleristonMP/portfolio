import React from "react";
import techsData from "../utils/techsData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import { Tooltip } from "react-tooltip";
import "../styles/Skills.css";

const Skills: React.FC = () => {
  const { t } = useTranslation();

  const getExperienceYears = () => {
    const initialDate = new Date("2019-12-01").getTime();
    const today = Date.now();
    return ((today - initialDate) / (1000 * 3600 * 24 * 365)).toFixed(1);
  };

  return (
    <section id="skills" className="skills-area">
      <div className="container">
        <div className="mb-4 mb-sm-5">
          <h2 className="text-center text-uppercase mb-0 skills-title">
            {t("skills.title")}
          </h2>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="row">
              {techsData &&
                techsData.map((img) => (
                  <div
                    key={img.id}
                    className="d-flex justify-content-center col-lg-4 col-md-4 col-sm-6 mb-5"
                  >
                    <div className="single-tech-item" data-tooltip-id={`tooltip-${img.id}`}>
                      <img src={img.imgSrc} alt={img.caption} />
                      <Tooltip id={`tooltip-${img.id}`} place="top">
                        {img.caption}
                      </Tooltip>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="offset-lg-2 col-lg-4 col-md-6 mt-4 mt-sm-5">
            <div className="my-info">
              <div className="d-flex align-items-center mb-5">
                <span className="txt-large">{getExperienceYears()}</span>
                <span className="txt-small">{t("skills.experienceYears")}</span>
              </div>
              <div className="contact d-flex align-items-center">
                <div>
                  <FontAwesomeIcon icon={faPhone} className="phone-icon" />
                </div>
                <div className="ms-3">
                  <p>{t("skills.contact.label")}</p>
                  <h3>{t("skills.contact.phone")}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
