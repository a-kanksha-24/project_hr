import React from 'react';
import './sidebar.css';

const Sidebar = () => {
  const treatments = [
    'Acupuncture',
    'Moxibustion',
    'Cupping Therapy',
    'Fire Cupping',
    'Scalp Acupuncture',
    'Acufacial Cosmetic Acupuncture',
    'Point Injection Therapy',
    'Paediatric Acupuncture',
    // Add other treatments here...
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
