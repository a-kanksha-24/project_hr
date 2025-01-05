import React from "react";
import "./about.css";
import logo from "../Treatment/images/swasthya.jpg";

const Content = () => {
  const effects = [
    "Promotes relaxation and stress reduction",
    "Boosts mood and emotional balance",
    "Improves mental clarity and focus",
    "Supports physical healing",
    "Balances the body's energy flow",
    "Enhances overall sense of well-being",
  ];

  const conditions = [
    "Anxiety",
    "Depression",
    "Sleep disturbances",
    "Fatigue",
    "Chronic pain",
    "Migraines",
    "Mood swings",
    "Low energy levels",
    "Emotional imbalances",
  ];

  return (
    <div className="content">
      <section className="hero">
        <img src={logo} alt="Swasthya Healthcare Centre" className="hero-image" />
      </section>

      <section className="treatment-info">
        <h1>About Swasthya Healthcare Centre</h1>
        <p className="quote">
          <em>
            "Healing is a journey, and at Swasthya, we walk that path with you naturally and holistically."
          </em>
        </p>
        <p className="description">
          Swasthya Healthcare Centre is committed to holistic health and healing through a comprehensive approach to natural therapies. Our expert practitioners offer a range of treatments including pulse diagnosis, acupuncture, acupressure, color therapy, seed therapy, wet cupping therapy, and personalized diet and nutrition plans. We believe in treating each individual as a whole, addressing mind, body, and spirit to help you achieve balance, wellness, and vitality.
        </p>
      </section>

      <section className="color-therapy-effects">
        <h2>Benefits of Our Therapies</h2>
        <ul className="effect-list">
          {effects.map((effect, index) => (
            <li key={index} className="effect-item">
              {effect}
            </li>
          ))}
        </ul>
      </section>

      <section className="color-therapy-conditions">
        <h2>Conditions We Help Manage</h2>
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
          <summary>What is Pulse Diagnosis?</summary>
          <p>
            Pulse diagnosis is a traditional method used to assess an individual’s health by examining the pulse at specific points. Our practitioners use this to understand imbalances and tailor treatments accordingly.
          </p>
        </details>
        <details className="faq-item">
          <summary>How Does Color Therapy Work?</summary>
          <p>
            Color therapy involves using specific colors to influence the body's energy centers, or chakras. This therapy aims to promote healing and balance by using colors that align with each individual’s needs.
          </p>
        </details>
        <details className="faq-item">
          <summary>Is Cupping Therapy Safe?</summary>
          <p>
            Yes, cupping therapy is a safe and effective practice when performed by trained practitioners. It helps improve blood flow, relieve pain, and detoxify the body.
          </p>
        </details>
        <details className="faq-item">
          <summary>Can Diet and Nutrition Help in Recovery?</summary>
          <p>
            Absolutely. Our experts provide personalized diet and nutrition advice to support each treatment plan, helping to restore and maintain optimal health.
          </p>
        </details>
      </section>

      <section className="contact-info">
        <h2>Contact Us</h2>
        <p>
          To learn more about our therapies or to book a session, please reach out to us at <a href="mailto:swastyahealthcarecentres@gmail.com">swastyahealthcarecentres@gmail.com</a> or call us at +919619355569

. Let us support you on your journey to natural health and wellness!
        </p>
      </section>
    </div>
  );
};

export default Content;
