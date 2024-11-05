import React, { useEffect, useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import useScreenSize from "../hooks/useScreenSize";
import ThemeSwitch from "./ThemeSwitch";
import { useTranslation } from "react-i18next";
import "../styles/Navbar.css";
import LanguageSwitcher from "./LanguageSwitcher";

const MyNavbar: React.FC = () => {
  const [windowScrollY, setWindowScrollY] = useState(0);
  const screenSize = useScreenSize();

  const { t } = useTranslation();

  const handleLinkClick = (section: string) => {
    scrollToSection(section);
  };

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => setWindowScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="header-area" id="header">
      <Navbar
        className={`navbar navbar-expand-md fixed-top main-menu ${
          screenSize.width >= 768
            ? `bg-white px-sm-3 ${
                windowScrollY >= 130 ? "nav-shadow" : "no-shadow"
              }`
            : "navbar-dark bg-dark px-sm-3"
        }`}
        expand="lg"
      >
        <Navbar.Brand href="#home">
          <img src="/assets/imgs/logo.svg" alt="Cleriston" width={140} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <FontAwesomeIcon icon={faBars} />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ml-auto">
            <Nav.Link
              href="#projects"
              className="mp-navlink"
              onClick={() => handleLinkClick("projects")}
            >
              {t("navigation.projects")}
            </Nav.Link>
            <Nav.Link
              href="#about"
              className="mp-navlink"
              onClick={() => handleLinkClick("about")}
            >
              {t("navigation.about")}
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className="mp-navlink"
              onClick={() => handleLinkClick("skills")}
            >
              {t("navigation.skills")}
            </Nav.Link>
            <Nav.Link
              href="#courses"
              className="mp-navlink"
              onClick={() => handleLinkClick("courses")}
            >
              {t("navigation.courses")}
            </Nav.Link>
            <ThemeSwitch />
            <LanguageSwitcher />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default MyNavbar;
