import React from "react";
import "./treatment.css";
import guasha from "./images/guasha.webp";

const Content = () => {
  const effects = [
    "Improves Blood Circulation",
    "Reduces Puffiness and Inflammation",
    "Relieves Muscle Tension",
    "Promotes Skin Elasticity",
    "Enhances Absorption of Skincare Products",
    "Reduces Fine Lines and Wrinkles",
  ];

  const conditions = [
    "Puffiness",
    "Skin Tone and Texture",
    "Muscle Tension",
    "Fine Lines",
    "Collagen Production",
    "Congestion",
    "Headaches",
    "Jaw Tension",
  ];

  return (
    <div className="content">
      <section className="hero">
        <img src={guasha} alt="Acupressure therapy" className="hero-image" />
      </section>

      <section className="treatment-info">
        <h1>Guasha</h1>
        <p className="description">
          Gua sha, a massage technique where a specialized tool applies pressure
          to the skin, is becoming increasingly popular thanks to social media.
          On Tiktok, for example, the gua sha hashtag has accumulated almost 660
          million views so far. Gua sha's boost in popularity is thanks to its
          supposed ability to improve blood circulation and reduce puffiness in
          the face. Hence, the name gua sha where "gua" means to scrape, while
          "sha" means sand, referring to the red spots that occasionally appear
          on the skin afterward.
        </p>
      </section>

      <section className="acupuncture-effects">
        <h2>Benefits of Guasha</h2>
        <ul className="effect-list">
          {effects.map((effect, index) => (
            <li key={index} className="effect-item">
              {effect}
            </li>
          ))}
        </ul>
      </section>

      <section className="acupuncture-conditions">
        <h2>What Can Gausha Help With?</h2>
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
          <summary>Can gua sha cause bruising?</summary>
          <p>
             Facial gua sha typically doesn’t cause
            bruising if done gently. Body gua sha can result in temporary
            redness or marks.
          </p>
        </details>
        <details className="faq-item">
          <summary>How long does a gua sha session take?</summary>
          <p>
          A typical session lasts 5–10 minutes for the face or longer for the body.
          </p>
        </details>
      </section>
    </div>
  );
};

export default Content;
