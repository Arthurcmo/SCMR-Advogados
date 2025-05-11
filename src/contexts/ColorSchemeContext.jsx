import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useMediaQuery } from "react-responsive";

const ColorSchemeContext = createContext();

export function ColorSchemeProvider({ children }) {
  const prefersDarkMode = useMediaQuery({ query: "(prefers-color-scheme: dark)" });

  const getInitialMode = () => {
    const stored = localStorage.getItem("color-scheme");
    return stored !== null ? JSON.parse(stored) : undefined;
  };

  const [isDark, setIsDarkRaw] = useState(getInitialMode);

  const setIsDark = (value) => {
    setIsDarkRaw(value);
    localStorage.setItem("color-scheme", JSON.stringify(value));
  };

  const darkModeEnabled = useMemo(() => {
    return isDark === undefined ? prefersDarkMode : isDark;
  }, [isDark, prefersDarkMode]);

  useEffect(() => {
    if (darkModeEnabled) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkModeEnabled]);

  return (
    <ColorSchemeContext.Provider value={{ isDark: darkModeEnabled, setIsDark }}>
      {children}
    </ColorSchemeContext.Provider>
  );
}

export function useDarkMode() {
  return useContext(ColorSchemeContext);
}
