import { createContext, useState, useEffect } from "react";

const themes = {
  dark: {
    backgroundColor: '#121212',
    color: "white",
    transition: "all 500ms"
  },
  light: {
    backgroundColor: 'white',
    color: "black",
    transition: "all 500ms"
  }
}
export const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false)
  const theme = isDark ? themes.dark : themes.light;
  const toggleTheme = () => {
    localStorage.setItem("isDark", JSON.stringify(!isDark))
    setIsDark(!isDark)
  };

  useEffect(() => {
    const isDark = localStorage.getItem("isDark") === "true";
    setIsDark(isDark);
  })
  return (
    <ThemeContext.Provider value={[{theme, isDark}, toggleTheme]}>{children}</ThemeContext.Provider>
  );
};
