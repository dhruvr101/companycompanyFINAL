import React, { useState } from "react";
import "../../components/styles/newsletter.css";

const Newsletter = () => {
  const [showThankYou, setShowThankYou] = useState(false);

  const handleSubscribe = () => {
    setShowThankYou(true);
    setTimeout(() => {
      setShowThankYou(false);
    }, 3000); // Hide the thank you message after 3 seconds
  };
//hi
  return (
    <section className="newsletter">
      <div className="container">
        <div className="newsletter__wrapper">
          <div className="newsletter__content">
            <h6 className="subtitle">Subscribe Now</h6>
            <h2>
              Embrace new insights and join our <span className="highlight">evolving</span> platform!
            </h2>
          </div>

          <div className="newsletter__form">
            <input type="email" placeholder="Email" />
            <button className="secondary__btn subsctibe__btn" onClick={handleSubscribe}>
              Subscribe Now
            </button>
          </div>
        </div>
        {showThankYou && <div className="thankyou__message">Thank you!</div>}
      </div>
    </section>
  );
};

export default Newsletter;
