import React, { useState } from 'react';
import imagesData from "../assets/facilities"; // Assuming the correct path for the array of image objects

const CardComponent = () => {
    // Initial state to manage the number of images to display
    const [visibleImages, setVisibleImages] = useState(6); // Set an initial number of images to display (e.g., 6)

    // Function to handle "Show More" button click
    const showMoreImages = () => {
        setVisibleImages((prev) => prev + 6); // Increment the number of visible images by 6 (or any number)
    };

    return (
        <div className="card-container">
            {/* Render only the visible images based on the current state */}
            {imagesData.slice(0, visibleImages).map((image) => (
                <div className="main-card" key={image.id}>
                    <img src={image.url} alt={image.title} className="card-image" />
                    <div className="overlay-card">
                        <h3>{image.title}</h3>
                        <p>{image.description}</p>
                        <button className="overlay-show-more-button" onClick={showMoreImages}>
                            Show More
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CardComponent;
