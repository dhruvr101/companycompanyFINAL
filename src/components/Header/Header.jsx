import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import cheersAILogo from "../images/CheersAI.png"; // Adjust the path as per your project structure

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
  const [menuOpen, setMenuOpen] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(true);
  };

  const headerFunc = () => {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      headerRef.current.classList.add("header__shrink");
    } else {
      headerRef.current.classList.remove("header__shrink");
    }
  };

  useEffect(() => {
    // Ensure menu is closed initially on component mount
    setMenuOpen(false);
  
    // Add scroll listener
    window.addEventListener("scroll", headerFunc);
  
    // Clean up listener on component unmount
    return () => window.removeEventListener("scroll", headerFunc);
  }, []);
  

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className={`header ${menuOpen ? 'header__open' : ''}`} ref={headerRef}>
      <div className="nav__wrapper">
        <div className="logo">
          <img src={cheersAILogo} alt="CheersAI Logo" className="logo__image" />
          <h2>CheersAI</h2>
        </div>
        {/* Navigation */}
        <nav className={` ${menuOpen ? 'menu__active' : ''}`}>
          <ul className={`menu`}>
            {nav__links.map((item, index) => (
              <li className={`menu__item`} key={index}>
                <Link 
                  to={item.path} 
                  className={`${!menuOpen ? 'menu__link' : 'menu__item__hide'} ${theme === "light-theme" ? "light-menu__link" : ""}`}
                  onClick={() => { 
                    closeMenu(); 
                    if (item.path === "/") scrollToTop(); 
                  }}
                >
                  {item.display}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

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
    </header>
  );
};

export default Header;
