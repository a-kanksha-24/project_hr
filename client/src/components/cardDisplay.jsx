import React from 'react';
import CardComponent from './cardComponent';
import background from "../assets/natures_project.jpg";
import RequestCallbackForm from './rcallback';

const Facilities = () => {
  return (
    <>
      <div className="background-section">
        <img src={background}></img>
      </div>
      <div className="facilities-section">
        <h1 className="facilities-heading">Our Facilities</h1>
        <div className="animes">
          <CardComponent />
        </div>
      </div>
      <RequestCallbackForm />
    </>
  );
};

export default Facilities;
