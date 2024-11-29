import React from "react";
import "./treatment.css";
import magnet from "./images/magnet.jpg";

const Content = () => {
  const effects = [
    "Pain relief",
    "Reduced inflammation",
    "Improved blood circulation",
    "Enhanced healing and recovery",
    "Stress reduction",
    "Boosted immune response",
  ];

  const conditions = [
    "Chronic pain (e.g., arthritis, back pain)",
    "Muscle spasms",
    "Headaches and migraines",
    "Joint disorders",
    "Poor circulation",
    "Fatigue",
    "Sleep disorders",
    "Injuries and post-surgical recovery",
    "Fibromyalgia",
  ];

  return (
    <div className="content">
      <section className="hero">
        <img src={magnet} alt="Magnet Therapy" className="hero-image" />
      </section>

      <section className="treatment-info">
        <h1>Magnet Therapy</h1>
        <p className="quote">
          <em>
            "Harnessing the power of magnetism for healing and wellness."
          </em>
        </p>
        <p className="description">
          Magnet therapy is a form of alternative medicine that utilizes static magnetic fields to promote healing and 
          wellness. Practitioners believe that magnetic fields can affect the body's energy flow, enhancing circulation, 
          reducing inflammation, and alleviating pain. This therapy is non-invasive and often involves placing magnets 
          on specific areas of the body. Users may experience benefits for various ailments, including chronic pain, 
          muscle tension, and even stress relief. Although scientific evidence on its efficacy varies, many find 
          magnet therapy to be a complementary approach to traditional medical treatments.
        </p>
      </section>

      <section className="acupuncture-effects">
        <h2>Benefits of Magnet Therapy</h2>
        <ul className="effect-list">
          {effects.map((effect, index) => (
            <li key={index} className="effect-item">
              {effect}
            </li>
          ))}
        </ul>
      </section>

      <section className="acupuncture-conditions">
        <h2>What Can Magnet Therapy Treat?</h2>
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
          <summary>Is Magnet Therapy Safe?</summary>
          <p>
            Yes, magnet therapy is generally considered safe when used appropriately. However, individuals with 
            pacemakers or certain medical devices should consult their doctor before using magnets.
          </p>
        </details>
        <details className="faq-item">
          <summary>How Long Does It Take to See Results?</summary>
          <p>
            Results may vary based on individual circumstances and the condition being treated. Some people report 
            improvements after a few sessions, while others may take longer to notice changes.
          </p>
        </details>
        <details className="faq-item">
          <summary>Can Anyone Use Magnet Therapy?</summary>
          <p>
            While magnet therapy is safe for most individuals, it is advisable for pregnant women and those with 
            medical implants to consult a healthcare professional before starting treatment.
          </p>
        </details>
      </section>
    </div>
  );
};

export default Content;
