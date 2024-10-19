import React from 'react';
import imagesData from "../assets/facilities"; // Assuming the correct path for the array of image objects

const CardComponent = () => {
    return (
        <div className="card-container">
            
            {imagesData.map((image) => (
                <div className="main-card" key={image.id}>
                    <img src={image.url} alt={image.title} />
                    <div className="overlay-card">
                        <h3>{image.title}</h3>
                        <p>{image.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CardComponent;
