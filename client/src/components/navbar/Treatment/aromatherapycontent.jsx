import React from "react";
import "./treatment.css";
import aroma from "./images/aroma.webp";

const Content = () => {
  const effects = [
    "Relaxation and stress relief",
    "Mood enhancement",
    "Pain relief",
    "Improved sleep quality",
    "Immune system support",
    "Enhanced respiratory health",
  ];

  const conditions = [
    "Anxiety",
    "Stress",
    "Insomnia",
    "Headaches / Migraines",
    "Digestive issues",
    "Cold and flu symptoms",
    "Fatigue",
    "Muscle soreness",
    "Skin conditions",
  ];

  return (
    <div className="content">
      <section className="hero">
        <img src={aroma} alt="Aromatherapy session" className="hero-image" />
      </section>

      <section className="treatment-info">
        <h1>Aromatherapy</h1>
        <p className="quote">
          <em>
            "Inhale the calm, exhale the stress. Let nature's scents guide you to wellness."
          </em>
        </p>
        <p className="description">
          Aromatherapy is a holistic healing practice that uses natural plant extracts, 
          known as essential oils, to promote physical and emotional well-being. Essential 
          oils are derived from various parts of plants, including flowers, leaves, bark, 
          and roots. Inhaling these oils or applying them to the skin can stimulate the 
          limbic system in the brain, which is responsible for emotions, memories, and 
          certain physiological functions. Aromatherapy is widely used to reduce stress, 
          improve sleep, enhance mood, and support overall wellness. This gentle and 
          natural therapy is valued for its ability to provide a sense of calm, clarity, 
          and healing.
        </p>
      </section>

      <section className="acupuncture-effects">
        <h2>Benefits of Aromatherapy</h2>
        <ul className="effect-list">
          {effects.map((effect, index) => (
            <li key={index} className="effect-item">
              {effect}
            </li>
          ))}
        </ul>
      </section>

      <section className="acupuncture-conditions">
        <h2>What Can Aromatherapy Help With?</h2>
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
          <summary>How Does Aromatherapy Work?</summary>
          <p>
            Aromatherapy works through the inhalation or topical application of 
            essential oils. The aromatic compounds stimulate brain receptors 
            that influence emotions, mood, and even physiological responses.
          </p>
        </details>
        <details className="faq-item">
          <summary>Is Aromatherapy Safe for Everyone?</summary>
          <p>
            Generally, aromatherapy is safe when used correctly. However, 
            people with certain allergies, pregnant women, and those with 
            asthma should consult a healthcare professional before use.
          </p>
        </details>
      </section>
    </div>
  );
};

export default Content;
