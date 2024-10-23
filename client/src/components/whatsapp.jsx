import React from 'react';
import whatsappIcon from '../assets/whatsappicon.png'; 

const ChatButton = () => {
    // Define the WhatsApp chat URL
    const whatsappLink = "https://wa.me/8299178726?text=Hello!%20I%20need%20help%20with%20your%20service"; // Replace with the correct phone number

    return (
        <div className="chat-button" onClick={() => window.open(whatsappLink, '_blank')}>
            <div className="help-text">
                Need Help? <a href={whatsappLink} target="_blank" rel="noopener noreferrer">Chat with us</a>
            </div>
            <div className="whatsapp-icon">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer"> <img src={whatsappIcon} alt="WhatsApp" /></a>
               
            </div>
        </div>
    );
}

export default ChatButton;
