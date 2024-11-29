import React from "react";
import "./treatment.css";
import massage from "./images/massage.jpg";

const Content = () => {
  const effects = [
    "Stress Relief",
    "Pain Management",
    "Improved Circulation",
    "Reduced Muscle Tension",
    "Improved Sleep",
    "Increased Range of Motion",
    "Detoxification",
    "Reduced Anxiety and Depression",
    "Improved Immune Function",
  ];

  const conditions = [
    "Chronic Pain",
    "Stress and Anxiety",
    "Muscle Tension",
    "Poor Circulation",
    "Post-Surgery Recovery",
    "Mood Disorders",
    "Sports Injury",
    "Digestive Issues",
    "Detoxification",
  ];

  return (
    <div className="content">
      <section className="hero">
        <img src={massage} alt="Acupressure therapy" className="hero-image" />
      </section>

      <section className="treatment-info">
        <h1>Massage</h1>
        <p className="description">
          Massage is the manipulation of the body’s soft tissues—muscles,
          tendons, ligaments, and fascia—using various techniques such as
          pressing, kneading, rubbing, and tapping. It is commonly used to relax
          the body, reduce muscle tension, and promote overall well-being.
        </p>
      </section>

      <section className="acupuncture-effects">
        <h2>Benefits of Massage</h2>
        <ul className="effect-list">
          {effects.map((effect, index) => (
            <li key={index} className="effect-item">
              {effect}
            </li>
          ))}
        </ul>
      </section>

      <section className="acupuncture-conditions">
        <h2>What Can Massage Help With?</h2>
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
          <summary>Is massage safe for everyone?</summary>
          <p>
            Massage is generally safe for most people, but it’s important to
            inform your therapist of any medical conditions, injuries, or if you
            are pregnant. Certain conditions, such as blood clots, infections,
            or fractures, may require precautions or avoidance of massage.
          </p>
        </details>
        <details className="faq-item">
          <summary>How long does a massage session last?</summary>
          <p>
             Sessions typically last
            between 30 to 90 minutes, depending on the type of massage and your
            individual needs.
          </p>
        </details>
      </section>
    </div>
  );
};

export default Content;
