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
            Acupuncture in Mumbai | Acupressure in Mumbai | Moxibustion | Colon Hydrotherapy | Scalp Acupuncture | Cupping |
            Wet Cupping | Fire Cupping | Point Injection Therapy | Superficial heat & cold therapy | Cosmetic Acupuncture |
            Physiotherapy | Acupressure for Kid | Cryotherapy | Naturopathy | Ozone Therapy | Chelation Therapy |
            Yoga & Diet Therapy | Breathing and Relaxation
          </p>
        </div>
        <div className="expert-team">
          <h2>Our Expert Doctor Team</h2>
          <p>
            Hr. Santosh Pandey | Dr. Dinesh K. Rohira | Acupressure Specialists in Mumbai | Acupuncture Center in Mumbai
          </p>
        </div>
        <div className="about">
          <h2>About Swasthya</h2>
          <p>
            Write about Rejua Energy Center
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
