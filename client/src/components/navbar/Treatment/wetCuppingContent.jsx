import React from "react";
import "./wetCupping.css";
import wet from "./images/wetcupping.jpg";

const Content = () => {
  const effects = [
    "Pain relief",
    "Reduction of inflammation",
    "Improvement of blood circulation",
    "Detoxification",
    "Muscle relaxation",
    "Boosts immune function",
  ];

  const conditions = [
    "Chronic pain",
    "Migraines and headaches",
    "Arthritis",
    "Muscle stiffness",
    "Respiratory conditions",
    "Skin conditions (e.g., eczema, acne)",
    "Fatigue",
    "Stress and anxiety",
    "Digestive issues",
  ];

  return (
    <div className="content">
      <section className="hero">
        <img src={wet} alt="Wet Cupping Therapy" className="hero-image" />
      </section>

      <section className="treatment-info">
        <h1>Wet Cupping Therapy</h1>
        <p className="quote">
          <em>
            "Sometimes the best therapy is a little suction."
          </em>
        </p>
        <p className="description">
          Wet cupping, also known as hijama, is a traditional therapy that involves creating suction on the skin using cups and then making small incisions to draw out a small amount of blood. This method is believed to help eliminate toxins, improve circulation, and promote healing in the body. Wet cupping has been practiced for centuries and is thought to relieve pain and inflammation, enhance physical and mental well-being, and restore balance to the body's energy flow.
        </p>
      </section>

      <section className="wet-cupping-effects">
        <h2>Effects of Wet Cupping Therapy</h2>
        <ul className="effect-list">
          {effects.map((effect, index) => (
            <li key={index} className="effect-item">
              {effect}
            </li>
          ))}
        </ul>
      </section>

      <section className="wet-cupping-conditions">
        <h2>What Can Wet Cupping Treat?</h2>
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
          <summary>Does Wet Cupping Hurt?</summary>
          <p>
            Some people may experience mild discomfort during the procedure, especially with the incisions, but it is generally well-tolerated.
          </p>
        </details>
        <details className="faq-item">
          <summary>How Long Do the Effects Last?</summary>
          <p>
            The effects can vary by individual, but many report lasting relief from pain and tension for several days to weeks.
          </p>
        </details>
        <details className="faq-item">
          <summary>Are There Any Side Effects?</summary>
          <p>
            Common side effects include temporary bruising, soreness, and fatigue. It is advisable to consult with a healthcare provider before undergoing treatment.
          </p>
        </details>
      </section>
    </div>
  );
};

export default Content;
