import React from "react";
import "./treatment.css";
import scalp from "./images/scalp.jpg";

const Content = () => {
  const effects = [
    "Pain Relief",
    "Improved Brain Function",
    "Promotes Relaxation",
    "Improved Circulation",
    "Treatment for Neurological Disorders",
    "Relieves Insomnia",
    "Supports Mental Clarity",
    "Promotes Hair Growth",
    "Balances Hormones",
  ];

  const conditions = [
    "Chronic Pain",
    "Neurological Disorders",
    "Stress and Anxiety",
    "Sleep Disorders",
    "Memory issues",
    "Concentration",
    "Hair Loss and Thinning",
    "Hormonal Imbalances",
    "Improved Circulation",
    "Stroke Rehabilitation",
  ];

  return (
    <div className="content">
      <section className="hero">
        <img src={scalp} alt="Acupressure therapy" className="hero-image" />
      </section>

      <section className="treatment-info">
        <h1>Scalp Acupuncture</h1>
        <p className="description">
          Scalp acupuncture is another specialized acupuncture technique that
          targets functional zones, such as sensory, memory, and motor. It is
          effective in treating disorders of the central nervous system and
          various acute and chronic pain syndromes, such as cerebral injury,
          stroke, hemiplegia, aphasia, senile dementia, Parkinson0„30…4s and
          other brain disorders. Studies have shown that scalp acupuncture has
          been able to significantly relieve the severe burning pain which
          people with multiple sclerosis (MS), spinal cord injury (SCI),
          amyotrophic lateral sclerosis (ALS), and head injury often suffers
          from.
        </p>
      </section>

      <section className="acupuncture-effects">
        <h2>Benefits of Scalp Acupuncture</h2>
        <ul className="effect-list">
          {effects.map((effect, index) => (
            <li key={index} className="effect-item">
              {effect}
            </li>
          ))}
        </ul>
      </section>

      <section className="acupuncture-conditions">
        <h2>What Can Scalp Acupuncture Help With?</h2>
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
          <summary>Does scalp acupuncture hurt?</summary>
          <p>
            Generally, scalp acupuncture is painless or causes minimal
            discomfort. You may feel a mild tingling or pressure during the
            session, but it should not be painful.
          </p>
        </details>
        <details className="faq-item">
          <summary>How many sessions of scalp acupuncture are needed?</summary>
          <p>
             The number of
            sessions varies depending on the condition and individual response,
            but most people begin to see results after 5–10 sessions.
          </p>
        </details>
      </section>
    </div>
  );
};

export default Content;
