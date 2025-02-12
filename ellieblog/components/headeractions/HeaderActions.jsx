import React, { useEffect, useState } from "react";
import "./HeaderActions.css";

import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import { ReactComponent as SunIcon } from "../../assets/icons/sun.svg";
import { ReactComponent as MoonIcon } from "../../assets/icons/moon.svg";
import { ReactComponent as RSSIcon } from "../../assets/icons/rss.svg";

function HeaderActions() {
  // Load theme from localStorage or use system preference
  const getInitialTheme = () => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) return storedTheme;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  };

  const [theme, setTheme] = useState(getInitialTheme);

  // Apply theme to document root
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Toggle theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="header-actions">
      <button className="nav-svg">
        <SearchIcon />
      </button>
      <button className="nav-svg" onClick={toggleTheme}>
        {theme === "light" ? <MoonIcon /> : <SunIcon />}
      </button>
      <button className="nav-svg">
        <RSSIcon />
      </button>
    </div>
  );
}

export default HeaderActions;
