// ThemeContext.js
import React, { createContext, useState, useContext } from 'react';
import { colors } from './colors';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(colors.light);

const toggleTheme = () => {
    const newTheme = theme === colors.light ? colors.dark : colors.light;
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
