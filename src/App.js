import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import NewAbout from "./components/UI/newAbout"; // Renamed import to NewAbout
import Blog from "./components/UI/Blog";
import Counter from "./components/UI/Counter";
import Hero from "./components/UI/Hero";
import Newsletter from "./components/UI/Newsletter";
import Services from "./components/UI/Services";
import Testimonials from "./components/UI/Testimonials";

function App() {
    const [theme, setTheme] = useState("light-theme"); // Initialize with "light-theme"

    const toggleTheme = () => {
        // Toggle between light and dark theme
        theme === "light-theme" ? setTheme("dark-theme") : setTheme("light-theme");
    };

    useEffect(() => {
        document.body.className = theme; // Set the class of <body> based on the theme state
    }, [theme]);

    return (
        <Router>
            <>
                <Header theme={theme} toggleTheme={toggleTheme} />
                <Routes>
                    <Route path="/" element={<Home theme={theme} />} />
                    <Route path="/about" element={<NewAbout theme={theme} />} /> {/* Pass theme prop to NewAbout */}
                </Routes>
                <Footer />
            </>
        </Router>
    );
}

const Home = ({ theme }) => (
    <>
        <Hero theme={theme} />
        <Counter />
        <Services />
        <Testimonials />
       
    </>
);

export default App;
