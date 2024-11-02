import React from "react";
import "./pulseDiagnosis.css";
import pulse from "./images/pulse.jpg";

const Content = () => {
  const effects = [
    "Enhanced understanding of body health",
    "Identification of imbalances in the body",
    "Guidance for treatment protocols",
    "Improved patient outcomes",
    "Holistic approach to health assessment",
  ];

  const conditions = [
    "Stress and anxiety",
    "Digestive issues",
    "Cardiovascular health",
    "Hormonal imbalances",
    "Chronic fatigue",
    "Sleep disorders",
    "Pain management",
    "Immune system disorders",
    "Metabolic issues",
  ];

  return (
    <div className="content">
      <section className="hero">
        <img src={pulse} alt="Pulse Diagnosis" className="hero-image" />
      </section>

      <section className="treatment-info">
        <h1>Pulse Diagnosis</h1>
        <p className="quote">
          <em>
            "Your body speaks, let us help you listen."
          </em>
        </p>
        <p className="description">
          Pulse diagnosis is a traditional method used in various forms of 
          medicine, particularly in Traditional Chinese Medicine (TCM) and Ayurveda. 
          It involves the practitioner feeling the pulse at various points on the wrist 
          to gain insights into the state of the body’s organs, energy flow, and overall 
          health. By assessing the quality, strength, and rhythm of the pulse, practitioners 
          can identify imbalances and guide treatment approaches. This holistic diagnostic 
          tool helps in understanding not just physical ailments but also emotional and 
          psychological states, leading to a more comprehensive treatment plan.
        </p>
      </section>

      <section className="pulse-effects">
        <h2>Benefits of Pulse Diagnosis</h2>
        <ul className="effect-list">
          {effects.map((effect, index) => (
            <li key={index} className="effect-item">
              {effect}
            </li>
          ))}
        </ul>
      </section>

      <section className="pulse-conditions">
        <h2>What Can Pulse Diagnosis Help With?</h2>
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
          <summary>Is Pulse Diagnosis Accurate?</summary>
          <p>
            While pulse diagnosis is a time-honored practice in traditional medicine, 
            its accuracy can vary based on the practitioner's skill and the individual's 
            health status. It is often used alongside other diagnostic tools for a 
            comprehensive assessment.
          </p>
        </details>
        <details className="faq-item">
          <summary>How Long Does a Pulse Diagnosis Take?</summary>
          <p>
            A pulse diagnosis session typically lasts around 10 to 20 minutes, depending 
            on the practitioner's approach and the complexity of the health issues being 
            assessed.
          </p>
        </details>
        <details className="faq-item">
          <summary>Can Anyone Receive a Pulse Diagnosis?</summary>
          <p>
            Yes, pulse diagnosis is suitable for individuals of all ages and can be 
            a valuable tool for anyone seeking to understand their health better.
          </p>
        </details>
      </section>
    </div>
  );
};

export default Content;
