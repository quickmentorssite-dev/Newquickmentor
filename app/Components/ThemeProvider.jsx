'use client';

import { useEffect, useState } from 'react';

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  // Load theme from localStorage on first render
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(savedTheme);
  }, []);

  // Toggle theme and apply class to <body>
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(newTheme);
  };

  return (
    <>
      <button onClick={toggleTheme} className="theme-toggle-btn">
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
      {children}
    </>
  );
}
