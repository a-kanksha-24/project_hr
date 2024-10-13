import React from 'react';
// import './CardComponent.css';

const CardComponent = ({ img }) => {
    return (
        <div className="card-container">
            <div className="main-card" style={{ backgroundImage: `url(${img})` }}>
                <div className="overlay-card">
                    <h3>Overlay Card</h3>
                    <p>This is the smaller card centered on top.</p>
                </div>
                <div className="main-content">
                    <h2>Main Card</h2>
                    <p>This is the main card content.</p>
                </div>
            </div>
        </div>
    );
};

export default CardComponent;
