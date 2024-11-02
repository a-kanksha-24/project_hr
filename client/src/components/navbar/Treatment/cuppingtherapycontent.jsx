import React from "react";
import "./cuppingtherapy.css";
import cuppingImage from "./images/cupping.jpg";

const Content = () => {
  const effects = [
    "Improves blood circulation",
    "Relieves muscle tension",
    "Reduces inflammation",
    "Promotes relaxation",
    "Detoxifies the body",
    "Accelerates muscle recovery",
  ];

  const conditions = [
    "Back and neck pain",
    "Muscle soreness",
    "Migraines and headaches",
    "Anxiety and stress",
    "Arthritis",
    "Respiratory issues",
    "Fatigue",
    "Digestive problems",
    "Skin conditions",
  ];

  return (
    <div className="content">
      <section className="hero">
        <img src={cuppingImage} alt="Dry Cupping Therapy" className="hero-image" />
      </section>

      <section className="treatment-info">
        <h1>Dry Cupping Therapy</h1>
        <p className="quote">
          <em>
            "Ancient wisdom for modern healing: relieve tension, improve circulation, and feel renewed."
          </em>
        </p>
        <p className="description">
          Dry cupping therapy is a traditional technique used to promote healing and relieve pain by placing 
          cups on the skin to create suction. This process helps to increase blood flow to targeted areas, 
          reduce muscle tension, and draw out toxins from body tissues. Unlike wet cupping, dry cupping does 
          not involve any incisions or bloodletting, making it a gentler approach that focuses solely on 
          creating suction to stimulate circulation. Widely used for relieving pain and improving energy flow, 
          dry cupping therapy is an effective, non-invasive treatment for a variety of physical and emotional 
          health concerns.
        </p>
      </section>

      <section className="cupping-effects">
        <h2>Benefits of Dry Cupping</h2>
        <ul className="effect-list">
          {effects.map((effect, index) => (
            <li key={index} className="effect-item">
              {effect}
            </li>
          ))}
        </ul>
      </section>

      <section className="cupping-conditions">
        <h2>What Can Dry Cupping Help With?</h2>
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
          <summary>Does Dry Cupping Hurt?</summary>
          <p>
            Generally, dry cupping is not painful, though you may feel a pulling or tightness in the area. 
            Some people find it relaxing, but mild discomfort may occur for those new to cupping.
          </p>
        </details>
        <details className="faq-item">
          <summary>Are There Any Side Effects?</summary>
          <p>
            After cupping, you may see circular marks or mild bruising where the cups were placed. These marks 
            are normal and usually fade within a few days. Other side effects are rare but can include slight 
            skin irritation.
          </p>
        </details>
        <details className="faq-item">
          <summary>How Often Should I Get Cupping Therapy?</summary>
          <p>
            The frequency of sessions depends on your specific needs. Many people benefit from weekly or bi-weekly 
            sessions, especially for chronic issues, while others may only need occasional sessions for maintenance.
          </p>
        </details>
      </section>
    </div>
  );
};

export default Content;
