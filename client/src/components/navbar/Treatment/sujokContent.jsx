import React from "react";
import "./sujok.css";
import sujok from "./images/sujok.jpg";

const Content = () => {
  const effects = [
    "Pain relief",
    "Stress reduction",
    "Homeostatic or regulatory",
    "Enhancement of immune function",
    "Anti-inflammatory and anti-allergic",
    "Promotion of overall well-being",
  ];

  const conditions = [
    "Headaches and migraines",
    "Muscle and joint pain",
    "Stress and anxiety",
    "Digestive issues",
    "Sleep disorders",
    "Skin conditions",
    "Hormonal imbalances",
    "Respiratory problems",
    "Chronic fatigue",
  ];

  return (
    <div className="content">
      <section className="hero">
        <img src={sujok} alt="Sujok Therapy" className="hero-image" />
      </section>

      <section className="treatment-info">
        <h1>Sujok Therapy</h1>
        <p className="quote">
          <em>
            "Healing at your fingertips."
          </em>
        </p>
        <p className="description">
          Sujok therapy is an innovative system of acupuncture and acupressure that focuses on the hands and feet, which are seen as a microcosm of the body. Developed by South Korean scientist Professor Park Jae Woo, this therapy combines traditional Oriental medicine with modern scientific insights to treat various ailments. By applying pressure or stimulating specific points on the hands and feet, practitioners can influence the corresponding areas of the body, promoting healing and balance. Sujok therapy is particularly valued for its simplicity and effectiveness, making it accessible for self-treatment.
        </p>
      </section>

      <section className="sujok-effects">
        <h2>Effects of Sujok Therapy</h2>
        <ul className="effect-list">
          {effects.map((effect, index) => (
            <li key={index} className="effect-item">
              {effect}
            </li>
          ))}
        </ul>
      </section>

      <section className="sujok-conditions">
        <h2>What Can Sujok Therapy Treat?</h2>
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
          <summary>Is Sujok Therapy Painful?</summary>
          <p>
            No, Sujok therapy is generally not painful. While some pressure is applied to the points, it is typically within a comfortable range.
          </p>
        </details>
        <details className="faq-item">
          <summary>Can Anyone Practice Sujok Therapy?</summary>
          <p>
            Yes, Sujok therapy is simple and can be practiced by anyone after basic training, making it an excellent self-care tool.
          </p>
        </details>
        <details className="faq-item">
          <summary>How Long Does a Session Last?</summary>
          <p>
            A typical Sujok therapy session can last anywhere from 20 to 45 minutes, depending on individual needs and the specific conditions being addressed.
          </p>
        </details>
      </section>
    </div>
  );
};

export default Content;
