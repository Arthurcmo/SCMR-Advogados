import { FaMoon, FaSun } from "react-icons/fa";
import { useDarkMode } from "../../contexts/ColorSchemeContext";
import React from "react";
import "./DarkModeToggle.css";

export const DarkModeToggle = () => {
  const { isDark, setIsDark } = useDarkMode();

  return (
    <label className="toggle-switch">
      <input
        type="checkbox"
        checked={isDark}
        onChange={(e) => setIsDark(e.target.checked)}
      />
      <span className="slider">
        <FaSun className="icon sun" />
        <FaMoon className="icon moon" />
      </span>
    </label>
  );
};
