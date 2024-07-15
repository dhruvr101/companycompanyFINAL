import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

const nav__links = [
  {
    path: "/", // Updated path for Home
    display: "Home",
  },
  {
    path: "/about", // Updated path for About
    display: "About",
  },
  {
    path: "/contact",
    display: "Contact",
  },
  {
    path: "/get-started",
    display: "Get Started",
  },
];

const Header = ({ theme, toggleTheme }) => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const headerFunc = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      headerRef.current.classList.add("header__shrink");
    } else {
      headerRef.current.classList.remove("header__shrink");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", headerFunc);

    return () => window.removeEventListener("scroll", headerFunc);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header" ref={headerRef}>
      <div className="container">
        <div className="nav__wrapper">
          <div className="logo">
            <h2>CheersAI</h2>
          </div>
          {/* Navigation */}
          <div className={`navigation ${menuOpen ? 'menu__active' : ''}`} ref={menuRef}>
            <ul className="menu">
              {nav__links.map((item, index) => (
                <li className="menu__item" key={index}>
                  <Link to={item.path} className="menu__link">
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Light Mode */}
          <div className="light__mode">
            <span onClick={toggleTheme}>
              {theme === "light-theme" ? (
                <span>
                  <i className="ri-moon-line"></i>Dark
                </span>
              ) : (
                <span>
                  <i className="ri-sun-line"></i>Light
                </span>
              )}
            </span>
          </div>

          <span className="mobile__menu" onClick={toggleMenu}>
            <i className="ri-menu-line"></i>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
