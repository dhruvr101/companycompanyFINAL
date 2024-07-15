import React from "react";
import "../styles/newAbout.css"; // Updated to use newAbout.css

const About = () => {
  return (
    <section id="about">
      <div className="about__container">
        <div className="left__content">
          <h1>Made for those that struggle</h1>
        </div>
        <div className="right__content">
          <h2>Our Story</h2>
          <p>
            Hey! We're a team passionate about mental health and technology. Here’s our story:
          </p>
          <p>
            We saw people close to us struggling with anxiety and lacking support. So, we created CheersAI: a free, accessible, and user-friendly mental health platform.
          </p>

          <h2>Our AI Therapist</h2>
          <p>
            Our AI therapist offers 24/7 support. You can chat and call with it, and it remembers everything about you, providing personalized care whenever you need it.
          </p>

          <h2>Our Motto</h2>
          <p>
            Our motto, "Made for those that struggle," reflects our commitment to inclusivity. Everyone deserves access to mental health resources, regardless of gender, religion, race, or ethnicity. CheersAI will always be free, forever.
          </p>

          <h2>Our Mission</h2>
          <p>
            Our true mission is to make an impact. That’s why we started CheersAI and why we’ll continue to innovate. Every signup helps us move closer to that goal.
          </p>
          <p>
            If you have ideas, feedback, or just want to chat, email us at dhruvreddy05@gmail.com or connect on LinkedIn.
          </p>
          <p>
            Thank you,<br />
            The CheersAI Team
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
