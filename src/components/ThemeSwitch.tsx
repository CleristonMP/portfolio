import React, { useState, useEffect } from 'react';
import '../styles/ThemeSwitch.css';

const ThemeSwitch: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setIsDarkMode(storedTheme === "dark");
      if (storedTheme === "dark") {
        document.documentElement.classList.add("dark-mode");
      }
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark-mode", !isDarkMode);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);

  return (
    <div className="theme-switch" onClick={toggleTheme}>
      <div className={`switch ${isDarkMode ? 'dark' : 'light'}`}>
        <svg
          className="icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isDarkMode ? (
            // Ícone Lua
            <path
              d="M21.75 12.88A9 9 0 0111.12 2.25 9 9 0 101.75 12.88"
              fill="currentColor"
            />
          ) : (
            // Ícone Sol
            <circle cx="12" cy="12" r="5" fill="currentColor" />
          )}
        </svg>
        <div className="background">{isDarkMode ? "Dark" : "Light"}</div>
      </div>
    </div>
  );
};

export default ThemeSwitch;
