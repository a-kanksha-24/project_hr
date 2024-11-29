import React from 'react';
import './sidebar.css';
import { Link } from "react-router-dom";

const Sidebar = () => {
  const treatments = [
    'Acupuncture',
    'Acupressure',
    'Pulse Diagnosis',
    'Dry Cupping',
    'Fire Cupping',
    'Wet Cupping',
    'Sujok',
    'Aroma Therapy',
    'Seed Therapy',
    'Magnet Therapy',
    'Color Therapy',
    'Diet and Nutrision',
    'Guasha',
    'Auricular Acupuncture',
    'Scalp Acupuncture',
    'Face Cupping',
    'Reflexology',
    'Massage'
  ];

  return (
    <div className="sidebar">
      <h2>Our Treatments</h2>
      <ul>
        {treatments.map((treatment, index) => (
          <li key={index}><Link className='side' to={"/"+treatment}>{treatment}</Link></li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
