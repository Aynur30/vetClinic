import { useState, useEffect, useCallback, FC, ReactNode } from "react";
import { ThemeContext, Theme } from "../lib/ThemeContext";

import styles from "../../../App.module.scss";

type ThemeProviderProps = {
  children: ReactNode;
};
const initialTheme = (): Theme => {
  const cashTheme = localStorage.getItem("Theme");
  return cashTheme ? (cashTheme as Theme) : Theme.LIGHT;
};

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(initialTheme);

  const toggleTheme = useCallback(() => {
    const updateTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    setTheme(updateTheme);
    localStorage.setItem("Theme", updateTheme);
  }, [theme]);

  useEffect(() => {
    const cashTheme = localStorage.getItem("Theme");
    if (cashTheme) {
      setTheme(cashTheme as Theme);
    }
  }, []);

  const contextValue = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      <div className={theme === Theme.DARK ? styles.dark : styles.light}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
