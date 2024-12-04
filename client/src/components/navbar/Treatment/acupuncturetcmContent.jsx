import React from "react";
import "./treatment.css";
import accupunc from "./images/acupuncturetcm.webp";

const Content = () => {
  const effects = [
    "Restores Qi Flow",
    "Balances Yin and Yang",
    "Regulates Organ Systems",
    "Relieves Pain",
    "RelievesTension",
    "Enhances Emotional Well-Being",
  ];

  const conditions = [
    "Pain Management",
    "Mental and Emotional Health",
    "Women's Health",
    "Digestive Issues",
    "Respiratory Problems",
    "Neurological Disorders",
    "Immune System Support",
    "Cardiovascular Health",
    "Skin Conditions",
    "General Well-Being",
  ];

  return (
    <div className="content">
      <section className="hero">
        <img src={accupunc} alt="Acupuncture Needles" className="hero-image" />
      </section>

      <section className="treatment-info">
        <h1>Acupuncture(TCM)</h1>
        <p className="description">
          Acupuncture is a fundamental practice in Traditional Chinese Medicine
          (TCM) that involves the insertion of thin needles into specific points
          on the body, known as acupoints. This technique is based on the
          concept of balancing the body’s energy flow, or Qi (pronounced
          "chee"), along pathways called meridians.
        </p>
      </section>

      <section className="acupuncture-effects">
        <h2>Acupuncture(TCM) Effect</h2>
        <ul className="effect-list">
          {effects.map((effect, index) => (
            <li key={index} className="effect-item">
              {effect}
            </li>
          ))}
        </ul>
      </section>

      <section className="acupuncture-conditions">
        <h2>What Can Acupuncture(TCM) Treat?</h2>
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
          <summary>How does acupuncture(tcm) work? </summary>
          <p>
            In TCM, acupuncture works by unblocking meridians to balance Qi.
            From a modern perspective, it stimulates nerves, increases blood
            flow, and triggers the release of natural pain-relieving chemicals
            like endorphins.
          </p>
        </details>
        <details className="faq-item">
          <summary>Is acupuncture(tcm) painful??</summary>
          <p>
            {" "}
             Most people feel minimal to no pain during
            acupuncture. Some may experience a slight tingling or pressure
            sensation when the needles are inserted.
          </p>
        </details>
      </section>
    </div>
  );
};

export default Content;
