import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import "../styles/Footer.css";

const Footer: React.FC = () => {
  const { t } = useTranslation();

  const getFullYear = () => new Date().getFullYear();

  return (
    <footer className="bg-dark text-white text-center py-4 footer">
      <div className="container">
        <div className="footer-logo mb-3">
          <a href="#home">
            <img
              src="/assets/imgs/logo.svg"
              alt="Cleriston"
              width={60}
              height={60}
            />
          </a>
          <h4>{t("footer.contact")}</h4>
        </div>

        <div className="footer-social mb-3">
          <a
            href="https://www.facebook.com/profile.php?id=100072653596522"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-2"
          >
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </a>
          <a
            href="https://www.instagram.com/c.m.peras/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-2"
          >
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
          <a
            href="https://github.com/CleristonMP"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-2"
          >
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
          <a
            href="https://www.linkedin.com/in/cleriston-pereira-a60a471bb/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-2"
          >
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
          <a href="mailto:cmelopereira@outlook.com" className="text-white mx-2">
            <FontAwesomeIcon icon={faEnvelope} size="lg" />
          </a>
        </div>

        <p className="mb-0">{t("footer.copyright", { year: getFullYear() })}</p>
      </div>
    </footer>
  );
};

export default Footer;
