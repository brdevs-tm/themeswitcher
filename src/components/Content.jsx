// Content.js
import React, { useEffect } from "react";
import { useTheme } from "./ThemeContext";
import "./content.css";

const Content = () => {
  const { darkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const body = document.querySelector("body");
    body.style.backgroundColor = darkMode ? "#333333" : "#ffffff";
    body.style.color = darkMode ? "#ffffff" : "#000000";
  }, [darkMode]);

  return (
    <div>
      <p style={{ fontSize: "30px", fontFamily: "sans-serif" }}>
        Theme Switcher
      </p>
      <label className="switcher">
        <input type="checkbox" onChange={toggleTheme} checked={darkMode} />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default Content;
