import React, { useState, useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import About from "./components/UI/About";
import Blog from "./components/UI/Blog";
import Counter from "./components/UI/Counter";
import Hero from "./components/UI/Hero";
import Newsletter from "./components/UI/Newsletter";
import Services from "./components/UI/Services";
import Team from "./components/UI/Team";
import Testimonials from "./components/UI/Testimonials";

function App() {
  const [theme, setTheme] = useState("light-theme"); // Initialize with "light-theme"

  const toggleTheme = () => {
    // Toggle between light and dark theme
    theme === "light-theme" ? setTheme("") : setTheme("light-theme");
  };

  useEffect(() => {
    document.body.className = theme; // Set the class of <body> based on the theme state
  }, [theme]);

  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Hero theme={theme} />
      <Counter />
      <Services />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
