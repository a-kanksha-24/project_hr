import React from "react";
import "./treatment.css";
import seed from "./images/seedtherapy.jpg";

const Content = () => {
  const effects = [
    "Analgesic",
    "Sedation",
    "Regulatory and homeostatic",
    "Immune system enhancement",
    "Anti-inflammatory and anti-allergic properties",
    "Promotion of natural healing processes",
  ];

  const conditions = [
    "Stress and anxiety",
    "Chronic pain management",
    "Digestive disorders",
    "Insomnia",
    "Headaches and migraines",
    "Hormonal imbalances",
    "Weight management",
    "Smoking cessation",
    "Addiction support",
  ];

  return (
    <div className="content">
      <section className="hero">
        <img src={seed} alt="Seed Therapy" className="hero-image" />
      </section>

      <section className="treatment-info">
        <h1>Seed Therapy</h1>
        <p className="quote">
          <em>
            "Nature's remedy, guiding the body's energy."
          </em>
        </p>
        <p className="description">
          Seed therapy is a form of alternative medicine that utilizes small seeds, often from the Vaccaria plant, to stimulate acupuncture points on the body. This method is believed to activate the body's healing processes and restore balance by applying pressure to specific points without the use of needles. The seeds are typically adhered to the skin using tape, allowing for continuous stimulation over a period of days. This non-invasive technique is popular for managing various health conditions and improving overall well-being, making it an accessible option for those who may have reservations about traditional acupuncture.
        </p>
      </section>

      <section className="acupuncture-effects">
        <h2>Effects of Seed Therapy</h2>
        <ul className="effect-list">
          {effects.map((effect, index) => (
            <li key={index} className="effect-item">
              {effect}
            </li>
          ))}
        </ul>
      </section>

      <section className="acupuncture-conditions">
        <h2>What Can Seed Therapy Treat?</h2>
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
          <summary>Is Seed Therapy Painful?</summary>
          <p>
            No, seed therapy is a non-invasive technique and is typically painless. The seeds are small and applied gently to the skin.
          </p>
        </details>
        <details className="faq-item">
          <summary>How Long Can the Seeds Stay On?</summary>
          <p>
            The seeds can usually stay on for several days, depending on individual comfort and the recommendations of the practitioner.
          </p>
        </details>
        <details className="faq-item">
          <summary>Is Seed Therapy Suitable for Everyone?</summary>
          <p>
            While generally safe, it’s important to consult with a healthcare provider before starting seed therapy, especially for individuals with certain health conditions or those who are pregnant.
          </p>
        </details>
      </section>
    </div>
  );
};

export default Content;
