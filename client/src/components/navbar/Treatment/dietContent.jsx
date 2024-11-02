import React from "react";
import "./diet.css";
import balanced from "./images/balanceddiet.png";

const Content = () => {
  const effects = [
    "Boosts energy levels",
    "Supports immune function",
    "Maintains a healthy weight",
    "Enhances mental clarity",
    "Improves digestion",
    "Reduces risk of chronic diseases",
  ];

  const conditions = [
    "High blood pressure",
    "Diabetes",
    "Obesity",
    "Heart disease",
    "Digestive issues",
    "Anemia",
    "Bone health",
    "Fatigue",
    "Mood swings",
  ];

  return (
    <div className="content">
      <section className="hero">
        <img src={balanced} alt="Balanced Diet" className="hero-image" />
      </section>

      <section className="treatment-info">
        <h1>Diet and Nutrition</h1>
        <p className="quote">
          <em>
            "Let food be thy medicine and medicine be thy food."
          </em>
        </p>
        <p className="description">
          A balanced diet is crucial for maintaining good health and wellbeing. It provides the body with essential 
          nutrients—vitamins, minerals, protein, healthy fats, and carbohydrates—that are necessary for energy, 
          cellular repair, and overall functioning. Proper nutrition can not only improve physical health but also 
          has a profound impact on mental clarity and emotional balance. A healthy diet includes a variety of foods 
          from all food groups, emphasizing fruits, vegetables, lean proteins, whole grains, and healthy fats.
          Adopting good dietary habits can help prevent and manage a range of chronic diseases and promote a 
          long and healthy life.
        </p>
      </section>

      <section className="nutrition-effects">
        <h2>Benefits of a Balanced Diet</h2>
        <ul className="effect-list">
          {effects.map((effect, index) => (
            <li key={index} className="effect-item">
              {effect}
            </li>
          ))}
        </ul>
      </section>

      <section className="nutrition-conditions">
        <h2>What Can Good Nutrition Help With?</h2>
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
          <summary>What is a balanced diet?</summary>
          <p>
            A balanced diet includes a variety of foods in the right proportions from each food group. It focuses 
            on whole grains, lean proteins, fruits, vegetables, and healthy fats to provide all essential nutrients.
          </p>
        </details>
        <details className="faq-item">
          <summary>How can I maintain a healthy diet on a busy schedule?</summary>
          <p>
            Planning ahead, meal prepping, and choosing whole, nutrient-dense snacks can help maintain a balanced 
            diet even on a busy schedule. Consider easy, healthy options like salads, smoothies, and whole grain wraps.
          </p>
        </details>
        <details className="faq-item">
          <summary>Are supplements necessary if I eat a balanced diet?</summary>
          <p>
            Generally, a well-rounded diet should provide all necessary nutrients. However, supplements may be 
            beneficial for certain individuals, like those with specific deficiencies or dietary restrictions. 
            Consult a healthcare provider for personalized advice.
          </p>
        </details>
      </section>
    </div>
  );
};

export default Content;
