import React from "react";
import "./treatment.css";
import reflexology from "./images/reflexology.webp";

const Content = () => {
  const effects = [
    "Stress Reduction",
    "Pain Relief",
    "Improved Circulation",
    "Boosted Energy",
    "Improved Sleep",
    "Digestive Health",
    "Hormonal Balance",
    "Pain Management",
  ];

  const conditions = [
    "Headache / Migraine",
    "Stress and Anxiety",
    "Digestive Issues",
    "Muscle Tension",
    "Improving Circulation",
    "Detoxification",
    "Back Pain",
    "Muscle Tension",
    "Sinus Problems",
  ];

  return (
    <div className="content">
      <section className="hero">
        <img
          src={reflexology}
          alt="Acupressure therapy"
          className="hero-image"
        />
      </section>

      <section className="treatment-info">
        <h1>Reflexology</h1>
        <p className="description">
          Reflexology is a therapeutic practice based on the idea that specific
          points on the feet, hands, and ears correspond to different organs,
          glands, and systems in the body. By applying pressure to these points,
          reflexology aims to promote overall health and wellness.
        </p>
      </section>

      <section className="acupuncture-effects">
        <h2>Benefits of Reflexology</h2>
        <ul className="effect-list">
          {effects.map((effect, index) => (
            <li key={index} className="effect-item">
              {effect}
            </li>
          ))}
        </ul>
      </section>

      <section className="acupuncture-conditions">
        <h2>What Can Reflexology Help With?</h2>
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
          <summary>Is reflexology safe?</summary>
          <p>
            Yes, reflexology is generally safe for most people. However, it’s
            recommended to consult with a healthcare provider if you are
            pregnant, have certain medical conditions, or have foot injuries.
          </p>
        </details>
        <details className="faq-item">
          <summary>How long does a reflexology session last?</summary>
          <p>
             A typical session lasts
            between 30 to 60 minutes, depending on the area being treated and
            the individual’s needs.
          </p>
        </details>
      </section>
    </div>
  );
};

export default Content;
