import React from "react";
import "./about.css";
import logo from "../Treatment/images/swasthya.jpg";

const Content = () => {
  const effects = [
    "Promotes relaxation and stress reduction",
    "Boosts mood and emotional balance",
    "Improves mental clarity and focus",
    "Supports physical healing",
    "Energizes or calms the body",
    "Enhances overall sense of well-being",
  ];

  const conditions = [
    "Anxiety",
    "Depression",
    "Sleep disturbances",
    "Fatigue",
    "Chronic pain",
    "Migraines",
    "Mood swings",
    "Low energy levels",
    "Emotional imbalances",
  ];

  return (
    <div className="content">
      <section className="hero">
        <img src={logo} alt="Swasthya Healthcare Centre" className="hero-image" />
      </section>

      <section className="treatment-info">
        <h1>About Swasthya Healthcare Centre</h1>
        <p className="quote">
          <em>
            "Healing is a journey, and at Swasthya, we walk that path with you."
          </em>
        </p>
        <p className="description">
          Swasthya Healthcare Centre is dedicated to promoting holistic health and well-being 
          through a variety of alternative therapies. Our experienced practitioners specialize 
          in treatments such as color therapy, acupuncture, wet cupping therapy, and more, 
          tailored to support your unique health needs. We believe in treating the whole person 
          — mind, body, and spirit — to foster lasting wellness and vitality.
        </p>
      </section>

      <section className="color-therapy-effects">
        <h2>Benefits of Color Therapy</h2>
        <ul className="effect-list">
          {effects.map((effect, index) => (
            <li key={index} className="effect-item">
              {effect}
            </li>
          ))}
        </ul>
      </section>

      <section className="color-therapy-conditions">
        <h2>What Can Color Therapy Help With?</h2>
        <div className="conditions-grid">
          {conditions.map((condition, index) => (
            <div key={index} className="condition-item">
              {condition}
            </div>
          ))}
        </div>
      </section>

      <section className="faq">
        <h2>Frequently Asked Questions</h2>
        <details className="faq-item">
          <summary>How Does Color Therapy Work?</summary>
          <p>
            Color therapy works by exposing individuals to specific colors, either through 
            colored lights, visualization, or wearing certain colors. Each color is believed 
            to interact with the body’s energy centers, or chakras, to support healing and 
            balance.
          </p>
        </details>
        <details className="faq-item">
          <summary>Is Color Therapy Safe?</summary>
          <p>
            Yes, color therapy is a non-invasive and generally safe practice. It’s often used 
            as a complementary approach and can be integrated with other healing practices.
          </p>
        </details>
      </section>

      <section className="contact-info">
        <h2>Contact Us</h2>
        <p>
          If you are interested in learning more about our treatments or scheduling a session, 
          please reach out to us at <a href="mailto:info@swasthyacentre.com">info@swasthyacentre.com</a> 
          or call us at (123) 456-7890. We look forward to supporting you on your wellness journey!
        </p>
      </section>
    </div>
  );
};

export default Content;
