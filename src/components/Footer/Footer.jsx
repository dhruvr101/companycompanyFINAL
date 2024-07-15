import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import "../../components/Footer/footer.css";

const quickLinks01 = [
  {
    path: "#home",
    display: "Home",
  },
  {
    path: "#services",
    display: "Services",
  },
  {
    path: "#testimonials",
    display: "Testimonials",
  },
];

const quickLinks02 = [
  {
    path: "/about", // Route to the About page
    display: "About",
  },
  {
    path: "#team",
    display: "Team",
  },
  {
    path: "#careers",
    display: "Careers",
  },
];

const quickLinks03 = [
  {
    path: "#contact",
    display: "Contact",
  },
  {
    path: "#blog",
    display: "Blog",
  },
  {
    path: "#feedback",
    display: "Feedback",
  },
];

const Footer = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [popupStyle, setPopupStyle] = useState({});
  const year = new Date().getFullYear();

  const handleClick = (e, path) => {
    e.preventDefault();

    if (path === "#home") {
      window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth",
      });
    } else if (path === "#services") {
      // Scroll to Services section with a bit more space above
      const servicesSection = document.getElementById("services");
      if (servicesSection) {
        const offset = servicesSection.offsetTop - 80; // Adjust the offset as needed
        window.scrollTo({
          left: 0,
          top: offset,
          behavior: "smooth",
        });
      }
    } else if (path === "#testimonials") {
      // Scroll to Testimonials section with a bit more space above
      const testimonialsSection = document.getElementById("testimonials");
      if (testimonialsSection) {
        const offset = testimonialsSection.offsetTop - 80; // Adjust the offset as needed
        window.scrollTo({
          left: 0,
          top: offset,
          behavior: "smooth",
        });
      }
    } else if (path === "/about") {
      // Navigate to the About page
      // You need to define the route for this in your main application using React Router
      // Example: <Link to="/about">About</Link>
      window.location.href = path;
    } else if (
      path === "#team" ||
      path === "#careers" ||
      path === "#blog" ||
      path === "#feedback"
    ) {
      setPopupMessage("Coming Soon");
      setPopupStyle({ top: e.clientY, left: e.clientX });
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 2000);
    } else {
      const location = document.querySelector(path).offsetTop;
      window.scrollTo({
        left: 0,
        top: location - 80, // Adjust this value as needed
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__logo">
            <h2>CheersAI</h2>
            <p className="description">Spreading Cheers</p>
            <p className="small__text description"></p>
          </div>

          <div className="footer__quick-links">
            <h3 className="quick__link-title">Home</h3>
            <ul className="quick__links">
              {quickLinks01.map((item, index) => (
                <li className="quick__link-item" key={index}>
                  <a href={item.path} onClick={(e) => handleClick(e, item.path)}>{item.display}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__quick-links">
            <h3 className="quick__link-title">Company</h3>
            <ul className="quick__links">
              {quickLinks02.map((item, index) => (
                <li className="quick__link-item" key={index}>
                  {item.path.startsWith("/") ? (
                    <Link to={item.path} onClick={(e) => handleClick(e, item.path)}>{item.display}</Link>
                  ) : (
                    <a href={item.path} onClick={(e) => handleClick(e, item.path)}>{item.display}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__quick-links">
            <h3 className="quick__link-title">Other</h3>
            <ul className="quick__links">
              {quickLinks03.map((item, index) => (
                <li className="quick__link-item" key={index}>
                  <a href={item.path} onClick={(e) => handleClick(e, item.path)}>{item.display}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="copyright">Copyright {year}, All rights reserved.</p>

        {showPopup && <div className="popup" style={popupStyle}>{popupMessage}</div>}
      </div>
    </footer>
  );
};

export default Footer;
