import React from "react";
import "./firecupping.css";
import fire from "./images/firecupping.webp";

const Content = () => {
  const effects = [
    "Pain relief",
    "Improved blood circulation",
    "Detoxification",
    "Enhanced muscle relaxation",
    "Anti-inflammatory benefits",
    "Boosts immune function",
  ];

  const conditions = [
    "Muscle tension and soreness",
    "Back pain",
    "Respiratory issues (e.g., asthma)",
    "Arthritis",
    "Headaches and migraines",
    "Fatigue",
    "Stress and anxiety",
    "Digestive disorders",
    "Skin conditions",
  ];

  return (
    <div className="content">
      <section className="hero">
        <img src={fire} alt="Fire Cupping Therapy" className="hero-image" />
      </section>

      <section className="treatment-info">
        <h1>Fire Cupping Therapy</h1>
        <p className="quote">
          <em>
            "The warmth of the flame brings deeper healing to the body."
          </em>
        </p>
        <p className="description">
          Fire cupping therapy is an ancient practice rooted in Traditional Chinese Medicine, involving the use of 
          glass or bamboo cups that are heated with fire to create suction on the skin. This process promotes blood 
          flow, releases muscle tension, and supports natural detoxification. The heated cups create a vacuum that 
          draws the skin and underlying tissue into the cup, encouraging blood flow to the affected area, reducing 
          inflammation, and promoting healing. Fire cupping is widely used to relieve pain, reduce stress, and enhance 
          overall physical and mental wellness. It is a safe, effective treatment with applications for various ailments.
        </p>
      </section>

      <section className="cupping-effects">
        <h2>Benefits of Fire Cupping</h2>
        <ul className="effect-list">
          {effects.map((effect, index) => (
            <li key={index} className="effect-item">
              {effect}
            </li>
          ))}
        </ul>
      </section>

      <section className="cupping-conditions">
        <h2>What Can Fire Cupping Help With?</h2>
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
          <summary>Is Fire Cupping Painful?</summary>
          <p>
            Fire cupping typically feels like a gentle pulling or suction sensation. Some people may experience 
            mild discomfort, but it should not be painful.
          </p>
        </details>
        <details className="faq-item">
          <summary>How Long Do The Marks Last?</summary>
          <p>
            The circular marks left by fire cupping usually last a few days to a week. They are a normal part 
            of the therapy and indicate the release of tension and toxins.
          </p>
        </details>
        <details className="faq-item">
          <summary>Are There Any Safety Precautions?</summary>
          <p>
            Yes, fire cupping should be performed by a trained practitioner. Safety measures are taken to 
            ensure the cups are properly heated and applied to avoid burns or excessive suction.
          </p>
        </details>
      </section>
    </div>
  );
};

export default Content;
