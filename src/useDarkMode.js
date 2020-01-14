import { useState, useEffect } from 'react';
import { THEME } from './modules/variable/LocalStorage';

export const useDarkMode = () => {
  const [theme, setTheme] = useState(localStorage.getItem(THEME) || 'light');
  const toggleTheme = () => {
    if (theme === 'light') {
      localStorage.setItem(THEME, 'dark');
      setTheme('dark');
    } else {
      localStorage.setItem(THEME, 'light');
      setTheme('light');
    }
  };
  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    localTheme && setTheme(localTheme);
  }, []);

  return [theme, toggleTheme];
};
