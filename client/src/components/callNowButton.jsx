import React from 'react';
import phoneIcon from '../assets/phone.png'; // Path to your phone icon image

const CallButton = () => {
    const phoneNumber = "+919619355569"; // Replace with the actual phone number

    return (
        <a href={`tel:${phoneNumber}`} className="call-button">
            <div className="phone-icon">
                <img src={phoneIcon} alt="Phone Icon" />
            </div>
            <span className="call-text">CALL NOW</span>
        </a>
    );
}

export default CallButton;
