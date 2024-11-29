import React from "react";
import "./treatment.css";
import face from "./images/face.webp";

const Content = () => {
  const effects = [
    "Improved Blood Circulation",
    "Enhanced Lymphatic Drainage",
    "Boosted Collagen Production",
    "Relaxation of Facial Muscles",
    "Improved Skin Texture",
    "Temporary Tightening and Plumping",
  ];

  const conditions = [
    "Swelling",
    "Skin Elasticity",
    "Wrinkles",
    "Skin Tone",
    "Muscle Tension in the Face",
    "Lymphatic Drainage",
    "Blood Circulation",
    "Hyperpigmentation",
    "Sinus Congestion and Headaches",
    "Stress Reduction",
  ];

  return (
    <div className="content">
      <section className="hero">
        <img src={face} alt="Acupressure therapy" className="hero-image" />
      </section>

      <section className="treatment-info">
        <h1>Face Cupping</h1>
        <p className="description">
          Facial cupping is an age-old beauty regimen in which small suction
          cups are placed on the skin, creating a vacuum-like effect that
          increases blood circulation. The primary goal? To promote healthier
          skin, reduce the appearance of fine lines, and give you that natural
          glow. It's like a mini spa retreat for your face!
        </p>
      </section>

      <section className="acupuncture-effects">
        <h2>Benefits of Face Cupping</h2>
        <ul className="effect-list">
          {effects.map((effect, index) => (
            <li key={index} className="effect-item">
              {effect}
            </li>
          ))}
        </ul>
      </section>

      <section className="acupuncture-conditions">
        <h2>What Can Face Cupping Help With?</h2>
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
          <summary> Does face cupping hurt?</summary>
          <p>
            No, face cupping is painless when done correctly. The suction is
            light and designed for delicate facial skin.
          </p>
        </details>
        <details className="faq-item">
          <summary>Is face cupping safe for everyone?</summary>
          <p>
             While generally safe, it’s not
            recommended for people with broken skin, active acne, rosacea, or
            certain medical conditions.
          </p>
        </details>
      </section>
    </div>
  );
};

export default Content;
