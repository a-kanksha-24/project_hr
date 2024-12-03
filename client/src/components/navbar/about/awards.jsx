import React from 'react';
import body from './certificate/bodytoning.jpg';
import yogaInstructor from './certificate/yogainstructor.jpg';
import acupuncture from './certificate/acupuncture_eligibility.jpg'

const Awards = () => {
  // List of certificates
  const certificates = [
    {
      id: 1,
      title: 'Certificate of Excellence',
      year: 2019,
      description: 'Awarded by Indian Institute of cosmetology cricology and nutrision pvt ltd.',
      image: body, // Corrected import reference
    },
    {
      id: 2,
      title: 'Certified Yoga Instructor',
      year: 2022,
      description: 'Recognized by NCVET',
      image: yogaInstructor, // Ensure this path is valid
    },
    {
      id: 3,
      title: 'Eligibility Certificate',
      year: 2021,
      description: 'Certified by Maharastra council of Acupuncture',
      image: acupuncture, // Ensure this path is valid
    },
  ];

  return (
    <div className="about_awards">
      <h1 className='heading'>Certificates</h1>
      <div className="certificates-container">
        {certificates.map((certificate) => (
          <div key={certificate.id} className="certificate">
            <img
              src={certificate.image}
              alt={certificate.title}
              className="certificate-image"
            />
            <h3>{certificate.title}</h3>
            <p>
              <strong>Year:</strong> {certificate.year}
            </p>
            <p>
              <strong>Description:</strong> {certificate.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Awards;
