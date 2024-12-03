// FooterComponent.jsx
import React from 'react';
import facebook from "../assets/facebook.png"
import instagram from "../assets/instagram.jpg"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="services">
          <h2>Our Services</h2>
          <p>
            Acupuncture | Acupressure| Pulse Diagnosis | Aroma Therapy | Dry Cupping Therapy | Magnet Therapy | Fire Cuppng Therapy | Wet Cupping Therapy | Sujok Therapy | Seed Therapy | Color Therapy | Diet Nutrision | Guasha | Auricular Acupuncture | Scalp Acupuncture | Face Cupping | Reflexology | Massage
          </p>
        </div>
        <div className="expert-team">
          <h2>Our Expert Doctor Team</h2>
          <p>
            Hr. Shreyas Joshi | Hr. Swati Joshi | Healthcare Centre in Mumbai
          </p>
        </div>
        <div className="about">
          <h2>About Swasthya</h2>
          <p>
          Swasthya Healthcare Centre is committed to holistic health and healing through a comprehensive approach to natural therapies. Our expert practitioners offer a range of treatments including pulse diagnosis, acupuncture, acupressure, color therapy, seed therapy, wet cupping therapy, and personalized diet and nutrition plans. We believe in treating each individual as a whole, addressing mind, body, and spirit to help you achieve balance, wellness, and vitality.
          </p>
        </div>
        <div className="connect">
          <h2>Connect with us</h2>
          <div>
            <a href="https://www.facebook.com/profile.php?id=61566815707749&mibextid=ZbWKwL
" target="_blank" rel="noopener noreferrer">
              <img src={facebook} alt="facebook" />
            </a>
            <a href="https://www.instagram.com/swasthya_healthcare_centre?igsh=MTB5bHk1aG4ydm41Zg== " target="_blank" rel="noopener noreferrer">
              <img src={instagram} alt="instagram" />
            </a>

          </div>

        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright 2019 - Swasthya - All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
