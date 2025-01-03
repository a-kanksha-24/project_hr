import React from 'react';
import './About.css';
import shreyas from '../../../assets/image_shreyas.jpg';
import swati from '../../../assets/image_swati.jpg';

const About = () => {
  const people = [
    {
      name: 'Dt. Swati A. Joshi',
      designation: 'Dietician/Healer',
      image: swati,
      description:
        'Diet and Nutrition, Aroma Oil Expert, Acupuncture, Acupressure, Reflexology, Mudra Expert, Tapping and Exercise Therapy, Cupping, Magnet Therapy.',
    },
    {
      name: 'Hr. Shreyas A. Joshi',
      designation: 'Healer/Therapist',
      image: shreyas,
      description:
        'Nadi Parikshan (Pulse Diagnosis), Acupuncture, SuJok, Acupressure, Magnet Therapy, Seed Therapy, Chromotherapy, Massage Expert, Cupping (Fire/Wet/Dry), Yoga.',
    },
  ];

  return (
    <div className="about-container">
      <h1>Our Team</h1>
      <div className="card-container">
        {people.map((person, index) => (
          <div key={index} className="person-card">
            <img src={person.image} alt={person.name} className="person-image" />
            <h2 className="person-name">{person.name}</h2>
            <p className="person-designation">{person.designation}</p>
            <p className="person-description">{person.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
