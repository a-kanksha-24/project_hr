import React from 'react';
import './sidebar.css';

const Sidebar = () => {
  const treatments = [
    'Acupuncture',
    'Accupressure',
    'Cupping Therapy',
    'Fire Cupping',
    'Sujok',
    'Aroma Therapy',
    'Seed Therapy',
    'Magnet Therapy',
    
  ];

  return (
    <div className="sidebar">
      <h2>Our Treatments</h2>
      <ul>
        {treatments.map((treatment, index) => (
          <li key={index}>{treatment}</li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
