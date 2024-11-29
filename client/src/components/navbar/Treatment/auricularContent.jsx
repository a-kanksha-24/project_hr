import React from "react";
import "./treatment.css";
import auricular from "./images/auricular.jpg";

const Content = () => {
  const effects = [
    "Pain relief",
    "Relaxation and stress reduction",
    "Improved Sleep Quality",
    "Enhanced Emotional Balance",
    "Addiction Management",
    "Digestive Support",
    "Boosted Immune Function",
    "Reduced Inflammation",
  ];

  const conditions = [
    "chronic pain",
    "Stress and Anxiety",
    "Fatigue",
    "insomnia",
    "depression",
    "emotional imbalances",
    "bloating",
    "constipation",
    "Inflammation",
    "Circulation Problems",
  ];

  return (
    <div className="content">
      <section className="hero">
        <img src={auricular} alt="Acupressure therapy" className="hero-image" />
      </section>

      <section className="treatment-info">
        <h1>Auricular Acupuncture</h1>

        <p className="description">
          Auricular acupuncture was developed by a French physician named Dr
          Nogier in the early 1950s, after he noticed recent scars on the ear of
          one of this patient who had been successfully treated for sciatic
          pain. From that observation emerged the concept of the ear being a
          unique micro system of our body’s functions which could be used as a
          tool for the diagnosis, prevention and treatment of human illnesses.
        </p>
      </section>

      <section className="acupuncture-effects">
        <h2>Effects of Auricular Acupuncture</h2>
        <ul className="effect-list">
          {effects.map((effect, index) => (
            <li key={index} className="effect-item">
              {effect}
            </li>
          ))}
        </ul>
      </section>

      <section className="acupuncture-conditions">
        <h2>What Can Auricular Acupuncture Help With?</h2>
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
          <summary>How does auricular acupuncture work?</summary>
          <p>
            It works by stimulating specific points on the ear that are
            connected to different organs and systems in the body, promoting
            balance and healing.
          </p>
        </details>
        <details className="faq-item">
          <summary>Is auricular acupuncture safe?</summary>
          <p>
             Yes, when performed by a trained
            practitioner, auricular acupuncture is considered safe. It is
            non-invasive and has few side effects.
          </p>
        </details>
      </section>
    </div>
  );
};

export default Content;
