import React from "react";
import "./treatment.css";
import colorTherapyImage from "./images/colortherapy.jpg";

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
        <img src={colorTherapyImage} alt="Color Therapy Session" className="hero-image" />
      </section>

      <section className="treatment-info">
        <h1>Color Therapy</h1>
        <p className="quote">
          <em>
            "Colors are the smiles of nature. Let them restore your mind and body."
          </em>
        </p>
        <p className="description">
          Color therapy, or chromotherapy, is a holistic healing method that uses colors and light 
          to promote physical, mental, and emotional well-being. Each color in the spectrum has 
          unique properties and energy frequencies that can influence mood, emotions, and health. 
          Practitioners of color therapy believe that different colors have different effects on 
          the body, mind, and spirit. For instance, blue is often used for relaxation and calming 
          the mind, while yellow can boost mood and energy levels. Color therapy is used as a 
          complementary treatment to help with stress relief, emotional balance, and overall wellness.
        </p>
      </section>

      <section className="acupuncture-effects">
        <h2>Benefits of Color Therapy</h2>
        <ul className="effect-list">
          {effects.map((effect, index) => (
            <li key={index} className="effect-item">
              {effect}
            </li>
          ))}
        </ul>
      </section>

      <section className="acupuncture-conditions">
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
    </div>
  );
};

export default Content;
