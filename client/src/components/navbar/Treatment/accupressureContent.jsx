import React from "react";
import "./cuppingtherapy.css";
import accupressure from "./images/accupressure.webp";

const Content = () => {
  const effects = [
    "Analgesic",
    "Sedation",
    "Homeostatic or regulatory",
    "Immune enhancing",
    "Anti-inflammatory and anti-allergic",
    "Hastens the motor recovery",
  ];

  const conditions = [
    "Headache / Migraine",
    "Paralysis",
    "Depression",
    "Asthma",
    "Nausea, Vomiting, and Morning sickness",
    "Hair loss",
    "Hormonal imbalance",
    "Arthritis",
    "Tinnitus",
  ];

  return (
    <div className="content">
      <section className="hero">
        <img src={accupressure} alt="Acupuncture Needles" className="hero-image" />
      </section>

      <section className="treatment-info">
        <h1>Acupuncture</h1>
        <p className="quote">
          <em>
            "Your body knows how to heal, the needles just help it remember"
          </em>
        </p>
        <p className="description">
          The theory and practice of acupuncture originated in China. The
          tradition of acupuncture believes that energyflows within the human
          body and this energy can be channelized to create balance and health.
          This energy flow is called QI. This QI moves throughout the body,
          along 12 main channels known as meridians. These meridians represent
          the major organs and functions of the body. In the healthy state the
          vital energy flows normally, Interruption in the flow of this vital
          energy causes disease. These meridians and energy flow are accessible
          through acupuncture points in the body. Acupuncture points are seen as
          places where nerves, muscles, and connective tissue can be stimulated.
          The stimulation increases blood flow, while at the same time
          triggering the activity of the body’s natural painkillers. it is the
          safest, effective and a gentle way of treating various ailments.
          Although it is associated with pain control, it has a much broader
          application.
        </p>
      </section>

      <section className="acupuncture-effects">
        <h2>Acupuncture Effect</h2>
        <ul className="effect-list">
          {effects.map((effect, index) => (
            <li key={index} className="effect-item">
              {effect}
            </li>
          ))}
        </ul>
      </section>

      <section className="acupuncture-conditions">
        <h2>What Can Acupuncture Treat?</h2>
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
          <summary>Are The Needles Painful?</summary>
          <p>
            No, acupuncture needles are very thin, and most people feel little
            to no pain.
          </p>
        </details>
        <details className="faq-item">
          <summary>Are There Standards For Acupuncture Needles?</summary>
          <p>Yes, acupuncture needles are regulated for safety and quality.</p>
        </details>
      </section>
    </div>
  );
};

export default Content;
