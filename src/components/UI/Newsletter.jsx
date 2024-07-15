import React, { useState } from "react";
import "../../components/styles/newsletter.css";

const Newsletter = () => {
  const [showThankYou, setShowThankYou] = useState(false);

  const handleSubscribe = () => {
    const email = document.getElementById("email").value.trim();
    if (!isValidEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    setShowThankYou(true);
    setTimeout(() => {
      setShowThankYou(false);
    }, 3000); // Hide the thank you message after 3 seconds
  };

  const isValidEmail = (email) => {
    // Basic email validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <section className="newsletter">
      <div className="container">
        <div className="newsletter__wrapper">
          <div className="newsletter__content">
            <h6 className="subtitle">Subscribe Now</h6>
            <h2 className="newsletter__title">
              Find insights and join our{" "}
              <span className="highlight">evolving</span> platform!
            </h2>
          </div>

          <div className="newsletter__form">
            <input id="email" type="email" placeholder="Email" />
            <button className="secondary__btn subsctibe__btn" onClick={handleSubscribe}>
              Subscribe Now
            </button>
          </div>
        </div>
        {showThankYou && (
          <div className="thankyou__message" onClick={() => setShowThankYou(false)}>
            Thank you for subscribing!
          </div>
        )}
      </div>
    </section>
  );
};

export default Newsletter;
