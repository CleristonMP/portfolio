import React, { useEffect, useMemo, useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import useScreenSize from "../hooks/useScreenSize";
import ThemeSwitch from "./ThemeSwitch";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import MEDIAS_BASE_URL from "../utils/mediasBaseUrl";
import "../styles/MyNavbar.css";

const MyNavbar: React.FC = () => {
  const [windowScrollY, setWindowScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState<string>("home");
  const screenSize = useScreenSize();
  const { t } = useTranslation();

  const BASE_URL = process.env.PUBLIC_URL || "";

  const sections = useMemo(() => ["home", "projects", "about", "skills", "courses"], [])

  const handleLinkClick = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(section);
      const newUrl = `${BASE_URL}/#${section}`;
      window.history.pushState(null, "", newUrl);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
  
      if (scrollPosition < 50) {
        setActiveSection("home");
        const newUrl = `${BASE_URL}/#home`;
        window.history.pushState(null, "", newUrl);
      } else {
        sections.forEach((section) => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
              setActiveSection(section);
              const newUrl = `${BASE_URL}/#${section}`;
              window.history.pushState(null, "", newUrl);
            }
          }
        });
      }
      setWindowScrollY(scrollPosition);
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

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
        <Navbar.Brand onClick={() => handleLinkClick("home")}>
          <img 
          src={`${MEDIAS_BASE_URL}/logo.svg`}
          alt="Cleriston" 
          width={140} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <FontAwesomeIcon icon={faBars} />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ml-auto">
            {sections.map((section) => (
              <Nav.Link
                key={section}
                as="div"
                className={`mp-navlink ${
                  activeSection === section ? "active" : ""
                }`}
                onClick={() => handleLinkClick(section)}
              >
                {t(`navigation.${section}`)}
              </Nav.Link>
            ))}
            <ThemeSwitch />
            <LanguageSwitcher />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default MyNavbar;
