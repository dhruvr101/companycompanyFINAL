import React from "react";
import "../styles/services.css";

const serviceData = [
  {
    icon: "ri-apps-line",
    title: "Chat",
    desc: "Chat with an AI Therapist that remembers, personalizes, and adapts to your unique interactions.",
  },
  {
    icon: "ri-code-s-slash-line",
    title: "Call",
    desc: "Call our AI Therapist for a uniquely humanistic conversation tailored to your needs and preferences.",
  },
  {
    icon: "ri-landscape-line",
    title: "Personalization",
    desc: "CheersAI's Therapist remembers your conversations in order to deliver personalized care.",
  },
  {
    icon: "ri-rocket-line",
    title: "Security",
    desc: "Your information with CheersAI is securely stored in our database. To delete it, simply contact us!",
  },
];

const Services = () => {
  return (
    <section id="services"> {/* Added id="services" */}
      <div className="container">
        <div className="service__top-content">
          <h6 className="subtitle">Our Services</h6>
          <h2>Save time managing your business</h2>
          <h2 className="highlight">our best services</h2>
        </div>

        <div className="services__item-wrapper">
          {serviceData.map((item, index) => (
            <div className="services__item" key={index}>
              <span className="service__icon">
                <i className={item.icon}></i> {/* Changed class to className */}
              </span>
              <h3 className="service__title">{item.title}</h3>
              <p className="description">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
