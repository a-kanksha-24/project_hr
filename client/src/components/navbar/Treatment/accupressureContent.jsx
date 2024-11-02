import React from "react";
import "./cuppingtherapy.css";
import accupressure from "./images/accupressure.webp";

const Content = () => {
  const effects = [
    "Pain relief",
    "Relaxation and stress reduction",
    "Improved circulation",
    "Immune system boost",
    "Reduction of inflammation",
    "Enhanced energy flow",
  ];

  const conditions = [
    "Headache / Migraine",
    "Stress and Anxiety",
    "Digestive Issues",
    "Fatigue",
    "Menstrual Pain",
    "Insomnia",
    "Back Pain",
    "Muscle Tension",
    "Sinus Problems",
  ];

  return (
    <div className="content">
      <section className="hero">
        <img src={accupressure} alt="Acupressure therapy" className="hero-image" />
      </section>

      <section className="treatment-info">
        <h1>Acupressure</h1>
        <p className="quote">
          <em>
            "Your body holds the key to healing; acupressure simply helps unlock it."
          </em>
        </p>
        <p className="description">
          Acupressure is a holistic therapy that involves applying gentle pressure to specific points on the body to promote healing and balance. This technique stimulates the flow of energy, or Qi, helping to relieve pain, reduce stress, and improve overall wellness. By targeting key points, practitioners enhance circulation and support emotional health, making acupressure a safe and effective self-care practice for optimal well-being.
        </p>
      </section>

      <section className="acupuncture-effects">
        <h2>Benefits of Acupressure</h2>
        <ul className="effect-list">
          {effects.map((effect, index) => (
            <li key={index} className="effect-item">
              {effect}
            </li>
          ))}
        </ul>
      </section>

      <section className="acupuncture-conditions">
        <h2>What Can Acupressure Help With?</h2>
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
          <summary>Is Acupressure Painful?</summary>
          <p>
            No, acupressure is usually gentle and non-invasive, and it should not be painful.
            You may feel slight pressure or warmth, but it should be comfortable.
          </p>
        </details>
        <details className="faq-item">
          <summary>Do I Need Special Equipment for Acupressure?</summary>
          <p>
            No special equipment is needed. Acupressure can be done with your hands or a massage
            tool if desired.
          </p>
        </details>
      </section>
    </div>
  );
};

export default Content;
